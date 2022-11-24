import { PageTemplate } from '@shared/ui/templates';

import styles from './home-page.module.css';

type Props = {};

export const HomePage = ({}: Props) => {
  const pageTitle = 'Home page';
  return <PageTemplate title={pageTitle}></PageTemplate>;
};
