import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  pageKey: string;
  title: string;
  children: any;
}

interface OwnProps extends Props {}

const PageComponent: FunctionComponent<OwnProps> = ({ title, pageKey, children }: OwnProps) => (
  <div id={`step-${pageKey}`}>
    <Helmet>
      <title>{`${title} - Example Site`}</title>
      <meta name="description" content="" />
      <link rel="canonical" href="" />
      <meta name="" content="" />
    </Helmet>
    {children}
  </div>
);

export const Page: React.FC<Props> = PageComponent;
