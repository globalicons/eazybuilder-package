"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;
var _core = require("@craftjs/core");
var _react = require("react");
var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Text = exports.Text = function Text(_ref) {
  var text = _ref.text,
    fontSize = _ref.fontSize;
  var _useNode = (0, _core.useNode)(function (state) {
      return {
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged
      };
    }),
    _useNode$connectors = _useNode.connectors,
    connect = _useNode$connectors.connect,
    drag = _useNode$connectors.drag,
    hasSelectedNode = _useNode.hasSelectedNode,
    hasDraggedNode = _useNode.hasDraggedNode,
    setProp = _useNode.actions.setProp;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    editable = _useState2[0],
    setEditable = _useState2[1];
  (0, _react.useEffect)(function () {
    !hasSelectedNode && setEditable(false);
  }, [hasSelectedNode]);
  return /*#__PURE__*/React.createElement("div", {
    ref: function ref(_ref2) {
      return connect(drag(_ref2));
    },
    onClick: function onClick() {
      return setEditable(true);
    },
    className: hasSelectedNode ? "node-selected" : ""
  }, /*#__PURE__*/React.createElement(_reactContenteditable["default"], {
    disabled: !editable,
    html: text,
    onChange: function onChange(e) {
      return setProp(function (props) {
        return props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
      });
    },
    tagName: "p",
    style: {
      fontSize: "".concat(fontSize, "px")
    }
  }));
};
Text.craft = {
  rules: {
    canDrag: function canDrag(node) {
      return node.data.props.text != "Drag";
    }
  }
};