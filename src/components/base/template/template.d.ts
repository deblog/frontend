import React from 'react';

export namespace CommonProps {
  export type Children = React.ReactNode[] | React.ReactNode;
  export interface ReactNode {
    children?: React.ReactNode[] | React.ReactNode;
  }
}
// onSave: (text: string) => void; 이런건 뭐지?
export namespace TemplateProps {
  export interface Template {
    header?: CommonProps.Children | String;
    main?: CommonProps.Children | String;
    children?: CommonProps.Children | String;
  }

  export interface PlainTemplate extends Template {
    sidebar?: CommonProps.Children;
  }
}
