import { Personalization } from '@scripts/Personalization';
import { SpeedUpVideos } from '@scripts/speedUpVideos/SpeedUpVideos';

export const youtube = new Personalization(
  'youtube',
  /^https:\/\/www\.youtube\.com/i,
  {
    callback: () => {
      setTimeout(() => {
        let speedVid = new SpeedUpVideos(
          document.getElementsByTagName('video')[0],
          {
            disableArrows: true,
            fetchVidEl: () => document.getElementsByTagName('video')[0],
          }
        );
        console.log('SpeedUpVideos Object (v1.0.0): ', speedVid);
        speedVid.activate();

        setInterval(watchForThings, 800);
        window.addEventListener('keydown', (e) => {
          if (e.code === 'Space' && e.shiftKey) {
            _showThings = !_showThings;
          } else if (e.code === 'KeyX' && e.ctrlKey && !e.shiftKey) {
            speedVid.clickVidEl();
          }
        });
      }, 500);
    },
  }
);

let _showThings = true;
function watchForThings() {
  let disp = _showThings ? 'block' : 'none';

  (<HTMLDivElement[]>[
    document.getElementsByClassName('ytp-gradient-top')[0],
    document.getElementsByClassName('ytp-chrome-top')[0],
    document.getElementsByClassName('ytp-gradient-bottom')[0],
    document.getElementsByClassName('ytp-chrome-bottom')[0],
  ]).forEach((el) => el && (el.style.display = disp));
}
