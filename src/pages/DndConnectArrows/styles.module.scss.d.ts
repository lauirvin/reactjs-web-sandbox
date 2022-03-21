export type Styles = {
  box: string;
  boxContainer: string;
  connectorContainer: string;
  container: string;
  dot: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
