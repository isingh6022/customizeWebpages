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
    div.related-image-group {
      width: 25%;
      height: max-content;
    }
    a.related-image-group-link {
      position: relative;
      font-size: 1.5rem;
    }
    div.related-image-group-interior-text {
      width: calc(100% - 20px);
      height: 90%;
    }
    span.related-image-group-title {
      position: absolute;
      width: 100%;
      bottom: 0;
  }
  `
});
