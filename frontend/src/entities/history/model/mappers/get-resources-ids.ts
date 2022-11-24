import { TEventGroup } from '@entities/history/ui/table-item/types';

export const getResourcesIds = (arr: TEventGroup[]): string[] => {
  const details = arr.reduce((acc, item) => {
    return [...acc, ...item.relatedEvents.map(event => event.resourceId ?? '')];
  }, [] as string[]);
  return details.filter(detail => detail !== '');
};
