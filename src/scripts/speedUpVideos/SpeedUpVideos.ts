let CHECK_ID = 'invisible-speed-ext-element-for-check';

export class SpeedUpVideos {
  private _isActive = false;
  private _controlBoxDiv: HTMLElement = <any>false;
  private _deltaT = 3; // ms.
  private _fullScr = false;

  constructor(
    private _vidEl: HTMLVideoElement,
    private config: {
      disableArrows?: boolean;
      fetchVidEl?: () => HTMLVideoElement;
    }
  ) {
    if (!this.vidEl) {
      console.log('Video not received...');
    }
  }

  get vidEl(): HTMLVideoElement {
    return this._vidEl;
  }
  updateVidEl(el: HTMLVideoElement) {
    this._vidEl = el;
  }

  public toggle() {
    this._isActive = !this._isActive;

    if (this._isActive) {
      console.log('Controls REACTIVATED');
      this._controlBoxDiv.style.display = 'block';
    } else {
      console.log('Controls DEACTIVATED');
      this._controlBoxDiv.style.display = 'none';
    }
  }

  public activate() {
    if (this._isAdded()) {
      console.error('The extension is already active...');
      return;
    } else if (!this._vidEl) {
      let vid = this.config.fetchVidEl && this.config.fetchVidEl();

      if (vid) {
        this._vidEl = vid;
      } else {
        console.error('Video element not received.');
        return;
      }
    }

    this._addCheckEl();
    this._addListeners();

    this._createControlBoxDiv();
    this._updateControlBoxDiv();

    this.toggle();
  }

  private _isAdded(): boolean {
    if (document.getElementById(CHECK_ID)) {
      console.log('video control extension was already active.');
      return true;
    }
    return false;
  }
  private _addCheckEl() {
    // Just an invisible element to check if the extension is already active.
    var checkEl = document.createElement('div');
    checkEl.id = CHECK_ID;
    checkEl.style.display = 'none';
    document.body.appendChild(checkEl);
  }
  private _createControlBoxDiv(): HTMLElement {
    if (this._controlBoxDiv) {
      return this._controlBoxDiv;
    }

    let box = document.createElement('div');

    box.style.zIndex = '100000000';
    box.style.position = 'fixed';
    box.style.bottom = '0';
    box.style.right = '0';
    box.style.backgroundColor = 'black';
    box.style.color = 'white';
    box.style.fontSize = '1.5em';
    box.style.border = '1px solid white';

    document.body.insertBefore(box, document.body.firstChild);

    this._controlBoxDiv = box;
    return box;
  }
  get controlBoxDiv(): HTMLElement {
    return this._controlBoxDiv;
  }
  private _updateControlBoxDiv() {
    let n = Math.round(this._vidEl.playbackRate * 10) / 10;
    let rate = n % 1 ? String(n) : String(n) + '.0';

    this._controlBoxDiv.textContent = rate + ' | ' + this._deltaT;
  }

  private _addListeners() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.altKey) {
        e.preventDefault();
        if (e.key == 's') {
          this.toggle();
        } else if (e.key == 'v') {
          console.log(document.getElementsByTagName('video'));
          console.log(this._vidEl);
        } else if (this._isActive) {
          var n = parseInt(e.key);
          if (isNaN(n) || !e.altKey) {
            return;
          }

          this.updateVidEl(document.getElementsByTagName('video')[n - 1]);
          console.log('New Element', this._vidEl);
        }
      } else if (!this._isActive) {
        return;
      }

      switch (e.code) {
        case 'KeyF':
          if (this._fullScr) {
            this._fullScr = false;
            document.exitFullscreen();
          } else {
            this._fullScr = true;
            this._vidEl.requestFullscreen();
          }
          break;
        case 'KeyA':
        case 'KeyJ':
          this._vidEl.currentTime -= this._deltaT;
          break;
        case 'KeyD':
        case 'KeyL':
          this._vidEl.currentTime += this._deltaT;
          break;
        case 'ArrowLeft':
          !this.config.disableArrows && (this._vidEl.currentTime -= 10);
          break;
        case 'ArrowRight':
          !this.config.disableArrows && (this._vidEl.currentTime += 10);
          break;
        case 'KeyE':
        case 'KeyO':
          this._vidEl.playbackRate += 0.2;
          this._updateControlBoxDiv();
          break;
        case 'KeyQ':
        case 'KeyU':
          this._vidEl.playbackRate -= 0.2;
          this._updateControlBoxDiv();
          break;
        case 'KeyW':
        case 'KeyI':
          this._vidEl.playbackRate = 1.0;
          this._updateControlBoxDiv();
          break;
        case 'KeyZ':
        case 'KeyN':
          this._deltaT -= 1.0;
          this._updateControlBoxDiv();
          break;
        case 'KeyX':
        case 'KeyM':
          this._deltaT += 1.0;
          this._updateControlBoxDiv();
          break;
        case 'KeyS':
          this._vidEl.paused ? this._vidEl.play() : this._vidEl.pause();
          break;
        case 'Space':
          e.ctrlKey &&
            (this._vidEl.paused ? this._vidEl.play() : this._vidEl.pause());
          break;
      }
    });
  }

  clickVidEl() {
    this.vidEl.click();
    this.vidEl.focus();
    console.log('Clicked the video');
  }
}
