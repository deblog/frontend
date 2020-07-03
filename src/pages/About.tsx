import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { PlainHeader } from '~/components/common/header';
import { Page } from '~/pages';

const About = () => (
  <Page title={mapper.pages.about.title}>
    <PlainTemplate header={<PlainHeader />}>About Page</PlainTemplate>
  </Page>
);
export default About;
