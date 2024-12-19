"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbox = void 0;
var _core = require("@craftjs/core");
var _antd = require("antd");
var _Container = require("./user/Container");
var _Card = require("./user/Card");
var _Button = require("./user/Button");
var _Text = require("./user/Text");
var _Image = require("./user/Image");
var _Delete = require("./user/Delete");
var Title = _antd.Typography.Title;
var Toolbox = exports.Toolbox = function Toolbox() {
  var _useEditor = (0, _core.useEditor)(),
    connectors = _useEditor.connectors;
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
  }, /*#__PURE__*/React.createElement(_antd.Button, {
    ref: function ref(_ref) {
      return connectors.create(_ref, /*#__PURE__*/React.createElement(_Button.Button, {
        size: "small"
      }, "Click me"));
    },
    type: "dashed",
    block: true
  }, "Button"), /*#__PURE__*/React.createElement(_antd.Button, {
    ref: function ref(_ref2) {
      return connectors.create(_ref2, /*#__PURE__*/React.createElement(_Text.Text, {
        text: "Hi world"
      }));
    },
    type: "dashed",
    block: true
  }, "Text"), /*#__PURE__*/React.createElement(_antd.Button, {
    ref: function ref(_ref3) {
      return connectors.create(_ref3, /*#__PURE__*/React.createElement(_core.Element, {
        is: _Container.Container,
        padding: 20,
        canvas: true
      }));
    },
    type: "dashed",
    block: true
  }, "Container"), /*#__PURE__*/React.createElement(_antd.Button, {
    ref: function ref(_ref4) {
      return connectors.create(_ref4, /*#__PURE__*/React.createElement(_Card.Card, null));
    },
    type: "dashed",
    block: true
  }, "Card"), /*#__PURE__*/React.createElement(_antd.Button, {
    ref: function ref(_ref5) {
      return connectors.create(_ref5, /*#__PURE__*/React.createElement(_Image.Image, null));
    },
    type: "dashed",
    block: true
  }, "Image"), /*#__PURE__*/React.createElement(_Delete.Delete, null))));
};