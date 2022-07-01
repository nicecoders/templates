module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1656641690074, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ActionSheet", {
  enumerable: true,
  get: function () {
    return _actionSheet.default;
  }
});
Object.defineProperty(exports, "AutoCenter", {
  enumerable: true,
  get: function () {
    return _autoCenter.default;
  }
});
Object.defineProperty(exports, "Avatar", {
  enumerable: true,
  get: function () {
    return _avatar.default;
  }
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function () {
    return _badge.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "Calendar", {
  enumerable: true,
  get: function () {
    return _calendar.default;
  }
});
Object.defineProperty(exports, "CapsuleTabs", {
  enumerable: true,
  get: function () {
    return _capsuleTabs.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function () {
    return _card.default;
  }
});
Object.defineProperty(exports, "CascadePicker", {
  enumerable: true,
  get: function () {
    return _cascadePicker.default;
  }
});
Object.defineProperty(exports, "CascadePickerView", {
  enumerable: true,
  get: function () {
    return _cascadePickerView.default;
  }
});
Object.defineProperty(exports, "Cascader", {
  enumerable: true,
  get: function () {
    return _cascader.default;
  }
});
Object.defineProperty(exports, "CascaderView", {
  enumerable: true,
  get: function () {
    return _cascaderView.default;
  }
});
Object.defineProperty(exports, "CenterPopup", {
  enumerable: true,
  get: function () {
    return _centerPopup.default;
  }
});
Object.defineProperty(exports, "CheckList", {
  enumerable: true,
  get: function () {
    return _checkList.default;
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function () {
    return _checkbox.default;
  }
});
Object.defineProperty(exports, "Collapse", {
  enumerable: true,
  get: function () {
    return _collapse.default;
  }
});
Object.defineProperty(exports, "ConfigProvider", {
  enumerable: true,
  get: function () {
    return _configProvider.default;
  }
});
Object.defineProperty(exports, "DatePicker", {
  enumerable: true,
  get: function () {
    return _datePicker.default;
  }
});
Object.defineProperty(exports, "DatePickerView", {
  enumerable: true,
  get: function () {
    return _datePickerView.default;
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function () {
    return _dialog.default;
  }
});
Object.defineProperty(exports, "Divider", {
  enumerable: true,
  get: function () {
    return _divider.default;
  }
});
Object.defineProperty(exports, "DotLoading", {
  enumerable: true,
  get: function () {
    return _dotLoading.default;
  }
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function () {
    return _dropdown.default;
  }
});
Object.defineProperty(exports, "Ellipsis", {
  enumerable: true,
  get: function () {
    return _ellipsis.default;
  }
});
Object.defineProperty(exports, "Empty", {
  enumerable: true,
  get: function () {
    return _empty.default;
  }
});
Object.defineProperty(exports, "ErrorBlock", {
  enumerable: true,
  get: function () {
    return _errorBlock.default;
  }
});
Object.defineProperty(exports, "FloatingBubble", {
  enumerable: true,
  get: function () {
    return _floatingBubble.default;
  }
});
Object.defineProperty(exports, "FloatingPanel", {
  enumerable: true,
  get: function () {
    return _floatingPanel.default;
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function () {
    return _form.default;
  }
});
Object.defineProperty(exports, "Grid", {
  enumerable: true,
  get: function () {
    return _grid.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function () {
    return _image.default;
  }
});
Object.defineProperty(exports, "ImageUploader", {
  enumerable: true,
  get: function () {
    return _imageUploader.default;
  }
});
Object.defineProperty(exports, "ImageViewer", {
  enumerable: true,
  get: function () {
    return _imageViewer.default;
  }
});
Object.defineProperty(exports, "IndexBar", {
  enumerable: true,
  get: function () {
    return _indexBar.default;
  }
});
Object.defineProperty(exports, "InfiniteScroll", {
  enumerable: true,
  get: function () {
    return _infiniteScroll.default;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function () {
    return _input.default;
  }
});
Object.defineProperty(exports, "JumboTabs", {
  enumerable: true,
  get: function () {
    return _jumboTabs.default;
  }
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function () {
    return _list.default;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function () {
    return _loading.default;
  }
});
Object.defineProperty(exports, "Mask", {
  enumerable: true,
  get: function () {
    return _mask.default;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function () {
    return _modal.default;
  }
});
Object.defineProperty(exports, "NavBar", {
  enumerable: true,
  get: function () {
    return _navBar.default;
  }
});
Object.defineProperty(exports, "NoticeBar", {
  enumerable: true,
  get: function () {
    return _noticeBar.default;
  }
});
Object.defineProperty(exports, "NumberKeyboard", {
  enumerable: true,
  get: function () {
    return _numberKeyboard.default;
  }
});
Object.defineProperty(exports, "PageIndicator", {
  enumerable: true,
  get: function () {
    return _pageIndicator.default;
  }
});
Object.defineProperty(exports, "PasscodeInput", {
  enumerable: true,
  get: function () {
    return _passcodeInput.default;
  }
});
Object.defineProperty(exports, "Picker", {
  enumerable: true,
  get: function () {
    return _picker.default;
  }
});
Object.defineProperty(exports, "PickerView", {
  enumerable: true,
  get: function () {
    return _pickerView.default;
  }
});
Object.defineProperty(exports, "Popover", {
  enumerable: true,
  get: function () {
    return _popover.default;
  }
});
Object.defineProperty(exports, "Popup", {
  enumerable: true,
  get: function () {
    return _popup.default;
  }
});
Object.defineProperty(exports, "ProgressBar", {
  enumerable: true,
  get: function () {
    return _progressBar.default;
  }
});
Object.defineProperty(exports, "ProgressCircle", {
  enumerable: true,
  get: function () {
    return _progressCircle.default;
  }
});
Object.defineProperty(exports, "PullToRefresh", {
  enumerable: true,
  get: function () {
    return _pullToRefresh.default;
  }
});
Object.defineProperty(exports, "Radio", {
  enumerable: true,
  get: function () {
    return _radio.default;
  }
});
Object.defineProperty(exports, "Rate", {
  enumerable: true,
  get: function () {
    return _rate.default;
  }
});
Object.defineProperty(exports, "Result", {
  enumerable: true,
  get: function () {
    return _result.default;
  }
});
Object.defineProperty(exports, "SafeArea", {
  enumerable: true,
  get: function () {
    return _safeArea.default;
  }
});
Object.defineProperty(exports, "ScrollMask", {
  enumerable: true,
  get: function () {
    return _scrollMask.default;
  }
});
Object.defineProperty(exports, "SearchBar", {
  enumerable: true,
  get: function () {
    return _searchBar.default;
  }
});
Object.defineProperty(exports, "Selector", {
  enumerable: true,
  get: function () {
    return _selector.default;
  }
});
Object.defineProperty(exports, "SideBar", {
  enumerable: true,
  get: function () {
    return _sideBar.default;
  }
});
Object.defineProperty(exports, "Skeleton", {
  enumerable: true,
  get: function () {
    return _skeleton.default;
  }
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function () {
    return _slider.default;
  }
});
Object.defineProperty(exports, "Space", {
  enumerable: true,
  get: function () {
    return _space.default;
  }
});
Object.defineProperty(exports, "SpinLoading", {
  enumerable: true,
  get: function () {
    return _spinLoading.default;
  }
});
Object.defineProperty(exports, "Stepper", {
  enumerable: true,
  get: function () {
    return _stepper.default;
  }
});
Object.defineProperty(exports, "Steps", {
  enumerable: true,
  get: function () {
    return _steps.default;
  }
});
Object.defineProperty(exports, "SwipeAction", {
  enumerable: true,
  get: function () {
    return _swipeAction.default;
  }
});
Object.defineProperty(exports, "Swiper", {
  enumerable: true,
  get: function () {
    return _swiper.default;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function () {
    return _switch.default;
  }
});
Object.defineProperty(exports, "TabBar", {
  enumerable: true,
  get: function () {
    return _tabBar.default;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function () {
    return _tabs.default;
  }
});
Object.defineProperty(exports, "Tag", {
  enumerable: true,
  get: function () {
    return _tag.default;
  }
});
Object.defineProperty(exports, "TextArea", {
  enumerable: true,
  get: function () {
    return _textArea.default;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function () {
    return _toast.default;
  }
});
Object.defineProperty(exports, "TreeSelect", {
  enumerable: true,
  get: function () {
    return _treeSelect.default;
  }
});
Object.defineProperty(exports, "VirtualInput", {
  enumerable: true,
  get: function () {
    return _virtualInput.default;
  }
});
Object.defineProperty(exports, "WaterMark", {
  enumerable: true,
  get: function () {
    return _waterMark.default;
  }
});
Object.defineProperty(exports, "createErrorBlock", {
  enumerable: true,
  get: function () {
    return _errorBlock.createErrorBlock;
  }
});
Object.defineProperty(exports, "reduceMotion", {
  enumerable: true,
  get: function () {
    return _reduceAndRestoreMotion.reduceMotion;
  }
});
Object.defineProperty(exports, "restoreMotion", {
  enumerable: true,
  get: function () {
    return _reduceAndRestoreMotion.restoreMotion;
  }
});
Object.defineProperty(exports, "setDefaultConfig", {
  enumerable: true,
  get: function () {
    return _configProvider.setDefaultConfig;
  }
});

require("./global");

var _configProvider = _interopRequireWildcard(require("./components/config-provider"));

var _actionSheet = _interopRequireDefault(require("./components/action-sheet"));

var _autoCenter = _interopRequireDefault(require("./components/auto-center"));

var _avatar = _interopRequireDefault(require("./components/avatar"));

var _badge = _interopRequireDefault(require("./components/badge"));

var _button = _interopRequireDefault(require("./components/button"));

var _calendar = _interopRequireDefault(require("./components/calendar"));

var _capsuleTabs = _interopRequireDefault(require("./components/capsule-tabs"));

var _card = _interopRequireDefault(require("./components/card"));

var _cascadePicker = _interopRequireDefault(require("./components/cascade-picker"));

var _cascadePickerView = _interopRequireDefault(require("./components/cascade-picker-view"));

var _cascader = _interopRequireDefault(require("./components/cascader"));

var _cascaderView = _interopRequireDefault(require("./components/cascader-view"));

var _centerPopup = _interopRequireDefault(require("./components/center-popup"));

var _checkList = _interopRequireDefault(require("./components/check-list"));

var _checkbox = _interopRequireDefault(require("./components/checkbox"));

var _collapse = _interopRequireDefault(require("./components/collapse"));

var _datePicker = _interopRequireDefault(require("./components/date-picker"));

var _datePickerView = _interopRequireDefault(require("./components/date-picker-view"));

var _dialog = _interopRequireDefault(require("./components/dialog"));

var _divider = _interopRequireDefault(require("./components/divider"));

var _dotLoading = _interopRequireDefault(require("./components/dot-loading"));

var _dropdown = _interopRequireDefault(require("./components/dropdown"));

var _ellipsis = _interopRequireDefault(require("./components/ellipsis"));

var _empty = _interopRequireDefault(require("./components/empty"));

var _errorBlock = _interopRequireWildcard(require("./components/error-block"));

var _floatingBubble = _interopRequireDefault(require("./components/floating-bubble"));

var _floatingPanel = _interopRequireDefault(require("./components/floating-panel"));

var _form = _interopRequireDefault(require("./components/form"));

var _grid = _interopRequireDefault(require("./components/grid"));

var _image = _interopRequireDefault(require("./components/image"));

var _imageUploader = _interopRequireDefault(require("./components/image-uploader"));

var _imageViewer = _interopRequireDefault(require("./components/image-viewer"));

var _indexBar = _interopRequireDefault(require("./components/index-bar"));

var _infiniteScroll = _interopRequireDefault(require("./components/infinite-scroll"));

var _input = _interopRequireDefault(require("./components/input"));

var _jumboTabs = _interopRequireDefault(require("./components/jumbo-tabs"));

var _list = _interopRequireDefault(require("./components/list"));

var _loading = _interopRequireDefault(require("./components/loading"));

var _mask = _interopRequireDefault(require("./components/mask"));

var _modal = _interopRequireDefault(require("./components/modal"));

var _navBar = _interopRequireDefault(require("./components/nav-bar"));

var _noticeBar = _interopRequireDefault(require("./components/notice-bar"));

var _numberKeyboard = _interopRequireDefault(require("./components/number-keyboard"));

var _pageIndicator = _interopRequireDefault(require("./components/page-indicator"));

var _passcodeInput = _interopRequireDefault(require("./components/passcode-input"));

var _picker = _interopRequireDefault(require("./components/picker"));

var _pickerView = _interopRequireDefault(require("./components/picker-view"));

var _popover = _interopRequireDefault(require("./components/popover"));

var _popup = _interopRequireDefault(require("./components/popup"));

var _progressBar = _interopRequireDefault(require("./components/progress-bar"));

var _progressCircle = _interopRequireDefault(require("./components/progress-circle"));

var _pullToRefresh = _interopRequireDefault(require("./components/pull-to-refresh"));

var _radio = _interopRequireDefault(require("./components/radio"));

var _rate = _interopRequireDefault(require("./components/rate"));

var _result = _interopRequireDefault(require("./components/result"));

var _safeArea = _interopRequireDefault(require("./components/safe-area"));

var _scrollMask = _interopRequireDefault(require("./components/scroll-mask"));

var _searchBar = _interopRequireDefault(require("./components/search-bar"));

var _selector = _interopRequireDefault(require("./components/selector"));

var _sideBar = _interopRequireDefault(require("./components/side-bar"));

var _skeleton = _interopRequireDefault(require("./components/skeleton"));

var _slider = _interopRequireDefault(require("./components/slider"));

var _space = _interopRequireDefault(require("./components/space"));

var _spinLoading = _interopRequireDefault(require("./components/spin-loading"));

var _stepper = _interopRequireDefault(require("./components//stepper"));

var _steps = _interopRequireDefault(require("./components/steps"));

var _swipeAction = _interopRequireDefault(require("./components/swipe-action"));

var _swiper = _interopRequireDefault(require("./components/swiper"));

var _switch = _interopRequireDefault(require("./components/switch"));

var _tabBar = _interopRequireDefault(require("./components/tab-bar"));

var _tabs = _interopRequireDefault(require("./components/tabs"));

var _tag = _interopRequireDefault(require("./components/tag"));

var _textArea = _interopRequireDefault(require("./components/text-area"));

var _toast = _interopRequireDefault(require("./components/toast"));

var _treeSelect = _interopRequireDefault(require("./components/tree-select"));

var _virtualInput = _interopRequireDefault(require("./components/virtual-input"));

var _waterMark = _interopRequireDefault(require("./components/water-mark"));

var _reduceAndRestoreMotion = require("./utils/reduce-and-restore-motion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
}, function(modId) {var map = {"./global":1656641690075,"./components/config-provider":1656641690077,"./components/action-sheet":1656641690082,"./components/auto-center":1656641690107,"./components/avatar":1656641690109,"./components/badge":1656641690112,"./components/button":1656641690114,"./components/calendar":1656641690119,"./components/capsule-tabs":1656641690125,"./components/card":1656641690135,"./components/cascade-picker":1656641690137,"./components/cascade-picker-view":1656641690157,"./components/cascader":1656641690159,"./components/cascader-view":1656641690161,"./components/center-popup":1656641690179,"./components/check-list":1656641690165,"./components/checkbox":1656641690181,"./components/collapse":1656641690188,"./components/date-picker":1656641690190,"./components/date-picker-view":1656641690196,"./components/dialog":1656641690198,"./components/divider":1656641690211,"./components/dot-loading":1656641690116,"./components/dropdown":1656641690213,"./components/ellipsis":1656641690216,"./components/empty":1656641690218,"./components/error-block":1656641690221,"./components/floating-bubble":1656641690229,"./components/floating-panel":1656641690231,"./components/form":1656641690234,"./components/grid":1656641690250,"./components/image":1656641690202,"./components/image-uploader":1656641690252,"./components/image-viewer":1656641690254,"./components/index-bar":1656641690263,"./components/infinite-scroll":1656641690267,"./components/input":1656641690269,"./components/jumbo-tabs":1656641690271,"./components/list":1656641690167,"./components/loading":1656641690273,"./components/mask":1656641690089,"./components/modal":1656641690274,"./components/nav-bar":1656641690281,"./components/notice-bar":1656641690283,"./components/number-keyboard":1656641690285,"./components/page-indicator":1656641690288,"./components/passcode-input":1656641690290,"./components/picker":1656641690140,"./components/picker-view":1656641690142,"./components/popover":1656641690241,"./components/popup":1656641690087,"./components/progress-bar":1656641690292,"./components/progress-circle":1656641690294,"./components/pull-to-refresh":1656641690296,"./components/radio":1656641690299,"./components/rate":1656641690303,"./components/result":1656641690306,"./components/safe-area":1656641690102,"./components/scroll-mask":1656641690132,"./components/search-bar":1656641690308,"./components/selector":1656641690310,"./components/side-bar":1656641690313,"./components/skeleton":1656641690175,"./components/slider":1656641690316,"./components/space":1656641690261,"./components/spin-loading":1656641690152,"./components//stepper":1656641690322,"./components/steps":1656641690324,"./components/swipe-action":1656641690327,"./components/swiper":1656641690329,"./components/switch":1656641690333,"./components/tab-bar":1656641690336,"./components/tabs":1656641690163,"./components/tag":1656641690338,"./components/text-area":1656641690340,"./components/toast":1656641690342,"./components/tree-select":1656641690345,"./components/virtual-input":1656641690349,"./components/water-mark":1656641690351,"./utils/reduce-and-restore-motion":1656641690154}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690075, function(require, module, exports) {


require("./global.css");

var _canUseDom = require("../utils/can-use-dom");

if (_canUseDom.canUseDom) {
  // Make sure the `:active` CSS selector of `button` and `a` take effect
  // See: https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
  document.addEventListener('touchstart', () => {}, true);
} // Only for debugging. Must COMMENT this line before commit:
// import './css-vars-patch.less'
}, function(modId) { var map = {"../utils/can-use-dom":1656641690076}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690076, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDom = void 0;
const canUseDom = !!(typeof window !== 'undefined' && typeof document !== 'undefined' && window.document && window.document.createElement);
exports.canUseDom = canUseDom;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690077, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "getDefaultConfig", {
  enumerable: true,
  get: function () {
    return _configProvider.getDefaultConfig;
  }
});
Object.defineProperty(exports, "setDefaultConfig", {
  enumerable: true,
  get: function () {
    return _configProvider.setDefaultConfig;
  }
});
Object.defineProperty(exports, "useConfig", {
  enumerable: true,
  get: function () {
    return _configProvider.useConfig;
  }
});

var _configProvider = require("./config-provider");

var _default = _configProvider.ConfigProvider;
exports.default = _default;
}, function(modId) { var map = {"./config-provider":1656641690078}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690078, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfigRef = exports.ConfigProvider = void 0;
exports.getDefaultConfig = getDefaultConfig;
exports.setDefaultConfig = setDefaultConfig;
exports.useConfig = useConfig;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _zhCN = _interopRequireDefault(require("../../locales/zh-CN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultConfigRef = {
  current: {
    locale: _zhCN.default
  }
};
exports.defaultConfigRef = defaultConfigRef;

function setDefaultConfig(config) {
  defaultConfigRef.current = config;
}

function getDefaultConfig() {
  return defaultConfigRef.current;
}

const ConfigContext = _react.default.createContext(null);

const ConfigProvider = props => {
  const {
    children
  } = props,
        config = (0, _tslib.__rest)(props, ["children"]);
  const parentConfig = useConfig();
  return _react.default.createElement(ConfigContext.Provider, {
    value: Object.assign(Object.assign({}, parentConfig), config)
  }, children);
};

exports.ConfigProvider = ConfigProvider;

function useConfig() {
  var _a;

  return (_a = (0, _react.useContext)(ConfigContext)) !== null && _a !== void 0 ? _a : getDefaultConfig();
}
}, function(modId) { var map = {"../../locales/zh-CN":1656641690079}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690079, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mergeLocale = require("../utils/merge-locale");

var _base = require("./base");

const typeTemplate = '${label}不是一个有效的${type}';
const zhCN = (0, _mergeLocale.mergeLocale)(_base.base, {
  locale: 'zh-CH',
  common: {
    confirm: '确定',
    cancel: '取消',
    loading: '加载中'
  },
  Calendar: {
    markItems: ['一', '二', '三', '四', '五', '六', '日'],
    renderYearAndMonth: (year, month) => `${year}年${month}月`
  },
  Cascader: {
    placeholder: '请选择'
  },
  Dialog: {
    ok: '我知道了'
  },
  ErrorBlock: {
    default: {
      title: '页面遇到一些小问题',
      description: '待会来试试'
    },
    busy: {
      title: '前方拥堵',
      description: '刷新试试'
    },
    disconnected: {
      title: '网络有点忙',
      description: '动动手指帮忙修复'
    },
    empty: {
      title: '没有找到你需要的东西',
      description: '找找其他的吧'
    }
  },
  Form: {
    required: '必填',
    optional: '选填',
    defaultValidateMessages: {
      default: '字段验证错误${label}',
      required: '请输入${label}',
      enum: '${label}必须是其中一个[${enum}]',
      whitespace: '${label}不能为空字符',
      date: {
        format: '${label}日期格式无效',
        parse: '${label}不能转换为日期',
        invalid: '${label}是一个无效日期'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label}须为${len}个字符',
        min: '${label}最少${min}个字符',
        max: '${label}最多${max}个字符',
        range: '${label}须在${min}-${max}字符之间'
      },
      number: {
        len: '${label}必须等于${len}',
        min: '${label}最小值为${min}',
        max: '${label}最大值为${max}',
        range: '${label}须在${min}-${max}之间'
      },
      array: {
        len: '须为${len}个${label}',
        min: '最少${min}个${label}',
        max: '最多${max}个${label}',
        range: '${label}数量须在${min}-${max}之间'
      },
      pattern: {
        mismatch: '${label}与模式不匹配${pattern}'
      }
    }
  },
  ImageUploader: {
    uploading: '上传中...',
    upload: '上传'
  },
  InfiniteScroll: {
    noMore: '没有更多了',
    failedToLoad: '加载失败',
    retry: '重新加载'
  },
  Mask: {
    name: '遮罩层'
  },
  Modal: {
    ok: '我知道了'
  },
  PullToRefresh: {
    pulling: '下拉刷新',
    canRelease: '释放立即刷新',
    complete: '刷新成功'
  },
  Slider: {
    name: '滑动输入条'
  },
  Stepper: {
    decrease: '减少',
    increase: '增加'
  },
  Switch: {
    name: '开关'
  }
});
var _default = zhCN;
exports.default = _default;
}, function(modId) { var map = {"../utils/merge-locale":1656641690080,"./base":1656641690081}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690080, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeLocale = mergeLocale;

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _merge = _interopRequireDefault(require("lodash/merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeLocale(base, patch) {
  return (0, _merge.default)((0, _cloneDeep.default)(base), patch);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690081, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = void 0;
const typeTemplate = '${label} is not a valid ${type}';
const base = {
  locale: 'en',
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    loading: 'Loading'
  },
  Calendar: {
    markItems: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    renderYearAndMonth: (year, month) => `${year}/${month}`
  },
  Cascader: {
    placeholder: 'Selecting'
  },
  Dialog: {
    ok: 'OK'
  },
  ErrorBlock: {
    default: {
      title: 'Oops, something went wrong',
      description: 'Please wait a minute and try again'
    },
    busy: {
      title: 'Oops, not loading',
      description: 'Try to refresh the page'
    },
    disconnected: {
      title: 'Network is busy',
      description: 'Try to refresh the page'
    },
    empty: {
      title: "Hmm, couldn't find that...",
      description: 'Want to try a new search?'
    }
  },
  Form: {
    required: 'Required',
    optional: 'Optional',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  ImageUploader: {
    uploading: 'Uploading...',
    upload: 'Upload'
  },
  InfiniteScroll: {
    noMore: 'No more',
    failedToLoad: 'Failed to load',
    retry: 'Retry'
  },
  Mask: {
    name: 'Mask'
  },
  Modal: {
    ok: 'OK'
  },
  PullToRefresh: {
    pulling: 'Scroll down to refresh',
    canRelease: 'Release to refresh immediately',
    complete: 'Refresh successful'
  },
  Slider: {
    name: 'Slider'
  },
  Stepper: {
    decrease: 'decrease',
    increase: 'increase'
  },
  Switch: {
    name: 'Switch'
  }
};
exports.base = base;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690082, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./action-sheet.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _actionSheet2 = require("./action-sheet");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_actionSheet2.ActionSheet, {
  show: _actionSheet2.showActionSheet
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./action-sheet":1656641690084}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690083, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachPropertiesToComponent = attachPropertiesToComponent;

function attachPropertiesToComponent(component, properties) {
  const ret = component;

  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }

  return ret;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690084, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionSheet = void 0;
exports.showActionSheet = showActionSheet;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _popup = _interopRequireDefault(require("../popup"));

var _safeArea = _interopRequireDefault(require("../safe-area"));

var _renderImperatively = require("../../utils/render-imperatively");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-action-sheet`;
const defaultProps = {
  visible: false,
  actions: [],
  cancelText: '',
  closeOnAction: false,
  closeOnMaskClick: true,
  safeArea: true,
  destroyOnClose: false,
  forceRender: false
};

const ActionSheet = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  return _react.default.createElement(_popup.default, {
    visible: props.visible,
    onMaskClick: () => {
      var _a, _b;

      (_a = props.onMaskClick) === null || _a === void 0 ? void 0 : _a.call(props);

      if (props.closeOnMaskClick) {
        (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    },
    afterClose: props.afterClose,
    className: (0, _classnames.default)(`${classPrefix}-popup`, props.popupClassName),
    style: props.popupStyle,
    getContainer: props.getContainer,
    destroyOnClose: props.destroyOnClose,
    forceRender: props.forceRender
  }, (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, props.extra && _react.default.createElement("div", {
    className: `${classPrefix}-extra`
  }, props.extra), _react.default.createElement("div", {
    className: `${classPrefix}-button-list`
  }, props.actions.map((action, index) => _react.default.createElement("div", {
    key: action.key,
    className: `${classPrefix}-button-item-wrapper`
  }, _react.default.createElement("a", {
    className: (0, _classnames.default)('adm-plain-anchor', `${classPrefix}-button-item`, {
      [`${classPrefix}-button-item-danger`]: action.danger,
      [`${classPrefix}-button-item-disabled`]: action.disabled
    }),
    onClick: () => {
      var _a, _b, _c;

      (_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action);
      (_b = props.onAction) === null || _b === void 0 ? void 0 : _b.call(props, action, index);

      if (props.closeOnAction) {
        (_c = props.onClose) === null || _c === void 0 ? void 0 : _c.call(props);
      }
    }
  }, _react.default.createElement("div", {
    className: `${classPrefix}-button-item-name`
  }, action.text), action.description && _react.default.createElement("div", {
    className: `${classPrefix}-button-item-description`
  }, action.description))))), props.cancelText && _react.default.createElement("div", {
    className: `${classPrefix}-cancel`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-button-item-wrapper`
  }, _react.default.createElement("a", {
    className: (0, _classnames.default)('adm-plain-anchor', `${classPrefix}-button-item`),
    onClick: () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }, _react.default.createElement("div", {
    className: `${classPrefix}-button-item-name`
  }, props.cancelText)))), props.safeArea && _react.default.createElement(_safeArea.default, {
    position: 'bottom'
  }))));
};

exports.ActionSheet = ActionSheet;

function showActionSheet(props) {
  return (0, _renderImperatively.renderImperatively)(_react.default.createElement(ActionSheet, Object.assign({}, props)));
}
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../popup":1656641690087,"../safe-area":1656641690102,"../../utils/render-imperatively":1656641690104}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690085, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withNativeProps = withNativeProps;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withNativeProps(props, element) {
  const p = Object.assign({}, element.props);

  if (props.className) {
    p.className = (0, _classnames.default)(element.props.className, props.className);
  }

  if (props.style) {
    p.style = Object.assign(Object.assign({}, p.style), props.style);
  }

  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex;
  }

  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue;

    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key];
    }
  }

  return _react.default.cloneElement(element, p);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690086, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeProps = mergeProps;

var _assign = _interopRequireDefault(require("lodash/assign"));

var _assignWith = _interopRequireDefault(require("lodash/assignWith"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeProps(...items) {
  function customizer(objValue, srcValue) {
    return (0, _isUndefined.default)(srcValue) ? objValue : srcValue;
  }

  let ret = (0, _assign.default)({}, items[0]);

  for (let i = 1; i < items.length; i++) {
    ret = (0, _assignWith.default)(ret, items[i], customizer);
  }

  return ret;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690087, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./popup.css");

var _popup2 = require("./popup");

var _default = _popup2.Popup;
exports.default = _default;
}, function(modId) { var map = {"./popup":1656641690088}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690088, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _ahooks = require("ahooks");

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _mask = _interopRequireDefault(require("../mask"));

var _useLockScroll = require("../../utils/use-lock-scroll");

var _renderToContainer = require("../../utils/render-to-container");

var _web = require("@react-spring/web");

var _withStopPropagation = require("../../utils/with-stop-propagation");

var _shouldRender = require("../../utils/should-render");

var _antdMobileIcons = require("antd-mobile-icons");

var _popupBaseProps = require("./popup-base-props");

var _useInnerVisible = require("../../utils/use-inner-visible");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-popup`;
const defaultProps = Object.assign(Object.assign({}, _popupBaseProps.defaultPopupBaseProps), {
  position: 'bottom'
});

const Popup = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const bodyCls = (0, _classnames.default)(`${classPrefix}-body`, props.bodyClassName, `${classPrefix}-body-position-${props.position}`);
  const [active, setActive] = (0, _react.useState)(props.visible);
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);
  const ref = (0, _react.useRef)(null);
  (0, _useLockScroll.useLockScroll)(ref, props.disableBodyScroll && active);
  const unmountedRef = (0, _ahooks.useUnmountedRef)();
  const {
    percent
  } = (0, _web.useSpring)({
    percent: props.visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30
    },
    onRest: () => {
      var _a, _b;

      if (unmountedRef.current) return;
      setActive(props.visible);

      if (props.visible) {
        (_a = props.afterShow) === null || _a === void 0 ? void 0 : _a.call(props);
      } else {
        (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    }
  });
  const maskVisible = (0, _useInnerVisible.useInnerVisible)(active && props.visible);
  const node = (0, _withStopPropagation.withStopPropagation)(props.stopPropagation, (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix,
    onClick: props.onClick,
    style: {
      display: active ? undefined : 'none'
    }
  }, props.mask && _react.default.createElement(_mask.default, {
    visible: maskVisible,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose,
    onMaskClick: e => {
      var _a, _b;

      (_a = props.onMaskClick) === null || _a === void 0 ? void 0 : _a.call(props, e);

      if (props.closeOnMaskClick) {
        (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    },
    className: props.maskClassName,
    style: props.maskStyle,
    disableBodyScroll: false,
    stopPropagation: props.stopPropagation
  }), _react.default.createElement(_web.animated.div, {
    className: bodyCls,
    style: Object.assign(Object.assign({}, props.bodyStyle), {
      transform: percent.to(v => {
        if (props.position === 'bottom') {
          return `translate(0, ${v}%)`;
        }

        if (props.position === 'top') {
          return `translate(0, -${v}%)`;
        }

        if (props.position === 'left') {
          return `translate(-${v}%, 0)`;
        }

        if (props.position === 'right') {
          return `translate(${v}%, 0)`;
        }

        return 'none';
      })
    }),
    ref: ref
  }, props.showCloseButton && _react.default.createElement("a", {
    className: (0, _classnames.default)(`${classPrefix}-close-icon`, 'adm-plain-anchor'),
    onClick: () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }, _react.default.createElement(_antdMobileIcons.CloseOutline, null)), props.children))));
  return _react.default.createElement(_shouldRender.ShouldRender, {
    active: active,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose
  }, (0, _renderToContainer.renderToContainer)(props.getContainer, node));
};

exports.Popup = Popup;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../mask":1656641690089,"../../utils/use-lock-scroll":1656641690091,"../../utils/render-to-container":1656641690095,"../../utils/with-stop-propagation":1656641690099,"../../utils/should-render":1656641690097,"./popup-base-props":1656641690100,"../../utils/use-inner-visible":1656641690101}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690089, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./mask.css");

var _mask2 = require("./mask");

var _default = _mask2.Mask;
exports.default = _default;
}, function(modId) { var map = {"./mask":1656641690090}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690090, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mask = void 0;

var _nativeProps = require("../../utils/native-props");

var _react = _interopRequireWildcard(require("react"));

var _ahooks = require("ahooks");

var _useLockScroll = require("../../utils/use-lock-scroll");

var _web = require("@react-spring/web");

var _renderToContainer = require("../../utils/render-to-container");

var _withDefaultProps = require("../../utils/with-default-props");

var _configProvider = require("../config-provider");

var _shouldRender = require("../../utils/should-render");

var _withStopPropagation = require("../../utils/with-stop-propagation");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-mask`;
const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75
};
const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ['click']
};

const Mask = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const ref = (0, _react.useRef)(null);
  (0, _useLockScroll.useLockScroll)(ref, props.visible && props.disableBodyScroll);
  const background = (0, _react.useMemo)(() => {
    var _a;

    const opacity = (_a = opacityRecord[props.opacity]) !== null && _a !== void 0 ? _a : props.opacity;
    const rgb = props.color === 'white' ? '255, 255, 255' : '0, 0, 0';
    return `rgba(${rgb}, ${opacity})`;
  }, [props.color, props.opacity]);
  const [active, setActive] = (0, _react.useState)(props.visible);
  const unmountedRef = (0, _ahooks.useUnmountedRef)();
  const {
    opacity
  } = (0, _web.useSpring)({
    opacity: props.visible ? 1 : 0,
    config: {
      precision: 0.01,
      mass: 1,
      tension: 250,
      friction: 30,
      clamp: true
    },
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      var _a, _b;

      if (unmountedRef.current) return;
      setActive(props.visible);

      if (props.visible) {
        (_a = props.afterShow) === null || _a === void 0 ? void 0 : _a.call(props);
      } else {
        (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    }
  });
  const node = (0, _withStopPropagation.withStopPropagation)(props.stopPropagation, (0, _nativeProps.withNativeProps)(props, _react.default.createElement(_web.animated.div, {
    className: classPrefix,
    ref: ref,
    style: Object.assign(Object.assign({}, props.style), {
      background,
      opacity,
      display: active ? undefined : 'none'
    }),
    onClick: e => {
      var _a;

      if (e.target === e.currentTarget) {
        (_a = props.onMaskClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
      }
    }
  }, props.onMaskClick && _react.default.createElement("div", {
    className: `${classPrefix}-aria-button`,
    role: 'button',
    "aria-label": locale.Mask.name,
    onClick: props.onMaskClick
  }), _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, props.children))));
  return _react.default.createElement(_shouldRender.ShouldRender, {
    active: active,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose
  }, (0, _renderToContainer.renderToContainer)(props.getContainer, node));
};

exports.Mask = Mask;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/use-lock-scroll":1656641690091,"../../utils/render-to-container":1656641690095,"../../utils/with-default-props":1656641690086,"../config-provider":1656641690077,"../../utils/should-render":1656641690097,"../../utils/with-stop-propagation":1656641690099}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690091, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLockScroll = useLockScroll;

var _useTouch = require("./use-touch");

var _react = require("react");

var _getScrollParent = require("./get-scroll-parent");

var _supportsPassive = require("./supports-passive");

let totalLockCount = 0;
const BODY_LOCK_CLASS = 'adm-overflow-hidden'; // 移植自vant：https://github.com/youzan/vant/blob/HEAD/src/composables/use-lock-scroll.ts

function useLockScroll(rootRef, shouldLock) {
  const touch = (0, _useTouch.useTouch)();

  const onTouchMove = event => {
    touch.move(event);
    const direction = touch.deltaY.current > 0 ? '10' : '01';
    const el = (0, _getScrollParent.getScrollParent)(event.target, rootRef.current);
    if (!el) return;
    const {
      scrollHeight,
      offsetHeight,
      scrollTop
    } = el;
    let status = '11';

    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01';
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = '10';
    }

    if (status !== '11' && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
      if (event.cancelable) {
        event.preventDefault();
      }
    }
  };

  const lock = () => {
    document.addEventListener('touchstart', touch.start);
    document.addEventListener('touchmove', onTouchMove, _supportsPassive.supportsPassive ? {
      passive: false
    } : false);

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }

    totalLockCount++;
  };

  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start);
      document.removeEventListener('touchmove', onTouchMove);
      totalLockCount--;

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };

  (0, _react.useEffect)(() => {
    if (shouldLock) {
      lock();
      return () => {
        unlock();
      };
    }
  }, [shouldLock]);
}
}, function(modId) { var map = {"./use-touch":1656641690092,"./get-scroll-parent":1656641690093,"./supports-passive":1656641690094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690092, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTouch = useTouch;

var _react = require("react");

const MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

function useTouch() {
  const startX = (0, _react.useRef)(0);
  const startY = (0, _react.useRef)(0);
  const deltaX = (0, _react.useRef)(0);
  const deltaY = (0, _react.useRef)(0);
  const offsetX = (0, _react.useRef)(0);
  const offsetY = (0, _react.useRef)(0);
  const direction = (0, _react.useRef)('');

  const isVertical = () => direction.current === 'vertical';

  const isHorizontal = () => direction.current === 'horizontal';

  const reset = () => {
    deltaX.current = 0;
    deltaY.current = 0;
    offsetX.current = 0;
    offsetY.current = 0;
    direction.current = '';
  };

  const start = event => {
    reset();
    startX.current = event.touches[0].clientX;
    startY.current = event.touches[0].clientY;
  };

  const move = event => {
    const touch = event.touches[0]; // Fix: Safari back will set clientX to negative number

    deltaX.current = touch.clientX < 0 ? 0 : touch.clientX - startX.current;
    deltaY.current = touch.clientY - startY.current;
    offsetX.current = Math.abs(deltaX.current);
    offsetY.current = Math.abs(deltaY.current);

    if (!direction.current) {
      direction.current = getDirection(offsetX.current, offsetY.current);
    }
  };

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690093, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollParent = getScrollParent;

var _canUseDom = require("./can-use-dom");

const defaultRoot = _canUseDom.canUseDom ? window : undefined;
const overflowStylePatterns = ['scroll', 'auto', 'overlay'];

function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.nodeType === ELEMENT_NODE_TYPE;
}

function getScrollParent(el, root = defaultRoot) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    if (node === document.body) {
      return root;
    }

    const {
      overflowY
    } = window.getComputedStyle(node);

    if (overflowStylePatterns.includes(overflowY) && node.scrollHeight > node.clientHeight) {
      return node;
    }

    node = node.parentNode;
  }

  return root;
}
}, function(modId) { var map = {"./can-use-dom":1656641690076}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690094, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsPassive = void 0;

var _canUseDom = require("./can-use-dom");

let supportsPassive = false;
exports.supportsPassive = supportsPassive;

if (_canUseDom.canUseDom) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        exports.supportsPassive = supportsPassive = true;
      }

    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}
}, function(modId) { var map = {"./can-use-dom":1656641690076}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690095, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToContainer = renderToContainer;

var _reactDom = require("react-dom");

var _getContainer = require("./get-container");

var _canUseDom = require("./can-use-dom");

function renderToContainer(getContainer, node) {
  if (_canUseDom.canUseDom && getContainer) {
    const container = (0, _getContainer.resolveContainer)(getContainer);
    return (0, _reactDom.createPortal)(node, container);
  }

  return node;
}
}, function(modId) { var map = {"./get-container":1656641690096,"./can-use-dom":1656641690076}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690096, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveContainer = resolveContainer;

function resolveContainer(getContainer) {
  const container = typeof getContainer === 'function' ? getContainer() : getContainer;
  return container || document.body;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690097, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShouldRender = void 0;
exports.useShouldRender = useShouldRender;

var _useInitialized = require("./use-initialized");

const ShouldRender = props => {
  const shouldRender = useShouldRender(props.active, props.forceRender, props.destroyOnClose);
  return shouldRender ? props.children : null;
};

exports.ShouldRender = ShouldRender;

function useShouldRender(active, forceRender, destroyOnClose) {
  const initialized = (0, _useInitialized.useInitialized)(active);
  if (forceRender) return true;
  if (active) return true;
  if (!initialized) return false;
  return !destroyOnClose;
}
}, function(modId) { var map = {"./use-initialized":1656641690098}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690098, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInitialized = useInitialized;

var _react = require("react");

function useInitialized(check) {
  const initializedRef = (0, _react.useRef)(check);

  if (check) {
    initializedRef.current = true;
  }

  return !!initializedRef.current;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690099, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStopPropagation = withStopPropagation;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const eventToPropRecord = {
  'click': 'onClick'
};

function withStopPropagation(events, element) {
  const props = Object.assign({}, element.props);

  for (const key of events) {
    const prop = eventToPropRecord[key];

    props[prop] = function (e) {
      var _a, _b;

      e.stopPropagation();
      (_b = (_a = element.props)[prop]) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    };
  }

  return _react.default.cloneElement(element, props);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690100, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPopupBaseProps = void 0;
const defaultPopupBaseProps = {
  closeOnMaskClick: false,
  destroyOnClose: false,
  disableBodyScroll: true,
  forceRender: false,
  getContainer: () => document.body,
  mask: true,
  showCloseButton: false,
  stopPropagation: ['click'],
  visible: false
};
exports.defaultPopupBaseProps = defaultPopupBaseProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690101, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInnerVisible = useInnerVisible;

var _react = require("react");

var _ahooks = require("ahooks");

function useInnerVisible(outerVisible) {
  const [innerVisible, setInnerVisible] = (0, _react.useState)(outerVisible);
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    setInnerVisible(outerVisible);
  }, [outerVisible]);
  return innerVisible;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690102, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./safe-area.css");

var _safeArea2 = require("./safe-area");

var _default = _safeArea2.SafeArea;
exports.default = _default;
}, function(modId) { var map = {"./safe-area":1656641690103}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690103, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafeArea = void 0;

var _nativeProps = require("../../utils/native-props");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = 'adm-safe-area';

const SafeArea = props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-position-${props.position}`)
  }));
};

exports.SafeArea = SafeArea;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690104, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderImperatively = renderImperatively;

var _react = _interopRequireWildcard(require("react"));

var _renderToBody = require("./render-to-body");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function renderImperatively(element) {
  const Wrapper = _react.default.forwardRef((_, ref) => {
    const [visible, setVisible] = (0, _react.useState)(false);
    const closedRef = (0, _react.useRef)(false);
    const [elementToRender, setElementToRender] = (0, _react.useState)(element);
    const keyRef = (0, _react.useRef)(0);
    (0, _react.useEffect)(() => {
      if (!closedRef.current) {
        setVisible(true);
      } else {
        afterClose();
      }
    }, []);

    function onClose() {
      var _a, _b;

      closedRef.current = true;
      setVisible(false);
      (_b = (_a = elementToRender.props).onClose) === null || _b === void 0 ? void 0 : _b.call(_a);
    }

    function afterClose() {
      var _a, _b;

      unmount();
      (_b = (_a = elementToRender.props).afterClose) === null || _b === void 0 ? void 0 : _b.call(_a);
    }

    (0, _react.useImperativeHandle)(ref, () => ({
      close: onClose,
      replace: element => {
        var _a, _b;

        keyRef.current++;
        (_b = (_a = elementToRender.props).afterClose) === null || _b === void 0 ? void 0 : _b.call(_a);
        setElementToRender(element);
      }
    }));
    return _react.default.cloneElement(elementToRender, Object.assign(Object.assign({}, elementToRender.props), {
      key: keyRef.current,
      visible,
      onClose,
      afterClose
    }));
  });

  const wrapperRef = _react.default.createRef();

  const unmount = (0, _renderToBody.renderToBody)(_react.default.createElement(Wrapper, {
    ref: wrapperRef
  }));
  return {
    close: () => {
      var _a;

      (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.close();
    },
    replace: element => {
      var _a;

      (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.replace(element);
    }
  };
}
}, function(modId) { var map = {"./render-to-body":1656641690105}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690105, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToBody = renderToBody;

var _render = require("./render");

function renderToBody(element) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  function unmount() {
    const unmountResult = (0, _render.unmount)(container);

    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }

  (0, _render.render)(element, container);
  return unmount;
}
}, function(modId) { var map = {"./render":1656641690106}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690106, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.unmount = unmount;

var _tslib = require("tslib");

var ReactDOM = _interopRequireWildcard(require("react-dom"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Let compiler not to search module usage
const fullClone = Object.assign({}, ReactDOM);
const {
  version,
  render: reactRender,
  unmountComponentAtNode
} = fullClone;
let createRoot;

try {
  const mainVersion = Number((version || '').split('.')[0]);

  if (mainVersion >= 18 && fullClone.createRoot) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    createRoot = fullClone.createRoot;
  }
} catch (e) {// Do nothing;
}

function toggleWarning(skip) {
  const {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  } = fullClone;

  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object') {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}

const MARK = '__antd_mobile_root__';

function legacyRender(node, container) {
  reactRender(node, container);
}

function concurrentRender(node, container) {
  toggleWarning(true);
  const root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}

function render(node, container) {
  if (createRoot) {
    concurrentRender(node, container);
    return;
  }

  legacyRender(node, container);
} // ========================== Unmount =========================


function legacyUnmount(container) {
  return unmountComponentAtNode(container);
}

function concurrentUnmount(container) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
    // Delay to unmount to avoid React 18 sync warning
    return Promise.resolve().then(() => {
      var _a;

      (_a = container[MARK]) === null || _a === void 0 ? void 0 : _a.unmount();
      delete container[MARK];
    });
  });
}

function unmount(container) {
  if (createRoot) {
    return concurrentUnmount(container);
  }

  return legacyUnmount(container);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690107, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./auto-center.css");

var _autoCenter2 = require("./auto-center");

var _default = _autoCenter2.AutoCenter;
exports.default = _default;
}, function(modId) { var map = {"./auto-center":1656641690108}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690108, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCenter = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = 'adm-auto-center';

const AutoCenter = props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, props.children)));
};

exports.AutoCenter = AutoCenter;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690109, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./avatar.css");

var _avatar2 = require("./avatar");

var _default = _avatar2.Avatar;
exports.default = _default;
}, function(modId) { var map = {"./avatar":1656641690110}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690110, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _index = require("../../index");

var _withDefaultProps = require("../../utils/with-default-props");

var _fallback = require("./fallback");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = 'adm-avatar';
const defaultProps = {
  fallback: _react.default.createElement(_fallback.Fallback, null),
  fit: 'cover'
};

const Avatar = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement(_index.Image, {
    className: classPrefix,
    src: props.src,
    fallback: props.fallback,
    placeholder: props.fallback,
    alt: props.alt,
    lazy: props.lazy,
    fit: props.fit,
    onClick: props.onClick,
    onError: props.onError
  }));
};

exports.Avatar = Avatar;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../index":1656641690074,"../../utils/with-default-props":1656641690086,"./fallback":1656641690111}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690111, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fallback = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Fallback = (0, _react.memo)(() => _react.default.createElement("svg", {
  className: 'adm-avatar-fallback',
  width: '88px',
  height: '88px',
  viewBox: '0 0 88 88',
  version: '1.1'
}, _react.default.createElement("title", null, "\u7F16\u7EC4 3"), _react.default.createElement("defs", null, _react.default.createElement("polygon", {
  id: 'path-1',
  points: '0 0 88 0 88 88 0 88'
})), _react.default.createElement("g", {
  id: '\u9875\u9762-1',
  stroke: 'none',
  strokeWidth: '1',
  fill: 'none',
  fillRule: 'evenodd'
}, _react.default.createElement("g", {
  id: '\u8BED\u96C0',
  transform: 'translate(-495.000000, -71.000000)'
}, _react.default.createElement("g", {
  id: '\u7F16\u7EC4-3',
  transform: 'translate(495.000000, 71.000000)'
}, _react.default.createElement("mask", {
  id: 'mask-2',
  fill: 'white'
}, _react.default.createElement("use", {
  xlinkHref: '#path-1'
})), _react.default.createElement("use", {
  id: 'Mask',
  fill: '#EEEEEE',
  fillRule: 'nonzero',
  xlinkHref: '#path-1'
}), _react.default.createElement("path", {
  d: 'M44.5707528,16 L43.4292117,16 L42.9575197,16.0086403 L42.9575195,16.0086403 C36.5215787,16.2615464 31.4341803,21.5678078 31.4344832,28.0273864 L31.4344832,34.7776551 L31.4495601,35.3716788 L31.4495593,35.3716628 C31.599687,38.5368723 32.9422041,41.5269327 35.2058513,43.7376716 L38.2147759,46.6775505 L38.4086219,46.8913989 C38.7747759,47.3385365 38.9750835,47.9001589 38.9750835,48.4833848 L38.9750835,48.8938006 L38.9556989,49.1897326 L38.9556989,49.1897325 C38.8577746,49.9812662 38.3754713,50.67284 37.667703,51.036605 L18.7375269,60.7440265 L18.4101421,60.9276334 L18.4101423,60.9276333 C16.9141658,61.8418636 16.0009389,63.4714674 16,65.2283758 L16,66.070809 L16.0129231,66.3948217 C16.1766149,68.4123376 17.860922,70 19.91569,70 L68.0843101,70 L68.08431,70 C70.2460467,70 71.9988087,68.243122 72,66.0751224 L72,65.2326893 C72,63.3382982 70.9446194,61.6037466 69.2624598,60.7440295 L50.3322837,51.036608 L50.3322835,51.0366079 C49.5291218,50.6249082 49.0240448,49.7962466 49.024903,48.8916436 L49.024903,48.4812278 C49.024903,47.8029608 49.3005955,47.1527756 49.7852106,46.6775603 L52.7941352,43.7376813 L52.7941354,43.7376811 C55.204308,41.3832325 56.5636029,38.151975 56.5633606,34.7776456 L56.5633606,28.0273769 L56.5633606,28.0273774 C56.5633606,21.3848531 51.1940878,16 44.5707524,16 L44.5707528,16 Z',
  id: '\u5F62\u72B6',
  fill: '#CCCCCC',
  fillRule: 'nonzero',
  mask: 'url(#mask-2)'
}))))));
exports.Fallback = Fallback;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690112, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./badge.css");

var _badge2 = require("./badge");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_badge2.Badge, {
  dot: _badge2.dot
});

exports.default = _default;
}, function(modId) { var map = {"./badge":1656641690113,"../../utils/attach-properties-to-component":1656641690083}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690113, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dot = exports.Badge = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-badge`;

const dot = _react.default.createElement(_react.default.Fragment, null);

exports.dot = dot;

const Badge = props => {
  const {
    content,
    color,
    children
  } = props;
  const isDot = content === dot;
  const badgeCls = (0, _classnames.default)(classPrefix, !!children && `${classPrefix}-fixed`, isDot && `${classPrefix}-dot`, props.bordered && `${classPrefix}-bordered`);
  const element = content || content === 0 ? (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: badgeCls,
    style: {
      '--color': color
    }
  }, !isDot && _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, content))) : null;
  return children ? _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-wrapper`, props.wrapperClassName),
    style: props.wrapperStyle
  }, children, element) : element;
};

exports.Badge = Badge;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690114, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./button.css");

var _button2 = require("./button");

var _default = _button2.Button;
exports.default = _default;
}, function(modId) { var map = {"./button":1656641690115}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690115, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dotLoading = _interopRequireDefault(require("../dot-loading"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _validate = require("../../utils/validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-button`;
const defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  loadingIcon: _react.default.createElement(_dotLoading.default, {
    color: 'currentColor'
  }),
  type: 'button',
  shape: 'default',
  size: 'middle'
};
const Button = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [innerLoading, setInnerLoading] = (0, _react.useState)(false);
  const nativeButtonRef = (0, _react.useRef)(null);
  const loading = props.loading === 'auto' ? innerLoading : props.loading;
  const disabled = props.disabled || loading;
  (0, _react.useImperativeHandle)(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current;
    }

  }));

  const handleClick = e => (0, _tslib.__awaiter)(void 0, void 0, void 0, function* () {
    if (!props.onClick) return;
    const promise = props.onClick(e);

    if ((0, _validate.isPromise)(promise)) {
      try {
        setInnerLoading(true);
        yield promise;
        setInnerLoading(false);
      } catch (e) {
        setInnerLoading(false);
        throw e;
      }
    }
  });

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("button", {
    ref: nativeButtonRef,
    type: props.type,
    onClick: handleClick,
    className: (0, _classnames.default)(classPrefix, props.color ? `${classPrefix}-${props.color}` : null, {
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-fill-outline`]: props.fill === 'outline',
      [`${classPrefix}-fill-none`]: props.fill === 'none',
      [`${classPrefix}-mini`]: props.size === 'mini',
      [`${classPrefix}-small`]: props.size === 'small',
      [`${classPrefix}-large`]: props.size === 'large',
      [`${classPrefix}-loading`]: loading
    }, `${classPrefix}-shape-${props.shape}`),
    disabled: disabled,
    onMouseDown: props.onMouseDown,
    onMouseUp: props.onMouseUp,
    onTouchStart: props.onTouchStart,
    onTouchEnd: props.onTouchEnd
  }, loading ? _react.default.createElement("div", {
    className: `${classPrefix}-loading-wrapper`
  }, props.loadingIcon, props.loadingText) : props.children));
});
exports.Button = Button;
}, function(modId) { var map = {"../dot-loading":1656641690116,"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/validate":1656641690118}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690116, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./dot-loading.css");

var _dotLoading2 = require("./dot-loading");

var _default = _dotLoading2.DotLoading;
exports.default = _default;
}, function(modId) { var map = {"./dot-loading":1656641690117}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690117, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DotLoading = void 0;

var _react = _interopRequireWildcard(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-dot-loading`;
const colorRecord = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)'
};
const defaultProps = {
  color: 'default'
};
const DotLoading = (0, _react.memo)(p => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    style: {
      color: (_a = colorRecord[props.color]) !== null && _a !== void 0 ? _a : props.color
    },
    className: (0, _classnames.default)('adm-loading', classPrefix)
  }, _react.default.createElement("svg", {
    height: '1em',
    viewBox: '0 0 100 40',
    style: {
      verticalAlign: '-0.125em'
    }
  }, _react.default.createElement("g", {
    stroke: 'none',
    strokeWidth: '1',
    fill: 'none',
    fillRule: 'evenodd'
  }, _react.default.createElement("g", {
    transform: 'translate(-100.000000, -71.000000)'
  }, _react.default.createElement("g", {
    transform: 'translate(95.000000, 71.000000)'
  }, _react.default.createElement("g", {
    transform: 'translate(5.000000, 0.000000)'
  }, [0, 1, 2].map(i => _react.default.createElement("rect", {
    key: i,
    fill: 'currentColor',
    x: 20 + i * 26,
    y: '16',
    width: '8',
    height: '8',
    rx: '2'
  }, _react.default.createElement("animate", {
    attributeName: 'y',
    from: '16',
    to: '16',
    dur: '2s',
    begin: `${i * 0.2}s`,
    repeatCount: 'indefinite',
    values: '16; 6; 26; 16; 16',
    keyTimes: '0; 0.1; 0.3; 0.4; 1'
  }))))))))));
});
exports.DotLoading = DotLoading;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690118, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAndroid = isAndroid;
exports.isDate = isDate;
exports.isDef = isDef;
exports.isIOS = isIOS;
exports.isMobile = isMobile;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isPromise = isPromise;

var _canUseDom = require("./can-use-dom");

function isDef(val) {
  return val !== undefined && val !== null;
}

function isObject(val) {
  return val !== null && typeof val === 'object';
}

function isPromise(obj) {
  return !!obj && typeof obj === 'object' && typeof obj.then === 'function';
}

function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]' && !Number.isNaN(val.getTime());
}

function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

function isNumeric(val) {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

function isAndroid() {
  return _canUseDom.canUseDom ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}

function isIOS() {
  return _canUseDom.canUseDom ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
}
}, function(modId) { var map = {"./can-use-dom":1656641690076}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690119, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./calendar.css");

var _calendar2 = require("./calendar");

var _default = _calendar2.Calendar;
exports.default = _default;
}, function(modId) { var map = {"./calendar":1656641690120}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690120, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withDefaultProps = require("../../utils/with-default-props");

var _arrowLeft = require("./arrow-left");

var _arrowLeftDouble = require("./arrow-left-double");

var _configProvider = require("../config-provider");

var _isoWeek = _interopRequireDefault(require("dayjs/plugin/isoWeek"));

var _ahooks = require("ahooks");

var _usePropsValue = require("../../utils/use-props-value");

var _convert = require("./convert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_dayjs.default.extend(_isoWeek.default);

const classPrefix = 'adm-calendar';
const defaultProps = {
  weekStartsOn: 'Sunday',
  defaultValue: null,
  allowClear: true,
  prevMonthButton: _react.default.createElement(_arrowLeft.ArrowLeft, null),
  prevYearButton: _react.default.createElement(_arrowLeftDouble.ArrowLeftDouble, null),
  nextMonthButton: _react.default.createElement(_arrowLeft.ArrowLeft, null),
  nextYearButton: _react.default.createElement(_arrowLeftDouble.ArrowLeftDouble, null)
};
const Calendar = (0, _react.forwardRef)((p, ref) => {
  const today = (0, _dayjs.default)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const markItems = [...locale.Calendar.markItems];

  if (props.weekStartsOn === 'Sunday') {
    const item = markItems.pop();
    if (item) markItems.unshift(item);
  }

  const [dateRange, setDateRange] = (0, _usePropsValue.usePropsValue)({
    value: props.value === undefined ? undefined : (0, _convert.convertValueToRange)(props.selectionMode, props.value),
    defaultValue: (0, _convert.convertValueToRange)(props.selectionMode, props.defaultValue),
    onChange: v => {
      var _a, _b;

      if (props.selectionMode === 'single') {
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v ? v[0] : null);
      } else if (props.selectionMode === 'range') {
        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, v);
      }
    }
  });
  const [intermediate, setIntermediate] = (0, _react.useState)(false);
  const [current, setCurrent] = (0, _react.useState)(() => (0, _dayjs.default)(dateRange ? dateRange[0] : today).date(1));
  (0, _ahooks.useUpdateEffect)(() => {
    var _a;

    (_a = props.onPageChange) === null || _a === void 0 ? void 0 : _a.call(props, current.year(), current.month() + 1);
  }, [current]);
  (0, _react.useImperativeHandle)(ref, () => ({
    jumpTo: pageOrPageGenerator => {
      let page;

      if (typeof pageOrPageGenerator === 'function') {
        page = pageOrPageGenerator({
          year: current.year(),
          month: current.month() + 1
        });
      } else {
        page = pageOrPageGenerator;
      }

      setCurrent((0, _dayjs.default)().year(page.year).month(page.month - 1).date(1));
    },
    jumpToToday: () => {
      setCurrent((0, _dayjs.default)().date(1));
    }
  }));

  const header = _react.default.createElement("div", {
    className: `${classPrefix}-header`
  }, _react.default.createElement("a", {
    className: `${classPrefix}-arrow-button ${classPrefix}-arrow-button-year`,
    onClick: () => {
      setCurrent(current.subtract(1, 'year'));
    }
  }, props.prevYearButton), _react.default.createElement("a", {
    className: `${classPrefix}-arrow-button ${classPrefix}-arrow-button-month`,
    onClick: () => {
      setCurrent(current.subtract(1, 'month'));
    }
  }, props.prevMonthButton), _react.default.createElement("div", {
    className: `${classPrefix}-title`
  }, locale.Calendar.renderYearAndMonth(current.year(), current.month() + 1)), _react.default.createElement("a", {
    className: (0, _classnames.default)(`${classPrefix}-arrow-button`, `${classPrefix}-arrow-button-right`, `${classPrefix}-arrow-button-right-month`),
    onClick: () => {
      setCurrent(current.add(1, 'month'));
    }
  }, props.nextMonthButton), _react.default.createElement("a", {
    className: (0, _classnames.default)(`${classPrefix}-arrow-button`, `${classPrefix}-arrow-button-right`, `${classPrefix}-arrow-button-right-year`),
    onClick: () => {
      setCurrent(current.add(1, 'year'));
    }
  }, props.nextYearButton));

  const maxDay = (0, _react.useMemo)(() => props.max && (0, _dayjs.default)(props.max), [props.max]);
  const minDay = (0, _react.useMemo)(() => props.min && (0, _dayjs.default)(props.min), [props.min]);

  function renderCells() {
    var _a;

    const cells = [];
    let iterator = current.subtract(current.isoWeekday(), 'day');

    if (props.weekStartsOn === 'Monday') {
      iterator = iterator.add(1, 'day');
    }

    while (cells.length < 6 * 7) {
      const d = iterator;
      let isSelect = false;
      let isBegin = false;
      let isEnd = false;

      if (dateRange) {
        const [begin, end] = dateRange;
        isBegin = d.isSame(begin, 'day');
        isEnd = d.isSame(end, 'day');
        isSelect = isBegin || isEnd || d.isAfter(begin, 'day') && d.isBefore(end, 'day');
      }

      const inThisMonth = d.month() === current.month();
      const disabled = props.shouldDisableDate ? props.shouldDisableDate(d.toDate()) : maxDay && d.isAfter(maxDay, 'day') || minDay && d.isBefore(minDay, 'day');
      cells.push(_react.default.createElement("div", {
        key: d.valueOf(),
        className: (0, _classnames.default)(`${classPrefix}-cell`, (disabled || !inThisMonth) && `${classPrefix}-cell-disabled`, inThisMonth && {
          [`${classPrefix}-cell-today`]: d.isSame(today, 'day'),
          [`${classPrefix}-cell-selected`]: isSelect,
          [`${classPrefix}-cell-selected-begin`]: isBegin,
          [`${classPrefix}-cell-selected-end`]: isEnd
        }),
        onClick: () => {
          if (!props.selectionMode) return;
          if (disabled) return;
          const date = d.toDate();

          if (!inThisMonth) {
            setCurrent(d.clone().date(1));
          }

          function shouldClear() {
            if (!props.allowClear) return false;
            if (!dateRange) return false;
            const [begin, end] = dateRange;
            return d.isSame(begin, 'date') && d.isSame(end, 'day');
          }

          if (props.selectionMode === 'single') {
            if (props.allowClear && shouldClear()) {
              setDateRange(null);
              return;
            }

            setDateRange([date, date]);
          } else if (props.selectionMode === 'range') {
            if (!dateRange) {
              setDateRange([date, date]);
              setIntermediate(true);
              return;
            }

            if (shouldClear()) {
              setDateRange(null);
              setIntermediate(false);
              return;
            }

            if (intermediate) {
              const another = dateRange[0];
              setDateRange(another > date ? [date, another] : [another, date]);
              setIntermediate(false);
            } else {
              setDateRange([date, date]);
              setIntermediate(true);
            }
          }
        }
      }, _react.default.createElement("div", {
        className: `${classPrefix}-cell-top`
      }, d.date()), _react.default.createElement("div", {
        className: `${classPrefix}-cell-bottom`
      }, (_a = props.renderLabel) === null || _a === void 0 ? void 0 : _a.call(props, d.toDate()))));
      iterator = iterator.add(1, 'day');
    }

    return cells;
  }

  const body = _react.default.createElement("div", {
    className: `${classPrefix}-cells`
  }, renderCells());

  const mark = _react.default.createElement("div", {
    className: `${classPrefix}-mark`
  }, markItems.map((item, index) => _react.default.createElement("div", {
    key: index,
    className: `${classPrefix}-mark-cell`
  }, item)));

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, header, mark, body));
});
exports.Calendar = Calendar;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"./arrow-left":1656641690121,"./arrow-left-double":1656641690122,"../config-provider":1656641690077,"../../utils/use-props-value":1656641690123,"./convert":1656641690124}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690121, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowLeft = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArrowLeft = () => {
  return _react.default.createElement("svg", {
    height: '1em',
    viewBox: '0 0 44 44'
  }, _react.default.createElement("g", {
    stroke: 'none',
    strokeWidth: '1',
    fill: 'none',
    fillRule: 'evenodd'
  }, _react.default.createElement("g", {
    transform: 'translate(-100.000000, -22.000000)'
  }, _react.default.createElement("g", {
    transform: 'translate(100.000000, 22.000000)'
  }, _react.default.createElement("rect", {
    x: '0',
    y: '0',
    width: '44',
    height: '44'
  }), _react.default.createElement("g", {
    transform: 'translate(12.000000, 4.000000)',
    fill: 'currentColor',
    fillRule: 'nonzero'
  }, _react.default.createElement("path", {
    d: 'M19.4833058,2.71985611 L3.53051139,17.0699744 C3.0173831,17.5315665 2.97522952,18.3220903 3.43630803,18.8357433 L3.43630796,18.8357432 C3.46601289,18.8688164 3.49745845,18.9002801 3.53051133,18.9300007 L19.4833057,33.2801611 C20.1234001,33.8559077 20.1759552,34.8420707 19.6007967,35.4827774 C19.0256382,36.1235263 18.0404824,36.1761351 17.400388,35.6003885 L1.44759367,21.2502703 L1.4475933,21.25027 C1.33208743,21.1463692 1.22220259,21.036372 1.11840792,20.920748 C-0.49302969,19.1256817 -0.345639536,16.3628317 1.4475933,14.7497465 L17.4003877,0.399628282 C18.0404821,-0.176160428 19.0256378,-0.123509422 19.6007963,0.517239417 C20.1759548,1.1579461 20.1233997,2.14410915 19.4833053,2.7198557 L19.4833058,2.71985611 Z'
  }))))));
};

exports.ArrowLeft = ArrowLeft;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690122, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowLeftDouble = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArrowLeftDouble = () => {
  return _react.default.createElement("svg", {
    height: '1em',
    viewBox: '0 0 44 44'
  }, _react.default.createElement("g", {
    stroke: 'none',
    strokeWidth: '1',
    fill: 'none',
    fillRule: 'evenodd'
  }, _react.default.createElement("g", {
    transform: 'translate(-24.000000, -22.000000)'
  }, _react.default.createElement("g", {
    transform: 'translate(24.000000, 22.000000)'
  }, _react.default.createElement("rect", {
    x: '0',
    y: '0',
    width: '44',
    height: '44'
  }), _react.default.createElement("g", {
    transform: 'translate(7.000000, 4.000000)',
    fill: 'currentColor',
    fillRule: 'nonzero'
  }, _react.default.createElement("path", {
    d: 'M19.4833058,2.71985611 L3.53051139,17.0699744 C3.0173831,17.5315665 2.97522952,18.3220903 3.43630803,18.8357433 L3.43630796,18.8357432 C3.46601289,18.8688164 3.49745845,18.9002801 3.53051133,18.9300007 L19.4833057,33.2801611 C20.1234001,33.8559077 20.1759552,34.8420707 19.6007967,35.4827774 C19.0256382,36.1235263 18.0404824,36.1761351 17.400388,35.6003885 L1.44759367,21.2502703 L1.4475933,21.25027 C1.33208743,21.1463692 1.22220259,21.036372 1.11840792,20.920748 C-0.49302969,19.1256817 -0.345639536,16.3628317 1.4475933,14.7497465 L17.4003877,0.399628282 C18.0404821,-0.176160428 19.0256378,-0.123509422 19.6007963,0.517239417 C20.1759548,1.1579461 20.1233997,2.14410915 19.4833053,2.7198557 L19.4833058,2.71985611 Z'
  }), _react.default.createElement("path", {
    d: 'M19.5305114,17.0699744 C19.0173831,17.5315665 18.9752295,18.3220903 19.436308,18.8357433 C19.4660129,18.8688164 19.4974585,18.9002801 19.5305113,18.9300007 L29.4833057,27.2801611 C30.1234001,27.8559077 30.1759552,28.8420707 29.6007967,29.4827774 C29.0256382,30.1235263 28.0404824,30.1761351 27.400388,29.6003885 L17.4475937,21.2502703 C17.3320874,21.1463692 17.2222026,21.036372 17.1184079,20.920748 C15.5069703,19.1256817 15.6543605,16.3628317 17.4475933,14.7497465 L27.4003877,6.39962828 C28.0404821,5.82383957 29.0256378,5.87649058 29.6007963,6.51723942 C30.1759548,7.1579461 30.1233997,8.14410915 29.4833053,8.7198557 L19.5305114,17.0699744 Z'
  }))))));
};

exports.ArrowLeftDouble = ArrowLeftDouble;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690123, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePropsValue = usePropsValue;

var _react = require("react");

var _ahooks = require("ahooks");

function usePropsValue(options) {
  const {
    value,
    defaultValue,
    onChange
  } = options;
  const update = (0, _ahooks.useUpdate)();
  const stateRef = (0, _react.useRef)(value !== undefined ? value : defaultValue);

  if (value !== undefined) {
    stateRef.current = value;
  }

  const setState = (0, _ahooks.useMemoizedFn)((v, forceTrigger = false) => {
    // `forceTrigger` means trigger `onChange` even if `v` is the same as `stateRef.current`
    const nextValue = typeof v === 'function' ? v(stateRef.current) : v;
    if (!forceTrigger && nextValue === stateRef.current) return;
    stateRef.current = nextValue;
    update();
    onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
  });
  return [stateRef.current, setState];
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690124, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertValueToRange = convertValueToRange;

function convertValueToRange(selectionMode, value) {
  if (selectionMode === undefined) {
    return null;
  }

  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [value, value];
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690125, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./capsule-tabs.css");

var _capsuleTabs2 = require("./capsule-tabs");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_capsuleTabs2.CapsuleTabs, {
  Tab: _capsuleTabs2.CapsuleTab
});

exports.default = _default;
}, function(modId) { var map = {"./capsule-tabs":1656641690126,"../../utils/attach-properties-to-component":1656641690083}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690126, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CapsuleTabs = exports.CapsuleTab = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _web = require("@react-spring/web");

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _useResizeEffect = require("../../utils/use-resize-effect");

var _useTabListScroll = require("../../utils/use-tab-list-scroll");

var _scrollMask = _interopRequireDefault(require("../scroll-mask"));

var _shouldRender = require("../../utils/should-render");

var _traverseReactNode = require("../../utils/traverse-react-node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-capsule-tabs`;

const CapsuleTab = () => {
  return null;
};

exports.CapsuleTab = CapsuleTab;

const CapsuleTabs = props => {
  var _a;

  const tabListContainerRef = (0, _react.useRef)(null);
  const rootRef = (0, _react.useRef)(null);
  const keyToIndexRecord = {};
  let firstActiveKey = null;
  const panes = [];
  (0, _traverseReactNode.traverseReactNode)(props.children, (child, index) => {
    if (!_react.default.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;

    if (index === 0) {
      firstActiveKey = key;
    }

    const length = panes.push(child);
    keyToIndexRecord[key] = length - 1;
  });
  const [activeKey, setActiveKey] = (0, _usePropsValue.usePropsValue)({
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : firstActiveKey,
    onChange: v => {
      var _a;

      if (v === null) return;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  const {
    scrollLeft,
    animate
  } = (0, _useTabListScroll.useTabListScroll)(tabListContainerRef, keyToIndexRecord[activeKey]);
  (0, _useResizeEffect.useResizeEffect)(() => {
    animate(true);
  }, rootRef);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix,
    ref: rootRef
  }, _react.default.createElement("div", {
    className: `${classPrefix}-header`
  }, _react.default.createElement(_scrollMask.default, {
    scrollTrackRef: tabListContainerRef
  }), _react.default.createElement(_web.animated.div, {
    className: `${classPrefix}-tab-list`,
    ref: tabListContainerRef,
    scrollLeft: scrollLeft
  }, panes.map(pane => (0, _nativeProps.withNativeProps)(pane.props, _react.default.createElement("div", {
    key: pane.key,
    className: `${classPrefix}-tab-wrapper`
  }, _react.default.createElement("div", {
    onClick: () => {
      const {
        key
      } = pane;
      if (pane.props.disabled) return;

      if (key === undefined || key === null) {
        return;
      }

      setActiveKey(key.toString());
    },
    className: (0, _classnames.default)(`${classPrefix}-tab`, {
      [`${classPrefix}-tab-active`]: pane.key === activeKey,
      [`${classPrefix}-tab-disabled`]: pane.props.disabled
    })
  }, pane.props.title)))))), panes.map(pane => {
    if (pane.props.children === undefined) {
      return null;
    }

    const active = pane.key === activeKey;
    return _react.default.createElement(_shouldRender.ShouldRender, {
      key: pane.key,
      active: active,
      forceRender: pane.props.forceRender,
      destroyOnClose: pane.props.destroyOnClose
    }, _react.default.createElement("div", {
      className: `${classPrefix}-content`,
      style: {
        display: active ? 'block' : 'none'
      }
    }, pane.props.children));
  })));
};

exports.CapsuleTabs = CapsuleTabs;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"../../utils/use-resize-effect":1656641690127,"../../utils/use-tab-list-scroll":1656641690128,"../scroll-mask":1656641690132,"../../utils/should-render":1656641690097,"../../utils/traverse-react-node":1656641690134}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690127, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResizeEffect = useResizeEffect;

var _ahooks = require("ahooks");

function useResizeEffect(effect, targetRef) {
  const fn = (0, _ahooks.useMemoizedFn)(effect);
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    const target = targetRef.current;
    if (!target) return;

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        fn(target);
      });
      observer.observe(target);
      return () => {
        observer.disconnect();
      };
    } else {
      fn(target);
    }
  }, [targetRef]);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690128, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTabListScroll = void 0;

var _web = require("@react-spring/web");

var _useMutationEffect = require("./use-mutation-effect");

var _bound = require("./bound");

var _ahooks = require("ahooks");

var _useIsomorphicUpdateLayoutEffect = require("./use-isomorphic-update-layout-effect");

const useTabListScroll = (targetRef, activeIndex) => {
  const [{
    scrollLeft
  }, api] = (0, _web.useSpring)(() => ({
    scrollLeft: 0,
    config: {
      tension: 300,
      clamp: true
    }
  }));

  function animate(immediate = false) {
    const container = targetRef.current;
    if (!container) return;
    if (activeIndex === undefined) return;
    const activeTabWrapper = container.children.item(activeIndex);
    const activeTab = activeTabWrapper.children.item(0);
    const activeTabLeft = activeTab.offsetLeft;
    const activeTabWidth = activeTab.offsetWidth;
    const containerWidth = container.offsetWidth;
    const containerScrollWidth = container.scrollWidth;
    const containerScrollLeft = container.scrollLeft;
    const maxScrollDistance = containerScrollWidth - containerWidth;
    if (maxScrollDistance <= 0) return;
    const nextScrollLeft = (0, _bound.bound)(activeTabLeft - (containerWidth - activeTabWidth) / 2, 0, containerScrollWidth - containerWidth);
    api.start({
      scrollLeft: nextScrollLeft,
      from: {
        scrollLeft: containerScrollLeft
      },
      immediate: immediate && !scrollLeft.isAnimating
    });
  }

  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    animate(true);
  }, []);
  (0, _useIsomorphicUpdateLayoutEffect.useIsomorphicUpdateLayoutEffect)(() => {
    animate();
  }, [activeIndex]);
  (0, _useMutationEffect.useMutationEffect)(() => {
    animate(true);
  }, targetRef, {
    subtree: true,
    childList: true,
    characterData: true
  });
  return {
    scrollLeft,
    animate
  };
};

exports.useTabListScroll = useTabListScroll;
}, function(modId) { var map = {"./use-mutation-effect":1656641690129,"./bound":1656641690130,"./use-isomorphic-update-layout-effect":1656641690131}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690129, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMutationEffect = useMutationEffect;

var _react = require("react");

var _ahooks = require("ahooks");

function useMutationEffect(effect, targetRef, options) {
  const fn = (0, _ahooks.useMemoizedFn)(effect);
  (0, _react.useEffect)(() => {
    const observer = new MutationObserver(() => {
      fn();
    });
    if (!targetRef.current) return;
    observer.observe(targetRef.current, options);
    return () => {
      observer.disconnect();
    };
  }, [targetRef]);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690130, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bound = bound;

function bound(position, min, max) {
  let ret = position;

  if (min !== undefined) {
    ret = Math.max(position, min);
  }

  if (max !== undefined) {
    ret = Math.min(ret, max);
  }

  return ret;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690131, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsomorphicUpdateLayoutEffect = void 0;

var _ahooks = require("ahooks");

const useIsomorphicUpdateLayoutEffect = (0, _ahooks.createUpdateEffect)(_ahooks.useIsomorphicLayoutEffect);
exports.useIsomorphicUpdateLayoutEffect = useIsomorphicUpdateLayoutEffect;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690132, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./scroll-mask.css");

var _scrollMask2 = require("./scroll-mask");

var _default = _scrollMask2.ScrollMask;
exports.default = _default;
}, function(modId) { var map = {"./scroll-mask":1656641690133}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690133, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollMask = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _web = require("@react-spring/web");

var _ahooks = require("ahooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-scroll-mask`;

const ScrollMask = props => {
  const maskRef = (0, _react.useRef)(null);
  const [{
    leftMaskOpacity,
    rightMaskOpacity
  }, api] = (0, _web.useSpring)(() => ({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
    config: {
      clamp: true
    }
  }));
  const {
    run: updateMask
  } = (0, _ahooks.useThrottleFn)((immediate = false) => {
    const mask = maskRef.current;
    if (!mask) return;
    const scrollEl = props.scrollTrackRef.current;
    if (!scrollEl) return;
    const scrollLeft = scrollEl.scrollLeft;
    const showLeftMask = scrollLeft > 0;
    const showRightMask = scrollLeft + scrollEl.offsetWidth < scrollEl.scrollWidth;
    api.start({
      leftMaskOpacity: showLeftMask ? 1 : 0,
      rightMaskOpacity: showRightMask ? 1 : 0,
      immediate
    });
  }, {
    wait: 100,
    trailing: true,
    leading: true
  });
  (0, _react.useEffect)(() => {
    updateMask(true);
  }, []);
  (0, _react.useEffect)(() => {
    const scrollEl = props.scrollTrackRef.current;
    if (!scrollEl) return;
    scrollEl.addEventListener('scroll', updateMask);
    return () => scrollEl.removeEventListener('scroll', updateMask);
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_web.animated.div, {
    ref: maskRef,
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-left`),
    style: {
      opacity: leftMaskOpacity
    }
  }), _react.default.createElement(_web.animated.div, {
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-right`),
    style: {
      opacity: rightMaskOpacity
    }
  }));
};

exports.ScrollMask = ScrollMask;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690134, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseReactNode = traverseReactNode;

var _react = _interopRequireDefault(require("react"));

var _reactIs = require("react-is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function traverseReactNode(children, fn) {
  let i = 0;

  function handle(target) {
    _react.default.Children.forEach(target, child => {
      if (!(0, _reactIs.isFragment)(child)) {
        fn(child, i);
        i += 1;
      } else {
        handle(child.props.children);
      }
    });
  }

  handle(children);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690135, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./card.css");

var _card2 = require("./card");

var _default = _card2.Card;
exports.default = _default;
}, function(modId) { var map = {"./card":1656641690136}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690136, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-card`;

const Card = props => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null;
    }

    return _react.default.createElement("div", {
      className: (0, _classnames.default)(`${classPrefix}-header`, props.headerClassName),
      style: props.headerStyle,
      onClick: props.onHeaderClick
    }, _react.default.createElement("div", {
      className: `${classPrefix}-header-title`
    }, props.title), props.extra);
  };

  const renderBody = () => {
    if (!props.children) {
      return null;
    }

    return _react.default.createElement("div", {
      className: (0, _classnames.default)(`${classPrefix}-body`, props.bodyClassName),
      style: props.bodyStyle,
      onClick: props.onBodyClick
    }, props.children);
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix,
    onClick: props.onClick
  }, renderHeader(), renderBody()));
};

exports.Card = Card;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690137, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _prompt = require("./prompt");

var _cascadePicker = require("./cascade-picker");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_cascadePicker.CascadePicker, {
  prompt: _prompt.prompt
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./prompt":1656641690138,"./cascade-picker":1656641690139}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690138, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prompt = prompt;

var _cascadePicker = require("./cascade-picker");

var _react = _interopRequireWildcard(require("react"));

var _renderToBody = require("../../utils/render-to-body");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function prompt(props) {
  return new Promise(resolve => {
    const Wrapper = () => {
      const [visible, setVisible] = (0, _react.useState)(false);
      (0, _react.useEffect)(() => {
        setVisible(true);
      }, []);
      return _react.default.createElement(_cascadePicker.CascadePicker, Object.assign({}, props, {
        visible: visible,
        onConfirm: (val, extend) => {
          var _a;

          (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, val, extend);
          resolve(val);
        },
        onClose: () => {
          var _a;

          (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
          setVisible(false);
          resolve(null);
        },
        afterClose: () => {
          var _a;

          (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
          unmount();
        }
      }));
    };

    const unmount = (0, _renderToBody.renderToBody)(_react.default.createElement(Wrapper, null));
  });
}
}, function(modId) { var map = {"./cascade-picker":1656641690139,"../../utils/render-to-body":1656641690105}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690139, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CascadePicker = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _picker = _interopRequireDefault(require("../picker"));

var _cascadePickerUtils = require("./cascade-picker-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CascadePicker = (0, _react.forwardRef)((props, ref) => {
  const {
    options
  } = props,
        pickerProps = (0, _tslib.__rest)(props, ["options"]);
  const columnsFn = (0, _cascadePickerUtils.useColumnsFn)(options);
  return _react.default.createElement(_picker.default, Object.assign({}, pickerProps, {
    ref: ref,
    columns: columnsFn
  }));
});
exports.CascadePicker = CascadePicker;
}, function(modId) { var map = {"../picker":1656641690140,"./cascade-picker-utils":1656641690156}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690140, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./picker.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _picker2 = require("./picker");

var _prompt = require("./prompt");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_picker2.Picker, {
  prompt: _prompt.prompt
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./picker":1656641690141,"./prompt":1656641690155}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690141, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Picker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popup = _interopRequireDefault(require("../popup"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _pickerView = _interopRequireDefault(require("../picker-view"));

var _columnsExtend = require("../picker-view/columns-extend");

var _configProvider = require("../config-provider");

var _ahooks = require("ahooks");

var _safeArea = _interopRequireDefault(require("../safe-area"));

var _pickerUtils = require("./picker-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-picker`;
const defaultProps = {
  defaultValue: [],
  closeOnMaskClick: true,
  renderLabel: _pickerUtils.defaultRenderLabel,
  destroyOnClose: false,
  forceRender: false
};
const Picker = (0, _react.memo)((0, _react.forwardRef)((p, ref) => {
  var _a;

  const {
    locale
  } = (0, _configProvider.useConfig)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, {
    confirmText: locale.common.confirm,
    cancelText: locale.common.cancel
  }, p);
  const [visible, setVisible] = (0, _usePropsValue.usePropsValue)({
    value: props.visible,
    defaultValue: false,
    onChange: v => {
      var _a;

      if (v === false) {
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    }
  });
  const actions = {
    toggle: () => {
      setVisible(v => !v);
    },
    open: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    }
  };
  (0, _react.useImperativeHandle)(ref, () => actions);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(Object.assign(Object.assign({}, props), {
    onChange: val => {
      var _a;

      const extend = (0, _columnsExtend.generateColumnsExtend)(props.columns, val);
      (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, val, extend);
    }
  }));
  const extend = (0, _columnsExtend.useColumnsExtend)(props.columns, value);
  const [innerValue, setInnerValue] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    if (innerValue !== value) {
      setInnerValue(value);
    }
  }, [visible]);
  (0, _react.useEffect)(() => {
    if (!visible) {
      setInnerValue(value);
    }
  }, [value]);
  const onChange = (0, _ahooks.useMemoizedFn)((val, ext) => {
    var _a;

    setInnerValue(val);

    if (visible) {
      (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, val, ext);
    }
  });
  const pickerElement = (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-header`
  }, _react.default.createElement("a", {
    role: 'button',
    className: `${classPrefix}-header-button`,
    onClick: () => {
      var _a;

      (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
      setVisible(false);
    }
  }, props.cancelText), _react.default.createElement("div", {
    className: `${classPrefix}-header-title`
  }, props.title), _react.default.createElement("a", {
    role: 'button',
    className: (0, _classnames.default)(`${classPrefix}-header-button`, props.loading && `${classPrefix}-header-button-disabled`),
    onClick: () => {
      if (props.loading) return;
      setValue(innerValue, true);
      setVisible(false);
    },
    "aria-disabled": props.loading
  }, props.confirmText)), _react.default.createElement("div", {
    className: `${classPrefix}-body`
  }, _react.default.createElement(_pickerView.default, {
    loading: props.loading,
    loadingContent: props.loadingContent,
    columns: props.columns,
    renderLabel: props.renderLabel,
    value: innerValue,
    mouseWheel: props.mouseWheel,
    onChange: onChange
  }))));

  const popupElement = _react.default.createElement(_popup.default, {
    style: props.popupStyle,
    className: (0, _classnames.default)(`${classPrefix}-popup`, props.popupClassName),
    visible: visible,
    position: 'bottom',
    onMaskClick: () => {
      var _a;

      if (!props.closeOnMaskClick) return;
      (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
      setVisible(false);
    },
    getContainer: props.getContainer,
    destroyOnClose: props.destroyOnClose,
    afterShow: props.afterShow,
    afterClose: props.afterClose,
    onClick: props.onClick,
    forceRender: props.forceRender,
    stopPropagation: props.stopPropagation
  }, pickerElement, _react.default.createElement(_safeArea.default, {
    position: 'bottom'
  }));

  return _react.default.createElement(_react.default.Fragment, null, popupElement, (_a = props.children) === null || _a === void 0 ? void 0 : _a.call(props, extend.items, actions));
}));
exports.Picker = Picker;
Picker.displayName = 'Picker';
}, function(modId) { var map = {"../popup":1656641690087,"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"../picker-view":1656641690142,"../picker-view/columns-extend":1656641690149,"../config-provider":1656641690077,"../safe-area":1656641690102,"./picker-utils":1656641690151}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690142, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pickerView = require("./picker-view");

require("./picker-view.css");

var _default = _pickerView.PickerView;
exports.default = _default;
}, function(modId) { var map = {"./picker-view":1656641690143}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690143, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickerView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _wheel = require("./wheel");

var _columnsExtend = require("./columns-extend");

var _nativeProps = require("../../utils/native-props");

var _ahooks = require("ahooks");

var _pickerUtils = require("../picker/picker-utils");

var _spinLoading = _interopRequireDefault(require("../spin-loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-picker-view`;
const defaultProps = {
  defaultValue: [],
  renderLabel: _pickerUtils.defaultRenderLabel,
  mouseWheel: false,
  loadingContent: _react.default.createElement("div", {
    className: `${classPrefix}-loading-content`
  }, _react.default.createElement(_spinLoading.default, null))
};
const PickerView = (0, _react.memo)(p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [innerValue, setInnerValue] = (0, _react.useState)(props.value === undefined ? props.defaultValue : props.value); // Sync `value` to `innerValue`

  (0, _react.useEffect)(() => {
    if (props.value === undefined) return; // Uncontrolled mode

    if (props.value === innerValue) return;
    setInnerValue(props.value);
  }, [props.value]);
  (0, _react.useEffect)(() => {
    if (props.value === innerValue) return;
    const timeout = window.setTimeout(() => {
      if (props.value !== undefined && props.value !== innerValue) {
        setInnerValue(props.value);
      }
    }, 1000);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [props.value, innerValue]);
  const extend = (0, _columnsExtend.useColumnsExtend)(props.columns, innerValue);
  const columns = extend.columns;
  (0, _ahooks.useDebounceEffect)(() => {
    var _a;

    if (props.value === innerValue) return;
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, innerValue, extend);
  }, [innerValue], {
    wait: 0,
    leading: false,
    trailing: true
  });
  const handleSelect = (0, _react.useCallback)((val, index) => {
    setInnerValue(prev => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  }, []);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: `${classPrefix}`
  }, props.loading ? props.loadingContent : _react.default.createElement(_react.default.Fragment, null, columns.map((column, index) => _react.default.createElement(_wheel.Wheel, {
    key: index,
    index: index,
    column: column,
    value: innerValue[index],
    onSelect: handleSelect,
    renderLabel: props.renderLabel,
    mouseWheel: props.mouseWheel
  })), _react.default.createElement("div", {
    className: `${classPrefix}-mask`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-mask-top`
  }), _react.default.createElement("div", {
    className: `${classPrefix}-mask-middle`
  }), _react.default.createElement("div", {
    className: `${classPrefix}-mask-bottom`
  })))));
});
exports.PickerView = PickerView;
PickerView.displayName = 'PickerView';
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"./wheel":1656641690144,"./columns-extend":1656641690149,"../../utils/native-props":1656641690085,"../picker/picker-utils":1656641690151,"../spin-loading":1656641690152}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690144, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wheel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _web = require("@react-spring/web");

var _react2 = require("@use-gesture/react");

var _rubberband = require("../../utils/rubberband");

var _bound = require("../../utils/bound");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _ahooks = require("ahooks");

var _measureCssLength = require("../../utils/measure-css-length");

var _supportsPassive = require("../../utils/supports-passive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-picker-view`;
const Wheel = (0, _react.memo)(props => {
  const {
    value,
    column,
    renderLabel
  } = props;

  function onSelect(val) {
    props.onSelect(val, props.index);
  }

  const [{
    y
  }, api] = (0, _web.useSpring)(() => ({
    from: {
      y: 0
    },
    config: {
      tension: 400,
      mass: 0.8
    }
  }));
  const draggingRef = (0, _react.useRef)(false);
  const rootRef = (0, _react.useRef)(null);
  const itemHeight = (0, _react.useRef)(34);
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    const root = rootRef.current;
    if (!root) return;
    itemHeight.current = (0, _measureCssLength.measureCSSLength)(window.getComputedStyle(root).getPropertyValue('--item-height'));
  });
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    if (draggingRef.current) return;
    if (!value) return;
    const targetIndex = column.findIndex(item => item.value === value);
    if (targetIndex < 0) return;
    const finalPosition = targetIndex * -itemHeight.current;
    api.start({
      y: finalPosition,
      immediate: y.goal !== finalPosition
    });
  }, [value, column]);
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    if (column.length === 0) {
      if (value !== null) {
        onSelect(null);
      }
    } else {
      if (!column.some(item => item.value === value)) {
        const firstItem = column[0];
        onSelect(firstItem.value);
      }
    }
  }, [column, value]);

  function scrollSelect(index) {
    const finalPosition = index * -itemHeight.current;
    api.start({
      y: finalPosition
    });
    const item = column[index];
    if (!item) return;
    onSelect(item.value);
  }

  const handleDrag = state => {
    draggingRef.current = true;
    const min = -((column.length - 1) * itemHeight.current);
    const max = 0;

    if (state.last) {
      draggingRef.current = false;
      const position = state.offset[1] + state.velocity[1] * state.direction[1] * 50;
      const targetIndex = min < max ? -Math.round((0, _bound.bound)(position, min, max) / itemHeight.current) : 0;
      scrollSelect(targetIndex);
    } else {
      const position = state.offset[1];
      api.start({
        y: (0, _rubberband.rubberbandIfOutOfBounds)(position, min, max, itemHeight.current * 50, 0.2)
      });
    }
  };

  (0, _react2.useDrag)(state => {
    state.event.stopPropagation();
    handleDrag(state);
  }, {
    axis: 'y',
    from: () => [0, y.get()],
    filterTaps: true,
    pointer: {
      touch: true
    },
    target: rootRef
  });
  (0, _react2.useWheel)(state => {
    state.event.stopPropagation();
    handleDrag(state);
  }, {
    axis: 'y',
    from: () => [0, y.get()],
    preventDefault: true,
    target: props.mouseWheel ? rootRef : undefined,
    eventOptions: _supportsPassive.supportsPassive ? {
      passive: false
    } : false
  });
  let selectedIndex = null;

  function renderAccessible() {
    if (selectedIndex === null) {
      return null;
    }

    const current = column[selectedIndex];
    const previousIndex = selectedIndex - 1;
    const nextIndex = selectedIndex + 1;
    const previous = column[previousIndex];
    const next = column[nextIndex];
    return _react.default.createElement("div", {
      className: 'adm-picker-view-column-accessible'
    }, _react.default.createElement("div", {
      className: 'adm-picker-view-column-accessible-current',
      role: 'button',
      "aria-label": current ? `当前选择的是：${current.label}` : '当前未选择'
    }, "-"), _react.default.createElement("div", {
      className: 'adm-picker-view-column-accessible-button',
      onClick: () => {
        if (!previous) return;
        scrollSelect(previousIndex);
      },
      role: previous ? 'button' : 'text',
      "aria-label": !previous ? '没有上一项' : `选择上一项：${previous.label}`
    }, "-"), _react.default.createElement("div", {
      className: 'adm-picker-view-column-accessible-button',
      onClick: () => {
        if (!next) return;
        scrollSelect(nextIndex);
      },
      role: next ? 'button' : 'text',
      "aria-label": !next ? '没有下一项' : `选择下一项：${next.label}`
    }, "-"));
  }

  return _react.default.createElement("div", {
    className: `${classPrefix}-column`
  }, _react.default.createElement(_web.animated.div, {
    ref: rootRef,
    style: {
      translateY: y
    },
    className: `${classPrefix}-column-wheel`,
    "aria-hidden": true
  }, column.map((item, index) => {
    var _a;

    const selected = props.value === item.value;
    if (selected) selectedIndex = index;

    function handleClick() {
      draggingRef.current = false;
      scrollSelect(index);
    }

    return _react.default.createElement("div", {
      key: (_a = item.key) !== null && _a !== void 0 ? _a : item.value,
      "data-selected": item.value === value,
      className: `${classPrefix}-column-item`,
      onClick: handleClick,
      "aria-hidden": !selected,
      "aria-label": selected ? 'active' : ''
    }, _react.default.createElement("div", {
      className: `${classPrefix}-column-item-label`
    }, renderLabel(item)));
  })), renderAccessible());
}, (prev, next) => {
  if (prev.index !== next.index) return false;
  if (prev.value !== next.value) return false;
  if (prev.onSelect !== next.onSelect) return false;

  if (!(0, _isEqual.default)(prev.column, next.column)) {
    return false;
  }

  return true;
});
exports.Wheel = Wheel;
Wheel.displayName = 'Wheel';
}, function(modId) { var map = {"../../utils/rubberband":1656641690145,"../../utils/bound":1656641690130,"../../utils/measure-css-length":1656641690146,"../../utils/supports-passive":1656641690094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690145, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rubberband = rubberband;
exports.rubberbandIfOutOfBounds = rubberbandIfOutOfBounds;

var _bound = require("./bound");

function rubberband(distance, dimension, constant) {
  return distance * dimension * constant / (dimension + constant * distance);
}

function rubberbandIfOutOfBounds(position, min, max, dimension, constant = 0.15) {
  if (constant === 0) return (0, _bound.bound)(position, min, max);
  if (position < min) return -rubberband(min - position, dimension, constant) + min;
  if (position > max) return +rubberband(position - max, dimension, constant) + max;
  return position;
}
}, function(modId) { var map = {"./bound":1656641690130}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690146, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureCSSLength = measureCSSLength;

var _isDev = require("./is-dev");

var _devLog = require("./dev-log");

function measureCSSLength(raw) {
  if (raw === null || raw === undefined || raw === '') {
    if (_isDev.isDev) {
      (0, _devLog.devError)('Global', 'Seems like the you will encounter a style messed problem. Please check the browser environment to make sure it supports CSS variables.');
    }

    return 0;
  }

  const withUnit = raw.trim();

  if (withUnit.endsWith('px')) {
    return parseFloat(withUnit);
  } else if (withUnit.endsWith('rem')) {
    return parseFloat(withUnit) * parseFloat(window.getComputedStyle(document.documentElement).fontSize);
  } else if (withUnit.endsWith('vw')) {
    return parseFloat(withUnit) * window.innerWidth / 100;
  } else {
    if (_isDev.isDev) {
      (0, _devLog.devError)('Global', `You are using a not supported CSS unit in \`${raw}\`. Only \`px\` \`rem\` and \`vw\` are supported.`);
    }

    return 0;
  }
}
}, function(modId) { var map = {"./is-dev":1656641690147,"./dev-log":1656641690148}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690147, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDev = void 0;
const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
exports.isDev = isDev;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690148, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devError = devError;
exports.devWarning = devWarning;

var _isDev = require("./is-dev");

function devWarning(component, message) {
  if (_isDev.isDev) {
    console.warn(`[antd-mobile: ${component}] ${message}`);
  }
}

function devError(component, message) {
  if (_isDev.isDev) {
    console.error(`[antd-mobile: ${component}] ${message}`);
  }
}
}, function(modId) { var map = {"./is-dev":1656641690147}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690149, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateColumnsExtend = generateColumnsExtend;
exports.useColumnsExtend = useColumnsExtend;

var _react = require("react");

var _withCache = require("../../utils/with-cache");

function generateColumnsExtend(rawColumns, val) {
  const columns = (0, _withCache.withCache)(() => {
    const c = typeof rawColumns === 'function' ? rawColumns(val) : rawColumns;
    return c.map(column => column.map(item => typeof item === 'string' ? {
      label: item,
      value: item
    } : item));
  });
  const items = (0, _withCache.withCache)(() => {
    return val.map((v, index) => {
      var _a;

      const column = columns()[index];
      if (!column) return null;
      return (_a = column.find(item => item.value === v)) !== null && _a !== void 0 ? _a : null;
    });
  });
  const extend = {
    get columns() {
      return columns();
    },

    get items() {
      return items();
    }

  };
  return extend;
}

function useColumnsExtend(rawColumns, value) {
  return (0, _react.useMemo)(() => generateColumnsExtend(rawColumns, value), [rawColumns, value]);
}
}, function(modId) { var map = {"../../utils/with-cache":1656641690150}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690150, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCache = withCache;

function withCache(generate) {
  let cache = null;
  return () => {
    if (cache === null) {
      cache = generate();
    }

    return cache;
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690151, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRenderLabel = void 0;

const defaultRenderLabel = item => item.label;

exports.defaultRenderLabel = defaultRenderLabel;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690152, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./spin-loading.css");

var _spinLoading2 = require("./spin-loading");

var _default = _spinLoading2.SpinLoading;
exports.default = _default;
}, function(modId) { var map = {"./spin-loading":1656641690153}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690153, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinLoading = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _web = require("@react-spring/web");

var _reduceAndRestoreMotion = require("../../utils/reduce-and-restore-motion");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = 'adm-spin-loading';
const colorRecord = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)'
};
const defaultProps = {
  color: 'default'
};
const circumference = 15 * 3.14159265358979 * 2;
const SpinLoading = (0, _react.memo)(p => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const motionReduced = (0, _reduceAndRestoreMotion.useMotionReduced)();
  const {
    percent
  } = (0, _web.useSpring)({
    cancel: motionReduced,
    loop: {
      reverse: true
    },
    from: {
      percent: 80
    },
    to: {
      percent: 30
    },
    config: {
      duration: 1200
    }
  });
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement(_web.animated.div, {
    className: classPrefix,
    style: {
      '--color': (_a = colorRecord[props.color]) !== null && _a !== void 0 ? _a : props.color,
      '--percent': percent
    }
  }, _react.default.createElement("svg", {
    className: `${classPrefix}-svg`,
    viewBox: '0 0 32 32'
  }, _react.default.createElement(_web.animated.circle, {
    className: `${classPrefix}-fill`,
    fill: 'transparent',
    strokeWidth: '2',
    strokeDasharray: circumference,
    strokeDashoffset: percent,
    strokeLinecap: 'square',
    r: 15,
    cx: 16,
    cy: 16
  }))));
});
exports.SpinLoading = SpinLoading;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/reduce-and-restore-motion":1656641690154}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690154, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMotionReduced = isMotionReduced;
exports.reduceMotion = reduceMotion;
exports.restoreMotion = restoreMotion;
exports.useMotionReduced = useMotionReduced;

var _web = require("@react-spring/web");

var _shim = require("use-sync-external-store/shim");

let reduced = false;
const subscribers = new Set();

function notify() {
  subscribers.forEach(subscriber => {
    subscriber();
  });
}

function reduceMotion() {
  reduced = true;
  notify();

  _web.Globals.assign({
    skipAnimation: true
  });
}

function restoreMotion() {
  reduced = false;
  notify();

  _web.Globals.assign({
    skipAnimation: false
  });
}

function isMotionReduced() {
  return reduced;
}

function useMotionReduced() {
  return (0, _shim.useSyncExternalStore)(onStoreChange => {
    subscribers.add(onStoreChange);
    return () => {
      subscribers.delete(onStoreChange);
    };
  }, isMotionReduced);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690155, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prompt = prompt;

var _react = _interopRequireWildcard(require("react"));

var _renderToBody = require("../../utils/render-to-body");

var _picker = require("./picker");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function prompt(props) {
  return new Promise(resolve => {
    const Wrapper = () => {
      const [visible, setVisible] = (0, _react.useState)(false);
      (0, _react.useEffect)(() => {
        setVisible(true);
      }, []);
      return _react.default.createElement(_picker.Picker, Object.assign({}, props, {
        visible: visible,
        onConfirm: (val, extend) => {
          var _a;

          (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, val, extend);
          resolve(val);
        },
        onClose: () => {
          var _a;

          (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
          setVisible(false);
          resolve(null);
        },
        afterClose: () => {
          var _a;

          (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
          unmount();
        }
      }));
    };

    const unmount = (0, _renderToBody.renderToBody)(_react.default.createElement(Wrapper, null));
  });
}
}, function(modId) { var map = {"../../utils/render-to-body":1656641690105,"./picker":1656641690141}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690156, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColumnsFn = useColumnsFn;

var _react = require("react");

function useColumnsFn(options) {
  const depth = (0, _react.useMemo)(() => {
    let depth = 0;

    function traverse(options, currentDepth) {
      if (currentDepth > depth) depth = currentDepth;
      const nextDepth = currentDepth + 1;
      options.forEach(option => {
        if (option.children) {
          traverse(option.children, nextDepth);
        }
      });
    }

    traverse(options, 1);
    return depth;
  }, [options]);
  return selected => {
    const columns = [];
    let currentOptions = options;
    let i = 0;

    while (true) {
      columns.push(currentOptions.map(option => ({
        label: option.label,
        value: option.value
      })));
      const x = selected[i];
      const targetOptions = currentOptions.find(option => option.value === x);
      if (!targetOptions || !targetOptions.children) break;
      currentOptions = targetOptions.children;
      i++;
    }

    while (i < depth - 1) {
      columns.push([]);
      i++;
    }

    return columns;
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690157, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cascadePickerView = require("./cascade-picker-view");

var _default = _cascadePickerView.CascadePickerView;
exports.default = _default;
}, function(modId) { var map = {"./cascade-picker-view":1656641690158}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690158, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CascadePickerView = void 0;

var _tslib = require("tslib");

var _react = _interopRequireDefault(require("react"));

var _pickerView = _interopRequireDefault(require("../picker-view"));

var _cascadePickerUtils = require("../cascade-picker/cascade-picker-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CascadePickerView = props => {
  const {
    options
  } = props,
        pickerProps = (0, _tslib.__rest)(props, ["options"]);
  const columnsFn = (0, _cascadePickerUtils.useColumnsFn)(options);
  return _react.default.createElement(_pickerView.default, Object.assign({}, pickerProps, {
    columns: columnsFn
  }));
};

exports.CascadePickerView = CascadePickerView;
}, function(modId) { var map = {"../picker-view":1656641690142,"../cascade-picker/cascade-picker-utils":1656641690156}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690159, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cascader = require("./cascader");

var _prompt = require("./prompt");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

require("./cascader.css");

var _optionSkeleton = require("../cascader-view/option-skeleton");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_cascader.Cascader, {
  prompt: _prompt.prompt,
  optionSkeleton: _optionSkeleton.optionSkeleton
});

exports.default = _default;
}, function(modId) { var map = {"./cascader":1656641690160,"./prompt":1656641690178,"../../utils/attach-properties-to-component":1656641690083,"../cascader-view/option-skeleton":1656641690174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690160, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cascader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _popup = _interopRequireDefault(require("../popup"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _cascaderView = _interopRequireDefault(require("../cascader-view"));

var _configProvider = require("../config-provider");

var _useCascaderValueExtend = require("../cascader-view/use-cascader-value-extend");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-cascader`;
const defaultProps = {
  defaultValue: [],
  destroyOnClose: true,
  forceRender: false
};
const Cascader = (0, _react.forwardRef)((p, ref) => {
  var _a;

  const {
    locale
  } = (0, _configProvider.useConfig)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, {
    confirmText: locale.common.confirm,
    cancelText: locale.common.cancel,
    placeholder: locale.Cascader.placeholder
  }, p);
  const [visible, setVisible] = (0, _usePropsValue.usePropsValue)({
    value: props.visible,
    defaultValue: false,
    onChange: v => {
      var _a;

      if (v === false) {
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    }
  });
  const actions = {
    toggle: () => {
      setVisible(v => !v);
    },
    open: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    }
  };
  (0, _react.useImperativeHandle)(ref, () => actions);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(Object.assign(Object.assign({}, props), {
    onChange: val => {
      var _a;

      (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, val, generateValueExtend(val));
    }
  }));
  const generateValueExtend = (0, _useCascaderValueExtend.useCascaderValueExtend)(props.options);
  const [innerValue, setInnerValue] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    if (!visible) {
      setInnerValue(value);
    }
  }, [visible]);
  (0, _react.useEffect)(() => {
    if (!visible) {
      setInnerValue(value);
    }
  }, [value]);
  const cascaderElement = (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-header`
  }, _react.default.createElement("a", {
    className: `${classPrefix}-header-button`,
    onClick: () => {
      var _a;

      (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
      setVisible(false);
    }
  }, props.cancelText), _react.default.createElement("div", {
    className: `${classPrefix}-header-title`
  }, props.title), _react.default.createElement("a", {
    className: `${classPrefix}-header-button`,
    onClick: () => {
      setValue(innerValue, true);
      setVisible(false);
    }
  }, props.confirmText)), _react.default.createElement("div", {
    className: `${classPrefix}-body`
  }, _react.default.createElement(_cascaderView.default, Object.assign({}, props, {
    value: innerValue,
    onChange: (val, ext) => {
      var _a;

      setInnerValue(val);

      if (visible) {
        (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, val, ext);
      }
    }
  })))));

  const popupElement = _react.default.createElement(_popup.default, {
    visible: visible,
    position: 'bottom',
    onMaskClick: () => {
      var _a;

      (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
      setVisible(false);
    },
    getContainer: props.getContainer,
    destroyOnClose: props.destroyOnClose,
    forceRender: props.forceRender,
    afterShow: props.afterShow,
    afterClose: props.afterClose,
    onClick: props.onClick,
    stopPropagation: props.stopPropagation
  }, cascaderElement);

  return _react.default.createElement(_react.default.Fragment, null, popupElement, (_a = props.children) === null || _a === void 0 ? void 0 : _a.call(props, generateValueExtend(value).items, actions));
});
exports.Cascader = Cascader;
}, function(modId) { var map = {"../popup":1656641690087,"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"../cascader-view":1656641690161,"../config-provider":1656641690077,"../cascader-view/use-cascader-value-extend":1656641690173}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690161, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./cascader-view.css");

var _cascaderView2 = require("./cascader-view");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _optionSkeleton = require("./option-skeleton");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_cascaderView2.CascaderView, {
  optionSkeleton: _optionSkeleton.optionSkeleton
});

exports.default = _default;
}, function(modId) { var map = {"./cascader-view":1656641690162,"../../utils/attach-properties-to-component":1656641690083,"./option-skeleton":1656641690174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690162, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CascaderView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tabs = _interopRequireDefault(require("../tabs"));

var _checkList = _interopRequireDefault(require("../check-list"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _usePropsValue = require("../../utils/use-props-value");

var _useCascaderValueExtend = require("./use-cascader-value-extend");

var _configProvider = require("../config-provider");

var _optionSkeleton = require("./option-skeleton");

var _skeleton = _interopRequireDefault(require("../skeleton"));

var _ahooks = require("ahooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-cascader-view`;
const defaultProps = {
  defaultValue: []
};

const CascaderView = p => {
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, {
    placeholder: locale.Cascader.placeholder
  }, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(Object.assign(Object.assign({}, props), {
    onChange: val => {
      var _a;

      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, val, generateValueExtend(val));
    }
  }));
  const [tabActiveIndex, setTabActiveIndex] = (0, _react.useState)(0);
  (0, _ahooks.useUpdateEffect)(() => {
    var _a;

    (_a = props.onTabsChange) === null || _a === void 0 ? void 0 : _a.call(props, tabActiveIndex);
  }, [tabActiveIndex]);
  const generateValueExtend = (0, _useCascaderValueExtend.useCascaderValueExtend)(props.options);
  const levels = (0, _react.useMemo)(() => {
    const ret = [];
    let currentOptions = props.options;
    let reachedEnd = false;

    for (const v of value) {
      const target = currentOptions.find(option => option.value === v);
      ret.push({
        selected: target,
        options: currentOptions
      });

      if (!target || !target.children) {
        reachedEnd = true;
        break;
      }

      currentOptions = target.children;
    }

    if (!reachedEnd) {
      ret.push({
        selected: undefined,
        options: currentOptions
      });
    }

    return ret;
  }, [value, props.options]);
  (0, _react.useEffect)(() => {
    setTabActiveIndex(levels.length - 1);
  }, [value]);
  (0, _react.useEffect)(() => {
    const max = levels.length - 1;

    if (tabActiveIndex > max) {
      setTabActiveIndex(max);
    }
  }, [tabActiveIndex, levels]);

  const onItemSelect = (selectValue, depth) => {
    const next = value.slice(0, depth);

    if (selectValue !== undefined) {
      next[depth] = selectValue;
    }

    setValue(next);
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement(_tabs.default, {
    activeKey: tabActiveIndex.toString(),
    onChange: key => {
      const activeIndex = parseInt(key);
      setTabActiveIndex(activeIndex);
    },
    stretch: false,
    className: `${classPrefix}-tabs`
  }, levels.map((level, index) => {
    const selected = level.selected;
    return _react.default.createElement(_tabs.default.Tab, {
      key: index.toString(),
      title: _react.default.createElement("div", {
        className: `${classPrefix}-header-title`
      }, selected ? selected.label : props.placeholder),
      forceRender: true
    }, _react.default.createElement("div", {
      className: `${classPrefix}-content`
    }, level.options === _optionSkeleton.optionSkeleton ? _react.default.createElement("div", {
      className: `${classPrefix}-skeleton`
    }, _react.default.createElement(_skeleton.default, {
      className: `${classPrefix}-skeleton-line-1`,
      animated: true
    }), _react.default.createElement(_skeleton.default, {
      className: `${classPrefix}-skeleton-line-2`,
      animated: true
    }), _react.default.createElement(_skeleton.default, {
      className: `${classPrefix}-skeleton-line-3`,
      animated: true
    }), _react.default.createElement(_skeleton.default, {
      className: `${classPrefix}-skeleton-line-4`,
      animated: true
    })) : _react.default.createElement(_checkList.default, {
      value: [value[index]],
      onChange: selectValue => onItemSelect(selectValue[0], index)
    }, level.options.map(option => {
      const active = value[index] === option.value;
      return _react.default.createElement(_checkList.default.Item, {
        value: option.value,
        key: option.value,
        disabled: option.disabled,
        className: (0, _classnames.default)(`${classPrefix}-item`, {
          [`${classPrefix}-item-active`]: active
        })
      }, option.label);
    }))));
  }))));
};

exports.CascaderView = CascaderView;
}, function(modId) { var map = {"../tabs":1656641690163,"../check-list":1656641690165,"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/use-props-value":1656641690123,"./use-cascader-value-extend":1656641690173,"../config-provider":1656641690077,"./option-skeleton":1656641690174,"../skeleton":1656641690175}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690163, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./tabs.css");

var _tabs2 = require("./tabs");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_tabs2.Tabs, {
  Tab: _tabs2.Tab
});

exports.default = _default;
}, function(modId) { var map = {"./tabs":1656641690164,"../../utils/attach-properties-to-component":1656641690083}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690164, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _web = require("@react-spring/web");

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _bound = require("../../utils/bound");

var _ahooks = require("ahooks");

var _useMutationEffect = require("../../utils/use-mutation-effect");

var _useResizeEffect = require("../../utils/use-resize-effect");

var _withDefaultProps = require("../../utils/with-default-props");

var _useIsomorphicUpdateLayoutEffect = require("../../utils/use-isomorphic-update-layout-effect");

var _shouldRender = require("../../utils/should-render");

var _traverseReactNode = require("../../utils/traverse-react-node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-tabs`;

const Tab = () => {
  return null;
};

exports.Tab = Tab;
const defaultProps = {
  activeLineMode: 'auto',
  stretch: true
};

const Tabs = p => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const tabListContainerRef = (0, _react.useRef)(null);
  const activeLineRef = (0, _react.useRef)(null);
  const keyToIndexRecord = {};
  let firstActiveKey = null;
  const panes = [];
  (0, _traverseReactNode.traverseReactNode)(props.children, (child, index) => {
    if (!_react.default.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;

    if (index === 0) {
      firstActiveKey = key;
    }

    const length = panes.push(child);
    keyToIndexRecord[key] = length - 1;
  });
  const [activeKey, setActiveKey] = (0, _usePropsValue.usePropsValue)({
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : firstActiveKey,
    onChange: v => {
      var _a;

      if (v === null) return;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  const [{
    x,
    width
  }, api] = (0, _web.useSpring)(() => ({
    x: 0,
    width: 0,
    config: {
      tension: 300,
      clamp: true
    }
  }));
  const [{
    scrollLeft
  }, scrollApi] = (0, _web.useSpring)(() => ({
    scrollLeft: 0,
    config: {
      tension: 300,
      clamp: true
    }
  }));
  const [{
    leftMaskOpacity,
    rightMaskOpacity
  }, maskApi] = (0, _web.useSpring)(() => ({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
    config: {
      clamp: true
    }
  }));

  function animate(immediate = false) {
    const container = tabListContainerRef.current;
    if (!container) return;
    const activeIndex = keyToIndexRecord[activeKey];

    if (activeIndex === undefined) {
      api.start({
        x: 0,
        width: 0,
        immediate: true
      });
      return;
    }

    const activeLine = activeLineRef.current;
    if (!activeLine) return;
    const activeTabWrapper = container.children.item(activeIndex + 1);
    const activeTab = activeTabWrapper.children.item(0);
    const activeTabLeft = activeTab.offsetLeft;
    const activeTabWidth = activeTab.offsetWidth;
    const activeTabWrapperLeft = activeTabWrapper.offsetLeft;
    const activeTabWrapperWidth = activeTabWrapper.offsetWidth;
    const containerWidth = container.offsetWidth;
    const containerScrollWidth = container.scrollWidth;
    const containerScrollLeft = container.scrollLeft;
    const activeLineWidth = activeLine.offsetWidth;
    let x = 0;
    let width = 0;

    if (props.activeLineMode === 'auto') {
      x = activeTabLeft;
      width = activeTabWidth;
    } else if (props.activeLineMode === 'full') {
      x = activeTabWrapperLeft;
      width = activeTabWrapperWidth;
    } else {
      x = activeTabLeft + (activeTabWidth - activeLineWidth) / 2;
    }

    api.start({
      x,
      width,
      immediate
    });
    const maxScrollDistance = containerScrollWidth - containerWidth;
    if (maxScrollDistance <= 0) return;
    const nextScrollLeft = (0, _bound.bound)(activeTabLeft - (containerWidth - activeTabWidth) / 2, 0, containerScrollWidth - containerWidth);
    scrollApi.start({
      scrollLeft: nextScrollLeft,
      from: {
        scrollLeft: containerScrollLeft
      },
      immediate
    });
  }

  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    animate(!x.isAnimating);
  }, []);
  (0, _useIsomorphicUpdateLayoutEffect.useIsomorphicUpdateLayoutEffect)(() => {
    animate();
  }, [activeKey]);
  (0, _useResizeEffect.useResizeEffect)(() => {
    animate(!x.isAnimating);
  }, tabListContainerRef);
  (0, _useMutationEffect.useMutationEffect)(() => {
    animate(!x.isAnimating);
  }, tabListContainerRef, {
    subtree: true,
    childList: true,
    characterData: true
  });
  const {
    run: updateMask
  } = (0, _ahooks.useThrottleFn)((immediate = false) => {
    const container = tabListContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const showLeftMask = scrollLeft > 0;
    const showRightMask = scrollLeft + container.offsetWidth < container.scrollWidth;
    maskApi.start({
      leftMaskOpacity: showLeftMask ? 1 : 0,
      rightMaskOpacity: showRightMask ? 1 : 0,
      immediate
    });
  }, {
    wait: 100,
    trailing: true,
    leading: true
  });
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    updateMask(true);
  }, []);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-header`
  }, _react.default.createElement(_web.animated.div, {
    className: (0, _classnames.default)(`${classPrefix}-header-mask`, `${classPrefix}-header-mask-left`),
    style: {
      opacity: leftMaskOpacity
    }
  }), _react.default.createElement(_web.animated.div, {
    className: (0, _classnames.default)(`${classPrefix}-header-mask`, `${classPrefix}-header-mask-right`),
    style: {
      opacity: rightMaskOpacity
    }
  }), _react.default.createElement(_web.animated.div, {
    className: `${classPrefix}-tab-list`,
    ref: tabListContainerRef,
    scrollLeft: scrollLeft,
    onScroll: updateMask
  }, _react.default.createElement(_web.animated.div, {
    ref: activeLineRef,
    className: `${classPrefix}-tab-line`,
    style: {
      width: props.activeLineMode === 'fixed' ? 'var(--fixed-active-line-width, 30px)' : width,
      x
    }
  }), panes.map(pane => (0, _nativeProps.withNativeProps)(pane.props, _react.default.createElement("div", {
    key: pane.key,
    className: (0, _classnames.default)(`${classPrefix}-tab-wrapper`, {
      [`${classPrefix}-tab-wrapper-stretch`]: props.stretch
    })
  }, _react.default.createElement("div", {
    onClick: () => {
      const {
        key
      } = pane;
      if (pane.props.disabled) return;

      if (key === undefined || key === null) {
        return;
      }

      setActiveKey(key.toString());
    },
    className: (0, _classnames.default)(`${classPrefix}-tab`, {
      [`${classPrefix}-tab-active`]: pane.key === activeKey,
      [`${classPrefix}-tab-disabled`]: pane.props.disabled
    })
  }, pane.props.title)))))), panes.map(pane => {
    if (pane.props.children === undefined) {
      return null;
    }

    const active = pane.key === activeKey;
    return _react.default.createElement(_shouldRender.ShouldRender, {
      key: pane.key,
      active: active,
      forceRender: pane.props.forceRender,
      destroyOnClose: pane.props.destroyOnClose
    }, _react.default.createElement("div", {
      className: `${classPrefix}-content`,
      style: {
        display: active ? 'block' : 'none'
      }
    }, pane.props.children));
  })));
};

exports.Tabs = Tabs;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"../../utils/bound":1656641690130,"../../utils/use-mutation-effect":1656641690129,"../../utils/use-resize-effect":1656641690127,"../../utils/with-default-props":1656641690086,"../../utils/use-isomorphic-update-layout-effect":1656641690131,"../../utils/should-render":1656641690097,"../../utils/traverse-react-node":1656641690134}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690165, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./check-list.css");

var _checkList2 = require("./check-list");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _checkListItem = require("./check-list-item");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_checkList2.CheckList, {
  Item: _checkListItem.CheckListItem
});

exports.default = _default;
}, function(modId) { var map = {"./check-list":1656641690166,"../../utils/attach-properties-to-component":1656641690083,"./check-list-item":1656641690172}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690166, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckList = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _list = _interopRequireDefault(require("../list"));

var _withDefaultProps = require("../../utils/with-default-props");

var _context = require("./context");

var _usePropsValue = require("../../utils/use-props-value");

var _antdMobileIcons = require("antd-mobile-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = 'adm-check-list';
const defaultProps = {
  multiple: false,
  defaultValue: [],
  activeIcon: _react.default.createElement(_antdMobileIcons.CheckOutline, null)
};

const CheckList = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);

  function check(val) {
    if (props.multiple) {
      setValue([...value, val]);
    } else {
      setValue([val]);
    }
  }

  function uncheck(val) {
    setValue(value.filter(item => item !== val));
  }

  const {
    activeIcon,
    disabled,
    readOnly
  } = props;
  return _react.default.createElement(_context.CheckListContext.Provider, {
    value: {
      value,
      check,
      uncheck,
      activeIcon,
      disabled,
      readOnly
    }
  }, (0, _nativeProps.withNativeProps)(props, _react.default.createElement(_list.default, {
    mode: props.mode,
    className: classPrefix
  }, props.children)));
};

exports.CheckList = CheckList;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../list":1656641690167,"../../utils/with-default-props":1656641690086,"./context":1656641690171,"../../utils/use-props-value":1656641690123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690167, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./list.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _list2 = require("./list");

var _listItem = require("./list-item");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_list2.List, {
  Item: _listItem.ListItem
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./list":1656641690168,"./list-item":1656641690169}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690168, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-list`;
const defaultProps = {
  mode: 'default'
};
const List = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const nativeElementRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    get nativeElement() {
      return nativeElementRef.current;
    }

  }));
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-${props.mode}`),
    ref: nativeElementRef
  }, props.header && _react.default.createElement("div", {
    className: `${classPrefix}-header`
  }, props.header), _react.default.createElement("div", {
    className: `${classPrefix}-body`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-body-inner`
  }, props.children))));
});
exports.List = List;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690169, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _antdMobileIcons = require("antd-mobile-icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _isNodeWithContent = require("../../utils/is-node-with-content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-list-item`;

const ListItem = props => {
  var _a;

  const clickable = (_a = props.clickable) !== null && _a !== void 0 ? _a : !!props.onClick;
  const arrow = props.arrow === undefined ? clickable : props.arrow;

  const content = _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, (0, _isNodeWithContent.isNodeWithContent)(props.prefix) && _react.default.createElement("div", {
    className: `${classPrefix}-content-prefix`
  }, props.prefix), _react.default.createElement("div", {
    className: `${classPrefix}-content-main`
  }, (0, _isNodeWithContent.isNodeWithContent)(props.title) && _react.default.createElement("div", {
    className: `${classPrefix}-title`
  }, props.title), props.children, (0, _isNodeWithContent.isNodeWithContent)(props.description) && _react.default.createElement("div", {
    className: `${classPrefix}-description`
  }, props.description)), (0, _isNodeWithContent.isNodeWithContent)(props.extra) && _react.default.createElement("div", {
    className: `${classPrefix}-content-extra`
  }, props.extra), (0, _isNodeWithContent.isNodeWithContent)(arrow) && _react.default.createElement("div", {
    className: `${classPrefix}-content-arrow`
  }, arrow === true ? _react.default.createElement(_antdMobileIcons.RightOutline, null) : arrow));

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement(clickable ? 'a' : 'div', {
    className: (0, _classnames.default)(`${classPrefix}`, clickable ? ['adm-plain-anchor'] : [], props.disabled && `${classPrefix}-disabled`),
    onClick: props.disabled ? undefined : props.onClick
  }, content));
};

exports.ListItem = ListItem;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/is-node-with-content":1656641690170}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690170, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNodeWithContent = isNodeWithContent;

function isNodeWithContent(node) {
  return node !== undefined && node !== null && node !== false;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690171, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckListContext = void 0;

var _react = require("react");

const CheckListContext = (0, _react.createContext)(null);
exports.CheckListContext = CheckListContext;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690172, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckListItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _list = _interopRequireDefault(require("../list"));

var _nativeProps = require("../../utils/native-props");

var _context = require("./context");

var _devLog = require("../../utils/dev-log");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-check-list-item`;

const CheckListItem = props => {
  const context = (0, _react.useContext)(_context.CheckListContext);

  if (context === null) {
    (0, _devLog.devWarning)('CheckList.Item', 'CheckList.Item can only be used inside CheckList.');
    return null;
  }

  const active = context.value.includes(props.value);
  const readOnly = props.readOnly || context.readOnly;

  const extra = _react.default.createElement("div", {
    className: `${classPrefix}-extra`
  }, active ? context.activeIcon : null);

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement(_list.default.Item, {
    title: props.title,
    className: (0, _classnames.default)(classPrefix, readOnly && `${classPrefix}-readonly`, active && `${classPrefix}-active`),
    description: props.description,
    prefix: props.prefix,
    onClick: e => {
      var _a;

      if (readOnly) return;

      if (active) {
        context.uncheck(props.value);
      } else {
        context.check(props.value);
      }

      (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    arrow: false,
    clickable: !readOnly,
    extra: extra,
    disabled: props.disabled || context.disabled
  }, props.children));
};

exports.CheckListItem = CheckListItem;
}, function(modId) { var map = {"../list":1656641690167,"../../utils/native-props":1656641690085,"./context":1656641690171,"../../utils/dev-log":1656641690148}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690173, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCascaderValueExtend = useCascaderValueExtend;

var _react = require("react");

var _memoize = _interopRequireDefault(require("lodash/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useCascaderValueExtend(options) {
  const generateItems = (0, _react.useMemo)(() => {
    return (0, _memoize.default)(val => {
      const ret = [];
      let currentOptions = options;

      for (const v of val) {
        const target = currentOptions.find(option => option.value === v);

        if (!target) {
          break;
        }

        ret.push(target);
        if (!target.children) break;
        currentOptions = target.children;
      }

      return ret;
    }, val => JSON.stringify(val));
  }, [options]);
  const generateIsLeaf = (0, _react.useMemo)(() => {
    return (0, _memoize.default)(val => {
      const children = val.reduce((currentOptions, v) => {
        var _a;

        return ((_a = currentOptions.find(option => option.value === v)) === null || _a === void 0 ? void 0 : _a.children) || [];
      }, options);
      return children.length === 0;
    }, val => JSON.stringify(val));
  }, [options]);

  function generateValueExtend(val) {
    return {
      get items() {
        return generateItems(val);
      },

      get isLeaf() {
        return generateIsLeaf(val);
      }

    };
  }

  return generateValueExtend;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690174, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionSkeleton = void 0;
const optionSkeleton = [];
exports.optionSkeleton = optionSkeleton;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690175, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./skeleton.css");

var _skeleton2 = require("./skeleton");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_skeleton2.Skeleton, {
  Title: _skeleton2.SkeletonTitle,
  Paragraph: _skeleton2.SkeletonParagraph
});

exports.default = _default;
}, function(modId) { var map = {"./skeleton":1656641690176,"../../utils/attach-properties-to-component":1656641690083}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690176, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonTitle = exports.SkeletonParagraph = exports.Skeleton = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _generateIntArray = require("../../utils/generate-int-array");

var _withDefaultProps = require("../../utils/with-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = 'adm-skeleton';

const Skeleton = props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-animated`]: props.animated
    })
  }));
};

exports.Skeleton = Skeleton;

const SkeletonTitle = props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement(Skeleton, {
    animated: props.animated,
    className: `${classPrefix}-title`
  }));
};

exports.SkeletonTitle = SkeletonTitle;
const defaultSkeletonParagraphProps = {
  lineCount: 3
};

const SkeletonParagraph = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultSkeletonParagraphProps, p);
  const keys = (0, _generateIntArray.generateIntArray)(1, props.lineCount);

  const node = _react.default.createElement("div", {
    className: `${classPrefix}-paragraph`
  }, keys.map(key => _react.default.createElement(Skeleton, {
    key: key,
    animated: props.animated,
    className: `${classPrefix}-paragraph-line`
  })));

  return (0, _nativeProps.withNativeProps)(props, node);
};

exports.SkeletonParagraph = SkeletonParagraph;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/generate-int-array":1656641690177,"../../utils/with-default-props":1656641690086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690177, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateIntArray = generateIntArray;

function generateIntArray(from, to) {
  const array = [];

  for (let i = from; i <= to; i++) {
    array.push(i);
  }

  return array;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690178, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prompt = prompt;

var _react = _interopRequireWildcard(require("react"));

var _renderToBody = require("../../utils/render-to-body");

var _cascader = require("./cascader");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function prompt(props) {
  return new Promise(resolve => {
    const Wrapper = () => {
      const [visible, setVisible] = (0, _react.useState)(false);
      (0, _react.useEffect)(() => {
        setVisible(true);
      }, []);
      return _react.default.createElement(_cascader.Cascader, Object.assign({}, props, {
        visible: visible,
        onConfirm: (val, extend) => {
          var _a;

          (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, val, extend);
          resolve(val);
        },
        onClose: () => {
          var _a;

          (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
          setVisible(false);
          resolve(null);
        },
        afterClose: () => {
          var _a;

          (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
          unmount();
        }
      }));
    };

    const unmount = (0, _renderToBody.renderToBody)(_react.default.createElement(Wrapper, null));
  });
}
}, function(modId) { var map = {"../../utils/render-to-body":1656641690105,"./cascader":1656641690160}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690179, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./center-popup.css");

var _centerPopup2 = require("./center-popup");

var _default = _centerPopup2.CenterPopup;
exports.default = _default;
}, function(modId) { var map = {"./center-popup":1656641690180}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690180, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenterPopup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _renderToContainer = require("../../utils/render-to-container");

var _mask = _interopRequireDefault(require("../mask"));

var _withStopPropagation = require("../../utils/with-stop-propagation");

var _withDefaultProps = require("../../utils/with-default-props");

var _ahooks = require("ahooks");

var _web = require("@react-spring/web");

var _useInnerVisible = require("../../utils/use-inner-visible");

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

var _shouldRender = require("../../utils/should-render");

var _useLockScroll = require("../../utils/use-lock-scroll");

var _antdMobileIcons = require("antd-mobile-icons");

var _popupBaseProps = require("../popup/popup-base-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultProps = Object.assign(Object.assign({}, _popupBaseProps.defaultPopupBaseProps), {
  getContainer: null
});

const CenterPopup = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const unmountedRef = (0, _ahooks.useUnmountedRef)();
  const style = (0, _web.useSpring)({
    scale: props.visible ? 1 : 0.8,
    opacity: props.visible ? 1 : 0,
    config: {
      mass: 1.2,
      tension: 200,
      friction: 25,
      clamp: true
    },
    onRest: () => {
      var _a, _b;

      if (unmountedRef.current) return;
      setActive(props.visible);

      if (props.visible) {
        (_a = props.afterShow) === null || _a === void 0 ? void 0 : _a.call(props);
      } else {
        (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    }
  });
  const [active, setActive] = (0, _react.useState)(props.visible);
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);
  const ref = (0, _react.useRef)(null);
  (0, _useLockScroll.useLockScroll)(ref, props.disableBodyScroll && active);
  const maskVisible = (0, _useInnerVisible.useInnerVisible)(active && props.visible);

  const body = _react.default.createElement("div", {
    className: (0, _classnames.default)('adm-center-popup-body', props.bodyClassName),
    style: props.bodyStyle
  }, props.children);

  const node = (0, _withStopPropagation.withStopPropagation)(props.stopPropagation, (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: 'adm-center-popup',
    style: {
      display: active ? undefined : 'none',
      pointerEvents: active ? undefined : 'none'
    }
  }, props.mask && _react.default.createElement(_mask.default, {
    visible: maskVisible,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose,
    onMaskClick: e => {
      var _a, _b;

      (_a = props.onMaskClick) === null || _a === void 0 ? void 0 : _a.call(props, e);

      if (props.closeOnMaskClick) {
        (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    },
    style: props.maskStyle,
    className: (0, _classnames.default)('adm-center-popup-mask', props.maskClassName),
    disableBodyScroll: false,
    stopPropagation: props.stopPropagation
  }), _react.default.createElement("div", {
    className: 'adm-center-popup-wrap',
    role: props.role,
    "aria-label": props['aria-label']
  }, _react.default.createElement(_web.animated.div, {
    style: style,
    ref: ref
  }, props.showCloseButton && _react.default.createElement("a", {
    className: (0, _classnames.default)('adm-center-popup-close', 'adm-plain-anchor'),
    onClick: () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }, _react.default.createElement(_antdMobileIcons.CloseOutline, null)), body)))));
  return _react.default.createElement(_shouldRender.ShouldRender, {
    active: active,
    forceRender: props.forceRender,
    destroyOnClose: props.destroyOnClose
  }, (0, _renderToContainer.renderToContainer)(props.getContainer, node));
};

exports.CenterPopup = CenterPopup;
}, function(modId) { var map = {"../../utils/render-to-container":1656641690095,"../mask":1656641690089,"../../utils/with-stop-propagation":1656641690099,"../../utils/with-default-props":1656641690086,"../../utils/use-inner-visible":1656641690101,"../../utils/native-props":1656641690085,"../../utils/should-render":1656641690097,"../../utils/use-lock-scroll":1656641690091,"../popup/popup-base-props":1656641690100}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690181, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./checkbox.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _group = require("./group");

var _checkbox2 = require("./checkbox");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_checkbox2.Checkbox, {
  Group: _group.Group
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./group":1656641690182,"./checkbox":1656641690184}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690182, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;

var _react = _interopRequireDefault(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _groupContext = require("./group-context");

var _usePropsValue = require("../../utils/use-props-value");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultProps = {
  disabled: false,
  defaultValue: []
};

const Group = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);
  return _react.default.createElement(_groupContext.CheckboxGroupContext.Provider // TODO: 性能优化
  , {
    // TODO: 性能优化
    value: {
      value: value,
      disabled: props.disabled,
      check: v => {
        setValue([...value, v]);
      },
      uncheck: v => {
        setValue(value.filter(item => item !== v));
      }
    }
  }, props.children);
};

exports.Group = Group;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"./group-context":1656641690183,"../../utils/use-props-value":1656641690123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690183, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroupContext = void 0;

var _react = require("react");

const CheckboxGroupContext = (0, _react.createContext)(null);
exports.CheckboxGroupContext = CheckboxGroupContext;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690184, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _groupContext = require("./group-context");

var _usePropsValue = require("../../utils/use-props-value");

var _withDefaultProps = require("../../utils/with-default-props");

var _devLog = require("../../utils/dev-log");

var _checkIcon = require("./check-icon");

var _indeterminateIcon = require("./indeterminate-icon");

var _isDev = require("../../utils/is-dev");

var _nativeInput = require("./native-input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-checkbox`;
const defaultProps = {
  defaultChecked: false,
  indeterminate: false
};
const Checkbox = (0, _react.forwardRef)((p, ref) => {
  const groupContext = (0, _react.useContext)(_groupContext.CheckboxGroupContext);
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  let [checked, setChecked] = (0, _usePropsValue.usePropsValue)({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange
  });
  let disabled = props.disabled;
  const {
    value
  } = props;

  if (groupContext && value !== undefined) {
    if (_isDev.isDev) {
      if (p.checked !== undefined) {
        (0, _devLog.devWarning)('Checkbox', 'When used within `Checkbox.Group`, the `checked` prop of `Checkbox` will not work.');
      }

      if (p.defaultChecked !== undefined) {
        (0, _devLog.devWarning)('Checkbox', 'When used within `Checkbox.Group`, the `defaultChecked` prop of `Checkbox` will not work.');
      }
    }

    checked = groupContext.value.includes(value);

    setChecked = checked => {
      var _a;

      if (checked) {
        groupContext.check(value);
      } else {
        groupContext.uncheck(value);
      }

      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, checked);
    };

    disabled = disabled || groupContext.disabled;
  }

  (0, _react.useImperativeHandle)(ref, () => ({
    check: () => {
      setChecked(true);
    },
    uncheck: () => {
      setChecked(false);
    },
    toggle: () => {
      setChecked(!checked);
    }
  }));

  const renderIcon = () => {
    if (props.icon) {
      return _react.default.createElement("div", {
        className: `${classPrefix}-custom-icon`
      }, props.icon(checked, props.indeterminate));
    }

    return _react.default.createElement("div", {
      className: `${classPrefix}-icon`
    }, props.indeterminate ? _react.default.createElement(_indeterminateIcon.IndeterminateIcon, null) : checked && _react.default.createElement(_checkIcon.CheckIcon, null));
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("label", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-checked`]: checked && !props.indeterminate,
      [`${classPrefix}-indeterminate`]: props.indeterminate,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-block`]: props.block
    })
  }, _react.default.createElement(_nativeInput.NativeInput, {
    type: 'checkbox',
    checked: checked,
    onChange: setChecked,
    disabled: disabled,
    id: props.id
  }), renderIcon(), props.children && _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, props.children)));
});
exports.Checkbox = Checkbox;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"./group-context":1656641690183,"../../utils/use-props-value":1656641690123,"../../utils/with-default-props":1656641690086,"../../utils/dev-log":1656641690148,"./check-icon":1656641690185,"./indeterminate-icon":1656641690186,"../../utils/is-dev":1656641690147,"./native-input":1656641690187}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690185, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CheckIcon = (0, _react.memo)(props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("svg", {
    viewBox: '0 0 40 40'
  }, _react.default.createElement("path", {
    d: 'M31.5541766,15 L28.0892433,15 L28.0892434,15 C27.971052,15 27.8576674,15.044522 27.7740471,15.1239792 L18.2724722,24.1625319 L13.2248725,19.3630279 L13.2248725,19.3630279 C13.1417074,19.2834412 13.0287551,19.2384807 12.9107898,19.2380079 L9.44474455,19.2380079 L9.44474454,19.2380079 C9.19869815,19.2384085 8.99957935,19.4284738 9,19.66253 C9,19.7747587 9.04719253,19.8823283 9.13066188,19.9616418 L17.0907466,27.5338228 C17.4170809,27.8442545 17.8447695,28 18.2713393,28 L18.2980697,28 C18.7168464,27.993643 19.133396,27.8378975 19.4530492,27.5338228 L31.8693384,15.7236361 L31.8693384,15.7236361 C32.0434167,15.5582251 32.0435739,15.2898919 31.8696892,15.1242941 C31.7860402,15.0446329 31.6725052,15 31.5541421,15 L31.5541766,15 Z',
    fill: 'currentColor'
  })));
});
exports.CheckIcon = CheckIcon;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690186, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndeterminateIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const IndeterminateIcon = (0, _react.memo)(props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("svg", {
    viewBox: '0 0 40 40'
  }, _react.default.createElement("path", {
    d: 'M20,9 C26.0752953,9 31,13.9247047 31,20 C31,26.0752953 26.0752953,31 20,31 C13.9247047,31 9,26.0752953 9,20 C9,13.9247047 13.9247047,9 20,9 Z',
    fill: 'currentColor'
  })));
});
exports.IndeterminateIcon = IndeterminateIcon;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690187, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ahooks = require("ahooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NativeInput = props => {
  const inputRef = (0, _react.useRef)(null);
  const handleClick = (0, _ahooks.useMemoizedFn)(e => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const latestChecked = e.target.checked;
    if (latestChecked === props.checked) return;
    props.onChange(latestChecked);
  });
  (0, _react.useEffect)(() => {
    if (props.disabled) return;
    if (!inputRef.current) return;
    const input = inputRef.current;
    input.addEventListener('click', handleClick);
    return () => {
      input.removeEventListener('click', handleClick);
    };
  }, [props.disabled, props.onChange]);
  return _react.default.createElement("input", {
    ref: inputRef,
    type: props.type,
    checked: props.checked,
    onChange: () => {},
    disabled: props.disabled,
    id: props.id
  });
};

exports.NativeInput = NativeInput;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690188, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./collapse.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _collapse2 = require("./collapse");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_collapse2.Collapse, {
  Panel: _collapse2.CollapsePanel
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./collapse":1656641690189}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690189, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsePanel = exports.Collapse = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _list = _interopRequireDefault(require("../list"));

var _antdMobileIcons = require("antd-mobile-icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _web = require("@react-spring/web");

var _usePropsValue = require("../../utils/use-props-value");

var _ahooks = require("ahooks");

var _shouldRender = require("../../utils/should-render");

var _useIsomorphicUpdateLayoutEffect = require("../../utils/use-isomorphic-update-layout-effect");

var _traverseReactNode = require("../../utils/traverse-react-node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-collapse`;

const CollapsePanel = () => {
  return null;
};

exports.CollapsePanel = CollapsePanel;

const CollapsePanelContent = props => {
  const {
    visible
  } = props;
  const innerRef = (0, _react.useRef)(null);
  const shouldRender = (0, _shouldRender.useShouldRender)(visible, props.forceRender, props.destroyOnClose);
  const [{
    height
  }, api] = (0, _web.useSpring)(() => ({
    from: {
      height: 0
    },
    config: {
      precision: 0.01,
      mass: 1,
      tension: 200,
      friction: 25,
      clamp: true
    }
  }));
  (0, _ahooks.useMount)(() => {
    if (!visible) return;
    const inner = innerRef.current;
    if (!inner) return;
    api.start({
      height: inner.offsetHeight,
      immediate: true
    });
  });
  (0, _useIsomorphicUpdateLayoutEffect.useIsomorphicUpdateLayoutEffect)(() => {
    const inner = innerRef.current;
    if (!inner) return;

    if (visible) {
      api.start({
        height: inner.offsetHeight
      });
    } else {
      api.start({
        height: inner.offsetHeight,
        immediate: true
      });
      api.start({
        height: 0
      });
    }
  }, [visible]);
  return _react.default.createElement(_web.animated.div, {
    className: `${classPrefix}-panel-content`,
    style: {
      height: height.to(v => {
        if (height.idle && visible) {
          return 'auto';
        } else {
          return v;
        }
      })
    }
  }, _react.default.createElement("div", {
    className: `${classPrefix}-panel-content-inner`,
    ref: innerRef
  }, _react.default.createElement(_list.default.Item, null, shouldRender && props.children)));
};

const Collapse = props => {
  var _a;

  const panels = [];
  (0, _traverseReactNode.traverseReactNode)(props.children, child => {
    if (!_react.default.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;
    panels.push(child);
  });
  const [activeKey, setActiveKey] = (0, _usePropsValue.usePropsValue)(props.accordion ? {
    value: props.activeKey === undefined ? undefined : props.activeKey === null ? [] : [props.activeKey],
    defaultValue: props.defaultActiveKey === undefined || props.defaultActiveKey === null ? [] : [props.defaultActiveKey],
    onChange: v => {
      var _a, _b;

      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, (_b = v[0]) !== null && _b !== void 0 ? _b : null);
    }
  } : {
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : [],
    onChange: props.onChange
  });
  const activeKeyList = activeKey === null ? [] : Array.isArray(activeKey) ? activeKey : [activeKey];
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement(_list.default, null, panels.map(panel => {
    const key = panel.key;
    const active = activeKeyList.includes(key);

    function handleClick(event) {
      var _a, _b;

      if (props.accordion) {
        if (active) {
          setActiveKey([]);
        } else {
          setActiveKey([key]);
        }
      } else {
        if (active) {
          setActiveKey(activeKeyList.filter(v => v !== key));
        } else {
          setActiveKey([...activeKeyList, key]);
        }
      }

      (_b = (_a = panel.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    }

    const renderArrow = () => {
      let arrow = _react.default.createElement(_antdMobileIcons.DownOutline, null);

      if (props.arrow !== undefined) {
        arrow = props.arrow;
      }

      if (panel.props.arrow !== undefined) {
        arrow = panel.props.arrow;
      }

      return typeof arrow === 'function' ? arrow(active) : _react.default.createElement("div", {
        className: (0, _classnames.default)(`${classPrefix}-arrow`, {
          [`${classPrefix}-arrow-active`]: active
        })
      }, arrow);
    };

    return _react.default.createElement(_react.default.Fragment, {
      key: key
    }, (0, _nativeProps.withNativeProps)(panel.props, _react.default.createElement(_list.default.Item, {
      className: `${classPrefix}-panel-header`,
      onClick: handleClick,
      disabled: panel.props.disabled,
      arrow: renderArrow()
    }, panel.props.title)), _react.default.createElement(CollapsePanelContent, {
      visible: active,
      forceRender: !!panel.props.forceRender,
      destroyOnClose: !!panel.props.destroyOnClose
    }, panel.props.children));
  }))));
};

exports.Collapse = Collapse;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../list":1656641690167,"../../utils/use-props-value":1656641690123,"../../utils/should-render":1656641690097,"../../utils/use-isomorphic-update-layout-effect":1656641690131,"../../utils/traverse-react-node":1656641690134}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690190, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./date-picker.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _datePicker2 = require("./date-picker");

var _prompt = require("./prompt");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_datePicker2.DatePicker, {
  prompt: _prompt.prompt
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./date-picker":1656641690191,"./prompt":1656641690195}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690191, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ahooks = require("ahooks");

var _picker = _interopRequireDefault(require("../picker"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _usePropsValue = require("../../utils/use-props-value");

var _datePickerUtils = require("./date-picker-utils");

var _bound = require("../../utils/bound");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const thisYear = new Date().getFullYear();
const defaultProps = {
  min: new Date(new Date().setFullYear(thisYear - 10)),
  max: new Date(new Date().setFullYear(thisYear + 10)),
  precision: 'day',
  renderLabel: _datePickerUtils.defaultRenderLabel,
  defaultValue: null
};
const DatePicker = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: v => {
      var _a;

      if (v === null) return;
      (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  const now = (0, _react.useMemo)(() => new Date(), []);
  const pickerValue = (0, _react.useMemo)(() => {
    let date = value !== null && value !== void 0 ? value : now;
    date = new Date((0, _bound.bound)(date.getTime(), props.min.getTime(), props.max.getTime()));
    return (0, _datePickerUtils.convertDateToStringArray)(date, props.precision);
  }, [value, props.precision, props.min, props.max]);
  const onConfirm = (0, _react.useCallback)(val => {
    setValue((0, _datePickerUtils.convertStringArrayToDate)(val, props.precision), true);
  }, [setValue, props.precision]);
  const onSelect = (0, _ahooks.useMemoizedFn)(val => {
    var _a;

    const date = (0, _datePickerUtils.convertStringArrayToDate)(val, props.precision);
    (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, date);
  });
  const columns = (0, _react.useCallback)(selected => (0, _datePickerUtils.generateDatePickerColumns)(selected, props.min, props.max, props.precision, props.renderLabel, props.filter), [props.min, props.max, props.precision, props.renderLabel]);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement(_picker.default, {
    ref: ref,
    columns: columns,
    value: pickerValue,
    onCancel: props.onCancel,
    onClose: props.onClose,
    closeOnMaskClick: props.closeOnMaskClick,
    visible: props.visible,
    confirmText: props.confirmText,
    cancelText: props.cancelText,
    onConfirm: onConfirm,
    onSelect: onSelect,
    getContainer: props.getContainer,
    loading: props.loading,
    loadingContent: props.loadingContent,
    afterShow: props.afterShow,
    afterClose: props.afterClose,
    onClick: props.onClick,
    title: props.title,
    stopPropagation: props.stopPropagation,
    mouseWheel: props.mouseWheel,
    destroyOnClose: props.destroyOnClose,
    forceRender: props.forceRender
  }, (_, actions) => {
    var _a;

    return (_a = props.children) === null || _a === void 0 ? void 0 : _a.call(props, value, actions);
  }));
});
exports.DatePicker = DatePicker;
}, function(modId) { var map = {"../picker":1656641690140,"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/use-props-value":1656641690123,"./date-picker-utils":1656641690192,"../../utils/bound":1656641690130}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690192, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDatePickerColumns = exports.defaultRenderLabel = exports.convertStringArrayToDate = exports.convertDateToStringArray = void 0;

var dateUtils = _interopRequireWildcard(require("./date-picker-date-utils"));

var weekUtils = _interopRequireWildcard(require("./date-picker-week-utils"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const precisionLengthRecord = {
  year: 1,
  month: 2,
  day: 3,
  hour: 4,
  minute: 5,
  second: 6
};

const convertDateToStringArray = (date, precision) => {
  if (precision.includes('week')) {
    return weekUtils.convertDateToStringArray(date);
  } else {
    const datePrecision = precision;
    const stringArray = dateUtils.convertDateToStringArray(date);
    return stringArray.slice(0, precisionLengthRecord[datePrecision]);
  }
};

exports.convertDateToStringArray = convertDateToStringArray;

const convertStringArrayToDate = (value, precision) => {
  if (precision.includes('week')) {
    return weekUtils.convertStringArrayToDate(value);
  } else {
    return dateUtils.convertStringArrayToDate(value);
  }
};

exports.convertStringArrayToDate = convertStringArrayToDate;

const generateDatePickerColumns = (selected, min, max, precision, renderLabel, filter) => {
  if (precision.startsWith('week')) {
    return weekUtils.generateDatePickerColumns(selected, min, max, precision, renderLabel, filter);
  } else {
    return dateUtils.generateDatePickerColumns(selected, min, max, precision, renderLabel, filter);
  }
};

exports.generateDatePickerColumns = generateDatePickerColumns;

const defaultRenderLabel = (precision, data) => {
  if (precision.includes('week')) {
    return weekUtils.defaultRenderLabel(precision, data);
  } else {
    return dateUtils.defaultRenderLabel(precision, data);
  }
};

exports.defaultRenderLabel = defaultRenderLabel;
}, function(modId) { var map = {"./date-picker-date-utils":1656641690193,"./date-picker-week-utils":1656641690194}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690193, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDateToStringArray = convertDateToStringArray;
exports.convertStringArrayToDate = convertStringArrayToDate;
exports.defaultRenderLabel = defaultRenderLabel;
exports.generateDatePickerColumns = generateDatePickerColumns;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _isoWeek = _interopRequireDefault(require("dayjs/plugin/isoWeek"));

var _isoWeeksInYear = _interopRequireDefault(require("dayjs/plugin/isoWeeksInYear"));

var _isLeapYear = _interopRequireDefault(require("dayjs/plugin/isLeapYear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs.default.extend(_isoWeek.default);

_dayjs.default.extend(_isoWeeksInYear.default);

_dayjs.default.extend(_isLeapYear.default);

const precisionRankRecord = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function defaultRenderLabel(type, data) {
  switch (type) {
    case 'minute':
    case 'second':
    case 'hour':
      return ('0' + data.toString()).slice(-2);

    default:
      return data.toString();
  }
}

function generateDatePickerColumns(selected, min, max, precision, renderLabel, filter) {
  const ret = [];
  const minYear = min.getFullYear();
  const minMonth = min.getMonth() + 1;
  const minDay = min.getDate();
  const minHour = min.getHours();
  const minMinute = min.getMinutes();
  const minSecond = min.getSeconds();
  const maxYear = max.getFullYear();
  const maxMonth = max.getMonth() + 1;
  const maxDay = max.getDate();
  const maxHour = max.getHours();
  const maxMinute = max.getMinutes();
  const maxSecond = max.getSeconds();
  const rank = precisionRankRecord[precision];
  const selectedYear = parseInt(selected[0]);
  const firstDayInSelectedMonth = (0, _dayjs.default)(convertStringArrayToDate([selected[0], selected[1], '1']));
  const selectedMonth = parseInt(selected[1]);
  const selectedDay = parseInt(selected[2]);
  const selectedHour = parseInt(selected[3]);
  const selectedMinute = parseInt(selected[4]);
  const isInMinYear = selectedYear === minYear;
  const isInMaxYear = selectedYear === maxYear;
  const isInMinMonth = isInMinYear && selectedMonth === minMonth;
  const isInMaxMonth = isInMaxYear && selectedMonth === maxMonth;
  const isInMinDay = isInMinMonth && selectedDay === minDay;
  const isInMaxDay = isInMaxMonth && selectedDay === maxDay;
  const isInMinHour = isInMinDay && selectedHour === minHour;
  const isInMaxHour = isInMaxDay && selectedHour === maxHour;
  const isInMinMinute = isInMinHour && selectedMinute === minMinute;
  const isInMaxMinute = isInMaxHour && selectedMinute === maxMinute;

  const generateColumn = (from, to, precision) => {
    let column = [];

    for (let i = from; i <= to; i++) {
      column.push(i);
    }

    const prefix = selected.slice(0, precisionRankRecord[precision]);
    const currentFilter = filter === null || filter === void 0 ? void 0 : filter[precision];

    if (currentFilter && typeof currentFilter === 'function') {
      column = column.filter(i => currentFilter(i, {
        get date() {
          const stringArray = [...prefix, i.toString()];
          return convertStringArrayToDate(stringArray);
        }

      }));
    }

    return column;
  };

  if (rank >= precisionRankRecord.year) {
    const lower = minYear;
    const upper = maxYear;
    const years = generateColumn(lower, upper, 'year');
    ret.push(years.map(v => {
      return {
        label: renderLabel('year', v),
        value: v.toString()
      };
    }));
  }

  if (rank >= precisionRankRecord.month) {
    const lower = isInMinYear ? minMonth : 1;
    const upper = isInMaxYear ? maxMonth : 12;
    const months = generateColumn(lower, upper, 'month');
    ret.push(months.map(v => {
      return {
        label: renderLabel('month', v),
        value: v.toString()
      };
    }));
  }

  if (rank >= precisionRankRecord.day) {
    const lower = isInMinMonth ? minDay : 1;
    const upper = isInMaxMonth ? maxDay : firstDayInSelectedMonth.daysInMonth();
    const days = generateColumn(lower, upper, 'day');
    ret.push(days.map(v => {
      return {
        label: renderLabel('day', v),
        value: v.toString()
      };
    }));
  }

  if (rank >= precisionRankRecord.hour) {
    const lower = isInMinDay ? minHour : 0;
    const upper = isInMaxDay ? maxHour : 23;
    const hours = generateColumn(lower, upper, 'hour');
    ret.push(hours.map(v => {
      return {
        label: renderLabel('hour', v),
        value: v.toString()
      };
    }));
  }

  if (rank >= precisionRankRecord.minute) {
    const lower = isInMinHour ? minMinute : 0;
    const upper = isInMaxHour ? maxMinute : 59;
    const minutes = generateColumn(lower, upper, 'minute');
    ret.push(minutes.map(v => {
      return {
        label: renderLabel('minute', v),
        value: v.toString()
      };
    }));
  }

  if (rank >= precisionRankRecord.second) {
    const lower = isInMinMinute ? minSecond : 0;
    const upper = isInMaxMinute ? maxSecond : 59;
    const seconds = generateColumn(lower, upper, 'second');
    ret.push(seconds.map(v => {
      return {
        label: renderLabel('second', v),
        value: v.toString()
      };
    }));
  }

  return ret;
}

function convertDateToStringArray(date) {
  if (!date) return [];
  return [date.getFullYear().toString(), (date.getMonth() + 1).toString(), date.getDate().toString(), date.getHours().toString(), date.getMinutes().toString(), date.getSeconds().toString()];
}

function convertStringArrayToDate(value) {
  var _a, _b, _c, _d, _e, _f;

  const yearString = (_a = value[0]) !== null && _a !== void 0 ? _a : '1900';
  const monthString = (_b = value[1]) !== null && _b !== void 0 ? _b : '1';
  const dateString = (_c = value[2]) !== null && _c !== void 0 ? _c : '1';
  const hourString = (_d = value[3]) !== null && _d !== void 0 ? _d : '0';
  const minuteString = (_e = value[4]) !== null && _e !== void 0 ? _e : '0';
  const secondString = (_f = value[5]) !== null && _f !== void 0 ? _f : '0';
  return new Date(parseInt(yearString), parseInt(monthString) - 1, parseInt(dateString), parseInt(hourString), parseInt(minuteString), parseInt(secondString));
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690194, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDateToStringArray = convertDateToStringArray;
exports.convertStringArrayToDate = convertStringArrayToDate;
exports.defaultRenderLabel = defaultRenderLabel;
exports.generateDatePickerColumns = generateDatePickerColumns;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _isoWeek = _interopRequireDefault(require("dayjs/plugin/isoWeek"));

var _isoWeeksInYear = _interopRequireDefault(require("dayjs/plugin/isoWeeksInYear"));

var _isLeapYear = _interopRequireDefault(require("dayjs/plugin/isLeapYear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs.default.extend(_isoWeek.default);

_dayjs.default.extend(_isoWeeksInYear.default);

_dayjs.default.extend(_isLeapYear.default);

const precisionRankRecord = {
  year: 0,
  week: 1,
  'week-day': 2
};

function defaultRenderLabel(type, data) {
  return data.toString();
}

function generateDatePickerColumns(selected, min, max, precision, renderLabel, filter) {
  const ret = [];
  const minYear = min.getFullYear();
  const maxYear = max.getFullYear();
  const rank = precisionRankRecord[precision];
  const selectedYear = parseInt(selected[0]);
  const isInMinYear = selectedYear === minYear;
  const isInMaxYear = selectedYear === maxYear;
  const minDay = (0, _dayjs.default)(min);
  const maxDay = (0, _dayjs.default)(max);
  const minWeek = minDay.isoWeek();
  const maxWeek = maxDay.isoWeek();
  const minWeekday = minDay.isoWeekday();
  const maxWeekday = maxDay.isoWeekday();
  const selectedWeek = parseInt(selected[1]);
  const isInMinWeek = isInMinYear && selectedWeek === minWeek;
  const isInMaxWeek = isInMaxYear && selectedWeek === maxWeek;
  const selectedYearWeeks = (0, _dayjs.default)(`${selectedYear}-01-01`).isoWeeksInYear();

  const generateColumn = (from, to, precision) => {
    let column = [];

    for (let i = from; i <= to; i++) {
      column.push(i);
    }

    const prefix = selected.slice(0, precisionRankRecord[precision]);
    const currentFilter = filter === null || filter === void 0 ? void 0 : filter[precision];

    if (currentFilter && typeof currentFilter === 'function') {
      column = column.filter(i => currentFilter(i, {
        get date() {
          const stringArray = [...prefix, i.toString()];
          return convertStringArrayToDate(stringArray);
        }

      }));
    }

    return column;
  };

  if (rank >= precisionRankRecord.year) {
    const lower = minYear;
    const upper = maxYear;
    const years = generateColumn(lower, upper, 'year');
    ret.push(years.map(v => {
      return {
        label: renderLabel('year', v),
        value: v.toString()
      };
    }));
  }

  if (rank >= precisionRankRecord.week) {
    const lower = isInMinYear ? minWeek : 1;
    const upper = isInMaxYear ? maxWeek : selectedYearWeeks;
    const weeks = generateColumn(lower, upper, 'week');
    ret.push(weeks.map(v => {
      return {
        label: renderLabel('week', v),
        value: v.toString()
      };
    }));
  }

  if (rank >= precisionRankRecord['week-day']) {
    const lower = isInMinWeek ? minWeekday : 1;
    const upper = isInMaxWeek ? maxWeekday : 7;
    const weeks = generateColumn(lower, upper, 'week-day');
    ret.push(weeks.map(v => {
      return {
        label: renderLabel('week-day', v),
        value: v.toString()
      };
    }));
  }

  return ret;
}

function convertDateToStringArray(date) {
  if (!date) return [];
  const day = (0, _dayjs.default)(date);
  return [day.isoWeekYear().toString(), day.isoWeek().toString(), day.isoWeekday().toString()];
}

function convertStringArrayToDate(value) {
  var _a, _b, _c;

  const yearString = (_a = value[0]) !== null && _a !== void 0 ? _a : '1900';
  const weekString = (_b = value[1]) !== null && _b !== void 0 ? _b : '1';
  const weekdayString = (_c = value[2]) !== null && _c !== void 0 ? _c : '1';
  const day = (0, _dayjs.default)().year(parseInt(yearString)).isoWeek(parseInt(weekString)).isoWeekday(parseInt(weekdayString)).hour(0).minute(0).second(0);
  return day.toDate();
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690195, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prompt = prompt;

var _react = _interopRequireWildcard(require("react"));

var _renderToBody = require("../../utils/render-to-body");

var _datePicker = require("./date-picker");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function prompt(props) {
  return new Promise(resolve => {
    const Wrapper = () => {
      const [visible, setVisible] = (0, _react.useState)(false);
      (0, _react.useEffect)(() => {
        setVisible(true);
      }, []);
      return _react.default.createElement(_datePicker.DatePicker, Object.assign({}, props, {
        visible: visible,
        onConfirm: val => {
          var _a;

          (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, val);
          resolve(val);
        },
        onClose: () => {
          var _a;

          (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
          setVisible(false);
          resolve(null);
        },
        afterClose: () => {
          var _a;

          (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
          unmount();
        }
      }));
    };

    const unmount = (0, _renderToBody.renderToBody)(_react.default.createElement(Wrapper, null));
  });
}
}, function(modId) { var map = {"../../utils/render-to-body":1656641690105,"./date-picker":1656641690191}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690196, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _datePickerView = require("./date-picker-view");

var _default = _datePickerView.DatePickerView;
exports.default = _default;
}, function(modId) { var map = {"./date-picker-view":1656641690197}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690197, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pickerView = _interopRequireDefault(require("../picker-view"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _usePropsValue = require("../../utils/use-props-value");

var _datePickerUtils = require("../date-picker/date-picker-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const thisYear = new Date().getFullYear();
const defaultProps = {
  min: new Date(new Date().setFullYear(thisYear - 10)),
  max: new Date(new Date().setFullYear(thisYear + 10)),
  precision: 'day',
  renderLabel: _datePickerUtils.defaultRenderLabel
};

const DatePickerView = p => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)({
    value: props.value,
    defaultValue: (_a = props.defaultValue) !== null && _a !== void 0 ? _a : null
  });
  const pickerValue = (0, _react.useMemo)(() => (0, _datePickerUtils.convertDateToStringArray)(value, props.precision), [value, props.precision]);
  const onChange = (0, _react.useCallback)(val => {
    var _a;

    const date = (0, _datePickerUtils.convertStringArrayToDate)(val, props.precision);

    if (date) {
      setValue(date);
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, date);
    }
  }, [props.onChange, props.precision]);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement(_pickerView.default, {
    columns: selected => (0, _datePickerUtils.generateDatePickerColumns)(selected, props.min, props.max, props.precision, props.renderLabel, props.filter),
    loading: props.loading,
    loadingContent: props.loadingContent,
    value: pickerValue,
    mouseWheel: props.mouseWheel,
    onChange: onChange
  }));
};

exports.DatePickerView = DatePickerView;
}, function(modId) { var map = {"../picker-view":1656641690142,"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/use-props-value":1656641690123,"../date-picker/date-picker-utils":1656641690192}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690198, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./dialog.css");

var _show = require("./show");

var _alert = require("./alert");

var _confirm = require("./confirm");

var _clear = require("./clear");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _dialog2 = require("./dialog");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_dialog2.Dialog, {
  show: _show.show,
  alert: _alert.alert,
  confirm: _confirm.confirm,
  clear: _clear.clear
});

exports.default = _default;
}, function(modId) { var map = {"./show":1656641690199,"./alert":1656641690208,"./confirm":1656641690209,"./clear":1656641690210,"../../utils/attach-properties-to-component":1656641690083,"./dialog":1656641690200}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690199, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeFnSet = void 0;
exports.show = show;

var _react = _interopRequireDefault(require("react"));

var _dialog = require("./dialog");

var _renderImperatively = require("../../utils/render-imperatively");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const closeFnSet = new Set();
exports.closeFnSet = closeFnSet;

function show(props) {
  const handler = (0, _renderImperatively.renderImperatively)(_react.default.createElement(_dialog.Dialog, Object.assign({}, props, {
    afterClose: () => {
      var _a;

      closeFnSet.delete(handler.close);
      (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  })));
  closeFnSet.add(handler.close);
  return handler;
}
}, function(modId) { var map = {"./dialog":1656641690200,"../../utils/render-imperatively":1656641690104}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690200, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;

var _tslib = require("tslib");

var _react = _interopRequireDefault(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _dialogActionButton = require("./dialog-action-button");

var _image = _interopRequireDefault(require("../image"));

var _autoCenter = _interopRequireDefault(require("../auto-center"));

var _centerPopup = _interopRequireDefault(require("../center-popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultProps = {
  actions: [],
  closeOnAction: false,
  closeOnMaskClick: false,
  getContainer: null
};

const Dialog = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);

  const element = _react.default.createElement(_react.default.Fragment, null, !!props.image && _react.default.createElement("div", {
    className: cls('image-container')
  }, _react.default.createElement(_image.default, {
    src: props.image,
    alt: 'dialog header image',
    width: '100%'
  })), !!props.header && _react.default.createElement("div", {
    className: cls('header')
  }, _react.default.createElement(_autoCenter.default, null, props.header)), !!props.title && _react.default.createElement("div", {
    className: cls('title')
  }, props.title), _react.default.createElement("div", {
    className: (0, _classnames.default)(cls('content'), !props.content && cls('content-empty'))
  }, typeof props.content === 'string' ? _react.default.createElement(_autoCenter.default, null, props.content) : props.content), _react.default.createElement("div", {
    className: cls('footer')
  }, props.actions.map((row, index) => {
    const actions = Array.isArray(row) ? row : [row];
    return _react.default.createElement("div", {
      className: cls('action-row'),
      key: index
    }, actions.map((action, index) => _react.default.createElement(_dialogActionButton.DialogActionButton, {
      key: action.key,
      action: action,
      onAction: () => (0, _tslib.__awaiter)(void 0, void 0, void 0, function* () {
        var _a, _b, _c;

        yield Promise.all([(_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action), (_b = props.onAction) === null || _b === void 0 ? void 0 : _b.call(props, action, index)]);

        if (props.closeOnAction) {
          (_c = props.onClose) === null || _c === void 0 ? void 0 : _c.call(props);
        }
      })
    })));
  })));

  return _react.default.createElement(_centerPopup.default, {
    className: (0, _classnames.default)(cls(), props.className),
    style: props.style,
    afterClose: props.afterClose,
    afterShow: props.afterShow,
    onMaskClick: props.closeOnMaskClick ? () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    } : undefined,
    visible: props.visible,
    getContainer: props.getContainer,
    bodyStyle: props.bodyStyle,
    bodyClassName: (0, _classnames.default)(cls('body'), props.image && cls('with-image'), props.bodyClassName),
    maskStyle: props.maskStyle,
    maskClassName: props.maskClassName,
    stopPropagation: props.stopPropagation,
    disableBodyScroll: props.disableBodyScroll,
    destroyOnClose: props.destroyOnClose,
    forceRender: props.forceRender,
    role: 'dialog',
    "aria-label": props['aria-label']
  }, element);
};

exports.Dialog = Dialog;

function cls(name = '') {
  return 'adm-dialog' + (name && '-') + name;
}
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"./dialog-action-button":1656641690201,"../image":1656641690202,"../auto-center":1656641690107,"../center-popup":1656641690179}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690201, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogActionButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("../button"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DialogActionButton = props => {
  const {
    action
  } = props;
  return (0, _nativeProps.withNativeProps)(props.action, _react.default.createElement(_button.default, {
    key: action.key,
    onClick: props.onAction,
    className: (0, _classnames.default)('adm-dialog-button', {
      'adm-dialog-button-bold': action.bold
    }),
    fill: 'none',
    shape: 'rectangular',
    block: true,
    color: action.danger ? 'danger' : 'primary',
    loading: 'auto',
    disabled: action.disabled
  }, action.text));
};

exports.DialogActionButton = DialogActionButton;
}, function(modId) { var map = {"../button":1656641690114,"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690202, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./image.css");

var _image2 = require("./image");

var _default = _image2.Image;
exports.default = _default;
}, function(modId) { var map = {"./image":1656641690203}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690203, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _withDefaultProps = require("../../utils/with-default-props");

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _stagedComponents = require("staged-components");

var _toCssLength = require("../../utils/to-css-length");

var _lazyDetector = require("./lazy-detector");

var _useIsomorphicUpdateLayoutEffect = require("../../utils/use-isomorphic-update-layout-effect");

var _imageIcon = require("./image-icon");

var _brokenImageIcon = require("./broken-image-icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-image`;
const defaultProps = {
  fit: 'fill',
  placeholder: _react.default.createElement("div", {
    className: `${classPrefix}-tip`
  }, _react.default.createElement(_imageIcon.ImageIcon, null)),
  fallback: _react.default.createElement("div", {
    className: `${classPrefix}-tip`
  }, _react.default.createElement(_brokenImageIcon.BrokenImageIcon, null)),
  lazy: false,
  draggable: false
};
const Image = (0, _stagedComponents.staged)(p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [loaded, setLoaded] = (0, _react.useState)(false);
  const [failed, setFailed] = (0, _react.useState)(false);
  const ref = (0, _react.useRef)(null);
  let src = props.src;
  let srcSet = props.srcSet;
  const [initialized, setInitialized] = (0, _react.useState)(!props.lazy);
  src = initialized ? props.src : undefined;
  srcSet = initialized ? props.srcSet : undefined;
  (0, _useIsomorphicUpdateLayoutEffect.useIsomorphicUpdateLayoutEffect)(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  function renderInner() {
    if (failed) {
      return _react.default.createElement(_react.default.Fragment, null, props.fallback);
    }

    const img = _react.default.createElement("img", {
      className: `${classPrefix}-img`,
      src: src,
      alt: props.alt,
      onClick: props.onClick,
      onLoad: e => {
        var _a;

        setLoaded(true);
        (_a = props.onLoad) === null || _a === void 0 ? void 0 : _a.call(props, e);
      },
      onError: e => {
        var _a;

        setFailed(true);
        (_a = props.onError) === null || _a === void 0 ? void 0 : _a.call(props, e);
      },
      style: {
        objectFit: props.fit,
        display: loaded ? 'block' : 'none'
      },
      crossOrigin: props.crossOrigin,
      decoding: props.decoding,
      loading: props.loading,
      referrerPolicy: props.referrerPolicy,
      sizes: props.sizes,
      srcSet: srcSet,
      useMap: props.useMap,
      draggable: props.draggable
    });

    return _react.default.createElement(_react.default.Fragment, null, !loaded && props.placeholder, img);
  }

  const style = {};

  if (props.width) {
    style['--width'] = (0, _toCssLength.toCSSLength)(props.width);
    style['width'] = (0, _toCssLength.toCSSLength)(props.width);
  }

  if (props.height) {
    style['--height'] = (0, _toCssLength.toCSSLength)(props.height);
    style['height'] = (0, _toCssLength.toCSSLength)(props.height);
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    ref: ref,
    className: classPrefix,
    style: style,
    onClick: props.onContainerClick
  }, props.lazy && !initialized && _react.default.createElement(_lazyDetector.LazyDetector, {
    onActive: () => {
      setInitialized(true);
    }
  }), renderInner()));
});
exports.Image = Image;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/to-css-length":1656641690204,"./lazy-detector":1656641690205,"../../utils/use-isomorphic-update-layout-effect":1656641690131,"./image-icon":1656641690206,"./broken-image-icon":1656641690207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690204, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCSSLength = toCSSLength;

function toCSSLength(val) {
  return typeof val === 'number' ? `${val}px` : val;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690205, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyDetector = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ahooks = require("ahooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const LazyDetector = props => {
  const ref = (0, _react.useRef)(null);
  const [inViewport] = (0, _ahooks.useInViewport)(ref);
  (0, _react.useEffect)(() => {
    if (inViewport) {
      props.onActive();
    }
  }, [inViewport]);
  return _react.default.createElement("div", {
    ref: ref
  });
};

exports.LazyDetector = LazyDetector;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690206, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImageIcon = () => _react.default.createElement("svg", {
  viewBox: '0 0 48 48',
  xmlns: 'http://www.w3.org/2000/svg'
}, _react.default.createElement("path", {
  d: 'M41.396 6.234c1.923 0 3.487 1.574 3.487 3.505v29.14c0 1.937-1.568 3.51-3.491 3.51H6.604c-1.923 0-3.487-1.573-3.487-3.51V9.745c0-1.936 1.564-3.51 3.487-3.51Zm0 2.847H6.604c-.355 0-.654.3-.654.658V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.405 2.405 0 0 1 1.933.752l4.182 4.525 7.58-11.005a2.374 2.374 0 0 1 1.96-1.01c.79 0 1.532.38 1.966 1.01L42.05 34.89V9.74a.664.664 0 0 0-.654-.658Zm-28.305 2.763a3.119 3.119 0 0 1 3.117 3.117 3.119 3.119 0 0 1-3.117 3.117 3.122 3.122 0 0 1-3.117-3.117 3.119 3.119 0 0 1 3.117-3.117Z',
  fill: '#DBDBDB',
  fillRule: 'nonzero'
}));

exports.ImageIcon = ImageIcon;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690207, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrokenImageIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BrokenImageIcon = () => _react.default.createElement("svg", {
  viewBox: '0 0 48 48',
  xmlns: 'http://www.w3.org/2000/svg'
}, _react.default.createElement("path", {
  d: 'M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z',
  fill: '#DBDBDB',
  fillRule: 'nonzero'
}));

exports.BrokenImageIcon = BrokenImageIcon;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690208, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = alert;

var _show = require("./show");

var _withDefaultProps = require("../../utils/with-default-props");

var _configProvider = require("../config-provider");

function alert(p) {
  const defaultProps = {
    confirmText: (0, _configProvider.getDefaultConfig)().locale.Dialog.ok
  };
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  return new Promise(resolve => {
    (0, _show.show)(Object.assign(Object.assign({}, props), {
      closeOnAction: true,
      actions: [{
        key: 'confirm',
        text: props.confirmText
      }],
      onAction: props.onConfirm,
      onClose: () => {
        var _a;

        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
        resolve();
      }
    }));
  });
}
}, function(modId) { var map = {"./show":1656641690199,"../../utils/with-default-props":1656641690086,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690209, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirm = confirm;

var _tslib = require("tslib");

var _show = require("./show");

var _withDefaultProps = require("../../utils/with-default-props");

var _configProvider = require("../config-provider");

const defaultProps = {
  confirmText: '确认',
  cancelText: '取消'
};

function confirm(p) {
  const {
    locale
  } = (0, _configProvider.getDefaultConfig)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, {
    confirmText: locale.common.confirm,
    cancelText: locale.common.cancel
  }, p);
  return new Promise(resolve => {
    (0, _show.show)(Object.assign(Object.assign({}, props), {
      closeOnAction: true,
      onClose: () => {
        var _a;

        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
        resolve(false);
      },
      actions: [[{
        key: 'cancel',
        text: props.cancelText,
        onClick: () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          var _a;

          yield (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
          resolve(false);
        })
      }, {
        key: 'confirm',
        text: props.confirmText,
        bold: true,
        onClick: () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          var _b;

          yield (_b = props.onConfirm) === null || _b === void 0 ? void 0 : _b.call(props);
          resolve(true);
        })
      }]]
    }));
  });
}
}, function(modId) { var map = {"./show":1656641690199,"../../utils/with-default-props":1656641690086,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690210, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;

var _show = require("./show");

function clear() {
  _show.closeFnSet.forEach(close => {
    close();
  });
}
}, function(modId) { var map = {"./show":1656641690199}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690211, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./divider.css");

var _divider2 = require("./divider");

var _default = _divider2.Divider;
exports.default = _default;
}, function(modId) { var map = {"./divider":1656641690212}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690212, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-divider`;
const defaultProps = {
  contentPosition: 'center',
  direction: 'horizontal'
};

const Divider = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-${props.direction}`, `${classPrefix}-${props.contentPosition}`)
  }, props.children && _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, props.children)));
};

exports.Divider = Divider;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690213, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./dropdown.css");

var _dropdown2 = _interopRequireDefault(require("./dropdown"));

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _item = _interopRequireDefault(require("./item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_dropdown2.default, {
  Item: _item.default
});

exports.default = _default;
}, function(modId) { var map = {"./dropdown":1656641690214,"../../utils/attach-properties-to-component":1656641690083,"./item":1656641690215}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690214, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ahooks = require("ahooks");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _popup = _interopRequireDefault(require("../popup"));

var _item = require("./item");

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _usePropsValue = require("../../utils/use-props-value");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-dropdown`;
const defaultProps = {
  defaultActiveKey: null,
  closeOnMaskClick: true,
  closeOnClickAway: false
};
const Dropdown = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey,
    onChange: props.onChange
  });
  const navRef = (0, _react.useRef)(null);
  const contentRef = (0, _react.useRef)(null); // 点击外部区域，关闭

  (0, _ahooks.useClickAway)(() => {
    if (!props.closeOnClickAway) return;
    setValue(null);
  }, [navRef, contentRef]); // 计算 navs 的 top 值

  const [top, setTop] = (0, _react.useState)();
  const containerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const container = containerRef.current;
    if (!container) return;

    if (value) {
      const rect = container.getBoundingClientRect();
      setTop(rect.bottom);
    }
  }, [value]);

  const changeActive = key => {
    if (value === key) {
      setValue(null);
    } else {
      setValue(key);
    }
  };

  let popupForceRender = false;
  const items = [];

  const navs = _react.default.Children.map(props.children, child => {
    if (_react.default.isValidElement(child)) {
      const childProps = Object.assign(Object.assign({}, child.props), {
        onClick: () => {
          changeActive(child.key);
        },
        active: child.key === value,
        arrow: child.props.arrow === undefined ? props.arrow : child.props.arrow
      });
      items.push(child);
      if (child.props.forceRender) popupForceRender = true;
      return (0, _react.cloneElement)(child, childProps);
    } else {
      return child;
    }
  });

  (0, _react.useImperativeHandle)(ref, () => ({
    close: () => {
      setValue(null);
    }
  }), [setValue]);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-open`]: !!value
    }),
    ref: containerRef
  }, _react.default.createElement("div", {
    className: `${classPrefix}-nav`,
    ref: navRef
  }, navs), _react.default.createElement(_popup.default, {
    visible: !!value,
    position: 'top',
    className: `${classPrefix}-popup`,
    maskClassName: `${classPrefix}-popup-mask`,
    bodyClassName: `${classPrefix}-popup-body`,
    style: {
      top
    },
    forceRender: popupForceRender,
    onMaskClick: props.closeOnMaskClick ? () => {
      changeActive(null);
    } : undefined
  }, _react.default.createElement("div", {
    ref: contentRef
  }, items.map(item => {
    const isActive = item.key === value;
    return _react.default.createElement(_item.ItemChildrenWrap, {
      key: item.key,
      active: isActive,
      forceRender: item.props.forceRender,
      destroyOnClose: item.props.destroyOnClose
    }, item.props.children);
  })))));
});
var _default = Dropdown;
exports.default = _default;
}, function(modId) { var map = {"../popup":1656641690087,"./item":1656641690215,"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/use-props-value":1656641690123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690215, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ItemChildrenWrap = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _shouldRender = require("../../utils/should-render");

var _antdMobileIcons = require("antd-mobile-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-dropdown-item`;

const Item = props => {
  var _a;

  const cls = (0, _classnames.default)(classPrefix, {
    [`${classPrefix}-active`]: props.active,
    [`${classPrefix}-highlight`]: (_a = props.highlight) !== null && _a !== void 0 ? _a : props.active
  });
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: cls,
    onClick: props.onClick
  }, _react.default.createElement("div", {
    className: `${classPrefix}-title`
  }, _react.default.createElement("span", {
    className: `${classPrefix}-title-text`
  }, props.title), _react.default.createElement("span", {
    className: (0, _classnames.default)(`${classPrefix}-title-arrow`, {
      [`${classPrefix}-title-arrow-active`]: props.active
    })
  }, props.arrow === undefined ? _react.default.createElement(_antdMobileIcons.DownFill, null) : props.arrow))));
};

var _default = Item;
exports.default = _default;

const ItemChildrenWrap = props => {
  const {
    active = false
  } = props;
  const shouldRender = (0, _shouldRender.useShouldRender)(active, props.forceRender, props.destroyOnClose);
  const cls = (0, _classnames.default)(`${classPrefix}-content`, {
    [`${classPrefix}-content-hidden`]: !active
  });
  return shouldRender ? _react.default.createElement("div", {
    className: cls,
    onClick: props.onClick
  }, props.children) : null;
};

exports.ItemChildrenWrap = ItemChildrenWrap;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/should-render":1656641690097}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690216, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./ellipsis.css");

var _ellipsis2 = require("./ellipsis");

var _default = _ellipsis2.Ellipsis;
exports.default = _default;
}, function(modId) { var map = {"./ellipsis":1656641690217}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690217, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ellipsis = void 0;

var _react = _interopRequireWildcard(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _useResizeEffect = require("../../utils/use-resize-effect");

var _ahooks = require("ahooks");

var _withStopPropagation = require("../../utils/with-stop-propagation");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-ellipsis`;
const defaultProps = {
  direction: 'end',
  rows: 1,
  expandText: '',
  collapseText: '',
  stopPropagationForActionButtons: [],
  onContentClick: () => {}
};

const Ellipsis = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const rootRef = (0, _react.useRef)(null);
  const [ellipsised, setEllipsised] = (0, _react.useState)({});
  const [expanded, setExpanded] = (0, _react.useState)(false);
  const [exceeded, setExceeded] = (0, _react.useState)(false);

  function calcEllipsised() {
    const root = rootRef.current;
    if (!root) return;
    const originStyle = window.getComputedStyle(root);
    const container = document.createElement('div');
    const styleNames = Array.prototype.slice.apply(originStyle);
    styleNames.forEach(name => {
      container.style.setProperty(name, originStyle.getPropertyValue(name));
    });
    container.style.position = 'fixed';
    container.style.left = '999999px';
    container.style.top = '999999px';
    container.style.zIndex = '-1000';
    container.style.height = 'auto';
    container.style.minHeight = 'auto';
    container.style.maxHeight = 'auto';
    container.style.textOverflow = 'clip';
    container.style.whiteSpace = 'normal';
    container.style.webkitLineClamp = 'unset';
    container.style.display = 'block';
    const lineHeight = pxToNumber(originStyle.lineHeight);
    const maxHeight = Math.floor(lineHeight * (props.rows + 0.5) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
    container.innerText = props.content;
    document.body.appendChild(container);

    if (container.offsetHeight <= maxHeight) {
      setExceeded(false);
    } else {
      setExceeded(true);
      const end = props.content.length;
      const actionText = expanded ? props.collapseText : props.expandText;

      function check(left, right) {
        if (right - left <= 1) {
          if (props.direction === 'end') {
            return {
              leading: props.content.slice(0, left) + '...'
            };
          } else {
            return {
              tailing: '...' + props.content.slice(right, end)
            };
          }
        }

        const middle = Math.round((left + right) / 2);

        if (props.direction === 'end') {
          container.innerText = props.content.slice(0, middle) + '...' + actionText;
        } else {
          container.innerText = actionText + '...' + props.content.slice(middle, end);
        }

        if (container.offsetHeight <= maxHeight) {
          if (props.direction === 'end') {
            return check(middle, right);
          } else {
            return check(left, middle);
          }
        } else {
          if (props.direction === 'end') {
            return check(left, middle);
          } else {
            return check(middle, right);
          }
        }
      }

      function checkMiddle(leftPart, rightPart) {
        if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
          return {
            leading: props.content.slice(0, leftPart[0]) + '...',
            tailing: '...' + props.content.slice(rightPart[1], end)
          };
        }

        const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
        const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);
        container.innerText = props.content.slice(0, leftPartMiddle) + '...' + actionText + '...' + props.content.slice(rightPartMiddle, end);

        if (container.offsetHeight <= maxHeight) {
          return checkMiddle([leftPartMiddle, leftPart[1]], [rightPart[0], rightPartMiddle]);
        } else {
          return checkMiddle([leftPart[0], leftPartMiddle], [rightPartMiddle, rightPart[1]]);
        }
      }

      const middle = Math.floor((0 + end) / 2);
      const ellipsised = props.direction === 'middle' ? checkMiddle([0, middle], [middle, end]) : check(0, end);
      setEllipsised(ellipsised);
    }

    document.body.removeChild(container);
  }

  (0, _useResizeEffect.useResizeEffect)(calcEllipsised, rootRef);
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    calcEllipsised();
  }, [props.content, props.direction, props.rows, props.expandText, props.collapseText]);
  const expandActionElement = exceeded && props.expandText ? (0, _withStopPropagation.withStopPropagation)(props.stopPropagationForActionButtons, _react.default.createElement("a", {
    onClick: () => {
      setExpanded(true);
    }
  }, props.expandText)) : null;
  const collapseActionElement = exceeded && props.expandText ? (0, _withStopPropagation.withStopPropagation)(props.stopPropagationForActionButtons, _react.default.createElement("a", {
    onClick: () => {
      setExpanded(false);
    }
  }, props.collapseText)) : null;

  const renderContent = () => {
    if (!exceeded) {
      return props.content;
    }

    if (expanded) {
      return _react.default.createElement(_react.default.Fragment, null, props.content, collapseActionElement);
    } else {
      return _react.default.createElement(_react.default.Fragment, null, ellipsised.leading, expandActionElement, ellipsised.tailing);
    }
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    ref: rootRef,
    className: classPrefix,
    onClick: e => {
      if (e.target === e.currentTarget) {
        props.onContentClick(e);
      }
    }
  }, renderContent()));
};

exports.Ellipsis = Ellipsis;

function pxToNumber(value) {
  if (!value) return 0;
  const match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/use-resize-effect":1656641690127,"../../utils/with-stop-propagation":1656641690099}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690218, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./empty.css");

var _empty2 = require("./empty");

var _default = _empty2.Empty;
exports.default = _default;
}, function(modId) { var map = {"./empty":1656641690219}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690219, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

var _emptyIcon = require("./empty-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-empty`;

const Empty = props => {
  function renderImageNode() {
    const {
      image
    } = props;

    if (image === undefined) {
      return _react.default.createElement(_emptyIcon.EmptyIcon, {
        className: `${classPrefix}-image`,
        style: props.imageStyle
      });
    }

    if (typeof image === 'string') {
      return _react.default.createElement("img", {
        className: `${classPrefix}-image`,
        style: props.imageStyle,
        src: image,
        alt: 'empty'
      });
    }

    return image;
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-image-container`
  }, renderImageNode()), props.description && _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-description`)
  }, props.description)));
};

exports.Empty = Empty;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"./empty-icon":1656641690220}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690220, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EmptyIcon = props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("svg", {
    viewBox: '0 0 64 41'
  }, _react.default.createElement("g", {
    transform: 'translate(0 1)',
    fill: 'none',
    fillRule: 'evenodd'
  }, _react.default.createElement("ellipse", {
    fill: '#f5f5f5',
    cx: '32',
    cy: '33',
    rx: '32',
    ry: '7'
  }), _react.default.createElement("g", {
    stroke: '#d9d9d9'
  }, _react.default.createElement("path", {
    d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z'
  }), _react.default.createElement("path", {
    d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
    fill: '#fafafa'
  })))));
};

exports.EmptyIcon = EmptyIcon;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690221, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createErrorBlock", {
  enumerable: true,
  get: function () {
    return _createErrorBlock.createErrorBlock;
  }
});
exports.default = void 0;

require("./error-block.css");

var _errorBlock2 = require("./error-block");

var _createErrorBlock = require("./create-error-block");

var _default = _errorBlock2.ErrorBlock;
exports.default = _default;
}, function(modId) { var map = {"./error-block":1656641690222,"./create-error-block":1656641690223}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690222, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBlock = void 0;

var _createErrorBlock = require("./create-error-block");

var _images = require("./images");

const imageRecord = {
  'default': _images.defaultImage,
  'disconnected': _images.disconnectedImage,
  'empty': _images.emptyImage,
  'busy': _images.busyImage
};
const ErrorBlock = (0, _createErrorBlock.createErrorBlock)(imageRecord);
exports.ErrorBlock = ErrorBlock;
}, function(modId) { var map = {"./create-error-block":1656641690223,"./images":1656641690224}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690223, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createErrorBlock = createErrorBlock;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-error-block`;
const defaultProps = {
  status: 'default'
};

function createErrorBlock(imageRecord) {
  const ErrorBlock = p => {
    var _a;

    const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
    const {
      locale
    } = (0, _configProvider.useConfig)();
    const contentPack = locale.ErrorBlock[props.status];
    const des = 'description' in props ? props.description : contentPack.description;
    const title = 'title' in props ? props.title : contentPack.title;
    const image = (_a = props.image) !== null && _a !== void 0 ? _a : imageRecord[props.status];
    const imageNode = typeof image === 'string' ? _react.default.createElement("img", {
      src: image,
      alt: 'error block image'
    }) : image;
    return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
      className: (0, _classnames.default)(classPrefix, {
        [`${classPrefix}-full-page`]: props.fullPage
      })
    }, _react.default.createElement("div", {
      className: `${classPrefix}-image`
    }, imageNode), _react.default.createElement("div", {
      className: `${classPrefix}-description`
    }, title && _react.default.createElement("div", {
      className: `${classPrefix}-description-title`
    }, title), des && _react.default.createElement("div", {
      className: `${classPrefix}-description-subtitle`
    }, des)), props.children && _react.default.createElement("div", {
      className: `${classPrefix}-content`
    }, props.children)));
  };

  return ErrorBlock;
}
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690224, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "busyImage", {
  enumerable: true,
  get: function () {
    return _busy.busyImage;
  }
});
Object.defineProperty(exports, "defaultImage", {
  enumerable: true,
  get: function () {
    return _default.defaultImage;
  }
});
Object.defineProperty(exports, "disconnectedImage", {
  enumerable: true,
  get: function () {
    return _disconnected.disconnectedImage;
  }
});
Object.defineProperty(exports, "emptyImage", {
  enumerable: true,
  get: function () {
    return _empty.emptyImage;
  }
});

var _default = require("./default");

var _disconnected = require("./disconnected");

var _empty = require("./empty");

var _busy = require("./busy");
}, function(modId) { var map = {"./default":1656641690225,"./disconnected":1656641690226,"./empty":1656641690227,"./busy":1656641690228}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690225, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultImage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultImage = _react.default.createElement("svg", {
  viewBox: '0 0 200 200',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
  x1: '50%',
  y1: '-116.862%',
  x2: '50%',
  y2: '90.764%',
  id: 'error-block-image-default-a'
}, _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0.207,
  offset: '0%'
}), _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0.115,
  offset: '80.072%'
}), _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0,
  offset: '100%'
})), _react.default.createElement("circle", {
  id: 'error-block-image-default-d',
  cx: 18.823,
  cy: 18.823,
  r: 18.823
}), _react.default.createElement("rect", {
  id: 'error-block-image-default-b',
  x: 3.5,
  y: 9,
  width: 51.429,
  height: 88,
  rx: 4.571
})), _react.default.createElement("g", {
  fill: 'none',
  fillRule: 'evenodd'
}, _react.default.createElement("path", {
  d: 'M73.557.004c19.435-.311 38.696 17.016 51.523 35.287 8.708-10.822 17.127-16.233 25.255-16.233 13.333 0 28.35 14.274 45.053 42.822 1.769 3.024-3.582 7.435-16.054 13.231l-41.322 1.37c-7.343 5.872-31.225.626-69.152 1.234-27.79.445-45.759-1.234-53.908-5.037C3.2 71.143-1.625 68.686.48 65.308 27.371 22.12 51.73.353 73.557.003Zm93.098 49.53a1.125 1.125 0 0 0-.401.072l-.058.023-.07.03-.028.014-.02.01c-.03.015-.059.032-.088.049a2.543 2.543 0 0 0-.568.477l-.067.074c-1.686 1.931-2.904 7.062-2.904 8.985 0 2.283 1.719 4.153 3.898 4.314l.026.001v3.805c0 .39.25.705.56.705.31 0 .56-.316.56-.705l.001-3.88c1.92-.402 3.363-2.148 3.363-4.24 0-2.39-1.882-9.734-4.204-9.734Zm-100-5a1.125 1.125 0 0 0-.331.05l-.035.01-.035.012-.058.023-.07.03-.028.014-.02.01c-.03.015-.059.032-.088.049a2.543 2.543 0 0 0-.568.477l-.067.074c-1.686 1.931-2.904 7.062-2.904 8.985 0 2.212 1.613 4.036 3.695 4.294l.203.02.026.001v3.805c0 .39.25.705.56.705.282 0 .515-.26.555-.6l.006-.105v-3.88c1.92-.402 3.363-2.148 3.363-4.24 0-2.39-1.882-9.734-4.204-9.734ZM52.64 38.348l-.15.008-.149.023-.032.007-.032.008-.078.022-.045.015-.045.016-.06.023-.038.017-.038.017-.058.028-.022.011a2.201 2.201 0 0 0-.323.204l-.05.038-.05.04-.025.02-.025.021a3.742 3.742 0 0 0-.31.294l-.036.04c-.035.037-.07.076-.105.116-.01.012-.02.025-.031.036a3.275 3.275 0 0 0-.081.098l-.063.078c-2.031 2.583-3.48 8.692-3.48 11.027 0 2.636 1.846 4.832 4.292 5.323l.224.04-.064-.012.105.018.103.014v4.618c0 .47.299.85.667.85.337 0 .615-.32.659-.735l.006-.115v-4.618c.18-.023.355-.054.527-.094l.256-.067.196-.06c2.136-.706 3.68-2.75 3.68-5.162 0-2.996-2.383-12.207-5.325-12.207Z',
  transform: 'translate(2.286 22.286)',
  fill: 'url(#error-block-image-default-a)'
}), _react.default.createElement("g", {
  transform: 'rotate(-90 102.429 55.357)'
}, _react.default.createElement("path", {
  d: 'M6.857 0H52a6.857 6.857 0 0 1 6.857 6.857v92A6.857 6.857 0 0 1 52 105.714H6.857A6.857 6.857 0 0 1 0 98.857v-92A6.857 6.857 0 0 1 6.857 0Z',
  fill: '#7EACFF'
}), _react.default.createElement("mask", {
  id: 'error-block-image-default-c',
  fill: '#fff'
}, _react.default.createElement("use", {
  xlinkHref: '#error-block-image-default-b'
})), _react.default.createElement("use", {
  fill: '#377EFF',
  xlinkHref: '#error-block-image-default-b'
}), _react.default.createElement("path", {
  d: 'M11.838 91.8a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.628-.652c0-.36.281-.651.628-.651Zm-2.858 0a.64.64 0 0 1 .628.652.64.64 0 0 1-.628.652.64.64 0 0 1-.627-.652c0-.36.281-.651.627-.651Zm2.16-2.305a.64.64 0 0 1 .628.652.64.64 0 0 1-.627.651.64.64 0 0 1-.627-.651c0-.36.28-.652.627-.652Zm-2.982-.04a.64.64 0 0 1 .627.651.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.651.627-.651Zm5.268-.531a.64.64 0 0 1 .628.651.64.64 0 0 1-.628.652.64.64 0 0 1-.627-.652c0-.36.281-.651.627-.651Zm2.858-1.143a.64.64 0 0 1 .627.651.64.64 0 0 1-.627.652.64.64 0 0 1-.628-.652c0-.36.281-.651.628-.651Zm-6.37-.917c.209 0 .377.175.377.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm3.512-.798.093.007a.644.644 0 0 1 .535.645.64.64 0 0 1-.628.652.64.64 0 0 1-.627-.652c0-.36.281-.652.627-.652Zm5.715 0a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.652.627-.652Zm-11.429 0a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.652.627-.652Zm-3.261.241c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.377-.391c0-.216.169-.391.377-.391Zm11.833-.812a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.651.64.64 0 0 1-.628-.651c0-.36.281-.652.628-.652Zm-4.851.399c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.377-.391c0-.216.169-.391.377-.391Zm10.313-2.056a.64.64 0 0 1 .628.652.64.64 0 0 1-.628.651.64.64 0 0 1-.627-.651c0-.36.281-.652.627-.652Zm-2.354-.128a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.628-.652c0-.36.281-.652.628-.652Zm-13.798.311c.207 0 .376.175.376.391a.384.384 0 0 1-.376.391.384.384 0 0 1-.377-.39c0-.217.169-.392.377-.392Zm11.832-.812a.64.64 0 0 1 .628.652.64.64 0 0 1-.628.651.64.64 0 0 1-.627-.651c0-.36.281-.652.627-.652Zm-6.285 0a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.651.64.64 0 0 1-.627-.651c0-.36.28-.652.627-.652Zm3.428 0a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.651.64.64 0 0 1-.627-.651c0-.36.28-.652.627-.652Zm-6.118.24c.208 0 .376.176.376.392a.384.384 0 0 1-.376.39.384.384 0 0 1-.377-.39c0-.216.169-.391.377-.391Zm11.261-2.525a.64.64 0 0 1 .627.651.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.651.627-.651Zm-3.557.484c.208 0 .376.175.376.391a.384.384 0 0 1-.376.391.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm-2.478-.555a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.652.627-.652Zm-3.512-.26c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm-2.857 0c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm-4.571 0c.207 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.377-.391c0-.216.169-.391.377-.391Zm14.898-1.835a.64.64 0 0 1 .628.652.64.64 0 0 1-.628.651.64.64 0 0 1-.627-.651c0-.36.281-.652.627-.652Zm-8.027-.245c.208 0 .377.175.377.39a.384.384 0 0 1-.377.392.384.384 0 0 1-.376-.391c0-.216.169-.391.376-.391Zm6.271-1.349c.208 0 .377.175.377.391a.384.384 0 0 1-.377.391.384.384 0 0 1-.376-.39c0-.217.169-.392.376-.392Zm-11.484-.481c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm15.103-.972c.208 0 .376.175.376.391a.384.384 0 0 1-.376.391.384.384 0 0 1-.376-.39c0-.217.168-.392.376-.392Zm-9.333-1.404c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm-6.819-.405c.208 0 .377.175.377.39a.384.384 0 0 1-.377.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Z',
  fill: '#003CFF',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-c)',
  transform: 'rotate(116 12.367 83.503)'
}), _react.default.createElement("path", {
  stroke: '#FFF',
  strokeWidth: 0.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  d: 'M36.774 5.474H21.523'
}), _react.default.createElement("path", {
  d: 'm67.818 94.025-4.996 3.913m4.996 11.91-4.996-3.912m-1.142 9.145-1.143-6.288m10.71-6.768h-7.262',
  stroke: '#4486FE',
  strokeWidth: 0.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
})), _react.default.createElement("circle", {
  cx: 8.571,
  cy: 8.571,
  r: 8.571,
  transform: 'translate(22.857 142)',
  fill: '#FFCD6B',
  fillRule: 'nonzero'
}), _react.default.createElement("g", {
  transform: 'translate(132.857 124)'
}, _react.default.createElement("mask", {
  id: 'error-block-image-default-e',
  fill: '#fff'
}, _react.default.createElement("use", {
  xlinkHref: '#error-block-image-default-d'
})), _react.default.createElement("use", {
  fill: '#FBBE47',
  fillRule: 'nonzero',
  xlinkHref: '#error-block-image-default-d'
}), _react.default.createElement("circle", {
  fill: '#FFCD6B',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 13.886,
  cy: 15.12,
  r: 18.823
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 23.4,
  cy: 29.057,
  r: 1
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 30.343,
  cy: 29.829,
  r: 1
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 18.771,
  cy: 32.657,
  r: 1.286
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 29.571,
  cy: 25.971,
  r: 1.286
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 19.286,
  cy: 7.971,
  r: 1.286
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 26.486,
  cy: 5.914,
  r: 1.286
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 11.057,
  cy: 6.943,
  r: 1
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 30.086,
  cy: 15.686,
  r: 1.286
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-default-e)',
  cx: 22.886,
  cy: 14.657,
  r: 1
})), _react.default.createElement("path", {
  d: 'm87.429 135.123 6.591-9.378v-.08h-5.99v-2.559h10.038v1.787l-6.44 9.254v.082h6.56v2.557h-10.76v-1.663Zm12.185-5.889 4.948-7.047v-.056h-4.498v-1.917h7.536v1.34l-4.849 6.942v.059h4.923v1.92h-8.06v-1.24Zm10.345.702 3.708-5.274v-.045h-3.372v-1.437h5.648v1.003l-3.628 5.206v.045H116v1.438h-6.041v-.936Z',
  fill: '#FFF',
  fillRule: 'nonzero'
})));

exports.defaultImage = defaultImage;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690226, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnectedImage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const disconnectedImage = _react.default.createElement("svg", {
  viewBox: '0 0 400 400',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}, _react.default.createElement("title", null, '@\u53CD\u9988/\u5F02\u5E38/\u7F51\u7EDC\u670D\u52A1\u5F02\u5E38'), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
  x1: '50%',
  y1: '-116.862%',
  x2: '50%',
  y2: '90.764%',
  id: 'error-block-image-disconnected-c'
}, _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0.207,
  offset: '0%'
}), _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0.115,
  offset: '80.072%'
}), _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0,
  offset: '100%'
})), _react.default.createElement("circle", {
  id: 'error-block-image-disconnected-d',
  cx: 22.309,
  cy: 22.309,
  r: 22.309
}), _react.default.createElement("path", {
  id: 'error-block-image-disconnected-a',
  d: 'M0 0h400v400H0z'
})), _react.default.createElement("g", {
  fill: 'none',
  fillRule: 'evenodd'
}, _react.default.createElement("mask", {
  id: 'error-block-image-disconnected-b',
  fill: '#fff'
}, _react.default.createElement("use", {
  xlinkHref: '#error-block-image-disconnected-a'
})), _react.default.createElement("g", {
  mask: 'url(#error-block-image-disconnected-b)',
  fill: 'url(#error-block-image-disconnected-c)'
}, _react.default.createElement("path", {
  d: 'M151.686 45.58c38.869-.623 77.391 34.03 103.046 70.573 17.416-21.644 34.253-32.465 50.51-32.465 26.666 0 56.701 28.548 90.105 85.643 3.539 6.05-7.164 14.87-32.107 26.462l-82.643 2.741c-14.686 11.745-62.45 1.252-138.305 2.467-55.58.89-91.518-2.468-107.816-10.074-23.505-3.07-33.154-7.983-28.946-14.74C59.313 89.813 108.03 46.278 151.686 45.58Zm186.195 99.06-.127.003-.126.01a2.32 2.32 0 0 0-.465.103l-.032.01-.031.01a2.364 2.364 0 0 0-.181.071 2.52 2.52 0 0 0-.116.054l-.133.067-.042.024-.036.02a2.946 2.946 0 0 0-.133.08l-.048.03a3.052 3.052 0 0 0-.126.087l-.047.033a3.274 3.274 0 0 0-.128.097c-.01.008-.02.017-.031.024a4.906 4.906 0 0 0-.31.27l-.036.032a6.654 6.654 0 0 0-.46.484l-.045.05c-3.344 3.91-5.755 14.083-5.755 17.908 0 4.547 3.409 8.275 7.74 8.625l.108.008v7.608c0 .779.502 1.41 1.121 1.41.62 0 1.121-.632 1.121-1.41v-7.762c3.838-.802 6.727-4.293 6.727-8.48 0-4.778-3.765-19.467-8.409-19.467Zm-200-10-.127.003-.126.01a2.32 2.32 0 0 0-.368.073l-.049.014-.048.016-.032.01-.031.01a2.364 2.364 0 0 0-.181.071l-.058.026-.058.028-.133.067-.042.024-.036.02-.066.039-.067.041-.048.03a3.052 3.052 0 0 0-.126.087l-.047.033a3.274 3.274 0 0 0-.128.097c-.01.008-.02.017-.031.024l-.156.13-.154.14-.036.032a6.654 6.654 0 0 0-.46.484l-.045.05c-3.344 3.91-5.755 14.083-5.755 17.908 0 4.547 3.409 8.275 7.74 8.625l.054.004.054.004v7.608c0 .779.502 1.41 1.121 1.41.58 0 1.058-.556 1.115-1.266l.006-.144v-7.762c3.838-.802 6.727-4.293 6.727-8.48 0-4.778-3.765-19.467-8.409-19.467Zm-28.029-12.373-.107.002-.106.006a2.978 2.978 0 0 0-.551.095 3.444 3.444 0 0 0-.323.104 3.962 3.962 0 0 0-.61.297c-.076.045-.15.092-.226.141-4.964 3.312-8.728 18.445-8.728 23.77 0 5.434 3.922 9.935 9.04 10.726l.28.04v9.236c0 .886.532 1.614 1.21 1.692l.121.007.122-.007c.638-.074 1.147-.723 1.204-1.538l.006-.155v-9.235c5.254-.668 9.32-5.234 9.32-10.767 0-5.993-4.77-24.414-10.652-24.414Z'
})), _react.default.createElement("g", {
  mask: 'url(#error-block-image-disconnected-b)'
}, _react.default.createElement("g", {
  transform: 'translate(85.858 150.644)'
}, _react.default.createElement("path", {
  d: 'M116.26 28.467c1.352 0 2.703.018 4.054.054 3.923.385 10.188 4.248 9.267 11.061-.878 6.496-5.836 9.089-8.962 9.529a130.762 130.762 0 0 0-4.36-.072c-28.567 0-60.654 10.149-96.22 30.676l-2.227 1.297c-.744.437-1.49.878-2.236 1.323-4.878 2.911-11.193 1.316-14.103-3.562C-1.438 73.894.157 67.58 5.035 64.67 45.34 40.62 82.4 28.467 116.26 28.467Zm22 11.63c1.03-5.942 6.376-8.618 11.084-8.08C172.14 36.91 194.83 46.86 217.37 61.794c4.735 3.138 6.03 9.52 2.893 14.255-3.138 4.736-9.52 6.031-14.256 2.893-20.111-13.325-40.075-22.165-59.935-26.584a9.974 9.974 0 0 0-.325-.088c-3.987-1.015-8.602-5.738-7.487-12.175ZM116.26 77.418c22.777 0 45.4 7.057 67.73 20.988 4.82 3.007 6.289 9.351 3.282 14.17-3.007 4.82-9.351 6.29-14.17 3.283-19.194-11.974-38.095-17.87-56.842-17.87s-37.648 5.896-56.842 17.87c-4.82 3.007-11.164 1.537-14.17-3.282-3.007-4.82-1.538-11.164 3.282-14.171 22.33-13.931 44.953-20.988 67.73-20.988ZM117.974 124.67c9.85 0 17.303 1.69 25.687 5.082l.82.337 2.9 1.231 3.008 1.252.77.305.107.04c5.326 1.976 8.042 7.895 6.066 13.221-1.976 5.326-7.895 8.042-13.221 6.067l-.713-.27-.726-.285-.763-.31-1.263-.527-2.944-1.26-1.125-.473c-6.393-2.648-11.433-3.838-18.603-3.838-8.223 0-16.532 2.126-25.028 6.475-5.056 2.588-11.254.587-13.842-4.47-2.589-5.056-.588-11.253 4.47-13.842 11.313-5.791 22.814-8.735 34.4-8.735ZM118.235 197.047c7.15 0 13.77-.897 19.841-2.721 5.44-1.635 8.526-7.37 6.892-12.81-1.635-5.44-7.37-8.526-12.81-6.892-4.072 1.224-8.707 1.851-13.923 1.851-4.36 0-8.79-1.045-13.373-3.21l-.626-.301c-5.095-2.512-11.262-.418-13.773 4.678-2.512 5.095-.418 11.261 4.678 13.773 7.559 3.727 15.288 5.632 23.094 5.632Z',
  fill: '#377EFF',
  fillRule: 'nonzero'
}), _react.default.createElement("path", {
  d: 'M198.35 62.413c2.755-4.967 9.016-6.76 13.984-4.004 13.068 7.25 19.124 18.535 17.615 30.952-1.157 9.515-6.83 18.757-14.096 24.352-13.364 10.29-34.915 9.401-49.363-1.91-4.472-3.502-5.26-9.967-1.758-14.44 3.436-4.388 9.724-5.229 14.185-1.952l.255.194c7.283 5.702 18.475 6.164 24.13 1.809 3.072-2.366 5.766-6.754 6.226-10.536.467-3.844-1.21-7.07-6.796-10.267l-.378-.213c-4.967-2.756-6.76-9.017-4.004-13.985ZM61.35 103.092c-2.84-4.92-9.13-6.607-14.05-3.768-20.662 11.922-21.772 35.751-6.018 51.69 13.752 13.914 33.192 13.447 50.507 1.158 4.633-3.288 5.723-9.708 2.436-14.34-3.288-4.633-9.709-5.724-14.341-2.436-9.763 6.928-18.07 7.128-23.97 1.158-6.761-6.84-6.498-14.501 1.35-19.225l.317-.187c4.92-2.84 6.608-9.13 3.769-14.05ZM129.103 135.702c1.688-5.424 7.454-8.453 12.878-6.764 14.776 4.599 23.437 13.727 25.259 25.58 1.316 8.561-1.228 17.533-5.58 24.052-3.132 4.688-7.388 8.287-12.504 11.112-3.03 1.673-5.75 2.811-9.37 4.066l-1.4.477c-5.387 1.806-11.217-1.097-13.022-6.484-1.805-5.386 1.098-11.216 6.484-13.02l1.09-.374c6.032-2.112 9.602-4.19 11.613-7.201 1.693-2.535 2.818-6.502 2.356-9.503-.564-3.673-3.432-6.696-11.04-9.063-5.424-1.689-8.452-7.454-6.764-12.878Z',
  fill: '#377EFF',
  fillRule: 'nonzero'
}), _react.default.createElement("path", {
  d: 'M148.072 181.58c3.718-7.98 4.172-14.9 1.36-20.76-2.81-5.86-6.236-9.096-10.275-9.707',
  stroke: '#FFF',
  strokeWidth: 0.571,
  strokeLinecap: 'round'
}), _react.default.createElement("ellipse", {
  fill: '#7EACFF',
  transform: 'rotate(10 147 41.933)',
  cx: 147,
  cy: 41.933,
  rx: 9.143,
  ry: 10.286
}), _react.default.createElement("path", {
  d: 'M210.422 107.472c3.718-7.98 4.172-14.9 1.36-20.76-2.81-5.86-6.668-9.883-11.572-12.067M51.604 131.769c-3.15-6.8-3.537-12.694-1.161-17.685 2.376-4.99 5.57-8.136 9.583-9.438',
  stroke: '#003CFF',
  strokeWidth: 0.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}), _react.default.createElement("path", {
  d: 'M21.53 64.408c4.946-3.389 9.817-6.026 14.612-7.912',
  stroke: '#FFF',
  strokeWidth: 0.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}), _react.default.createElement("path", {
  d: 'm113.243 15.444 9.588 8.314M144.31 9.405l-5.775 11.3m18.389-1.246-11.907 4.643M127.64 5.66l2.77 14.255',
  stroke: '#4486FE',
  strokeWidth: 0.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}))), _react.default.createElement("g", {
  mask: 'url(#error-block-image-disconnected-b)'
}, _react.default.createElement("g", {
  transform: 'translate(275.143 302.571)'
}, _react.default.createElement("mask", {
  id: 'error-block-image-disconnected-e',
  fill: '#fff'
}, _react.default.createElement("use", {
  xlinkHref: '#error-block-image-disconnected-d'
})), _react.default.createElement("use", {
  fill: '#FBBE47',
  fillRule: 'nonzero',
  xlinkHref: '#error-block-image-disconnected-d'
}), _react.default.createElement("circle", {
  fill: '#FFCD6B',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-disconnected-e)',
  cx: 16.457,
  cy: 17.92,
  r: 22.309
}), _react.default.createElement("circle", {
  fill: '#FFF',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-disconnected-e)',
  cx: 14.263,
  cy: 12.069,
  r: 2.194
}))), _react.default.createElement("g", {
  mask: 'url(#error-block-image-disconnected-b)',
  fill: '#FBBE47',
  fillRule: 'nonzero'
}, _react.default.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 12,
  transform: 'translate(84 297.714)'
}))));

exports.disconnectedImage = disconnectedImage;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690227, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyImage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emptyImage = _react.default.createElement("svg", {
  viewBox: '0 0 400 400',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
  x1: '50%',
  y1: '-116.862%',
  x2: '50%',
  y2: '90.764%',
  id: 'error-block-image-empty-a'
}, _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0.207,
  offset: '0%'
}), _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0.115,
  offset: '80.072%'
}), _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0,
  offset: '100%'
})), _react.default.createElement("path", {
  d: 'M146.183 18.461c31.705 23.336 33.349 71.85 4.93 96.614-.252.22 6.172 5.602 13.577 11.414l.686.537.69.54.695.54.348.27.698.54a341.27 341.27 0 0 0 8.806 6.596c1.114.802 4.643-.853 10.587-4.965l-.532 12.218a1.2 1.2 0 0 1-.481.91l-10.868 8.111c-1.405 1.048-3.32 1.185-4.854.072l-35.578-25.834c-33.414 17.333-79.913 15-109.804-7-33.444-24.616-33.444-75.95 0-100.563 33.443-24.615 87.657-24.615 121.1 0Zm-60.469 7.653C51.63 26.114 24 44.534 24 67.257S51.63 108.4 85.714 108.4s61.715-18.42 61.715-41.143c0-22.722-27.63-41.143-61.715-41.143Z',
  id: 'error-block-image-empty-b'
})), _react.default.createElement("g", {
  fill: 'none',
  fillRule: 'evenodd'
}, _react.default.createElement("path", {
  d: 'M157.964 244.661H0L3.806 100.13a4.572 4.572 0 0 1 4.353-4.446l.217-.006h45.588V68.2a4.572 4.572 0 0 1 4.356-4.567l.216-.005h65.498l2.554-58.689a4.571 4.571 0 0 1 4.779-4.367l.214.015 87.79 8.222a4.572 4.572 0 0 1 4.126 4.133l.015.212 3.146 69.652L301.634 64.9a4.571 4.571 0 0 1 5.628 4.231l.005.215v43.955l56.162.001v130.264h-56.163v.001h-82.383v-.004h-66.919v1.098ZM89.503 160.03h-9.968v8.436h9.968v-8.436Zm0-14.507h-9.968v8.435h9.968v-8.435Zm197.985-5.15h-9.967v8.432h9.967v-8.431Zm-197.985-8.806h-9.968v8.436h9.968v-8.436Zm197.985-5.153h-9.967v8.432h9.967v-8.432Zm0-14.503h-9.967v8.432h9.967v-8.432Zm-84.643-.777h-30.8v8.436h30.8v-8.436Zm84.643-13.186h-9.967v8.436h9.967v-8.436Zm-84.643-3.29h-30.8v8.436h30.8v-8.436Zm0-15.912h-30.8v8.436h30.8v-8.436Z',
  transform: 'translate(18.286 50.286)',
  fill: 'url(#error-block-image-empty-a)'
}), _react.default.createElement("g", {
  transform: 'translate(108.571 189.886)'
}, _react.default.createElement("mask", {
  id: 'error-block-image-empty-c',
  fill: '#fff'
}, _react.default.createElement("use", {
  xlinkHref: '#error-block-image-empty-b'
})), _react.default.createElement("use", {
  fill: '#377EFF',
  xlinkHref: '#error-block-image-empty-b'
}), _react.default.createElement("path", {
  d: 'M131.429 134.686a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm5.714 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285ZM128 133.543a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.714 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm21.143-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-9.143-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm12-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-6.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM120 128.971a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm5.714 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm16-1.142.125.006a1.143 1.143 0 1 1-.125-.006Zm11.429 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-22.857 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm17.143-1.143a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285ZM136 125.543a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-13.143 1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm4.572-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm18.857-2.286a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-16-1.143.124.007a1.143 1.143 0 1 1-.124-.007Zm11.428 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-22.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm36.572 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.715 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-37.143 1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm13.715-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm9.714-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm18.286-3.428a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-11.429 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-28 1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.714-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm17.715-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.715 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-6.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm17.143-4.571a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-11.428 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-5.143 1.142a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-8-1.142a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm-9.143 0a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm30.286-3.429a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM124 109.543a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.714 0a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.715-4.572a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-22.858-1.142a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm-11.428-3.429a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM124 99.257a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM49.143 55.829a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm5.714 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-9.143-1.143a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-5.714 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm21.143-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM52 52.4a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm12-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-6.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-19.429-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm5.715 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm16-1.143.124.007a1.143 1.143 0 1 1-.124-.007Zm11.428 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-22.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm17.143-1.142a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-11.429-1.143a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-13.143 1.143a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm4.572-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM64 44.4a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-16-1.143.125.007a1.143 1.143 0 1 1-.125-.007Zm11.429 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-22.858 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm36.572 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.714 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM30.286 44.4a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM44 43.257a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm9.714-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM72 38.686a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-11.429 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-28 1.143a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm5.715-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM56 37.543a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.714 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-6.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM60.57 32.97a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-11.428 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM44 34.114a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-8-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-9.143 0a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm30.286-3.428a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-15.429 1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.715 0a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.714-4.572a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-22.857-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-11.429-3.428a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM41.714 20.4a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Z',
  fill: '#003CFF',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-empty-c)'
})), _react.default.createElement("path", {
  d: 'M295.213 319.24c.744.546.745 1.433.002 1.98l-11.806 8.81c-1.069.799-3.326.474-4.853-.609l-35.622-25.241c-33.375 17.037-79.545 14.615-109.28-7.271-33.443-24.615-33.443-64.521 0-89.133 33.443-24.616 87.657-24.616 121.1 0 31.706 23.336 33.35 60.42 4.931 85.185-.543.473 35.528 26.278 35.528 26.278ZM148.06 220.015c-25.44 17.853-25.44 46.8 0 64.652 25.44 17.85 66.689 17.85 92.129 0 25.436-17.853 25.436-46.799 0-64.652-25.44-17.853-66.688-17.853-92.129 0Z',
  fill: '#5D96FE'
}), _react.default.createElement("path", {
  d: 'M123.514 233.021c2.185-5.241 5.67-9.735 10.453-13.482M264.967 271.54c-2.185 5.24-5.67 9.734-10.453 13.481',
  stroke: '#FFF',
  strokeWidth: 0.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}), _react.default.createElement("path", {
  d: 'M81.143 252.571c7.574 0 13.714 23.88 13.714 31.649 0 6.97-4.942 12.755-11.429 13.871v11.672c0 1.235-.767 2.237-1.713 2.237-.904 0-1.644-.912-1.71-2.07l-.005-.167v-11.526c-7.04-.595-12.571-6.644-12.571-14.017 0-7.024 5.02-27.222 11.581-31.027l.096-.053c.027-.016.055-.03.082-.045l.067-.035.066-.033.1-.05.094-.041a3.34 3.34 0 0 1 .224-.093l.11-.042.097-.032c.038-.013.077-.025.115-.036l.053-.016.053-.014a3.351 3.351 0 0 1 .23-.055l.085-.016a3.95 3.95 0 0 1 .441-.054l.11-.005.11-.002Z',
  fill: '#FFCD6B',
  fillRule: 'nonzero'
}), _react.default.createElement("g", {
  transform: 'translate(283.429 177.143)',
  fillRule: 'nonzero'
}, _react.default.createElement("path", {
  d: 'M22.475.847c12.34 0 22.345 37.935 22.345 50.276 0 11.395-8.53 20.798-19.552 22.172v19.019c0 1.932-1.25 3.5-2.792 3.5-1.49 0-2.707-1.46-2.79-3.301l-.004-.2-.001-19.018C8.659 71.92.13 62.518.13 51.123.13 40.071 8.154 8.49 18.694 2.015l.054-.031a5.94 5.94 0 0 1 .214-.128l.088-.048c.213-.12.427-.228.642-.326l.135-.06.18-.075.135-.053a5.796 5.796 0 0 1 .464-.16 4.44 4.44 0 0 1 .33-.092l.124-.03a7.122 7.122 0 0 1 .31-.065l.018-.003a6.305 6.305 0 0 1 .756-.088l.165-.007.166-.002Z',
  fill: '#FFCD6B'
}), _react.default.createElement("path", {
  d: 'M22.475.847c12.34 0 22.345 37.935 22.345 50.276 0 11.395-8.53 20.798-19.552 22.172v19.019c0 1.932-1.25 3.5-2.792 3.5-1.543 0-2.794-1.566-2.794-3.5V73.295C8.659 71.921.13 62.518.13 51.123.13 38.783 10.134.847 22.475.847Z',
  fill: '#FFCD6B'
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 26.4,
  cy: 56.869,
  r: 1.45
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 39.453,
  cy: 58.319,
  r: 1
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 17.698,
  cy: 63.637,
  r: 2.417
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 38.002,
  cy: 51.068,
  r: 2.417
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 18.665,
  cy: 17.228,
  r: 2.417
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 32.201,
  cy: 13.36,
  r: 2.417
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 26.83,
  cy: 20.666,
  r: 1.45
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 38.969,
  cy: 31.731,
  r: 2.417
}), _react.default.createElement("circle", {
  fill: '#FFB400',
  cx: 25.433,
  cy: 29.797,
  r: 1.45
}), _react.default.createElement("path", {
  d: 'M34.197 53.033c0 9.825-6.934 18.017-16.172 19.987a22.44 22.44 0 0 0 4.45.448c12.34 0 22.344-10.004 22.344-22.345C44.82 38.783 34.815.847 22.475.847c8.947 14.03 11.722 40.891 11.722 52.186Z',
  fill: '#FBBE47'
}))));

exports.emptyImage = emptyImage;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690228, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.busyImage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const busyImage = _react.default.createElement("svg", {
  viewBox: '0 0 400 400',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
  x1: '50%',
  y1: '-116.862%',
  x2: '50%',
  y2: '90.764%',
  id: 'error-block-image-busy-a'
}, _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0.207,
  offset: '0%'
}), _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0.115,
  offset: '80.072%'
}), _react.default.createElement("stop", {
  stopColor: '#72A7FD',
  stopOpacity: 0,
  offset: '100%'
})), _react.default.createElement("circle", {
  id: 'error-block-image-busy-b',
  cx: 34.857,
  cy: 34.857,
  r: 34.857
})), _react.default.createElement("g", {
  fill: 'none',
  fillRule: 'evenodd'
}, _react.default.createElement("path", {
  d: 'M157.964 243.667H0L3.806 99.134a4.572 4.572 0 0 1 4.353-4.446l.217-.005h45.588V67.205a4.572 4.572 0 0 1 4.356-4.566l.216-.005 65.498-.001 2.554-58.688a4.571 4.571 0 0 1 4.779-4.368l.214.015 87.79 8.222a4.572 4.572 0 0 1 4.126 4.133l.015.213 3.146 69.652 74.976-17.906a4.571 4.571 0 0 1 5.628 4.23l.005.216v43.955h56.162v130.265l-56.163-.001v.002h-82.383v-.004h-66.919v1.098Zm-68.461-84.631h-9.968v8.435h9.968v-8.435Zm0-14.508h-9.968v8.436h9.968v-8.436Zm197.985-5.149h-9.967v8.432h9.967v-8.432Zm-197.985-8.806h-9.968v8.436h9.968v-8.436Zm197.985-5.153h-9.967v8.432h9.967v-8.432Zm0-14.503h-9.967v8.432h9.967v-8.432Zm-84.643-.777h-30.8v8.436h30.8v-8.436Zm84.643-13.186h-9.967v8.435h9.967v-8.435Zm-84.643-3.29h-30.8v8.435h30.8v-8.435Zm0-15.912h-30.8v8.436h30.8v-8.436Z',
  transform: 'translate(18.286 51.286)',
  fill: 'url(#error-block-image-busy-a)'
}), _react.default.createElement("path", {
  d: 'm250.934 176.555-101.963 1.038c-5.276.054-9.51 4.374-9.455 9.65.054 5.274 4.374 9.507 9.649 9.454l.958-.01c-.376 7.363 3.679 59.93 34.894 62.659 4.203.367 7.432.39 7.475 4.609.042 4.218-3.176 4.307-7.37 4.76-34.593 3.737-34.136 56.004-33.61 63.357l-.957.01c-5.276.053-9.51 4.373-9.455 9.649.053 5.275 4.374 9.508 9.649 9.454l101.963-1.039c5.275-.054 9.508-4.374 9.455-9.648-.055-5.276-4.374-9.51-9.65-9.455l-.958.01c.377-7.363-.729-59.672-34.894-62.66-4.202-.367-7.432-.39-7.474-4.608-.043-4.219 3.175-4.308 7.369-4.76 31.276-3.377 34.136-56.004 33.61-63.357l.958-.01c5.276-.053 9.508-4.373 9.455-9.649-.055-5.276-4.374-9.509-9.65-9.454Z',
  fill: '#377EFF'
}), _react.default.createElement("path", {
  d: 'M233.524 314.422c.108.684.772 1.148 1.483 1.035.711-.112 1.2-.758 1.091-1.443-.108-.684-.772-1.147-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-.894-5.644c.108.684.772 1.148 1.483 1.035.711-.112 1.2-.758 1.091-1.443-.108-.684-.772-1.147-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-.149 17.865c.108.684.773 1.147 1.483 1.035.711-.113 1.2-.759 1.091-1.443-.108-.684-.772-1.148-1.483-1.035-.71.112-1.2.758-1.09 1.443Zm-2.144-8.182c.109.684.773 1.148 1.484 1.035.71-.113 1.199-.759 1.09-1.443-.108-.684-.772-1.148-1.483-1.035-.71.113-1.2.759-1.09 1.443Zm-1.586-4.694c.108.684.772 1.148 1.483 1.035.711-.113 1.2-.759 1.091-1.443-.108-.684-.772-1.147-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-1.013-5.88c.109.685.773 1.148 1.484 1.036.71-.113 1.2-.759 1.09-1.443-.107-.684-.772-1.148-1.483-1.035-.71.113-1.199.759-1.09 1.443Zm.236 15.575c.108.685.772 1.148 1.483 1.035.71-.112 1.2-.758 1.09-1.442-.107-.685-.772-1.148-1.483-1.035-.71.112-1.199.758-1.09 1.442Zm-.4 4.494c.108.684.772 1.147 1.483 1.035.71-.113 1.2-.759 1.091-1.443-.108-.684-.773-1.148-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-3.88-8.601c.108.684.772 1.147 1.483 1.035.71-.113 1.199-.759 1.09-1.443-.108-.684-.772-1.148-1.483-1.035-.71.113-1.2.759-1.09 1.443Zm-.524-7.186c.065.41.463.688.89.62.426-.067.72-.454.654-.865-.065-.41-.463-.688-.89-.62-.426.067-.72.454-.654.865Zm-2.265-4.102c.109.684.773 1.148 1.484 1.035.71-.113 1.2-.759 1.09-1.443-.108-.684-.772-1.147-1.483-1.035-.71.113-1.199.759-1.09 1.443Zm-.545-6.518c.065.41.464.689.89.621.427-.067.72-.455.655-.865-.065-.41-.464-.689-.89-.621-.427.067-.72.455-.655.865Zm2.098 23.629c.109.684.773 1.147 1.484 1.035.71-.113 1.2-.759 1.09-1.443-.108-.684-.772-1.148-1.483-1.035-.71.112-1.199.758-1.09 1.443Zm-.756-9.65c.043.274.309.46.593.414a.512.512 0 0 0 .437-.577.512.512 0 0 0-.594-.414.512.512 0 0 0-.436.577Zm-.808 20.96c.109.684.773 1.147 1.484 1.034.71-.112 1.2-.758 1.09-1.442-.108-.685-.772-1.148-1.483-1.036-.71.113-1.199.759-1.09 1.443Zm-4.691-31.966c.065.41.463.689.89.621.426-.068.72-.455.654-.866-.065-.41-.463-.688-.89-.62-.426.067-.72.454-.654.865Zm2.098 23.628c.108.684.772 1.148 1.483 1.035.711-.112 1.2-.758 1.091-1.443-.108-.684-.772-1.147-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-1.967-12.416c.109.684.773 1.147 1.484 1.035.71-.113 1.199-.759 1.09-1.443-.108-.684-.772-1.148-1.483-1.035-.71.112-1.2.758-1.09 1.443Zm1.073 6.772c.108.685.772 1.148 1.483 1.035.711-.112 1.2-.758 1.091-1.442-.108-.685-.772-1.148-1.483-1.036-.711.113-1.2.759-1.091 1.443Zm-.009-3.131c.065.41.464.689.89.621.427-.068.72-.455.655-.866-.065-.41-.464-.688-.89-.62-.427.067-.72.454-.655.865Zm-1.43-9.03c.065.41.463.688.89.62.426-.067.72-.454.655-.865-.065-.41-.464-.689-.89-.62-.427.067-.72.454-.655.865ZM214.5 333.38c.108.685.772 1.148 1.483 1.036.711-.113 1.2-.759 1.091-1.443-.108-.684-.772-1.148-1.483-1.035-.711.112-1.2.758-1.091 1.442Zm-.156-7.178c.065.41.464.689.89.621.427-.067.72-.455.655-.865-.065-.41-.464-.689-.89-.621-.427.067-.72.455-.655.865Zm-1.871-4.72c.108.684.773 1.147 1.483 1.034.711-.112 1.2-.758 1.091-1.442-.108-.685-.772-1.148-1.483-1.035-.71.112-1.2.758-1.091 1.442Zm-1.614-6.857c.065.41.464.689.89.621.427-.068.72-.455.655-.866-.065-.41-.464-.688-.89-.62-.427.067-.72.454-.655.865Zm-.894-5.644c.065.41.464.689.89.621.427-.067.72-.455.655-.866-.065-.41-.463-.688-.89-.62-.427.067-.72.455-.655.865Zm-1.43-9.03c.065.41.464.688.89.62.427-.067.72-.454.655-.865-.065-.41-.464-.688-.89-.62-.427.067-.72.454-.655.865Zm-1.958 14.225c.065.41.463.689.89.62.426-.067.72-.454.654-.865-.065-.41-.463-.688-.89-.62-.426.067-.72.454-.654.865Zm-.703 12.81c.065.41.464.688.89.62.427-.067.72-.455.655-.865-.065-.41-.463-.689-.89-.621-.427.067-.72.455-.655.866Zm-4.543-22.536c.065.41.463.689.89.621.426-.067.72-.455.654-.865-.065-.41-.463-.689-.89-.621-.426.067-.72.455-.654.865Zm2.806 30.138c.065.41.463.689.89.621.426-.067.72-.455.654-.865-.065-.41-.463-.689-.89-.621-.426.067-.72.455-.654.865Zm-5.694-17.996c.065.41.463.688.89.62.426-.067.72-.455.654-.865-.065-.41-.463-.689-.89-.621-.426.067-.72.455-.654.866Zm-2.935-13.343c.066.41.464.688.89.62.427-.067.72-.454.655-.865-.065-.41-.463-.689-.89-.621-.426.068-.72.455-.655.866Z',
  fill: '#003CFF',
  fillRule: 'nonzero'
}), _react.default.createElement("path", {
  d: 'm250.934 176.555-101.963 1.038c-5.276.054-9.51 4.374-9.455 9.65.054 5.274 4.374 9.507 9.649 9.454l101.963-1.04c5.276-.052 9.508-4.372 9.455-9.648-.055-5.276-4.374-9.509-9.65-9.454ZM252.64 331.241l-101.964 1.038c-5.275.054-9.508 4.374-9.454 9.65.054 5.275 4.374 9.508 9.649 9.454l101.963-1.039c5.275-.053 9.507-4.373 9.454-9.649-.054-5.275-4.374-9.508-9.649-9.454Z',
  fill: '#7EACFF'
}), _react.default.createElement("path", {
  stroke: '#003CFF',
  strokeWidth: 0.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  d: 'm196.824 197.298 52.216-.506M193.329 330.5h52.215'
}), _react.default.createElement("path", {
  d: 'M167.367 228.041c-4.091-10.787-6.086-20.934-5.985-30.44',
  stroke: '#FFF',
  strokeWidth: 0.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}), _react.default.createElement("circle", {
  cx: 14.857,
  cy: 14.857,
  r: 14.857,
  transform: 'translate(106.857 248.571)',
  fill: '#FFCD6B',
  fillRule: 'nonzero'
}), _react.default.createElement("g", {
  transform: 'translate(236.571 284.571)'
}, _react.default.createElement("mask", {
  id: 'error-block-image-busy-c',
  fill: '#fff'
}, _react.default.createElement("use", {
  xlinkHref: '#error-block-image-busy-b'
})), _react.default.createElement("use", {
  fill: '#FBBE47',
  fillRule: 'nonzero',
  xlinkHref: '#error-block-image-busy-b'
}), _react.default.createElement("circle", {
  fill: '#FFCD6B',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-busy-c)',
  cx: 25.714,
  cy: 28,
  r: 34.857
}), _react.default.createElement("circle", {
  fill: '#FFF',
  fillRule: 'nonzero',
  mask: 'url(#error-block-image-busy-c)',
  cx: 22.286,
  cy: 18.857,
  r: 3.429
}))));

exports.busyImage = busyImage;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690229, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./floating-bubble.css");

var _floatingBubble2 = require("./floating-bubble");

var _default = _floatingBubble2.FloatingBubble;
exports.default = _default;
}, function(modId) { var map = {"./floating-bubble":1656641690230}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690230, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingBubble = void 0;

var _react = _interopRequireWildcard(require("react"));

var _web = require("@react-spring/web");

var _react2 = require("@use-gesture/react");

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-floating-bubble`;
const defaultProps = {
  axis: 'y'
};

const FloatingBubble = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const boundaryRef = (0, _react.useRef)(null);
  const buttonRef = (0, _react.useRef)(null);
  /**
   * memoize the `to` function
   * inside a component that renders frequently
   * to prevent an unintended restart
   */

  const [{
    x,
    y,
    opacity
  }, api] = (0, _web.useSpring)(() => ({
    x: 0,
    y: 0,
    opacity: 1
  }));
  const bind = (0, _react2.useDrag)(state => {
    let nextX = state.offset[0];
    let nextY = state.offset[1];

    if (state.last && props.magnetic) {
      const boundary = boundaryRef.current;
      const button = buttonRef.current;
      if (!boundary || !button) return;
      const boundaryRect = boundary.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      if (props.magnetic === 'x') {
        const compensation = x.goal - x.get();
        const leftDistance = buttonRect.left + compensation - boundaryRect.left;
        const rightDistance = boundaryRect.right - (buttonRect.right + compensation);

        if (rightDistance <= leftDistance) {
          nextX += rightDistance;
        } else {
          nextX -= leftDistance;
        }
      } else if (props.magnetic === 'y') {
        const compensation = y.goal - y.get();
        const topDistance = buttonRect.top + compensation - boundaryRect.top;
        const bottomDistance = boundaryRect.bottom - (buttonRect.bottom + compensation);

        if (bottomDistance <= topDistance) {
          nextY += bottomDistance;
        } else {
          nextY -= topDistance;
        }
      }
    }

    api.start({
      x: nextX,
      y: nextY
    }); // active status

    api.start({
      opacity: state.active ? 0.8 : 1
    });
  }, {
    axis: props.axis === 'xy' ? undefined : props.axis,
    pointer: {
      touch: true
    },
    // the component won't trigger drag logic if the user just clicked on the component.
    filterTaps: true,
    // set constraints to the user gesture
    bounds: boundaryRef,
    from: () => [x.get(), y.get()]
  });
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-boundary-outer`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-boundary`,
    ref: boundaryRef
  })), _react.default.createElement(_web.animated.div, Object.assign({}, bind(), {
    style: {
      opacity,
      transform: (0, _web.to)([x, y], (x, y) => `translate(${x}px, ${y}px)`)
    },
    onClick: props.onClick,
    className: `${classPrefix}-button`,
    ref: buttonRef
  }), props.children)));
};

exports.FloatingBubble = FloatingBubble;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690231, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./floating-panel.css");

var _floatingPanel2 = require("./floating-panel");

var _default = _floatingPanel2.FloatingPanel;
exports.default = _default;
}, function(modId) { var map = {"./floating-panel":1656641690232}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690232, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _react2 = require("@use-gesture/react");

var _web = require("@react-spring/web");

var _supportsPassive = require("../../utils/supports-passive");

var _nearest = require("../../utils/nearest");

var _withDefaultProps = require("../../utils/with-default-props");

var _useLockScroll = require("../../utils/use-lock-scroll");

var _ahooks = require("ahooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultProps = {
  handleDraggingOfContent: true
};
const FloatingPanel = (0, _react.forwardRef)((p, ref) => {
  var _a, _b;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    anchors
  } = props;
  const maxHeight = (_a = anchors[anchors.length - 1]) !== null && _a !== void 0 ? _a : window.innerHeight;
  const possibles = anchors.map(x => -x);
  const elementRef = (0, _react.useRef)(null);
  const headerRef = (0, _react.useRef)(null);
  const contentRef = (0, _react.useRef)(null);
  const [pulling, setPulling] = (0, _react.useState)(false);
  const pullingRef = (0, _react.useRef)(false);
  const bounds = {
    top: possibles[possibles.length - 1],
    bottom: possibles[0]
  };
  const onHeightChange = (0, _ahooks.useMemoizedFn)((_b = props.onHeightChange) !== null && _b !== void 0 ? _b : () => {});
  const [{
    y
  }, api] = (0, _web.useSpring)(() => ({
    y: bounds.bottom,
    config: {
      tension: 300
    },
    onChange: result => {
      onHeightChange(-result.value.y, y.isAnimating);
    }
  }));
  (0, _react2.useDrag)(state => {
    const [, offsetY] = state.offset;

    if (state.first) {
      const target = state.event.target;
      const header = headerRef.current;

      if (header === target || (header === null || header === void 0 ? void 0 : header.contains(target))) {
        pullingRef.current = true;
      } else {
        if (!props.handleDraggingOfContent) return;
        const reachedTop = y.goal <= bounds.top;
        const content = contentRef.current;
        if (!content) return;

        if (reachedTop) {
          if (content.scrollTop <= 0 && state.direction[1] > 0) {
            pullingRef.current = true;
          }
        } else {
          pullingRef.current = true;
        }
      }
    }

    setPulling(pullingRef.current);
    if (!pullingRef.current) return;
    const {
      event
    } = state;

    if (event.cancelable) {
      event.preventDefault();
    }

    event.stopPropagation();
    let nextY = offsetY;

    if (state.last) {
      pullingRef.current = false;
      setPulling(false);
      nextY = (0, _nearest.nearest)(possibles, offsetY);
    }

    api.start({
      y: nextY
    });
  }, {
    axis: 'y',
    bounds,
    rubberband: true,
    from: () => [0, y.get()],
    pointer: {
      touch: true
    },
    target: elementRef,
    eventOptions: _supportsPassive.supportsPassive ? {
      passive: false
    } : false
  });
  (0, _react.useImperativeHandle)(ref, () => ({
    setHeight: (height, options) => {
      api.start({
        y: -height,
        immediate: options === null || options === void 0 ? void 0 : options.immediate
      });
    }
  }), [api]);
  (0, _useLockScroll.useLockScroll)(elementRef, true);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement(_web.animated.div, {
    ref: elementRef,
    className: 'adm-floating-panel',
    style: {
      height: maxHeight,
      translateY: y.to(y => `calc(100% + (${y}px))`)
    }
  }, _react.default.createElement("div", {
    className: 'adm-floating-panel-mask',
    style: {
      display: pulling ? 'block' : 'none'
    }
  }), _react.default.createElement("div", {
    className: 'adm-floating-panel-header',
    ref: headerRef
  }, _react.default.createElement("div", {
    className: 'adm-floating-panel-bar'
  })), _react.default.createElement("div", {
    className: 'adm-floating-panel-content',
    ref: contentRef
  }, props.children)));
});
exports.FloatingPanel = FloatingPanel;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/supports-passive":1656641690094,"../../utils/nearest":1656641690233,"../../utils/with-default-props":1656641690086,"../../utils/use-lock-scroll":1656641690091}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690233, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nearest = nearest;

function nearest(arr, target) {
  return arr.reduce((pre, cur) => {
    return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur;
  });
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690234, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./index.css");

var _form = require("./form");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _formItem = require("./form-item");

var _header = require("./header");

var _rcFieldForm = require("rc-field-form");

var _formSubscribe = require("./form-subscribe");

var _formArray = require("./form-array");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_form.Form, {
  Item: _formItem.FormItem,
  Subscribe: _formSubscribe.FormSubscribe,
  Header: _header.Header,
  Array: _formArray.FormArray,
  useForm: _rcFieldForm.useForm,
  useWatch: _rcFieldForm.useWatch
});

exports.default = _default;
}, function(modId) { var map = {"./form":1656641690235,"../../utils/attach-properties-to-component":1656641690083,"./form-item":1656641690239,"./header":1656641690237,"./form-subscribe":1656641690249,"./form-array":1656641690238}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690235, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _list = _interopRequireDefault(require("../list"));

var _rcFieldForm = _interopRequireDefault(require("rc-field-form"));

var _context = require("./context");

var _withDefaultProps = require("../../utils/with-default-props");

var _header = require("./header");

var _configProvider = require("../config-provider");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _formArray = require("./form-array");

var _traverseReactNode = require("../../utils/traverse-react-node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = 'adm-form';
const defaultProps = _context.defaultFormContext;
const Form = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    className,
    style,
    hasFeedback,
    children,
    layout,
    footer,
    mode,
    disabled,
    requiredMarkStyle
  } = props,
        formProps = (0, _tslib.__rest)(props, ["className", "style", "hasFeedback", "children", "layout", "footer", "mode", "disabled", "requiredMarkStyle"]);
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const validateMessages = (0, _react.useMemo)(() => (0, _merge.default)({}, locale.Form.defaultValidateMessages, formProps.validateMessages), [locale.Form.defaultValidateMessages, formProps.validateMessages]);
  const lists = [];
  let currentHeader = null;
  let items = [];
  let count = 0;

  function collect() {
    if (items.length === 0) return;
    count += 1;
    lists.push(_react.default.createElement(_list.default, {
      header: currentHeader,
      key: count,
      mode: mode
    }, items));
    items = [];
  }

  (0, _traverseReactNode.traverseReactNode)(props.children, child => {
    if (_react.default.isValidElement(child)) {
      if (child.type === _header.Header) {
        collect();
        currentHeader = child.props.children;
        return;
      }

      if (child.type === _formArray.FormArray) {
        collect();
        lists.push(child);
        return;
      }
    }

    items.push(child);
  });
  collect();
  return _react.default.createElement(_rcFieldForm.default, Object.assign({
    className: (0, _classnames.default)(classPrefix, className),
    style: style,
    ref: ref
  }, formProps, {
    validateMessages: validateMessages
  }), _react.default.createElement(_context.FormContext.Provider, {
    value: {
      name: formProps.name,
      hasFeedback,
      layout,
      requiredMarkStyle,
      disabled: disabled
    }
  }, lists), footer && _react.default.createElement("div", {
    className: `${classPrefix}-footer`
  }, footer));
});
exports.Form = Form;
}, function(modId) { var map = {"../list":1656641690167,"./context":1656641690236,"../../utils/with-default-props":1656641690086,"./header":1656641690237,"../config-provider":1656641690077,"./form-array":1656641690238,"../../utils/traverse-react-node":1656641690134}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690236, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultFormContext = exports.NoStyleItemContext = exports.FormContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultFormContext = {
  name: undefined,
  hasFeedback: true,
  layout: 'vertical',
  requiredMarkStyle: 'asterisk',
  disabled: false
};
exports.defaultFormContext = defaultFormContext;

const FormContext = _react.default.createContext(defaultFormContext);

exports.FormContext = FormContext;

const NoStyleItemContext = _react.default.createContext(null);

exports.NoStyleItemContext = NoStyleItemContext;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690237, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

const Header = () => null;

exports.Header = Header;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690238, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormArray = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcFieldForm = require("rc-field-form");

var _list = _interopRequireDefault(require("../list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormArray = props => {
  return _react.default.createElement(_rcFieldForm.List, {
    name: props.name,
    initialValue: props.initialValue
  }, (rcFields, operation) => {
    const fields = rcFields.map(field => ({
      index: field.name,
      key: field.key
    }));
    const children = props.children(fields, operation).map((child, index) => {
      var _a;

      return _react.default.createElement(_list.default, {
        key: fields[index].key,
        mode: 'card',
        header: (_a = props.renderHeader) === null || _a === void 0 ? void 0 : _a.call(props, fields[index], operation)
      }, child);
    });

    if (props.renderAdd) {
      children.push(_react.default.createElement(_list.default, {
        key: 'add',
        mode: 'card'
      }, _react.default.createElement(_list.default.Item, {
        className: 'adm-form-list-operation',
        onClick: () => {
          props.onAdd ? props.onAdd(operation) : operation.add();
        },
        arrow: false
      }, props.renderAdd())));
    }

    return _react.default.createElement(_react.default.Fragment, null, children);
  });
};

exports.FormArray = FormArray;
}, function(modId) { var map = {"../list":1656641690167}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690239, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItem = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcFieldForm = require("rc-field-form");

var _FieldContext = _interopRequireDefault(require("rc-field-form/lib/FieldContext"));

var _devLog = require("../../utils/dev-log");

var _context = require("./context");

var _utils = require("./utils");

var _list = _interopRequireDefault(require("../list"));

var _popover = _interopRequireDefault(require("../popover"));

var _antdMobileIcons = require("antd-mobile-icons");

var _configProvider = require("../config-provider");

var _undefinedFallback = require("../../utils/undefined-fallback");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NAME_SPLIT = '__SPLIT__';
const classPrefix = `adm-form-item`;

const MemoInput = _react.default.memo(({
  children
}) => children, (prev, next) => prev.value === next.value && prev.update === next.update);

const FormItemLayout = props => {
  var _a;

  const {
    className,
    style,
    extra,
    label,
    help,
    required,
    children,
    htmlFor,
    hidden,
    arrow,
    childElementPosition = 'normal'
  } = props;
  const context = (0, _react.useContext)(_context.FormContext);
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const hasFeedback = props.hasFeedback !== undefined ? props.hasFeedback : context.hasFeedback;
  const layout = props.layout || context.layout;
  const disabled = (_a = props.disabled) !== null && _a !== void 0 ? _a : context.disabled;

  const requiredMark = (() => {
    const {
      requiredMarkStyle
    } = context;

    switch (requiredMarkStyle) {
      case 'asterisk':
        return required && _react.default.createElement("span", {
          className: `${classPrefix}-required-asterisk`
        }, "*");

      case 'text-required':
        return required && _react.default.createElement("span", {
          className: `${classPrefix}-required-text`
        }, "(", locale.Form.required, ")");

      case 'text-optional':
        return !required && _react.default.createElement("span", {
          className: `${classPrefix}-required-text`
        }, "(", locale.Form.optional, ")");

      default:
        return null;
    }
  })();

  const labelElement = label ? _react.default.createElement("label", {
    className: `${classPrefix}-label`,
    htmlFor: htmlFor
  }, label, requiredMark, help && _react.default.createElement(_popover.default, {
    content: help,
    mode: 'dark',
    trigger: 'click'
  }, _react.default.createElement("span", {
    className: `${classPrefix}-label-help`,
    onClick: e => {
      e.preventDefault();
    }
  }, _react.default.createElement(_antdMobileIcons.QuestionCircleOutline, null)))) : null;
  const description = props.description || hasFeedback ? _react.default.createElement(_react.default.Fragment, null, props.description, hasFeedback && _react.default.createElement(_react.default.Fragment, null, props.errors.map((error, index) => _react.default.createElement("div", {
    key: `error-${index}`,
    className: `${classPrefix}-feedback-error`
  }, error)), props.warnings.map((warning, index) => _react.default.createElement("div", {
    key: `warning-${index}`,
    className: `${classPrefix}-feedback-warning`
  }, warning)))) : null;
  return _react.default.createElement(_list.default.Item, {
    style: style,
    title: layout === 'vertical' && labelElement,
    prefix: layout === 'horizontal' && labelElement,
    extra: extra,
    description: description,
    className: (0, _classnames.default)(classPrefix, className, `${classPrefix}-${layout}`, {
      [`${classPrefix}-hidden`]: hidden,
      [`${classPrefix}-has-error`]: props.errors.length
    }),
    disabled: disabled,
    onClick: props.onClick,
    clickable: props.clickable,
    arrow: arrow
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-child`, `${classPrefix}-child-position-${childElementPosition}`)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-child-inner`)
  }, children)));
};

const FormItem = props => {
  const {
    // 样式相关
    className,
    style,
    // FormItem 相关
    label,
    help,
    extra,
    hasFeedback,
    name,
    required,
    noStyle,
    hidden,
    layout,
    childElementPosition,
    description,
    // Field 相关
    disabled,
    rules,
    children,
    messageVariables,
    trigger = 'onChange',
    validateTrigger = trigger,
    onClick,
    shouldUpdate,
    dependencies,
    clickable,
    arrow
  } = props,
        fieldProps = (0, _tslib.__rest)(props, ["className", "style", "label", "help", "extra", "hasFeedback", "name", "required", "noStyle", "hidden", "layout", "childElementPosition", "description", "disabled", "rules", "children", "messageVariables", "trigger", "validateTrigger", "onClick", "shouldUpdate", "dependencies", "clickable", "arrow"]);
  const {
    name: formName
  } = (0, _react.useContext)(_context.FormContext);
  const {
    validateTrigger: contextValidateTrigger
  } = (0, _react.useContext)(_FieldContext.default);
  const mergedValidateTrigger = (0, _undefinedFallback.undefinedFallback)(validateTrigger, contextValidateTrigger, trigger);
  const widgetRef = (0, _react.useRef)(null);
  const updateRef = (0, _react.useRef)(0);
  updateRef.current += 1;
  const [subMetas, setSubMetas] = (0, _react.useState)({});
  const onSubMetaChange = (0, _react.useCallback)((subMeta, namePath) => {
    setSubMetas(prevSubMetas => {
      const nextSubMetas = Object.assign({}, prevSubMetas);
      const nameKey = namePath.join(NAME_SPLIT);

      if (subMeta.destroy) {
        delete nextSubMetas[nameKey];
      } else {
        nextSubMetas[nameKey] = subMeta;
      }

      return nextSubMetas;
    });
  }, [setSubMetas]);

  function renderLayout(baseChildren, fieldId, meta, isRequired) {
    var _a, _b;

    if (noStyle && !hidden) {
      return baseChildren;
    }

    const curErrors = (_a = meta === null || meta === void 0 ? void 0 : meta.errors) !== null && _a !== void 0 ? _a : [];
    const errors = Object.keys(subMetas).reduce((subErrors, key) => {
      var _a, _b;

      const errors = (_b = (_a = subMetas[key]) === null || _a === void 0 ? void 0 : _a.errors) !== null && _b !== void 0 ? _b : [];

      if (errors.length) {
        subErrors = [...subErrors, ...errors];
      }

      return subErrors;
    }, curErrors);
    const curWarnings = (_b = meta === null || meta === void 0 ? void 0 : meta.warnings) !== null && _b !== void 0 ? _b : [];
    const warnings = Object.keys(subMetas).reduce((subWarnings, key) => {
      var _a, _b;

      const warnings = (_b = (_a = subMetas[key]) === null || _a === void 0 ? void 0 : _a.warnings) !== null && _b !== void 0 ? _b : [];

      if (warnings.length) {
        subWarnings = [...subWarnings, ...warnings];
      }

      return subWarnings;
    }, curWarnings);
    return _react.default.createElement(FormItemLayout, {
      className: className,
      style: style,
      label: label,
      extra: extra,
      help: help,
      description: description,
      required: isRequired,
      disabled: disabled,
      hasFeedback: hasFeedback,
      htmlFor: fieldId,
      errors: errors,
      warnings: warnings,
      onClick: onClick && (e => onClick(e, widgetRef)),
      hidden: hidden,
      layout: layout,
      childElementPosition: childElementPosition,
      clickable: clickable,
      arrow: arrow
    }, _react.default.createElement(_context.NoStyleItemContext.Provider, {
      value: onSubMetaChange
    }, baseChildren));
  }

  const isRenderProps = typeof children === 'function';

  if (!name && !isRenderProps && !props.dependencies) {
    return renderLayout(children);
  }

  let Variables = {};
  Variables.label = typeof label === 'string' ? label : '';

  if (messageVariables) {
    Variables = Object.assign(Object.assign({}, Variables), messageVariables);
  }

  const notifyParentMetaChange = (0, _react.useContext)(_context.NoStyleItemContext);

  const onMetaChange = meta => {
    if (noStyle && notifyParentMetaChange) {
      const namePath = meta.name;
      notifyParentMetaChange(meta, namePath);
    }
  };

  return _react.default.createElement(_rcFieldForm.Field, Object.assign({}, fieldProps, {
    name: name,
    shouldUpdate: shouldUpdate,
    dependencies: dependencies,
    rules: rules,
    trigger: trigger,
    validateTrigger: mergedValidateTrigger,
    onMetaChange: onMetaChange,
    messageVariables: Variables
  }), (control, meta, context) => {
    let childNode = null;
    const isRequired = required !== undefined ? required : rules && rules.some(rule => !!(rule && typeof rule === 'object' && rule.required));
    const nameList = (0, _utils.toArray)(name).length && meta ? meta.name : [];
    const fieldId = (nameList.length > 0 && formName ? [formName, ...nameList] : nameList).join('_');

    if (shouldUpdate && dependencies) {
      (0, _devLog.devWarning)('Form.Item', "`shouldUpdate` and `dependencies` shouldn't be used together.");
    }

    if (isRenderProps) {
      if ((shouldUpdate || dependencies) && !name) {
        childNode = children(context);
      } else {
        if (!(shouldUpdate || dependencies)) {
          (0, _devLog.devWarning)('Form.Item', '`children` of render props only work with `shouldUpdate` or `dependencies`.');
        }

        if (name) {
          (0, _devLog.devWarning)('Form.Item', "Do not use `name` with `children` of render props since it's not a field.");
        }
      } // not render props

    } else if (dependencies && !name) {
      (0, _devLog.devWarning)('Form.Item', 'Must set `name` or use render props when `dependencies` is set.');
    } else if (_react.default.isValidElement(children)) {
      if (children.props.defaultValue) {
        (0, _devLog.devWarning)('Form.Item', '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.');
      }

      const childProps = Object.assign(Object.assign({}, children.props), control);

      if ((0, _utils.isSafeSetRefComponent)(children)) {
        childProps.ref = instance => {
          const originRef = children.ref;

          if (originRef) {
            if (typeof originRef === 'function') {
              originRef(instance);
            }

            if ('current' in originRef) {
              originRef.current = instance;
            }
          }

          widgetRef.current = instance;
        };
      }

      if (!childProps.id) {
        childProps.id = fieldId;
      } // We should keep user origin event handler


      const triggers = new Set([...(0, _utils.toArray)(trigger), ...(0, _utils.toArray)(mergedValidateTrigger)]);
      triggers.forEach(eventName => {
        childProps[eventName] = (...args) => {
          var _a, _b, _c;

          (_a = control[eventName]) === null || _a === void 0 ? void 0 : _a.call(control, ...args);
          (_c = (_b = children.props)[eventName]) === null || _c === void 0 ? void 0 : _c.call(_b, ...args);
        };
      });
      childNode = _react.default.createElement(MemoInput, {
        value: control[props.valuePropName || 'value'],
        update: updateRef.current
      }, _react.default.cloneElement(children, childProps));
    } else {
      if (name) {
        (0, _devLog.devWarning)('Form.Item', '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.');
      }

      childNode = children;
    }

    return renderLayout(childNode, fieldId, meta, isRequired);
  });
};

exports.FormItem = FormItem;
}, function(modId) { var map = {"../../utils/dev-log":1656641690148,"./context":1656641690236,"./utils":1656641690240,"../list":1656641690167,"../popover":1656641690241,"../config-provider":1656641690077,"../../utils/undefined-fallback":1656641690248}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690240, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafeSetRefComponent = isSafeSetRefComponent;
exports.toArray = toArray;

var _reactIs = require("react-is");

function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
} // eslint-disable-next-line @typescript-eslint/ban-types


function shouldConstruct(Component) {
  const prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
} // https://github.com/facebook/react/blob/ce13860281f833de8a3296b7a3dad9caced102e9/packages/react-reconciler/src/ReactFiber.new.js#L225


function isSimpleFunctionComponent(type) {
  return typeof type === 'function' && !shouldConstruct(type) && type.defaultProps === undefined;
}

function isSafeSetRefComponent(component) {
  if ((0, _reactIs.isFragment)(component)) return false;
  if ((0, _reactIs.isMemo)(component)) return isSafeSetRefComponent(component.type);
  return !isSimpleFunctionComponent(component.type);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690241, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./popover.css");

require("./popover-menu.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _popoverMenu2 = require("./popover-menu");

var _popover2 = require("./popover");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_popover2.Popover, {
  Menu: _popoverMenu2.PopoverMenu
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./popover-menu":1656641690242,"./popover":1656641690243}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690242, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popover = require("./popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-popover-menu`;
const PopoverMenu = (0, _react.forwardRef)((props, ref) => {
  const innerRef = (0, _react.useRef)(null); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  (0, _react.useImperativeHandle)(ref, () => innerRef.current, []);
  const onClick = (0, _react.useCallback)(e => {
    var _a;

    const {
      onAction
    } = props;

    if (onAction) {
      onAction(e);
    }

    (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.hide();
  }, [props.onAction]);
  const overlay = (0, _react.useMemo)(() => {
    return _react.default.createElement("div", {
      className: `${classPrefix}-list`
    }, _react.default.createElement("div", {
      className: `${classPrefix}-list-inner`
    }, props.actions.map((action, index) => {
      var _a;

      return _react.default.createElement("a", {
        key: (_a = action.key) !== null && _a !== void 0 ? _a : index,
        className: (0, _classnames.default)(`${classPrefix}-item`, 'adm-plain-anchor', action.disabled && `${classPrefix}-item-disabled`),
        onClick: () => {
          var _a;

          if (action.disabled) return;
          onClick(action);
          (_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action);
        }
      }, action.icon && _react.default.createElement("div", {
        className: `${classPrefix}-item-icon`
      }, action.icon), _react.default.createElement("div", {
        className: `${classPrefix}-item-text`
      }, action.text));
    })));
  }, [props.actions, onClick]);
  return _react.default.createElement(_popover.Popover, Object.assign({
    ref: innerRef
  }, props, {
    className: (0, _classnames.default)(classPrefix, props.className),
    content: overlay
  }), props.children);
});
exports.PopoverMenu = PopoverMenu;
}, function(modId) { var map = {"./popover":1656641690243}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690243, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _usePropsValue = require("../../utils/use-props-value");

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _withStopPropagation = require("../../utils/with-stop-propagation");

var _arrow = require("./arrow");

var _renderToContainer = require("../../utils/render-to-container");

var _dom = require("@floating-ui/dom");

var _wrapper = require("./wrapper");

var _shouldRender = require("../../utils/should-render");

var _ahooks = require("ahooks");

var _normalizePlacement = require("./normalize-placement");

var _convertPx = require("../../utils/convert-px");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-popover`;
const defaultProps = {
  placement: 'top',
  defaultVisible: false,
  stopPropagation: ['click'],
  getContainer: () => document.body
};
const Popover = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    mode = 'light'
  } = props;
  const placement = (0, _normalizePlacement.normalizePlacement)(props.placement);
  const [visible, setVisible] = (0, _usePropsValue.usePropsValue)({
    value: props.visible,
    defaultValue: props.defaultVisible,
    onChange: props.onVisibleChange
  });
  (0, _react.useImperativeHandle)(ref, () => {
    return {
      show: () => setVisible(true),
      hide: () => setVisible(false),
      visible
    };
  }, [visible]);
  const targetRef = (0, _react.useRef)(null);
  const floatingRef = (0, _react.useRef)(null);
  const arrowRef = (0, _react.useRef)(null);
  const floating = (0, _withStopPropagation.withStopPropagation)(props.stopPropagation, (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-${mode}`, !visible && `${classPrefix}-hidden`),
    ref: floatingRef
  }, _react.default.createElement("div", {
    className: `${classPrefix}-arrow`,
    ref: arrowRef
  }, _react.default.createElement(_arrow.Arrow, {
    className: `${classPrefix}-arrow-icon`
  })), _react.default.createElement("div", {
    className: `${classPrefix}-inner`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-inner-content`
  }, props.content)))));
  const [targetElement, setTargetElement] = (0, _react.useState)(null);

  function update() {
    var _a, _b, _c;

    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      const target = (_b = (_a = targetRef.current) === null || _a === void 0 ? void 0 : _a.element) !== null && _b !== void 0 ? _b : null;
      const floating = floatingRef.current;
      const arrowElement = arrowRef.current;
      setTargetElement(target);
      if (!target || !floating || !arrowElement) return;
      const {
        x,
        y,
        placement: realPlacement,
        middlewareData
      } = yield (0, _dom.computePosition)(target, floating, {
        placement,
        middleware: [(0, _dom.offset)((0, _convertPx.convertPx)(12)), (0, _dom.shift)({
          padding: (0, _convertPx.convertPx)(4),
          crossAxis: false,
          limiter: (0, _dom.limitShift)()
        }), (0, _dom.flip)(), (0, _dom.hide)(), (0, _dom.arrow)({
          element: arrowElement,
          padding: (0, _convertPx.convertPx)(12)
        })]
      });
      Object.assign(floating.style, {
        left: `${x}px`,
        top: `${y}px`
      });
      const side = realPlacement.split('-')[0];
      const arrowSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[side];
      const {
        x: arrowX,
        y: arrowY
      } = (_c = middlewareData.arrow) !== null && _c !== void 0 ? _c : {};
      Object.assign(arrowElement.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [arrowSide]: `-${(0, _convertPx.convertPx)(8)}px`
      });
      const arrowRotate = {
        top: '0deg',
        bottom: '180deg',
        left: '270deg',
        right: '90deg'
      }[side];
      arrowElement.style.setProperty('--arrow-icon-rotate', arrowRotate);
    });
  }

  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    update();
  });
  (0, _react.useEffect)(() => {
    if (!targetElement) return;
    if (!props.trigger) return;

    function handleClick() {
      setVisible(v => !v);
    }

    targetElement.addEventListener('click', handleClick);
    return () => {
      targetElement.removeEventListener('click', handleClick);
    };
  }, [targetElement, props.trigger]);
  (0, _react.useEffect)(() => {
    const floatingElement = floatingRef.current;
    if (!targetElement || !floatingElement) return;
    return (0, _dom.autoUpdate)(targetElement, floatingElement, update, {
      elementResize: typeof ResizeObserver !== 'undefined'
    });
  }, [targetElement]);
  (0, _ahooks.useClickAway)(() => {
    if (!props.trigger) return;
    setVisible(false);
  }, () => {
    var _a;

    return (_a = targetRef.current) === null || _a === void 0 ? void 0 : _a.element;
  });
  const shouldRender = (0, _shouldRender.useShouldRender)(visible, false, props.destroyOnHide);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_wrapper.Wrapper, {
    ref: targetRef
  }, props.children), shouldRender && (0, _renderToContainer.renderToContainer)(props.getContainer, floating));
});
exports.Popover = Popover;
}, function(modId) { var map = {"../../utils/use-props-value":1656641690123,"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/with-stop-propagation":1656641690099,"./arrow":1656641690244,"../../utils/render-to-container":1656641690095,"./wrapper":1656641690245,"../../utils/should-render":1656641690097,"./normalize-placement":1656641690246,"../../utils/convert-px":1656641690247}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690244, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Arrow = (0, _react.memo)(props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("svg", {
    viewBox: '0 0 30 16'
  }, _react.default.createElement("g", {
    fill: 'currentColor'
  }, _react.default.createElement("path", {
    d: 'M0,0 L30,0 L18.07289,14.312538 C16.65863,16.009645 14.13637,16.238942 12.43926,14.824685 C12.25341,14.669808 12.08199,14.49839 11.92711,14.312538 L0,0 L0,0 Z'
  }))));
});
exports.Arrow = Arrow;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690245, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Wrapper extends _react.default.Component {
  constructor() {
    super(...arguments);
    this.element = null;
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    const node = (0, _reactDom.findDOMNode)(this);

    if (node instanceof Element) {
      this.element = node;
    } else {
      this.element = null;
    }
  }

  render() {
    return _react.default.Children.only(this.props.children);
  }

}

exports.Wrapper = Wrapper;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690246, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizePlacement = normalizePlacement;
const record = {
  'topLeft': 'top-start',
  'topRight': 'top-end',
  'bottomLeft': 'bottom-start',
  'bottomRight': 'bottom-end',
  'leftTop': 'left-start',
  'leftBottom': 'left-end',
  'rightTop': 'right-start',
  'rightBottom': 'right-end'
};

function normalizePlacement(placement) {
  var _a;

  return (_a = record[placement]) !== null && _a !== void 0 ? _a : placement;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690247, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertPx = convertPx;

var _canUseDom = require("./can-use-dom");

var _isDev = require("./is-dev");

var _devLog = require("./dev-log");

let tenPxTester = null;
let tester = null;

if (_canUseDom.canUseDom) {
  tenPxTester = document.createElement('div');
  tenPxTester.className = 'adm-px-tester';
  tenPxTester.style.setProperty('--size', '10');
  document.body.appendChild(tenPxTester);
  tester = document.createElement('div');
  tester.className = 'adm-px-tester';
  document.body.appendChild(tester);

  if (_isDev.isDev) {
    if (window.getComputedStyle(tester).position !== 'fixed') {
      (0, _devLog.devError)('Global', 'The px tester is not rendering properly. Please make sure you have imported `antd-mobile/es/global`.');
    }
  }
}

function convertPx(px) {
  if (tenPxTester === null || tester === null) return px;

  if (tenPxTester.getBoundingClientRect().height === 10) {
    return px;
  }

  tester.style.setProperty('--size', px.toString());
  return tester.getBoundingClientRect().height;
}
}, function(modId) { var map = {"./can-use-dom":1656641690076,"./is-dev":1656641690147,"./dev-log":1656641690148}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690248, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undefinedFallback = undefinedFallback;

function undefinedFallback(...items) {
  let i;

  for (i = 0; i < items.length; i++) {
    if (items[i] !== undefined) break;
  }

  return items[i];
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690249, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Watcher = exports.FormSubscribe = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rcFieldForm = require("rc-field-form");

var _ahooks = require("ahooks");

var _useIsomorphicUpdateLayoutEffect = require("../../utils/use-isomorphic-update-layout-effect");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FormSubscribe = props => {
  const update = (0, _ahooks.useUpdate)();
  const form = (0, _react.useContext)(_rcFieldForm.FieldContext);
  return _react.default.createElement(_react.default.Fragment, null, props.children(form.getFieldsValue(props.to), form), props.to.map(namePath => _react.default.createElement(Watcher, {
    key: namePath.toString(),
    form: form,
    namePath: namePath,
    onChange: update
  })));
};

exports.FormSubscribe = FormSubscribe;
const Watcher = (0, _react.memo)(props => {
  const value = (0, _rcFieldForm.useWatch)(props.namePath, props.form);
  (0, _useIsomorphicUpdateLayoutEffect.useIsomorphicUpdateLayoutEffect)(() => {
    props.onChange();
  }, [value]);
  return null;
});
exports.Watcher = Watcher;
}, function(modId) { var map = {"../../utils/use-isomorphic-update-layout-effect":1656641690131}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690250, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./grid.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _grid2 = require("./grid");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_grid2.Grid, {
  Item: _grid2.GridItem
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./grid":1656641690251}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690251, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridItem = exports.Grid = void 0;

var _withDefaultProps = require("../../utils/with-default-props");

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _toCssLength = require("../../utils/to-css-length");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-grid`;

const Grid = props => {
  const style = {
    '--columns': props.columns.toString()
  };
  const {
    gap
  } = props;

  if (gap !== undefined) {
    if (Array.isArray(gap)) {
      style['--gap-horizontal'] = (0, _toCssLength.toCSSLength)(gap[0]);
      style['--gap-vertical'] = (0, _toCssLength.toCSSLength)(gap[1]);
    } else {
      style['--gap'] = (0, _toCssLength.toCSSLength)(gap);
    }
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix,
    style: style
  }, props.children));
};

exports.Grid = Grid;

const GridItem = p => {
  const props = (0, _withDefaultProps.mergeProps)({
    span: 1
  }, p);
  const itemStyle = {
    '--item-span': props.span
  };
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: `${classPrefix}-item`,
    style: itemStyle,
    onClick: props.onClick
  }, props.children));
};

exports.GridItem = GridItem;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/to-css-length":1656641690204}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690252, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imageUploader = require("./image-uploader");

require("./image-uploader.css");

var _default = _imageUploader.ImageUploader;
exports.default = _default;
}, function(modId) { var map = {"./image-uploader":1656641690253}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690253, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUploader = void 0;

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _antdMobileIcons = require("antd-mobile-icons");

var _withDefaultProps = require("../../utils/with-default-props");

var _imageViewer = _interopRequireDefault(require("../image-viewer"));

var _previewItem = _interopRequireDefault(require("./preview-item"));

var _usePropsValue = require("../../utils/use-props-value");

var _ahooks = require("ahooks");

var _space = _interopRequireDefault(require("../space"));

var _nativeProps = require("../../utils/native-props");

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-image-uploader`;
const defaultProps = {
  disableUpload: false,
  deletable: true,
  showUpload: true,
  multiple: false,
  maxCount: 0,
  defaultValue: [],
  accept: 'image/*',
  preview: true,
  showFailed: true,
  imageFit: 'cover'
};

const ImageUploader = p => {
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);
  const [tasks, setTasks] = (0, _react.useState)([]);
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    setTasks(prev => prev.filter(task => {
      if (task.url === undefined) return true;
      return !value.some(fileItem => fileItem.url === task.url);
    }));
  }, [value]);
  const idCountRef = (0, _react.useRef)(0);
  const {
    maxCount,
    onPreview
  } = props;

  function processFile(file, fileList) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      const {
        beforeUpload
      } = props;
      let transformedFile = file;
      transformedFile = yield beforeUpload === null || beforeUpload === void 0 ? void 0 : beforeUpload(file, fileList);
      return transformedFile;
    });
  }

  function onChange(e) {
    var _a;

    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      e.persist();
      const {
        files: rawFiles
      } = e.target;
      if (!rawFiles) return;
      let files = [].slice.call(rawFiles);
      e.target.value = ''; // HACK: fix the same file doesn't trigger onChange

      if (props.beforeUpload) {
        const postFiles = files.map(file => {
          return processFile(file, files);
        });
        yield Promise.all(postFiles).then(filesList => {
          files = filesList.filter(Boolean);
        });
      }

      if (files.length === 0) {
        return;
      }

      if (maxCount > 0) {
        const exceed = value.length + files.length - maxCount;

        if (exceed > 0) {
          files = files.slice(0, files.length - exceed);
          (_a = props.onCountExceed) === null || _a === void 0 ? void 0 : _a.call(props, exceed);
        }
      }

      const newTasks = files.map(file => ({
        id: idCountRef.current++,
        status: 'pending',
        file
      }));
      setTasks(prev => [...prev, ...newTasks]);
      yield Promise.all(newTasks.map(currentTask => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
        try {
          const result = yield props.upload(currentTask.file);
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return Object.assign(Object.assign({}, task), {
                  url: result.url
                });
              }

              return task;
            });
          });
          setValue(prev => {
            const newVal = Object.assign({}, result);
            return [...prev, newVal];
          });
        } catch (e) {
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return Object.assign(Object.assign({}, task), {
                  status: 'fail'
                });
              }

              return task;
            });
          });
          throw e;
        }
      }))).catch(error => console.error(error));
    });
  }

  const imageViewerHandlerRef = (0, _react.useRef)(null);

  function previewImage(index) {
    imageViewerHandlerRef.current = _imageViewer.default.Multi.show({
      images: value.map(fileItem => fileItem.url),
      defaultIndex: index,
      onClose: () => {
        imageViewerHandlerRef.current = null;
      }
    });
  }

  (0, _ahooks.useUnmount)(() => {
    var _a;

    (_a = imageViewerHandlerRef.current) === null || _a === void 0 ? void 0 : _a.close();
  });
  const showUpload = props.showUpload && (maxCount === 0 || value.length + tasks.length < maxCount);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement(_space.default, {
    className: `${classPrefix}-space`,
    wrap: true,
    block: true
  }, value.map((fileItem, index) => {
    var _a, _b;

    return _react.default.createElement(_previewItem.default, {
      key: (_a = fileItem.key) !== null && _a !== void 0 ? _a : index,
      url: (_b = fileItem.thumbnailUrl) !== null && _b !== void 0 ? _b : fileItem.url,
      deletable: props.deletable,
      imageFit: props.imageFit,
      onClick: () => {
        if (props.preview) {
          previewImage(index);
        }

        onPreview && onPreview(index, fileItem);
      },
      onDelete: () => (0, _tslib.__awaiter)(void 0, void 0, void 0, function* () {
        var _c;

        const canDelete = yield (_c = props.onDelete) === null || _c === void 0 ? void 0 : _c.call(props, fileItem);
        if (canDelete === false) return;
        setValue(value.filter((x, i) => i !== index));
      })
    });
  }), tasks.map(task => {
    if (!props.showFailed && task.status === 'fail') {
      return null;
    }

    return _react.default.createElement(_previewItem.default, {
      key: task.id,
      file: task.file,
      deletable: task.status !== 'pending',
      status: task.status,
      imageFit: props.imageFit,
      onDelete: () => {
        setTasks(tasks.filter(x => x.id !== task.id));
      }
    });
  }), showUpload && _react.default.createElement("div", {
    className: `${classPrefix}-upload-button-wrap`
  }, props.children ? props.children : _react.default.createElement("span", {
    className: `${classPrefix}-cell ${classPrefix}-upload-button`,
    role: 'button',
    "aria-label": locale.ImageUploader.upload
  }, _react.default.createElement("span", {
    className: `${classPrefix}-upload-button-icon`
  }, _react.default.createElement(_antdMobileIcons.AddOutline, null))), !props.disableUpload && _react.default.createElement("input", {
    capture: props.capture,
    accept: props.accept,
    multiple: props.multiple,
    type: 'file',
    className: `${classPrefix}-input`,
    onChange: onChange,
    "aria-hidden": true
  })))));
};

exports.ImageUploader = ImageUploader;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../image-viewer":1656641690254,"./preview-item":1656641690260,"../../utils/use-props-value":1656641690123,"../space":1656641690261,"../../utils/native-props":1656641690085,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690254, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./image-viewer.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _imageViewer2 = require("./image-viewer");

var _methods = require("./methods");

const Multi = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_imageViewer2.MultiImageViewer, {
  show: _methods.showMultiImageViewer
});

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_imageViewer2.ImageViewer, {
  Multi,
  show: _methods.showImageViewer,
  clear: _methods.clearImageViewer
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./image-viewer":1656641690255,"./methods":1656641690259}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690255, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiImageViewer = exports.ImageViewer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _renderToContainer = require("../../utils/render-to-container");

var _mask = _interopRequireDefault(require("../mask"));

var _safeArea = _interopRequireDefault(require("../safe-area"));

var _slide = require("./slide");

var _slides = require("./slides");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-image-viewer`;
const defaultProps = {
  maxZoom: 3,
  getContainer: null,
  visible: false
};

const ImageViewer = p => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);

  const node = _react.default.createElement(_mask.default, {
    visible: props.visible,
    disableBodyScroll: false,
    opacity: 'thick',
    afterClose: props.afterClose
  }, _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, props.image && _react.default.createElement(_slide.Slide, {
    image: props.image,
    onTap: () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    },
    maxZoom: props.maxZoom
  })), props.image && _react.default.createElement("div", {
    className: `${classPrefix}-footer`
  }, (_a = props.renderFooter) === null || _a === void 0 ? void 0 : _a.call(props, props.image), _react.default.createElement(_safeArea.default, {
    position: 'bottom'
  })));

  return (0, _renderToContainer.renderToContainer)(props.getContainer, node);
};

exports.ImageViewer = ImageViewer;
const multiDefaultProps = Object.assign(Object.assign({}, defaultProps), {
  defaultIndex: 0
});
const MultiImageViewer = (0, _react.forwardRef)((p, ref) => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(multiDefaultProps, p);
  const [index, setIndex] = (0, _react.useState)(props.defaultIndex);
  const slidesRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    swipeTo: (index, immediate) => {
      var _a;

      setIndex(index);
      (_a = slidesRef.current) === null || _a === void 0 ? void 0 : _a.swipeTo(index, immediate);
    }
  }));
  const onSlideChange = (0, _react.useCallback)(index => {
    var _a;

    setIndex(index);
    (_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, index);
  }, [props.onIndexChange]);

  const node = _react.default.createElement(_mask.default, {
    visible: props.visible,
    disableBodyScroll: false,
    opacity: 'thick',
    afterClose: props.afterClose
  }, _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, props.images && _react.default.createElement(_slides.Slides, {
    ref: slidesRef,
    defaultIndex: index,
    onIndexChange: onSlideChange,
    images: props.images,
    onTap: () => {
      var _a;

      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    },
    maxZoom: props.maxZoom
  })), props.images && _react.default.createElement("div", {
    className: `${classPrefix}-footer`
  }, (_a = props.renderFooter) === null || _a === void 0 ? void 0 : _a.call(props, props.images[index], index), _react.default.createElement(_safeArea.default, {
    position: 'bottom'
  })));

  return (0, _renderToContainer.renderToContainer)(props.getContainer, node);
});
exports.MultiImageViewer = MultiImageViewer;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/render-to-container":1656641690095,"../mask":1656641690089,"../safe-area":1656641690102,"./slide":1656641690256,"./slides":1656641690258}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690256, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slide = void 0;

var _react = _interopRequireWildcard(require("react"));

var _web = require("@react-spring/web");

var _rubberband = require("../../utils/rubberband");

var _useDragAndPinch = require("../../utils/use-drag-and-pinch");

var _bound = require("../../utils/bound");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-image-viewer`;

const Slide = props => {
  const {
    dragLockRef
  } = props;
  const controlRef = (0, _react.useRef)(null);
  const imgRef = (0, _react.useRef)(null);
  const [{
    zoom,
    x,
    y
  }, api] = (0, _web.useSpring)(() => ({
    zoom: 1,
    x: 0,
    y: 0,
    config: {
      tension: 200
    }
  }));
  const pinchLockRef = (0, _react.useRef)(false);

  function boundXY([x, y], rubberband) {
    const currentZoom = zoom.get();
    let xOffset = 0,
        yOffset = 0;

    if (imgRef.current && controlRef.current) {
      xOffset = ((currentZoom * imgRef.current.width || 0) - controlRef.current.clientWidth) / 2;
      yOffset = ((currentZoom * imgRef.current.height || 0) - controlRef.current.clientHeight) / 2;
    }

    xOffset = xOffset > 0 ? xOffset : 0;
    yOffset = yOffset > 0 ? yOffset : 0;
    const bounds = {
      left: -xOffset,
      right: xOffset,
      top: -yOffset,
      bottom: yOffset
    };

    if (rubberband) {
      return [(0, _rubberband.rubberbandIfOutOfBounds)(x, bounds.left, bounds.right, currentZoom * 50), (0, _rubberband.rubberbandIfOutOfBounds)(y, bounds.top, bounds.bottom, currentZoom * 50)];
    } else {
      return [(0, _bound.bound)(x, bounds.left, bounds.right), (0, _bound.bound)(y, bounds.top, bounds.bottom)];
    }
  }

  (0, _useDragAndPinch.useDragAndPinch)({
    onDrag: state => {
      if (state.tap && state.elapsedTime > 0 && state.elapsedTime < 1000) {
        // 判断点击时间>0是为了过滤掉非正常操作，例如用户长按选择图片之后的取消操作（也是一次点击）
        props.onTap();
        return;
      }

      const currentZoom = zoom.get();

      if (dragLockRef) {
        dragLockRef.current = currentZoom !== 1;
      }

      if (!pinchLockRef.current && currentZoom <= 1) {
        api.start({
          x: 0,
          y: 0
        });
      } else {
        if (state.last) {
          const [x, y] = boundXY([state.offset[0] + state.velocity[0] * state.direction[0] * 200, state.offset[1] + state.velocity[1] * state.direction[1] * 200], false);
          api.start({
            x,
            y
          });
        } else {
          const [x, y] = boundXY(state.offset, true);
          api.start({
            x,
            y,
            immediate: true
          });
        }
      }
    },
    onPinch: state => {
      var _a;

      pinchLockRef.current = !state.last;
      const [d] = state.offset;
      if (d < 0) return;
      const nextZoom = state.last ? (0, _bound.bound)(d, 1, props.maxZoom) : d;
      api.start({
        zoom: nextZoom,
        immediate: !state.last
      });
      (_a = props.onZoomChange) === null || _a === void 0 ? void 0 : _a.call(props, nextZoom);

      if (state.last && nextZoom <= 1) {
        api.start({
          x: 0,
          y: 0
        });

        if (dragLockRef) {
          dragLockRef.current = false;
        }
      } else {
        if (dragLockRef) {
          dragLockRef.current = true;
        }
      }
    }
  }, {
    target: controlRef,
    drag: {
      // filterTaps: true,
      from: () => [x.get(), y.get()],
      pointer: {
        touch: true
      }
    },
    pinch: {
      from: () => [zoom.get(), 0],
      pointer: {
        touch: true
      }
    }
  });
  return _react.default.createElement("div", {
    className: `${classPrefix}-slide`,
    onPointerMove: e => {
      if (zoom.get() !== 1) {
        e.stopPropagation();
      }
    }
  }, _react.default.createElement("div", {
    className: `${classPrefix}-control`,
    ref: controlRef
  }, _react.default.createElement(_web.animated.div, {
    className: `${classPrefix}-image-wrapper`,
    style: {
      translateX: x,
      translateY: y,
      scale: zoom
    }
  }, _react.default.createElement("img", {
    ref: imgRef,
    src: props.image,
    draggable: false,
    alt: props.image
  }))));
};

exports.Slide = Slide;
}, function(modId) { var map = {"../../utils/rubberband":1656641690145,"../../utils/use-drag-and-pinch":1656641690257,"../../utils/bound":1656641690130}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690257, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDragAndPinch = void 0;

var _react = require("@use-gesture/react");

const useDragAndPinch = (0, _react.createUseGesture)([_react.dragAction, _react.pinchAction]);
exports.useDragAndPinch = useDragAndPinch;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690258, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slides = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@use-gesture/react");

var _web = require("@react-spring/web");

var _slide = require("./slide");

var _convertPx = require("../../utils/convert-px");

var _bound = require("../../utils/bound");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-image-viewer`;
const Slides = (0, _react.forwardRef)((props, ref) => {
  const slideWidth = window.innerWidth + (0, _convertPx.convertPx)(16);
  const [{
    x
  }, api] = (0, _web.useSpring)(() => ({
    x: props.defaultIndex * slideWidth,
    config: {
      tension: 250,
      clamp: true
    }
  }));
  const count = props.images.length;

  function swipeTo(index, immediate = false) {
    var _a;

    const i = (0, _bound.bound)(index, 0, count - 1);
    (_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, i);
    api.start({
      x: i * slideWidth,
      immediate
    });
  }

  (0, _react.useImperativeHandle)(ref, () => ({
    swipeTo
  }));
  const dragLockRef = (0, _react.useRef)(false);
  const bind = (0, _react2.useDrag)(state => {
    if (dragLockRef.current) return;
    const [offsetX] = state.offset;

    if (state.last) {
      const minIndex = Math.floor(offsetX / slideWidth);
      const maxIndex = minIndex + 1;
      const velocityOffset = Math.min(state.velocity[0] * 2000, slideWidth) * state.direction[0];
      swipeTo((0, _bound.bound)(Math.round((offsetX + velocityOffset) / slideWidth), minIndex, maxIndex));
    } else {
      api.start({
        x: offsetX,
        immediate: true
      });
    }
  }, {
    transform: ([x, y]) => [-x, y],
    from: () => [x.get(), 0],
    bounds: () => {
      return {
        left: 0,
        right: (count - 1) * slideWidth
      };
    },
    rubberband: true,
    axis: 'x',
    pointer: {
      touch: true
    }
  });
  return _react.default.createElement("div", Object.assign({
    className: `${classPrefix}-slides`
  }, bind()), _react.default.createElement(_web.animated.div, {
    className: `${classPrefix}-indicator`
  }, x.to(v => {
    const index = (0, _bound.bound)(Math.round(v / slideWidth), 0, count - 1);
    return `${index + 1} / ${count}`;
  })), _react.default.createElement(_web.animated.div, {
    className: `${classPrefix}-slides-inner`,
    style: {
      x: x.to(x => -x)
    }
  }, props.images.map(image => _react.default.createElement(_slide.Slide, {
    key: image,
    image: image,
    onTap: props.onTap,
    maxZoom: props.maxZoom,
    onZoomChange: zoom => {
      if (zoom !== 1) {
        const index = Math.round(x.get() / slideWidth);
        api.start({
          x: index * slideWidth
        });
      }
    },
    dragLockRef: dragLockRef
  }))));
});
exports.Slides = Slides;
}, function(modId) { var map = {"./slide":1656641690256,"../../utils/convert-px":1656641690247,"../../utils/bound":1656641690130}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690259, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearImageViewer = clearImageViewer;
exports.showImageViewer = showImageViewer;
exports.showMultiImageViewer = showMultiImageViewer;

var _react = _interopRequireDefault(require("react"));

var _imageViewer = require("./image-viewer");

var _renderImperatively = require("../../utils/render-imperatively");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handlerSet = new Set();

function showImageViewer(props) {
  clearImageViewer();
  const handler = (0, _renderImperatively.renderImperatively)(_react.default.createElement(_imageViewer.ImageViewer, Object.assign({}, props, {
    afterClose: () => {
      var _a;

      handlerSet.delete(handler);
      (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  })));
  handlerSet.add(handler);
  return handler;
}

function showMultiImageViewer(props) {
  clearImageViewer();
  const handler = (0, _renderImperatively.renderImperatively)(_react.default.createElement(_imageViewer.MultiImageViewer, Object.assign({}, props, {
    afterClose: () => {
      var _a;

      handlerSet.delete(handler);
      (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  })));
  handlerSet.add(handler);
  return handler;
}

function clearImageViewer() {
  handlerSet.forEach(handler => {
    handler.close();
  });
  handlerSet.clear();
}
}, function(modId) { var map = {"./image-viewer":1656641690255,"../../utils/render-imperatively":1656641690104}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690260, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antdMobileIcons = require("antd-mobile-icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _image = _interopRequireDefault(require("../image"));

var _spinLoading = _interopRequireDefault(require("../spin-loading"));

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-image-uploader`;

const PreviewItem = props => {
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const {
    url,
    file,
    deletable,
    onDelete,
    imageFit
  } = props;
  const src = (0, _react.useMemo)(() => {
    if (url) {
      return url;
    }

    if (file) {
      return URL.createObjectURL(file);
    }

    return '';
  }, [url, file]);

  function renderLoading() {
    return props.status === 'pending' && _react.default.createElement("div", {
      className: `${classPrefix}-cell-mask`
    }, _react.default.createElement("span", {
      className: `${classPrefix}-cell-loading`
    }, _react.default.createElement(_spinLoading.default, {
      color: 'white'
    }), _react.default.createElement("span", {
      className: `${classPrefix}-cell-mask-message`
    }, locale.ImageUploader.uploading)));
  }

  function renderDelete() {
    return deletable && _react.default.createElement("span", {
      className: `${classPrefix}-cell-delete`,
      onClick: onDelete
    }, _react.default.createElement(_antdMobileIcons.CloseOutline, {
      className: `${classPrefix}-cell-delete-icon`
    }));
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-cell`, props.status === 'fail' && `${classPrefix}-cell-fail`)
  }, _react.default.createElement(_image.default, {
    className: `${classPrefix}-cell-image`,
    src: src,
    fit: imageFit,
    onClick: props.onClick
  }), renderLoading(), renderDelete());
};

var _default = PreviewItem;
exports.default = _default;
}, function(modId) { var map = {"../image":1656641690202,"../spin-loading":1656641690152,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690261, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./space.css");

var _space2 = require("./space");

var _default = _space2.Space;
exports.default = _default;
}, function(modId) { var map = {"./space":1656641690262}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690262, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Space = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-space`;
const defaultProps = {
  direction: 'horizontal'
};

const Space = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    direction,
    onClick
  } = props;
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-wrap`]: props.wrap,
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-${direction}`]: true,
      [`${classPrefix}-align-${props.align}`]: !!props.align,
      [`${classPrefix}-justify-${props.justify}`]: !!props.justify
    }),
    onClick: onClick
  }, _react.default.Children.map(props.children, child => {
    return child !== null && child !== undefined && _react.default.createElement("div", {
      className: `${classPrefix}-item`
    }, child);
  })));
};

exports.Space = Space;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690263, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./index-bar.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _panel = require("./panel");

var _indexBar2 = require("./index-bar");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_indexBar2.IndexBar, {
  Panel: _panel.Panel
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./panel":1656641690264,"./index-bar":1656641690265}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690264, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;

const Panel = () => null;

exports.Panel = Panel;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690265, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

var _ahooks = require("ahooks");

var _withDefaultProps = require("../../utils/with-default-props");

var _sidebar = require("./sidebar");

var _convertPx = require("../../utils/convert-px");

var _panel = require("./panel");

var _devLog = require("../../utils/dev-log");

var _traverseReactNode = require("../../utils/traverse-react-node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-index-bar`;
const defaultProps = {
  sticky: true
};
const IndexBar = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const titleHeight = (0, _convertPx.convertPx)(35);
  const bodyRef = (0, _react.useRef)(null);
  const indexItems = [];
  const panels = [];
  (0, _traverseReactNode.traverseReactNode)(props.children, child => {
    var _a;

    if (!_react.default.isValidElement(child)) return;

    if (child.type !== _panel.Panel) {
      (0, _devLog.devWarning)('IndexBar', 'The children of `IndexBar` must be `IndexBar.Panel` components.');
      return;
    }

    indexItems.push({
      index: child.props.index,
      brief: (_a = child.props.brief) !== null && _a !== void 0 ? _a : child.props.index.charAt(0)
    });
    panels.push((0, _nativeProps.withNativeProps)(child.props, _react.default.createElement("div", {
      key: child.props.index,
      "data-index": child.props.index,
      className: `${classPrefix}-anchor`
    }, _react.default.createElement("div", {
      className: `${classPrefix}-anchor-title`
    }, child.props.title || child.props.index), child.props.children)));
  });
  const [activeIndex, setActiveIndex] = (0, _react.useState)(() => {
    const firstItem = indexItems[0];
    return firstItem ? firstItem.index : null;
  });
  (0, _react.useImperativeHandle)(ref, () => ({
    scrollTo
  }));

  function scrollTo(index) {
    var _a;

    const body = bodyRef.current;
    if (!body) return;
    const children = body.children;

    for (let i = 0; i < children.length; i++) {
      const panel = children.item(i);
      if (!panel) continue;
      const panelIndex = panel.dataset['index'];

      if (panelIndex === index) {
        body.scrollTop = panel.offsetTop;
        setActiveIndex(index);
        activeIndex !== index && ((_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, index));
        return;
      }
    }
  }

  const {
    run: checkActiveIndex
  } = (0, _ahooks.useThrottleFn)(() => {
    var _a;

    const body = bodyRef.current;
    if (!body) return;
    const scrollTop = body.scrollTop;
    const elements = body.getElementsByClassName(`${classPrefix}-anchor`);

    for (let i = 0; i < elements.length; i++) {
      const panel = elements.item(i);
      if (!panel) continue;
      const panelIndex = panel.dataset['index'];
      if (!panelIndex) continue;

      if (panel.offsetTop + panel.clientHeight - titleHeight > scrollTop) {
        setActiveIndex(panelIndex);
        activeIndex !== panelIndex && ((_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, panelIndex));
        return;
      }
    }
  }, {
    wait: 50,
    trailing: true,
    leading: true
  });
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}`, {
      [`${classPrefix}-sticky`]: props.sticky
    })
  }, _react.default.createElement(_sidebar.Sidebar, {
    indexItems: indexItems,
    activeIndex: activeIndex,
    onActive: index => {
      scrollTo(index);
    }
  }), _react.default.createElement("div", {
    className: `${classPrefix}-body`,
    ref: bodyRef,
    onScroll: checkActiveIndex
  }, panels)));
});
exports.IndexBar = IndexBar;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"./sidebar":1656641690266,"../../utils/convert-px":1656641690247,"./panel":1656641690264,"../../utils/dev-log":1656641690148,"../../utils/traverse-react-node":1656641690134}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690266, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-index-bar`;

const Sidebar = props => {
  const [interacting, setInteracting] = (0, _react.useState)(false);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-sidebar`, {
      [`${classPrefix}-sidebar-interacting`]: interacting
    }),
    onMouseDown: () => {
      setInteracting(true);
    },
    onMouseUp: () => {
      setInteracting(false);
    },
    onTouchStart: () => {
      setInteracting(true);
    },
    onTouchEnd: () => {
      setInteracting(false);
    },
    onTouchMove: e => {
      if (!interacting) return;
      const {
        clientX,
        clientY
      } = e.touches[0];
      const target = document.elementFromPoint(clientX, clientY);
      if (!target) return;
      const index = target.dataset['index'];

      if (index) {
        props.onActive(index);
      }
    }
  }, props.indexItems.map(({
    index,
    brief
  }) => {
    const active = index === props.activeIndex;
    return _react.default.createElement("div", {
      className: `${classPrefix}-sidebar-row`,
      onMouseDown: () => {
        props.onActive(index);
      },
      onTouchStart: () => {
        props.onActive(index);
      },
      onMouseEnter: () => {
        if (interacting) {
          props.onActive(index);
        }
      },
      "data-index": index,
      key: index
    }, interacting && active && _react.default.createElement("div", {
      className: `${classPrefix}-sidebar-bubble`
    }, brief), _react.default.createElement("div", {
      className: (0, _classnames.default)(`${classPrefix}-sidebar-item`, {
        [`${classPrefix}-sidebar-item-active`]: active
      }),
      "data-index": index
    }, _react.default.createElement("div", null, brief)));
  }));
};

exports.Sidebar = Sidebar;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690267, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./infinite-scroll.css");

var _infiniteScroll2 = require("./infinite-scroll");

var _default = _infiniteScroll2.InfiniteScroll;
exports.default = _default;
}, function(modId) { var map = {"./infinite-scroll":1656641690268}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690268, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfiniteScroll = void 0;

var _tslib = require("tslib");

var _withDefaultProps = require("../../utils/with-default-props");

var _react = _interopRequireWildcard(require("react"));

var _ahooks = require("ahooks");

var _nativeProps = require("../../utils/native-props");

var _getScrollParent = require("../../utils/get-scroll-parent");

var _configProvider = require("../config-provider");

var _dotLoading = _interopRequireDefault(require("../dot-loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function isWindow(element) {
  return element === window;
}

const classPrefix = `adm-infinite-scroll`;
const defaultProps = {
  threshold: 250,
  children: (hasMore, failed, retry) => _react.default.createElement(InfiniteScrollContent, {
    hasMore: hasMore,
    failed: failed,
    retry: retry
  })
};

const InfiniteScroll = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [failed, setFailed] = (0, _react.useState)(false);
  const doLoadMore = (0, _ahooks.useLockFn)(isRetry => (0, _tslib.__awaiter)(void 0, void 0, void 0, function* () {
    try {
      yield props.loadMore(isRetry);
    } catch (e) {
      setFailed(true);
      throw e;
    }
  }));
  const elementRef = (0, _react.useRef)(null); // Prevent duplicated trigger of `check` function

  const [flag, setFlag] = (0, _react.useState)({});
  const nextFlagRef = (0, _react.useRef)(flag);
  const [scrollParent, setScrollParent] = (0, _react.useState)();
  const {
    run: check
  } = (0, _ahooks.useThrottleFn)(() => (0, _tslib.__awaiter)(void 0, void 0, void 0, function* () {
    if (nextFlagRef.current !== flag) return;
    if (!props.hasMore) return;
    const element = elementRef.current;
    if (!element) return;
    if (!element.offsetParent) return;
    const parent = (0, _getScrollParent.getScrollParent)(element);
    setScrollParent(parent);
    if (!parent) return;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const current = isWindow(parent) ? window.innerHeight : parent.getBoundingClientRect().bottom;

    if (current >= elementTop - props.threshold) {
      const nextFlag = {};
      nextFlagRef.current = nextFlag;
      yield doLoadMore(false);
      setFlag(nextFlag);
    }
  }), {
    wait: 100,
    leading: true,
    trailing: true
  }); // Make sure to trigger `loadMore` when content changes

  (0, _react.useEffect)(() => {
    check();
  });
  (0, _react.useEffect)(() => {
    const element = elementRef.current;
    if (!element) return;
    if (!scrollParent) return;

    function onScroll() {
      check();
    }

    scrollParent.addEventListener('scroll', onScroll);
    return () => {
      scrollParent.removeEventListener('scroll', onScroll);
    };
  }, [scrollParent]);

  function retry() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      setFailed(false);
      yield doLoadMore(true);
      setFlag(nextFlagRef.current);
    });
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix,
    ref: elementRef
  }, typeof props.children === 'function' ? props.children(props.hasMore, failed, retry) : props.children));
};

exports.InfiniteScroll = InfiniteScroll;

const InfiniteScrollContent = props => {
  const {
    locale
  } = (0, _configProvider.useConfig)();

  if (!props.hasMore) {
    return _react.default.createElement("span", null, locale.InfiniteScroll.noMore);
  }

  if (props.failed) {
    return _react.default.createElement("span", null, _react.default.createElement("span", {
      className: `${classPrefix}-failed-text`
    }, locale.InfiniteScroll.failedToLoad), _react.default.createElement("a", {
      onClick: () => {
        props.retry();
      }
    }, locale.InfiniteScroll.retry));
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", null, locale.common.loading), _react.default.createElement(_dotLoading.default, null));
};
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/get-scroll-parent":1656641690093,"../config-provider":1656641690077,"../dot-loading":1656641690116}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690269, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./input.css");

var _input2 = require("./input");

var _default = _input2.Input;
exports.default = _default;
}, function(modId) { var map = {"./input":1656641690270}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690270, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireWildcard(require("react"));

var _usePropsValue = require("../../utils/use-props-value");

var _antdMobileIcons = require("antd-mobile-icons");

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _ahooks = require("ahooks");

var _bound = require("../../utils/bound");

var _validate = require("../../utils/validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-input`;
const defaultProps = {
  defaultValue: '',
  onlyShowClearWhenFocus: true
};
const Input = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);
  const [hasFocus, setHasFocus] = (0, _react.useState)(false);
  const compositionStartRef = (0, _react.useRef)(false);
  const nativeInputRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => {
      var _a;

      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
      var _a;

      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    },

    get nativeElement() {
      return nativeInputRef.current;
    }

  }));

  const handleKeydown = e => {
    var _a;

    if (props.onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      props.onEnterPress(e);
    }

    (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    var _a;

    if (!props.enterKeyHint) return;
    (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.setAttribute('enterkeyhint', props.enterKeyHint);
    return () => {
      var _a;

      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.removeAttribute('enterkeyhint');
    };
  }, [props.enterKeyHint]);

  function checkValue() {
    let nextValue = value;

    if (props.type === 'number') {
      nextValue = nextValue && (0, _bound.bound)(parseFloat(nextValue), props.min, props.max).toString();
    }

    if (nextValue !== value) {
      setValue(nextValue);
    }
  }

  const shouldShowClear = (() => {
    if (!props.clearable || !value || props.readOnly) return false;

    if (props.onlyShowClearWhenFocus) {
      return hasFocus;
    } else {
      return true;
    }
  })();

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}`, props.disabled && `${classPrefix}-disabled`)
  }, _react.default.createElement("input", {
    ref: nativeInputRef,
    className: `${classPrefix}-element`,
    value: value,
    onChange: e => {
      setValue(e.target.value);
    },
    onFocus: e => {
      var _a;

      setHasFocus(true);
      (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onBlur: e => {
      var _a;

      setHasFocus(false);
      checkValue();
      (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    id: props.id,
    placeholder: props.placeholder,
    disabled: props.disabled,
    readOnly: props.readOnly,
    maxLength: props.maxLength,
    minLength: props.minLength,
    max: props.max,
    min: props.min,
    autoComplete: props.autoComplete,
    autoFocus: props.autoFocus,
    pattern: props.pattern,
    inputMode: props.inputMode,
    type: props.type,
    name: props.name,
    autoCapitalize: props.autoCapitalize,
    autoCorrect: props.autoCorrect,
    onKeyDown: handleKeydown,
    onKeyUp: props.onKeyUp,
    onCompositionStart: e => {
      var _a;

      compositionStartRef.current = true;
      (_a = props.onCompositionStart) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onCompositionEnd: e => {
      var _a;

      compositionStartRef.current = false;
      (_a = props.onCompositionEnd) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onClick: props.onClick,
    role: props.role,
    "aria-valuenow": props['aria-valuenow'],
    "aria-valuemax": props['aria-valuemax'],
    "aria-valuemin": props['aria-valuemin']
  }), shouldShowClear && _react.default.createElement("div", {
    className: `${classPrefix}-clear`,
    onMouseDown: e => {
      e.preventDefault();
    },
    onClick: () => {
      var _a, _b;

      setValue('');
      (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props); // https://github.com/ant-design/ant-design-mobile/issues/5212

      if ((0, _validate.isIOS)() && compositionStartRef.current) {
        compositionStartRef.current = false;
        (_b = nativeInputRef.current) === null || _b === void 0 ? void 0 : _b.blur();
      }
    }
  }, _react.default.createElement(_antdMobileIcons.CloseCircleFill, null))));
});
exports.Input = Input;
}, function(modId) { var map = {"../../utils/use-props-value":1656641690123,"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/bound":1656641690130,"../../utils/validate":1656641690118}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690271, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./jumbo-tabs.css");

var _jumboTabs2 = require("./jumbo-tabs");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_jumboTabs2.JumboTabs, {
  Tab: _jumboTabs2.JumboTab
});

exports.default = _default;
}, function(modId) { var map = {"./jumbo-tabs":1656641690272,"../../utils/attach-properties-to-component":1656641690083}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690272, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JumboTabs = exports.JumboTab = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _web = require("@react-spring/web");

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _useResizeEffect = require("../../utils/use-resize-effect");

var _useTabListScroll = require("../../utils/use-tab-list-scroll");

var _scrollMask = _interopRequireDefault(require("../scroll-mask"));

var _shouldRender = require("../../utils/should-render");

var _traverseReactNode = require("../../utils/traverse-react-node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-jumbo-tabs`;

const JumboTab = () => {
  return null;
};

exports.JumboTab = JumboTab;

const JumboTabs = props => {
  var _a;

  const tabListContainerRef = (0, _react.useRef)(null);
  const rootRef = (0, _react.useRef)(null);
  const keyToIndexRecord = {};
  let firstActiveKey = null;
  const panes = [];
  (0, _traverseReactNode.traverseReactNode)(props.children, (child, index) => {
    if (!_react.default.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;

    if (index === 0) {
      firstActiveKey = key;
    }

    const length = panes.push(child);
    keyToIndexRecord[key] = length - 1;
  });
  const [activeKey, setActiveKey] = (0, _usePropsValue.usePropsValue)({
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : firstActiveKey,
    onChange: v => {
      var _a;

      if (v === null) return;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  const {
    scrollLeft,
    animate
  } = (0, _useTabListScroll.useTabListScroll)(tabListContainerRef, keyToIndexRecord[activeKey]);
  (0, _useResizeEffect.useResizeEffect)(() => {
    animate(true);
  }, rootRef);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix,
    ref: rootRef
  }, _react.default.createElement("div", {
    className: `${classPrefix}-header`
  }, _react.default.createElement(_scrollMask.default, {
    scrollTrackRef: tabListContainerRef
  }), _react.default.createElement(_web.animated.div, {
    className: `${classPrefix}-tab-list`,
    ref: tabListContainerRef,
    scrollLeft: scrollLeft
  }, panes.map(pane => (0, _nativeProps.withNativeProps)(pane.props, _react.default.createElement("div", {
    key: pane.key,
    className: `${classPrefix}-tab-wrapper`
  }, _react.default.createElement("div", {
    onClick: () => {
      const {
        key
      } = pane;
      if (pane.props.disabled) return;

      if (key === undefined || key === null) {
        return;
      }

      setActiveKey(key.toString());
    },
    className: (0, _classnames.default)(`${classPrefix}-tab`, {
      [`${classPrefix}-tab-active`]: pane.key === activeKey,
      [`${classPrefix}-tab-disabled`]: pane.props.disabled
    })
  }, _react.default.createElement("div", {
    className: `${classPrefix}-tab-title`
  }, pane.props.title), _react.default.createElement("div", {
    className: `${classPrefix}-tab-description`
  }, pane.props.description))))))), panes.map(pane => {
    if (pane.props.children === undefined) {
      return null;
    }

    const active = pane.key === activeKey;
    return _react.default.createElement(_shouldRender.ShouldRender, {
      key: pane.key,
      active: active,
      forceRender: pane.props.forceRender,
      destroyOnClose: pane.props.destroyOnClose
    }, _react.default.createElement("div", {
      className: `${classPrefix}-content`,
      style: {
        display: active ? 'block' : 'none'
      }
    }, pane.props.children));
  })));
};

exports.JumboTabs = JumboTabs;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"../../utils/use-resize-effect":1656641690127,"../../utils/use-tab-list-scroll":1656641690128,"../scroll-mask":1656641690132,"../../utils/should-render":1656641690097,"../../utils/traverse-react-node":1656641690134}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690273, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../dot-loading/dot-loading.css");

var _dotLoading2 = require("../dot-loading/dot-loading");

// Deprecated
var _default = _dotLoading2.DotLoading;
exports.default = _default;
}, function(modId) { var map = {"../dot-loading/dot-loading":1656641690117}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690274, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./modal.css");

var _show = require("./show");

var _alert = require("./alert");

var _confirm = require("./confirm");

var _clear = require("./clear");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _modal2 = require("./modal");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_modal2.Modal, {
  show: _show.show,
  alert: _alert.alert,
  confirm: _confirm.confirm,
  clear: _clear.clear
});

exports.default = _default;
}, function(modId) { var map = {"./show":1656641690275,"./alert":1656641690278,"./confirm":1656641690279,"./clear":1656641690280,"../../utils/attach-properties-to-component":1656641690083,"./modal":1656641690276}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690275, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeFnSet = void 0;
exports.show = show;

var _react = _interopRequireDefault(require("react"));

var _modal = require("./modal");

var _renderImperatively = require("../../utils/render-imperatively");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const closeFnSet = new Set();
exports.closeFnSet = closeFnSet;

function show(props) {
  const handler = (0, _renderImperatively.renderImperatively)(_react.default.createElement(_modal.Modal, Object.assign({}, props, {
    afterClose: () => {
      var _a;

      closeFnSet.delete(handler.close);
      (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  })));
  closeFnSet.add(handler.close);
  return handler;
}
}, function(modId) { var map = {"./modal":1656641690276,"../../utils/render-imperatively":1656641690104}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690276, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _tslib = require("tslib");

var _react = _interopRequireDefault(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _modalActionButton = require("./modal-action-button");

var _image = _interopRequireDefault(require("../image"));

var _space = _interopRequireDefault(require("../space"));

var _autoCenter = _interopRequireDefault(require("../auto-center"));

var _centerPopup = _interopRequireDefault(require("../center-popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultProps = {
  actions: [],
  closeOnAction: false,
  closeOnMaskClick: false,
  getContainer: null
};

const Modal = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);

  const element = _react.default.createElement(_react.default.Fragment, null, !!props.image && _react.default.createElement("div", {
    className: cls('image-container')
  }, _react.default.createElement(_image.default, {
    src: props.image,
    alt: 'modal header image',
    width: '100%'
  })), !!props.header && _react.default.createElement("div", {
    className: cls('header')
  }, _react.default.createElement(_autoCenter.default, null, props.header)), !!props.title && _react.default.createElement("div", {
    className: cls('title')
  }, props.title), _react.default.createElement("div", {
    className: cls('content')
  }, typeof props.content === 'string' ? _react.default.createElement(_autoCenter.default, null, props.content) : props.content), _react.default.createElement(_space.default, {
    direction: 'vertical',
    block: true,
    className: (0, _classnames.default)(cls('footer'), props.actions.length === 0 && cls('footer-empty'))
  }, props.actions.map((action, index) => {
    return _react.default.createElement(_modalActionButton.ModalActionButton, {
      key: action.key,
      action: action,
      onAction: () => (0, _tslib.__awaiter)(void 0, void 0, void 0, function* () {
        var _a, _b, _c;

        yield Promise.all([(_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action), (_b = props.onAction) === null || _b === void 0 ? void 0 : _b.call(props, action, index)]);

        if (props.closeOnAction) {
          (_c = props.onClose) === null || _c === void 0 ? void 0 : _c.call(props);
        }
      })
    });
  })));

  return _react.default.createElement(_centerPopup.default, {
    className: (0, _classnames.default)(cls(), props.className),
    style: props.style,
    afterClose: props.afterClose,
    afterShow: props.afterShow,
    showCloseButton: props.showCloseButton,
    closeOnMaskClick: props.closeOnMaskClick,
    onClose: props.onClose,
    visible: props.visible,
    getContainer: props.getContainer,
    bodyStyle: props.bodyStyle,
    bodyClassName: (0, _classnames.default)(cls('body'), props.image && cls('with-image'), props.bodyClassName),
    maskStyle: props.maskStyle,
    maskClassName: props.maskClassName,
    stopPropagation: props.stopPropagation,
    disableBodyScroll: props.disableBodyScroll,
    destroyOnClose: props.destroyOnClose,
    forceRender: props.forceRender
  }, element);
};

exports.Modal = Modal;

function cls(name = '') {
  return 'adm-modal' + (name && '-') + name;
}
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"./modal-action-button":1656641690277,"../image":1656641690202,"../space":1656641690261,"../auto-center":1656641690107,"../center-popup":1656641690179}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690277, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalActionButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("../button"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ModalActionButton = props => {
  const {
    action
  } = props;
  return (0, _nativeProps.withNativeProps)(props.action, _react.default.createElement(_button.default, {
    key: action.key,
    onClick: props.onAction,
    className: (0, _classnames.default)('adm-modal-button', {
      'adm-modal-button-primary': props.action.primary
    }),
    fill: props.action.primary ? 'solid' : 'none',
    size: props.action.primary ? 'large' : 'middle',
    block: true,
    color: action.danger ? 'danger' : 'primary',
    loading: 'auto',
    disabled: action.disabled
  }, action.text));
};

exports.ModalActionButton = ModalActionButton;
}, function(modId) { var map = {"../button":1656641690114,"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690278, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = alert;

var _show = require("./show");

var _withDefaultProps = require("../../utils/with-default-props");

var _configProvider = require("../config-provider");

function alert(p) {
  const defaultProps = {
    confirmText: (0, _configProvider.getDefaultConfig)().locale.Modal.ok
  };
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  return new Promise(resolve => {
    (0, _show.show)(Object.assign(Object.assign({}, props), {
      closeOnAction: true,
      actions: [{
        key: 'confirm',
        text: props.confirmText,
        primary: true
      }],
      onAction: props.onConfirm,
      onClose: () => {
        var _a;

        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
        resolve();
      }
    }));
  });
}
}, function(modId) { var map = {"./show":1656641690275,"../../utils/with-default-props":1656641690086,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690279, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirm = confirm;

var _tslib = require("tslib");

var _show = require("./show");

var _withDefaultProps = require("../../utils/with-default-props");

var _configProvider = require("../config-provider");

const defaultProps = {
  confirmText: '确认',
  cancelText: '取消'
};

function confirm(p) {
  const {
    locale
  } = (0, _configProvider.getDefaultConfig)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, {
    confirmText: locale.common.confirm,
    cancelText: locale.common.cancel
  }, p);
  return new Promise(resolve => {
    (0, _show.show)(Object.assign(Object.assign({}, props), {
      closeOnAction: true,
      onClose: () => {
        var _a;

        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
        resolve(false);
      },
      actions: [{
        key: 'confirm',
        text: props.confirmText,
        primary: true,
        onClick: () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          var _a;

          yield (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props);
          resolve(true);
        })
      }, {
        key: 'cancel',
        text: props.cancelText,
        onClick: () => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          var _b;

          yield (_b = props.onCancel) === null || _b === void 0 ? void 0 : _b.call(props);
          resolve(false);
        })
      }]
    }));
  });
}
}, function(modId) { var map = {"./show":1656641690275,"../../utils/with-default-props":1656641690086,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690280, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;

var _show = require("./show");

function clear() {
  _show.closeFnSet.forEach(close => {
    close();
  });
}
}, function(modId) { var map = {"./show":1656641690275}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690281, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./nav-bar.css");

var _navBar2 = require("./nav-bar");

var _default = _navBar2.NavBar;
exports.default = _default;
}, function(modId) { var map = {"./nav-bar":1656641690282}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690282, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _antdMobileIcons = require("antd-mobile-icons");

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-nav-bar`;
const defaultProps = {
  back: '',
  backArrow: true
};

const NavBar = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    back,
    backArrow
  } = props;
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix)
  }, _react.default.createElement("div", {
    className: `${classPrefix}-left`,
    role: 'button'
  }, back !== null && _react.default.createElement("div", {
    className: `${classPrefix}-back`,
    onClick: props.onBack
  }, backArrow && _react.default.createElement("span", {
    className: `${classPrefix}-back-arrow`
  }, backArrow === true ? _react.default.createElement(_antdMobileIcons.LeftOutline, null) : backArrow), _react.default.createElement("span", {
    "aria-hidden": 'true'
  }, back)), props.left), _react.default.createElement("div", {
    className: `${classPrefix}-title`
  }, props.children), _react.default.createElement("div", {
    className: `${classPrefix}-right`
  }, props.right)));
};

exports.NavBar = NavBar;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690283, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./notice-bar.css");

var _noticeBar2 = require("./notice-bar");

var _default = _noticeBar2.NoticeBar;
exports.default = _default;
}, function(modId) { var map = {"./notice-bar":1656641690284}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690284, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoticeBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _antdMobileIcons = require("antd-mobile-icons");

var _ahooks = require("ahooks");

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _useResizeEffect = require("../../utils/use-resize-effect");

var _useMutationEffect = require("../../utils/use-mutation-effect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-notice-bar`;
const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
  icon: _react.default.createElement(_antdMobileIcons.SoundOutline, null)
};
const NoticeBar = (0, _react.memo)(p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const containerRef = (0, _react.useRef)(null);
  const textRef = (0, _react.useRef)(null);
  const [visible, setVisible] = (0, _react.useState)(true);
  const speed = props.speed;
  const delayLockRef = (0, _react.useRef)(true);
  const animatingRef = (0, _react.useRef)(false);

  function start() {
    if (delayLockRef.current) return;
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    if (container.offsetWidth >= text.offsetWidth) {
      animatingRef.current = false;
      text.style.removeProperty('transition-duration');
      text.style.removeProperty('transform');
      return;
    }

    if (animatingRef.current) return;
    const initial = !text.style.transform;
    text.style.transitionDuration = '0s';

    if (initial) {
      text.style.transform = 'translateX(0)';
    } else {
      text.style.transform = `translateX(${container.offsetWidth}px)`;
    }

    const distance = initial ? text.offsetWidth : container.offsetWidth + text.offsetWidth;
    animatingRef.current = true;
    text.style.transitionDuration = `${Math.round(distance / speed)}s`;
    text.style.transform = `translateX(-${text.offsetWidth}px)`;
  }

  (0, _ahooks.useTimeout)(() => {
    delayLockRef.current = false;
    start();
  }, props.delay);
  (0, _useResizeEffect.useResizeEffect)(() => {
    start();
  }, containerRef);
  (0, _useMutationEffect.useMutationEffect)(() => {
    start();
  }, textRef, {
    subtree: true,
    childList: true,
    characterData: true
  });
  if (!visible) return null;
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-${props.color}`)
  }, props.icon && _react.default.createElement("span", {
    className: `${classPrefix}-left`
  }, props.icon), _react.default.createElement("span", {
    ref: containerRef,
    className: `${classPrefix}-content`
  }, _react.default.createElement("span", {
    onTransitionEnd: () => {
      animatingRef.current = false;
      start();
    },
    ref: textRef,
    className: `${classPrefix}-content-inner`
  }, props.content)), (props.closeable || props.extra) && _react.default.createElement("span", {
    className: `${classPrefix}-right`
  }, props.extra, props.closeable && _react.default.createElement(_antdMobileIcons.CloseOutline, {
    className: `${classPrefix}-close-icon`,
    onClick: () => {
      var _a;

      setVisible(false);
      (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }))));
});
exports.NoticeBar = NoticeBar;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/use-resize-effect":1656641690127,"../../utils/use-mutation-effect":1656641690129}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690285, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./number-keyboard.css");

var _numberKeyboard2 = require("./number-keyboard");

var _default = _numberKeyboard2.NumberKeyboard;
exports.default = _default;
}, function(modId) { var map = {"./number-keyboard":1656641690286}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690286, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberKeyboard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _antdMobileIcons = require("antd-mobile-icons");

var _withDefaultProps = require("../../utils/with-default-props");

var _shuffle = require("../../utils/shuffle");

var _popup = _interopRequireDefault(require("../popup"));

var _nativeProps = require("../../utils/native-props");

var _safeArea = _interopRequireDefault(require("../safe-area"));

var _ahooks = require("ahooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = 'adm-number-keyboard';
const defaultProps = {
  defaultVisible: false,
  randomOrder: false,
  showCloseButton: true,
  confirmText: null,
  closeOnConfirm: true,
  safeArea: true,
  destroyOnClose: false,
  forceRender: false
};

const NumberKeyboard = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    visible,
    title,
    getContainer,
    confirmText,
    customKey,
    randomOrder,
    showCloseButton,
    onInput
  } = props;
  const keyboardRef = (0, _react.useRef)(null);
  const keys = (0, _react.useMemo)(() => {
    const defaultKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const keyList = randomOrder ? (0, _shuffle.shuffle)(defaultKeys) : defaultKeys;
    keyList.push('0');

    if (confirmText) {
      keyList.push(customKey || '');
    } else {
      keyList.splice(9, 0, customKey || '');
      keyList.push('BACKSPACE');
    }

    return keyList;
  }, [customKey, confirmText, randomOrder, randomOrder && visible]);
  const timeoutRef = (0, _react.useRef)(-1);
  const intervalRef = (0, _react.useRef)(-1);
  const onDelete = (0, _ahooks.useMemoizedFn)(() => {
    var _a;

    (_a = props.onDelete) === null || _a === void 0 ? void 0 : _a.call(props);
  });

  const onBackspacePressStart = () => {
    timeoutRef.current = window.setTimeout(() => {
      onDelete();
      intervalRef.current = window.setInterval(onDelete, 150);
    }, 700);
  };

  const onBackspacePressEnd = () => {
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
  }; // 点击键盘按键


  const onKeyPress = (e, key) => {
    var _a, _b;

    e.preventDefault();

    switch (key) {
      case 'BACKSPACE':
        onDelete === null || onDelete === void 0 ? void 0 : onDelete();
        break;

      case 'OK':
        (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props);

        if (props.closeOnConfirm) {
          (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);
        }

        break;

      default:
        // 当 customKey 不存在时，点击该键不应该触发 onInput
        if (key !== '') onInput === null || onInput === void 0 ? void 0 : onInput(key);
        break;
    }
  }; // 渲染 title 和 close button


  const renderHeader = () => {
    if (!showCloseButton && !title) return null;
    return _react.default.createElement("div", {
      className: (0, _classnames.default)(`${classPrefix}-header`, {
        'with-title': !!title
      })
    }, title && _react.default.createElement("div", {
      className: `${classPrefix}-title`
    }, title), showCloseButton && _react.default.createElement("span", {
      className: `${classPrefix}-header-close-button`,
      onClick: () => {
        var _a;

        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
      },
      role: 'button',
      title: 'CLOSE'
    }, _react.default.createElement(_antdMobileIcons.DownOutline, null)));
  }; // 渲染基础键盘按键


  const renderKey = (key, index) => {
    const isNumberKey = /^\d$/.test(key);
    const className = (0, _classnames.default)(`${classPrefix}-key`, {
      'number-key': isNumberKey,
      'sign-key': !isNumberKey && key,
      'mid-key': index === 9 && !!confirmText
    });
    const ariaProps = key ? {
      role: 'button',
      title: key
    } : undefined;
    return _react.default.createElement("div", Object.assign({
      key: key,
      className: className,
      onTouchStart: () => {
        if (key === 'BACKSPACE') {
          onBackspacePressStart();
        }
      },
      onTouchEnd: e => {
        onKeyPress(e, key);

        if (key === 'BACKSPACE') {
          onBackspacePressEnd();
        }
      }
    }, ariaProps), key === 'BACKSPACE' ? _react.default.createElement(_antdMobileIcons.TextDeletionOutline, null) : key);
  };

  return _react.default.createElement(_popup.default, {
    visible: visible,
    getContainer: getContainer,
    mask: false,
    afterClose: props.afterClose,
    afterShow: props.afterShow,
    className: `${classPrefix}-popup`,
    stopPropagation: props.stopPropagation,
    destroyOnClose: props.destroyOnClose,
    forceRender: props.forceRender
  }, (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    ref: keyboardRef,
    className: classPrefix,
    onMouseDown: e => {
      e.preventDefault();
    }
  }, renderHeader(), _react.default.createElement("div", {
    className: `${classPrefix}-wrapper`
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-main`, {
      'confirmed-style': !!confirmText
    })
  }, keys.map(renderKey)), !!confirmText && _react.default.createElement("div", {
    className: `${classPrefix}-confirm`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-key extra-key bs-key`,
    onTouchStart: () => {
      onBackspacePressStart();
    },
    onTouchEnd: e => {
      onKeyPress(e, 'BACKSPACE');
      onBackspacePressEnd();
    },
    title: 'BACKSPACE',
    role: 'button'
  }, _react.default.createElement(_antdMobileIcons.TextDeletionOutline, null)), _react.default.createElement("div", {
    className: `${classPrefix}-key extra-key ok-key`,
    onTouchEnd: e => onKeyPress(e, 'OK'),
    role: 'button'
  }, confirmText))), props.safeArea && _react.default.createElement("div", {
    className: `${classPrefix}-footer`
  }, _react.default.createElement(_safeArea.default, {
    position: 'bottom'
  })))));
};

exports.NumberKeyboard = NumberKeyboard;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/shuffle":1656641690287,"../popup":1656641690087,"../../utils/native-props":1656641690085,"../safe-area":1656641690102}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690287, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = shuffle;

/**
 * 数组打乱
 * @param array 任意数组
 * @returns any[] 打乱后的数组
 */
function shuffle(array) {
  const result = [...array];

  for (let i = result.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [result[i - 1], result[j]] = [result[j], result[i - 1]];
  }

  return result;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690288, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./page-indicator.css");

var _pageIndicator2 = require("./page-indicator");

var _default = _pageIndicator2.PageIndicator;
exports.default = _default;
}, function(modId) { var map = {"./page-indicator":1656641690289}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690289, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageIndicator = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _withDefaultProps = require("../../utils/with-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-page-indicator`;
const defaultProps = {
  color: 'primary',
  direction: 'horizontal'
};
const PageIndicator = (0, _react.memo)(p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const dots = [];

  for (let i = 0; i < props.total; i++) {
    dots.push(_react.default.createElement("div", {
      key: i,
      className: (0, _classnames.default)(`${classPrefix}-dot`, {
        [`${classPrefix}-dot-active`]: props.current === i
      })
    }));
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-${props.direction}`, `${classPrefix}-color-${props.color}`)
  }, dots));
});
exports.PageIndicator = PageIndicator;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690290, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./passcode-input.css");

var _passcodeInput2 = require("./passcode-input");

var _default = _passcodeInput2.PasscodeInput;
exports.default = _default;
}, function(modId) { var map = {"./passcode-input":1656641690291}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690291, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasscodeInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _bound = require("../../utils/bound");

var _usePropsValue = require("../../utils/use-props-value");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = 'adm-passcode-input';
const defaultProps = {
  defaultValue: '',
  length: 6,
  plain: false,
  error: false,
  seperated: false,
  caret: true
};
const PasscodeInput = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p); // 防止 length 值不合法

  const cellLength = props.length > 0 && props.length < Infinity ? Math.floor(props.length) : defaultProps.length;
  const [focused, setFocused] = (0, _react.useState)(false);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);
  const rootRef = (0, _react.useRef)(null);
  const nativeInputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    var _a;

    if (value.length >= cellLength) {
      (_a = props.onFill) === null || _a === void 0 ? void 0 : _a.call(props, value);
    }
  }, [value, cellLength]);

  const onFocus = () => {
    var _a, _b;

    if (!props.keyboard) {
      (_a = nativeInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }

    setFocused(true);
    (_b = props.onFocus) === null || _b === void 0 ? void 0 : _b.call(props);
  };

  (0, _react.useEffect)(() => {
    if (!focused) return;
    const timeout = window.setTimeout(() => {
      var _a;

      (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth'
      });
    }, 100);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [focused]);

  const onBlur = () => {
    var _a;

    setFocused(false);
    (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props);
  };

  (0, _react.useImperativeHandle)(ref, () => ({
    focus: () => {
      var _a;

      return (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
      var _a, _b;

      (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      (_b = nativeInputRef.current) === null || _b === void 0 ? void 0 : _b.blur();
    }
  }));

  const renderCells = () => {
    const cells = [];
    const chars = value.split('');
    const caretIndex = chars.length; // 光标位置index等于当前文字长度

    const focusedIndex = (0, _bound.bound)(chars.length, 0, cellLength - 1);

    for (let i = 0; i < cellLength; i++) {
      cells.push(_react.default.createElement("div", {
        className: (0, _classnames.default)(`${classPrefix}-cell`, {
          caret: props.caret && caretIndex === i && focused,
          focused: focusedIndex === i && focused,
          dot: !props.plain && chars[i]
        }),
        key: i
      }, chars[i] && props.plain ? chars[i] : ''));
    }

    return cells;
  };

  const cls = (0, _classnames.default)(classPrefix, {
    focused: focused,
    error: props.error,
    seperated: props.seperated
  });
  return _react.default.createElement(_react.default.Fragment, null, (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    ref: rootRef,
    tabIndex: 0,
    className: cls,
    onFocus: onFocus,
    onBlur: onBlur
  }, _react.default.createElement("div", {
    className: `${classPrefix}-cell-container`
  }, renderCells()), _react.default.createElement("input", {
    ref: nativeInputRef,
    className: `${classPrefix}-native-input`,
    value: value,
    type: 'text',
    pattern: '[0-9]*',
    inputMode: 'numeric',
    onChange: e => {
      setValue(e.target.value.slice(0, props.length));
    }
  }))), props.keyboard && _react.default.cloneElement(props.keyboard, {
    visible: focused,
    onInput: v => {
      if (value.length < cellLength) {
        setValue((value + v).slice(0, props.length));
      }
    },
    onDelete: () => {
      setValue(value.slice(0, -1));
    },
    onClose: () => {
      var _a;

      (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }
  }));
});
exports.PasscodeInput = PasscodeInput;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085,"../../utils/bound":1656641690130,"../../utils/use-props-value":1656641690123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690292, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./progress-bar.css");

var _progressBar2 = require("./progress-bar");

var _default = _progressBar2.ProgressBar;
exports.default = _default;
}, function(modId) { var map = {"./progress-bar":1656641690293}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690293, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _isNodeWithContent = require("../../utils/is-node-with-content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-progress-bar`;
const defaultProps = {
  percent: 0,
  rounded: true,
  text: false
};

const ProgressBar = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const fillStyle = {
    width: `${props.percent}%`
  };

  const textElement = function () {
    if (props.text === true) {
      return `${props.percent}%`;
    }

    if (typeof props.text === 'function') {
      return props.text(props.percent);
    }

    return props.text;
  }();

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, props.rounded && `${classPrefix}-rounded`)
  }, _react.default.createElement("div", {
    className: `${classPrefix}-trail`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-fill`,
    style: fillStyle
  })), (0, _isNodeWithContent.isNodeWithContent)(textElement) && _react.default.createElement("div", {
    className: `${classPrefix}-text`
  }, textElement)));
};

exports.ProgressBar = ProgressBar;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/is-node-with-content":1656641690170}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690294, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./progress-circle.css");

var _progressCircle2 = require("./progress-circle");

var _default = _progressCircle2.ProgressCircle;
exports.default = _default;
}, function(modId) { var map = {"./progress-circle":1656641690295}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690295, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressCircle = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-progress-circle`;

const ProgressCircle = p => {
  const props = (0, _withDefaultProps.mergeProps)({
    percent: 0
  }, p);
  const style = {
    '--percent': props.percent.toString()
  };
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: `${classPrefix}`,
    style: style
  }, _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, _react.default.createElement("svg", {
    className: `${classPrefix}-svg`
  }, _react.default.createElement("circle", {
    className: `${classPrefix}-track`,
    fill: 'transparent'
  }), _react.default.createElement("circle", {
    className: `${classPrefix}-fill`,
    fill: 'transparent'
  })), _react.default.createElement("div", {
    className: `${classPrefix}-info`
  }, props.children))));
};

exports.ProgressCircle = ProgressCircle;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690296, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./pull-to-refresh.css");

var _pullToRefresh2 = require("./pull-to-refresh");

var _default = _pullToRefresh2.PullToRefresh;
exports.default = _default;
}, function(modId) { var map = {"./pull-to-refresh":1656641690297}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690297, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.PullToRefresh = void 0;

var _tslib = require("tslib");

var _withDefaultProps = require("../../utils/with-default-props");

var _web = require("@react-spring/web");

var _react = require("@use-gesture/react");

var _getScrollParent = require("../../utils/get-scroll-parent");

var _react2 = _interopRequireWildcard(require("react"));

var _supportsPassive = require("../../utils/supports-passive");

var _convertPx = require("../../utils/convert-px");

var _rubberband = require("../../utils/rubberband");

var _configProvider = require("../config-provider");

var _sleep = require("../../utils/sleep");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-pull-to-refresh`;
const defaultProps = {
  pullingText: '下拉刷新',
  canReleaseText: '释放立即刷新',
  refreshingText: '加载中...',
  completeText: '刷新成功',
  completeDelay: 500,
  disabled: false,
  onRefresh: () => {}
};
exports.defaultProps = defaultProps;

const PullToRefresh = p => {
  var _a, _b;

  const {
    locale
  } = (0, _configProvider.useConfig)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, {
    refreshingText: `${locale.common.loading}...`,
    pullingText: locale.PullToRefresh.pulling,
    canReleaseText: locale.PullToRefresh.canRelease,
    completeText: locale.PullToRefresh.complete
  }, p);
  const headHeight = (_a = props.headHeight) !== null && _a !== void 0 ? _a : (0, _convertPx.convertPx)(40);
  const threshold = (_b = props.threshold) !== null && _b !== void 0 ? _b : (0, _convertPx.convertPx)(60);
  const [status, setStatus] = (0, _react2.useState)('pulling');
  const [springStyles, api] = (0, _web.useSpring)(() => ({
    from: {
      height: 0
    },
    config: {
      tension: 300,
      friction: 30,
      clamp: true
    }
  }));
  const elementRef = (0, _react2.useRef)(null);
  const pullingRef = (0, _react2.useRef)(false); //防止下拉时抖动

  (0, _react2.useEffect)(() => {
    var _a;

    (_a = elementRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('touchmove', () => {});
  }, []);

  function doRefresh() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      api.start({
        height: headHeight
      });
      setStatus('refreshing');

      try {
        yield props.onRefresh();
        setStatus('complete');
      } catch (e) {
        api.start({
          to: next => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
            yield next({
              height: 0
            });
            setStatus('pulling');
          })
        });
        throw e;
      }

      if (props.completeDelay > 0) {
        yield (0, _sleep.sleep)(props.completeDelay);
      }

      api.start({
        to: next => (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
          yield next({
            height: 0
          });
          setStatus('pulling');
        })
      });
    });
  }

  (0, _react.useDrag)(state => {
    if (status === 'refreshing' || status === 'complete') return;
    const {
      event
    } = state;

    if (state.last) {
      pullingRef.current = false;

      if (status === 'canRelease') {
        doRefresh();
      } else {
        api.start({
          height: 0
        });
      }

      return;
    }

    const [, y] = state.movement;

    if (state.first && y > 0) {
      const target = state.event.target;
      if (!target || !(target instanceof Element)) return;
      let scrollParent = (0, _getScrollParent.getScrollParent)(target);

      while (true) {
        if (!scrollParent) return;
        const scrollTop = getScrollTop(scrollParent);

        if (scrollTop > 0) {
          return;
        }

        if (scrollParent instanceof Window) {
          break;
        }

        scrollParent = (0, _getScrollParent.getScrollParent)(scrollParent.parentNode);
      }

      pullingRef.current = true;

      function getScrollTop(element) {
        return 'scrollTop' in element ? element.scrollTop : element.scrollY;
      }
    }

    if (!pullingRef.current) return;

    if (event.cancelable) {
      event.preventDefault();
    }

    event.stopPropagation();
    const height = Math.max((0, _rubberband.rubberbandIfOutOfBounds)(y, 0, 0, headHeight * 5, 0.5), 0);
    api.start({
      height
    });
    setStatus(height > threshold ? 'canRelease' : 'pulling');
  }, {
    pointer: {
      touch: true
    },
    axis: 'y',
    target: elementRef,
    enabled: !props.disabled,
    eventOptions: _supportsPassive.supportsPassive ? {
      passive: false
    } : false
  });

  const renderStatusText = () => {
    var _a;

    if (props.renderText) {
      return (_a = props.renderText) === null || _a === void 0 ? void 0 : _a.call(props, status);
    }

    if (status === 'pulling') return props.pullingText;
    if (status === 'canRelease') return props.canReleaseText;
    if (status === 'refreshing') return props.refreshingText;
    if (status === 'complete') return props.completeText;
  };

  return _react2.default.createElement(_web.animated.div, {
    ref: elementRef,
    className: classPrefix
  }, _react2.default.createElement(_web.animated.div, {
    style: springStyles,
    className: `${classPrefix}-head`
  }, _react2.default.createElement("div", {
    className: `${classPrefix}-head-content`,
    style: {
      height: headHeight
    }
  }, renderStatusText())), _react2.default.createElement("div", {
    className: `${classPrefix}-content`
  }, props.children));
};

exports.PullToRefresh = PullToRefresh;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/get-scroll-parent":1656641690093,"../../utils/supports-passive":1656641690094,"../../utils/convert-px":1656641690247,"../../utils/rubberband":1656641690145,"../config-provider":1656641690077,"../../utils/sleep":1656641690298}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690298, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = void 0;

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

exports.sleep = sleep;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690299, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./radio.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _group = require("./group");

var _radio2 = require("./radio");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_radio2.Radio, {
  Group: _group.Group
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./group":1656641690300,"./radio":1656641690302}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690300, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;

var _react = _interopRequireDefault(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _groupContext = require("./group-context");

var _usePropsValue = require("../../utils/use-props-value");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultProps = {
  disabled: false,
  defaultValue: null
};

const Group = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: v => {
      var _a;

      if (v === null) return;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  return _react.default.createElement(_groupContext.RadioGroupContext.Provider // TODO: 性能优化
  , {
    // TODO: 性能优化
    value: {
      value: value === null ? [] : [value],
      check: v => {
        setValue(v);
      },
      uncheck: () => {},
      disabled: props.disabled
    }
  }, props.children);
};

exports.Group = Group;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"./group-context":1656641690301,"../../utils/use-props-value":1656641690123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690301, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroupContext = void 0;

var _react = require("react");

const RadioGroupContext = (0, _react.createContext)(null);
exports.RadioGroupContext = RadioGroupContext;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690302, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _groupContext = require("./group-context");

var _usePropsValue = require("../../utils/use-props-value");

var _withDefaultProps = require("../../utils/with-default-props");

var _checkIcon = require("../checkbox/check-icon");

var _devLog = require("../../utils/dev-log");

var _isDev = require("../../utils/is-dev");

var _nativeInput = require("../checkbox/native-input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-radio`;
const defaultProps = {
  defaultChecked: false
};

const Radio = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const groupContext = (0, _react.useContext)(_groupContext.RadioGroupContext);
  let [checked, setChecked] = (0, _usePropsValue.usePropsValue)({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange
  });
  let disabled = props.disabled;
  const {
    value
  } = props;

  if (groupContext && value !== undefined) {
    if (_isDev.isDev) {
      if (p.checked !== undefined) {
        (0, _devLog.devWarning)('Radio', 'When used within `Radio.Group`, the `checked` prop of `Radio` will not work.');
      }

      if (p.defaultChecked !== undefined) {
        (0, _devLog.devWarning)('Radio', 'When used within `Radio.Group`, the `defaultChecked` prop of `Radio` will not work.');
      }
    }

    checked = groupContext.value.includes(value);

    setChecked = innerChecked => {
      var _a;

      if (innerChecked) {
        groupContext.check(value);
      } else {
        groupContext.uncheck(value);
      }

      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, innerChecked);
    };

    disabled = disabled || groupContext.disabled;
  }

  const renderIcon = () => {
    if (props.icon) {
      return _react.default.createElement("div", {
        className: `${classPrefix}-custom-icon`
      }, props.icon(checked));
    }

    return _react.default.createElement("div", {
      className: `${classPrefix}-icon`
    }, checked && _react.default.createElement(_checkIcon.CheckIcon, null));
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("label", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-checked`]: checked,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-block`]: props.block
    })
  }, _react.default.createElement(_nativeInput.NativeInput, {
    type: 'radio',
    checked: checked,
    onChange: setChecked,
    disabled: disabled,
    id: props.id
  }), renderIcon(), props.children && _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, props.children)));
};

exports.Radio = Radio;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"./group-context":1656641690301,"../../utils/use-props-value":1656641690123,"../../utils/with-default-props":1656641690086,"../checkbox/check-icon":1656641690185,"../../utils/dev-log":1656641690148,"../../utils/is-dev":1656641690147,"../checkbox/native-input":1656641690187}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690303, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./rate.css");

var _rate2 = require("./rate");

var _default = _rate2.Rate;
exports.default = _default;
}, function(modId) { var map = {"./rate":1656641690304}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690304, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rate = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _usePropsValue = require("../../utils/use-props-value");

var _star = require("./star");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-rate`;
const defaultProps = {
  count: 5,
  allowHalf: false,
  character: _react.default.createElement(_star.Star, null),
  defaultValue: 0,
  readOnly: false,
  allowClear: true
};

const Rate = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);
  const starList = Array(props.count).fill(null);

  function renderStar(v, half) {
    return _react.default.createElement("div", {
      className: (0, _classnames.default)(`${classPrefix}-star`, {
        [`${classPrefix}-star-active`]: value >= v,
        [`${classPrefix}-star-half`]: half,
        [`${classPrefix}-star-readonly`]: props.readOnly
      }),
      onClick: () => {
        if (props.readOnly) return;

        if (props.allowClear && value === v) {
          setValue(0);
        } else {
          setValue(v);
        }
      }
    }, props.character);
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, starList.map((_, i) => _react.default.createElement("div", {
    key: i,
    className: (0, _classnames.default)(`${classPrefix}-box`)
  }, props.allowHalf && renderStar(i + 0.5, true), renderStar(i + 1, false)))));
};

exports.Rate = Rate;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/use-props-value":1656641690123,"./star":1656641690305}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690305, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Star = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Star = () => {
  // return (
  //   <svg height='1em' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
  //     <title>{'star-fill\u5907\u4EFD 71'}</title>
  //     <path
  //       d='m24 36-10.52 5.53a2 2 0 0 1-2.902-2.108l2.01-11.714-8.511-8.296a2 2 0 0 1 1.108-3.411l11.762-1.71 5.26-10.657a2 2 0 0 1 3.586 0l5.26 10.658L42.815 16a2 2 0 0 1 1.108 3.411l-8.51 8.296 2.009 11.714a2 2 0 0 1-2.902 2.109L24 36Z'
  //       fill='#E5E5E5'
  //       fillRule='evenodd'
  //     />
  //   </svg>
  // )
  return _react.default.createElement("svg", {
    viewBox: '0 0 42 40',
    height: '1em',
    xmlns: 'http://www.w3.org/2000/svg',
    style: {
      verticalAlign: '-0.125em'
    }
  }, _react.default.createElement("path", {
    d: 'm21 34-10.52 5.53a2 2 0 0 1-2.902-2.108l2.01-11.714-8.511-8.296a2 2 0 0 1 1.108-3.411l11.762-1.71 5.26-10.657a2 2 0 0 1 3.586 0l5.26 10.658L39.815 14a2 2 0 0 1 1.108 3.411l-8.51 8.296 2.009 11.714a2 2 0 0 1-2.902 2.109L21 34Z',
    fill: 'currentColor',
    fillRule: 'evenodd'
  }));
};

exports.Star = Star;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690306, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./result.css");

var _result2 = require("./result");

var _default = _result2.Result;
exports.default = _default;
}, function(modId) { var map = {"./result":1656641690307}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690307, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Result = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _antdMobileIcons = require("antd-mobile-icons");

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-result`;
const iconRecord = {
  success: _antdMobileIcons.CheckCircleFill,
  error: _antdMobileIcons.CloseCircleFill,
  info: _antdMobileIcons.InformationCircleFill,
  waiting: _antdMobileIcons.ClockCircleFill,
  warning: _antdMobileIcons.ExclamationCircleFill
};

const Result = props => {
  const {
    status,
    title,
    description,
    icon
  } = props;
  if (!status) return null;

  const resultIcon = icon || _react.default.createElement(iconRecord[status]);

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, `${classPrefix}-${status}`)
  }, _react.default.createElement("div", {
    className: `${classPrefix}-icon`
  }, resultIcon), _react.default.createElement("div", {
    className: `${classPrefix}-title`
  }, title), description ? _react.default.createElement("div", {
    className: `${classPrefix}-description`
  }, description) : null));
};

exports.Result = Result;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690308, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./search-bar.css");

var _searchBar2 = require("./search-bar");

var _default = _searchBar2.SearchBar;
exports.default = _default;
}, function(modId) { var map = {"./search-bar":1656641690309}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690309, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _input = _interopRequireDefault(require("../input"));

var _button = _interopRequireDefault(require("../button"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _antdMobileIcons = require("antd-mobile-icons");

var _usePropsValue = require("../../utils/use-props-value");

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-search-bar`;
const defaultProps = {
  clearable: true,
  onlyShowClearWhenFocus: false,
  showCancelButton: false,
  defaultValue: '',
  clearOnCancel: true,
  icon: _react.default.createElement(_antdMobileIcons.SearchOutline, null)
};
const SearchBar = (0, _react.forwardRef)((p, ref) => {
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, {
    cancelText: locale.common.cancel
  }, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);
  const [hasFocus, setHasFocus] = (0, _react.useState)(false);
  const inputRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    clear: () => {
      var _a;

      return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear();
    },
    focus: () => {
      var _a;

      return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
      var _a;

      return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    },

    get nativeElement() {
      var _a, _b;

      return (_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.nativeElement) !== null && _b !== void 0 ? _b : null;
    }

  }));

  const renderCancelButton = () => {
    let isShowCancel;

    if (typeof props.showCancelButton === 'function') {
      isShowCancel = props.showCancelButton(hasFocus, value);
    } else {
      isShowCancel = props.showCancelButton && hasFocus;
    }

    return isShowCancel && _react.default.createElement("div", {
      className: `${classPrefix}-suffix`
    }, _react.default.createElement(_button.default, {
      fill: 'none',
      className: `${classPrefix}-cancel-button`,
      onClick: () => {
        var _a, _b, _c;

        if (props.clearOnCancel) {
          (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear();
        }

        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.blur();
        (_c = props.onCancel) === null || _c === void 0 ? void 0 : _c.call(props);
      },
      onMouseDown: e => {
        e.preventDefault();
      }
    }, props.cancelText));
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-active`]: hasFocus
    })
  }, _react.default.createElement("div", {
    className: `${classPrefix}-input-box`
  }, props.icon && _react.default.createElement("div", {
    className: `${classPrefix}-input-box-icon`
  }, props.icon), _react.default.createElement(_input.default, {
    ref: inputRef,
    className: (0, _classnames.default)(`${classPrefix}-input`, {
      [`${classPrefix}-input-without-icon`]: !props.icon
    }),
    value: value,
    onChange: setValue,
    maxLength: props.maxLength,
    placeholder: props.placeholder,
    clearable: props.clearable,
    onlyShowClearWhenFocus: props.onlyShowClearWhenFocus,
    onFocus: e => {
      var _a;

      setHasFocus(true);
      (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onBlur: e => {
      var _a;

      setHasFocus(false);
      (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onClear: props.onClear,
    type: 'search',
    enterKeyHint: 'search',
    onEnterPress: () => {
      var _a, _b;

      (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      (_b = props.onSearch) === null || _b === void 0 ? void 0 : _b.call(props, value);
    }
  })), renderCancelButton()));
});
exports.SearchBar = SearchBar;
}, function(modId) { var map = {"../input":1656641690269,"../button":1656641690114,"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/use-props-value":1656641690123,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690310, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./selector.css");

var _selector2 = require("./selector");

var _default = _selector2.Selector;
exports.default = _default;
}, function(modId) { var map = {"./selector":1656641690311}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690311, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selector = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _space = _interopRequireDefault(require("../space"));

var _grid = _interopRequireDefault(require("../grid"));

var _convertPx = require("../../utils/convert-px");

var _usePropsValue = require("../../utils/use-props-value");

var _checkMark = require("./check-mark");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-selector`;
const defaultProps = {
  multiple: false,
  defaultValue: [],
  showCheckMark: true
};

const Selector = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: val => {
      var _a;

      const extend = {
        get items() {
          return props.options.filter(option => val.includes(option.value));
        }

      };
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, val, extend);
    }
  });
  const items = props.options.map(option => {
    const active = (value || []).includes(option.value);
    const disabled = option.disabled || props.disabled;
    const itemCls = (0, _classnames.default)(`${classPrefix}-item`, {
      [`${classPrefix}-item-active`]: active && !props.multiple,
      [`${classPrefix}-item-multiple-active`]: active && props.multiple,
      [`${classPrefix}-item-disabled`]: disabled
    });
    return _react.default.createElement("div", {
      key: option.value,
      className: itemCls,
      onClick: () => {
        if (disabled) {
          return;
        }

        if (props.multiple) {
          const val = active ? value.filter(v => v !== option.value) : [...value, option.value];
          setValue(val);
        } else {
          const val = active ? [] : [option.value];
          setValue(val);
        }
      }
    }, option.label, option.description && _react.default.createElement("div", {
      className: `${classPrefix}-item-description`
    }, option.description), active && props.showCheckMark && _react.default.createElement("div", {
      className: `${classPrefix}-check-mark-wrapper`
    }, _react.default.createElement(_checkMark.CheckMark, null)));
  });
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, !props.columns && _react.default.createElement(_space.default, {
    wrap: true
  }, items), props.columns && _react.default.createElement(_grid.default, {
    columns: props.columns,
    gap: (0, _convertPx.convertPx)(8)
  }, items)));
};

exports.Selector = Selector;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../space":1656641690261,"../grid":1656641690250,"../../utils/convert-px":1656641690247,"../../utils/use-props-value":1656641690123,"./check-mark":1656641690312}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690312, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckMark = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CheckMark = (0, _react.memo)(() => {
  return _react.default.createElement("svg", {
    width: '17px',
    height: '13px',
    viewBox: '0 0 17 13',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg'
  }, _react.default.createElement("g", {
    stroke: 'none',
    strokeWidth: '1',
    fill: 'none',
    fillRule: 'evenodd',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, _react.default.createElement("g", {
    transform: 'translate(-2832.000000, -1103.000000)',
    stroke: '#FFFFFF',
    strokeWidth: '3'
  }, _react.default.createElement("g", {
    transform: 'translate(2610.000000, 955.000000)'
  }, _react.default.createElement("g", {
    transform: 'translate(24.000000, 91.000000)'
  }, _react.default.createElement("g", {
    transform: 'translate(179.177408, 36.687816)'
  }, _react.default.createElement("polyline", {
    points: '34.2767388 22 24.797043 31.4796958 21 27.6826527'
  })))))));
});
exports.CheckMark = CheckMark;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690313, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./side-bar.css");

var _sideBar2 = require("./side-bar");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_sideBar2.SideBar, {
  Item: _sideBar2.SideBarItem
});

exports.default = _default;
}, function(modId) { var map = {"./side-bar":1656641690314,"../../utils/attach-properties-to-component":1656641690083}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690314, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBarItem = exports.SideBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _badge = _interopRequireDefault(require("../badge"));

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _corner = require("./corner");

var _traverseReactNode = require("../../utils/traverse-react-node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-side-bar`;
/* istanbul ignore next */

const SideBarItem = () => {
  return null;
};

exports.SideBarItem = SideBarItem;

const SideBar = props => {
  var _a;

  let firstActiveKey = null;
  const items = [];
  (0, _traverseReactNode.traverseReactNode)(props.children, (child, index) => {
    if (!_react.default.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;

    if (index === 0) {
      firstActiveKey = key;
    }

    items.push(child);
  });
  const [activeKey, setActiveKey] = (0, _usePropsValue.usePropsValue)({
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : firstActiveKey,
    onChange: v => {
      var _a;

      if (v === null) return;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  const lastItem = items[items.length - 1];
  const isLastItemActive = lastItem && lastItem.key === activeKey;
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-items`
  }, items.map((item, index) => {
    const active = item.key === activeKey;
    const isActiveNextSibling = items[index - 1] && items[index - 1].key === activeKey;
    const isActivePreviousSibling = items[index + 1] && items[index + 1].key === activeKey;
    return (0, _nativeProps.withNativeProps)(item.props, _react.default.createElement("div", {
      key: item.key,
      onClick: () => {
        const {
          key
        } = item;
        if (key === undefined || key === null || item.props.disabled) return;
        setActiveKey(key.toString());
      },
      className: (0, _classnames.default)(`${classPrefix}-item`, {
        [`${classPrefix}-item-active`]: active,
        [`${classPrefix}-item-disabled`]: item.props.disabled
      })
    }, _react.default.createElement(_react.default.Fragment, null, isActiveNextSibling && _react.default.createElement(_corner.Corner, {
      className: `${classPrefix}-item-corner ${classPrefix}-item-corner-top`
    }), isActivePreviousSibling && _react.default.createElement(_corner.Corner, {
      className: `${classPrefix}-item-corner ${classPrefix}-item-corner-bottom`
    })), _react.default.createElement(_badge.default, {
      content: item.props.badge,
      className: `${classPrefix}-badge`
    }, _react.default.createElement("div", {
      className: `${classPrefix}-item-title`
    }, active && _react.default.createElement("div", {
      className: `${classPrefix}-item-highlight`
    }), item.props.title))));
  })), _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-extra-space`, isLastItemActive && `${classPrefix}-item-active-next-sibling`)
  }, isLastItemActive && _react.default.createElement(_corner.Corner, {
    className: `${classPrefix}-item-corner ${classPrefix}-item-corner-top`
  }))));
};

exports.SideBar = SideBar;
}, function(modId) { var map = {"../badge":1656641690112,"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"./corner":1656641690315,"../../utils/traverse-react-node":1656641690134}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690315, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Corner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Corner = (0, _react.memo)(props => (0, _nativeProps.withNativeProps)(props, _react.default.createElement("svg", {
  viewBox: '0 0 30 30'
}, _react.default.createElement("g", {
  stroke: 'none',
  strokeWidth: '1',
  fill: 'none',
  fillRule: 'evenodd'
}, _react.default.createElement("path", {
  d: 'M30,0 C13.4314575,3.04359188e-15 -2.02906125e-15,13.4314575 0,30 L0,30 L0,0 Z',
  fill: 'var(--adm-color-background)',
  transform: 'translate(15.000000, 15.000000) scale(-1, -1) translate(-15.000000, -15.000000) '
})))));
exports.Corner = Corner;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690316, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./slider.css");

var _slider2 = require("./slider");

var _default = _slider2.Slider;
exports.default = _default;
}, function(modId) { var map = {"./slider":1656641690317}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690317, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _ticks = _interopRequireDefault(require("./ticks"));

var _marks = _interopRequireDefault(require("./marks"));

var _thumb = _interopRequireDefault(require("./thumb"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nearest = require("../../utils/nearest");

var _usePropsValue = require("../../utils/use-props-value");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-slider`;
const defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  ticks: false,
  range: false,
  disabled: false,
  popover: false
};

const Slider = p => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    min,
    max,
    disabled,
    marks,
    ticks,
    step,
    icon
  } = props;

  function sortValue(val) {
    return val.sort((a, b) => a - b);
  }

  function convertValue(value) {
    return props.range ? value : [props.min, value];
  }

  function reverseValue(value) {
    return props.range ? value : value[1];
  }

  function onAfterChange(value) {
    var _a;

    (_a = props.onAfterChange) === null || _a === void 0 ? void 0 : _a.call(props, reverseValue(value));
  }

  const [rawValue, setRawValue] = (0, _usePropsValue.usePropsValue)({
    value: props.value,
    defaultValue: (_a = props.defaultValue) !== null && _a !== void 0 ? _a : props.range ? [min, min] : min,
    onChange: props.onChange
  });
  const sliderValue = sortValue(convertValue(rawValue));

  function setSliderValue(value) {
    const next = sortValue(value);
    const current = sliderValue;
    if (next[0] === current[0] && next[1] === current[1]) return;
    setRawValue(reverseValue(next));
  }

  const trackRef = (0, _react.useRef)(null);
  const fillSize = `${100 * (sliderValue[1] - sliderValue[0]) / (max - min)}%`;
  const fillStart = `${100 * (sliderValue[0] - min) / (max - min)}%`; // 计算要显示的点

  const pointList = (0, _react.useMemo)(() => {
    if (marks) {
      return Object.keys(marks).map(parseFloat).sort((a, b) => a - b);
    } else {
      const points = [];

      for (let i = min; i <= max; i += step) {
        points.push(i);
      }

      return points;
    }
  }, [marks, ticks, step, min, max]);

  function getValueByPosition(position) {
    const newPosition = position < min ? min : position > max ? max : position;
    let value = min; // 显示了刻度点，就只能移动到点上

    if (pointList.length) {
      value = (0, _nearest.nearest)(pointList, newPosition);
    } else {
      const lengthPerStep = 100 / ((max - min) / step);
      const steps = Math.round(newPosition / lengthPerStep);
      value = steps * lengthPerStep * (max - min) * 0.01 + min;
    }

    return value;
  }

  const dragLockRef = (0, _react.useRef)(0);

  const onTrackClick = event => {
    if (dragLockRef.current > 0) return;
    event.stopPropagation();
    if (disabled) return;
    const track = trackRef.current;
    if (!track) return;
    const sliderOffsetLeft = track.getBoundingClientRect().left;
    const position = (event.clientX - sliderOffsetLeft) / Math.ceil(track.offsetWidth) * (max - min) + min;
    const targetValue = getValueByPosition(position);
    let nextSliderValue;

    if (props.range) {
      // 移动的滑块采用就近原则
      if (Math.abs(targetValue - sliderValue[0]) > Math.abs(targetValue - sliderValue[1])) {
        nextSliderValue = [sliderValue[0], targetValue];
      } else {
        nextSliderValue = [targetValue, sliderValue[1]];
      }
    } else {
      nextSliderValue = [props.min, targetValue];
    }

    setSliderValue(nextSliderValue);
    onAfterChange(nextSliderValue);
  };

  const valueBeforeDragRef = (0, _react.useRef)();

  const renderThumb = index => {
    return _react.default.createElement(_thumb.default, {
      key: index,
      value: sliderValue[index],
      min: min,
      max: max,
      disabled: disabled,
      trackRef: trackRef,
      icon: icon,
      popover: props.popover,
      onDrag: (position, first, last) => {
        if (first) {
          dragLockRef.current += 1;
          valueBeforeDragRef.current = sliderValue;
        }

        const val = getValueByPosition(position);
        const valueBeforeDrag = valueBeforeDragRef.current;
        if (!valueBeforeDrag) return;
        const next = [...valueBeforeDrag];
        next[index] = val;
        setSliderValue(next);

        if (last) {
          onAfterChange(next);
          window.setTimeout(() => {
            dragLockRef.current -= 1;
          }, 100);
        }
      },
      "aria-label": props['aria-label']
    });
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-disabled`]: disabled
    })
  }, _react.default.createElement("div", {
    className: `${classPrefix}-track-container`,
    onClick: onTrackClick
  }, _react.default.createElement("div", {
    className: `${classPrefix}-track`,
    onClick: onTrackClick,
    ref: trackRef
  }, _react.default.createElement("div", {
    className: `${classPrefix}-fill`,
    style: {
      width: fillSize,
      left: fillStart
    }
  }), props.ticks && _react.default.createElement(_ticks.default, {
    points: pointList,
    min: min,
    max: max,
    lowerBound: sliderValue[0],
    upperBound: sliderValue[1]
  }), props.range && renderThumb(0), renderThumb(1))), marks && _react.default.createElement(_marks.default, {
    min: min,
    max: max,
    marks: marks,
    lowerBound: sliderValue[0],
    upperBound: sliderValue[1]
  })));
};

exports.Slider = Slider;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"./ticks":1656641690318,"./marks":1656641690319,"./thumb":1656641690320,"../../utils/with-default-props":1656641690086,"../../utils/nearest":1656641690233,"../../utils/use-props-value":1656641690123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690318, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-slider`;

const Ticks = ({
  points,
  max,
  min,
  upperBound,
  lowerBound
}) => {
  const range = max - min;
  const elements = points.map(point => {
    const offset = `${Math.abs(point - min) / range * 100}%`;
    const isActived = point <= upperBound && point >= lowerBound;
    const style = {
      left: offset
    };
    const pointClassName = (0, _classnames.default)({
      [`${classPrefix}-tick`]: true,
      [`${classPrefix}-tick-active`]: isActived
    });
    return _react.default.createElement("span", {
      className: pointClassName,
      style: style,
      key: point
    });
  });
  return _react.default.createElement("div", {
    className: `${classPrefix}-ticks`
  }, elements);
};

var _default = Ticks;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690319, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-slider-mark`;

const Marks = ({
  marks,
  upperBound,
  lowerBound,
  max,
  min
}) => {
  const marksKeys = Object.keys(marks);
  const range = max - min;
  const elements = marksKeys.map(parseFloat).sort((a, b) => a - b).filter(point => point >= min && point <= max).map(point => {
    const markPoint = marks[point];

    if (!markPoint && markPoint !== 0) {
      return null;
    }

    const isActive = point <= upperBound && point >= lowerBound;
    const markClassName = (0, _classnames.default)({
      [`${classPrefix}-text`]: true,
      [`${classPrefix}-text-active`]: isActive
    });
    const style = {
      left: `${(point - min) / range * 100}%`
    };
    return _react.default.createElement("span", {
      className: markClassName,
      style: style,
      key: point
    }, markPoint);
  });
  return _react.default.createElement("div", {
    className: classPrefix
  }, elements);
};

var _default = Marks;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690320, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@use-gesture/react");

var _thumbIcon = require("./thumb-icon");

var _popover = require("../popover/popover");

var _configProvider = require("../config-provider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-slider`;

const Thumb = props => {
  const {
    value,
    min,
    max,
    disabled,
    onDrag,
    icon
  } = props;
  const prevValue = (0, _react.useRef)(value);
  const {
    locale
  } = (0, _configProvider.useConfig)();

  const currentPosition = () => {
    return {
      left: `${(value - min) / (max - min) * 100}%`,
      right: 'auto'
    };
  };

  const [dragging, setDragging] = (0, _react.useState)(false);
  const bind = (0, _react2.useDrag)(state => {
    var _a;

    if (disabled) return;

    if (state.first) {
      prevValue.current = value;
    }

    const x = state.xy[0] - state.initial[0];
    const sliderOffsetWith = (_a = props.trackRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth;
    if (!sliderOffsetWith) return;
    const diff = x / Math.ceil(sliderOffsetWith) * (max - min);
    onDrag(prevValue.current + diff, state.first, state.last);
    setDragging(!state.last);
  }, {
    axis: 'x',
    pointer: {
      touch: true
    }
  });
  const renderPopoverContent = typeof props.popover === 'function' ? props.popover : props.popover ? value => value.toString() : null;

  const thumbElement = _react.default.createElement("div", {
    className: `${classPrefix}-thumb`
  }, icon ? icon : _react.default.createElement(_thumbIcon.ThumbIcon, {
    className: `${classPrefix}-thumb-icon`
  }));

  return _react.default.createElement("div", Object.assign({
    className: `${classPrefix}-thumb-container`,
    style: currentPosition()
  }, bind(), {
    role: 'slider',
    "aria-label": props['aria-label'] || locale.Slider.name,
    "aria-valuemax": max,
    "aria-valuemin": min,
    "aria-valuenow": value,
    "aria-disabled": disabled
  }), renderPopoverContent ? _react.default.createElement(_popover.Popover, {
    content: renderPopoverContent(value),
    placement: 'top',
    visible: dragging,
    getContainer: null,
    mode: 'dark'
  }, thumbElement) : thumbElement);
};

var _default = Thumb;
exports.default = _default;
}, function(modId) { var map = {"./thumb-icon":1656641690321,"../popover/popover":1656641690243,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690321, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThumbIcon = props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("svg", {
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg'
  }, _react.default.createElement("g", {
    fill: 'currentColor',
    fillRule: 'evenodd'
  }, _react.default.createElement("rect", {
    x: 10,
    width: 4,
    height: 24,
    rx: 2
  }), _react.default.createElement("rect", {
    y: 4,
    width: 4,
    height: 16,
    rx: 2
  }), _react.default.createElement("rect", {
    x: 20,
    y: 4,
    width: 4,
    height: 16,
    rx: 2
  }))));
};

exports.ThumbIcon = ThumbIcon;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690322, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./stepper.css");

var _stepper2 = require("./stepper");

var _default = _stepper2.Stepper;
exports.default = _default;
}, function(modId) { var map = {"./stepper":1656641690323}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690323, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _antdMobileIcons = require("antd-mobile-icons");

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _withDefaultProps = require("../../utils/with-default-props");

var _bound = require("../../utils/bound");

var _input = _interopRequireDefault(require("../input"));

var _button = _interopRequireDefault(require("../button"));

var _big = _interopRequireDefault(require("big.js"));

var _configProvider = require("../config-provider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-stepper`;
const defaultProps = {
  defaultValue: 0,
  step: 1,
  disabled: false,
  allowEmpty: false
};

const Stepper = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    disabled,
    step,
    max,
    min,
    inputReadOnly
  } = props;
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);
  const [inputValue, setInputValue] = (0, _react.useState)(() => convertValueToText(value, props.digits));

  function setValueWithCheck(v) {
    if (isNaN(v)) return;
    let target = (0, _bound.bound)(v, props.min, props.max);

    if (props.digits !== undefined) {
      target = parseFloat(target.toFixed(props.digits));
    }

    setValue(target);
  }

  const [hasFocus, setHasFocus] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value, props.digits));
    }
  }, [hasFocus]);
  (0, _react.useEffect)(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value, props.digits));
    }
  }, [value, props.digits]);

  const handleInputChange = v => {
    setInputValue(v);
    const value = convertTextToValue(v);

    if (value === null) {
      if (props.allowEmpty) {
        setValue(null);
      } else {
        setValue(props.defaultValue);
      }
    } else {
      setValueWithCheck(value);
    }
  };

  const handleMinus = () => {
    setValueWithCheck((0, _big.default)(value !== null && value !== void 0 ? value : 0).minus(step).toNumber());
  };

  const handlePlus = () => {
    setValueWithCheck((0, _big.default)(value !== null && value !== void 0 ? value : 0).add(step).toNumber());
  };

  const minusDisabled = () => {
    if (disabled) return true;
    if (value === null) return false;

    if (min !== undefined) {
      return value <= min;
    }

    return false;
  };

  const plusDisabled = () => {
    if (disabled) return true;
    if (value === null) return false;

    if (max !== undefined) {
      return value >= max;
    }

    return false;
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-active`]: hasFocus
    })
  }, _react.default.createElement(_button.default, {
    className: `${classPrefix}-minus`,
    onClick: handleMinus,
    disabled: minusDisabled(),
    fill: 'none',
    shape: 'rectangular',
    color: 'primary',
    "aria-label": locale.Stepper.decrease
  }, _react.default.createElement(_antdMobileIcons.MinusOutline, null)), _react.default.createElement("div", {
    className: `${classPrefix}-middle`
  }, _react.default.createElement(_input.default, {
    className: `${classPrefix}-input`,
    onFocus: e => {
      var _a;

      setHasFocus(true);
      (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    value: inputValue,
    onChange: val => {
      disabled || handleInputChange(val);
    },
    disabled: disabled,
    onBlur: e => {
      var _a;

      setHasFocus(false);
      (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    readOnly: inputReadOnly,
    role: 'spinbutton',
    "aria-valuenow": Number(inputValue),
    "aria-valuemax": max,
    "aria-valuemin": min
  })), _react.default.createElement(_button.default, {
    className: `${classPrefix}-plus`,
    onClick: handlePlus,
    disabled: plusDisabled(),
    fill: 'none',
    shape: 'rectangular',
    color: 'primary',
    "aria-label": locale.Stepper.increase
  }, _react.default.createElement(_antdMobileIcons.AddOutline, null))));
};

exports.Stepper = Stepper;

function convertValueToText(value, digits) {
  if (value === null) return '';

  if (digits !== undefined) {
    return value.toFixed(digits);
  } else {
    return value.toString();
  }
}

function convertTextToValue(text) {
  if (text === '') return null;
  return parseFloat(text);
}
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"../../utils/with-default-props":1656641690086,"../../utils/bound":1656641690130,"../input":1656641690269,"../button":1656641690114,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690324, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./steps.css");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _step = require("./step");

var _steps2 = require("./steps");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_steps2.Steps, {
  Step: _step.Step
});

exports.default = _default;
}, function(modId) { var map = {"../../utils/attach-properties-to-component":1656641690083,"./step":1656641690325,"./steps":1656641690326}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690325, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-step`;

const Step = props => {
  const {
    title,
    description,
    icon,
    status = 'wait'
  } = props;
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}`, `${classPrefix}-status-${status}`)
  }, _react.default.createElement("div", {
    className: `${classPrefix}-indicator`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-icon-container`
  }, icon)), _react.default.createElement("div", {
    className: `${classPrefix}-content`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-title`
  }, title), !!description && _react.default.createElement("div", {
    className: `${classPrefix}-description`
  }, description))));
};

exports.Step = Step;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690326, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Steps = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-steps`;
const stepClassPrefix = `adm-step`;

const defaultIcon = _react.default.createElement("span", {
  className: `${stepClassPrefix}-icon-dot`
});

const defaultProps = {
  current: 0,
  direction: 'horizontal'
};

const Steps = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    direction,
    current
  } = props;
  const classString = (0, _classnames.default)(classPrefix, `${classPrefix}-${direction}`);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classString
  }, _react.default.Children.map(props.children, (child, index) => {
    var _a;

    if (!_react.default.isValidElement(child)) {
      return child;
    }

    const props = child.props;
    let status = props.status || 'wait';

    if (index < current) {
      status = props.status || 'finish';
    } else if (index === current) {
      status = props.status || 'process';
    }

    const icon = (_a = props.icon) !== null && _a !== void 0 ? _a : defaultIcon;
    return _react.default.cloneElement(child, {
      status,
      icon
    });
  })));
};

exports.Steps = Steps;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690327, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./swipe-action.css");

var _swipeAction2 = require("./swipe-action");

var _default = _swipeAction2.SwipeAction;
exports.default = _default;
}, function(modId) { var map = {"./swipe-action":1656641690328}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690328, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwipeAction = void 0;

var _react = _interopRequireWildcard(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _web = require("@react-spring/web");

var _react2 = require("@use-gesture/react");

var _button = _interopRequireDefault(require("../button"));

var _nearest = require("../../utils/nearest");

var _nativeProps = require("../../utils/native-props");

var _withStopPropagation = require("../../utils/with-stop-propagation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-swipe-action`;
const defaultProps = {
  rightActions: [],
  leftActions: [],
  closeOnTouchOutside: true,
  closeOnAction: true,
  stopPropagation: []
};
const SwipeAction = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const rootRef = (0, _react.useRef)(null);
  const leftRef = (0, _react.useRef)(null);
  const rightRef = (0, _react.useRef)(null);

  function getWidth(ref) {
    const element = ref.current;
    if (!element) return 0;
    return element.offsetWidth;
  }

  function getLeftWidth() {
    return getWidth(leftRef);
  }

  function getRightWidth() {
    return getWidth(rightRef);
  }

  const [{
    x
  }, api] = (0, _web.useSpring)(() => ({
    x: 0,
    config: {
      tension: 200,
      friction: 30
    }
  }), []);
  const draggingRef = (0, _react.useRef)(false);
  const bind = (0, _react2.useDrag)(state => {
    draggingRef.current = true;
    const [offsetX] = state.offset;

    if (state.last) {
      const leftWidth = getLeftWidth();
      const rightWidth = getRightWidth();
      let position = offsetX + state.velocity[0] * state.direction[0] * 50;

      if (offsetX > 0) {
        position = Math.max(0, position);
      } else if (offsetX < 0) {
        position = Math.min(0, position);
      } else {
        position = 0;
      }

      api.start({
        x: (0, _nearest.nearest)([-rightWidth, 0, leftWidth], position)
      });
      window.setTimeout(() => {
        draggingRef.current = false;
      });
    } else {
      api.start({
        x: offsetX,
        immediate: true
      });
    }
  }, {
    from: () => [x.get(), 0],
    bounds: () => {
      const leftWidth = getLeftWidth();
      const rightWidth = getRightWidth();
      return {
        left: -rightWidth,
        right: leftWidth
      };
    },
    // rubberband: true,
    axis: 'x',
    preventScroll: true,
    pointer: {
      touch: true
    }
  });

  function close() {
    api.start({
      x: 0
    });
  }

  (0, _react.useImperativeHandle)(ref, () => ({
    show: (side = 'right') => {
      if (side === 'right') {
        api.start({
          x: -getRightWidth()
        });
      } else if (side === 'left') {
        api.start({
          x: getLeftWidth()
        });
      }
    },
    close
  }));
  (0, _react.useEffect)(() => {
    if (!props.closeOnTouchOutside) return;

    function handle(e) {
      if (x.get() === 0) {
        return;
      }

      const root = rootRef.current;

      if (root && !root.contains(e.target)) {
        close();
      }
    }

    document.addEventListener('touchstart', handle);
    return () => {
      document.removeEventListener('touchstart', handle);
    };
  }, [props.closeOnTouchOutside]);

  function renderAction(action) {
    var _a, _b;

    const color = (_a = action.color) !== null && _a !== void 0 ? _a : 'light';
    return _react.default.createElement(_button.default, {
      key: action.key,
      className: `${classPrefix}-action-button`,
      style: {
        '--background-color': (_b = colorRecord[color]) !== null && _b !== void 0 ? _b : color
      },
      onClick: e => {
        var _a, _b;

        if (props.closeOnAction) {
          close();
        }

        (_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action, e);
        (_b = props.onAction) === null || _b === void 0 ? void 0 : _b.call(props, action, e);
      }
    }, action.text);
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", Object.assign({
    className: classPrefix
  }, bind(), {
    ref: rootRef,
    onClickCapture: e => {
      if (draggingRef.current) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }), _react.default.createElement(_web.animated.div, {
    className: `${classPrefix}-track`,
    style: {
      x
    }
  }, (0, _withStopPropagation.withStopPropagation)(props.stopPropagation, _react.default.createElement("div", {
    className: `${classPrefix}-actions ${classPrefix}-actions-left`,
    ref: leftRef
  }, props.leftActions.map(renderAction))), _react.default.createElement("div", {
    className: `${classPrefix}-content`,
    onClickCapture: e => {
      if (x.goal !== 0) {
        e.preventDefault();
        e.stopPropagation();
        api.start({
          x: 0
        });
      }
    }
  }, _react.default.createElement(_web.animated.div, {
    style: {
      pointerEvents: x.to(v => v !== 0 && x.goal !== 0 ? 'none' : 'auto')
    }
  }, props.children)), (0, _withStopPropagation.withStopPropagation)(props.stopPropagation, _react.default.createElement("div", {
    className: `${classPrefix}-actions ${classPrefix}-actions-right`,
    ref: rightRef
  }, props.rightActions.map(renderAction))))));
});
exports.SwipeAction = SwipeAction;
const colorRecord = {
  light: 'var(--adm-color-light)',
  weak: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  success: 'var(--adm-color-success)',
  warning: 'var(--adm-color-warning)',
  danger: 'var(--adm-color-danger)'
};
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../button":1656641690114,"../../utils/nearest":1656641690233,"../../utils/native-props":1656641690085,"../../utils/with-stop-propagation":1656641690099}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690329, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./swiper.css");

var _swiper2 = require("./swiper");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _swiperItem = require("./swiper-item");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_swiper2.Swiper, {
  Item: _swiperItem.SwiperItem
});

exports.default = _default;
}, function(modId) { var map = {"./swiper":1656641690330,"../../utils/attach-properties-to-component":1656641690083,"./swiper-item":1656641690331}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690330, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swiper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _classnames = _interopRequireDefault(require("classnames"));

var _swiperItem = require("./swiper-item");

var _devLog = require("../../utils/dev-log");

var _web = require("@react-spring/web");

var _react2 = require("@use-gesture/react");

var _pageIndicator = _interopRequireDefault(require("../page-indicator"));

var _stagedComponents = require("staged-components");

var _useRefState = require("../../utils/use-ref-state");

var _bound = require("../../utils/bound");

var _ahooks = require("ahooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-swiper`;
const defaultProps = {
  defaultIndex: 0,
  allowTouchMove: true,
  autoplay: false,
  autoplayInterval: 3000,
  loop: false,
  direction: 'horizontal',
  slideSize: 100,
  trackOffset: 0,
  stuckAtBoundary: true,
  rubberband: true
};
const Swiper = (0, _react.forwardRef)((0, _stagedComponents.staged)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const isVertical = props.direction === 'vertical';
  const slideRatio = props.slideSize / 100;
  const offsetRatio = props.trackOffset / 100;
  const {
    validChildren,
    count
  } = (0, _react.useMemo)(() => {
    let count = 0;

    const validChildren = _react.default.Children.map(props.children, child => {
      if (!_react.default.isValidElement(child)) return null;

      if (child.type !== _swiperItem.SwiperItem) {
        (0, _devLog.devWarning)('Swiper', 'The children of `Swiper` must be `Swiper.Item` components.');
        return null;
      }

      count++;
      return child;
    });

    return {
      validChildren,
      count
    };
  }, [props.children]);

  if (count === 0 || !validChildren) {
    (0, _devLog.devWarning)('Swiper', '`Swiper` needs at least one child.');
    return null;
  }

  return () => {
    let loop = props.loop;

    if (slideRatio * (count - 1) < 1) {
      loop = false;
    }

    const trackRef = (0, _react.useRef)(null);

    function getSlidePixels() {
      const track = trackRef.current;
      if (!track) return 0;
      const trackPixels = isVertical ? track.offsetHeight : track.offsetWidth;
      return trackPixels * props.slideSize / 100;
    }

    const [current, setCurrent] = (0, _react.useState)(props.defaultIndex);
    (0, _ahooks.useUpdateEffect)(() => {
      var _a;

      (_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, current);
    }, [current]);
    const [dragging, setDragging, draggingRef] = (0, _useRefState.useRefState)(false);

    function boundIndex(current) {
      let min = 0;
      let max = count - 1;

      if (props.stuckAtBoundary) {
        min += offsetRatio / slideRatio;
        max -= (1 - slideRatio - offsetRatio) / slideRatio;
      }

      return (0, _bound.bound)(current, min, max);
    }

    const [{
      position
    }, api] = (0, _web.useSpring)(() => ({
      position: boundIndex(current) * 100,
      config: {
        tension: 200,
        friction: 30
      },
      onRest: () => {
        if (draggingRef.current) return;
        if (!loop) return;
        const rawX = position.get();
        const totalWidth = 100 * count;
        const standardPosition = modulus(rawX, totalWidth);
        if (standardPosition === rawX) return;
        api.start({
          position: standardPosition,
          immediate: true
        });
      }
    }), [count]);
    const bind = (0, _react2.useDrag)(state => {
      const slidePixels = getSlidePixels();
      if (!slidePixels) return;
      const paramIndex = isVertical ? 1 : 0;
      const offset = state.offset[paramIndex];
      const direction = state.direction[paramIndex];
      const velocity = state.velocity[paramIndex];
      setDragging(true);

      if (!state.last) {
        api.start({
          position: offset * 100 / slidePixels,
          immediate: true
        });
      } else {
        const minIndex = Math.floor(offset / slidePixels);
        const maxIndex = minIndex + 1;
        const index = Math.round((offset + velocity * 2000 * direction) / slidePixels);
        swipeTo((0, _bound.bound)(index, minIndex, maxIndex));
        window.setTimeout(() => {
          setDragging(false);
        });
      }
    }, {
      transform: ([x, y]) => [-x, -y],
      from: () => {
        const slidePixels = getSlidePixels();
        return [position.get() / 100 * slidePixels, position.get() / 100 * slidePixels];
      },
      bounds: () => {
        if (loop) return {};
        const slidePixels = getSlidePixels();
        const lowerBound = boundIndex(0) * slidePixels;
        const upperBound = boundIndex(count - 1) * slidePixels;
        return isVertical ? {
          top: lowerBound,
          bottom: upperBound
        } : {
          left: lowerBound,
          right: upperBound
        };
      },
      rubberband: props.rubberband,
      axis: isVertical ? 'y' : 'x',
      preventScroll: !isVertical,
      pointer: {
        touch: true
      }
    });

    function swipeTo(index, immediate = false) {
      const roundedIndex = Math.round(index);
      const targetIndex = loop ? modulus(roundedIndex, count) : (0, _bound.bound)(roundedIndex, 0, count - 1);
      setCurrent(targetIndex);
      api.start({
        position: (loop ? roundedIndex : boundIndex(roundedIndex)) * 100,
        immediate
      });
    }

    function swipeNext() {
      swipeTo(Math.round(position.get() / 100) + 1);
    }

    function swipePrev() {
      swipeTo(Math.round(position.get() / 100) - 1);
    }

    (0, _react.useImperativeHandle)(ref, () => ({
      swipeTo,
      swipeNext,
      swipePrev
    }));
    (0, _ahooks.useIsomorphicLayoutEffect)(() => {
      const maxIndex = validChildren.length - 1;

      if (current > maxIndex) {
        swipeTo(maxIndex, true);
      }
    });
    const {
      autoplay,
      autoplayInterval
    } = props;
    (0, _react.useEffect)(() => {
      if (!autoplay || dragging) return;
      const interval = window.setInterval(() => {
        swipeNext();
      }, autoplayInterval);
      return () => {
        window.clearInterval(interval);
      };
    }, [autoplay, autoplayInterval, dragging]);

    function renderTrackInner() {
      if (loop) {
        return _react.default.createElement("div", {
          className: `${classPrefix}-track-inner`
        }, _react.default.Children.map(validChildren, (child, index) => {
          return _react.default.createElement(_web.animated.div, {
            className: `${classPrefix}-slide`,
            style: {
              [isVertical ? 'y' : 'x']: position.to(position => {
                let finalPosition = -position + index * 100;
                const totalWidth = count * 100;
                const flagWidth = totalWidth / 2;
                finalPosition = modulus(finalPosition + flagWidth, totalWidth) - flagWidth;
                return `${finalPosition}%`;
              }),
              [isVertical ? 'top' : 'left']: `-${index * 100}%`
            }
          }, child);
        }));
      } else {
        return _react.default.createElement(_web.animated.div, {
          className: `${classPrefix}-track-inner`,
          style: {
            [isVertical ? 'y' : 'x']: position.to(position => `${-position}%`)
          }
        }, _react.default.Children.map(validChildren, child => {
          return _react.default.createElement("div", {
            className: `${classPrefix}-slide`
          }, child);
        }));
      }
    }

    const style = {
      '--slide-size': `${props.slideSize}%`,
      '--track-offset': `${props.trackOffset}%`
    };
    return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
      className: (0, _classnames.default)(classPrefix, `${classPrefix}-${props.direction}`),
      style: style
    }, _react.default.createElement("div", Object.assign({
      ref: trackRef,
      className: (0, _classnames.default)(`${classPrefix}-track`, {
        [`${classPrefix}-track-allow-touch-move`]: props.allowTouchMove
      }),
      onClickCapture: e => {
        if (draggingRef.current) {
          e.stopPropagation();
        }
      }
    }, props.allowTouchMove ? bind() : {}), renderTrackInner()), props.indicator === undefined ? _react.default.createElement("div", {
      className: `${classPrefix}-indicator`
    }, _react.default.createElement(_pageIndicator.default, Object.assign({}, props.indicatorProps, {
      total: count,
      current: current,
      direction: props.direction
    }))) : props.indicator(count, current)));
  };
}));
exports.Swiper = Swiper;

function modulus(value, division) {
  const remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
}
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"./swiper-item":1656641690331,"../../utils/dev-log":1656641690148,"../page-indicator":1656641690288,"../../utils/use-ref-state":1656641690332,"../../utils/bound":1656641690130}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690331, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiperItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _nativeProps = require("../../utils/native-props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SwiperItem = props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: 'adm-swiper-item',
    onClick: props.onClick
  }, props.children));
};

exports.SwiperItem = SwiperItem;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690332, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRefState = useRefState;

var _react = require("react");

function useRefState(initialState) {
  const [state, setState] = (0, _react.useState)(initialState);
  const ref = (0, _react.useRef)(state);
  (0, _react.useEffect)(() => {
    ref.current = state;
  }, [state]);
  return [state, setState, ref];
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690333, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./switch.css");

var _switch2 = require("./switch");

var _default = _switch2.Switch;
exports.default = _default;
}, function(modId) { var map = {"./switch":1656641690334}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690334, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;

var _tslib = require("tslib");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _withDefaultProps = require("../../utils/with-default-props");

var _spinIcon = require("./spin-icon");

var _configProvider = require("../config-provider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-switch`;
const defaultProps = {
  defaultChecked: false
};

const Switch = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const disabled = props.disabled || props.loading || false;
  const [changing, setChanging] = (0, _react.useState)(false);
  const {
    locale
  } = (0, _configProvider.useConfig)();
  const [checked, setChecked] = (0, _usePropsValue.usePropsValue)({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange
  });

  function onClick() {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function* () {
      if (disabled || props.loading || changing) {
        return;
      }

      const nextChecked = !checked;

      if (props.beforeChange) {
        setChanging(true);

        try {
          yield props.beforeChange(nextChecked);
          setChecked(nextChecked);
          setChanging(false);
        } catch (e) {
          setChanging(false);
          throw e;
        }
      } else {
        setChecked(nextChecked);
      }
    });
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    onClick: onClick,
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-checked`]: checked,
      [`${classPrefix}-disabled`]: disabled || changing
    }),
    role: 'switch',
    "aria-label": locale.Switch.name,
    "aria-checked": checked,
    "aria-disabled": disabled
  }, _react.default.createElement("div", {
    className: `${classPrefix}-checkbox`
  }, _react.default.createElement("div", {
    className: `${classPrefix}-handle`
  }, (props.loading || changing) && _react.default.createElement(_spinIcon.SpinIcon, {
    className: `${classPrefix}-spin-icon`
  })), _react.default.createElement("div", {
    className: `${classPrefix}-inner`
  }, checked ? props.checkedText : props.uncheckedText))));
};

exports.Switch = Switch;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"../../utils/with-default-props":1656641690086,"./spin-icon":1656641690335,"../config-provider":1656641690077}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690335, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SpinIcon = (0, _react.memo)(props => {
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("svg", {
    width: '28px',
    height: '28px',
    viewBox: '0 0 28 28'
  }, _react.default.createElement("g", {
    stroke: 'none',
    strokeWidth: '1',
    fill: 'none',
    fillRule: 'evenodd'
  }, _react.default.createElement("g", {
    transform: 'translate(-137.000000, -840.000000)',
    fill: '#1576FE'
  }, _react.default.createElement("g", {
    transform: 'translate(80.000000, 823.000000)'
  }, _react.default.createElement("g", {
    transform: 'translate(53.000000, 13.000000)'
  }, _react.default.createElement("path", {
    d: 'M17.9996753,31.5 C10.5556724,31.5 4.5,25.4443275 4.5,18.0003247 C4.5,10.5563219 10.5556724,4.5 17.9996753,4.5 C18.5355492,4.5 18.9702974,4.93474816 18.9702974,5.47062208 C18.9702974,6.006496 18.5355492,6.44124416 17.9996753,6.44124416 C11.6261524,6.44124416 6.44124416,11.6267709 6.44124416,18.0002938 C6.44124416,24.3738167 11.6261524,29.5587249 17.9996753,29.5587249 C24.3731982,29.5587249 29.5587249,24.3738167 29.5587249,18.0002938 C29.5587249,14.7964616 28.2778291,11.8169616 25.9523687,9.61220279 C25.5637302,9.24317094 25.5473089,8.62893223 25.9157222,8.23967523 C26.2841356,7.84976878 26.8989928,7.83461537 27.2882498,8.20302872 C30.0042351,10.7787368 31.5,14.2580826 31.5,18.0002938 C31.5,25.4443275 25.4436781,31.5 17.9996753,31.5 Z'
  })))))));
});
exports.SpinIcon = SpinIcon;
}, function(modId) { var map = {"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690336, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./tab-bar.css");

var _tabBar2 = require("./tab-bar");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_tabBar2.TabBar, {
  Item: _tabBar2.TabBarItem
});

exports.default = _default;
}, function(modId) { var map = {"./tab-bar":1656641690337,"../../utils/attach-properties-to-component":1656641690083}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690337, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBarItem = exports.TabBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _badge = _interopRequireDefault(require("../badge"));

var _safeArea = _interopRequireDefault(require("../safe-area"));

var _usePropsValue = require("../../utils/use-props-value");

var _traverseReactNode = require("../../utils/traverse-react-node");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
const TabBarItem = () => {
  return null;
};

exports.TabBarItem = TabBarItem;
const classPrefix = `adm-tab-bar`;
const defaultProps = {
  safeArea: false
};

const TabBar = p => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  let firstActiveKey = null;
  const items = [];
  (0, _traverseReactNode.traverseReactNode)(props.children, (child, index) => {
    if (!_react.default.isValidElement(child)) return;
    const key = child.key;
    if (typeof key !== 'string') return;

    if (index === 0) {
      firstActiveKey = key;
    }

    items.push(child);
  });
  const [activeKey, setActiveKey] = (0, _usePropsValue.usePropsValue)({
    value: props.activeKey,
    defaultValue: (_a = props.defaultActiveKey) !== null && _a !== void 0 ? _a : firstActiveKey,
    onChange: v => {
      var _a;

      if (v === null) return;
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, v);
    }
  });
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("div", {
    className: `${classPrefix}-wrap`
  }, items.map(item => {
    const active = item.key === activeKey;

    function renderContent() {
      const iconElement = item.props.icon && _react.default.createElement("div", {
        className: `${classPrefix}-item-icon`
      }, typeof item.props.icon === 'function' ? item.props.icon(active) : item.props.icon);

      const titleElement = item.props.title && _react.default.createElement("div", {
        className: (0, _classnames.default)(`${classPrefix}-item-title`, Boolean(iconElement) && `${classPrefix}-item-title-with-icon`)
      }, typeof item.props.title === 'function' ? item.props.title(active) : item.props.title);

      if (iconElement) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_badge.default, {
          content: item.props.badge,
          className: `${classPrefix}-icon-badge`
        }, iconElement), titleElement);
      } else if (titleElement) {
        return _react.default.createElement(_badge.default, {
          content: item.props.badge,
          className: `${classPrefix}-title-badge`
        }, titleElement);
      }

      return null;
    }

    return (0, _nativeProps.withNativeProps)(item.props, _react.default.createElement("div", {
      key: item.key,
      onClick: () => {
        const {
          key
        } = item;
        if (key === undefined || key === null) return;
        setActiveKey(key.toString());
      },
      className: (0, _classnames.default)(`${classPrefix}-item`, {
        [`${classPrefix}-item-active`]: active
      })
    }, renderContent()));
  })), props.safeArea && _react.default.createElement(_safeArea.default, {
    position: 'bottom'
  })));
};

exports.TabBar = TabBar;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../badge":1656641690112,"../safe-area":1656641690102,"../../utils/use-props-value":1656641690123,"../../utils/traverse-react-node":1656641690134}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690338, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./tag.css");

var _tag2 = require("./tag");

var _default = _tag2.Tag;
exports.default = _default;
}, function(modId) { var map = {"./tag":1656641690339}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690339, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;

var _react = _interopRequireDefault(require("react"));

var _withDefaultProps = require("../../utils/with-default-props");

var _nativeProps = require("../../utils/native-props");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-tag`;
const colorRecord = {
  default: '#666666',
  primary: 'var(--adm-color-primary, #1677ff)',
  success: 'var(--adm-color-success, #00b578)',
  warning: 'var(--adm-color-warning, #ff8f1f)',
  danger: 'var(--adm-color-danger, #ff3141)'
};
const defaultProps = {
  color: 'default',
  fill: 'solid',
  round: false
};

const Tag = p => {
  var _a;

  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const color = (_a = colorRecord[props.color]) !== null && _a !== void 0 ? _a : props.color;
  const style = {
    '--border-color': color,
    '--text-color': props.fill === 'outline' ? color : '#ffffff',
    '--background-color': props.fill === 'outline' ? 'transparent' : color
  };
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("span", {
    style: style,
    onClick: props.onClick,
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-round`]: props.round
    })
  }, props.children));
};

exports.Tag = Tag;
}, function(modId) { var map = {"../../utils/with-default-props":1656641690086,"../../utils/native-props":1656641690085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690340, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./text-area.css");

var _textArea2 = require("./text-area");

var _default = _textArea2.TextArea;
exports.default = _default;
}, function(modId) { var map = {"./text-area":1656641690341}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690341, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ahooks = require("ahooks");

var _nativeProps = require("../../utils/native-props");

var _usePropsValue = require("../../utils/use-props-value");

var _withDefaultProps = require("../../utils/with-default-props");

var _devLog = require("../../utils/dev-log");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = 'adm-text-area';
const defaultProps = {
  rows: 2,
  showCount: false,
  autoSize: false,
  defaultValue: ''
};
const TextArea = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    autoSize,
    showCount,
    maxLength
  } = props;
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(Object.assign(Object.assign({}, props), {
    value: props.value === null ? '' : props.value
  }));

  if (props.value === null) {
    (0, _devLog.devError)('TextArea', '`value` prop on `TextArea` should not be `null`. Consider using an empty string to clear the component.');
  }

  const nativeTextAreaRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => {
      var _a;

      (_a = nativeTextAreaRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
      var _a;

      (_a = nativeTextAreaRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    },

    get nativeElement() {
      return nativeTextAreaRef.current;
    }

  }));
  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    if (!autoSize) return;
    const textArea = nativeTextAreaRef.current;
    if (!textArea) return;
    let height = textArea.scrollHeight;

    if (typeof autoSize === 'object') {
      const computedStyle = window.getComputedStyle(textArea);
      const lineHeight = parseFloat(computedStyle.lineHeight);

      if (autoSize.minRows) {
        height = Math.max(height, autoSize.minRows * lineHeight);
      }

      if (autoSize.maxRows) {
        height = Math.min(height, autoSize.maxRows * lineHeight);
      }
    }

    textArea.style.height = `${height}px`;
  }, [value, autoSize]);
  const compositingRef = (0, _react.useRef)(false);
  let count;
  const valueLength = [...value].length;

  if (typeof showCount === 'function') {
    count = showCount(valueLength, maxLength);
  } else if (showCount) {
    count = _react.default.createElement("div", {
      className: `${classPrefix}-count`
    }, maxLength === undefined ? valueLength : valueLength + '/' + maxLength);
  }

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, _react.default.createElement("textarea", {
    ref: nativeTextAreaRef,
    className: `${classPrefix}-element`,
    rows: props.rows,
    value: value,
    placeholder: props.placeholder,
    onChange: e => {
      let v = e.target.value;

      if (maxLength && !compositingRef.current) {
        v = [...v].slice(0, maxLength).join('');
      }

      setValue(v);
    },
    id: props.id,
    onCompositionStart: e => {
      var _a;

      compositingRef.current = true;
      (_a = props.onCompositionStart) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    onCompositionEnd: e => {
      var _a;

      compositingRef.current = false;

      if (maxLength) {
        const v = e.target.value;
        setValue([...v].slice(0, maxLength).join(''));
      }

      (_a = props.onCompositionEnd) === null || _a === void 0 ? void 0 : _a.call(props, e);
    },
    autoComplete: props.autoComplete,
    autoFocus: props.autoFocus,
    disabled: props.disabled,
    readOnly: props.readOnly,
    name: props.name,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onClick: props.onClick
  }), count));
});
exports.TextArea = TextArea;
TextArea.defaultProps = defaultProps;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/use-props-value":1656641690123,"../../utils/with-default-props":1656641690086,"../../utils/dev-log":1656641690148}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690342, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./toast.css");

var _methods = require("./methods");

const Toast = {
  show: _methods.show,
  clear: _methods.clear,
  config: _methods.config
};
var _default = Toast;
exports.default = _default;
}, function(modId) { var map = {"./methods":1656641690343}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690343, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.config = config;
exports.show = show;

var _react = _interopRequireDefault(require("react"));

var _toast = require("./toast");

var _withDefaultProps = require("../../utils/with-default-props");

var _renderImperatively = require("../../utils/render-imperatively");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let currentHandler = null;
let currentTimeout = null;
const defaultProps = {
  duration: 2000,
  position: 'center',
  maskClickable: true
};

const ToastInner = props => _react.default.createElement(_toast.InternalToast, Object.assign({}, props));

function show(p) {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, typeof p === 'string' ? {
    content: p
  } : p);

  const element = _react.default.createElement(ToastInner, Object.assign({}, props, {
    onClose: () => {
      currentHandler = null;
    }
  }));

  if (currentHandler) {
    currentHandler.replace(element);
  } else {
    currentHandler = (0, _renderImperatively.renderImperatively)(element);
  }

  if (currentTimeout) {
    window.clearTimeout(currentTimeout);
  }

  if (props.duration !== 0) {
    currentTimeout = window.setTimeout(() => {
      clear();
    }, props.duration);
  }

  return currentHandler;
}

function clear() {
  currentHandler === null || currentHandler === void 0 ? void 0 : currentHandler.close();
  currentHandler = null;
}

function config(val) {
  if (val.duration !== undefined) {
    defaultProps.duration = val.duration;
  }

  if (val.position !== undefined) {
    defaultProps.position = val.position;
  }

  if (val.maskClickable !== undefined) {
    defaultProps.maskClickable = val.maskClickable;
  }
}
}, function(modId) { var map = {"./toast":1656641690344,"../../utils/with-default-props":1656641690086,"../../utils/render-imperatively":1656641690104}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690344, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InternalToast = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _antdMobileIcons = require("antd-mobile-icons");

var _mask = _interopRequireDefault(require("../mask"));

var _withDefaultProps = require("../../utils/with-default-props");

var _autoCenter = _interopRequireDefault(require("../auto-center"));

var _spinLoading = _interopRequireDefault(require("../spin-loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = `adm-toast`;
const defaultProps = {
  maskClickable: true,
  stopPropagation: ['click']
};

const InternalToast = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    maskClickable,
    content,
    icon,
    position
  } = props;
  const iconElement = (0, _react.useMemo)(() => {
    if (icon === null || icon === undefined) return null;

    switch (icon) {
      case 'success':
        return _react.default.createElement(_antdMobileIcons.CheckOutline, {
          className: `${classPrefix}-icon-success`
        });

      case 'fail':
        return _react.default.createElement(_antdMobileIcons.CloseOutline, {
          className: `${classPrefix}-icon-fail`
        });

      case 'loading':
        return _react.default.createElement(_spinLoading.default, {
          color: 'white',
          className: `${classPrefix}-loading`
        });

      default:
        return icon;
    }
  }, [icon]);
  const top = (0, _react.useMemo)(() => {
    switch (position) {
      case 'top':
        return '20%';

      case 'bottom':
        return '80%';

      default:
        return '50%';
    }
  }, [position]);
  return _react.default.createElement(_mask.default, {
    visible: props.visible,
    destroyOnClose: true,
    opacity: 0,
    disableBodyScroll: !maskClickable,
    getContainer: props.getContainer,
    afterClose: props.afterClose,
    style: Object.assign({
      pointerEvents: maskClickable ? 'none' : 'auto'
    }, props.maskStyle),
    className: (0, _classnames.default)(`${classPrefix}-mask`, props.maskClassName),
    stopPropagation: props.stopPropagation
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(`${classPrefix}-wrap`)
  }, _react.default.createElement("div", {
    style: {
      top
    },
    className: (0, _classnames.default)(`${classPrefix}-main`, icon ? `${classPrefix}-main-icon` : `${classPrefix}-main-text`)
  }, iconElement && _react.default.createElement("div", {
    className: `${classPrefix}-icon`
  }, iconElement), _react.default.createElement(_autoCenter.default, null, content))));
};

exports.InternalToast = InternalToast;
}, function(modId) { var map = {"../mask":1656641690089,"../../utils/with-default-props":1656641690086,"../auto-center":1656641690107,"../spin-loading":1656641690152}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690345, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./tree-select.css");

var _treeSelect2 = require("./tree-select");

var _attachPropertiesToComponent = require("../../utils/attach-properties-to-component");

var _multiple = require("./multiple");

var _default = (0, _attachPropertiesToComponent.attachPropertiesToComponent)(_treeSelect2.TreeSelect, {
  Multiple: _multiple.Multiple
});

exports.default = _default;
}, function(modId) { var map = {"./tree-select":1656641690346,"../../utils/attach-properties-to-component":1656641690083,"./multiple":1656641690348}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690346, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeSelect = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _tree = require("../../utils/tree");

var _withDefaultProps = require("../../utils/with-default-props");

var _usePropsValue = require("../../utils/use-props-value");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-tree-select`;
const defaultProps = {
  options: [],
  fieldNames: {},
  defaultValue: []
};

const TreeSelect = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const labelName = props.fieldNames.label || 'label';
  const valueName = props.fieldNames.value || 'value';
  const childrenName = props.fieldNames.children || 'children';
  const [value, setValue] = (0, _usePropsValue.usePropsValue)({
    value: props.value,
    defaultValue: props.defaultValue
  });
  const [deep, optionsMap, optionsParentMap] = (0, _react.useMemo)(() => {
    const deep = (0, _tree.getTreeDeep)(props.options, childrenName);
    const optionsMap = new Map();
    const optionsParentMap = new Map();

    function traverse(current, children) {
      children.forEach(item => {
        optionsParentMap.set(item[valueName], current);
        optionsMap.set(item[valueName], item);

        if (item[childrenName]) {
          traverse(item, item[childrenName]);
        }
      });
    }

    traverse(undefined, props.options);
    return [deep, optionsMap, optionsParentMap];
  }, [props.options]);

  const onItemSelect = node => {
    var _a; // 找到父级节点


    const parentNodes = [];
    let current = node;

    while (current) {
      parentNodes.push(current);
      const next = optionsParentMap.get(current[valueName]);
      current = next;
    }

    const values = parentNodes.reverse().map(i => i[valueName]);
    setValue(values);
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, values, {
      options: parentNodes
    });
  };

  const renderItems = (columnOptions = [], index) => {
    return columnOptions.map(item => {
      const isActive = item[valueName] === value[index];
      return _react.default.createElement("div", {
        key: item[valueName],
        className: (0, _classnames.default)(`${classPrefix}-item`, {
          [`${classPrefix}-item-active`]: isActive
        }),
        onClick: () => {
          if (!isActive) {
            onItemSelect(item);
          }
        }
      }, item[labelName]);
    });
  };

  const renderColumns = () => {
    var _a;

    const columns = [];

    for (let i = 0; i < deep; i++) {
      let width = `${100 / deep}%`; // 两列的第一列宽度为 33.33，两列的第二列为 66.67%

      if (deep === 2 && i === 0) {
        width = `33.33%`;
      }

      if (deep === 2 && i === 1) {
        width = `66.67%`;
      }

      const column = _react.default.createElement("div", {
        key: i,
        className: (0, _classnames.default)(`${classPrefix}-column`),
        style: {
          width
        }
      }, renderItems(i === 0 ? props.options : (_a = optionsMap.get(value[i - 1])) === null || _a === void 0 ? void 0 : _a[childrenName], i));

      columns.push(column);
    }

    return columns;
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, renderColumns()));
};

exports.TreeSelect = TreeSelect;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/tree":1656641690347,"../../utils/with-default-props":1656641690086,"../../utils/use-props-value":1656641690123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690347, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTreeDeep = getTreeDeep;

// 找到树的深度
function getTreeDeep(treeData, childrenName = 'children') {
  const walker = tree => {
    let deep = 0;
    tree.forEach(item => {
      if (item[childrenName]) {
        deep = Math.max(deep, walker(item[childrenName]) + 1);
      } else {
        deep = Math.max(deep, 1);
      }
    });
    return deep;
  };

  return walker(treeData);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690348, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Multiple = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _tree = require("../../utils/tree");

var _withDefaultProps = require("../../utils/with-default-props");

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _usePropsValue = require("../../utils/use-props-value");

var _devLog = require("../../utils/dev-log");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-tree-select-multiple`;

const Multiple = p => {
  const props = (0, _withDefaultProps.mergeProps)({
    options: [],
    fieldNames: {},
    allSelectText: [],
    defaultExpandKeys: [],
    defaultValue: []
  }, p);
  (0, _react.useEffect)(() => {
    (0, _devLog.devWarning)('TreeSelect', 'TreeSelect.Multiple has been deprecated.');
  }, []);
  const labelName = props.fieldNames.label || 'label';
  const valueName = props.fieldNames.value || 'value';
  const childrenName = props.fieldNames.children || 'children'; // 打开的 keys

  const [expandKeys, setExpandKeys] = (0, _usePropsValue.usePropsValue)({
    value: props.expandKeys,
    defaultValue: props.defaultExpandKeys
  }); // 选中的 value（聚合后）

  const [value, setValue] = (0, _usePropsValue.usePropsValue)({
    value: props.value,
    defaultValue: props.defaultValue
  }); // 获取目标所有叶子节点 key 集合

  const getLeafKeys = option => {
    const keys = [];

    const walker = op => {
      var _a;

      if (!op) {
        return;
      }

      if ((_a = op[childrenName]) === null || _a === void 0 ? void 0 : _a.length) {
        op[childrenName].forEach(i => walker(i));
      } else {
        keys.push(op[valueName]);
      }
    };

    walker(option);
    return keys;
  };

  const [deep, optionsMap, optionsParentMap] = (0, _react.useMemo)(() => {
    const deep = (0, _tree.getTreeDeep)(props.options, childrenName);
    const optionsMap = new Map();
    const optionsParentMap = new Map();

    function traverse(current, children) {
      children.forEach(item => {
        optionsParentMap.set(item[valueName], current);
        optionsMap.set(item[valueName], item);

        if (item[childrenName]) {
          traverse(item, item[childrenName]);
        }
      });
    }

    traverse(undefined, props.options);
    return [deep, optionsMap, optionsParentMap];
  }, [props.options]); // 将聚合的 value 拆分开，获得叶子节点的 value 集合

  const allSelectedLeafKeys = (0, _react.useMemo)(() => {
    let leafKeys = [];
    value.forEach(v => {
      const option = optionsMap.get(v);
      leafKeys = leafKeys.concat(getLeafKeys(option));
    });
    return leafKeys;
  }, [value, optionsMap]); // 子级有被选中的节点集合

  const dotMap = (0, _react.useMemo)(() => {
    const map = new Map(); // 遍历 allChildrenValues, 向上递归

    const walker = key => {
      const parentOption = optionsParentMap.get(key);

      if (!parentOption) {
        return;
      }

      map.set(parentOption[valueName], true);
      walker(parentOption[valueName]);
    };

    allSelectedLeafKeys.forEach(key => {
      map.set(key, true);
      walker(key);
    });
    return map;
  }, [optionsParentMap, value]);

  const onChange = targetKeys => {
    var _a;

    let groupKeys = [...targetKeys];
    let unusedKeys = [];

    const walker = keys => {
      keys.forEach(key => {
        var _a;

        if (unusedKeys.includes(key)) {
          return;
        }

        const parent = optionsParentMap.get(key);

        if (!parent) {
          return;
        }

        const childrenKeys = ((_a = parent[childrenName]) === null || _a === void 0 ? void 0 : _a.map(i => i[valueName])) || [];

        if (childrenKeys.every(i => groupKeys.includes(i))) {
          groupKeys.push(parent[valueName]);
          unusedKeys = unusedKeys.concat(childrenKeys);
        }
      });
    }; // 遍历 deep 次 groupKeys，每次往上聚合一层


    for (let i = 0; i < deep; i++) {
      walker(groupKeys);
    }

    groupKeys = groupKeys.filter(i => !unusedKeys.includes(i)); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    const groupOptions = groupKeys.map(i => optionsMap.get(i));
    setValue(groupKeys);
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, groupKeys, groupOptions);
  };

  const onItemSelect = option => {
    var _a;

    const parentNodes = [];
    let current = option;

    while (current) {
      parentNodes.unshift(current);
      const next = optionsParentMap.get(current[valueName]);
      current = next;
    }

    const keys = parentNodes.map(i => i[valueName]);
    setExpandKeys(keys);
    (_a = props.onExpand) === null || _a === void 0 ? void 0 : _a.call(props, keys, parentNodes);
  }; // 渲染全选节点


  const renderSelectAllItem = (columnOptions, index) => {
    var _a;

    const text = (_a = props.selectAllText) === null || _a === void 0 ? void 0 : _a[index];

    if (!text) {
      return;
    }

    let currentLeafKeys = [];
    columnOptions.forEach(option => {
      currentLeafKeys = currentLeafKeys.concat(getLeafKeys(option));
    });
    const allSelected = currentLeafKeys.every(i => allSelectedLeafKeys.includes(i));
    return _react.default.createElement("div", {
      onClick: () => {
        if (allSelected) {
          onChange(allSelectedLeafKeys.filter(i => !currentLeafKeys.includes(i)));
        } else {
          onChange(allSelectedLeafKeys.concat(currentLeafKeys));
        }
      },
      className: `${classPrefix}-item`
    }, text);
  }; // 渲染


  const renderSelectAllLeafItem = (columnOptions, index) => {
    var _a;

    const text = (_a = props.selectAllText) === null || _a === void 0 ? void 0 : _a[index];

    if (!text) {
      return;
    }

    const currentLeafKeys = columnOptions.map(i => i[valueName]);
    const allSelected = currentLeafKeys.every(i => allSelectedLeafKeys.includes(i));
    const halfSelected = allSelected ? false : currentLeafKeys.some(i => allSelectedLeafKeys.includes(i));
    return _react.default.createElement("div", {
      onClick: () => {
        if (allSelected) {
          onChange(allSelectedLeafKeys.filter(i => !currentLeafKeys.includes(i)));
        } else {
          onChange(allSelectedLeafKeys.concat(currentLeafKeys));
        }
      },
      className: (0, _classnames.default)(`${classPrefix}-item`, `${classPrefix}-item-leaf`)
    }, _react.default.createElement(_checkbox.default, {
      className: `${classPrefix}-item-checkbox`,
      checked: allSelected,
      indeterminate: halfSelected
    }), text);
  }; // 渲染节点


  const renderItem = option => {
    const isExpand = expandKeys.includes(option[valueName]);
    return _react.default.createElement("div", {
      key: option[valueName],
      onClick: () => {
        if (!isExpand) {
          onItemSelect(option);
        }
      },
      className: (0, _classnames.default)(`${classPrefix}-item`, {
        [`${classPrefix}-item-expand`]: isExpand
      })
    }, option[labelName], !!dotMap.get(option[valueName]) && _react.default.createElement("div", {
      className: `${classPrefix}-dot`
    }));
  }; // 渲染叶子节点


  const renderLeafItem = option => {
    const isSelected = allSelectedLeafKeys.includes(option[valueName]);
    return _react.default.createElement("div", {
      key: option[valueName],
      onClick: () => {
        if (isSelected) {
          onChange(allSelectedLeafKeys.filter(val => val !== option[valueName]));
        } else {
          onChange([...allSelectedLeafKeys, option[valueName]]);
        }
      },
      className: (0, _classnames.default)(`${classPrefix}-item`, `${classPrefix}-item-leaf`)
    }, _react.default.createElement(_checkbox.default, {
      className: `${classPrefix}-item-checkbox`,
      checked: isSelected
    }), option[labelName]);
  };

  const renderItems = (columnOptions = [], index) => {
    if (columnOptions.length === 0) {
      return;
    }

    const isLeaf = deep === index + 1;

    if (isLeaf) {
      return _react.default.createElement(_react.default.Fragment, null, renderSelectAllLeafItem(columnOptions, index), columnOptions.map(option => {
        return renderLeafItem(option);
      }));
    }

    return _react.default.createElement(_react.default.Fragment, null, renderSelectAllItem(columnOptions, index), columnOptions.map(option => {
      return renderItem(option);
    }));
  };

  const renderColumns = () => {
    var _a;

    const columns = [];

    for (let i = 0; i < deep; i++) {
      let width = `${100 / deep}%`; // 两列的第一列宽度为 33.33，两列的第二列为 66.67%

      if (deep === 2 && i === 0) {
        width = `33.33%`;
      }

      if (deep === 2 && i === 1) {
        width = `66.67%`;
      }

      const column = _react.default.createElement("div", {
        key: i,
        className: (0, _classnames.default)(`${classPrefix}-column`),
        style: {
          width
        }
      }, renderItems(i === 0 ? props.options : (_a = optionsMap.get(expandKeys[i - 1])) === null || _a === void 0 ? void 0 : _a[childrenName], i));

      columns.push(column);
    }

    return columns;
  };

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: classPrefix
  }, renderColumns()));
};

exports.Multiple = Multiple;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/tree":1656641690347,"../../utils/with-default-props":1656641690086,"../checkbox":1656641690181,"../../utils/use-props-value":1656641690123,"../../utils/dev-log":1656641690148}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690349, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./virtual-input.css");

var _virtualInput2 = require("./virtual-input");

var _default = _virtualInput2.VirtualInput;
exports.default = _default;
}, function(modId) { var map = {"./virtual-input":1656641690350}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690350, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

var _usePropsValue = require("../../utils/use-props-value");

var _classnames = _interopRequireDefault(require("classnames"));

var _antdMobileIcons = require("antd-mobile-icons");

var _ahooks = require("ahooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const classPrefix = 'adm-virtual-input';
const defaultProps = {
  defaultValue: ''
};
const VirtualInput = (0, _react.forwardRef)((p, ref) => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const [value, setValue] = (0, _usePropsValue.usePropsValue)(props);
  const rootRef = (0, _react.useRef)(null);
  const contentRef = (0, _react.useRef)(null);
  const [hasFocus, setHasFocus] = (0, _react.useState)(false);

  function scrollToEnd() {
    const root = rootRef.current;
    if (!root) return;

    if (document.activeElement !== root) {
      return;
    }

    const content = contentRef.current;
    if (!content) return;
    content.scrollLeft = content.clientWidth;
  }

  (0, _ahooks.useIsomorphicLayoutEffect)(() => {
    scrollToEnd();
  }, [value]);
  (0, _react.useEffect)(() => {
    if (hasFocus) {
      scrollToEnd();
    }
  }, [hasFocus]);
  (0, _react.useImperativeHandle)(ref, () => ({
    focus: () => {
      var _a;

      (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    blur: () => {
      var _a;

      (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }
  }));

  function onFocus() {
    var _a;

    setHasFocus(true);
    (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props);
  }

  function onBlur() {
    var _a;

    setHasFocus(false);
    (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props);
  }

  const keyboard = props.keyboard;

  const keyboardElement = keyboard && _react.default.cloneElement(keyboard, {
    onInput: v => {
      var _a, _b;

      setValue(value + v);
      (_b = (_a = keyboard.props).onInput) === null || _b === void 0 ? void 0 : _b.call(_a, v);
    },
    onDelete: () => {
      var _a, _b;

      setValue(value.slice(0, -1));
      (_b = (_a = keyboard.props).onDelete) === null || _b === void 0 ? void 0 : _b.call(_a);
    },
    visible: hasFocus,
    onClose: () => {
      var _a, _b, _c;

      (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      (_c = (_b = keyboard.props).onClose) === null || _c === void 0 ? void 0 : _c.call(_b);
    },
    getContainer: null
  });

  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    ref: rootRef,
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-disabled`]: props.disabled
    }),
    tabIndex: props.disabled ? undefined : 0,
    onFocus: onFocus,
    onBlur: onBlur,
    onClick: props.onClick
  }, _react.default.createElement("div", {
    className: `${classPrefix}-content`,
    ref: contentRef
  }, value, _react.default.createElement("div", {
    className: `${classPrefix}-caret-container`
  }, hasFocus && _react.default.createElement("div", {
    className: `${classPrefix}-caret`
  }))), props.clearable && !!value && hasFocus && _react.default.createElement("div", {
    className: `${classPrefix}-clear`,
    onClick: e => {
      var _a;

      e.stopPropagation();
      setValue('');
      (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  }, _react.default.createElement(_antdMobileIcons.CloseCircleFill, null)), !value && _react.default.createElement("div", {
    className: `${classPrefix}-placeholder`
  }, props.placeholder), keyboardElement));
});
exports.VirtualInput = VirtualInput;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086,"../../utils/use-props-value":1656641690123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690351, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./water-mark.css");

var _waterMark2 = require("./water-mark");

var _default = _waterMark2.WaterMark;
exports.default = _default;
}, function(modId) { var map = {"./water-mark":1656641690352}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1656641690352, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaterMark = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _nativeProps = require("../../utils/native-props");

var _withDefaultProps = require("../../utils/with-default-props");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classPrefix = `adm-water-mark`;
const defaultProps = {
  fullPage: true
};

const WaterMark = p => {
  const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
  const {
    zIndex = 2000,
    gapX = 24,
    gapY = 48,
    width = 120,
    height = 64,
    rotate = -22,
    image,
    imageWidth = 120,
    imageHeight = 64,
    content,
    fontStyle = 'normal',
    fontWeight = 'normal',
    fontColor = 'rgba(0,0,0,.15)',
    fontSize = 14,
    fontFamily = 'sans-serif'
  } = props;
  const [base64Url, setBase64Url] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    const canvas = document.createElement('canvas');
    const ratio = window.devicePixelRatio;
    const ctx = canvas.getContext('2d');
    const canvasWidth = `${(gapX + width) * ratio}px`;
    const canvasHeight = `${(gapY + height) * ratio}px`;
    const markWidth = width * ratio;
    const markHeight = height * ratio;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';

        img.onload = () => {
          ctx.drawImage(img, -imageWidth * ratio / 2, -imageHeight * ratio / 2, imageWidth * ratio, imageHeight * ratio);
          ctx.restore();
          setBase64Url(canvas.toDataURL());
        };

        img.src = image;
      } else if (content) {
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center'; // 文字绕中间旋转

        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        const markSize = Number(fontSize) * ratio;
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
        ctx.fillStyle = fontColor;
        ctx.fillText(content, 0, 0);
        ctx.restore();
        setBase64Url(canvas.toDataURL());
      }
    } else {
      throw new Error('Canvas is not supported in the current environment');
    }
  }, [gapX, gapY, rotate, fontStyle, fontWeight, width, height, fontFamily, fontColor, image, content, fontSize]);
  return (0, _nativeProps.withNativeProps)(props, _react.default.createElement("div", {
    className: (0, _classnames.default)(classPrefix, {
      [`${classPrefix}-full-page`]: props.fullPage
    }),
    style: {
      zIndex,
      backgroundSize: `${gapX + width}px`,
      backgroundImage: `url('${base64Url}')`
    }
  }));
};

exports.WaterMark = WaterMark;
}, function(modId) { var map = {"../../utils/native-props":1656641690085,"../../utils/with-default-props":1656641690086}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1656641690074);
})()
//miniprogram-npm-outsideDeps=["./global.css","tslib","react","lodash/cloneDeep","lodash/merge","./action-sheet.css","classnames","lodash/assign","lodash/assignWith","lodash/isUndefined","./popup.css","ahooks","@react-spring/web","antd-mobile-icons","./mask.css","react-dom","./safe-area.css","./auto-center.css","./avatar.css","./badge.css","./button.css","./dot-loading.css","./calendar.css","dayjs","dayjs/plugin/isoWeek","./capsule-tabs.css","./scroll-mask.css","react-is","./card.css","./picker.css","./picker-view.css","@use-gesture/react","lodash/isEqual","./spin-loading.css","use-sync-external-store/shim","./cascader.css","./cascader-view.css","./tabs.css","./check-list.css","./list.css","lodash/memoize","./skeleton.css","./center-popup.css","./checkbox.css","./collapse.css","./date-picker.css","dayjs/plugin/isoWeeksInYear","dayjs/plugin/isLeapYear","./dialog.css","./image.css","staged-components","./divider.css","./dropdown.css","./ellipsis.css","./empty.css","./error-block.css","./floating-bubble.css","./floating-panel.css","./index.css","rc-field-form","rc-field-form/lib/FieldContext","./popover.css","./popover-menu.css","@floating-ui/dom","./grid.css","./image-uploader.css","./image-viewer.css","./space.css","./index-bar.css","./infinite-scroll.css","./input.css","./jumbo-tabs.css","../dot-loading/dot-loading.css","./modal.css","./nav-bar.css","./notice-bar.css","./number-keyboard.css","./page-indicator.css","./passcode-input.css","./progress-bar.css","./progress-circle.css","./pull-to-refresh.css","./radio.css","./rate.css","./result.css","./search-bar.css","./selector.css","./side-bar.css","./slider.css","./stepper.css","big.js","./steps.css","./swipe-action.css","./swiper.css","./switch.css","./tab-bar.css","./tag.css","./text-area.css","./toast.css","./tree-select.css","./virtual-input.css","./water-mark.css"]
//# sourceMappingURL=index.js.map