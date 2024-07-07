import { allSites } from '@sites/allSites';
import { register, personalize } from '@scripts/registerAndExecute';

for (let site of allSites) {
  register(site);
}
personalize(window.location.href);
