import { Personalization } from '@scripts/Personalization';
import { SpeedUpVideos } from '@scripts/speedUpVideos/SpeedUpVideos';

export const youtube = new Personalization('youtube', /^https:\/\/www\.youtube\.com/i, {
  callback: () => {
    setTimeout(() => {
      let speedVid = new SpeedUpVideos(document.getElementsByTagName('video')[0], {
        disableArrows: true,
        fetchVidEl: () => document.getElementsByTagName('video')[0]
      });
      console.log('SpeedUpVideos Object : ', speedVid);
      speedVid.activate();
    }, 500);
  }
});
