module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1656641689811, function(require, module, exports) {


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRafTimeout = exports.useRafInterval = exports.createUpdateEffect = exports.useFocusWithin = exports.clearCache = exports.useGetState = exports.useInfiniteScroll = exports.useFusionTable = exports.useAntdTable = exports.usePagination = exports.useTrackedEffect = exports.useRafState = exports.useLongPress = exports.useAsyncEffect = exports.useDeepCompareLayoutEffect = exports.useDeepCompareEffect = exports.useIsomorphicLayoutEffect = exports.useLatest = exports.useSafeState = exports.useExternal = exports.useUnmountedRef = exports.useLockFn = exports.useWebSocket = exports.useCountDown = exports.useFavicon = exports.useReactive = exports.useTimeout = exports.useNetwork = exports.useTitle = exports.useWhyDidYouUpdate = exports.useInterval = exports.useSetState = exports.useCookieState = exports.useHistoryTravel = exports.useEventTarget = exports.useTextSelection = exports.useUpdate = exports.useCounter = exports.useMount = exports.useDrop = exports.useDrag = exports.useCreation = exports.useMap = exports.useMemoizedFn = exports.useSet = exports.useUnmount = exports.useHover = exports.useEventListener = exports.useKeyPress = exports.useInViewport = exports.useFullscreen = exports.useClickAway = exports.useScroll = exports.useMouse = exports.usePrevious = exports.useDebounceEffect = exports.useDebounceFn = exports.useDebounce = exports.useThrottleEffect = exports.useThrottleFn = exports.useThrottle = exports.useSelections = exports.useDocumentVisibility = exports.useToggle = exports.useBoolean = exports.useUpdateLayoutEffect = exports.useUpdateEffect = exports.configResponsive = exports.useSize = exports.useSessionStorageState = exports.useLocalStorageState = exports.useEventEmitter = exports.useResponsive = exports.useVirtualList = exports.useDynamicList = exports.useControllableValue = exports.useRequest = void 0;

var createUpdateEffect_1 = require("./createUpdateEffect");

Object.defineProperty(exports, "createUpdateEffect", {
  enumerable: true,
  get: function get() {
    return createUpdateEffect_1.createUpdateEffect;
  }
});

var useAntdTable_1 = __importDefault(require("./useAntdTable"));

exports.useAntdTable = useAntdTable_1["default"];

var useAsyncEffect_1 = __importDefault(require("./useAsyncEffect"));

exports.useAsyncEffect = useAsyncEffect_1["default"];

var useBoolean_1 = __importDefault(require("./useBoolean"));

exports.useBoolean = useBoolean_1["default"];

var useClickAway_1 = __importDefault(require("./useClickAway"));

exports.useClickAway = useClickAway_1["default"];

var useControllableValue_1 = __importDefault(require("./useControllableValue"));

exports.useControllableValue = useControllableValue_1["default"];

var useCookieState_1 = __importDefault(require("./useCookieState"));

exports.useCookieState = useCookieState_1["default"];

var useCountDown_1 = __importDefault(require("./useCountDown"));

exports.useCountDown = useCountDown_1["default"];

var useCounter_1 = __importDefault(require("./useCounter"));

exports.useCounter = useCounter_1["default"];

var useCreation_1 = __importDefault(require("./useCreation"));

exports.useCreation = useCreation_1["default"];

var useDebounce_1 = __importDefault(require("./useDebounce"));

exports.useDebounce = useDebounce_1["default"];

var useDebounceEffect_1 = __importDefault(require("./useDebounceEffect"));

exports.useDebounceEffect = useDebounceEffect_1["default"];

var useDebounceFn_1 = __importDefault(require("./useDebounceFn"));

exports.useDebounceFn = useDebounceFn_1["default"];

var useDeepCompareEffect_1 = __importDefault(require("./useDeepCompareEffect"));

exports.useDeepCompareEffect = useDeepCompareEffect_1["default"];

var useDeepCompareLayoutEffect_1 = __importDefault(require("./useDeepCompareLayoutEffect"));

exports.useDeepCompareLayoutEffect = useDeepCompareLayoutEffect_1["default"];

var useDocumentVisibility_1 = __importDefault(require("./useDocumentVisibility"));

exports.useDocumentVisibility = useDocumentVisibility_1["default"];

var useDrag_1 = __importDefault(require("./useDrag"));

exports.useDrag = useDrag_1["default"];

var useDrop_1 = __importDefault(require("./useDrop"));

exports.useDrop = useDrop_1["default"];

var useDynamicList_1 = __importDefault(require("./useDynamicList"));

exports.useDynamicList = useDynamicList_1["default"];

var useEventEmitter_1 = __importDefault(require("./useEventEmitter"));

exports.useEventEmitter = useEventEmitter_1["default"];

var useEventListener_1 = __importDefault(require("./useEventListener"));

exports.useEventListener = useEventListener_1["default"];

var useEventTarget_1 = __importDefault(require("./useEventTarget"));

exports.useEventTarget = useEventTarget_1["default"];

var useExternal_1 = __importDefault(require("./useExternal"));

exports.useExternal = useExternal_1["default"];

var useFavicon_1 = __importDefault(require("./useFavicon"));

exports.useFavicon = useFavicon_1["default"];

var useFocusWithin_1 = __importDefault(require("./useFocusWithin"));

exports.useFocusWithin = useFocusWithin_1["default"];

var useFullscreen_1 = __importDefault(require("./useFullscreen"));

exports.useFullscreen = useFullscreen_1["default"];

var useFusionTable_1 = __importDefault(require("./useFusionTable"));

exports.useFusionTable = useFusionTable_1["default"];

var useGetState_1 = __importDefault(require("./useGetState"));

exports.useGetState = useGetState_1["default"];

var useHistoryTravel_1 = __importDefault(require("./useHistoryTravel"));

exports.useHistoryTravel = useHistoryTravel_1["default"];

var useHover_1 = __importDefault(require("./useHover"));

exports.useHover = useHover_1["default"];

var useInfiniteScroll_1 = __importDefault(require("./useInfiniteScroll"));

exports.useInfiniteScroll = useInfiniteScroll_1["default"];

var useInterval_1 = __importDefault(require("./useInterval"));

exports.useInterval = useInterval_1["default"];

var useInViewport_1 = __importDefault(require("./useInViewport"));

exports.useInViewport = useInViewport_1["default"];

var useIsomorphicLayoutEffect_1 = __importDefault(require("./useIsomorphicLayoutEffect"));

exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect_1["default"];

var useKeyPress_1 = __importDefault(require("./useKeyPress"));

exports.useKeyPress = useKeyPress_1["default"];

var useLatest_1 = __importDefault(require("./useLatest"));

exports.useLatest = useLatest_1["default"];

var useLocalStorageState_1 = __importDefault(require("./useLocalStorageState"));

exports.useLocalStorageState = useLocalStorageState_1["default"];

var useLockFn_1 = __importDefault(require("./useLockFn"));

exports.useLockFn = useLockFn_1["default"];

var useLongPress_1 = __importDefault(require("./useLongPress"));

exports.useLongPress = useLongPress_1["default"];

var useMap_1 = __importDefault(require("./useMap"));

exports.useMap = useMap_1["default"];

var useMemoizedFn_1 = __importDefault(require("./useMemoizedFn"));

exports.useMemoizedFn = useMemoizedFn_1["default"];

var useMount_1 = __importDefault(require("./useMount"));

exports.useMount = useMount_1["default"];

var useMouse_1 = __importDefault(require("./useMouse"));

exports.useMouse = useMouse_1["default"];

var useNetwork_1 = __importDefault(require("./useNetwork"));

exports.useNetwork = useNetwork_1["default"];

var usePagination_1 = __importDefault(require("./usePagination"));

exports.usePagination = usePagination_1["default"];

var usePrevious_1 = __importDefault(require("./usePrevious"));

exports.usePrevious = usePrevious_1["default"];

var useRafInterval_1 = __importDefault(require("./useRafInterval"));

exports.useRafInterval = useRafInterval_1["default"];

var useRafState_1 = __importDefault(require("./useRafState"));

exports.useRafState = useRafState_1["default"];

var useRafTimeout_1 = __importDefault(require("./useRafTimeout"));

exports.useRafTimeout = useRafTimeout_1["default"];

var useReactive_1 = __importDefault(require("./useReactive"));

exports.useReactive = useReactive_1["default"];

var useRequest_1 = __importStar(require("./useRequest"));

exports.useRequest = useRequest_1["default"];
Object.defineProperty(exports, "clearCache", {
  enumerable: true,
  get: function get() {
    return useRequest_1.clearCache;
  }
});

var useResponsive_1 = require("./useResponsive");

Object.defineProperty(exports, "configResponsive", {
  enumerable: true,
  get: function get() {
    return useResponsive_1.configResponsive;
  }
});
Object.defineProperty(exports, "useResponsive", {
  enumerable: true,
  get: function get() {
    return useResponsive_1.useResponsive;
  }
});

var useSafeState_1 = __importDefault(require("./useSafeState"));

exports.useSafeState = useSafeState_1["default"];

var useScroll_1 = __importDefault(require("./useScroll"));

exports.useScroll = useScroll_1["default"];

var useSelections_1 = __importDefault(require("./useSelections"));

exports.useSelections = useSelections_1["default"];

var useSessionStorageState_1 = __importDefault(require("./useSessionStorageState"));

exports.useSessionStorageState = useSessionStorageState_1["default"];

var useSet_1 = __importDefault(require("./useSet"));

exports.useSet = useSet_1["default"];

var useSetState_1 = __importDefault(require("./useSetState"));

exports.useSetState = useSetState_1["default"];

var useSize_1 = __importDefault(require("./useSize"));

exports.useSize = useSize_1["default"];

var useTextSelection_1 = __importDefault(require("./useTextSelection"));

exports.useTextSelection = useTextSelection_1["default"];

var useThrottle_1 = __importDefault(require("./useThrottle"));

exports.useThrottle = useThrottle_1["default"];

var useThrottleEffect_1 = __importDefault(require("./useThrottleEffect"));

exports.useThrottleEffect = useThrottleEffect_1["default"];

var useThrottleFn_1 = __importDefault(require("./useThrottleFn"));

exports.useThrottleFn = useThrottleFn_1["default"];

var useTimeout_1 = __importDefault(require("./useTimeout"));

exports.useTimeout = useTimeout_1["default"];

var useTitle_1 = __importDefault(require("./useTitle"));

exports.useTitle = useTitle_1["default"];

var useToggle_1 = __importDefault(require("./useToggle"));

exports.useToggle = useToggle_1["default"];

var useTrackedEffect_1 = __importDefault(require("./useTrackedEffect"));

exports.useTrackedEffect = useTrackedEffect_1["default"];

var useUnmount_1 = __importDefault(require("./useUnmount"));

exports.useUnmount = useUnmount_1["default"];

var useUnmountedRef_1 = __importDefault(require("./useUnmountedRef"));

exports.useUnmountedRef = useUnmountedRef_1["default"];

var useUpdate_1 = __importDefault(require("./useUpdate"));

exports.useUpdate = useUpdate_1["default"];

var useUpdateEffect_1 = __importDefault(require("./useUpdateEffect"));

exports.useUpdateEffect = useUpdateEffect_1["default"];

var useUpdateLayoutEffect_1 = __importDefault(require("./useUpdateLayoutEffect"));

exports.useUpdateLayoutEffect = useUpdateLayoutEffect_1["default"];

var useVirtualList_1 = __importDefault(require("./useVirtualList"));

exports.useVirtualList = useVirtualList_1["default"];

var useWebSocket_1 = __importDefault(require("./useWebSocket"));

exports.useWebSocket = useWebSocket_1["default"];

var useWhyDidYouUpdate_1 = __importDefault(require("./useWhyDidYouUpdate"));

exports.useWhyDidYouUpdate = useWhyDidYouUpdate_1["default"];
}, function(modId) {var map = {"./createUpdateEffect":1656641689812,"./useAntdTable":1656641689813,"./useAsyncEffect":1656641689845,"./useBoolean":1656641689846,"./useClickAway":1656641689848,"./useControllableValue":1656641689854,"./useCookieState":1656641689855,"./useCountDown":1656641689856,"./useCounter":1656641689857,"./useCreation":1656641689822,"./useDebounce":1656641689858,"./useDebounceEffect":1656641689860,"./useDebounceFn":1656641689859,"./useDeepCompareEffect":1656641689861,"./useDeepCompareLayoutEffect":1656641689863,"./useDocumentVisibility":1656641689864,"./useDrag":1656641689866,"./useDrop":1656641689867,"./useDynamicList":1656641689868,"./useEventEmitter":1656641689869,"./useEventListener":1656641689865,"./useEventTarget":1656641689870,"./useExternal":1656641689871,"./useFavicon":1656641689872,"./useFocusWithin":1656641689873,"./useFullscreen":1656641689874,"./useFusionTable":1656641689875,"./useGetState":1656641689877,"./useHistoryTravel":1656641689878,"./useHover":1656641689879,"./useInfiniteScroll":1656641689880,"./useInterval":1656641689882,"./useInViewport":1656641689883,"./useIsomorphicLayoutEffect":1656641689884,"./useKeyPress":1656641689885,"./useLatest":1656641689825,"./useLocalStorageState":1656641689887,"./useLockFn":1656641689889,"./useLongPress":1656641689890,"./useMap":1656641689891,"./useMemoizedFn":1656641689814,"./useMount":1656641689842,"./useMouse":1656641689892,"./useNetwork":1656641689894,"./usePagination":1656641689816,"./usePrevious":1656641689895,"./useRafInterval":1656641689896,"./useRafState":1656641689893,"./useRafTimeout":1656641689897,"./useReactive":1656641689898,"./useRequest":1656641689817,"./useResponsive":1656641689899,"./useSafeState":1656641689900,"./useScroll":1656641689902,"./useSelections":1656641689903,"./useSessionStorageState":1656641689904,"./useSet":1656641689905,"./useSetState":1656641689906,"./useSize":1656641689907,"./useTextSelection":1656641689910,"./useThrottle":1656641689911,"./useThrottleEffect":1656641689913,"./useThrottleFn":1656641689912,"./useTimeout":1656641689914,"./useTitle":1656641689915,"./useToggle":1656641689847,"./useTrackedEffect":1656641689916,"./useUnmount":1656641689824,"./useUnmountedRef":1656641689901,"./useUpdate":1656641689843,"./useUpdateEffect":1656641689820,"./useUpdateLayoutEffect":1656641689917,"./useVirtualList":1656641689918,"./useWebSocket":1656641689919,"./useWhyDidYouUpdate":1656641689920}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689812, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUpdateEffect = void 0;

var react_1 = require("react");

exports.createUpdateEffect = function (hook) {
  return function (effect, deps) {
    var isMounted = react_1.useRef(false); // for react-refresh

    hook(function () {
      return function () {
        isMounted.current = false;
      };
    }, []);
    hook(function () {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };
};
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689813, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var usePagination_1 = __importDefault(require("../usePagination"));

var useUpdateEffect_1 = __importDefault(require("../useUpdateEffect"));

var useAntdTable = function useAntdTable(service, options) {
  var _a;

  if (options === void 0) {
    options = {};
  }

  var form = options.form,
      _b = options.defaultType,
      defaultType = _b === void 0 ? 'simple' : _b,
      defaultParams = options.defaultParams,
      _c = options.manual,
      manual = _c === void 0 ? false : _c,
      _d = options.refreshDeps,
      refreshDeps = _d === void 0 ? [] : _d,
      _e = options.ready,
      ready = _e === void 0 ? true : _e,
      rest = __rest(options, ["form", "defaultType", "defaultParams", "manual", "refreshDeps", "ready"]);

  var result = usePagination_1["default"](service, __assign({
    manual: true
  }, rest));
  var _f = result.params,
      params = _f === void 0 ? [] : _f,
      run = result.run;
  var cacheFormTableData = params[2] || {};

  var _g = __read(react_1.useState((cacheFormTableData === null || cacheFormTableData === void 0 ? void 0 : cacheFormTableData.type) || defaultType), 2),
      type = _g[0],
      setType = _g[1];

  var allFormDataRef = react_1.useRef({});
  var defaultDataSourceRef = react_1.useRef([]);
  var isAntdV4 = !!(form === null || form === void 0 ? void 0 : form.getInternalHooks); // get current active field values

  var getActivetFieldValues = function getActivetFieldValues() {
    if (!form) {
      return {};
    } // antd 4


    if (isAntdV4) {
      return form.getFieldsValue(null, function () {
        return true;
      });
    } // antd 3


    var allFieldsValue = form.getFieldsValue();
    var activeFieldsValue = {};
    Object.keys(allFieldsValue).forEach(function (key) {
      if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
        activeFieldsValue[key] = allFieldsValue[key];
      }
    });
    return activeFieldsValue;
  };

  var validateFields = function validateFields() {
    if (!form) {
      return Promise.resolve({});
    }

    var activeFieldsValue = getActivetFieldValues();
    var fields = Object.keys(activeFieldsValue); // antd 4

    if (isAntdV4) {
      return form.validateFields(fields);
    } // antd 3


    return new Promise(function (resolve, reject) {
      form.validateFields(fields, function (errors, values) {
        if (errors) {
          reject(errors);
        } else {
          resolve(values);
        }
      });
    });
  };

  var restoreForm = function restoreForm() {
    if (!form) {
      return;
    } // antd v4


    if (isAntdV4) {
      return form.setFieldsValue(allFormDataRef.current);
    } // antd v3


    var activeFieldsValue = {};
    Object.keys(allFormDataRef.current).forEach(function (key) {
      if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
        activeFieldsValue[key] = allFormDataRef.current[key];
      }
    });
    form.setFieldsValue(activeFieldsValue);
  };

  var changeType = function changeType() {
    var activeFieldsValue = getActivetFieldValues();
    allFormDataRef.current = __assign(__assign({}, allFormDataRef.current), activeFieldsValue);
    setType(function (t) {
      return t === 'simple' ? 'advance' : 'simple';
    });
  };

  var _submit = function _submit(initPagination) {
    if (!ready) {
      return;
    }

    setTimeout(function () {
      validateFields().then(function (values) {
        if (values === void 0) {
          values = {};
        }

        var pagination = initPagination || __assign(__assign({
          pageSize: options.defaultPageSize || 10
        }, (params === null || params === void 0 ? void 0 : params[0]) || {}), {
          current: 1
        });

        if (!form) {
          // @ts-ignore
          run(pagination);
          return;
        } // record all form data


        allFormDataRef.current = __assign(__assign({}, allFormDataRef.current), values); // @ts-ignore

        run(pagination, values, {
          allFormData: allFormDataRef.current,
          type: type
        });
      })["catch"](function (err) {
        return err;
      });
    });
  };

  var reset = function reset() {
    if (form) {
      form.resetFields();
    }

    _submit();
  };

  var submit = function submit(e) {
    var _a;

    (_a = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _a === void 0 ? void 0 : _a.call(e);

    _submit();
  };

  var onTableChange = function onTableChange(pagination, filters, sorter) {
    var _a = __read(params || []),
        oldPaginationParams = _a[0],
        restParams = _a.slice(1);

    run.apply(void 0, __spread([__assign(__assign({}, oldPaginationParams), {
      current: pagination.current,
      pageSize: pagination.pageSize,
      filters: filters,
      sorter: sorter
    })], restParams));
  }; // init


  react_1.useEffect(function () {
    // if has cache, use cached params. ignore manual and ready.
    if (params.length > 0) {
      allFormDataRef.current = (cacheFormTableData === null || cacheFormTableData === void 0 ? void 0 : cacheFormTableData.allFormData) || {};
      restoreForm(); // @ts-ignore

      run.apply(void 0, __spread(params));
      return;
    }

    if (!manual && ready) {
      allFormDataRef.current = (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[1]) || {};
      restoreForm();

      _submit(defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]);
    }
  }, []); // change search type, restore form data

  useUpdateEffect_1["default"](function () {
    if (!ready) {
      return;
    }

    restoreForm();
  }, [type]); // refresh & ready change on the same time

  var hasAutoRun = react_1.useRef(false);
  hasAutoRun.current = false;
  useUpdateEffect_1["default"](function () {
    if (!manual && ready) {
      hasAutoRun.current = true;

      if (form) {
        form.resetFields();
      }

      allFormDataRef.current = (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[1]) || {};
      restoreForm();

      _submit(defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]);
    }
  }, [ready]);
  useUpdateEffect_1["default"](function () {
    if (hasAutoRun.current) {
      return;
    }

    if (!ready) {
      return;
    }

    if (!manual) {
      hasAutoRun.current = true;
      result.pagination.changeCurrent(1);
    }
  }, __spread(refreshDeps));
  return __assign(__assign({}, result), {
    tableProps: {
      dataSource: ((_a = result.data) === null || _a === void 0 ? void 0 : _a.list) || defaultDataSourceRef.current,
      loading: result.loading,
      onChange: useMemoizedFn_1["default"](onTableChange),
      pagination: {
        current: result.pagination.current,
        pageSize: result.pagination.pageSize,
        total: result.pagination.total
      }
    },
    search: {
      submit: useMemoizedFn_1["default"](submit),
      type: type,
      changeType: useMemoizedFn_1["default"](changeType),
      reset: useMemoizedFn_1["default"](reset)
    }
  });
};

