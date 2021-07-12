import React, { FunctionComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Page } from '../../Page';

export interface OwnProps {}
interface StateProps {}
interface DispatchProps {}
type Props = StateProps & DispatchProps & OwnProps;

const KEY = 'PageNotFound';
const title = 'Page not found';

const PageNotFoundComponent: FunctionComponent<Props> = (props: Props) => {
  return (
    <Page title={title} pageKey={KEY}>
      <h1>Page not found</h1>
      <p>Please check your URL and try again.</p>
    </Page>
  );
};

const mapStateToProps = (state): StateProps => ({});

export const PageNotFound = compose(connect<StateProps, DispatchProps, OwnProps>(mapStateToProps))(
  PageNotFoundComponent
);
