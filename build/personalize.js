(() => {
  'use strict';
  function e(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function t(e) {
    return (
      (t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      t(e)
    );
  }
  function n(e) {
    var n = (function (e, n) {
      if ('object' !== t(e) || null === e) return e;
      var o = e[Symbol.toPrimitive];
      if (void 0 !== o) {
        var i = o.call(e, 'string');
        if ('object' !== t(i)) return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return String(e);
    })(e);
    return 'symbol' === t(n) ? n : String(n);
  }
  function o(e, t) {
    for (var o = 0; o < t.length; o++) {
      var i = t[o];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, n(i.key), i);
    }
  }
  function i(e, t, n) {
    return (
      t && o(e.prototype, t),
      n && o(e, n),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  var r = '.'.repeat(40) + '\n',
    l = '='.repeat(40) + '\n\n',
    a = (function () {
      function t(n, o, i) {
        e(this, t), (this.name = n), (this.regex = o), (this.options = i);
      }
      return (
        i(t, [
          {
            key: 'addCss',
            value: function () {
              if (this.options.css) {
                var e = document.createElement('style');
                (e.innerText = this.options.css),
                  document.head.appendChild(e),
                  console.log('custom css added to '.concat(this.name, '...'));
              }
              return this;
            },
          },
          {
            key: 'executeScript',
            value: function () {
              return (
                this.options.callback &&
                  (this.options.callback(),
                  console.log('script executed for '.concat(this.name, '...'))),
                this
              );
            },
          },
          {
            key: 'personalize',
            value: function (e) {
              e &&
                e.match(this.regex) &&
                (console.log(r),
                console.log('Personalizing...'),
                this.addCss().executeScript(),
                console.log('Personalized '.concat(this.name, '.')),
                console.log(l));
            },
          },
        ]),
        t
      );
    })(),
    c = new a('alphacoders', /wall\.alphacoders\.com/i, {
      css: '\n    .thumb-container-big {\n      width: 24% !important;\n      border: none !important;\n    }\n    img.thumb-desktop {\n      height: auto !important;\n    }\n    ins.adsbygoogle.adsbygoogle-noablate {\n      display: none !important;\n    }\n    div.related-image-group {\n      width: 25%;\n      height: max-content;\n    }\n    a.related-image-group-link {\n      position: relative;\n      font-size: 1.5rem;\n    }\n    div.related-image-group-interior-text {\n      width: calc(100% - 20px);\n      height: 90%;\n    }\n    span.related-image-group-title {\n      position: absolute;\n      width: 100%;\n      bottom: 0;\n  }\n  ',
    });
  function s(e, t, o) {
    return (
      (t = n(t)) in e
        ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = o),
      e
    );
  }
  var d = 'invisible-speed-ext-element-for-check',
    u = (function () {
      function t(n, o) {
        e(this, t),
          s(this, '_isActive', !1),
          s(this, '_controlBoxDiv', !1),
          s(this, '_deltaT', 3),
          s(this, '_fullScr', !1),
          (this._vidEl = n),
          (this.config = o),
          this.vidEl || console.log('Video not received...');
      }
      return (
        i(t, [
          {
            key: 'vidEl',
            get: function () {
              return this._vidEl;
            },
          },
          {
            key: 'updateVidEl',
            value: function (e) {
              this._vidEl = e;
            },
          },
          {
            key: 'toggle',
            value: function () {
              (this._isActive = !this._isActive),
                this._isActive
                  ? (console.log('Controls REACTIVATED'),
                    (this._controlBoxDiv.style.display = 'block'))
                  : (console.log('Controls DEACTIVATED'),
                    (this._controlBoxDiv.style.display = 'none'));
            },
          },
          {
            key: 'activate',
            value: function () {
              if (this._isAdded())
                console.error('The extension is already active...');
              else {
                if (!this._vidEl) {
                  var e = this.config.fetchVidEl && this.config.fetchVidEl();
                  if (!e)
                    return void console.error('Video element not received.');
                  this._vidEl = e;
                }
                this._addCheckEl(),
                  this._addListeners(),
                  this._createControlBoxDiv(),
                  this._updateControlBoxDiv(),
                  this.toggle();
              }
            },
          },
          {
            key: '_isAdded',
            value: function () {
              return (
                !!document.getElementById(d) &&
                (console.log('video control extension was already active.'), !0)
              );
            },
          },
          {
            key: '_addCheckEl',
            value: function () {
              var e = document.createElement('div');
              (e.id = d),
                (e.style.display = 'none'),
                document.body.appendChild(e);
            },
          },
          {
            key: '_createControlBoxDiv',
            value: function () {
              if (this._controlBoxDiv) return this._controlBoxDiv;
              var e = document.createElement('div');
              return (
                (e.style.zIndex = '100000000'),
                (e.style.position = 'fixed'),
                (e.style.bottom = '0'),
                (e.style.right = '0'),
                (e.style.backgroundColor = 'black'),
                (e.style.color = 'white'),
                (e.style.fontSize = '1.5em'),
                (e.style.border = '1px solid white'),
                document.body.insertBefore(e, document.body.firstChild),
                (this._controlBoxDiv = e),
                e
              );
            },
          },
          {
            key: 'controlBoxDiv',
            get: function () {
              return this._controlBoxDiv;
            },
          },
          {
            key: '_updateControlBoxDiv',
            value: function () {
              var e = Math.round(10 * this._vidEl.playbackRate) / 10,
                t = e % 1 ? String(e) : String(e) + '.0';
              this._controlBoxDiv.textContent = t + ' | ' + this._deltaT;
            },
          },
          {
            key: '_addListeners',
            value: function () {
              var e = this;
              window.addEventListener('keydown', function (t) {
                if (t.altKey) {
                  if ((t.preventDefault(), 's' == t.key)) e.toggle();
                  else if ('v' == t.key)
                    console.log(document.getElementsByTagName('video')),
                      console.log(e._vidEl);
                  else if (e._isActive) {
                    var n = parseInt(t.key);
                    if (isNaN(n) || !t.altKey) return;
                    e.updateVidEl(
                      document.getElementsByTagName('video')[n - 1]
                    ),
                      console.log('New Element', e._vidEl);
                  }
                } else if (!e._isActive) return;
                switch (t.code) {
                  case 'KeyF':
                    e._fullScr
                      ? ((e._fullScr = !1), document.exitFullscreen())
                      : ((e._fullScr = !0), e._vidEl.requestFullscreen());
                    break;
                  case 'KeyA':
                  case 'KeyJ':
                    e._vidEl.currentTime -= e._deltaT;
                    break;
                  case 'KeyD':
                  case 'KeyL':
                    e._vidEl.currentTime += e._deltaT;
                    break;
                  case 'ArrowLeft':
                    !e.config.disableArrows && (e._vidEl.currentTime -= 10);
                    break;
                  case 'ArrowRight':
                    !e.config.disableArrows && (e._vidEl.currentTime += 10);
                    break;
                  case 'KeyE':
                  case 'KeyO':
                    (e._vidEl.playbackRate += 0.2), e._updateControlBoxDiv();
                    break;
                  case 'KeyQ':
                  case 'KeyU':
                    (e._vidEl.playbackRate -= 0.2), e._updateControlBoxDiv();
                    break;
                  case 'KeyW':
                  case 'KeyI':
                    (e._vidEl.playbackRate = 1), e._updateControlBoxDiv();
                    break;
                  case 'KeyZ':
                  case 'KeyN':
                    (e._deltaT -= 1), e._updateControlBoxDiv();
                    break;
                  case 'KeyX':
                  case 'KeyM':
                    (e._deltaT += 1), e._updateControlBoxDiv();
                    break;
                  case 'KeyS':
                    e._vidEl.paused ? e._vidEl.play() : e._vidEl.pause();
                    break;
                  case 'Space':
                    t.ctrlKey &&
                      (e._vidEl.paused ? e._vidEl.play() : e._vidEl.pause());
                }
              });
            },
          },
          {
            key: 'clickVidEl',
            value: function () {
              this.vidEl.click(),
                this.vidEl.focus(),
                console.log('Clicked the video');
            },
          },
        ]),
        t
      );
    })(),
    y = new a('youtube', /^https:\/\/www\.youtube\.com/i, {
      callback: function () {
        setTimeout(function () {
          var e = new u(document.getElementsByTagName('video')[0], {
            disableArrows: !0,
            fetchVidEl: function () {
              return document.getElementsByTagName('video')[0];
            },
          });
          console.log('SpeedUpVideos Object (v1.0.0): ', e),
            e.activate(),
            setInterval(v, 800),
            window.addEventListener('keydown', function (t) {
              'Space' === t.code && t.shiftKey
                ? (f = !f)
                : 'KeyX' === t.code &&
                  t.ctrlKey &&
                  !t.shiftKey &&
                  e.clickVidEl();
            });
        }, 500);
      },
    }),
    f = !0;
  function v() {
    var e = f ? 'block' : 'none';
    [
      document.getElementsByClassName('ytp-gradient-top')[0],
      document.getElementsByClassName('ytp-chrome-top')[0],
      document.getElementsByClassName('ytp-gradient-bottom')[0],
      document.getElementsByClassName('ytp-chrome-bottom')[0],
    ].forEach(function (t) {
      return t && (t.style.display = e);
    });
  }
  var m = new a('amazon', /www\.amazon/i, {
    callback: function () {
      var e = document.querySelectorAll('input[aria-label="Search Amazon.in"]');
      console.log('Adding event listener to focus the input on key press of /'),
        e && e.length
          ? (window.addEventListener('keyup', function (t) {
              return (
                'slash' === (t.code + '').toLowerCase() &&
                setTimeout(function () {
                  return e[0].focus();
                })
              );
            }),
            console.log('SUCCESS'))
          : console.log('FAILED');
    },
  });
  function h(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  var p = function (e, t) {
      var n,
        o = (function (e, t) {
          var n =
            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (e) {
                  if ('string' == typeof e) return h(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(e)
                      : 'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? h(e, t)
                      : void 0
                  );
                }
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n);
              var o = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return o >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[o++] };
                },
                e: function (e) {
                  throw e;
                },
                f: i,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          var r,
            l = !0,
            a = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (l = e.done), e;
            },
            e: function (e) {
              (a = !0), (r = e);
            },
            f: function () {
              try {
                l || null == n.return || n.return();
              } finally {
                if (a) throw r;
              }
            },
          };
        })(t);
      try {
        for (o.s(); !(n = o.n()).done; ) {
          var i = n.value;
          if (
            e.code === i.key &&
            !e.shiftKey == !i.shift &&
            !e.altKey == !i.alt &&
            !e.ctrlKey == !i.ctrl
          )
            return !0;
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      return !1;
    },
    g = new a('DeviantArt', /\/www\.deviantart\.com\/.*\/art\//i, {
      callback: function () {
        setTimeout(function () {
          var e = document.getElementsByClassName('_3uGXj _1Q65E')[0];
          window.addEventListener('keydown', function (t) {
            if (p(t, [{ key: 'Space', ctrl: !0 }])) {
              var n = document.getElementsByClassName(
                '_3uGXj _1oLUC _3vXFH jOcwh BwYEn'
              )[0];
              n
                ? (console.log('Saving ...'), n.click())
                : (console.log('Opening galleries ...'), e.click());
            }
          });
        }, 700);
      },
    }),
    b = new a('gif_com', /https:\/\/.*gif\.com\//i, {
      callback: function () {
        setTimeout(function () {
          var e = !1;
          window.addEventListener('keydown', function (t) {
            p(t, [{ key: 'Space', ctrl: !0 }]) &&
              !e &&
              ((e = !0),
              (function () {
                for (; document.body.lastChild; )
                  document.body.removeChild(document.body.lastChild);
              })(),
              console.log('personalized gif.com'),
              window.addEventListener('paste', function (e) {
                var t,
                  n =
                    null === (t = e.clipboardData) || void 0 === t
                      ? void 0
                      : t.getData('Text');
                if (n && n.match(/https?:\/\/[^ ]+/)) {
                  var o = document.createElement('iframe');
                  o.src = n;
                  var i = document.createElement('div'),
                    r = document.createElement('div');
                  i.appendChild(o),
                    i.appendChild(r),
                    (i.style.position = 'relative'),
                    (o.style.height = '95%'),
                    (o.style.width = '100%'),
                    (r.style.height = '5%'),
                    (r.style.width = '100%'),
                    (i.style.border = '1px solid #656565'),
                    (i.style.borderRadius = '0.5rem'),
                    (i.style.overflow = 'hidden'),
                    (r.style.backgroundColor = '#7d7d7d'),
                    (i.style.display = 'flex'),
                    (i.style.flexFlow = 'column nowrap'),
                    (i.style.alignItems = 'center'),
                    (i.style.justifyContent = 'center'),
                    (i.style.height = '40vh'),
                    (i.style.width = '12vw');
                  var l = !1;
                  r.addEventListener('click', function (e) {
                    e.shiftKey
                      ? i.parentElement.removeChild(i)
                      : ((i.style.width = l ? '12vw' : '24vw'), (l = !l));
                  }),
                    r.addEventListener('contextmenu', function (e) {
                      e.preventDefault(), i.parentElement.removeChild(i);
                    }),
                    document.body.appendChild(i),
                    (document.body.style.display = 'flex'),
                    (document.body.style.flexFlow = 'row wrap');
                }
              }));
          });
        }, 700);
      },
    }),
    w = [];
  function E(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  var _,
    k,
    C = (function (e, t) {
      var n =
        ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ('string' == typeof e) return E(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? E(e, t)
                  : void 0
              );
            }
          })(e))
        ) {
          n && (e = n);
          var o = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
            },
            e: function (e) {
              throw e;
            },
            f: i,
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      var r,
        l = !0,
        a = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (l = e.done), e;
        },
        e: function (e) {
          (a = !0), (r = e);
        },
        f: function () {
          try {
            l || null == n.return || n.return();
          } finally {
            if (a) throw r;
          }
        },
      };
    })([c, y, m, g, b]);
  try {
    for (C.s(); !(_ = C.n()).done; ) {
      (k = _.value), w.push(k);
    }
  } catch (e) {
    C.e(e);
  } finally {
    C.f();
  }
  !(function (e) {
    for (var t = 0, n = w; t < n.length; t++) {
      var o = n[t];
      o && o.personalize && o.personalize(e);
    }
  })(window.location.href);
})();
