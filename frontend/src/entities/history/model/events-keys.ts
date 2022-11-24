import { TUseGetEventsArgs } from './hooks/use-get-events';
import { TUseGetResourcesArgs } from './hooks/use-get-resources';

export const EVENTS_KEYS = {
  all: ['events'],
  list: ({
    page,
    sortBy,
    sortOrder,
  }: Omit<TUseGetEventsArgs, 'isAccessible'>) => [
    ...EVENTS_KEYS.all,
    'list',
    `page:${page}`,
    `sortBy:${sortBy}`,
    `sortOrder:${sortOrder}`,
  ],
  resources: ({ ids }: TUseGetResourcesArgs) => [
    ...EVENTS_KEYS.all,
    'resources',
    `ids:${ids}`,
  ],
};
