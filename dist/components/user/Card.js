"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardTop = exports.CardBottom = exports.Card = void 0;
var _Text = require("./Text");
var _Button = require("./Button");
var _Container = require("./Container");
var _core = require("@craftjs/core");
var _antd = require("antd");
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // components/user/Card.js
var CardTop = exports.CardTop = function CardTop(_ref) {
  var children = _ref.children;
  var _useNode = (0, _core.useNode)(function (state) {
      return {
        hasSelectedNode: state.events.selected
      };
    }),
    connect = _useNode.connectors.connect,
    hasSelectedNode = _useNode.hasSelectedNode;
  return /*#__PURE__*/React.createElement("div", {
    ref: connect,
    className: hasSelectedNode ? "node-selected" : ""
  }, children);
};
CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: function canMoveIn(incomingNodes) {
      return incomingNodes.every(function (incomingNode) {
        return incomingNode.data.type === _Text.Text;
      });
    }
  }
};
var CardBottom = exports.CardBottom = function CardBottom(_ref2) {
  var children = _ref2.children;
  var _useNode2 = (0, _core.useNode)(function (state) {
      return {
        hasSelectedNode: state.events.selected
      };
    }),
    connect = _useNode2.connectors.connect,
    hasSelectedNode = _useNode2.hasSelectedNode;
  return /*#__PURE__*/React.createElement("div", {
    ref: connect,
    className: hasSelectedNode ? "node-selected" : ""
  }, children);
};
CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: function canMoveIn(incomingNodes) {
      return incomingNodes.every(function (incomingNode) {
        return incomingNode.data.type === _Button.Button;
      });
    }
  }
};
var Card = exports.Card = function Card(_ref3) {
  var background = _ref3.background,
    _ref3$padding = _ref3.padding,
    padding = _ref3$padding === void 0 ? 20 : _ref3$padding;
  var _useNode3 = (0, _core.useNode)(function (state) {
      return {
        hasSelectedNode: state.events.selected
      };
    }),
    connect = _useNode3.connectors.connect,
    hasSelectedNode = _useNode3.hasSelectedNode,
    setProp = _useNode3.actions.setProp;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    editable = _useState2[0],
    setEditable = _useState2[1];
  (0, _react.useEffect)(function () {
    if (!hasSelectedNode) setEditable(false);
  }, [hasSelectedNode]);
  return /*#__PURE__*/React.createElement(_antd.Card, {
    style: {
      background: background,
      padding: padding
    }
  }, /*#__PURE__*/React.createElement(_core.Element, {
    id: "text",
    is: CardTop,
    canvas: true
  }, /*#__PURE__*/React.createElement(_Text.Text, {
    text: "Title",
    fontSize: 20
  }), /*#__PURE__*/React.createElement(_Text.Text, {
    text: "Subtitle",
    fontSize: 15
  })), /*#__PURE__*/React.createElement(_core.Element, {
    id: "buttons",
    is: _Container.Container,
    canvas: true,
    padding: 12
  }, /*#__PURE__*/React.createElement(_Button.Button, {
    size: "small",
    type: "primary"
  }, "Learn more"), /*#__PURE__*/React.createElement(_Button.Button, {
    size: "small",
    type: "default"
  }, "Cancel")));
};
Card.craft = {
  displayName: "Card"
};