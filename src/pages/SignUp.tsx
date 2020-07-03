import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { PlainHeader } from '~/components/common/header';
import { Page } from '~/pages';

const SignUp = () => (
  <Page title={mapper.pages.signUp.title}>
    <PlainTemplate header={<PlainHeader />}>signUp Page</PlainTemplate>
  </Page>
);
export default SignUp;
