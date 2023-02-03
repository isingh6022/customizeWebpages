import { Personalization } from '@scripts/Personalization';

export const alphacoders = new Personalization('alphacoders', /wall\.alphacoders\.com/i, {
  css: `
    .thumb-container-big {
      width: 24% !important;
      border: none !important;
    }
    img.thumb-desktop {
      height: auto !important;
    }
    ins.adsbygoogle.adsbygoogle-noablate {
      display: none !important;
    }
  `
});
