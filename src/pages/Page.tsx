import React from 'react';
import { mapper } from '~/lib/mapper';
import { Helmet } from 'react-helmet';
import { TypePage } from '~/pages/pages.d';

const Page = (props: TypePage.Props) => {
  const { children, title, ...otherProps } = props;
  return (
    <>
      <Helmet title={`${title} — ${mapper.brand.title}`} />
      <div {...otherProps}>{children}</div>
    </>
  );
};

export default Page;
