"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delete = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("@craftjs/core");
var _antd = require("antd");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Delete = exports.Delete = function Delete() {
  var _useEditor = (0, _core.useEditor)(),
    actions = _useEditor.actions,
    query = _useEditor.query;
  var handleDelete = function handleDelete() {
    // Extract selected node IDs from the state
    var selectedNodeIds = Object.keys(query.getState().nodes).filter(function (id) {
      return query.node(id).isSelected();
    });
    if (selectedNodeIds.length > 0) {
      console.log("Deleting nodes:", selectedNodeIds);
      selectedNodeIds.forEach(function (id) {
        var node = query.node(id).get();
        if (node) {
          actions["delete"](id);
        } else {
          console.warn("Node with ID ".concat(id, " does not exist."));
        }
      });
    } else {
      console.error("No nodes selected for deletion.");
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    danger: true,
    onClick: handleDelete
  }, "Delete Item");
};