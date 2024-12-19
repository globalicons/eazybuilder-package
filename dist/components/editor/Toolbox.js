"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbox = void 0;
var _antd = require("antd");
var _EditorContext = require("../../context/EditorContext");
var _nanoid = require("nanoid");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Title = _antd.Typography.Title;
var AVAILABLE_COMPONENTS = {
  BUTTON: {
    type: 'BUTTON',
    props: {
      children: 'Click me',
      size: 'small'
    }
  },
  TEXT: {
    type: 'TEXT',
    props: {
      children: 'Edit this text'
    }
  },
  CONTAINER: {
    type: 'CONTAINER',
    props: {
      padding: 20
    }
  },
  CARD: {
    type: 'CARD',
    props: {
      title: 'New Card',
      subtitle: 'Card subtitle'
    }
  },
  IMAGE: {
    type: 'IMAGE',
    props: {}
  }
};
var Toolbox = exports.Toolbox = function Toolbox() {
  var _useEditor = (0, _EditorContext.useEditor)(),
    addElement = _useEditor.addElement;
  var handleAddComponent = function handleAddComponent(componentType) {
    var component = AVAILABLE_COMPONENTS[componentType];
    addElement(_objectSpread(_objectSpread({
      id: (0, _nanoid.nanoid)()
    }, component), {}, {
      position: {
        x: 20,
        y: 20
      }
    }));
  };
  return /*#__PURE__*/React.createElement(_antd.Space, {
    direction: "vertical",
    style: {
      width: '100%'
    },
    size: "large"
  }, /*#__PURE__*/React.createElement(Title, {
    level: 4
  }, "Components"), /*#__PURE__*/React.createElement(_antd.Card, {
    size: "small"
  }, /*#__PURE__*/React.createElement(_antd.Space, {
    direction: "vertical",
    style: {
      width: '100%'
    },
    size: "small"
  }, Object.keys(AVAILABLE_COMPONENTS).map(function (componentType) {
    return /*#__PURE__*/React.createElement(_antd.Button, {
      key: componentType,
      onClick: function onClick() {
        return handleAddComponent(componentType);
      },
      type: "dashed",
      block: true
    }, componentType);
  }))));
};