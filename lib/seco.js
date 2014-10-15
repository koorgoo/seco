(function() {
  'use strict';

  function Seco(secs) {
    this._secs = secs;
    _extend(this, _divideSeconds(secs));
  }

  Seco.prototype.format = function(f) {
    var h = this.h, m = this.m, s = this.s;
    var hasH = _contains(f, 'h'), hasM = _contains(f, 'm');
    if (!hasH) m += h * 60;
    if (!hasM) s += m * 60;
    if (hasH) m = _pad(m);
    if (hasH || hasM) s = _pad(s);
    return f.replace('h', h).replace('m', m).replace('s', s);
  };

  function _pad(s) {
    return s > 9 ? s : '0' + s;
  }

  function _contains(s, pattern) {
    return s.indexOf(pattern) >= 0;
  }

  function _extend(obj, other) {
    for (var prop in other)
      if (other.hasOwnProperty(prop))
        obj[prop] = other[prop];
    return obj;
  }

  function _divideSeconds(s) {
    var totalMins = Math.floor(s/60);
    var hours = Math.floor(totalMins / 60);
    var mins = totalMins - hours * 60;
    var secs = s - totalMins * 60;
    return {s: secs, m: mins, h: hours};
  }

  function _create(constructor) {
    var args = _slice(arguments, 1);
    function wrapper() { return constructor.apply(this, args); }
    wrapper.prototype = constructor.prototype;
    return new wrapper();
  }

  function _slice(a, begin) {
    return Array.prototype.slice.call(a, begin || 0);
  }

  function seco() {
    return _create(Seco, _slice(arguments));
  }

  if (module && module.exports)
    module.exports = seco;
  else
    window.seco = seco;

})();
