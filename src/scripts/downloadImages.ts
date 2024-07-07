export class DownloadImages {
  private _delay = 1500;
  private _saveIndex = 0;
  private _element: HTMLElement = document.createElement('div');
  private _elAdded: boolean = false;
  private _links: HTMLAnchorElement[] = [];

  constructor(
    private title: string,
    private urls: string[] = [],
    private subTitle = '',
    private ext = 'jpg'
  ) {}

  public set delay(d: number) {
    if (!isNaN(parseInt(d + ''))) this._delay = d;
  }

  private _addDiv() {
    document.body.appendChild(this._element);
    this._elAdded = true;
  }

  private _getImgName(url: string, index: number) {
    let subTitle = '';
    if (this.subTitle) {
      subTitle = `(${this.subTitle}) `;
    }
    return this.title + ' ' + subTitle + index + '.' + this.ext;
  }

  private _getLink(url: string, index: number) {
    var a = document.createElement('a');

    a.textContent = index + '';
    a.href = url;
    a.download = this._getImgName(url, index) + '';
    a.addEventListener('click', function (e: MouseEvent) {
      let target: any = e.target;
      if (target && target.style && target.style.color) target.style.color = 'red';
    });

    // styles
    a.style.display = 'inline-block';
    a.style.minWidth = '10em';
    a.style.cssFloat = 'left';
    a.style.border = '1px solid black';
    a.style.textAlign = 'center';

    return a;
  }

  private _addLinks() {
    for (let i = 0; i < this.urls.length; i++) {
      let link = this._getLink(this.urls[i], i);
      this._links.push(link);
      this._element.appendChild(link);
    }
  }

  private _saveNext() {
    if (this._saveIndex >= this._links.length) return;

    if (!this._elAdded) {
      this._addDiv();
    }

    let link = this._links[this._saveIndex++];
    if (!link) return;

    link.click();

    setTimeout(() => {
      this._saveNext();
    }, this._delay);
  }

  public saveAll() {
    if (this._links.length) {
      // already saved all.
      return;
    }

    this._addLinks();
    this._saveNext();
  }
}
