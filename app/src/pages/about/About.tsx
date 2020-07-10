import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { Page } from '~/pages';
import { HeaderContainer, AboutContainer } from '~/containers';

const About = () => (
  <Page title={mapper.pages.about.title}>
    <PlainTemplate header={<HeaderContainer />}>
      <AboutContainer />
    </PlainTemplate>
  </Page>
);
export default About;
