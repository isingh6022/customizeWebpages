(() => {
  'use strict';
  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
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
        var r = o.call(e, 'string');
        if ('object' !== t(r)) return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return String(e);
    })(e);
    return 'symbol' === t(n) ? n : String(n);
  }
  function o(e, t) {
    for (var o = 0; o < t.length; o++) {
      var r = t[o];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, n(r.key), r);
    }
  }
  function r(e, t, n) {
    return (
      t && o(e.prototype, t),
      n && o(e, n),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  var i = '.'.repeat(40) + '\n',
    a = '='.repeat(40) + '\n\n',
    l = (function () {
      function t(n, o, r) {
        e(this, t), (this.name = n), (this.regex = o), (this.options = r);
      }
      return (
        r(t, [
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
            }
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
            }
          },
          {
            key: 'personalize',
            value: function (e) {
              e &&
                e.match(this.regex) &&
                (console.log(i),
                console.log('Personalizing...'),
                this.addCss().executeScript(),
                console.log('Personalized '.concat(this.name, '.')),
                console.log(a));
            }
          }
        ]),
        t
      );
    })(),
    c = new l('alphacoders', /wall\.alphacoders\.com/i, {
      css: '\n    .thumb-container-big {\n      width: 24% !important;\n      border: none !important;\n    }\n    img.thumb-desktop {\n      height: auto !important;\n    }\n    ins.adsbygoogle.adsbygoogle-noablate {\n      display: none !important;\n    }\n  '
    });
  function s(e, t, o) {
    return (
      (t = n(t)) in e
        ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = o),
      e
    );
  }
  var u = 'invisible-speed-ext-element-for-check',
    d = (function () {
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
        r(t, [
          {
            key: 'vidEl',
            get: function () {
              return this._vidEl;
            }
          },
          {
            key: 'updateVidEl',
            value: function (e) {
              this._vidEl = e;
            }
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
            }
          },
          {
            key: 'activate',
            value: function () {
              if (this._isAdded()) console.error('The extension is already active...');
              else {
                if (!this._vidEl) {
                  var e = this.config.fetchVidEl && this.config.fetchVidEl();
                  if (!e) return void console.error('Video element not received.');
                  this._vidEl = e;
                }
                this._addCheckEl(),
                  this._addListeners(),
                  this._createControlBoxDiv(),
                  this._updateControlBoxDiv(),
                  this.toggle();
              }
            }
          },
          {
            key: '_isAdded',
            value: function () {
              return (
                !!document.getElementById(u) &&
                (console.log('video control extension was already active.'), !0)
              );
            }
          },
          {
            key: '_addCheckEl',
            value: function () {
              var e = document.createElement('div');
              (e.id = u), (e.style.display = 'none'), document.body.appendChild(e);
            }
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
            }
          },
          {
            key: 'controlBoxDiv',
            get: function () {
              return this._controlBoxDiv;
            }
          },
          {
            key: '_updateControlBoxDiv',
            value: function () {
              var e = Math.round(10 * this._vidEl.playbackRate) / 10,
                t = e % 1 ? String(e) : String(e) + '.0';
              this._controlBoxDiv.textContent = t + ' | ' + this._deltaT;
            }
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
                    e.updateVidEl(document.getElementsByTagName('video')[n - 1]),
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
                }
              });
            }
          }
        ]),
        t
      );
    })(),
    f = new l('youtube', /^https:\/\/www\.youtube\.com/i, {
      callback: function () {
        setTimeout(function () {
          var e = new d(document.getElementsByTagName('video')[0], {
            disableArrows: !0,
            fetchVidEl: function () {
              return document.getElementsByTagName('video')[0];
            }
          });
          console.log('SpeedUpVideos Object : ', e), e.activate();
        }, 500);
      }
    }),
    y = new l('amazon', /www\.amazon/i, {
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
      }
    });
  function v(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  var h = new l('DeviantArt', /\/www\.deviantart\.com\/.*\/art\//i, {
      callback: function () {
        setTimeout(function () {
          var e = document.getElementsByClassName('_3uGXj _1Q65E')[0];
          window.addEventListener('keydown', function (t) {
            if (
              (function (e, t) {
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
                            if ('string' == typeof e) return v(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                              'Object' === n && e.constructor && (n = e.constructor.name),
                              'Map' === n || 'Set' === n
                                ? Array.from(e)
                                : 'Arguments' === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                ? v(e, t)
                                : void 0
                            );
                          }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                      ) {
                        n && (e = n);
                        var o = 0,
                          r = function () {};
                        return {
                          s: r,
                          n: function () {
                            return o >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[o++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: r
                        };
                      }
                      throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    }
                    var i,
                      a = !0,
                      l = !1;
                    return {
                      s: function () {
                        n = n.call(e);
                      },
                      n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (l = !0), (i = e);
                      },
                      f: function () {
                        try {
                          a || null == n.return || n.return();
                        } finally {
                          if (l) throw i;
                        }
                      }
                    };
                  })([{ key: 'Space', ctrl: !0 }]);
                try {
                  for (o.s(); !(n = o.n()).done; ) {
                    var r = n.value;
                    if (
                      e.code === r.key &&
                      !e.shiftKey == !r.shift &&
                      !e.altKey == !r.alt &&
                      !e.ctrlKey == !r.ctrl
                    )
                      return !0;
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
                return !1;
              })(t)
            ) {
              var n = document.getElementsByClassName(
                '_3uGXj _1oLUC _3vXFH jOcwh BwYEn'
              )[0];
              n
                ? (console.log('Saving ...'), n.click())
                : (console.log('Opening galleries ...'), e.click());
            }
          });
        }, 700);
      }
    }),
    m = [];
  function p(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  var g,
    b,
    _ = (function (e, t) {
      var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ('string' == typeof e) return p(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? p(e, t)
                  : void 0
              );
            }
          })(e))
        ) {
          n && (e = n);
          var o = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      var i,
        a = !0,
        l = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (a = e.done), e;
        },
        e: function (e) {
          (l = !0), (i = e);
        },
        f: function () {
          try {
            a || null == n.return || n.return();
          } finally {
            if (l) throw i;
          }
        }
      };
    })([c, f, y, h]);
  try {
    for (_.s(); !(g = _.n()).done; ) {
      (b = g.value), m.push(b);
    }
  } catch (e) {
    _.e(e);
  } finally {
    _.f();
  }
  !(function (e) {
    for (var t = 0, n = m; t < n.length; t++) {
      var o = n[t];
      o && o.personalize && o.personalize(e);
    }
  })(window.location.href);
})();
