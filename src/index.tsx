import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/App';
// import Button from '~/components/common/Button';
import _ from 'lodash';
// import { img_apple } from '~/components/base/images';

// const abc = [1, 2, 3];

// const aaa = _.map(abc, i => i + 5);

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from z{props.compiler} and {props.framework}! <App />
    {/* <Button /> */}
    {/* <img src={img_apple} alt="" /> */}
  </h1>
);

ReactDOM.render(<Hello compiler="TypeScript" framework="React" />, document.getElementById('root'));
