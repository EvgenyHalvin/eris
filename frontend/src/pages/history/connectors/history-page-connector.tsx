import { useEffect, useState, UIEvent } from 'react';

import {
  getEventsWithDetails,
  getResourcesIds,
  mapEventsData,
  useGetEvents,
  useGetResources,
} from '@entities/history';
import { TEventGroup } from '@entities/history/ui/table-item/types';

import { HistoryPage } from '../ui';

export const HistoryPageConnector = () => {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState<TEventGroup[]>([]);
  const [pageEvents, setPageEvents] = useState<TEventGroup[]>([]);
  const [resourcesIds, setResourcesIds] = useState<string[]>([]);
  const [isNextPageAccessible, setIsNextPageAccessible] = useState(true);

  const {
    data: eventsData,
    isFetching: isEventsLoading,
    isError: isEventsLoadingError,
  } = useGetEvents({ page, isAccessible: isNextPageAccessible });

  const {
    data: resourcesData,
    isFetching: isResourcesLoading,
    isError: isResourcesLoadingError,
  } = useGetResources({ ids: resourcesIds });

  useEffect(() => {
    if (eventsData?.data) {
      const { items, total } = eventsData.data;
      const pageEvents = mapEventsData(items);
      setPageEvents(pageEvents);
      setResourcesIds(getResourcesIds(pageEvents));
      if (total) {
        setIsNextPageAccessible(total > 15 * page);
      }
    }
  }, [eventsData, page]);

  useEffect(() => {
    if (resourcesData?.data.items) {
      const pageEventsWithDetails = getEventsWithDetails(
        pageEvents,
        resourcesData.data.items,
      );
      setEvents(prev => [...prev, ...pageEventsWithDetails]);
    }
  }, [pageEvents, resourcesData]);

  const getMoreEvents = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, offsetHeight, scrollHeight } = e.currentTarget;
    const isNeedGetMore = scrollTop + offsetHeight >= Math.floor(scrollHeight);
    if (isNeedGetMore) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <HistoryPage
      events={events}
      isEventsLoading={isEventsLoading}
      isEventsLoadingError={isEventsLoadingError}
      isResourcesLoading={isResourcesLoading}
      isResourcesLoadingError={isResourcesLoadingError}
      onGetMoreEvents={getMoreEvents}
    />
  );
};
