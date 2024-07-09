import { Personalization } from '@scripts/Personalization';
import { SpeedUpVideos } from '@scripts/speedUpVideos/SpeedUpVideos';

export const videoFile = new Personalization('videoFiles', /^file:\/\/\//i, {
  callback: () => {
    setTimeout(() => {
      const fetchVidEl = () => document.getElementsByTagName('video')[0];

      let speedVid = new SpeedUpVideos(fetchVidEl(), {
        disableArrows: false,
        fetchVidEl
      });
      console.log('SpeedUpVideos Object (v1.0.0): ', speedVid);
      speedVid.activate();

      window.addEventListener('keydown', (e) => {
        if (e.code === 'KeyX' && e.ctrlKey && !e.shiftKey) {
          speedVid.clickVidEl();
        }
      });
    }, 500);
  }
});
