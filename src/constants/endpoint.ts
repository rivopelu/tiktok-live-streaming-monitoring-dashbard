import { TIKTOK_EVENT_ENUM } from '../enums/tiktok_event_enum.ts';

export const ENDPOINT = {
  SIGN_IN: () => `/auth/v1/admin/sign-in`,
  START_STREAMING: () => `/streaming/v1/start-streaming`,
  END_STREAMING: () => `/streaming/v1/end-streaming`,
  CHECK_STREAMING_STATUS: () => `/account/v1/check-streaming-status`,
  SIGN_UP: () => `/auth/v1/sign-up`,
  TEST_OVERLAY: (type: TIKTOK_EVENT_ENUM) => `/streaming/v1/test-overlay/${type}`,
  OVERVIEW_ANALYTICS: () => `/analytics/v1/overview`,
  GET_STREAMING_ROOM: () => `/streaming/v1/room/list`,
  DETAIL_STREAMING_ROOM: (id: string) => `/streaming/v1/room/detail/${id}`,
};
