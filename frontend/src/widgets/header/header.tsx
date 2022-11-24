import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

import { CommonButton } from '@shared/ui/atoms';
import { APP_PATHS } from '@shared/config/navigation';

import styles from './header.module.css';

type Props = {
  title?: string;
};

export const Header = ({ title }: Props) => {
  const queryClient = useQueryClient();
  const {
    push,
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    if (pathname !== APP_PATHS.home) {
      queryClient.clear();
    }
  }, [pathname]);

  const onClickHandler = (path: string) => push(path);

  return (
    <div className={styles.wrap}>
      {title && <h1 className={styles.pageTitle}>{title}</h1>}
      <nav className={styles.navbar}>
        <CommonButton
          text="Home"
          isActive={pathname === APP_PATHS.home}
          onClick={() => onClickHandler(APP_PATHS.home)}
        />
        <CommonButton
          text="History"
          isActive={pathname === APP_PATHS.history}
          onClick={() => onClickHandler(APP_PATHS.history)}
        />
      </nav>
    </div>
  );
};
