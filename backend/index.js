const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5010;

let sortedEvents = [];
let sortOrderOption;
let sortByOption;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/events', (req, res) => {
  const { page: paginationPage, sortBy, sortOrder } = req.query;
  const data = JSON.parse(fs.readFileSync('./data/events.json'));
  sortByOption = sortBy;
  sortOrderOption = sortOrder;

  sortedEvents = sortEventsByDate(data, sortOrder);
  sortedEvents = sortEventsByAppointmentId(sortedEvents);

  const page = Number(paginationPage);
  const start = (page - 1) * 15;
  const end = page * 15;
  const total = Object.keys(sortedEvents).length;
  const isAccessiblePage = page <= Math.ceil(total / 15);

  let pageEvents = Object.entries(sortedEvents)
    .map(([key, events]) => ({ id: key, name: events[0].name, events }))
    .slice(start, end);

  if (!isAccessiblePage) {
    pageEvents = [];
  }

  res.json({ items: pageEvents, total });
});

app.post('/resources', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/resources.json'));
  const body = req.body;

  let result = [];

  if (body && body.ids) {
    for (const id of body.ids) {
      const found = findById(data, id);

      if (found) {
        result.push(found);
      }
    }
  }

  res.json({ items: result });
});

function findById(array, id) {
  let result;

  for (const item of array) {
    if (item.id === id) {
      result = item;
      break;
    }
  }

  return result;
}

function sortEventsByDate(array, order) {
  let sortedArray = array.sort(function (a, b) {
    const aDate = new Date(a.date);
    const aTimestamp = aDate.getTime();
    const bDate = new Date(b.date);
    const bTimestamp = bDate.getTime();

    const desc = bTimestamp - aTimestamp;
    const asc = aTimestamp - bTimestamp;

    return order === 'DESC' ? desc : asc;
  });

  return sortedArray.map((item) => {
    const { id, resource } = item;
    const resourceId = `${resource}/${id}`;
    return { ...item, resource: resourceId };
  });
}

function getEvent(item) {
  return {
    date: item.date,
    name: item.name,
    resourceId: item.resource,
    id: item.id,
  };
}

function getUniqEventID(date, appointmentId, name) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const uniqEventID = `${day}${month}${year}${name}${appointmentId ?? ''}`;
  return uniqEventID;
}

function sortEventsByAppointmentId(events) {
  const result = {};
  if (!events) {
    return result;
  }

  events.forEach((item) => {
    const { appointmentId, id, date, name } = item;
    const event = getEvent(item);

    if (!id || !event) {
      return;
    }

    const eventDate = new Date(date);
    const uniqEventID = getUniqEventID(eventDate, appointmentId, name);

    if (!result.hasOwnProperty(uniqEventID)) {
      return (result[uniqEventID] = [event]);
    }

    return (result[uniqEventID] = [...result[uniqEventID], event]);
  });

  return result;
}

app.listen(port, () => console.log(`Listening http://localhost:${port}!`));
