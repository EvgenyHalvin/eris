import { UIEvent } from 'react';

import { TEventGroup } from '../table-item/types';

export type TTableProps = {
  events: TEventGroup[];
  isEventsLoading: boolean;
  isEventsLoadingError: boolean;
  isResourcesLoading: boolean;
  isResourcesLoadingError: boolean;
  onGetMoreEvents: (e: UIEvent<HTMLDivElement>) => void;
};
