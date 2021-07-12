import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Welcome } from '../pages/Welcome';
import ImageGallery from '../pages/ImageGallery';

import { PageNotFound } from '../pages/PageNotFound';
import { ROUTE_PATHS } from '../../routes';

export interface OwnProps {}
interface StateProps {}
interface DispatchProps {}
type Props = StateProps & DispatchProps & OwnProps;

export const RootRouter: FunctionComponent<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTE_PATHS.welcome} component={Welcome} />
        <Route  path={ROUTE_PATHS.images} component={ImageGallery} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};
