import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mapper } from '~/lib/mapper';
import { color, floatClear, resetLink, textUnderline } from '~/styles/_utils';

function PlainHeader() {
  return (
    <Styled.PlainHeader>
      <div className="header__rows">
        <NavLink to={mapper.pages.index.url} className="header__link" exact>
          Home
        </NavLink>
      </div>
      <div className="header__rows">
        <NavLink to={mapper.pages.about.url} className="header__link" exact>
          About
        </NavLink>
      </div>
      <div className="header__rows">
        <NavLink
          to={`${mapper.pages.auth.url}${mapper.pages.signIn.url}`}
          className="header__link"
          exact
        >
          Login
        </NavLink>
      </div>
      <div className="header__rows">
        <NavLink
          to={`${mapper.pages.auth.url}${mapper.pages.signUp.url}`}
          className="header__link"
          exact
        >
          Sign Up
        </NavLink>
      </div>
      <div className="header__rows">
        <NavLink
          to={`${mapper.pages.user.url}${mapper.pages.mypage.url}`}
          className="header__link"
          exact
        >
          Mypage
        </NavLink>
      </div>
      <div className="header__rows">
        <NavLink to={`${mapper.pages.todos.url}`} className="header__link" exact>
          Todos
        </NavLink>
      </div>
      <div className="header__rows">
        <NavLink to={`${mapper.pages.counter.url}`} className="header__link" exact>
          Counter
        </NavLink>
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
        &.active {
          font-weight: bold;
        }
      }
    }
  `,
};

export default PlainHeader;
