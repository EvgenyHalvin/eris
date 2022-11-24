import styles from './table-item.module.css';
import { TEvent } from './types';

type Props = {
  eventItems: TEvent[];
};

export const TableItem = ({ eventItems }: Props) => {
  return (
    <div className={styles.wrap}>
      {eventItems.map((item, index) => {
        return (
          <div key={item.id} className={styles.lineWrap}>
            <div className={styles.eventTypeCell}>
              {index === 0 && item.name}
            </div>

            <div className={styles.eventDetailsCell}>
              {item.details?.details}:{' '}
              {item.details?.values
                ?.map(value =>
                  typeof value === 'object'
                    ? `${value.value} ${value.unit}`
                    : value,
                )
                .join(', ')}
            </div>

            <div className={styles.eventCodeCell}>
              {item.details?.code ?? ''}
            </div>

            <div className={styles.eventDateCell}>{item.date}</div>
          </div>
        );
      })}
    </div>
  );
};
