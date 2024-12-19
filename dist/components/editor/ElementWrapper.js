"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementWrapper = void 0;
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _EditorContext = require("../../context/EditorContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ElementWrapper = exports.ElementWrapper = function ElementWrapper(_ref) {
  var element = _ref.element,
    children = _ref.children;
  var _useEditor = (0, _EditorContext.useEditor)(),
    selectedElement = _useEditor.selectedElement,
    selectElement = _useEditor.selectElement,
    removeElement = _useEditor.removeElement,
    isEditMode = _useEditor.isEditMode,
    updateElement = _useEditor.updateElement;
  var isSelected = selectedElement === element.id;
  var handleDragStop = function handleDragStop(e, data) {
    updateElement(element.id, {
      position: {
        x: data.x,
        y: data.y
      }
    });
  };
  if (!isEditMode) {
    var _element$position, _element$position2;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: ((_element$position = element.position) === null || _element$position === void 0 ? void 0 : _element$position.x) || 0,
        top: ((_element$position2 = element.position) === null || _element$position2 === void 0 ? void 0 : _element$position2.y) || 0
      }
    }, children);
  }
  return /*#__PURE__*/React.createElement(_reactDraggable["default"], {
    defaultPosition: element.position || {
      x: 0,
      y: 0
    },
    onStop: handleDragStop,
    bounds: "parent"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
      selectElement(element.id);
    },
    style: {
      position: 'absolute',
      border: isSelected ? '2px solid #1890ff' : '2px solid transparent',
      padding: '4px',
      margin: '4px',
      minHeight: '30px',
      cursor: 'move'
    }
  }, isSelected && /*#__PURE__*/React.createElement(_antd.Button, {
    icon: /*#__PURE__*/React.createElement(_icons.DeleteOutlined, null),
    size: "small",
    danger: true,
    style: {
      position: 'absolute',
      right: '-20px',
      top: '-20px',
      zIndex: 1000
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      removeElement(element.id);
    }
  }), children));
};