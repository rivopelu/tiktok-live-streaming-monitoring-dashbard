import useSound from 'use-sound';
import { AUDIO } from '../constants/assets.ts';

export function useAudio() {
  const [notif1] = useSound(AUDIO.NOTIFICATION_1, {
    volume: 0.1,
  });
  const [share] = useSound(AUDIO.SHARE, {
    volume: 0.2,
  });
  const [follow] = useSound(AUDIO.FOLLOW, {
    volume: 0.2,
  });
  const [yeppi] = useSound(AUDIO.YEPI, {
    volume: 0.2,
  });
  const [saweria] = useSound(AUDIO.SAWERIA, {
    volume: 0.2,
  });

  return {
    notif1,
    share,
    follow,
    yeppi,
    saweria,
  };
}
