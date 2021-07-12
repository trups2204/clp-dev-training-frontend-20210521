// these are extending native global objects. See https://stackoverflow.com/a/58934739
declare interface Window {
  __ENV__: {
    [key in import('./constants').SERVER_ENV_VARIABLE]: string;
  };
}
declare namespace Express {
  export interface Request {}
}
