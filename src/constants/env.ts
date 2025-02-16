import packageJson from '../../package.json';
export const ENV = {
  BASE_URL: import.meta.env.VITE_APP_BASE_URL,
  VERSION: packageJson.version,
};
