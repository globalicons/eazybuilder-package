"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = void 0;
var _react = _interopRequireDefault(require("react"));
var _EditorContext = require("../../context/EditorContext");
var _Button = require("../base/Button");
var _Container = require("../base/Container");
var _Card = require("../composite/Card");
var _Image = require("../base/Image");
var _Text = require("../base/Text");
var _ElementWrapper = require("./ElementWrapper");
var _styles = require("../../utils/styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var componentMap = {
  BUTTON: _Button.Button,
  CONTAINER: _Container.Container,
  CARD: _Card.Card,
  IMAGE: _Image.Image,
  TEXT: _Text.Text
};
var Canvas = exports.Canvas = function Canvas() {
  var _useEditor = (0, _EditorContext.useEditor)(),
    elements = _useEditor.elements;
  var renderElement = function renderElement(element) {
    var Component = componentMap[element.type];
    if (!Component) return null;
    return /*#__PURE__*/_react["default"].createElement(_ElementWrapper.ElementWrapper, {
      key: element.id,
      element: element
    }, /*#__PURE__*/_react["default"].createElement(Component, element.props));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "canvas",
    style: _objectSpread(_objectSpread({}, _styles.editorStyles.canvas), {}, {
      position: 'relative',
      height: '80vh',
      overflow: 'hidden'
    })
  }, elements.map(renderElement));
};