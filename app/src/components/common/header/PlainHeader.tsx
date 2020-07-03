import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mapper } from '~/lib/mapper';
import { color, floatClear, resetLink, textUnderline } from '~/styles/_utils';

function PlainHeader() {
  return (
    <Styled.PlainHeader>
      <div className="header__rows">
        <Link to={mapper.pages.index.url} className="header__link">
          Home
        </Link>
      </div>
      <div className="header__rows">
        <Link to={mapper.pages.about.url} className="header__link">
          About
        </Link>
      </div>
      <div className="header__rows">
        <Link to={mapper.pages.signIn.url} className="header__link">
          Login
        </Link>
      </div>
      <div className="header__rows">
        <Link to={mapper.pages.signUp.url} className="header__link">
          Sign Up
        </Link>
      </div>
    </Styled.PlainHeader>
  );
}

// $color: $blue, $size: 2px, $duration: 0.25s, $centered: 'false'
const Styled = {
  PlainHeader: styled.header`
    & {
      ${floatClear};
      border-bottom: 1px solid ${color.gray_border};
      padding: 5px;
      .header__rows {
        float: left;
      }
      .header__link {
        display: inline-block;
        padding: 5px;
        ${resetLink};
        ${textUnderline(color.black_font, 1, 0.25)};
        /* border: 1px solid gray; */
      }
    }
  `,
};

export default PlainHeader;
