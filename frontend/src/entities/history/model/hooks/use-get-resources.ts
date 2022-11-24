import { useQuery } from 'react-query';

import { erisApi } from '@shared/api/eris-api';

import { EVENTS_KEYS } from '../events-keys';

export type TUseGetResourcesArgs = {
  ids: string[];
};

export const useGetResources = ({ ids }: TUseGetResourcesArgs) => {
  return useQuery(
    EVENTS_KEYS.resources({ ids }),
    () => erisApi.postResources({ resourcesPayload: { ids } }),
    {
      enabled: ids.length !== 0,
    },
  );
};
