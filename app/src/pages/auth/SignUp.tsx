import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { Page } from '~/pages';
import { HeaderContainer, SignUpContainer } from '~/containers';
const SignUp = () => (
  <Page title={mapper.pages.signUp.title}>
    <PlainTemplate header={<HeaderContainer />}>
      <SignUpContainer />
    </PlainTemplate>
  </Page>
);
export default SignUp;
