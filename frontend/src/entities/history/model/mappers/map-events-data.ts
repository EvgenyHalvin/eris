import { getEvent } from '@entities/history/libs';
import { TEventGroup } from '@entities/history/ui/table-item/types';
import { EventGroup } from '@shared/api/axios-client';

export const mapEventsData = (events?: EventGroup[]): TEventGroup[] => {
  if (!events) {
    return [];
  }
  return events.map(eventData => ({
    id: eventData.id ?? '',
    relatedEvents: eventData.events
      ? eventData.events.map(event => getEvent(event))
      : [],
  }));
};
