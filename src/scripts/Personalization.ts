const begStr = '.'.repeat(40) + '\n';
const endStr = '='.repeat(40) + '\n\n';

export class Personalization {
  constructor(
    public name: string,
    private regex: RegExp,
    private options: { css?: string; callback?: Function }
  ) {}

  addCss() {
    if (this.options.css) {
      let styleSheet = document.createElement('style');
      styleSheet.innerText = this.options.css;
      document.head.appendChild(styleSheet);
      console.log(`custom css added to ${this.name}...`);
    }

    return this;
  }

  executeScript() {
    if (this.options.callback) {
      this.options.callback();
      console.log(`script executed for ${this.name}...`);
    }

    return this;
  }

  personalize(url: string) {
    if (!url || !url.match(this.regex)) {
      return;
    }
    console.log(begStr);
    console.log('Personalizing...');
    this.addCss().executeScript();

    console.log(`Personalized ${this.name}.`);
    console.log(endStr);
  }
}
