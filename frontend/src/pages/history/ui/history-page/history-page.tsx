import { TTableProps } from '@entities/history/ui/table/types';
import { PageTemplate } from '@shared/ui/templates';
import { Table } from '@entities/history';

export const HistoryPage = (props: TTableProps) => {
  const pageTitle = 'History page';

  return (
    <PageTemplate title={pageTitle}>
      <Table {...props} />
    </PageTemplate>
  );
};
