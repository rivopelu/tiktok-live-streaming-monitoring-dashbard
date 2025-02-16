import { TIKTOK_EVENT_ENUM } from '../../enums/tiktok_event_enum';

export interface IResDataMessageTiktokEvent {
  room_id: string;
  tiktok_username: string;
  tiktok_user_profile_name: string;
  profile_picture_url: string;
  type: TIKTOK_EVENT_ENUM;
  tiktok_profile_name: string;
  comment: string;
  like_count: number;
  gift_data?: {
    gift_id: number;
    name: string;
    diamond_cost: number;
    picture_url: string;
    combo: number;
  };
}
