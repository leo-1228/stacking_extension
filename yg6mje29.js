(function (_0x32bf55, _0x1bc758) {
  const _0x413748 = _0x4cbe,
    _0x12a379 = _0x32bf55();
  while (!![]) {
    try {
      const _0x513d7d =
        (-parseInt(_0x413748(0x172)) / 0x1) *
          (parseInt(_0x413748(0x178)) / 0x2) +
        (-parseInt(_0x413748(0x16f)) / 0x3) *
          (-parseInt(_0x413748(0x17c)) / 0x4) +
        parseInt(_0x413748(0x16c)) / 0x5 +
        parseInt(_0x413748(0x169)) / 0x6 +
        -parseInt(_0x413748(0x16e)) / 0x7 +
        (-parseInt(_0x413748(0x177)) / 0x8) *
          (-parseInt(_0x413748(0x176)) / 0x9) +
        -parseInt(_0x413748(0x16b)) / 0xa;
      if (_0x513d7d === _0x1bc758) break;
      else _0x12a379["push"](_0x12a379["shift"]());
    } catch (_0x33f99f) {
      _0x12a379["push"](_0x12a379["shift"]());
    }
  }
})(_0x1c60, 0x81384);
function _0x1c60() {
  const _0x5b2bbc = [
    "4MPsHhU",
    "Setting\x20test\x20money\x20to\x20",
    "stopMultiplier",
    ".\x20Profit:\x20",
    "18jzpkJt",
    "756312GPeXjK",
    "328904uLVkmO",
    "log",
    "placeBetAmount",
    ",\x20placed\x20bet\x20",
    "188Yrjwii",
    "money",
    "4067604xJNSgp",
    "numberOfBets",
    "647170cHsHLl",
    "2470045dWySfg",
    "DEMO:\x20Bet\x20number\x20",
    "6143634bnhzwZ",
    "49050XkQOxo",
    "\x20and\x20stopped\x20on\x20multiplier\x20",
    ",\x20money:\x20",
  ];
  _0x1c60 = function () {
    return _0x5b2bbc;
  };
  return _0x1c60();
}
function _0x4cbe(_0x2dccab, _0x26d383) {
  const _0x1c6010 = _0x1c60();
  return (
    (_0x4cbe = function (_0x4cbed2, _0x3022e6) {
      _0x4cbed2 = _0x4cbed2 - 0x169;
      let _0x5ce7fd = _0x1c6010[_0x4cbed2];
      return _0x5ce7fd;
    }),
    _0x4cbe(_0x2dccab, _0x26d383)
  );
}
let demo = {
  initialMoney: 0x1f4,
  money: 0x0,
  placeBetAmount: 0.002,
  stopMultiplier: 0x2,
  numberOfBets: 0x0,
  addResult(_0x33959e) {
    const _0x442618 = _0x4cbe;
    this["numberOfBets"] == 0x0 &&
      (this[_0x442618(0x17d)] = this["initialMoney"]);
    this["numberOfBets"]++;
    let _0x5dba64;
    _0x33959e < this[_0x442618(0x174)]
      ? (_0x5dba64 = -this[_0x442618(0x17a)])
      : (_0x5dba64 = this[_0x442618(0x17a)] * (this[_0x442618(0x174)] - 0x1)),
      (this[_0x442618(0x17d)] += _0x5dba64),
      console["log"](
        _0x442618(0x16d) +
          this[_0x442618(0x16a)] +
          _0x442618(0x17b) +
          this["placeBetAmount"] +
          _0x442618(0x170) +
          _0x33959e +
          _0x442618(0x175) +
          _0x5dba64 +
          _0x442618(0x171) +
          this[_0x442618(0x17d)]
      );
  },
  setTestMoney(_0xd3f48b) {
    const _0x1752dd = _0x4cbe;
    console[_0x1752dd(0x179)](_0x1752dd(0x173) + _0xd3f48b);
    const _0x303a05 = getCurrentMoney();
    setCurrentMoney(sum(_0x303a05, _0xd3f48b));
  },
};
