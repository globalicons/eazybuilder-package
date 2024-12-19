"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;
var _core = require("@craftjs/core");
var _antd = require("antd");
var Container = exports.Container = function Container(_ref) {
  var background = _ref.background,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 0 : _ref$padding,
    children = _ref.children;
  var _useNode = (0, _core.useNode)(function (state) {
      return {
        hasSelectedNode: state.events.selected
      };
    }),
    _useNode$connectors = _useNode.connectors,
    connect = _useNode$connectors.connect,
    drag = _useNode$connectors.drag,
    hasSelectedNode = _useNode.hasSelectedNode;
  var _theme$useToken = _antd.theme.useToken(),
    token = _theme$useToken.token;
  return /*#__PURE__*/React.createElement("div", {
    ref: function ref(_ref2) {
      return connect(drag(_ref2));
    },
    className: hasSelectedNode ? "node-selected" : "",
    style: {
      margin: "5px 0",
      padding: "".concat(padding, "px"),
      background: background || token.colorFillQuaternary,
      borderRadius: token.borderRadius,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, children);
};
Container.craft = {
  displayName: 'Container'
};