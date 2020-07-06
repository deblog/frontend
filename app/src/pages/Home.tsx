import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { Page } from '~/pages';
import { HeaderContainer, HomeContainer } from '~/containers';

const Home = () => (
  <Page title={mapper.pages.index.title}>
    <PlainTemplate header={<HeaderContainer />}>
      <HomeContainer />
    </PlainTemplate>
  </Page>
);

export default Home;
