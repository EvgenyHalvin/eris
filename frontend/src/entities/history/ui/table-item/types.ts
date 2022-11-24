import { Resource } from '@shared/api/axios-client';

export type TEvent = {
  name: string;
  resourceId?: string;
  date: string;
  id: string;
  details?: Resource;
};

export type TEventGroup = {
  id: string;
  relatedEvents: TEvent[];
};
