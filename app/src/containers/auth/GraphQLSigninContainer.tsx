// import React, {
//   useRef,
//   // useEffect
// } from 'react';
// import styled from '@emotion/styled';
// import {
//   storage,
//   // stringBoolean
// } from '~/lib/utils';
// import { useImmer } from 'use-immer';
// import { color } from '~/styles/_utils';
// // import { useQuery } from '@apollo/react-hooks';
// // import { GET_USERS } from '~/graphql/defines';

// interface clickEvent {
//   type?: string;
// }

// interface rememberProp {
//   value?: string;
//   checked?: boolean;
// }

// // interface userProps {
// //   id: string;
// //   name: string;
// // }
// // interface getUserData {
// //   users: userProps[];
// // }
// const convertRemember = (config: rememberProp) => {
//   const { checked, value } = config;

//   // const getStRemember = stringBoolean(storage.get('remember'));
//   if (!checked) {
//     storage.remove('remember');
//   } else {
//     if (value) {
//       storage.set('remember', value);
//     }
//   }
// };

// const SignInContainerState = {
//   remember: false,
// };
// function SignInContainer() {
//   const [values, setValues] = useImmer(SignInContainerState);
//   const [emailRef, passwordRef] = [
//     useRef <HTMLInputElement> null,
//     useRef <HTMLInputElement> null,
//   ];
//   // const getStRemember = storage.get('remember');
//   // const convertGetStRemenber = stringBoolean(getStRemember);
//   const valuesRemenber = values.remember;
//   const isLogged = true;
//   // const { loading, error, data } = useQuery<getUserData>(GET_USERS);
//   // console.log(loading, error, data);
//   // DEBUG: graphql이랑 useEffect 어떻게 쓰는지 알아보기
//   // DEBUG: graphql serve mysql 연결하기
//   /**
//    * NOTE: event click
//    * @param config
//    */
//   const handleClick = (config: clickEvent): void => {
//     const { type } = config;
//     if (type === 'submit') {
//       const passwordCurrent = passwordRef.current;
//       const emailCurrent = emailRef.current;
//       if (passwordCurrent && emailCurrent) {
//         const submitFormat = {
//           email: emailCurrent.value,
//           password: passwordCurrent.value,
//         };
//         console.log(submitFormat, valuesRemenber, 'submitFormat');

//         // login 성공시 적용
//         if (isLogged) {
//           const rememberFormat = {
//             value: emailCurrent.value,
//             checked: valuesRemenber,
//           };
//           convertRemember(rememberFormat);
//         }
//       }
//     }
//     if (type === 'remember') {
//       setValues(draft => {
//         draft.remember = !valuesRemenber;
//       });
//     }
//   };

//   // NOTE: init
//   // useEffect(() => {
//   //   setValues(draft => {
//   //     draft.remember = convertGetStRemenber;
//   //   });
//   // }, []);

//   // if (loading) return <Loading value={loading} />;

//   return (
//     <div>
//       <Stlyed.SignInContainer>
//         <div className="signin__rows">
//           <input
//             type="text"
//             autoComplete="off"
//             ref={emailRef}
//             placeholder="email"
//             className="signin__input"
//           />
//         </div>
//         <div className="signin__rows">
//           <input
//             type="password"
//             autoComplete="off"
//             ref={passwordRef}
//             placeholder="password"
//             className="signin__input"
//           />
//         </div>
//         <div className="signin__rows">
//           <label htmlFor="remember">
//             <input
//               type="checkbox"
//               id="remember"
//               checked={valuesRemenber}
//               onChange={() => handleClick({ type: 'remember' })}
//             />
//             <span>remember?</span>
//           </label>
//         </div>
//         <div className="signin__rows">
//           <button
//             type="button"
//             className="signin__btn"
//             onClick={() => handleClick({ type: 'submit' })}
//           >
//             Login
//           </button>
//         </div>

//         {/* {data &&
//           data.users.map(item => {
//             return <div key={item.id}>{item.name}</div>;
//           })} */}
//       </Stlyed.SignInContainer>
//     </div>
//   );
// }

// // interface LoadingProp {
// //   value?: boolean | undefined | null;
// // }
// // function Loading(props: LoadingProp): any {
// //   const { value } = props;
// //   return value ? 'Loading...' : '';
// // }

// const Stlyed = {
//   SignInContainer: styled.div`
//     .signin__input {
//       padding: 5px;
//       width: 200px;
//       border: 1px solid ${color.gray_border2};

//       &:focus {
//         border: 2px solid blue;
//       }
//     }
//     .signin__btn {
//       padding: 5px 10px;
//       cursor: pointer;
//     }
//   `,
// };

// export default SignInContainer;
