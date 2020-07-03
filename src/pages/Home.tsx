import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { PlainHeader } from '~/components/common/header';
import { Page } from '~/pages';

const Home = () => (
  <Page title={mapper.pages.about.title}>
    <PlainTemplate header={<PlainHeader />}>Home Page</PlainTemplate>
  </Page>
);

export default Home;
