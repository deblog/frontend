import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { Page } from '~/pages';
import { HeaderContainer, SignInContainer } from '~/containers';
const SignIn = () => (
  <Page title={mapper.pages.signIn.title}>
    <PlainTemplate header={<HeaderContainer />}>
      <SignInContainer />
    </PlainTemplate>
  </Page>
);

export default SignIn;
