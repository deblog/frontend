import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { TypePlainTemplate } from '~/components/base/template/template.d';
import { getElementSize } from '~/lib/utils';

const PlainTemplateState: TypePlainTemplate.State = {
  header: { x: null, y: null },
  nav: { x: null, y: null },
  children: { x: null, y: null },
};
function PlainTemplate(props: TypePlainTemplate.Props) {
  const { header, nav, children } = props;
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const childrenRef = useRef(null);

  const [cSize, setCSize] = useImmer(PlainTemplateState);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setCSize(draft => {
        draft.header = getElementSize(headerRef.current);
        draft.nav = getElementSize(navRef.current);
        draft.children = getElementSize(childrenRef.current);
      });
    }
  }, [headerRef.current]);

  console.log(cSize);

  return (
    <Styled.PlainTemplate>
      {header && <div className={cx('header')} children={header} ref={headerRef} />}
      {nav && <nav className={cx('nav')} children={nav} ref={navRef} />}
      {children && <main className={cx('header')} children={children} ref={childrenRef} />}
    </Styled.PlainTemplate>
  );
}

const Styled = {
  PlainTemplate: styled.div`
    & {
    }
  `,
};

export default PlainTemplate;

// ${({ bg }) => bg && `background:${bg}`};
// min-height:100vh;
// &:after{
//   display:block;
//   content:'';
//   clear: both;
// }

// .DashboardTemplate__header{
//     position:fixed;
//     left:0;
//     top:0;
//     width:100%;
//     z-index:500
//   }
//   .DashboardTemplate__nav{
//     z-index:500;
//     position:fixed;
//     left:0;
//     top:${({ header }) => (header.y ? header.y : 0)}px;
//     min-height:${({ header }) => (header.y ? `calc(100% - ${header.y}px)` : '100%')};
//   }
//   .DashboardTemplate__main{
//     ${({ header }) => header.y && `margin-top:${header.y}px; height:calc(100% - ${header.y}px)`}
//     ${({ nav, rightSpace }) =>
//       nav.x &&
//       `
//       margin-left:${nav.x}px;
//       width:calc(100% - ${(rightSpace.x ? rightSpace.x : 0) + nav.x + 2 - 30}px)`};
//     ${({ rightSpace }) => `padding:${rightSpace.x ? '0' : '30px'}`}
//     &:after{
//       display:block;
//       content:"";
//       clear: both;
//     }
//     padding: 20px;
//     min-height:100vh;
//     float:left;
//     max-width:${device.pc};
//   }
//   .DashboardTemplate__title{
//     position:relative;
//     background:white;
//     margin-bottom:20px;
//     padding:10px 20px;
//     font-weight:600;
//     ${font(18, color.black_font)};
//     &:after{
//       position:absolute;
//       display:block;
//       content:"";
//       left:0;
//       top:0;
//       width:5px;
//       min-height:100%;
//       background:${color.blue_week};
//     }
//   }
//   .DashboardTemplate__rightSpace{
//     /* display:inline-block; */

//     float:left;
//   }
//   .DashboardTemplate__children{
//     ${font(16, color.black_font)};
//     position: relative;
//     /* height:85vh; */
//     /* overflow:auto; */
//     box-shadow: 2px 2px 5px rgba(36, 53, 51, 0.2);
//     width:100%;
//     background:white;
//     ${props => props.styleConf && props.styleConf};

//   }
//   /* .MuiTab-wrapper{
//     ${font(15)};
//   } */
//   .DashboardTemplate__move_btn{
//     float: right;
//     ${font(16, color.black_font)};
//     cursor: pointer;
//   }
