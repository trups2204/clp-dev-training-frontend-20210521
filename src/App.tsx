import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RootRouter } from './components/RootRouter';

export interface OwnProps {}
interface StateProps {}
interface DispatchProps {}
type Props = StateProps & DispatchProps & OwnProps;

export const AppComponent: FunctionComponent<Props> = (props: Props) => {
  return <RootRouter />;
};

const mapStateToProps = (state): StateProps => ({});

export const App = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps)(AppComponent);
