import { Personalization } from '@scripts/Personalization';

const PERSONALIZATIONS: Personalization[] = [];
export const register = (personalization: Personalization) => {
  PERSONALIZATIONS.push(personalization);
};

export const personalize = (url: string) => {
  for (let personalization of PERSONALIZATIONS) {
    personalization && personalization.personalize && personalization.personalize(url);
  }
};
