import { TEvent } from '@entities/history/ui/table-item/types';
import { ListEvent } from '@shared/api/axios-client';
import { getMMMddyyyy } from '@shared/lib';

export const getEvent = (item: ListEvent): TEvent => {
  return {
    date: item.date ? getMMMddyyyy(new Date(item.date)) : '-',
    name: item.name ?? 'Unknown event',
    resourceId: item.resourceId,
    id: item.id ?? '',
  };
};
