import { Personalization } from '@scripts/Personalization';
import { compareKeyboardState } from '@scripts/keyboard';

export const deviantArt = new Personalization(
  'DeviantArt',
  /\/www\.deviantart\.com\/.*\/art\//i,
  {
    callback: () => {
      setTimeout(() => {
        let btn = <HTMLButtonElement>document.getElementsByClassName('_3uGXj _1Q65E')[0];

        window.addEventListener('keydown', (e) => {
          if (compareKeyboardState(e, [{ key: 'Space', ctrl: true }])) {
            let doneBtn = document.getElementsByClassName(
              '_3uGXj _1oLUC _3vXFH jOcwh BwYEn'
            )[0];

            if (doneBtn) {
              console.log('Saving ...');
              (<HTMLButtonElement>doneBtn).click();
            } else {
              console.log('Opening galleries ...');
              btn.click();
            }
          }
        });
      }, 700);
    }
  }
);
