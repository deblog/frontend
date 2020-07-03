import { css } from 'styled-components';
import reset from 'styled-reset';
import { _color, _deviceSize, _font, _sizes } from '~/styles/_common';
import { ENV_MODE_PROD } from '~/lib/config';

export const fontFamily = css`
  font-family: ${_font.muldi}, ${_font.notoSans};
`;
export const color = _color;
export const device = _deviceSize;

export const floatClear = css`
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const resetLink = css`
  text-decoration: none;
  color: ${_color.black_font};
`;

// $color: $blue, $size: 2px, $duration: 0.25s, $centered: 'false'
export const textUnderline = (
  $color: string = color.black_font,
  $size: number = 1,
  $duration: number = 0.25,
) => {
  const bottomSize = 0 - $size / 2 + 'px';
  return css`
    color: ${$color};
    display: inline-block;
    position: relative;
    text-decoration: none;

    &:before {
      background-color: ${$color};
      content: '';
      height: ${$size}px;
      position: absolute;
      bottom: ${bottomSize};
      transition: width ${$duration}s ease-in-out;
      right: 0;
      top: 100%;
      width: 0;
    }

    &:hover {
      &:before {
        left: 0;
        width: 100%;
      }
    }
  `;
};

export const positionCenterCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const positionWidthCenter = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const positionHeightCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const positionWide = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const font = (size = 14, color = 'black') => {
  return css`
    color: ${color};
    font-size: ${size}px;
    ${fontFamily};
    & :hover {
      color: $clr;
    }
    /* @content; */
  `;
};

export const buttonBlue = css`
  background: ${color.blue};
  color: ${color.white};
  transition: 0.3s;
  border: 1px solid ${color.blue};
  padding: 5px 15px;
  /* border-radius:3px; */
  cursor: pointer;
  ${font(16, color.white)};
  &:hover {
    background: ${color.blue_hover};
  }
`;

export const buttonWhite = css`
  background:${color.white};
  transition:.3s;
  border:1px solid ${color.blue};
  padding:5px 15px;
  /* border-radius:3px; */
  /* text-transform: uppercase; */
  cursor: pointer;
  ${font(16, color.blue)};
  &:hover{
    /* background:${color.blue_hover}; */
  }
`;

export const dotdotdot = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const disableDrag = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const checkboxBlue = css`
  /* color: ${color.blue}; */
  .MuiCheckbox-colorPrimary.Mui-checked{
    color: ${color.blue};
  }
  &:hover {
    /* color: ${color.blue}; */
    background: rgba(0, 0, 0, 0.1);
  }
`;

// export const _media = Object.keys(_sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${_sizes[label] / 16}em) {
//       ${css(...args)}
//     }
//   `;

//   return acc;
// }, {});

// Mui Color Custom
export const muiOutlinedInputFocus = (color = _color.blue) => {
  return css`
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${color};
    }
  `;
};
export const muiOutlinedInputError = (color = _color.red) => {
  return css`
    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: ${color};
    }
  `;
};

export const globalStyle = css`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  .hidden {
    display: none;
  }
  input,
  textarea,
  select,
  a,
  button {
    outline: none;
    box-shadow: none;
  }
  * {
    box-sizing: border-box !important;
    ${ENV_MODE_PROD && disableDrag}
  }
  body {
    ${fontFamily}
    font-size: 14px;
    color: #333;
  }
  .hidden {
    display: none !important;
  }
  .padding-none {
    padding: 0 !important;
  }
  .margin-none {
    margin: 0 !important;
  }
`;
