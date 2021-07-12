declare namespace Express {
  export interface Request {
  }
}

// these are extending native global objects. See https://stackoverflow.com/a/44387594
declare namespace NodeJS {
  export interface ProcessEnv {
    DEBUG: string;
    SHOW_ERROR: string;
    LOG_LEVEL: string;
    SERVER_API: string;
    npm_package_name: string;
    FLICKR_API_KEY: string;
    FLICKR_API_URL: string;
    FLICKR_GET_PHOTOS_METHOD: string;
  }
  export interface Global {
  }
}
