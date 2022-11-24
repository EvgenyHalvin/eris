import { useHistory } from 'react-router';

import { APP_PATHS } from '@shared/config/navigation';
import { CommonButton, PageTemplate } from '@shared/ui';

import styles from './not-found-page.module.css';

type Props = {};

export const NotFoundPage = ({}: Props) => {
  const { push } = useHistory();

  const buttonText = 'Go to Home page';
  const pageTitle = 'Not found page';

  return (
    <PageTemplate title={pageTitle}>
      <div className={styles.content}>
        <p className={styles.message}>
          Page not found. Click on the button below to go to the main page.
        </p>
        <div className={styles.buttonWrap}>
          <CommonButton
            fontSizeVariant="large"
            isActive
            text={buttonText}
            onClick={() => push(APP_PATHS.home)}
          />
        </div>
      </div>
    </PageTemplate>
  );
};
