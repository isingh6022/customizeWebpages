import { Personalization } from '@scripts/Personalization';

import { alphacoders } from './wall.alphacoders.com';
import { youtube } from './youtube.com';
import { videoFile } from './video-file';
import { amazon } from './amazon';
import { leetcode } from './leetcode';
import { deviantArt } from './deviantart';

const allSites: Personalization[] = [alphacoders, youtube, videoFile, amazon, deviantArt, leetcode];

export { allSites };
