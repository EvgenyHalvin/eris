import styles from './divider.module.css';

type Props = {
  direction?: 'horizontal' | 'vertical';
};

export const Divider = ({ direction = 'horizontal' }: Props) => {
  const divider =
    direction === 'horizontal' ? styles.horizontal : styles.vertical;

  return <div className={divider} />;
};
