import { TEventGroup } from '@entities/history/ui/table-item/types';
import { Resource } from '@shared/api/axios-client';

export const getEventsWithDetails = (
  pageEvents: TEventGroup[],
  resources: Resource[],
): TEventGroup[] => {
  const cutDetailsValues = (details?: Resource) => {
    if (!details) {
      return;
    }
    const { values, ...rest } = details;
    return {
      ...rest,
      values: values?.slice(0, 3),
    };
  };

  return pageEvents.map(({ id, relatedEvents }) => ({
    id,
    relatedEvents: relatedEvents
      .map(event => ({
        ...event,
        details: cutDetailsValues(
          resources.find(resource => resource.id === event.resourceId),
        ),
      }))
      .slice(0, 3),
  }));
};
