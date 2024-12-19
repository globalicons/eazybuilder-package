"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
var _propTypes2 = require("../../types/propTypes");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Button = exports.Button = function Button(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? "middle" : _ref$size,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    color = _ref.color,
    children = _ref.children,
    onClick = _ref.onClick,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEditing = _useState2[0],
    setIsEditing = _useState2[1];
  var _useState3 = (0, _react.useState)(children),
    _useState4 = _slicedToArray(_useState3, 2),
    text = _useState4[0],
    setText = _useState4[1];
  var handleDoubleClick = function handleDoubleClick(e) {
    e.stopPropagation();
    setIsEditing(true);
  };
  var handleBlur = function handleBlur() {
    setIsEditing(false);
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };
  return /*#__PURE__*/React.createElement(_antd.Button, {
    size: size,
    variant: variant,
    color: color,
    onClick: !isEditing ? onClick : undefined,
    style: _objectSpread({
      margin: "0 2px"
    }, style),
    className: className,
    onDoubleClick: handleDoubleClick
  }, isEditing ? /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    autoFocus: true,
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'inherit',
      width: '100%'
    }
  }) : text);
};
Button.propTypes = _objectSpread(_objectSpread({}, _propTypes2.componentPropTypes.base), _propTypes2.componentPropTypes.button);