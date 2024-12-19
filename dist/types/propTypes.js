"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentPropTypes = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var componentPropTypes = exports.componentPropTypes = {
  base: {
    style: _propTypes["default"].object,
    className: _propTypes["default"].string
  },
  button: {
    size: _propTypes["default"].oneOf(['small', 'middle', 'large']),
    variant: _propTypes["default"].string,
    color: _propTypes["default"].string,
    children: _propTypes["default"].node,
    onClick: _propTypes["default"].func
  },
  container: {
    background: _propTypes["default"].string,
    padding: _propTypes["default"].number,
    children: _propTypes["default"].node
  },
  card: {
    title: _propTypes["default"].string,
    subtitle: _propTypes["default"].string,
    background: _propTypes["default"].string,
    padding: _propTypes["default"].number,
    actions: _propTypes["default"].arrayOf(_propTypes["default"].object),
    children: _propTypes["default"].node
  },
  image: {
    src: _propTypes["default"].string,
    alt: _propTypes["default"].string,
    onImageChange: _propTypes["default"].func,
    showUploader: _propTypes["default"].bool
  },
  text: {
    initialText: _propTypes["default"].string,
    fontSize: _propTypes["default"].number
  }
};