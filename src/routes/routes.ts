export const ROUTES = {
  PUBLIC: {
    HOME: () => `/`,
    SIGN_IN: () => `/auth/sign-in`,
    SIGN_UP: () => `/auth/sign-up`,
  },
  PRIVATE: {
    DASHBOARD: () => `/dashboard`,
    MONITORING: () => `/dashboard/monitoring`,
  },
};
