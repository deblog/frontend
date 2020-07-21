import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { Page } from '~/pages';
import { HeaderContainer, CounterContainer } from '~/containers';

const Counter = () => (
  <Page title={mapper.pages.counter.title}>
    <PlainTemplate header={<HeaderContainer />}>
      <CounterContainer />
    </PlainTemplate>
  </Page>
);
export default Counter;
