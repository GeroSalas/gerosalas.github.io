export const getAppBuildEnvironmentVersion = () => {
  let appVersionEnv = '';
  if (process.env.REACT_APP_VERSION) {
    appVersionEnv += `v${process.env.REACT_APP_VERSION} `;
  }
  if (process.env.REACT_APP_GEROSALAS_ENV) {
    appVersionEnv += `(env: ${process.env.REACT_APP_GEROSALAS_ENV})`;
  }
  return appVersionEnv;
};
