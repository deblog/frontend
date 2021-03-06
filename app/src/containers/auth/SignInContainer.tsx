import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { storage } from '~/lib/utils';
import { useImmer } from 'use-immer';
import { color } from '~/styles/_utils';
interface clickEvent {
  type?: string;
}

interface rememberProp {
  value?: string;
  checked?: boolean;
}

const convertRemember = (config: rememberProp) => {
  const { checked, value } = config;

  if (!checked) {
    storage.remove('remember');
  } else {
    if (value) {
      storage.set('remember', value);
    }
  }
};

const SignInContainerState = {
  remember: false,
};
function SignInContainer() {
  const [values, setValues] = useImmer(SignInContainerState);
  const [emailRef, passwordRef] = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const valuesRemenber = values.remember;
  const isLogged = true;
  /**
   * NOTE: event click
   * @param config
   */
  const handleClick = (config: clickEvent): void => {
    const { type } = config;
    if (type === 'submit') {
      const passwordCurrent = passwordRef.current;
      const emailCurrent = emailRef.current;
      if (passwordCurrent && emailCurrent) {
        const submitFormat = {
          email: emailCurrent.value,
          password: passwordCurrent.value,
        };
        console.log(submitFormat, valuesRemenber, 'submitFormat');

        // login 성공시 적용
        if (isLogged) {
          const rememberFormat = {
            value: emailCurrent.value,
            checked: valuesRemenber,
          };
          convertRemember(rememberFormat);
        }
      }
    }
    if (type === 'remember') {
      setValues(draft => {
        draft.remember = !valuesRemenber;
      });
    }
  };

  // NOTE: init
  // useEffect(() => {
  //   setValues(draft => {
  //     draft.remember = convertGetStRemenber;
  //   });
  // }, []);

  return (
    <div>
      <Stlyed.SignInContainer>
        <div className="signin__rows">
          <input
            type="text"
            autoComplete="off"
            ref={emailRef}
            placeholder="email"
            className="signin__input"
          />
        </div>
        <div className="signin__rows">
          <input
            type="password"
            autoComplete="off"
            ref={passwordRef}
            placeholder="password"
            className="signin__input"
          />
        </div>
        <div className="signin__rows">
          <label htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              checked={valuesRemenber}
              onChange={() => handleClick({ type: 'remember' })}
            />
            <span>remember?</span>
          </label>
        </div>
        <div className="signin__rows">
          <button
            type="button"
            className="signin__btn"
            onClick={() => handleClick({ type: 'submit' })}
          >
            Login
          </button>
        </div>
      </Stlyed.SignInContainer>
    </div>
  );
}

const Stlyed = {
  SignInContainer: styled.div`
    .signin__input {
      padding: 5px;
      width: 200px;
      border: 1px solid ${color.gray_border2};

      &:focus {
        border: 2px solid blue;
      }
    }
    .signin__btn {
      padding: 5px 10px;
      cursor: pointer;
    }
  `,
};

export default SignInContainer;
