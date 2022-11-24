import { ReactNode } from 'react';

import { Header } from '@widgets/header';

import styles from './page-template.module.css';

type Props = {
  title?: string;
  children?: ReactNode;
};

export const PageTemplate = ({ title, children }: Props) => {
  return (
    <div className={styles.wrap}>
      <Header title={title} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
