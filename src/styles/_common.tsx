// import { css } from 'styled-components';

const purpleBgGradient = `linear-gradient(180deg, #EBEFFF 0%, #FFFFFF 48.96%, #EBEFFF 99.99%);`;
const scannerBgGradient = `linear-gradient(0deg, rgba(255, 255, 255, 0) 11.49%, rgba(255, 254, 250, 0.0128372) 12.05%, rgba(65, 244, 255, 0.1372) 17.48%, rgba(65, 244, 255, 0.26) 23.07%, rgba(65, 244, 255, 0.4) 28.76%, rgba(65, 244, 255, 0.5) 34.55%, rgba(65, 244, 255, 0.66) 40.51%, rgba(65, 244, 255, 0.85) 46.73%, #41F4FF 127.1%);`;
const timeLineBgGradient = `linear-gradient(90deg, #00A6E2 0%, #5B86E5 100%);`;

const _color = {
  red: `#D20000`,
  red_alert: `#be0000`,
  red_alert1: `#D20000`,
  white: `#ffffff`,
  black_font: `#333333`,
  black_hover: `#1F1E4F`,
  black_title: '#313136',
  black_font1: `#000`,
  purple: `#726AA6`,
  purple_hover: `#5A509A`,
  purple_hoverBg: `rgba(224, 222, 236, 0.3)`,
  purple_weak: `#F5F7FF`,
  purple_bg: `#F8F9FF`,
  purple_deep: `#353147`,
  gray_text: `#777777`,
  gray_placeHolder: `#cacaca`,
  gray_week: `#EEEEEE`,
  gray_bg: `#F5F5FB`,
  gray_bg1: `#F4F4F4`,
  gray_border: `#BBBBBB`,
  gray_border2: `#E2E7EA`,
  gray_border4: `#cccccc`,
  gray_font: `#555555`,
  gray_dashboard: `#FAFAFA`,
  gray_bg2: `#dddddd`,
  gray_bg3: `#A4A4A4`,
  gray_meterial: `#50575A`,
  gray_table: `#BFC9CE`,
  gray_icon: `#C6CBCD`,
  window_bg: `#353147`,
  green: `#309687`,
  green_hover: `#229987`,
  blue: `#00A6E2`,
  blue_hover: `#059CD2`,
  blue_week_hover: `#F8FCFE`,
  blue_week: `#9DC7E0`,
  blue_font: `#47A7DF`,
  blue_line_bg: `#F0F7FB`,
  blue_cloud: `#5185D3`,
  navy: `#26256F`,
  navy_deep: `#1e1d5e`,
  btn_color: '#98B8CB',
  btn_color_hover: '#89ABBF',
  complete_btn: `#8938AF`,
  complete_btn_hover: `#75259A`,
  yellow: `#FEC600`,
  purple_bg_gradient: purpleBgGradient,
  scanner_gradient: scannerBgGradient,
  time_line_bg_gradient: timeLineBgGradient,
};

const _deviceSize = {
  pc: '1920px',
  mobile: '400px',
  pad: '800px',
  lg: '1280px',
  md: '960px',
  sm: '600px',
};

const _sizes = {
  desktop: 992,
  tablet: 768,
  phone: 600,
  md: 900,
};

const _font = {
  notoSans: `"Noto Sans KR", sans-serif`,
  muldi: `"Muli"`,
};

export { _color, _deviceSize, _font, _sizes };
