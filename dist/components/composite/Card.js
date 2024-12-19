"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _antd = require("antd");
var _Container = require("../base/Container");
var _Button = require("../base/Button");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Card = exports.Card = function Card(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    background = _ref.background,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 20 : _ref$padding,
    actions = _ref.actions,
    children = _ref.children,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/React.createElement(_antd.Card, {
    style: _objectSpread({
      background: background,
      padding: padding
    }, style),
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-content"
  }, title && /*#__PURE__*/React.createElement("h3", null, title), subtitle && /*#__PURE__*/React.createElement("h4", null, subtitle), children), actions && /*#__PURE__*/React.createElement(_Container.Container, {
    padding: 12
  }, actions.map(function (action, index) {
    return /*#__PURE__*/React.createElement(_Button.Button, _extends({
      key: index
    }, action));
  })));
};