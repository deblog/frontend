import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { PlainHeader } from '~/components/common/header';
import { Page } from '~/pages';

const SignIn = () => (
  <Page title={mapper.pages.signIn.title}>
    <PlainTemplate header={<PlainHeader />}>Login Page</PlainTemplate>
  </Page>
);

export default SignIn;
