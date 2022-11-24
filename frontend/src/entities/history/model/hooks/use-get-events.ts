import { ErisApiPostEventsRequest } from '@shared/api/axios-client';
import { erisApi } from '@shared/api/eris-api';
import { useQuery } from 'react-query';

import { EVENTS_KEYS } from '../events-keys';

export type TUseGetEventsArgs = {
  page: number;
  sortBy?: ErisApiPostEventsRequest['sortBy'];
  sortOrder?: ErisApiPostEventsRequest['sortOrder'];
  isAccessible?: boolean;
};

export const useGetEvents = ({
  page,
  sortBy = 'DATE',
  sortOrder = 'DESC',
  isAccessible,
}: TUseGetEventsArgs) => {
  return useQuery(
    EVENTS_KEYS.list({ page, sortBy, sortOrder }),
    () => erisApi.postEvents({ page, sortBy, sortOrder }),
    {
      enabled: isAccessible,
    },
  );
};
