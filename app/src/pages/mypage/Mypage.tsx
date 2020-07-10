import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { Page } from '~/pages';
import { HeaderContainer, UserInformationContainer } from '~/containers';

const Mypage = () => (
  <Page title={mapper.pages.mypage.title}>
    <PlainTemplate header={<HeaderContainer />}>
      <UserInformationContainer />
    </PlainTemplate>
  </Page>
);

export default Mypage;
