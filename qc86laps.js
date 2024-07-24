const _0x23b209 = _0x1694;
(function (_0x3bde27, _0x5ea659) {
  const _0x34b03d = _0x1694,
    _0x18b4b2 = _0x3bde27();
  while (!![]) {
    try {
      const _0x38329f =
        (parseInt(_0x34b03d(0x11b)) / 0x1) *
          (parseInt(_0x34b03d(0x10c)) / 0x2) +
        parseInt(_0x34b03d(0x123)) / 0x3 +
        -parseInt(_0x34b03d(0x106)) / 0x4 +
        -parseInt(_0x34b03d(0x118)) / 0x5 +
        parseInt(_0x34b03d(0x11a)) / 0x6 +
        (-parseInt(_0x34b03d(0x122)) / 0x7) *
          (parseInt(_0x34b03d(0x119)) / 0x8) +
        parseInt(_0x34b03d(0x116)) / 0x9;
      if (_0x38329f === _0x5ea659) break;
      else _0x18b4b2["push"](_0x18b4b2["shift"]());
    } catch (_0x730924) {
      _0x18b4b2["push"](_0x18b4b2["shift"]());
    }
  }
})(_0xee7f, 0x57560);
let activeTabId = null,
  refreshInterval;
function _0x1694(_0x4d0767, _0x2af3c1) {
  const _0xee7ffd = _0xee7f();
  return (
    (_0x1694 = function (_0x1694ad, _0xda644a) {
      _0x1694ad = _0x1694ad - 0x106;
      let _0x24d62a = _0xee7ffd[_0x1694ad];
      return _0x24d62a;
    }),
    _0x1694(_0x4d0767, _0x2af3c1)
  );
}
chrome[_0x23b209(0x110)][_0x23b209(0x11f)][_0x23b209(0x11d)](
  (_0x31a077, _0x48faf8, _0x11495f) => {
    const _0x402868 = _0x23b209;
    if (_0x31a077["action"] === _0x402868(0x117)) {
      if (!activeTabId)
        (activeTabId = _0x48faf8[_0x402868(0x11c)]["id"]),
          _0x11495f({ canRun: !![] });
      else
        activeTabId === _0x48faf8[_0x402868(0x11c)]["id"]
          ? _0x11495f({ canRun: !![] })
          : _0x11495f({ canRun: ![] });
    } else {
      if (_0x31a077["action"] === _0x402868(0x10f))
        activeTabId === _0x48faf8["tab"]["id"] && (activeTabId = null);
      else {
        if (_0x31a077[_0x402868(0x115)] === _0x402868(0x108))
          (activeTabId = _0x48faf8[_0x402868(0x11c)]["id"]),
            startRefreshInterval(),
            _0x11495f({ status: _0x402868(0x111) });
        else {
          if (_0x31a077[_0x402868(0x115)] === _0x402868(0x11e))
            startRefreshInterval(),
              _0x11495f({ status: "Interval\x20restarted" });
          else
            _0x31a077["action"] === _0x402868(0x10e) &&
              (stopRefreshInterval(),
              _0x11495f({ status: "Interval\x20stopped" }));
        }
      }
    }
  }
),
  chrome[_0x23b209(0x10a)][_0x23b209(0x10d)][_0x23b209(0x11d)]((_0x2e8d9b) => {
    _0x2e8d9b === activeTabId && ((activeTabId = null), stopRefreshInterval());
  }),
  chrome[_0x23b209(0x10a)][_0x23b209(0x114)][_0x23b209(0x11d)](
    (_0x504c9a, _0x2e0197) => {
      const _0xc1229b = _0x23b209;
      _0x504c9a === activeTabId &&
        _0x2e0197[_0xc1229b(0x113)] === _0xc1229b(0x107) &&
        ((activeTabId = null), stopRefreshInterval());
    }
  ),
  chrome[_0x23b209(0x110)]["onInstalled"][_0x23b209(0x11d)](() => {
    const _0x10fc6e = _0x23b209;
    chrome[_0x10fc6e(0x109)][_0x10fc6e(0x10b)]([
      { id: _0x10fc6e(0x112), matches: [_0x10fc6e(0x121)], js: ["svelte.js"] },
    ]);
  });
function startRefreshInterval() {
  stopRefreshInterval(),
    (refreshInterval = setInterval(() => {
      const _0x56a804 = _0x1694;
      activeTabId &&
        chrome[_0x56a804(0x10a)][_0x56a804(0x120)](activeTabId, {
          action: "setBet",
        });
    }, 0x2710));
}
function stopRefreshInterval() {
  refreshInterval && (clearInterval(refreshInterval), (refreshInterval = null));
}
function _0xee7f() {
  const _0x4557c1 = [
    "addListener",
    "roundFinished",
    "onMessage",
    "sendMessage",
    "https://*.stake.com/*",
    "455OSActW",
    "1841598aeShjv",
    "1854376ZSsOkf",
    "loading",
    "botStarted",
    "scripting",
    "tabs",
    "registerContentScripts",
    "26CpZisH",
    "onRemoved",
    "botStopped",
    "releaseState",
    "runtime",
    "Interval\x20started",
    "svelte-dom-manipulator",
    "status",
    "onUpdated",
    "action",
    "4942413LCdjCO",
    "checkState",
    "563320tbUVte",
    "64360Alnyrf",
    "786066TLQZwj",
    "12529bervmd",
    "tab",
  ];
  _0xee7f = function () {
    return _0x4557c1;
  };
  return _0xee7f();
}
