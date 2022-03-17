export type Styles = {
  box: string;
  connector: string;
  connectorContainer: string;
  container: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
