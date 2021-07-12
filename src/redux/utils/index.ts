import { SERVER_ENV_VARIABLE } from '../constants';

export const getServerEnvVar = (varName: SERVER_ENV_VARIABLE): string => window.__ENV__[varName];
