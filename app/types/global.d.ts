export type ReactChildren = React.ReactNode[] | React.ReactNode;
export type CurrentRef = HTMLElement | null;
export interface ReactNode {
  children?: React.ReactNode[] | React.ReactNode;
}
