import { ReactChildren } from '@/types/global.d';

// onSave: (text: string) => void; 이런건 뭐지? 반환값 없을때
export type ReactChildrenString = ReactChildren | String;
export interface Template {
  header?: ReactChildrenString;
  nav?: ReactChildrenString;
  main?: ReactChildrenString;
  children?: ReactChildrenString;
}

export namespace TypePlainTemplate {
  export interface Props extends Template {
    sidebar?: ReactChildrenString;
  }
  export interface State {
    readonly header?: object;
    readonly nav?: object;
    readonly children?: object;
  }
}

export namespace TypeNavTemplate {
  export interface Props extends Template {
    navigation?: ReactChildrenString;
  }
}
