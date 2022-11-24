import { Fragment } from 'react';

import { Divider } from '@shared/ui';

import { TableItem } from '../table-item';
import styles from './table.module.css';
import { TTableProps } from './types';

export const Table = ({
  events,
  isEventsLoading,
  isEventsLoadingError,
  isResourcesLoading,
  isResourcesLoadingError,
  onGetMoreEvents,
}: TTableProps) => {
  return (
    <div className={styles.wrap} onScroll={onGetMoreEvents}>
      {events.map((event, index) => (
        <Fragment key={event.id}>
          {index !== 0 && <Divider />}
          <TableItem eventItems={event.relatedEvents} />
        </Fragment>
      ))}
    </div>
  );
};
