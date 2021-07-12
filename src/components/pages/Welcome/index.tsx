import React, { FunctionComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Page } from '../../Page';

export interface OwnProps {
  stepKey: string;
  heading: boolean;
  beforeForm: boolean;
  afterForm: boolean;
}
interface StateProps {}
interface DispatchProps {}
type Props = StateProps & DispatchProps & OwnProps;

const KEY = 'Welcome';
const title = 'Welcome';

const WelcomeComponent: FunctionComponent<Props> = (props: Props) => {
  return (
    <Page title={title} pageKey={KEY}>
      <h1>Welcome</h1>
      <p>This is an example page.</p>
      <a href="/images">Redirect to Images</a>
    </Page>
  );
};

const mapStateToProps = (state): StateProps => ({});

export const Welcome = compose(connect<StateProps, DispatchProps, OwnProps>(mapStateToProps))(
  WelcomeComponent
);