exports["default"] = useAntdTable;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814,"../usePagination":1656641689816,"../useUpdateEffect":1656641689820}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689814, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var utils_1 = require("../utils");

function useMemoizedFn(fn) {
  if (process.env.NODE_ENV === 'development') {
    if (!utils_1.isFunction(fn)) {
      console.error("useMemoizedFn expected parameter is a function, got " + typeof fn);
    }
  }

  var fnRef = react_1.useRef(fn); // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728

  fnRef.current = react_1.useMemo(function () {
    return fn;
  }, [fn]);
  var memoizedFn = react_1.useRef();

  if (!memoizedFn.current) {
    memoizedFn.current = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current;
}

exports["default"] = useMemoizedFn;
}, function(modId) { var map = {"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689815, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndef = exports.isNumber = exports.isBoolean = exports.isString = exports.isFunction = exports.isObject = void 0;

exports.isObject = function (value) {
  return value !== null && typeof value === 'object';
};

exports.isFunction = function (value) {
  return typeof value === 'function';
};

exports.isString = function (value) {
  return typeof value === 'string';
};

exports.isBoolean = function (value) {
  return typeof value === 'boolean';
};

exports.isNumber = function (value) {
  return typeof value === 'number';
};

exports.isUndef = function (value) {
  return typeof value === 'undefined';
};
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689816, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var useRequest_1 = __importDefault(require("../useRequest"));

var usePagination = function usePagination(service, options) {
  var _a;

  if (options === void 0) {
    options = {};
  }

  var _b = options.defaultPageSize,
      defaultPageSize = _b === void 0 ? 10 : _b,
      rest = __rest(options, ["defaultPageSize"]);

  var result = useRequest_1["default"](service, __assign({
    defaultParams: [{
      current: 1,
      pageSize: defaultPageSize
    }],
    refreshDepsAction: function refreshDepsAction() {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      changeCurrent(1);
    }
  }, rest));

  var _c = result.params[0] || {},
      _d = _c.current,
      current = _d === void 0 ? 1 : _d,
      _e = _c.pageSize,
      pageSize = _e === void 0 ? defaultPageSize : _e;

  var total = ((_a = result.data) === null || _a === void 0 ? void 0 : _a.total) || 0;
  var totalPage = react_1.useMemo(function () {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);

  var onChange = function onChange(c, p) {
    var toCurrent = c <= 0 ? 1 : c;
    var toPageSize = p <= 0 ? 1 : p;
    var tempTotalPage = Math.ceil(total / toPageSize);

    if (toCurrent > tempTotalPage) {
      toCurrent = Math.max(1, tempTotalPage);
    }

    var _a = __read(result.params || []),
        _b = _a[0],
        oldPaginationParams = _b === void 0 ? {} : _b,
        restParams = _a.slice(1);

    result.run.apply(result, __spread([__assign(__assign({}, oldPaginationParams), {
      current: toCurrent,
      pageSize: toPageSize
    })], restParams));
  };

  var changeCurrent = function changeCurrent(c) {
    onChange(c, pageSize);
  };

  var changePageSize = function changePageSize(p) {
    onChange(current, p);
  };

  return __assign(__assign({}, result), {
    pagination: {
      current: current,
      pageSize: pageSize,
      total: total,
      totalPage: totalPage,
      onChange: useMemoizedFn_1["default"](onChange),
      changeCurrent: useMemoizedFn_1["default"](changeCurrent),
      changePageSize: useMemoizedFn_1["default"](changePageSize)
    }
  });
};

exports["default"] = usePagination;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814,"../useRequest":1656641689817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689817, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCache = void 0;

var useRequest_1 = __importDefault(require("./src/useRequest"));

var cache_1 = require("./src/utils/cache");

Object.defineProperty(exports, "clearCache", {
  enumerable: true,
  get: function get() {
    return cache_1.clearCache;
  }
});
exports["default"] = useRequest_1["default"];
}, function(modId) { var map = {"./src/useRequest":1656641689818,"./src/utils/cache":1656641689826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689818, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useAutoRunPlugin_1 = __importDefault(require("./plugins/useAutoRunPlugin"));

var useCachePlugin_1 = __importDefault(require("./plugins/useCachePlugin"));

var useDebouncePlugin_1 = __importDefault(require("./plugins/useDebouncePlugin"));

var useLoadingDelayPlugin_1 = __importDefault(require("./plugins/useLoadingDelayPlugin"));

var usePollingPlugin_1 = __importDefault(require("./plugins/usePollingPlugin"));

var useRefreshOnWindowFocusPlugin_1 = __importDefault(require("./plugins/useRefreshOnWindowFocusPlugin"));

var useRetryPlugin_1 = __importDefault(require("./plugins/useRetryPlugin"));

var useThrottlePlugin_1 = __importDefault(require("./plugins/useThrottlePlugin"));

var useRequestImplement_1 = __importDefault(require("./useRequestImplement")); // function useRequest<TData, TParams extends any[], TFormated, TTFormated extends TFormated = any>(
//   service: Service<TData, TParams>,
//   options: OptionsWithFormat<TData, TParams, TFormated, TTFormated>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TFormated, TParams>
// function useRequest<TData, TParams extends any[]>(
//   service: Service<TData, TParams>,
//   options?: OptionsWithoutFormat<TData, TParams>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TData, TParams>


function useRequest(service, options, plugins) {
  return useRequestImplement_1["default"](service, options, __spread(plugins || [], [useDebouncePlugin_1["default"], useLoadingDelayPlugin_1["default"], usePollingPlugin_1["default"], useRefreshOnWindowFocusPlugin_1["default"], useThrottlePlugin_1["default"], useAutoRunPlugin_1["default"], useCachePlugin_1["default"], useRetryPlugin_1["default"]]));
}

exports["default"] = useRequest;
}, function(modId) { var map = {"./plugins/useAutoRunPlugin":1656641689819,"./plugins/useCachePlugin":1656641689821,"./plugins/useDebouncePlugin":1656641689829,"./plugins/useLoadingDelayPlugin":1656641689830,"./plugins/usePollingPlugin":1656641689831,"./plugins/useRefreshOnWindowFocusPlugin":1656641689835,"./plugins/useRetryPlugin":1656641689839,"./plugins/useThrottlePlugin":1656641689840,"./useRequestImplement":1656641689841}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689819, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUpdateEffect_1 = __importDefault(require("../../../useUpdateEffect")); // support refreshDeps & ready


var useAutoRunPlugin = function useAutoRunPlugin(fetchInstance, _a) {
  var manual = _a.manual,
      _b = _a.ready,
      ready = _b === void 0 ? true : _b,
      _c = _a.defaultParams,
      defaultParams = _c === void 0 ? [] : _c,
      _d = _a.refreshDeps,
      refreshDeps = _d === void 0 ? [] : _d,
      refreshDepsAction = _a.refreshDepsAction;
  var hasAutoRun = react_1.useRef(false);
  hasAutoRun.current = false;
  useUpdateEffect_1["default"](function () {
    if (!manual && ready) {
      hasAutoRun.current = true;
      fetchInstance.run.apply(fetchInstance, __spread(defaultParams));
    }
  }, [ready]);
  useUpdateEffect_1["default"](function () {
    if (hasAutoRun.current) {
      return;
    }

    if (!manual) {
      hasAutoRun.current = true;

      if (refreshDepsAction) {
        refreshDepsAction();
      } else {
        fetchInstance.refresh();
      }
    }
  }, __spread(refreshDeps));
  return {
    onBefore: function onBefore() {
      if (!ready) {
        return {
          stopNow: true
        };
      }
    }
  };
};

useAutoRunPlugin.onInit = function (_a) {
  var _b = _a.ready,
      ready = _b === void 0 ? true : _b,
      manual = _a.manual;
  return {
    loading: !manual && ready
  };
};

exports["default"] = useAutoRunPlugin;
}, function(modId) { var map = {"../../../useUpdateEffect":1656641689820}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689820, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var createUpdateEffect_1 = require("../createUpdateEffect");

exports["default"] = createUpdateEffect_1.createUpdateEffect(react_1.useEffect);
}, function(modId) { var map = {"../createUpdateEffect":1656641689812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689821, function(require, module, exports) {


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useCreation_1 = __importDefault(require("../../../useCreation"));

var useUnmount_1 = __importDefault(require("../../../useUnmount"));

var cache = __importStar(require("../utils/cache"));

var cachePromise = __importStar(require("../utils/cachePromise"));

var cacheSubscribe = __importStar(require("../utils/cacheSubscribe"));

var useCachePlugin = function useCachePlugin(fetchInstance, _a) {
  var cacheKey = _a.cacheKey,
      _b = _a.cacheTime,
      cacheTime = _b === void 0 ? 5 * 60 * 1000 : _b,
      _c = _a.staleTime,
      staleTime = _c === void 0 ? 0 : _c,
      customSetCache = _a.setCache,
      customGetCache = _a.getCache;
  var unSubscribeRef = react_1.useRef();
  var currentPromiseRef = react_1.useRef();

  var _setCache = function _setCache(key, cachedData) {
    if (customSetCache) {
      customSetCache(cachedData);
    } else {
      cache.setCache(key, cacheTime, cachedData);
    }

    cacheSubscribe.trigger(key, cachedData.data);
  };

  var _getCache = function _getCache(key, params) {
    if (params === void 0) {
      params = [];
    }

    if (customGetCache) {
      return customGetCache(params);
    }

    return cache.getCache(key);
  };

  useCreation_1["default"](function () {
    if (!cacheKey) {
      return;
    } // get data from cache when init


    var cacheData = _getCache(cacheKey);

    if (cacheData && Object.hasOwnProperty.call(cacheData, 'data')) {
      fetchInstance.state.data = cacheData.data;
      fetchInstance.state.params = cacheData.params;

      if (staleTime === -1 || new Date().getTime() - cacheData.time <= staleTime) {
        fetchInstance.state.loading = false;
      }
    } // subscribe same cachekey update, trigger update


    unSubscribeRef.current = cacheSubscribe.subscribe(cacheKey, function (data) {
      fetchInstance.setState({
        data: data
      });
    });
  }, []);
  useUnmount_1["default"](function () {
    var _a;

    (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);
  });

  if (!cacheKey) {
    return {};
  }

  return {
    onBefore: function onBefore(params) {
      var cacheData = _getCache(cacheKey, params);

      if (!cacheData || !Object.hasOwnProperty.call(cacheData, 'data')) {
        return {};
      } // If the data is fresh, stop request


      if (staleTime === -1 || new Date().getTime() - cacheData.time <= staleTime) {
        return {
          loading: false,
          data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data,
          returnNow: true
        };
      } else {
        // If the data is stale, return data, and request continue
        return {
          data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data
        };
      }
    },
    onRequest: function onRequest(service, args) {
      var servicePromise = cachePromise.getCachePromise(cacheKey); // If has servicePromise, and is not trigger by self, then use it

      if (servicePromise && servicePromise !== currentPromiseRef.current) {
        return {
          servicePromise: servicePromise
        };
      }

      servicePromise = service.apply(void 0, __spread(args));
      currentPromiseRef.current = servicePromise;
      cachePromise.setCachePromise(cacheKey, servicePromise);
      return {
        servicePromise: servicePromise
      };
    },
    onSuccess: function onSuccess(data, params) {
      var _a;

      if (cacheKey) {
        // cancel subscribe, avoid trgger self
        (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);

        _setCache(cacheKey, {
          data: data,
          params: params,
          time: new Date().getTime()
        }); // resubscribe


        unSubscribeRef.current = cacheSubscribe.subscribe(cacheKey, function (d) {
          fetchInstance.setState({
            data: d
          });
        });
      }
    },
    onMutate: function onMutate(data) {
      var _a;

      if (cacheKey) {
        // cancel subscribe, avoid trgger self
        (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);

        _setCache(cacheKey, {
          data: data,
          params: fetchInstance.state.params,
          time: new Date().getTime()
        }); // resubscribe


        unSubscribeRef.current = cacheSubscribe.subscribe(cacheKey, function (d) {
          fetchInstance.setState({
            data: d
          });
        });
      }
    }
  };
};

exports["default"] = useCachePlugin;
}, function(modId) { var map = {"../../../useCreation":1656641689822,"../../../useUnmount":1656641689824,"../utils/cache":1656641689826,"../utils/cachePromise":1656641689827,"../utils/cacheSubscribe":1656641689828}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689822, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var depsAreSame_1 = __importDefault(require("../utils/depsAreSame"));

function useCreation(factory, deps) {
  var current = react_1.useRef({
    deps: deps,
    obj: undefined,
    initialized: false
  }).current;

  if (current.initialized === false || !depsAreSame_1["default"](current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }

  return current.obj;
}

exports["default"] = useCreation;
}, function(modId) { var map = {"../utils/depsAreSame":1656641689823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689823, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps) return true;

  for (var i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }

  return true;
}

exports["default"] = depsAreSame;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689824, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var utils_1 = require("../utils");

var useUnmount = function useUnmount(fn) {
  if (process.env.NODE_ENV === 'development') {
    if (!utils_1.isFunction(fn)) {
      console.error("useUnmount expected parameter is a function, got " + typeof fn);
    }
  }

  var fnRef = useLatest_1["default"](fn);
  react_1.useEffect(function () {
    return function () {
      fnRef.current();
    };
  }, []);
};

exports["default"] = useUnmount;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689825, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

function useLatest(value) {
  var ref = react_1.useRef(value);
  ref.current = value;
  return ref;
}

exports["default"] = useLatest;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689826, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCache = exports.setCache = exports.getCache = void 0;
var cache = new Map();

var setCache = function setCache(key, cacheTime, cachedData) {
  var currentCache = cache.get(key);

  if (currentCache === null || currentCache === void 0 ? void 0 : currentCache.timer) {
    clearTimeout(currentCache.timer);
  }

  var timer = undefined;

  if (cacheTime > -1) {
    // if cache out, clear it
    timer = setTimeout(function () {
      cache["delete"](key);
    }, cacheTime);
  }

  cache.set(key, __assign(__assign({}, cachedData), {
    timer: timer
  }));
};

exports.setCache = setCache;

var getCache = function getCache(key) {
  return cache.get(key);
};

exports.getCache = getCache;

var clearCache = function clearCache(key) {
  if (key) {
    var cacheKeys = Array.isArray(key) ? key : [key];
    cacheKeys.forEach(function (cacheKey) {
      return cache["delete"](cacheKey);
    });
  } else {
    cache.clear();
  }
};

exports.clearCache = clearCache;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689827, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCachePromise = exports.getCachePromise = void 0;
var cachePromise = new Map();

var getCachePromise = function getCachePromise(cacheKey) {
  return cachePromise.get(cacheKey);
};

exports.getCachePromise = getCachePromise;

var setCachePromise = function setCachePromise(cacheKey, promise) {
  // Should cache the same promise, cannot be promise.finally
  // Because the promise.finally will change the reference of the promise
  cachePromise.set(cacheKey, promise); // no use promise.finally for compatibility

  promise.then(function (res) {
    cachePromise["delete"](cacheKey);
    return res;
  })["catch"](function () {
    cachePromise["delete"](cacheKey);
  });
};

exports.setCachePromise = setCachePromise;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689828, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = exports.trigger = void 0;
var listeners = {};

var trigger = function trigger(key, data) {
  if (listeners[key]) {
    listeners[key].forEach(function (item) {
      return item(data);
    });
  }
};

exports.trigger = trigger;

var subscribe = function subscribe(key, listener) {
  if (!listeners[key]) {
    listeners[key] = [];
  }

  listeners[key].push(listener);
  return function unsubscribe() {
    var index = listeners[key].indexOf(listener);
    listeners[key].splice(index, 1);
  };
};

exports.subscribe = subscribe;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689829, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var debounce_1 = __importDefault(require("lodash/debounce"));

var react_1 = require("react");

var useDebouncePlugin = function useDebouncePlugin(fetchInstance, _a) {
  var debounceWait = _a.debounceWait,
      debounceLeading = _a.debounceLeading,
      debounceTrailing = _a.debounceTrailing,
      debounceMaxWait = _a.debounceMaxWait;
  var debouncedRef = react_1.useRef();
  var options = react_1.useMemo(function () {
    var ret = {};

    if (debounceLeading !== undefined) {
      ret.leading = debounceLeading;
    }

    if (debounceTrailing !== undefined) {
      ret.trailing = debounceTrailing;
    }

    if (debounceMaxWait !== undefined) {
      ret.maxWait = debounceMaxWait;
    }

    return ret;
  }, [debounceLeading, debounceTrailing, debounceMaxWait]);
  react_1.useEffect(function () {
    if (debounceWait) {
      var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);

      debouncedRef.current = debounce_1["default"](function (callback) {
        callback();
      }, debounceWait, options); // debounce runAsync should be promise
      // https://github.com/lodash/lodash/issues/4400#issuecomment-834800398

      fetchInstance.runAsync = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return new Promise(function (resolve, reject) {
          var _a;

          (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.call(debouncedRef, function () {
            _originRunAsync_1.apply(void 0, __spread(args)).then(resolve)["catch"](reject);
          });
        });
      };

      return function () {
        var _a;

        (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
        fetchInstance.runAsync = _originRunAsync_1;
      };
    }
  }, [debounceWait, options]);

  if (!debounceWait) {
    return {};
  }

  return {
    onCancel: function onCancel() {
      var _a;

      (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
    }
  };
};

exports["default"] = useDebouncePlugin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689830, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useLoadingDelayPlugin = function useLoadingDelayPlugin(fetchInstance, _a) {
  var loadingDelay = _a.loadingDelay;
  var timerRef = react_1.useRef();

  if (!loadingDelay) {
    return {};
  }

  var cancelTimeout = function cancelTimeout() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return {
    onBefore: function onBefore() {
      cancelTimeout();
      timerRef.current = setTimeout(function () {
        fetchInstance.setState({
          loading: true
        });
      }, loadingDelay);
      return {
        loading: false
      };
    },
    onFinally: function onFinally() {
      cancelTimeout();
    },
    onCancel: function onCancel() {
      cancelTimeout();
    }
  };
};

exports["default"] = useLoadingDelayPlugin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689831, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUpdateEffect_1 = __importDefault(require("../../../useUpdateEffect"));

var isDocumentVisible_1 = __importDefault(require("../utils/isDocumentVisible"));

var subscribeReVisible_1 = __importDefault(require("../utils/subscribeReVisible"));

var usePollingPlugin = function usePollingPlugin(fetchInstance, _a) {
  var pollingInterval = _a.pollingInterval,
      _b = _a.pollingWhenHidden,
      pollingWhenHidden = _b === void 0 ? true : _b,
      _c = _a.pollingErrorRetryCount,
      pollingErrorRetryCount = _c === void 0 ? -1 : _c;
  var timerRef = react_1.useRef();
  var unsubscribeRef = react_1.useRef();
  var countRef = react_1.useRef(0);

  var stopPolling = function stopPolling() {
    var _a;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    (_a = unsubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unsubscribeRef);
  };

  useUpdateEffect_1["default"](function () {
    if (!pollingInterval) {
      stopPolling();
    }
  }, [pollingInterval]);

  if (!pollingInterval) {
    return {};
  }

  return {
    onBefore: function onBefore() {
      stopPolling();
    },
    onError: function onError() {
      countRef.current += 1;
    },
    onSuccess: function onSuccess() {
      countRef.current = 0;
    },
    onFinally: function onFinally() {
      if (pollingErrorRetryCount === -1 || // When an error occurs, the request is not repeated after pollingErrorRetryCount retries
      pollingErrorRetryCount !== -1 && countRef.current <= pollingErrorRetryCount) {
        // if pollingWhenHidden = false && document is hidden, then stop polling and subscribe revisible
        if (!pollingWhenHidden && !isDocumentVisible_1["default"]()) {
          unsubscribeRef.current = subscribeReVisible_1["default"](function () {
            fetchInstance.refresh();
          });
          return;
        }

        timerRef.current = setTimeout(function () {
          fetchInstance.refresh();
        }, pollingInterval);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: function onCancel() {
      stopPolling();
    }
  };
};

exports["default"] = usePollingPlugin;
}, function(modId) { var map = {"../../../useUpdateEffect":1656641689820,"../utils/isDocumentVisible":1656641689832,"../utils/subscribeReVisible":1656641689834}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689832, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var canUseDom_1 = __importDefault(require("../../../utils/canUseDom"));

function isDocumentVisible() {
  if (canUseDom_1["default"]()) {
    return document.visibilityState !== 'hidden';
  }

  return true;
}

exports["default"] = isDocumentVisible;
}, function(modId) { var map = {"../../../utils/canUseDom":1656641689833}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689833, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

exports["default"] = canUseDom;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689834, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var canUseDom_1 = __importDefault(require("../../../utils/canUseDom"));

var isDocumentVisible_1 = __importDefault(require("./isDocumentVisible"));

var listeners = [];

function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

if (canUseDom_1["default"]()) {
  var revalidate = function revalidate() {
    if (!isDocumentVisible_1["default"]()) return;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };

  window.addEventListener('visibilitychange', revalidate, false);
}

exports["default"] = subscribe;
}, function(modId) { var map = {"../../../utils/canUseDom":1656641689833,"./isDocumentVisible":1656641689832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689835, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUnmount_1 = __importDefault(require("../../../useUnmount"));

var limit_1 = __importDefault(require("../utils/limit"));

var subscribeFocus_1 = __importDefault(require("../utils/subscribeFocus"));

var useRefreshOnWindowFocusPlugin = function useRefreshOnWindowFocusPlugin(fetchInstance, _a) {
  var refreshOnWindowFocus = _a.refreshOnWindowFocus,
      _b = _a.focusTimespan,
      focusTimespan = _b === void 0 ? 5000 : _b;
  var unsubscribeRef = react_1.useRef();

  var stopSubscribe = function stopSubscribe() {
    var _a;

    (_a = unsubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unsubscribeRef);
  };

  react_1.useEffect(function () {
    if (refreshOnWindowFocus) {
      var limitRefresh_1 = limit_1["default"](fetchInstance.refresh.bind(fetchInstance), focusTimespan);
      unsubscribeRef.current = subscribeFocus_1["default"](function () {
        limitRefresh_1();
      });
    }

    return function () {
      stopSubscribe();
    };
  }, [refreshOnWindowFocus, focusTimespan]);
  useUnmount_1["default"](function () {
    stopSubscribe();
  });
  return {};
};

exports["default"] = useRefreshOnWindowFocusPlugin;
}, function(modId) { var map = {"../../../useUnmount":1656641689824,"../utils/limit":1656641689836,"../utils/subscribeFocus":1656641689837}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689836, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

function limit(fn, timespan) {
  var pending = false;
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (pending) return;
    pending = true;
    fn.apply(void 0, __spread(args));
    setTimeout(function () {
      pending = false;
    }, timespan);
  };
}

exports["default"] = limit;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689837, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // from swr

var canUseDom_1 = __importDefault(require("../../../utils/canUseDom"));

var isDocumentVisible_1 = __importDefault(require("./isDocumentVisible"));

var isOnline_1 = __importDefault(require("./isOnline"));

var listeners = [];

function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

if (canUseDom_1["default"]()) {
  var revalidate = function revalidate() {
    if (!isDocumentVisible_1["default"]() || !isOnline_1["default"]()) return;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };

  window.addEventListener('visibilitychange', revalidate, false);
  window.addEventListener('focus', revalidate, false);
}

exports["default"] = subscribe;
}, function(modId) { var map = {"../../../utils/canUseDom":1656641689833,"./isDocumentVisible":1656641689832,"./isOnline":1656641689838}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689838, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var canUseDom_1 = __importDefault(require("../../../utils/canUseDom"));

function isOnline() {
  if (canUseDom_1["default"]() && typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  }

  return true;
}

exports["default"] = isOnline;
}, function(modId) { var map = {"../../../utils/canUseDom":1656641689833}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689839, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useRetryPlugin = function useRetryPlugin(fetchInstance, _a) {
  var retryInterval = _a.retryInterval,
      retryCount = _a.retryCount;
  var timerRef = react_1.useRef();
  var countRef = react_1.useRef(0);
  var triggerByRetry = react_1.useRef(false);

  if (!retryCount) {
    return {};
  }

  return {
    onBefore: function onBefore() {
      if (!triggerByRetry.current) {
        countRef.current = 0;
      }

      triggerByRetry.current = false;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    onSuccess: function onSuccess() {
      countRef.current = 0;
    },
    onError: function onError() {
      countRef.current += 1;

      if (retryCount === -1 || countRef.current <= retryCount) {
        // Exponential backoff
        var timeout = retryInterval !== null && retryInterval !== void 0 ? retryInterval : Math.min(1000 * Math.pow(2, countRef.current), 30000);
        timerRef.current = setTimeout(function () {
          triggerByRetry.current = true;
          fetchInstance.refresh();
        }, timeout);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: function onCancel() {
      countRef.current = 0;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  };
};

exports["default"] = useRetryPlugin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689840, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var throttle_1 = __importDefault(require("lodash/throttle"));

var react_1 = require("react");

var useThrottlePlugin = function useThrottlePlugin(fetchInstance, _a) {
  var throttleWait = _a.throttleWait,
      throttleLeading = _a.throttleLeading,
      throttleTrailing = _a.throttleTrailing;
  var throttledRef = react_1.useRef();
  var options = {};

  if (throttleLeading !== undefined) {
    options.leading = throttleLeading;
  }

  if (throttleTrailing !== undefined) {
    options.trailing = throttleTrailing;
  }

  react_1.useEffect(function () {
    if (throttleWait) {
      var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);

      throttledRef.current = throttle_1["default"](function (callback) {
        callback();
      }, throttleWait, options); // throttle runAsync should be promise
      // https://github.com/lodash/lodash/issues/4400#issuecomment-834800398

      fetchInstance.runAsync = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return new Promise(function (resolve, reject) {
          var _a;

          (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.call(throttledRef, function () {
            _originRunAsync_1.apply(void 0, __spread(args)).then(resolve)["catch"](reject);
          });
        });
      };

      return function () {
        var _a;

        fetchInstance.runAsync = _originRunAsync_1;
        (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
      };
    }
  }, [throttleWait, throttleLeading, throttleTrailing]);

  if (!throttleWait) {
    return {};
  }

  return {
    onCancel: function onCancel() {
      var _a;

      (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
    }
  };
};

exports["default"] = useThrottlePlugin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689841, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useCreation_1 = __importDefault(require("../../useCreation"));

var useLatest_1 = __importDefault(require("../../useLatest"));

var useMemoizedFn_1 = __importDefault(require("../../useMemoizedFn"));

var useMount_1 = __importDefault(require("../../useMount"));

var useUnmount_1 = __importDefault(require("../../useUnmount"));

var useUpdate_1 = __importDefault(require("../../useUpdate"));

var Fetch_1 = __importDefault(require("./Fetch"));

function useRequestImplement(service, options, plugins) {
  if (options === void 0) {
    options = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var _a = options.manual,
      manual = _a === void 0 ? false : _a,
      rest = __rest(options, ["manual"]);

  var fetchOptions = __assign({
    manual: manual
  }, rest);

  var serviceRef = useLatest_1["default"](service);
  var update = useUpdate_1["default"]();
  var fetchInstance = useCreation_1["default"](function () {
    var initState = plugins.map(function (p) {
      var _a;

      return (_a = p === null || p === void 0 ? void 0 : p.onInit) === null || _a === void 0 ? void 0 : _a.call(p, fetchOptions);
    }).filter(Boolean);
    return new Fetch_1["default"](serviceRef, fetchOptions, update, Object.assign.apply(Object, __spread([{}], initState)));
  }, []);
  fetchInstance.options = fetchOptions; // run all plugins hooks

  fetchInstance.pluginImpls = plugins.map(function (p) {
    return p(fetchInstance, fetchOptions);
  });
  useMount_1["default"](function () {
    if (!manual) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      var params = fetchInstance.state.params || options.defaultParams || []; // @ts-ignore

      fetchInstance.run.apply(fetchInstance, __spread(params));
    }
  });
  useUnmount_1["default"](function () {
    fetchInstance.cancel();
  });
  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn_1["default"](fetchInstance.cancel.bind(fetchInstance)),
    refresh: useMemoizedFn_1["default"](fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn_1["default"](fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn_1["default"](fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn_1["default"](fetchInstance.runAsync.bind(fetchInstance)),
    mutate: useMemoizedFn_1["default"](fetchInstance.mutate.bind(fetchInstance))
  };
}

exports["default"] = useRequestImplement;
}, function(modId) { var map = {"../../useCreation":1656641689822,"../../useLatest":1656641689825,"../../useMemoizedFn":1656641689814,"../../useMount":1656641689842,"../../useUnmount":1656641689824,"../../useUpdate":1656641689843,"./Fetch":1656641689844}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689842, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var utils_1 = require("../utils");

var useMount = function useMount(fn) {
  if (process.env.NODE_ENV === 'development') {
    if (!utils_1.isFunction(fn)) {
      console.error("useMount: parameter `fn` expected to be a function, but got \"" + typeof fn + "\".");
    }
  }

  react_1.useEffect(function () {
    fn === null || fn === void 0 ? void 0 : fn();
  }, []);
};

exports["default"] = useMount;
}, function(modId) { var map = {"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689843, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUpdate = function useUpdate() {
  var _a = __read(react_1.useState({}), 2),
      setState = _a[1];

  return react_1.useCallback(function () {
    return setState({});
  }, []);
};

exports["default"] = useUpdate;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689844, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils_1 = require("../../utils");

var Fetch =
/** @class */
function () {
  function Fetch(serviceRef, options, subscribe, initState) {
    if (initState === void 0) {
      initState = {};
    }

    this.serviceRef = serviceRef;
    this.options = options;
    this.subscribe = subscribe;
    this.initState = initState;
    this.count = 0;
    this.state = {
      loading: false,
      params: undefined,
      data: undefined,
      error: undefined
    };
    this.state = __assign(__assign(__assign({}, this.state), {
      loading: !options.manual
    }), initState);
  }

  Fetch.prototype.setState = function (s) {
    if (s === void 0) {
      s = {};
    }

    this.state = __assign(__assign({}, this.state), s);
    this.subscribe();
  };

  Fetch.prototype.runPluginHandler = function (event) {
    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    } // @ts-ignore


    var r = this.pluginImpls.map(function (i) {
      var _a;

      return (_a = i[event]) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spread([i], rest));
    }).filter(Boolean);
    return Object.assign.apply(Object, __spread([{}], r));
  };

  Fetch.prototype.runAsync = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

    var params = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }

    return __awaiter(this, void 0, void 0, function () {
      var currentCount, _l, _m, stopNow, _o, returnNow, state, servicePromise, res, error_1;

      var _p;

      return __generator(this, function (_q) {
        switch (_q.label) {
          case 0:
            this.count += 1;
            currentCount = this.count;
            _l = this.runPluginHandler('onBefore', params), _m = _l.stopNow, stopNow = _m === void 0 ? false : _m, _o = _l.returnNow, returnNow = _o === void 0 ? false : _o, state = __rest(_l, ["stopNow", "returnNow"]); // stop request

            if (stopNow) {
              return [2
              /*return*/
              , new Promise(function () {})];
            }

            this.setState(__assign({
              loading: true,
              params: params
            }, state)); // return now

            if (returnNow) {
              return [2
              /*return*/
              , Promise.resolve(state.data)];
            }

            (_b = (_a = this.options).onBefore) === null || _b === void 0 ? void 0 : _b.call(_a, params);
            _q.label = 1;

          case 1:
            _q.trys.push([1, 3,, 4]);

            servicePromise = this.runPluginHandler('onRequest', this.serviceRef.current, params).servicePromise;

            if (!servicePromise) {
              servicePromise = (_p = this.serviceRef).current.apply(_p, __spread(params));
            }

            return [4
            /*yield*/
            , servicePromise];

          case 2:
            res = _q.sent();

            if (currentCount !== this.count) {
              // prevent run.then when request is canceled
              return [2
              /*return*/
              , new Promise(function () {})];
            } // const formattedResult = this.options.formatResultRef.current ? this.options.formatResultRef.current(res) : res;


            this.setState({
              data: res,
              error: undefined,
              loading: false
            });
            (_d = (_c = this.options).onSuccess) === null || _d === void 0 ? void 0 : _d.call(_c, res, params);
            this.runPluginHandler('onSuccess', res, params);
            (_f = (_e = this.options).onFinally) === null || _f === void 0 ? void 0 : _f.call(_e, params, res, undefined);

            if (currentCount === this.count) {
              this.runPluginHandler('onFinally', params, res, undefined);
            }

            return [2
            /*return*/
            , res];

          case 3:
            error_1 = _q.sent();

            if (currentCount !== this.count) {
              // prevent run.then when request is canceled
              return [2
              /*return*/
              , new Promise(function () {})];
            }

            this.setState({
              error: error_1,
              loading: false
            });
            (_h = (_g = this.options).onError) === null || _h === void 0 ? void 0 : _h.call(_g, error_1, params);
            this.runPluginHandler('onError', error_1, params);
            (_k = (_j = this.options).onFinally) === null || _k === void 0 ? void 0 : _k.call(_j, params, undefined, error_1);

            if (currentCount === this.count) {
              this.runPluginHandler('onFinally', params, undefined, error_1);
            }

            throw error_1;

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Fetch.prototype.run = function () {
    var _this = this;

    var params = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }

    this.runAsync.apply(this, __spread(params))["catch"](function (error) {
      if (!_this.options.onError) {
        console.error(error);
      }
    });
  };

  Fetch.prototype.cancel = function () {
    this.count += 1;
    this.setState({
      loading: false
    });
    this.runPluginHandler('onCancel');
  };

  Fetch.prototype.refresh = function () {
    // @ts-ignore
    this.run.apply(this, __spread(this.state.params || []));
  };

  Fetch.prototype.refreshAsync = function () {
    // @ts-ignore
    return this.runAsync.apply(this, __spread(this.state.params || []));
  };

  Fetch.prototype.mutate = function (data) {
    var targetData;

    if (utils_1.isFunction(data)) {
      // @ts-ignore
      targetData = data(this.state.data);
    } else {
      targetData = data;
    }

    this.runPluginHandler('onMutate', targetData);
    this.setState({
      data: targetData
    });
  };

  return Fetch;
}();

exports["default"] = Fetch;
}, function(modId) { var map = {"../../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689845, function(require, module, exports) {


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var utils_1 = require("../utils");

function useAsyncEffect(effect, deps) {
  function isAsyncGenerator(val) {
    return utils_1.isFunction(val[Symbol.asyncIterator]);
  }

  react_1.useEffect(function () {
    var e = effect();
    var cancelled = false;

    function execute() {
      return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!isAsyncGenerator(e)) return [3
              /*break*/
              , 4];
              _a.label = 1;

            case 1:
              if (!true) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , e.next()];

            case 2:
              result = _a.sent();

              if (result.done || cancelled) {
                return [3
                /*break*/
                , 3];
              }

              return [3
              /*break*/
              , 1];

            case 3:
              return [3
              /*break*/
              , 6];

            case 4:
              return [4
              /*yield*/
              , e];

            case 5:
              _a.sent();

              _a.label = 6;

            case 6:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    execute();
    return function () {
      cancelled = true;
    };
  }, deps);
}

exports["default"] = useAsyncEffect;
}, function(modId) { var map = {"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689846, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useToggle_1 = __importDefault(require("../useToggle"));

function useBoolean(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }

  var _a = __read(useToggle_1["default"](defaultValue), 2),
      state = _a[0],
      _b = _a[1],
      toggle = _b.toggle,
      _set = _b.set;

  var actions = react_1.useMemo(function () {
    var setTrue = function setTrue() {
      return _set(true);
    };

    var setFalse = function setFalse() {
      return _set(false);
    };

    return {
      toggle: toggle,
      set: function set(v) {
        return _set(!!v);
      },
      setTrue: setTrue,
      setFalse: setFalse
    };
  }, []);
  return [state, actions];
}

exports["default"] = useBoolean;
}, function(modId) { var map = {"../useToggle":1656641689847}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689847, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }

  var _a = __read(react_1.useState(defaultValue), 2),
      state = _a[0],
      setState = _a[1];

  var actions = react_1.useMemo(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;

    var toggle = function toggle() {
      return setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };

    var set = function set(value) {
      return setState(value);
    };

    var setLeft = function setLeft() {
      return setState(defaultValue);
    };

    var setRight = function setRight() {
      return setState(reverseValueOrigin);
    };

    return {
      toggle: toggle,
      set: set,
      setLeft: setLeft,
      setRight: setRight
    }; // useToggle ignore value change
    // }, [defaultValue, reverseValue]);
  }, []);
  return [state, actions];
}

exports["default"] = useToggle;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689848, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useLatest_1 = __importDefault(require("../useLatest"));

var domTarget_1 = require("../utils/domTarget");

var getDocumentOrShadow_1 = __importDefault(require("../utils/getDocumentOrShadow"));

var useEffectWithTarget_1 = __importDefault(require("../utils/useEffectWithTarget"));

function useClickAway(onClickAway, target, eventName) {
  if (eventName === void 0) {
    eventName = 'click';
  }

  var onClickAwayRef = useLatest_1["default"](onClickAway);
  useEffectWithTarget_1["default"](function () {
    var handler = function handler(event) {
      var targets = Array.isArray(target) ? target : [target];

      if (targets.some(function (item) {
        var targetElement = domTarget_1.getTargetElement(item);
        return !targetElement || targetElement.contains(event.target);
      })) {
        return;
      }

      onClickAwayRef.current(event);
    };

    var documentOrShadow = getDocumentOrShadow_1["default"](target);
    var eventNames = Array.isArray(eventName) ? eventName : [eventName];
    eventNames.forEach(function (event) {
      return documentOrShadow.addEventListener(event, handler);
    });
    return function () {
      eventNames.forEach(function (event) {
        return documentOrShadow.removeEventListener(event, handler);
      });
    };
  }, Array.isArray(eventName) ? eventName : [eventName], target);
}

exports["default"] = useClickAway;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils/domTarget":1656641689849,"../utils/getDocumentOrShadow":1656641689851,"../utils/useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689849, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetElement = void 0;

var index_1 = require("./index");

var isBrowser_1 = __importDefault(require("./isBrowser"));

function getTargetElement(target, defaultElement) {
  if (!isBrowser_1["default"]) {
    return undefined;
  }

  if (!target) {
    return defaultElement;
  }

  var targetElement;

  if (index_1.isFunction(target)) {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}

exports.getTargetElement = getTargetElement;
}, function(modId) { var map = {"./index":1656641689815,"./isBrowser":1656641689850}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689850, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports["default"] = isBrowser;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689851, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var domTarget_1 = require("../utils/domTarget");

var checkIfAllInShadow = function checkIfAllInShadow(targets) {
  return targets.every(function (item) {
    var targetElement = domTarget_1.getTargetElement(item);
    if (!targetElement) return false;
    if (targetElement.getRootNode() instanceof ShadowRoot) return true;
  });
};

var getShadow = function getShadow(node) {
  if (!node) {
    return document;
  }

  return node.getRootNode();
};

var getDocumentOrShadow = function getDocumentOrShadow(target) {
  if (!target) {
    return document;
  }

  var targets = Array.isArray(target) ? target : [target];

  if (checkIfAllInShadow(targets)) {
    return getShadow(domTarget_1.getTargetElement(targets[0]));
  }

  return document;
};

exports["default"] = getDocumentOrShadow;
}, function(modId) { var map = {"../utils/domTarget":1656641689849}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689852, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var createEffectWithTarget_1 = __importDefault(require("./createEffectWithTarget"));

var useEffectWithTarget = createEffectWithTarget_1["default"](react_1.useEffect);
exports["default"] = useEffectWithTarget;
}, function(modId) { var map = {"./createEffectWithTarget":1656641689853}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689853, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUnmount_1 = __importDefault(require("../useUnmount"));

var depsAreSame_1 = __importDefault(require("./depsAreSame"));

var domTarget_1 = require("./domTarget");

var createEffectWithTarget = function createEffectWithTarget(useEffectType) {
  /**
   *
   * @param effect
   * @param deps
   * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  var useEffectWithTarget = function useEffectWithTarget(effect, deps, target) {
    var hasInitRef = react_1.useRef(false);
    var lastElementRef = react_1.useRef([]);
    var lastDepsRef = react_1.useRef([]);
    var unLoadRef = react_1.useRef();
    useEffectType(function () {
      var _a;

      var targets = Array.isArray(target) ? target : [target];
      var els = targets.map(function (item) {
        return domTarget_1.getTargetElement(item);
      }); // init run

      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
        return;
      }

      if (els.length !== lastElementRef.current.length || !depsAreSame_1["default"](els, lastElementRef.current) || !depsAreSame_1["default"](deps, lastDepsRef.current)) {
        (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });
    useUnmount_1["default"](function () {
      var _a;

      (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef); // for react-refresh

      hasInitRef.current = false;
    });
  };

  return useEffectWithTarget;
};

exports["default"] = createEffectWithTarget;
}, function(modId) { var map = {"../useUnmount":1656641689824,"./depsAreSame":1656641689823,"./domTarget":1656641689849}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689854, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var utils_1 = require("../utils");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var useUpdate_1 = __importDefault(require("../useUpdate"));

function useControllableValue(props, options) {
  if (props === void 0) {
    props = {};
  }

  if (options === void 0) {
    options = {};
  }

  var defaultValue = options.defaultValue,
      _a = options.defaultValuePropName,
      defaultValuePropName = _a === void 0 ? 'defaultValue' : _a,
      _b = options.valuePropName,
      valuePropName = _b === void 0 ? 'value' : _b,
      _c = options.trigger,
      trigger = _c === void 0 ? 'onChange' : _c;
  var value = props[valuePropName];
  var isControlled = props.hasOwnProperty(valuePropName);
  var initialValue = react_1.useMemo(function () {
    if (isControlled) {
      return value;
    }

    if (props.hasOwnProperty(defaultValuePropName)) {
      return props[defaultValuePropName];
    }

    return defaultValue;
  }, []);
  var stateRef = react_1.useRef(initialValue);

  if (isControlled) {
    stateRef.current = value;
  }

  var update = useUpdate_1["default"]();

  function setState(v) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var r = utils_1.isFunction(v) ? v(stateRef.current) : v;

    if (!isControlled) {
      stateRef.current = r;
      update();
    }

    if (props[trigger]) {
      props[trigger].apply(props, __spread([r], args));
    }
  }

  return [stateRef.current, useMemoizedFn_1["default"](setState)];
}

exports["default"] = useControllableValue;
}, function(modId) { var map = {"../utils":1656641689815,"../useMemoizedFn":1656641689814,"../useUpdate":1656641689843}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689855, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var js_cookie_1 = __importDefault(require("js-cookie"));

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var utils_1 = require("../utils");

function useCookieState(cookieKey, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = __read(react_1.useState(function () {
    var cookieValue = js_cookie_1["default"].get(cookieKey);
    if (utils_1.isString(cookieValue)) return cookieValue;

    if (utils_1.isFunction(options.defaultValue)) {
      return options.defaultValue();
    }

    return options.defaultValue;
  }), 2),
      state = _a[0],
      setState = _a[1];

  var updateState = useMemoizedFn_1["default"](function (newValue, newOptions) {
    if (newOptions === void 0) {
      newOptions = {};
    }

    var _a = __assign(__assign({}, options), newOptions),
        defaultValue = _a.defaultValue,
        restOptions = __rest(_a, ["defaultValue"]);

    setState(function (prevState) {
      var value = utils_1.isFunction(newValue) ? newValue(prevState) : newValue;

      if (value === undefined) {
        js_cookie_1["default"].remove(cookieKey);
      } else {
        js_cookie_1["default"].set(cookieKey, value, restOptions);
      }

      return value;
    });
  });
  return [state, updateState];
}

exports["default"] = useCookieState;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689856, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var dayjs_1 = __importDefault(require("dayjs"));

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var calcLeft = function calcLeft(t) {
  if (!t) {
    return 0;
  } // https://stackoverflow.com/questions/4310953/invalid-date-in-safari


  var left = dayjs_1["default"](t).valueOf() - new Date().getTime();

  if (left < 0) {
    return 0;
  }

  return left;
};

var parseMs = function parseMs(milliseconds) {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000
  };
};

var useCountdown = function useCountdown(options) {
  var _a = options || {},
      targetDate = _a.targetDate,
      _b = _a.interval,
      interval = _b === void 0 ? 1000 : _b,
      onEnd = _a.onEnd;

  var _c = __read(react_1.useState(function () {
    return calcLeft(targetDate);
  }), 2),
      timeLeft = _c[0],
      setTimeLeft = _c[1];

  var onEndRef = useLatest_1["default"](onEnd);
  react_1.useEffect(function () {
    if (!targetDate) {
      // for stop
      setTimeLeft(0);
      return;
    } // 立即执行一次


    setTimeLeft(calcLeft(targetDate));
    var timer = setInterval(function () {
      var _a;

      var targetLeft = calcLeft(targetDate);
      setTimeLeft(targetLeft);

      if (targetLeft === 0) {
        clearInterval(timer);
        (_a = onEndRef.current) === null || _a === void 0 ? void 0 : _a.call(onEndRef);
      }
    }, interval);
    return function () {
      return clearInterval(timer);
    };
  }, [targetDate, interval]);
  var formattedRes = react_1.useMemo(function () {
    return parseMs(timeLeft);
  }, [timeLeft]);
  return [timeLeft, formattedRes];
};

exports["default"] = useCountdown;
}, function(modId) { var map = {"../useLatest":1656641689825}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689857, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var utils_1 = require("../utils");

function getTargetValue(val, options) {
  if (options === void 0) {
    options = {};
  }

  var min = options.min,
      max = options.max;
  var target = val;

  if (utils_1.isNumber(max)) {
    target = Math.min(max, target);
  }

  if (utils_1.isNumber(min)) {
    target = Math.max(min, target);
  }

  return target;
}

function useCounter(initialValue, options) {
  if (initialValue === void 0) {
    initialValue = 0;
  }

  if (options === void 0) {
    options = {};
  }

  var min = options.min,
      max = options.max;

  var _a = __read(react_1.useState(function () {
    return getTargetValue(initialValue, {
      min: min,
      max: max
    });
  }), 2),
      current = _a[0],
      setCurrent = _a[1];

  var setValue = function setValue(value) {
    setCurrent(function (c) {
      var target = utils_1.isNumber(value) ? value : value(c);
      return getTargetValue(target, {
        max: max,
        min: min
      });
    });
  };

  var inc = function inc(delta) {
    if (delta === void 0) {
      delta = 1;
    }

    setValue(function (c) {
      return c + delta;
    });
  };

  var dec = function dec(delta) {
    if (delta === void 0) {
      delta = 1;
    }

    setValue(function (c) {
      return c - delta;
    });
  };

  var set = function set(value) {
    setValue(value);
  };

  var reset = function reset() {
    setValue(initialValue);
  };

  return [current, {
    inc: useMemoizedFn_1["default"](inc),
    dec: useMemoizedFn_1["default"](dec),
    set: useMemoizedFn_1["default"](set),
    reset: useMemoizedFn_1["default"](reset)
  }];
}

exports["default"] = useCounter;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689858, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useDebounceFn_1 = __importDefault(require("../useDebounceFn"));

function useDebounce(value, options) {
  var _a = __read(react_1.useState(value), 2),
      debounced = _a[0],
      setDebounced = _a[1];

  var run = useDebounceFn_1["default"](function () {
    setDebounced(value);
  }, options).run;
  react_1.useEffect(function () {
    run();
  }, [value]);
  return debounced;
}

exports["default"] = useDebounce;
}, function(modId) { var map = {"../useDebounceFn":1656641689859}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689859, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var debounce_1 = __importDefault(require("lodash/debounce"));

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var useUnmount_1 = __importDefault(require("../useUnmount"));

var utils_1 = require("../utils");

function useDebounceFn(fn, options) {
  var _a;

  if (process.env.NODE_ENV === 'development') {
    if (!utils_1.isFunction(fn)) {
      console.error("useDebounceFn expected parameter is a function, got " + typeof fn);
    }
  }

  var fnRef = useLatest_1["default"](fn);
  var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
  var debounced = react_1.useMemo(function () {
    return debounce_1["default"](function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return fnRef.current.apply(fnRef, __spread(args));
    }, wait, options);
  }, []);
  useUnmount_1["default"](function () {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}

exports["default"] = useDebounceFn;
}, function(modId) { var map = {"../useLatest":1656641689825,"../useUnmount":1656641689824,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689860, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useDebounceFn_1 = __importDefault(require("../useDebounceFn"));

var useUpdateEffect_1 = __importDefault(require("../useUpdateEffect"));

function useDebounceEffect(effect, deps, options) {
  var _a = __read(react_1.useState({}), 2),
      flag = _a[0],
      setFlag = _a[1];

  var run = useDebounceFn_1["default"](function () {
    setFlag({});
  }, options).run;
  react_1.useEffect(function () {
    return run();
  }, deps);
  useUpdateEffect_1["default"](effect, [flag]);
}

exports["default"] = useDebounceEffect;
}, function(modId) { var map = {"../useDebounceFn":1656641689859,"../useUpdateEffect":1656641689820}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689861, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var createDeepCompareEffect_1 = require("../createDeepCompareEffect");

exports["default"] = createDeepCompareEffect_1.createDeepCompareEffect(react_1.useEffect);
}, function(modId) { var map = {"../createDeepCompareEffect":1656641689862}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689862, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeepCompareEffect = void 0;

var react_1 = require("react");

var isEqual_1 = __importDefault(require("lodash/isEqual"));

var depsEqual = function depsEqual(aDeps, bDeps) {
  if (aDeps === void 0) {
    aDeps = [];
  }

  if (bDeps === void 0) {
    bDeps = [];
  }

  return isEqual_1["default"](aDeps, bDeps);
};

exports.createDeepCompareEffect = function (hook) {
  return function (effect, deps) {
    var ref = react_1.useRef();
    var signalRef = react_1.useRef(0);

    if (deps === undefined || !depsEqual(deps, ref.current)) {
      ref.current = deps;
      signalRef.current += 1;
    }

    hook(effect, [signalRef.current]);
  };
};
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689863, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var createDeepCompareEffect_1 = require("../createDeepCompareEffect");

exports["default"] = createDeepCompareEffect_1.createDeepCompareEffect(react_1.useLayoutEffect);
}, function(modId) { var map = {"../createDeepCompareEffect":1656641689862}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689864, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useEventListener_1 = __importDefault(require("../useEventListener"));

var isBrowser_1 = __importDefault(require("../utils/isBrowser"));

var getVisibility = function getVisibility() {
  if (!isBrowser_1["default"]) {
    return 'visible';
  }

  return document.visibilityState;
};

function useDocumentVisibility() {
  var _a = __read(react_1.useState(function () {
    return getVisibility();
  }), 2),
      documentVisibility = _a[0],
      setDocumentVisibility = _a[1];

  useEventListener_1["default"]('visibilitychange', function () {
    setDocumentVisibility(getVisibility());
  }, {
    target: function target() {
      return document;
    }
  });
  return documentVisibility;
}

exports["default"] = useDocumentVisibility;
}, function(modId) { var map = {"../useEventListener":1656641689865,"../utils/isBrowser":1656641689850}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689865, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useLatest_1 = __importDefault(require("../useLatest"));

var domTarget_1 = require("../utils/domTarget");

var useEffectWithTarget_1 = __importDefault(require("../utils/useEffectWithTarget"));

function useEventListener(eventName, handler, options) {
  if (options === void 0) {
    options = {};
  }

  var handlerRef = useLatest_1["default"](handler);
  useEffectWithTarget_1["default"](function () {
    var targetElement = domTarget_1.getTargetElement(options.target, window);

    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }

    var eventListener = function eventListener(event) {
      return handlerRef.current(event);
    };

    targetElement.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive
    });
    return function () {
      targetElement.removeEventListener(eventName, eventListener, {
        capture: options.capture
      });
    };
  }, [eventName, options.capture, options.once, options.passive], options.target);
}

exports["default"] = useEventListener;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils/domTarget":1656641689849,"../utils/useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689866, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useLatest_1 = __importDefault(require("../useLatest"));

var domTarget_1 = require("../utils/domTarget");

var useEffectWithTarget_1 = __importDefault(require("../utils/useEffectWithTarget"));

var useDrag = function useDrag(data, target, options) {
  if (options === void 0) {
    options = {};
  }

  var optionsRef = useLatest_1["default"](options);
  useEffectWithTarget_1["default"](function () {
    var targetElement = domTarget_1.getTargetElement(target);

    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }

    var onDragStart = function onDragStart(event) {
      var _a, _b;

      (_b = (_a = optionsRef.current).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event);
      event.dataTransfer.setData('custom', JSON.stringify(data));
    };

    var onDragEnd = function onDragEnd(event) {
      var _a, _b;

      (_b = (_a = optionsRef.current).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };

    targetElement.setAttribute('draggable', 'true');
    targetElement.addEventListener('dragstart', onDragStart);
    targetElement.addEventListener('dragend', onDragEnd);
    return function () {
      targetElement.removeEventListener('dragstart', onDragStart);
      targetElement.removeEventListener('dragend', onDragEnd);
    };
  }, [], target);
};

exports["default"] = useDrag;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils/domTarget":1656641689849,"../utils/useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689867, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useLatest_1 = __importDefault(require("../useLatest"));

var domTarget_1 = require("../utils/domTarget");

var useEffectWithTarget_1 = __importDefault(require("../utils/useEffectWithTarget"));

var react_1 = require("react");

var useDrop = function useDrop(target, options) {
  if (options === void 0) {
    options = {};
  }

  var optionsRef = useLatest_1["default"](options); // https://stackoverflow.com/a/26459269

  var dragEnterTarget = react_1.useRef();
  useEffectWithTarget_1["default"](function () {
    var targetElement = domTarget_1.getTargetElement(target);

    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }

    var onData = function onData(dataTransfer, event) {
      var uri = dataTransfer.getData('text/uri-list');
      var dom = dataTransfer.getData('custom');

      if (dom && optionsRef.current.onDom) {
        var data = dom;

        try {
          data = JSON.parse(dom);
        } catch (e) {
          data = dom;
        }

        optionsRef.current.onDom(data, event);
        return;
      }

      if (uri && optionsRef.current.onUri) {
        optionsRef.current.onUri(uri, event);
        return;
      }

      if (dataTransfer.files && dataTransfer.files.length && optionsRef.current.onFiles) {
        optionsRef.current.onFiles(Array.from(dataTransfer.files), event);
        return;
      }

      if (dataTransfer.items && dataTransfer.items.length && optionsRef.current.onText) {
        dataTransfer.items[0].getAsString(function (text) {
          optionsRef.current.onText(text, event);
        });
      }
    };

    var onDragEnter = function onDragEnter(event) {
      var _a, _b;

      event.preventDefault();
      event.stopPropagation();
      dragEnterTarget.current = event.target;
      (_b = (_a = optionsRef.current).onDragEnter) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };

    var onDragOver = function onDragOver(event) {
      var _a, _b;

      event.preventDefault();
      (_b = (_a = optionsRef.current).onDragOver) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };

    var onDragLeave = function onDragLeave(event) {
      var _a, _b;

      if (event.target === dragEnterTarget.current) {
        (_b = (_a = optionsRef.current).onDragLeave) === null || _b === void 0 ? void 0 : _b.call(_a, event);
      }
    };

    var onDrop = function onDrop(event) {
      var _a, _b;

      event.preventDefault();
      onData(event.dataTransfer, event);
      (_b = (_a = optionsRef.current).onDrop) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };

    var onPaste = function onPaste(event) {
      var _a, _b;

      onData(event.clipboardData, event);
      (_b = (_a = optionsRef.current).onPaste) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };

    targetElement.addEventListener('dragenter', onDragEnter);
    targetElement.addEventListener('dragover', onDragOver);
    targetElement.addEventListener('dragleave', onDragLeave);
    targetElement.addEventListener('drop', onDrop);
    targetElement.addEventListener('paste', onPaste);
    return function () {
      targetElement.removeEventListener('dragenter', onDragEnter);
      targetElement.removeEventListener('dragover', onDragOver);
      targetElement.removeEventListener('dragleave', onDragLeave);
      targetElement.removeEventListener('drop', onDrop);
      targetElement.removeEventListener('paste', onPaste);
    };
  }, [], target);
};

exports["default"] = useDrop;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils/domTarget":1656641689849,"../utils/useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689868, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useDynamicList = function useDynamicList(initialList) {
  if (initialList === void 0) {
    initialList = [];
  }

  var counterRef = react_1.useRef(-1);
  var keyList = react_1.useRef([]);
  var setKey = react_1.useCallback(function (index) {
    counterRef.current += 1;
    keyList.current.splice(index, 0, counterRef.current);
  }, []);

  var _a = __read(react_1.useState(function () {
    initialList.forEach(function (_, index) {
      setKey(index);
    });
    return initialList;
  }), 2),
      list = _a[0],
      setList = _a[1];

  var resetList = react_1.useCallback(function (newList) {
    keyList.current = [];
    setList(function () {
      newList.forEach(function (_, index) {
        setKey(index);
      });
      return newList;
    });
  }, []);
  var insert = react_1.useCallback(function (index, item) {
    setList(function (l) {
      var temp = __spread(l);

      temp.splice(index, 0, item);
      setKey(index);
      return temp;
    });
  }, []);
  var getKey = react_1.useCallback(function (index) {
    return keyList.current[index];
  }, []);
  var getIndex = react_1.useCallback(function (key) {
    return keyList.current.findIndex(function (ele) {
      return ele === key;
    });
  }, []);
  var merge = react_1.useCallback(function (index, items) {
    setList(function (l) {
      var temp = __spread(l);

      items.forEach(function (_, i) {
        setKey(index + i);
      });
      temp.splice.apply(temp, __spread([index, 0], items));
      return temp;
    });
  }, []);
  var replace = react_1.useCallback(function (index, item) {
    setList(function (l) {
      var temp = __spread(l);

      temp[index] = item;
      return temp;
    });
  }, []);
  var remove = react_1.useCallback(function (index) {
    setList(function (l) {
      var temp = __spread(l);

      temp.splice(index, 1); // remove keys if necessary

      try {
        keyList.current.splice(index, 1);
      } catch (e) {
        console.error(e);
      }

      return temp;
    });
  }, []);
  var move = react_1.useCallback(function (oldIndex, newIndex) {
    if (oldIndex === newIndex) {
      return;
    }

    setList(function (l) {
      var newList = __spread(l);

      var temp = newList.filter(function (_, index) {
        return index !== oldIndex;
      });
      temp.splice(newIndex, 0, newList[oldIndex]); // move keys if necessary

      try {
        var keyTemp = keyList.current.filter(function (_, index) {
          return index !== oldIndex;
        });
        keyTemp.splice(newIndex, 0, keyList.current[oldIndex]);
        keyList.current = keyTemp;
      } catch (e) {
        console.error(e);
      }

      return temp;
    });
  }, []);
  var push = react_1.useCallback(function (item) {
    setList(function (l) {
      setKey(l.length);
      return l.concat([item]);
    });
  }, []);
  var pop = react_1.useCallback(function () {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(0, keyList.current.length - 1);
    } catch (e) {
      console.error(e);
    }

    setList(function (l) {
      return l.slice(0, l.length - 1);
    });
  }, []);
  var unshift = react_1.useCallback(function (item) {
    setList(function (l) {
      setKey(0);
      return [item].concat(l);
    });
  }, []);
  var shift = react_1.useCallback(function () {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(1, keyList.current.length);
    } catch (e) {
      console.error(e);
    }

    setList(function (l) {
      return l.slice(1, l.length);
    });
  }, []);
  var sortList = react_1.useCallback(function (result) {
    return result.map(function (item, index) {
      return {
        key: index,
        item: item
      };
    }) // add index into obj
    .sort(function (a, b) {
      return getIndex(a.key) - getIndex(b.key);
    }) // sort based on the index of table
    .filter(function (item) {
      return !!item.item;
    }) // remove undefined(s)
    .map(function (item) {
      return item.item;
    });
  }, // retrive the data
  []);
  return {
    list: list,
    insert: insert,
    merge: merge,
    replace: replace,
    remove: remove,
    getKey: getKey,
    getIndex: getIndex,
    move: move,
    push: push,
    pop: pop,
    unshift: unshift,
    shift: shift,
    sortList: sortList,
    resetList: resetList
  };
};

exports["default"] = useDynamicList;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689869, function(require, module, exports) {


var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventEmitter = void 0;

var react_1 = require("react");

var EventEmitter =
/** @class */
function () {
  function EventEmitter() {
    var _this = this;

    this.subscriptions = new Set();

    this.emit = function (val) {
      var e_1, _a;

      try {
        for (var _b = __values(_this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
          var subscription = _c.value;
          subscription(val);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };

    this.useSubscription = function (callback) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      var callbackRef = react_1.useRef();
      callbackRef.current = callback; // eslint-disable-next-line react-hooks/rules-of-hooks

      react_1.useEffect(function () {
        function subscription(val) {
          if (callbackRef.current) {
            callbackRef.current(val);
          }
        }

        _this.subscriptions.add(subscription);

        return function () {
          _this.subscriptions["delete"](subscription);
        };
      }, []);
    };
  }

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;

function useEventEmitter() {
  var ref = react_1.useRef();

  if (!ref.current) {
    ref.current = new EventEmitter();
  }

  return ref.current;
}

exports["default"] = useEventEmitter;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689870, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var utils_1 = require("../utils");

function useEventTarget(options) {
  var _a = options || {},
      initialValue = _a.initialValue,
      transformer = _a.transformer;

  var _b = __read(react_1.useState(initialValue), 2),
      value = _b[0],
      setValue = _b[1];

  var transformerRef = useLatest_1["default"](transformer);
  var reset = react_1.useCallback(function () {
    return setValue(initialValue);
  }, []);
  var onChange = react_1.useCallback(function (e) {
    var _value = e.target.value;

    if (utils_1.isFunction(transformerRef.current)) {
      return setValue(transformerRef.current(_value));
    } // no transformer => U and T should be the same


    return setValue(_value);
  }, []);
  return [value, {
    onChange: onChange,
    reset: reset
  }];
}

exports["default"] = useEventTarget;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689871, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react"); // {[path]: count}
// remove external when no used


var EXTERNAL_USED_COUNT = {};

var loadScript = function loadScript(path, props) {
  if (props === void 0) {
    props = {};
  }

  var script = document.querySelector("script[src=\"" + path + "\"]");

  if (!script) {
    var newScript_1 = document.createElement('script');
    newScript_1.src = path;
    Object.keys(props).forEach(function (key) {
      newScript_1[key] = props[key];
    });
    newScript_1.setAttribute('data-status', 'loading');
    document.body.appendChild(newScript_1);
    return {
      ref: newScript_1,
      status: 'loading'
    };
  }

  return {
    ref: script,
    status: script.getAttribute('data-status') || 'ready'
  };
};

var loadCss = function loadCss(path, props) {
  if (props === void 0) {
    props = {};
  }

  var css = document.querySelector("link[href=\"" + path + "\"]");

  if (!css) {
    var newCss_1 = document.createElement('link');
    newCss_1.rel = 'stylesheet';
    newCss_1.href = path;
    Object.keys(props).forEach(function (key) {
      newCss_1[key] = props[key];
    }); // IE9+

    var isLegacyIECss = ('hideFocus' in newCss_1); // use preload in IE Edge (to detect load errors)

    if (isLegacyIECss && newCss_1.relList) {
      newCss_1.rel = 'preload';
      newCss_1.as = 'style';
    }

    newCss_1.setAttribute('data-status', 'loading');
    document.head.appendChild(newCss_1);
    return {
      ref: newCss_1,
      status: 'loading'
    };
  }

  return {
    ref: css,
    status: css.getAttribute('data-status') || 'ready'
  };
};

var useExternal = function useExternal(path, options) {
  var _a = __read(react_1.useState(path ? 'loading' : 'unset'), 2),
      status = _a[0],
      setStatus = _a[1];

  var ref = react_1.useRef();
  react_1.useEffect(function () {
    if (!path) {
      setStatus('unset');
      return;
    }

    var pathname = path.replace(/[|#].*$/, '');

    if ((options === null || options === void 0 ? void 0 : options.type) === 'css' || !(options === null || options === void 0 ? void 0 : options.type) && /(^css!|\.css$)/.test(pathname)) {
      var result = loadCss(path, options === null || options === void 0 ? void 0 : options.css);
      ref.current = result.ref;
      setStatus(result.status);
    } else if ((options === null || options === void 0 ? void 0 : options.type) === 'js' || !(options === null || options === void 0 ? void 0 : options.type) && /(^js!|\.js$)/.test(pathname)) {
      var result = loadScript(path, options === null || options === void 0 ? void 0 : options.js);
      ref.current = result.ref;
      setStatus(result.status);
    } else {
      // do nothing
      console.error("Cannot infer the type of external resource, and please provide a type ('js' | 'css'). " + 'Refer to the https://ahooks.js.org/hooks/dom/use-external/#options');
    }

    if (!ref.current) {
      return;
    }

    if (EXTERNAL_USED_COUNT[path] === undefined) {
      EXTERNAL_USED_COUNT[path] = 1;
    } else {
      EXTERNAL_USED_COUNT[path] += 1;
    }

    var handler = function handler(event) {
      var _a;

      var targetStatus = event.type === 'load' ? 'ready' : 'error';
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.setAttribute('data-status', targetStatus);
      setStatus(targetStatus);
    };

    ref.current.addEventListener('load', handler);
    ref.current.addEventListener('error', handler);
    return function () {
      var _a, _b, _c;

      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('load', handler);
      (_b = ref.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('error', handler);
      EXTERNAL_USED_COUNT[path] -= 1;

      if (EXTERNAL_USED_COUNT[path] === 0) {
        (_c = ref.current) === null || _c === void 0 ? void 0 : _c.remove();
      }

      ref.current = undefined;
    };
  }, [path]);
  return status;
};

exports["default"] = useExternal;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689872, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var ImgTypeMap = {
  SVG: 'image/svg+xml',
  ICO: 'image/x-icon',
  GIF: 'image/gif',
  PNG: 'image/png'
};

var useFavicon = function useFavicon(href) {
  react_1.useEffect(function () {
    if (!href) return;
    var cutUrl = href.split('.');
    var imgSuffix = cutUrl[cutUrl.length - 1].toLocaleUpperCase();
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = ImgTypeMap[imgSuffix];
    link.href = href;
    link.rel = 'shortcut icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [href]);
};

exports["default"] = useFavicon;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689873, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useEventListener_1 = __importDefault(require("../useEventListener"));

function useFocusWithin(target, options) {
  var _a = __read(react_1.useState(false), 2),
      isFocusWithin = _a[0],
      setIsFocusWithin = _a[1];

  var _b = options || {},
      onFocus = _b.onFocus,
      onBlur = _b.onBlur,
      onChange = _b.onChange;

  useEventListener_1["default"]('focusin', function (e) {
    if (!isFocusWithin) {
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
      onChange === null || onChange === void 0 ? void 0 : onChange(true);
      setIsFocusWithin(true);
    }
  }, {
    target: target
  });
  useEventListener_1["default"]('focusout', function (e) {
    var _a, _b;

    if (isFocusWithin && !((_b = (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, e.relatedTarget))) {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
      onChange === null || onChange === void 0 ? void 0 : onChange(false);
      setIsFocusWithin(false);
    }
  }, {
    target: target
  });
  return isFocusWithin;
}

exports["default"] = useFocusWithin;
}, function(modId) { var map = {"../useEventListener":1656641689865}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689874, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var screenfull_1 = __importDefault(require("screenfull"));

var useLatest_1 = __importDefault(require("../useLatest"));

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var useUnmount_1 = __importDefault(require("../useUnmount"));

var domTarget_1 = require("../utils/domTarget");

var useFullscreen = function useFullscreen(target, options) {
  var _a = options || {},
      onExit = _a.onExit,
      onEnter = _a.onEnter;

  var onExitRef = useLatest_1["default"](onExit);
  var onEnterRef = useLatest_1["default"](onEnter);

  var _b = __read(react_1.useState(false), 2),
      state = _b[0],
      setState = _b[1];

  var onChange = function onChange() {
    var _a, _b;

    if (screenfull_1["default"].isEnabled) {
      var isFullscreen = screenfull_1["default"].isFullscreen;

      if (isFullscreen) {
        (_a = onEnterRef.current) === null || _a === void 0 ? void 0 : _a.call(onEnterRef);
      } else {
        screenfull_1["default"].off('change', onChange);
        (_b = onExitRef.current) === null || _b === void 0 ? void 0 : _b.call(onExitRef);
      }

      setState(isFullscreen);
    }
  };

  var enterFullscreen = function enterFullscreen() {
    var el = domTarget_1.getTargetElement(target);

    if (!el) {
      return;
    }

    if (screenfull_1["default"].isEnabled) {
      try {
        screenfull_1["default"].request(el);
        screenfull_1["default"].on('change', onChange);
      } catch (error) {
        console.error(error);
      }
    }
  };

  var exitFullscreen = function exitFullscreen() {
    if (!state) {
      return;
    }

    if (screenfull_1["default"].isEnabled) {
      screenfull_1["default"].exit();
    }
  };

  var toggleFullscreen = function toggleFullscreen() {
    if (state) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  useUnmount_1["default"](function () {
    if (screenfull_1["default"].isEnabled) {
      screenfull_1["default"].off('change', onChange);
    }
  });
  return [state, {
    enterFullscreen: useMemoizedFn_1["default"](enterFullscreen),
    exitFullscreen: useMemoizedFn_1["default"](exitFullscreen),
    toggleFullscreen: useMemoizedFn_1["default"](toggleFullscreen),
    isEnabled: screenfull_1["default"].isEnabled
  }];
};

exports["default"] = useFullscreen;
}, function(modId) { var map = {"../useLatest":1656641689825,"../useMemoizedFn":1656641689814,"../useUnmount":1656641689824,"../utils/domTarget":1656641689849}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689875, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useAntdTable_1 = __importDefault(require("../useAntdTable"));

var fusionAdapter_1 = require("./fusionAdapter");

var useFusionTable = function useFusionTable(service, options) {
  if (options === void 0) {
    options = {};
  }

  var ret = useAntdTable_1["default"](service, __assign(__assign({}, options), {
    form: options.field ? fusionAdapter_1.fieldAdapter(options.field) : undefined
  }));
  return fusionAdapter_1.resultAdapter(ret);
};

exports["default"] = useFusionTable;
}, function(modId) { var map = {"../useAntdTable":1656641689813,"./fusionAdapter":1656641689876}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689876, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resultAdapter = exports.fieldAdapter = void 0;

exports.fieldAdapter = function (field) {
  return {
    getFieldInstance: function getFieldInstance(name) {
      return field.getNames().includes(name);
    },
    setFieldsValue: field.setValues,
    getFieldsValue: field.getValues,
    resetFields: field.resetToDefault,
    validateFields: function validateFields(fields, callback) {
      field.validate(fields, callback);
    }
  };
};

exports.resultAdapter = function (result) {
  var tableProps = {
    dataSource: result.tableProps.dataSource,
    loading: result.tableProps.loading,
    onSort: function onSort(dataIndex, order) {
      var _a;

      result.tableProps.onChange({
        current: result.pagination.current,
        pageSize: result.pagination.pageSize
      }, (_a = result.params[0]) === null || _a === void 0 ? void 0 : _a.filters, {
        field: dataIndex,
        order: order
      });
    },
    onFilter: function onFilter(filterParams) {
      var _a;

      result.tableProps.onChange({
        current: result.pagination.current,
        pageSize: result.pagination.pageSize
      }, filterParams, (_a = result.params[0]) === null || _a === void 0 ? void 0 : _a.sorter);
    }
  };
  var paginationProps = {
    onChange: result.pagination.changeCurrent,
    onPageSizeChange: result.pagination.changePageSize,
    current: result.pagination.current,
    pageSize: result.pagination.pageSize,
    total: result.pagination.total
  };
  return __assign(__assign({}, result), {
    tableProps: tableProps,
    paginationProps: paginationProps
  });
};
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689877, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

function useGetState(initialState) {
  var _a = __read(react_1.useState(initialState), 2),
      state = _a[0],
      setState = _a[1];

  var stateRef = react_1.useRef(state);
  stateRef.current = state;
  var getState = react_1.useCallback(function () {
    return stateRef.current;
  }, []);
  return [state, setState, getState];
}

exports["default"] = useGetState;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689878, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var utils_1 = require("../utils");

var dumpIndex = function dumpIndex(step, arr) {
  var index = step > 0 ? step - 1 // move forward
  : arr.length + step; // move backward

  if (index >= arr.length - 1) {
    index = arr.length - 1;
  }

  if (index < 0) {
    index = 0;
  }

  return index;
};

var split = function split(step, targetArr) {
  var index = dumpIndex(step, targetArr);
  return {
    _current: targetArr[index],
    _before: targetArr.slice(0, index),
    _after: targetArr.slice(index + 1)
  };
};

function useHistoryTravel(initialValue) {
  var _a = __read(react_1.useState({
    present: initialValue,
    past: [],
    future: []
  }), 2),
      history = _a[0],
      setHistory = _a[1];

  var present = history.present,
      past = history.past,
      future = history.future;
  var initialValueRef = react_1.useRef(initialValue);

  var reset = function reset() {
    var params = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }

    var _initial = params.length > 0 ? params[0] : initialValueRef.current;

    initialValueRef.current = _initial;
    setHistory({
      present: _initial,
      future: [],
      past: []
    });
  };

  var updateValue = function updateValue(val) {
    setHistory({
      present: val,
      future: [],
      past: __spread(past, [present])
    });
  };

  var _forward = function _forward(step) {
    if (step === void 0) {
      step = 1;
    }

    if (future.length === 0) {
      return;
    }

    var _a = split(step, future),
        _before = _a._before,
        _current = _a._current,
        _after = _a._after;

    setHistory({
      past: __spread(past, [present], _before),
      present: _current,
      future: _after
    });
  };

  var _backward = function _backward(step) {
    if (step === void 0) {
      step = -1;
    }

    if (past.length === 0) {
      return;
    }

    var _a = split(step, past),
        _before = _a._before,
        _current = _a._current,
        _after = _a._after;

    setHistory({
      past: _before,
      present: _current,
      future: __spread(_after, [present], future)
    });
  };

  var go = function go(step) {
    var stepNum = utils_1.isNumber(step) ? step : Number(step);

    if (stepNum === 0) {
      return;
    }

    if (stepNum > 0) {
      return _forward(stepNum);
    }

    _backward(stepNum);
  };

  return {
    value: present,
    backLength: past.length,
    forwardLength: future.length,
    setValue: useMemoizedFn_1["default"](updateValue),
    go: useMemoizedFn_1["default"](go),
    back: useMemoizedFn_1["default"](function () {
      go(-1);
    }),
    forward: useMemoizedFn_1["default"](function () {
      go(1);
    }),
    reset: useMemoizedFn_1["default"](reset)
  };
}

exports["default"] = useHistoryTravel;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689879, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useBoolean_1 = __importDefault(require("../useBoolean"));

var useEventListener_1 = __importDefault(require("../useEventListener"));

exports["default"] = function (target, options) {
  var _a = options || {},
      onEnter = _a.onEnter,
      onLeave = _a.onLeave,
      onChange = _a.onChange;

  var _b = __read(useBoolean_1["default"](false), 2),
      state = _b[0],
      _c = _b[1],
      setTrue = _c.setTrue,
      setFalse = _c.setFalse;

  useEventListener_1["default"]('mouseenter', function () {
    onEnter === null || onEnter === void 0 ? void 0 : onEnter();
    setTrue();
    onChange === null || onChange === void 0 ? void 0 : onChange(true);
  }, {
    target: target
  });
  useEventListener_1["default"]('mouseleave', function () {
    onLeave === null || onLeave === void 0 ? void 0 : onLeave();
    setFalse();
    onChange === null || onChange === void 0 ? void 0 : onChange(false);
  }, {
    target: target
  });
  return state;
};
}, function(modId) { var map = {"../useBoolean":1656641689846,"../useEventListener":1656641689865}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689880, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useEventListener_1 = __importDefault(require("../useEventListener"));

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var useRequest_1 = __importDefault(require("../useRequest"));

var useUpdateEffect_1 = __importDefault(require("../useUpdateEffect"));

var domTarget_1 = require("../utils/domTarget");

var rect_1 = require("../utils/rect");

var useInfiniteScroll = function useInfiniteScroll(service, options) {
  if (options === void 0) {
    options = {};
  }

  var target = options.target,
      isNoMore = options.isNoMore,
      _a = options.threshold,
      threshold = _a === void 0 ? 100 : _a,
      _b = options.reloadDeps,
      reloadDeps = _b === void 0 ? [] : _b,
      manual = options.manual,
      _onBefore = options.onBefore,
      _onSuccess = options.onSuccess,
      _onError = options.onError,
      _onFinally = options.onFinally;

  var _c = __read(react_1.useState(), 2),
      finalData = _c[0],
      setFinalData = _c[1];

  var _d = __read(react_1.useState(false), 2),
      loadingMore = _d[0],
      setLoadingMore = _d[1];

  var noMore = react_1.useMemo(function () {
    if (!isNoMore) return false;
    return isNoMore(finalData);
  }, [finalData]);

  var _e = useRequest_1["default"](function (lastData) {
    return __awaiter(void 0, void 0, void 0, function () {
      var currentData;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , service(lastData)];

          case 1:
            currentData = _a.sent();

            if (!lastData) {
              setFinalData(currentData);
            } else {
              setFinalData(__assign(__assign({}, currentData), {
                // @ts-ignore
                list: __spread(lastData.list, currentData.list)
              }));
            }

            return [2
            /*return*/
            , currentData];
        }
      });
    });
  }, {
    manual: manual,
    onFinally: function onFinally(_, d, e) {
      setLoadingMore(false);
      _onFinally === null || _onFinally === void 0 ? void 0 : _onFinally(d, e);
    },
    onBefore: function onBefore() {
      return _onBefore === null || _onBefore === void 0 ? void 0 : _onBefore();
    },
    onSuccess: function onSuccess(d) {
      setTimeout(function () {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        scrollMethod();
      });
      _onSuccess === null || _onSuccess === void 0 ? void 0 : _onSuccess(d);
    },
    onError: function onError(e) {
      return _onError === null || _onError === void 0 ? void 0 : _onError(e);
    }
  }),
      loading = _e.loading,
      run = _e.run,
      runAsync = _e.runAsync,
      cancel = _e.cancel;

  var loadMore = function loadMore() {
    if (noMore) return;
    setLoadingMore(true);
    run(finalData);
  };

  var loadMoreAsync = function loadMoreAsync() {
    if (noMore) return Promise.reject();
    setLoadingMore(true);
    return runAsync(finalData);
  };

  var reload = function reload() {
    return run();
  };

  var reloadAsync = function reloadAsync() {
    return runAsync();
  };

  var scrollMethod = function scrollMethod() {
    var el = domTarget_1.getTargetElement(target);

    if (!el) {
      return;
    }

    var scrollTop = rect_1.getScrollTop(el);
    var scrollHeight = rect_1.getScrollHeight(el);
    var clientHeight = rect_1.getClientHeight(el);

    if (scrollHeight - scrollTop <= clientHeight + threshold) {
      loadMore();
    }
  };

  useEventListener_1["default"]('scroll', function () {
    if (loading || loadingMore) {
      return;
    }

    scrollMethod();
  }, {
    target: target
  });
  useUpdateEffect_1["default"](function () {
    run();
  }, __spread(reloadDeps));
  return {
    data: finalData,
    loading: !loadingMore && loading,
    loadingMore: loadingMore,
    noMore: noMore,
    loadMore: useMemoizedFn_1["default"](loadMore),
    loadMoreAsync: useMemoizedFn_1["default"](loadMoreAsync),
    reload: useMemoizedFn_1["default"](reload),
    reloadAsync: useMemoizedFn_1["default"](reloadAsync),
    mutate: setFinalData,
    cancel: cancel
  };
};

exports["default"] = useInfiniteScroll;
}, function(modId) { var map = {"../useEventListener":1656641689865,"../useMemoizedFn":1656641689814,"../useRequest":1656641689817,"../useUpdateEffect":1656641689820,"../utils/domTarget":1656641689849,"../utils/rect":1656641689881}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689881, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientHeight = exports.getScrollHeight = exports.getScrollTop = void 0;

var getScrollTop = function getScrollTop(el) {
  if (el === document || el === document.body) {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }

  return el.scrollTop;
};

exports.getScrollTop = getScrollTop;

var getScrollHeight = function getScrollHeight(el) {
  return el.scrollHeight || Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
};

exports.getScrollHeight = getScrollHeight;

var getClientHeight = function getClientHeight(el) {
  return el.clientHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
};

exports.getClientHeight = getClientHeight;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689882, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var utils_1 = require("../utils");

function useInterval(fn, delay, options) {
  var immediate = options === null || options === void 0 ? void 0 : options.immediate;
  var fnRef = useLatest_1["default"](fn);
  var timerRef = react_1.useRef();
  react_1.useEffect(function () {
    if (!utils_1.isNumber(delay) || delay < 0) return;

    if (immediate) {
      fnRef.current();
    }

    timerRef.current = setInterval(function () {
      fnRef.current();
    }, delay);
    return function () {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [delay]);
  var clear = react_1.useCallback(function () {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);
  return clear;
}

exports["default"] = useInterval;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689883, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("intersection-observer");

var react_1 = require("react");

var domTarget_1 = require("../utils/domTarget");

var useEffectWithTarget_1 = __importDefault(require("../utils/useEffectWithTarget"));

function useInViewport(target, options) {
  var _a = __read(react_1.useState(), 2),
      state = _a[0],
      setState = _a[1];

  var _b = __read(react_1.useState(), 2),
      ratio = _b[0],
      setRatio = _b[1];

  useEffectWithTarget_1["default"](function () {
    var el = domTarget_1.getTargetElement(target);

    if (!el) {
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      var e_1, _a;

      try {
        for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
          var entry = entries_1_1.value;
          setRatio(entry.intersectionRatio);
          setState(entry.isIntersecting);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (entries_1_1 && !entries_1_1.done && (_a = entries_1["return"])) _a.call(entries_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }, __assign(__assign({}, options), {
      root: domTarget_1.getTargetElement(options === null || options === void 0 ? void 0 : options.root)
    }));
    observer.observe(el);
    return function () {
      observer.disconnect();
    };
  }, [], target);
  return [state, ratio];
}

exports["default"] = useInViewport;
}, function(modId) { var map = {"../utils/domTarget":1656641689849,"../utils/useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689884, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var isBrowser_1 = __importDefault(require("../utils/isBrowser"));

var useIsomorphicLayoutEffect = isBrowser_1["default"] ? react_1.useLayoutEffect : react_1.useEffect;
exports["default"] = useIsomorphicLayoutEffect;
}, function(modId) { var map = {"../utils/isBrowser":1656641689850}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689885, function(require, module, exports) {


var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useLatest_1 = __importDefault(require("../useLatest"));

var utils_1 = require("../utils");

var domTarget_1 = require("../utils/domTarget");

var useDeepCompareWithTarget_1 = __importDefault(require("../utils/useDeepCompareWithTarget")); // 键盘事件 keyCode 别名


var aliasKeyCodeMap = {
  '0': 48,
  '1': 49,
  '2': 50,
  '3': 51,
  '4': 52,
  '5': 53,
  '6': 54,
  '7': 55,
  '8': 56,
  '9': 57,
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  pausebreak: 19,
  capslock: 20,
  esc: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  leftarrow: 37,
  uparrow: 38,
  rightarrow: 39,
  downarrow: 40,
  insert: 45,
  "delete": 46,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  leftwindowkey: 91,
  rightwindowkey: 92,
  selectkey: 93,
  numpad0: 96,
  numpad1: 97,
  numpad2: 98,
  numpad3: 99,
  numpad4: 100,
  numpad5: 101,
  numpad6: 102,
  numpad7: 103,
  numpad8: 104,
  numpad9: 105,
  multiply: 106,
  add: 107,
  subtract: 109,
  decimalpoint: 110,
  divide: 111,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  numlock: 144,
  scrolllock: 145,
  semicolon: 186,
  equalsign: 187,
  comma: 188,
  dash: 189,
  period: 190,
  forwardslash: 191,
  graveaccent: 192,
  openbracket: 219,
  backslash: 220,
  closebracket: 221,
  singlequote: 222
}; // 修饰键

var modifierKey = {
  ctrl: function ctrl(event) {
    return event.ctrlKey;
  },
  shift: function shift(event) {
    return event.shiftKey;
  },
  alt: function alt(event) {
    return event.altKey;
  },
  meta: function meta(event) {
    return event.metaKey;
  }
}; // 根据 event 计算激活键数量

function countKeyByEvent(event) {
  var countOfModifier = Object.keys(modifierKey).reduce(function (total, key) {
    if (modifierKey[key](event)) {
      return total + 1;
    }

    return total;
  }, 0); // 16 17 18 91 92 是修饰键的 keyCode，如果 keyCode 是修饰键，那么激活数量就是修饰键的数量，如果不是，那么就需要 +1

  return [16, 17, 18, 91, 92].includes(event.keyCode) ? countOfModifier : countOfModifier + 1;
}
/**
 * 判断按键是否激活
 * @param [event: KeyboardEvent]键盘事件
 * @param [keyFilter: any] 当前键
 * @returns Boolean
 */


function genFilterKey(event, keyFilter, exactMatch) {
  var e_1, _a; // 浏览器自动补全 input 的时候，会触发 keyDown、keyUp 事件，但此时 event.key 等为空


  if (!event.key) {
    return false;
  } // 数字类型直接匹配事件的 keyCode


  if (utils_1.isNumber(keyFilter)) {
    return event.keyCode === keyFilter;
  } // 字符串依次判断是否有组合键


  var genArr = keyFilter.split('.');
  var genLen = 0;

  try {
    for (var genArr_1 = __values(genArr), genArr_1_1 = genArr_1.next(); !genArr_1_1.done; genArr_1_1 = genArr_1.next()) {
      var key = genArr_1_1.value; // 组合键

      var genModifier = modifierKey[key]; // keyCode 别名

      var aliasKeyCode = aliasKeyCodeMap[key.toLowerCase()];

      if (genModifier && genModifier(event) || aliasKeyCode && aliasKeyCode === event.keyCode) {
        genLen++;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (genArr_1_1 && !genArr_1_1.done && (_a = genArr_1["return"])) _a.call(genArr_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  /**
   * 需要判断触发的键位和监听的键位完全一致，判断方法就是触发的键位里有且等于监听的键位
   * genLen === genArr.length 能判断出来触发的键位里有监听的键位
   * countKeyByEvent(event) === genArr.length 判断出来触发的键位数量里有且等于监听的键位数量
   * 主要用来防止按组合键其子集也会触发的情况，例如监听 ctrl+a 会触发监听 ctrl 和 a 两个键的事件。
   */


  if (exactMatch) {
    return genLen === genArr.length && countKeyByEvent(event) === genArr.length;
  }

  return genLen === genArr.length;
}
/**
 * 键盘输入预处理方法
 * @param [keyFilter: any] 当前键
 * @returns () => Boolean
 */


function genKeyFormatter(keyFilter, exactMatch) {
  if (utils_1.isFunction(keyFilter)) {
    return keyFilter;
  }

  if (utils_1.isString(keyFilter) || utils_1.isNumber(keyFilter)) {
    return function (event) {
      return genFilterKey(event, keyFilter, exactMatch);
    };
  }

  if (Array.isArray(keyFilter)) {
    return function (event) {
      return keyFilter.some(function (item) {
        return genFilterKey(event, item, exactMatch);
      });
    };
  }

  return keyFilter ? function () {
    return true;
  } : function () {
    return false;
  };
}

var defaultEvents = ['keydown'];

function useKeyPress(keyFilter, eventHandler, option) {
  var _a = option || {},
      _b = _a.events,
      events = _b === void 0 ? defaultEvents : _b,
      target = _a.target,
      _c = _a.exactMatch,
      exactMatch = _c === void 0 ? false : _c;

  var eventHandlerRef = useLatest_1["default"](eventHandler);
  var keyFilterRef = useLatest_1["default"](keyFilter);
  useDeepCompareWithTarget_1["default"](function () {
    var e_2, _a;

    var _b;

    var el = domTarget_1.getTargetElement(target, window);

    if (!el) {
      return;
    }

    var callbackHandler = function callbackHandler(event) {
      var _a;

      var genGuard = genKeyFormatter(keyFilterRef.current, exactMatch);

      if (genGuard(event)) {
        return (_a = eventHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(eventHandlerRef, event);
      }
    };

    try {
      for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
        var eventName = events_1_1.value;
        (_b = el === null || el === void 0 ? void 0 : el.addEventListener) === null || _b === void 0 ? void 0 : _b.call(el, eventName, callbackHandler);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (events_1_1 && !events_1_1.done && (_a = events_1["return"])) _a.call(events_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return function () {
      var e_3, _a;

      var _b;

      try {
        for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
          var eventName = events_2_1.value;
          (_b = el === null || el === void 0 ? void 0 : el.removeEventListener) === null || _b === void 0 ? void 0 : _b.call(el, eventName, callbackHandler);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (events_2_1 && !events_2_1.done && (_a = events_2["return"])) _a.call(events_2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    };
  }, [events], target);
}

exports["default"] = useKeyPress;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils":1656641689815,"../utils/domTarget":1656641689849,"../utils/useDeepCompareWithTarget":1656641689886}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689886, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isEqual_1 = __importDefault(require("lodash/isEqual"));

var react_1 = require("react");

var useEffectWithTarget_1 = __importDefault(require("./useEffectWithTarget"));

var depsEqual = function depsEqual(aDeps, bDeps) {
  if (bDeps === void 0) {
    bDeps = [];
  }

  return isEqual_1["default"](aDeps, bDeps);
};

var useDeepCompareEffectWithTarget = function useDeepCompareEffectWithTarget(effect, deps, target) {
  var ref = react_1.useRef();
  var signalRef = react_1.useRef(0);

  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }

  useEffectWithTarget_1["default"](effect, [signalRef.current], target);
};

exports["default"] = useDeepCompareEffectWithTarget;
}, function(modId) { var map = {"./useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689887, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createUseStorageState_1 = require("../createUseStorageState");

var isBrowser_1 = __importDefault(require("../utils/isBrowser"));

var useLocalStorageState = createUseStorageState_1.createUseStorageState(function () {
  return isBrowser_1["default"] ? localStorage : undefined;
});
exports["default"] = useLocalStorageState;
}, function(modId) { var map = {"../createUseStorageState":1656641689888,"../utils/isBrowser":1656641689850}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689888, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseStorageState = void 0;
/* eslint-disable no-empty */

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var useUpdateEffect_1 = __importDefault(require("../useUpdateEffect"));

var utils_1 = require("../utils");

function createUseStorageState(getStorage) {
  function useStorageState(key, options) {
    var storage; // https://github.com/alibaba/hooks/issues/800

    try {
      storage = getStorage();
    } catch (err) {
      console.error(err);
    }

    var serializer = function serializer(value) {
      if (options === null || options === void 0 ? void 0 : options.serializer) {
        return options === null || options === void 0 ? void 0 : options.serializer(value);
      }

      return JSON.stringify(value);
    };

    var deserializer = function deserializer(value) {
      if (options === null || options === void 0 ? void 0 : options.deserializer) {
        return options === null || options === void 0 ? void 0 : options.deserializer(value);
      }

      return JSON.parse(value);
    };

    function getStoredValue() {
      try {
        var raw = storage === null || storage === void 0 ? void 0 : storage.getItem(key);

        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        console.error(e);
      }

      if (utils_1.isFunction(options === null || options === void 0 ? void 0 : options.defaultValue)) {
        return options === null || options === void 0 ? void 0 : options.defaultValue();
      }

      return options === null || options === void 0 ? void 0 : options.defaultValue;
    }

    var _a = __read(react_1.useState(function () {
      return getStoredValue();
    }), 2),
        state = _a[0],
        setState = _a[1];

    useUpdateEffect_1["default"](function () {
      setState(getStoredValue());
    }, [key]);

    var updateState = function updateState(value) {
      var currentState = utils_1.isFunction(value) ? value(state) : value;
      setState(currentState);

      if (utils_1.isUndef(currentState)) {
        storage === null || storage === void 0 ? void 0 : storage.removeItem(key);
      } else {
        try {
          storage === null || storage === void 0 ? void 0 : storage.setItem(key, serializer(currentState));
        } catch (e) {
          console.error(e);
        }
      }
    };

    return [state, useMemoizedFn_1["default"](updateState)];
  }

  return useStorageState;
}

exports.createUseStorageState = createUseStorageState;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814,"../useUpdateEffect":1656641689820,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689889, function(require, module, exports) {


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

function useLockFn(fn) {
  var _this = this;

  var lockRef = react_1.useRef(false);
  return react_1.useCallback(function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return __awaiter(_this, void 0, void 0, function () {
      var ret, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (lockRef.current) return [2
            /*return*/
            ];
            lockRef.current = true;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , fn.apply(void 0, __spread(args))];

          case 2:
            ret = _a.sent();
            lockRef.current = false;
            return [2
            /*return*/
            , ret];

          case 3:
            e_1 = _a.sent();
            lockRef.current = false;
            throw e_1;

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, [fn]);
}

exports["default"] = useLockFn;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689890, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var domTarget_1 = require("../utils/domTarget");

var isBrowser_1 = __importDefault(require("../utils/isBrowser"));

var useEffectWithTarget_1 = __importDefault(require("../utils/useEffectWithTarget"));

var touchSupported = isBrowser_1["default"] && ( // @ts-ignore
'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);

function useLongPress(onLongPress, target, _a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.delay,
      delay = _c === void 0 ? 300 : _c,
      moveThreshold = _b.moveThreshold,
      onClick = _b.onClick,
      onLongPressEnd = _b.onLongPressEnd;

  var onLongPressRef = useLatest_1["default"](onLongPress);
  var onClickRef = useLatest_1["default"](onClick);
  var onLongPressEndRef = useLatest_1["default"](onLongPressEnd);
  var timerRef = react_1.useRef();
  var isTriggeredRef = react_1.useRef(false);
  var pervPositionRef = react_1.useRef({
    x: 0,
    y: 0
  });
  var hasMoveThreshold = !!((moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.x) && moveThreshold.x > 0 || (moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.y) && moveThreshold.y > 0);
  useEffectWithTarget_1["default"](function () {
    var targetElement = domTarget_1.getTargetElement(target);

    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }

    var overThreshold = function overThreshold(event) {
      var _a = getClientPosition(event),
          clientX = _a.clientX,
          clientY = _a.clientY;

      var offsetX = Math.abs(clientX - pervPositionRef.current.x);
      var offsetY = Math.abs(clientY - pervPositionRef.current.y);
      return !!((moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.x) && offsetX > moveThreshold.x || (moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.y) && offsetY > moveThreshold.y);
    };

    function getClientPosition(event) {
      if (event instanceof TouchEvent) {
        return {
          clientX: event.touches[0].clientX,
          clientY: event.touches[0].clientY
        };
      }

      if (event instanceof MouseEvent) {
        return {
          clientX: event.clientX,
          clientY: event.clientY
        };
      }

      console.warn('Unsupported event type');
      return {
        clientX: 0,
        clientY: 0
      };
    }

    var onStart = function onStart(event) {
      if (hasMoveThreshold) {
        var _a = getClientPosition(event),
            clientX = _a.clientX,
            clientY = _a.clientY;

        pervPositionRef.current.x = clientX;
        pervPositionRef.current.y = clientY;
      }

      timerRef.current = setTimeout(function () {
        onLongPressRef.current(event);
        isTriggeredRef.current = true;
      }, delay);
    };

    var onMove = function onMove(event) {
      if (timerRef.current && overThreshold(event)) {
        clearInterval(timerRef.current);
        timerRef.current = undefined;
      }
    };

    var onEnd = function onEnd(event, shouldTriggerClick) {
      var _a;

      if (shouldTriggerClick === void 0) {
        shouldTriggerClick = false;
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      if (isTriggeredRef.current) {
        (_a = onLongPressEndRef.current) === null || _a === void 0 ? void 0 : _a.call(onLongPressEndRef, event);
      }

      if (shouldTriggerClick && !isTriggeredRef.current && onClickRef.current) {
        onClickRef.current(event);
      }

      isTriggeredRef.current = false;
    };

    var onEndWithClick = function onEndWithClick(event) {
      return onEnd(event, true);
    };

    if (!touchSupported) {
      targetElement.addEventListener('mousedown', onStart);
      targetElement.addEventListener('mouseup', onEndWithClick);
      targetElement.addEventListener('mouseleave', onEnd);
      if (hasMoveThreshold) targetElement.addEventListener('mousemove', onMove);
    } else {
      targetElement.addEventListener('touchstart', onStart);
      targetElement.addEventListener('touchend', onEndWithClick);
      if (hasMoveThreshold) targetElement.addEventListener('touchmove', onMove);
    }

    return function () {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        isTriggeredRef.current = false;
      }

      if (!touchSupported) {
        targetElement.removeEventListener('mousedown', onStart);
        targetElement.removeEventListener('mouseup', onEndWithClick);
        targetElement.removeEventListener('mouseleave', onEnd);
        if (hasMoveThreshold) targetElement.removeEventListener('mousemove', onMove);
      } else {
        targetElement.removeEventListener('touchstart', onStart);
        targetElement.removeEventListener('touchend', onEndWithClick);
        if (hasMoveThreshold) targetElement.removeEventListener('touchmove', onMove);
      }
    };
  }, [], target);
}

exports["default"] = useLongPress;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils/domTarget":1656641689849,"../utils/isBrowser":1656641689850,"../utils/useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689891, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

function useMap(initialValue) {
  var getInitValue = function getInitValue() {
    return initialValue === undefined ? new Map() : new Map(initialValue);
  };

  var _a = __read(react_1.useState(function () {
    return getInitValue();
  }), 2),
      map = _a[0],
      setMap = _a[1];

  var set = function set(key, entry) {
    setMap(function (prev) {
      var temp = new Map(prev);
      temp.set(key, entry);
      return temp;
    });
  };

  var setAll = function setAll(newMap) {
    setMap(new Map(newMap));
  };

  var remove = function remove(key) {
    setMap(function (prev) {
      var temp = new Map(prev);
      temp["delete"](key);
      return temp;
    });
  };

  var reset = function reset() {
    return setMap(getInitValue());
  };

  var get = function get(key) {
    return map.get(key);
  };

  return [map, {
    set: useMemoizedFn_1["default"](set),
    setAll: useMemoizedFn_1["default"](setAll),
    remove: useMemoizedFn_1["default"](remove),
    reset: useMemoizedFn_1["default"](reset),
    get: useMemoizedFn_1["default"](get)
  }];
}

exports["default"] = useMap;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689892, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useRafState_1 = __importDefault(require("../useRafState"));

var useEventListener_1 = __importDefault(require("../useEventListener"));

var domTarget_1 = require("../utils/domTarget");

var initState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN,
  elementX: NaN,
  elementY: NaN,
  elementH: NaN,
  elementW: NaN,
  elementPosX: NaN,
  elementPosY: NaN
};

exports["default"] = function (target) {
  var _a = __read(useRafState_1["default"](initState), 2),
      state = _a[0],
      setState = _a[1];

  useEventListener_1["default"]('mousemove', function (event) {
    var screenX = event.screenX,
        screenY = event.screenY,
        clientX = event.clientX,
        clientY = event.clientY,
        pageX = event.pageX,
        pageY = event.pageY;
    var newState = {
      screenX: screenX,
      screenY: screenY,
      clientX: clientX,
      clientY: clientY,
      pageX: pageX,
      pageY: pageY,
      elementX: NaN,
      elementY: NaN,
      elementH: NaN,
      elementW: NaN,
      elementPosX: NaN,
      elementPosY: NaN
    };
    var targetElement = domTarget_1.getTargetElement(target);

    if (targetElement) {
      var _a = targetElement.getBoundingClientRect(),
          left = _a.left,
          top_1 = _a.top,
          width = _a.width,
          height = _a.height;

      newState.elementPosX = left + window.pageXOffset;
      newState.elementPosY = top_1 + window.pageYOffset;
      newState.elementX = pageX - newState.elementPosX;
      newState.elementY = pageY - newState.elementPosY;
      newState.elementW = width;
      newState.elementH = height;
    }

    setState(newState);
  }, {
    target: function target() {
      return document;
    }
  });
  return state;
};
}, function(modId) { var map = {"../useRafState":1656641689893,"../useEventListener":1656641689865,"../utils/domTarget":1656641689849}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689893, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUnmount_1 = __importDefault(require("../useUnmount"));

function useRafState(initialState) {
  var ref = react_1.useRef(0);

  var _a = __read(react_1.useState(initialState), 2),
      state = _a[0],
      setState = _a[1];

  var setRafState = react_1.useCallback(function (value) {
    cancelAnimationFrame(ref.current);
    ref.current = requestAnimationFrame(function () {
      setState(value);
    });
  }, []);
  useUnmount_1["default"](function () {
    cancelAnimationFrame(ref.current);
  });
  return [state, setRafState];
}

exports["default"] = useRafState;
}, function(modId) { var map = {"../useUnmount":1656641689824}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689894, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var utils_1 = require("../utils");

var NetworkEventType;

(function (NetworkEventType) {
  NetworkEventType["ONLINE"] = "online";
  NetworkEventType["OFFLINE"] = "offline";
  NetworkEventType["CHANGE"] = "change";
})(NetworkEventType || (NetworkEventType = {}));

function getConnection() {
  var nav = navigator;
  if (!utils_1.isObject(nav)) return null;
  return nav.connection || nav.mozConnection || nav.webkitConnection;
}

function getConnectionProperty() {
  var c = getConnection();
  if (!c) return {};
  return {
    rtt: c.rtt,
    type: c.type,
    saveData: c.saveData,
    downlink: c.downlink,
    downlinkMax: c.downlinkMax,
    effectiveType: c.effectiveType
  };
}

function useNetwork() {
  var _a = __read(react_1.useState(function () {
    return __assign({
      since: undefined,
      online: navigator === null || navigator === void 0 ? void 0 : navigator.onLine
    }, getConnectionProperty());
  }), 2),
      state = _a[0],
      setState = _a[1];

  react_1.useEffect(function () {
    var onOnline = function onOnline() {
      setState(function (prevState) {
        return __assign(__assign({}, prevState), {
          online: true,
          since: new Date()
        });
      });
    };

    var onOffline = function onOffline() {
      setState(function (prevState) {
        return __assign(__assign({}, prevState), {
          online: false,
          since: new Date()
        });
      });
    };

    var onConnectionChange = function onConnectionChange() {
      setState(function (prevState) {
        return __assign(__assign({}, prevState), getConnectionProperty());
      });
    };

    window.addEventListener(NetworkEventType.ONLINE, onOnline);
    window.addEventListener(NetworkEventType.OFFLINE, onOffline);
    var connection = getConnection();
    connection === null || connection === void 0 ? void 0 : connection.addEventListener(NetworkEventType.CHANGE, onConnectionChange);
    return function () {
      window.removeEventListener(NetworkEventType.ONLINE, onOnline);
      window.removeEventListener(NetworkEventType.OFFLINE, onOffline);
      connection === null || connection === void 0 ? void 0 : connection.removeEventListener(NetworkEventType.CHANGE, onConnectionChange);
    };
  }, []);
  return state;
}

exports["default"] = useNetwork;
}, function(modId) { var map = {"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689895, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var defaultShouldUpdate = function defaultShouldUpdate(a, b) {
  return !Object.is(a, b);
};

function usePrevious(state, shouldUpdate) {
  if (shouldUpdate === void 0) {
    shouldUpdate = defaultShouldUpdate;
  }

  var prevRef = react_1.useRef();
  var curRef = react_1.useRef();

  if (shouldUpdate(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
}

exports["default"] = usePrevious;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689896, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var utils_1 = require("../utils");

var setRafInterval = function setRafInterval(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  if (typeof requestAnimationFrame === typeof undefined) {
    return {
      id: setInterval(callback, delay)
    };
  }

  var start = new Date().getTime();
  var handle = {
    id: 0
  };

  var loop = function loop() {
    var current = new Date().getTime();

    if (current - start >= delay) {
      callback();
      start = new Date().getTime();
    }

    handle.id = requestAnimationFrame(loop);
  };

  handle.id = requestAnimationFrame(loop);
  return handle;
};

function cancelAnimationFrameIsNotDefined(t) {
  return typeof cancelAnimationFrame === typeof undefined;
}

var clearRafInterval = function clearRafInterval(handle) {
  if (cancelAnimationFrameIsNotDefined(handle.id)) {
    return clearInterval(handle.id);
  }

  cancelAnimationFrame(handle.id);
};

function useRafInterval(fn, delay, options) {
  var immediate = options === null || options === void 0 ? void 0 : options.immediate;
  var fnRef = useLatest_1["default"](fn);
  var timerRef = react_1.useRef();
  react_1.useEffect(function () {
    if (!utils_1.isNumber(delay) || delay < 0) return;

    if (immediate) {
      fnRef.current();
    }

    timerRef.current = setRafInterval(function () {
      fnRef.current();
    }, delay);
    return function () {
      if (timerRef.current) {
        clearRafInterval(timerRef.current);
      }
    };
  }, [delay]);
  var clear = react_1.useCallback(function () {
    if (timerRef.current) {
      clearRafInterval(timerRef.current);
    }
  }, []);
  return clear;
}

exports["default"] = useRafInterval;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689897, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var utils_1 = require("../utils");

var setRafTimeout = function setRafTimeout(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  if (typeof requestAnimationFrame === typeof undefined) {
    return {
      id: setTimeout(callback, delay)
    };
  }

  var handle = {
    id: 0
  };
  var startTime = new Date().getTime();

  var loop = function loop() {
    var current = new Date().getTime();

    if (current - startTime >= delay) {
      callback();
    } else {
      handle.id = requestAnimationFrame(loop);
    }
  };

  handle.id = requestAnimationFrame(loop);
  return handle;
};

function cancelAnimationFrameIsNotDefined(t) {
  return typeof cancelAnimationFrame === typeof undefined;
}

var clearRafTimeout = function clearRafTimeout(handle) {
  if (cancelAnimationFrameIsNotDefined(handle.id)) {
    return clearTimeout(handle.id);
  }

  cancelAnimationFrame(handle.id);
};

function useRafTimeout(fn, delay) {
  var fnRef = useLatest_1["default"](fn);
  var timerRef = react_1.useRef();
  react_1.useEffect(function () {
    if (!utils_1.isNumber(delay) || delay < 0) return;
    timerRef.current = setRafTimeout(function () {
      fnRef.current();
    }, delay);
    return function () {
      if (timerRef.current) {
        clearRafTimeout(timerRef.current);
      }
    };
  }, [delay]);
  var clear = react_1.useCallback(function () {
    if (timerRef.current) {
      clearRafTimeout(timerRef.current);
    }
  }, []);
  return clear;
}

exports["default"] = useRafTimeout;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689898, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useCreation_1 = __importDefault(require("../useCreation"));

var useUpdate_1 = __importDefault(require("../useUpdate"));

var utils_1 = require("../utils"); // k:v 原对象:代理过的对象


var proxyMap = new WeakMap(); // k:v 代理过的对象:原对象

var rawMap = new WeakMap();

function observer(initialVal, cb) {
  var existingProxy = proxyMap.get(initialVal); // 添加缓存 防止重新构建proxy

  if (existingProxy) {
    return existingProxy;
  } // 防止代理已经代理过的对象
  // https://github.com/alibaba/hooks/issues/839


  if (rawMap.has(initialVal)) {
    return initialVal;
  }

  var proxy = new Proxy(initialVal, {
    get: function get(target, key, receiver) {
      var res = Reflect.get(target, key, receiver);
      return utils_1.isObject(res) ? observer(res, cb) : Reflect.get(target, key);
    },
    set: function set(target, key, val) {
      var ret = Reflect.set(target, key, val);
      cb();
      return ret;
    },
    deleteProperty: function deleteProperty(target, key) {
      var ret = Reflect.deleteProperty(target, key);
      cb();
      return ret;
    }
  });
  proxyMap.set(initialVal, proxy);
  rawMap.set(proxy, initialVal);
  return proxy;
}

function useReactive(initialState) {
  var update = useUpdate_1["default"]();
  var stateRef = react_1.useRef(initialState);
  var state = useCreation_1["default"](function () {
    return observer(stateRef.current, function () {
      update();
    });
  }, []);
  return state;
}

exports["default"] = useReactive;
}, function(modId) { var map = {"../useCreation":1656641689822,"../useUpdate":1656641689843,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689899, function(require, module, exports) {


var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResponsive = exports.configResponsive = void 0;

var react_1 = require("react");

var isBrowser_1 = __importDefault(require("../utils/isBrowser"));

var subscribers = new Set();
var info;
var responsiveConfig = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

function handleResize() {
  var e_1, _a;

  var oldInfo = info;
  calculate();
  if (oldInfo === info) return;

  try {
    for (var subscribers_1 = __values(subscribers), subscribers_1_1 = subscribers_1.next(); !subscribers_1_1.done; subscribers_1_1 = subscribers_1.next()) {
      var subscriber = subscribers_1_1.value;
      subscriber();
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (subscribers_1_1 && !subscribers_1_1.done && (_a = subscribers_1["return"])) _a.call(subscribers_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}

var listening = false;

function calculate() {
  var e_2, _a;

  var width = window.innerWidth;
  var newInfo = {};
  var shouldUpdate = false;

  try {
    for (var _b = __values(Object.keys(responsiveConfig)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      newInfo[key] = width >= responsiveConfig[key];

      if (newInfo[key] !== info[key]) {
        shouldUpdate = true;
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  if (shouldUpdate) {
    info = newInfo;
  }
}

function configResponsive(config) {
  responsiveConfig = config;
  if (info) calculate();
}

exports.configResponsive = configResponsive;

function useResponsive() {
  if (isBrowser_1["default"] && !listening) {
    info = {};
    calculate();
    window.addEventListener('resize', handleResize);
    listening = true;
  }

  var _a = __read(react_1.useState(info), 2),
      state = _a[0],
      setState = _a[1];

  react_1.useEffect(function () {
    if (!isBrowser_1["default"]) return;

    var subscriber = function subscriber() {
      setState(info);
    };

    subscribers.add(subscriber);
    return function () {
      subscribers["delete"](subscriber);

      if (subscribers.size === 0) {
        window.removeEventListener('resize', handleResize);
        listening = false;
      }
    };
  }, []);
  return state;
}

exports.useResponsive = useResponsive;
}, function(modId) { var map = {"../utils/isBrowser":1656641689850}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689900, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUnmountedRef_1 = __importDefault(require("../useUnmountedRef"));

function useSafeState(initialState) {
  var unmountedRef = useUnmountedRef_1["default"]();

  var _a = __read(react_1.useState(initialState), 2),
      state = _a[0],
      setState = _a[1];

  var setCurrentState = react_1.useCallback(function (currentState) {
    /** if component is unmounted, stop update */
    if (unmountedRef.current) return;
    setState(currentState);
  }, []);
  return [state, setCurrentState];
}

exports["default"] = useSafeState;
}, function(modId) { var map = {"../useUnmountedRef":1656641689901}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689901, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUnmountedRef = function useUnmountedRef() {
  var unmountedRef = react_1.useRef(false);
  react_1.useEffect(function () {
    unmountedRef.current = false;
    return function () {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef;
};

exports["default"] = useUnmountedRef;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689902, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var useRafState_1 = __importDefault(require("../useRafState"));

var useLatest_1 = __importDefault(require("../useLatest"));

var domTarget_1 = require("../utils/domTarget");

var useEffectWithTarget_1 = __importDefault(require("../utils/useEffectWithTarget"));

function useScroll(target, shouldUpdate) {
  if (shouldUpdate === void 0) {
    shouldUpdate = function shouldUpdate() {
      return true;
    };
  }

  var _a = __read(useRafState_1["default"](), 2),
      position = _a[0],
      setPosition = _a[1];

  var shouldUpdateRef = useLatest_1["default"](shouldUpdate);
  useEffectWithTarget_1["default"](function () {
    var el = domTarget_1.getTargetElement(target, document);

    if (!el) {
      return;
    }

    var updatePosition = function updatePosition() {
      var newPosition;

      if (el === document) {
        if (document.scrollingElement) {
          newPosition = {
            left: document.scrollingElement.scrollLeft,
            top: document.scrollingElement.scrollTop
          };
        } else {
          // When in quirks mode, the scrollingElement attribute returns the HTML body element if it exists and is potentially scrollable, otherwise it returns null.
          // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/scrollingElement
          // https://stackoverflow.com/questions/28633221/document-body-scrolltop-firefox-returns-0-only-js
          newPosition = {
            left: Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop),
            top: Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft)
          };
        }
      } else {
        newPosition = {
          left: el.scrollLeft,
          top: el.scrollTop
        };
      }

      if (shouldUpdateRef.current(newPosition)) {
        setPosition(newPosition);
      }
    };

    updatePosition();
    el.addEventListener('scroll', updatePosition);
    return function () {
      el.removeEventListener('scroll', updatePosition);
    };
  }, [], target);
  return position;
}

exports["default"] = useScroll;
}, function(modId) { var map = {"../useRafState":1656641689893,"../useLatest":1656641689825,"../utils/domTarget":1656641689849,"../utils/useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689903, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

function useSelections(items, defaultSelected) {
  if (defaultSelected === void 0) {
    defaultSelected = [];
  }

  var _a = __read(react_1.useState(defaultSelected), 2),
      selected = _a[0],
      setSelected = _a[1];

  var selectedSet = react_1.useMemo(function () {
    return new Set(selected);
  }, [selected]);

  var isSelected = function isSelected(item) {
    return selectedSet.has(item);
  };

  var select = function select(item) {
    selectedSet.add(item);
    return setSelected(Array.from(selectedSet));
  };

  var unSelect = function unSelect(item) {
    selectedSet["delete"](item);
    return setSelected(Array.from(selectedSet));
  };

  var toggle = function toggle(item) {
    if (isSelected(item)) {
      unSelect(item);
    } else {
      select(item);
    }
  };

  var selectAll = function selectAll() {
    items.forEach(function (o) {
      selectedSet.add(o);
    });
    setSelected(Array.from(selectedSet));
  };

  var unSelectAll = function unSelectAll() {
    items.forEach(function (o) {
      selectedSet["delete"](o);
    });
    setSelected(Array.from(selectedSet));
  };

  var noneSelected = react_1.useMemo(function () {
    return items.every(function (o) {
      return !selectedSet.has(o);
    });
  }, [items, selectedSet]);
  var allSelected = react_1.useMemo(function () {
    return items.every(function (o) {
      return selectedSet.has(o);
    }) && !noneSelected;
  }, [items, selectedSet, noneSelected]);
  var partiallySelected = react_1.useMemo(function () {
    return !noneSelected && !allSelected;
  }, [noneSelected, allSelected]);

  var toggleAll = function toggleAll() {
    return allSelected ? unSelectAll() : selectAll();
  };

  return {
    selected: selected,
    noneSelected: noneSelected,
    allSelected: allSelected,
    partiallySelected: partiallySelected,
    setSelected: setSelected,
    isSelected: isSelected,
    select: useMemoizedFn_1["default"](select),
    unSelect: useMemoizedFn_1["default"](unSelect),
    toggle: useMemoizedFn_1["default"](toggle),
    selectAll: useMemoizedFn_1["default"](selectAll),
    unSelectAll: useMemoizedFn_1["default"](unSelectAll),
    toggleAll: useMemoizedFn_1["default"](toggleAll)
  };
}

exports["default"] = useSelections;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689904, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createUseStorageState_1 = require("../createUseStorageState");

var isBrowser_1 = __importDefault(require("../utils/isBrowser"));

var useSessionStorageState = createUseStorageState_1.createUseStorageState(function () {
  return isBrowser_1["default"] ? sessionStorage : undefined;
});
exports["default"] = useSessionStorageState;
}, function(modId) { var map = {"../createUseStorageState":1656641689888,"../utils/isBrowser":1656641689850}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689905, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

function useSet(initialValue) {
  var getInitValue = function getInitValue() {
    return initialValue === undefined ? new Set() : new Set(initialValue);
  };

  var _a = __read(react_1.useState(function () {
    return getInitValue();
  }), 2),
      set = _a[0],
      setSet = _a[1];

  var add = function add(key) {
    if (set.has(key)) {
      return;
    }

    setSet(function (prevSet) {
      var temp = new Set(prevSet);
      temp.add(key);
      return temp;
    });
  };

  var remove = function remove(key) {
    if (!set.has(key)) {
      return;
    }

    setSet(function (prevSet) {
      var temp = new Set(prevSet);
      temp["delete"](key);
      return temp;
    });
  };

  var reset = function reset() {
    return setSet(getInitValue());
  };

  return [set, {
    add: useMemoizedFn_1["default"](add),
    remove: useMemoizedFn_1["default"](remove),
    reset: useMemoizedFn_1["default"](reset)
  }];
}

exports["default"] = useSet;
}, function(modId) { var map = {"../useMemoizedFn":1656641689814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689906, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var utils_1 = require("../utils");

var useSetState = function useSetState(initialState) {
  var _a = __read(react_1.useState(initialState), 2),
      state = _a[0],
      setState = _a[1];

  var setMergeState = react_1.useCallback(function (patch) {
    setState(function (prevState) {
      var newState = utils_1.isFunction(patch) ? patch(prevState) : patch;
      return newState ? __assign(__assign({}, prevState), newState) : prevState;
    });
  }, []);
  return [state, setMergeState];
};

exports["default"] = useSetState;
}, function(modId) { var map = {"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689907, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));

var useRafState_1 = __importDefault(require("../useRafState"));

var domTarget_1 = require("../utils/domTarget");

var useIsomorphicLayoutEffectWithTarget_1 = __importDefault(require("../utils/useIsomorphicLayoutEffectWithTarget"));

function useSize(target) {
  var _a = __read(useRafState_1["default"](), 2),
      state = _a[0],
      setState = _a[1];

  useIsomorphicLayoutEffectWithTarget_1["default"](function () {
    var el = domTarget_1.getTargetElement(target);

    if (!el) {
      return;
    }

    var resizeObserver = new resize_observer_polyfill_1["default"](function (entries) {
      entries.forEach(function (entry) {
        var _a = entry.target,
            clientWidth = _a.clientWidth,
            clientHeight = _a.clientHeight;
        setState({
          width: clientWidth,
          height: clientHeight
        });
      });
    });
    resizeObserver.observe(el);
    return function () {
      resizeObserver.disconnect();
    };
  }, [], target);
  return state;
}

exports["default"] = useSize;
}, function(modId) { var map = {"../useRafState":1656641689893,"../utils/domTarget":1656641689849,"../utils/useIsomorphicLayoutEffectWithTarget":1656641689908}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689908, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isBrowser_1 = __importDefault(require("./isBrowser"));

var useEffectWithTarget_1 = __importDefault(require("./useEffectWithTarget"));

var useLayoutEffectWithTarget_1 = __importDefault(require("./useLayoutEffectWithTarget"));

var useIsomorphicLayoutEffectWithTarget = isBrowser_1["default"] ? useLayoutEffectWithTarget_1["default"] : useEffectWithTarget_1["default"];
exports["default"] = useIsomorphicLayoutEffectWithTarget;
}, function(modId) { var map = {"./isBrowser":1656641689850,"./useEffectWithTarget":1656641689852,"./useLayoutEffectWithTarget":1656641689909}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689909, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var createEffectWithTarget_1 = __importDefault(require("./createEffectWithTarget"));

var useEffectWithTarget = createEffectWithTarget_1["default"](react_1.useLayoutEffect);
exports["default"] = useEffectWithTarget;
}, function(modId) { var map = {"./createEffectWithTarget":1656641689853}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689910, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var domTarget_1 = require("../utils/domTarget");

var useEffectWithTarget_1 = __importDefault(require("../utils/useEffectWithTarget"));

var initRect = {
  top: NaN,
  left: NaN,
  bottom: NaN,
  right: NaN,
  height: NaN,
  width: NaN
};

var initState = __assign({
  text: ''
}, initRect);

function getRectFromSelection(selection) {
  if (!selection) {
    return initRect;
  }

  if (selection.rangeCount < 1) {
    return initRect;
  }

  var range = selection.getRangeAt(0);

  var _a = range.getBoundingClientRect(),
      height = _a.height,
      width = _a.width,
      top = _a.top,
      left = _a.left,
      right = _a.right,
      bottom = _a.bottom;

  return {
    height: height,
    width: width,
    top: top,
    left: left,
    right: right,
    bottom: bottom
  };
}

function useTextSelection(target) {
  var _a = __read(react_1.useState(initState), 2),
      state = _a[0],
      setState = _a[1];

  var stateRef = react_1.useRef(state);
  stateRef.current = state;
  useEffectWithTarget_1["default"](function () {
    var el = domTarget_1.getTargetElement(target, document);

    if (!el) {
      return;
    }

    var mouseupHandler = function mouseupHandler() {
      var selObj = null;
      var text = '';
      var rect = initRect;
      if (!window.getSelection) return;
      selObj = window.getSelection();
      text = selObj ? selObj.toString() : '';

      if (text) {
        rect = getRectFromSelection(selObj);
        setState(__assign(__assign(__assign({}, state), {
          text: text
        }), rect));
      }
    }; // 任意点击都需要清空之前的 range


    var mousedownHandler = function mousedownHandler() {
      if (!window.getSelection) return;

      if (stateRef.current.text) {
        setState(__assign({}, initState));
      }

      var selObj = window.getSelection();
      if (!selObj) return;
      selObj.removeAllRanges();
    };

    el.addEventListener('mouseup', mouseupHandler);
    document.addEventListener('mousedown', mousedownHandler);
    return function () {
      el.removeEventListener('mouseup', mouseupHandler);
      document.removeEventListener('mousedown', mousedownHandler);
    };
  }, [], target);
  return state;
}

exports["default"] = useTextSelection;
}, function(modId) { var map = {"../utils/domTarget":1656641689849,"../utils/useEffectWithTarget":1656641689852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689911, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useThrottleFn_1 = __importDefault(require("../useThrottleFn"));

function useThrottle(value, options) {
  var _a = __read(react_1.useState(value), 2),
      throttled = _a[0],
      setThrottled = _a[1];

  var run = useThrottleFn_1["default"](function () {
    setThrottled(value);
  }, options).run;
  react_1.useEffect(function () {
    run();
  }, [value]);
  return throttled;
}

exports["default"] = useThrottle;
}, function(modId) { var map = {"../useThrottleFn":1656641689912}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689912, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var throttle_1 = __importDefault(require("lodash/throttle"));

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var useUnmount_1 = __importDefault(require("../useUnmount"));

var utils_1 = require("../utils");

function useThrottleFn(fn, options) {
  var _a;

  if (process.env.NODE_ENV === 'development') {
    if (!utils_1.isFunction(fn)) {
      console.error("useThrottleFn expected parameter is a function, got " + typeof fn);
    }
  }

  var fnRef = useLatest_1["default"](fn);
  var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
  var throttled = react_1.useMemo(function () {
    return throttle_1["default"](function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return fnRef.current.apply(fnRef, __spread(args));
    }, wait, options);
  }, []);
  useUnmount_1["default"](function () {
    throttled.cancel();
  });
  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush
  };
}

exports["default"] = useThrottleFn;
}, function(modId) { var map = {"../useLatest":1656641689825,"../useUnmount":1656641689824,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689913, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useThrottleFn_1 = __importDefault(require("../useThrottleFn"));

var useUpdateEffect_1 = __importDefault(require("../useUpdateEffect"));

function useThrottleEffect(effect, deps, options) {
  var _a = __read(react_1.useState({}), 2),
      flag = _a[0],
      setFlag = _a[1];

  var run = useThrottleFn_1["default"](function () {
    setFlag({});
  }, options).run;
  react_1.useEffect(function () {
    return run();
  }, deps);
  useUpdateEffect_1["default"](effect, [flag]);
}

exports["default"] = useThrottleEffect;
}, function(modId) { var map = {"../useThrottleFn":1656641689912,"../useUpdateEffect":1656641689820}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689914, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var utils_1 = require("../utils");

function useTimeout(fn, delay) {
  var fnRef = useLatest_1["default"](fn);
  var timerRef = react_1.useRef();
  react_1.useEffect(function () {
    if (!utils_1.isNumber(delay) || delay < 0) return;
    timerRef.current = setTimeout(function () {
      fnRef.current();
    }, delay);
    return function () {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]);
  var clear = react_1.useCallback(function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);
  return clear;
}

exports["default"] = useTimeout;
}, function(modId) { var map = {"../useLatest":1656641689825,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689915, function(require, module, exports) {


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useUnmount_1 = __importDefault(require("../useUnmount"));

var isBrowser_1 = __importDefault(require("../utils/isBrowser"));

var DEFAULT_OPTIONS = {
  restoreOnUnmount: false
};

function useTitle(title, options) {
  if (options === void 0) {
    options = DEFAULT_OPTIONS;
  }

  var titleRef = react_1.useRef(isBrowser_1["default"] ? document.title : '');
  react_1.useEffect(function () {
    document.title = title;
  }, [title]);
  useUnmount_1["default"](function () {
    if (options.restoreOnUnmount) {
      document.title = titleRef.current;
    }
  });
}

exports["default"] = useTitle;
}, function(modId) { var map = {"../useUnmount":1656641689824,"../utils/isBrowser":1656641689850}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689916, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var diffTwoDeps = function diffTwoDeps(deps1, deps2) {
  //Let's do a reference equality check on 2 dependency list.
  //If deps1 is defined, we iterate over deps1 and do comparison on each element with equivalent element from deps2
  //As this func is used only in this hook, we assume 2 deps always have same length.
  return deps1 ? deps1.map(function (_ele, idx) {
    return !Object.is(deps1[idx], deps2 === null || deps2 === void 0 ? void 0 : deps2[idx]) ? idx : -1;
  }).filter(function (ele) {
    return ele >= 0;
  }) : deps2 ? deps2.map(function (_ele, idx) {
    return idx;
  }) : [];
};

var useTrackedEffect = function useTrackedEffect(effect, deps) {
  var previousDepsRef = react_1.useRef();
  react_1.useEffect(function () {
    var changes = diffTwoDeps(previousDepsRef.current, deps);
    var previousDeps = previousDepsRef.current;
    previousDepsRef.current = deps;
    return effect(changes, previousDeps, deps);
  }, deps);
};

exports["default"] = useTrackedEffect;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689917, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var createUpdateEffect_1 = require("../createUpdateEffect");

exports["default"] = createUpdateEffect_1.createUpdateEffect(react_1.useLayoutEffect);
}, function(modId) { var map = {"../createUpdateEffect":1656641689812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689918, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

var useEventListener_1 = __importDefault(require("../useEventListener"));

var useLatest_1 = __importDefault(require("../useLatest"));

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var useSize_1 = __importDefault(require("../useSize"));

var domTarget_1 = require("../utils/domTarget");

var utils_1 = require("../utils");

var useVirtualList = function useVirtualList(list, options) {
  var containerTarget = options.containerTarget,
      wrapperTarget = options.wrapperTarget,
      itemHeight = options.itemHeight,
      _a = options.overscan,
      overscan = _a === void 0 ? 5 : _a;
  var itemHeightRef = useLatest_1["default"](itemHeight);
  var size = useSize_1["default"](containerTarget);
  var scrollTriggerByScrollToFunc = react_1.useRef(false);

  var _b = __read(react_1.useState([]), 2),
      targetList = _b[0],
      setTargetList = _b[1];

  var getVisibleCount = function getVisibleCount(containerHeight, fromIndex) {
    if (utils_1.isNumber(itemHeightRef.current)) {
      return Math.ceil(containerHeight / itemHeightRef.current);
    }

    var sum = 0;
    var endIndex = 0;

    for (var i = fromIndex; i < list.length; i++) {
      var height = itemHeightRef.current(i, list[i]);
      sum += height;
      endIndex = i;

      if (sum >= containerHeight) {
        break;
      }
    }

    return endIndex - fromIndex;
  };

  var getOffset = function getOffset(scrollTop) {
    if (utils_1.isNumber(itemHeightRef.current)) {
      return Math.floor(scrollTop / itemHeightRef.current) + 1;
    }

    var sum = 0;
    var offset = 0;

    for (var i = 0; i < list.length; i++) {
      var height = itemHeightRef.current(i, list[i]);
      sum += height;

      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }

    return offset + 1;
  }; // 获取上部高度


  var getDistanceTop = function getDistanceTop(index) {
    if (utils_1.isNumber(itemHeightRef.current)) {
      var height_1 = index * itemHeightRef.current;
      return height_1;
    }

    var height = list.slice(0, index) // @ts-ignore
    .reduce(function (sum, _, i) {
      return sum + itemHeightRef.current(i, list[index]);
    }, 0);
    return height;
  };

  var totalHeight = react_1.useMemo(function () {
    if (utils_1.isNumber(itemHeightRef.current)) {
      return list.length * itemHeightRef.current;
    } // @ts-ignore


    return list.reduce(function (sum, _, index) {
      return sum + itemHeightRef.current(index, list[index]);
    }, 0);
  }, [list]);

  var calculateRange = function calculateRange() {
    var container = domTarget_1.getTargetElement(containerTarget);
    var wrapper = domTarget_1.getTargetElement(wrapperTarget);

    if (container && wrapper) {
      var scrollTop = container.scrollTop,
          clientHeight = container.clientHeight;
      var offset = getOffset(scrollTop);
      var visibleCount = getVisibleCount(clientHeight, offset);
      var start_1 = Math.max(0, offset - overscan);
      var end = Math.min(list.length, offset + visibleCount + overscan);
      var offsetTop = getDistanceTop(start_1); // @ts-ignore

      wrapper.style.height = totalHeight - offsetTop + 'px'; // @ts-ignore

      wrapper.style.marginTop = offsetTop + 'px';
      setTargetList(list.slice(start_1, end).map(function (ele, index) {
        return {
          data: ele,
          index: index + start_1
        };
      }));
    }
  };

  react_1.useEffect(function () {
    if (!(size === null || size === void 0 ? void 0 : size.width) || !(size === null || size === void 0 ? void 0 : size.height)) {
      return;
    }

    calculateRange();
  }, [size === null || size === void 0 ? void 0 : size.width, size === null || size === void 0 ? void 0 : size.height, list]);
  useEventListener_1["default"]('scroll', function (e) {
    if (scrollTriggerByScrollToFunc.current) {
      scrollTriggerByScrollToFunc.current = false;
      return;
    }

    e.preventDefault();
    calculateRange();
  }, {
    target: containerTarget
  });

  var scrollTo = function scrollTo(index) {
    var container = domTarget_1.getTargetElement(containerTarget);

    if (container) {
      scrollTriggerByScrollToFunc.current = true;
      container.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };

  return [targetList, useMemoizedFn_1["default"](scrollTo)];
};

exports["default"] = useVirtualList;
}, function(modId) { var map = {"../useEventListener":1656641689865,"../useLatest":1656641689825,"../useMemoizedFn":1656641689814,"../useSize":1656641689907,"../utils/domTarget":1656641689849,"../utils":1656641689815}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689919, function(require, module, exports) {


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadyState = void 0;

var react_1 = require("react");

var useLatest_1 = __importDefault(require("../useLatest"));

var useMemoizedFn_1 = __importDefault(require("../useMemoizedFn"));

var useUnmount_1 = __importDefault(require("../useUnmount"));

var ReadyState;

(function (ReadyState) {
  ReadyState[ReadyState["Connecting"] = 0] = "Connecting";
  ReadyState[ReadyState["Open"] = 1] = "Open";
  ReadyState[ReadyState["Closing"] = 2] = "Closing";
  ReadyState[ReadyState["Closed"] = 3] = "Closed";
})(ReadyState = exports.ReadyState || (exports.ReadyState = {}));

function useWebSocket(socketUrl, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.reconnectLimit,
      reconnectLimit = _a === void 0 ? 3 : _a,
      _b = options.reconnectInterval,
      reconnectInterval = _b === void 0 ? 3 * 1000 : _b,
      _c = options.manual,
      manual = _c === void 0 ? false : _c,
      onOpen = options.onOpen,
      onClose = options.onClose,
      onMessage = options.onMessage,
      onError = options.onError,
      protocols = options.protocols;
  var onOpenRef = useLatest_1["default"](onOpen);
  var onCloseRef = useLatest_1["default"](onClose);
  var onMessageRef = useLatest_1["default"](onMessage);
  var onErrorRef = useLatest_1["default"](onError);
  var reconnectTimesRef = react_1.useRef(0);
  var reconnectTimerRef = react_1.useRef();
  var websocketRef = react_1.useRef();
  var unmountedRef = react_1.useRef(false);

  var _d = __read(react_1.useState(), 2),
      latestMessage = _d[0],
      setLatestMessage = _d[1];

  var _e = __read(react_1.useState(ReadyState.Closed), 2),
      readyState = _e[0],
      setReadyState = _e[1];

  var reconnect = function reconnect() {
    var _a;

    if (reconnectTimesRef.current < reconnectLimit && ((_a = websocketRef.current) === null || _a === void 0 ? void 0 : _a.readyState) !== ReadyState.Open) {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }

      reconnectTimerRef.current = setTimeout(function () {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        connectWs();
        reconnectTimesRef.current++;
      }, reconnectInterval);
    }
  };

  var connectWs = function connectWs() {
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }

    if (websocketRef.current) {
      websocketRef.current.close();
    }

    var ws = new WebSocket(socketUrl, protocols);
    setReadyState(ReadyState.Connecting);

    ws.onerror = function (event) {
      var _a;

      if (unmountedRef.current) {
        return;
      }

      reconnect();
      (_a = onErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onErrorRef, event, ws);
      setReadyState(ws.readyState || ReadyState.Closed);
    };

    ws.onopen = function (event) {
      var _a;

      if (unmountedRef.current) {
        return;
      }

      (_a = onOpenRef.current) === null || _a === void 0 ? void 0 : _a.call(onOpenRef, event, ws);
      reconnectTimesRef.current = 0;
      setReadyState(ws.readyState || ReadyState.Open);
    };

    ws.onmessage = function (message) {
      var _a;

      if (unmountedRef.current) {
        return;
      }

      (_a = onMessageRef.current) === null || _a === void 0 ? void 0 : _a.call(onMessageRef, message, ws);
      setLatestMessage(message);
    };

    ws.onclose = function (event) {
      var _a;

      if (unmountedRef.current) {
        return;
      }

      reconnect();
      (_a = onCloseRef.current) === null || _a === void 0 ? void 0 : _a.call(onCloseRef, event, ws);
      setReadyState(ws.readyState || ReadyState.Closed);
    };

    websocketRef.current = ws;
  };

  var sendMessage = function sendMessage(message) {
    var _a;

    if (readyState === ReadyState.Open) {
      (_a = websocketRef.current) === null || _a === void 0 ? void 0 : _a.send(message);
    } else {
      throw new Error('WebSocket disconnected');
    }
  };

  var connect = function connect() {
    reconnectTimesRef.current = 0;
    connectWs();
  };

  var disconnect = function disconnect() {
    var _a;

    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }

    reconnectTimesRef.current = reconnectLimit;
    (_a = websocketRef.current) === null || _a === void 0 ? void 0 : _a.close();
  };

  react_1.useEffect(function () {
    if (!manual) {
      connect();
    }
  }, [socketUrl, manual]);
  useUnmount_1["default"](function () {
    unmountedRef.current = true;
    disconnect();
  });
  return {
    latestMessage: latestMessage,
    sendMessage: useMemoizedFn_1["default"](sendMessage),
    connect: useMemoizedFn_1["default"](connect),
    disconnect: useMemoizedFn_1["default"](disconnect),
    readyState: readyState,
    webSocketIns: websocketRef.current
  };
}

exports["default"] = useWebSocket;
}, function(modId) { var map = {"../useLatest":1656641689825,"../useMemoizedFn":1656641689814,"../useUnmount":1656641689824}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641689920, function(require, module, exports) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");

function useWhyDidYouUpdate(componentName, props) {
  var prevProps = react_1.useRef({});
  react_1.useEffect(function () {
    if (prevProps.current) {
      var allKeys = Object.keys(__assign(__assign({}, prevProps.current), props));
      var changedProps_1 = {};
      allKeys.forEach(function (key) {
        if (!Object.is(prevProps.current[key], props[key])) {
          changedProps_1[key] = {
            from: prevProps.current[key],
            to: props[key]
          };
        }
      });

      if (Object.keys(changedProps_1).length) {
        console.log('[why-did-you-update]', componentName, changedProps_1);
      }
    }

    prevProps.current = props;
  });
}

exports["default"] = useWhyDidYouUpdate;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1656641689811);
})()
//miniprogram-npm-outsideDeps=["react","lodash/debounce","lodash/throttle","js-cookie","dayjs","lodash/isEqual","screenfull","intersection-observer","resize-observer-polyfill"]
//# sourceMappingURL=index.js.map