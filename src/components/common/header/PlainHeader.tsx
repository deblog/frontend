import React from 'react';
import { Link } from 'react-router-dom';
import { mapper } from '~/lib/mapper';

function PlainHeader() {
  return (
    <div>
      <Link to={mapper.pages.index.url}>Home</Link> <br />
      <Link to={mapper.pages.about.url}>About</Link>
    </div>
  );
}

export default PlainHeader;
