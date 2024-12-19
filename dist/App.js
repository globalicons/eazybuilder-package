"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _antd = require("antd");
var _EditorContext = require("./context/EditorContext");
var _Toolbox = require("./components/editor/Toolbox");
var _Canvas = require("./components/editor/Canvas");
var _Topbar = _interopRequireDefault(require("./components/editor/Topbar"));
var _ErrorBoundary = require("./components/ErrorBoundary");
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Sider = _antd.Layout.Sider,
  Content = _antd.Layout.Content;
function App() {
  return /*#__PURE__*/React.createElement(_ErrorBoundary.ErrorBoundary, null, /*#__PURE__*/React.createElement(_EditorContext.EditorProvider, null, /*#__PURE__*/React.createElement(_antd.Layout, null, /*#__PURE__*/React.createElement(_Topbar["default"], null), /*#__PURE__*/React.createElement(_antd.Layout, null, /*#__PURE__*/React.createElement(Sider, {
    width: 200,
    theme: "light"
  }, /*#__PURE__*/React.createElement(_ErrorBoundary.ErrorBoundary, null, /*#__PURE__*/React.createElement(_Toolbox.Toolbox, null))), /*#__PURE__*/React.createElement(Content, {
    style: {
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(_ErrorBoundary.ErrorBoundary, null, /*#__PURE__*/React.createElement(_Canvas.Canvas, null)))))));
}
var _default = exports["default"] = App;