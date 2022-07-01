module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1656641689807, function(require, module, exports) {


if (process.env.NODE_ENV === "production") {
  module.exports = require("./use-gesture-react.cjs.prod.js");
} else {
  module.exports = require("./use-gesture-react.cjs.dev.js");
}

}, function(modId) {var map = {"./use-gesture-react.cjs.prod.js":1656641689808,"./use-gesture-react.cjs.dev.js":1656641689809}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689808, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', { value: true });

var actions = require('@use-gesture/core/actions');
var React = require('react');
var core = require('@use-gesture/core');
var utils = require('@use-gesture/core/utils');
var types = require('@use-gesture/core/types');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = React__default["default"].useMemo(() => new core.Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  React__default["default"].useEffect(ctrl.effect.bind(ctrl));
  React__default["default"].useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);

  if (config.target === undefined) {
    return ctrl.bind.bind(ctrl);
  }

  return undefined;
}

function useDrag(handler, config) {
  actions.registerAction(actions.dragAction);
  return useRecognizers({
    drag: handler
  }, config || {}, 'drag');
}

function usePinch(handler, config) {
  actions.registerAction(actions.pinchAction);
  return useRecognizers({
    pinch: handler
  }, config || {}, 'pinch');
}

function useWheel(handler, config) {
  actions.registerAction(actions.wheelAction);
  return useRecognizers({
    wheel: handler
  }, config || {}, 'wheel');
}

function useScroll(handler, config) {
  actions.registerAction(actions.scrollAction);
  return useRecognizers({
    scroll: handler
  }, config || {}, 'scroll');
}

function useMove(handler, config) {
  actions.registerAction(actions.moveAction);
  return useRecognizers({
    move: handler
  }, config || {}, 'move');
}

function useHover(handler, config) {
  actions.registerAction(actions.hoverAction);
  return useRecognizers({
    hover: handler
  }, config || {}, 'hover');
}

function createUseGesture(actions$1) {
  actions$1.forEach(actions.registerAction);
  return function useGesture(_handlers, _config) {
    const {
      handlers,
      nativeHandlers,
      config
    } = core.parseMergedHandlers(_handlers, _config || {});
    return useRecognizers(handlers, config, undefined, nativeHandlers);
  };
}

function useGesture(handlers, config) {
  const hook = createUseGesture([actions.dragAction, actions.pinchAction, actions.scrollAction, actions.wheelAction, actions.moveAction, actions.hoverAction]);
  return hook(handlers, config || {});
}

exports.createUseGesture = createUseGesture;
exports.useDrag = useDrag;
exports.useGesture = useGesture;
exports.useHover = useHover;
exports.useMove = useMove;
exports.usePinch = usePinch;
exports.useScroll = useScroll;
exports.useWheel = useWheel;
Object.keys(actions).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return actions[k]; }
  });
});
Object.keys(utils).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return utils[k]; }
  });
});
Object.keys(types).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return types[k]; }
  });
});

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689809, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', { value: true });

var actions = require('@use-gesture/core/actions');
var React = require('react');
var core = require('@use-gesture/core');
var utils = require('@use-gesture/core/utils');
var types = require('@use-gesture/core/types');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = React__default["default"].useMemo(() => new core.Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  React__default["default"].useEffect(ctrl.effect.bind(ctrl));
  React__default["default"].useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);

  if (config.target === undefined) {
    return ctrl.bind.bind(ctrl);
  }

  return undefined;
}

function useDrag(handler, config) {
  actions.registerAction(actions.dragAction);
  return useRecognizers({
    drag: handler
  }, config || {}, 'drag');
}

function usePinch(handler, config) {
  actions.registerAction(actions.pinchAction);
  return useRecognizers({
    pinch: handler
  }, config || {}, 'pinch');
}

function useWheel(handler, config) {
  actions.registerAction(actions.wheelAction);
  return useRecognizers({
    wheel: handler
  }, config || {}, 'wheel');
}

function useScroll(handler, config) {
  actions.registerAction(actions.scrollAction);
  return useRecognizers({
    scroll: handler
  }, config || {}, 'scroll');
}

function useMove(handler, config) {
  actions.registerAction(actions.moveAction);
  return useRecognizers({
    move: handler
  }, config || {}, 'move');
}

function useHover(handler, config) {
  actions.registerAction(actions.hoverAction);
  return useRecognizers({
    hover: handler
  }, config || {}, 'hover');
}

function createUseGesture(actions$1) {
  actions$1.forEach(actions.registerAction);
  return function useGesture(_handlers, _config) {
    const {
      handlers,
      nativeHandlers,
      config
    } = core.parseMergedHandlers(_handlers, _config || {});
    return useRecognizers(handlers, config, undefined, nativeHandlers);
  };
}

function useGesture(handlers, config) {
  const hook = createUseGesture([actions.dragAction, actions.pinchAction, actions.scrollAction, actions.wheelAction, actions.moveAction, actions.hoverAction]);
  return hook(handlers, config || {});
}

exports.createUseGesture = createUseGesture;
exports.useDrag = useDrag;
exports.useGesture = useGesture;
exports.useHover = useHover;
exports.useMove = useMove;
exports.usePinch = usePinch;
exports.useScroll = useScroll;
exports.useWheel = useWheel;
Object.keys(actions).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return actions[k]; }
  });
});
Object.keys(utils).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return utils[k]; }
  });
});
Object.keys(types).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return types[k]; }
  });
});

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1656641689807);
})()
//miniprogram-npm-outsideDeps=["@use-gesture/core/actions","react","@use-gesture/core","@use-gesture/core/utils","@use-gesture/core/types"]
//# sourceMappingURL=index.js.map