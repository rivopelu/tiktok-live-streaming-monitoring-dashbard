export const ROUTES = {
  PUBLIC: {
    HOME: () => `/`,
    SIGN_IN: () => `/auth/sign-in`,
    SIGN_UP: () => `/auth/sign-up`,
  },
  PRIVATE: {
    DASHBOARD: () => `/dashboard`,
    MONITORING: () => `/dashboard/monitoring`,
    OVERLAY_GALLERY: () => `/dashboard/overlay_gallery`,
  },
  OVERLAY: {
    CHAT: (accountId: string) => `/overlay/chat/${accountId}`,
    FOLLOW: (accountId: string) => `/overlay/follow/${accountId}`,
    VIEWER_INFO: (accountId: string) => `/overlay/viewer-info/${accountId}`,
    JOIN: (accountId: string) => `/overlay/join/${accountId}`,
  },
};
