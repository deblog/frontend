import React from 'react';
import { mapper } from '~/lib/mapper';
import { PlainTemplate } from '~/components/base/template';
import { Page } from '~/pages';
import { HeaderContainer, TodosContainer } from '~/containers';

const Todos = () => (
  <Page title={mapper.pages.todos.title}>
    <PlainTemplate header={<HeaderContainer />}>
      <TodosContainer />
    </PlainTemplate>
  </Page>
);
export default Todos;
