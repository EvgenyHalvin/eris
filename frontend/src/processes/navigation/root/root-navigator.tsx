import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import { APP_PATHS } from '@shared/config/navigation';
import { NotFoundPage } from '@pages/not-found';
import { HomePageConnector } from '@pages/home';
import { HistoryPageConnector } from '@pages/history';

export const RootNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={APP_PATHS.home} />
        </Route>

        <Route path={APP_PATHS.home}>
          <HomePageConnector />
        </Route>

        <Route path={APP_PATHS.history}>
          <HistoryPageConnector />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};
