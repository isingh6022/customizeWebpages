import { Personalization } from '@scripts/Personalization';

export const amazon = new Personalization('amazon', /www\.amazon/i, {
  callback: () => {
    let elList = <NodeListOf<HTMLInputElement>>(
      document.querySelectorAll('input[aria-label="Search Amazon.in"]')
    );
    console.log('Adding event listener to focus the input on key press of /');

    if (elList && elList.length) {
      window.addEventListener(
        'keyup',
        (e) =>
          (e.code + '').toLowerCase() === 'slash' && setTimeout(() => elList[0].focus())
      );
      console.log('SUCCESS');
    } else {
      console.log('FAILED');
    }
  }
});
