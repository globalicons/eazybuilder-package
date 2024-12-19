"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Topbar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _EditorContext = require("../../context/EditorContext");
var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));
var _lzutf = _interopRequireDefault(require("lzutf8"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Topbar = exports.Topbar = function Topbar() {
  var _useEditor = (0, _EditorContext.useEditor)(),
    selectElement = _useEditor.selectElement,
    addElement = _useEditor.addElement,
    removeElement = _useEditor.removeElement,
    toggleEditMode = _useEditor.toggleEditMode,
    saveLayout = _useEditor.saveLayout,
    loadLayout = _useEditor.loadLayout,
    updateElement = _useEditor.updateElement;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalOpen = _useState2[0],
    setModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    jsonInput = _useState4[0],
    setJsonInput = _useState4[1];
  var handleModalOk = function handleModalOk() {
    try {
      if (!jsonInput.trim()) {
        _antd.notification.error({
          message: 'Please paste a layout JSON'
        });
        return;
      }
      var layoutData = JSON.parse(jsonInput);
      console.log('Parsed layout data:', layoutData); // Debug log

      if (Array.isArray(layoutData)) {
        loadLayout(layoutData);
        setModalOpen(false);
        setJsonInput("");
        _antd.notification.success({
          message: 'Layout loaded successfully'
        });
      } else {
        _antd.notification.error({
          message: 'Invalid layout data'
        });
      }
    } catch (error) {
      console.error('Layout parsing error:', error);
      _antd.notification.error({
        message: "Invalid JSON format: ".concat(error.message)
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: "8px",
      margin: "24px 0 8px",
      backgroundColor: "#cbe8e7"
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    align: "middle"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    flex: "auto"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      marginRight: 8
    }
  }, "Enable"), /*#__PURE__*/_react["default"].createElement(_antd.Switch, {
    checked: true // Assuming you want it enabled by default
    ,
    onChange: function onChange(value) {
      return toggleEditMode();
    }
  })), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    className: "copy-state-btn",
    size: "small",
    type: "default",
    onClick: function onClick() {
      var json = saveLayout();
      (0, _copyToClipboard["default"])(_lzutf["default"].encodeBase64(_lzutf["default"].compress(json)));
      _antd.notification.success({
        message: "State copied to clipboard"
      });
    }
  }, "Save Output"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    className: "load-state-btn",
    size: "small",
    type: "default",
    onClick: function onClick() {
      return setModalOpen(true);
    }
  }, "Preview"), /*#__PURE__*/_react["default"].createElement(_antd.Modal, {
    title: "Load state",
    open: modalOpen,
    onCancel: function onCancel() {
      return setModalOpen(false);
    },
    footer: [/*#__PURE__*/_react["default"].createElement(_antd.Button, {
      key: "cancel",
      onClick: function onClick() {
        return setModalOpen(false);
      }
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      key: "load",
      type: "primary",
      onClick: handleModalOk
    }, "Load")]
  }, /*#__PURE__*/_react["default"].createElement(_antd.Input.TextArea, {
    placeholder: "Paste the contents that was copied from the \"Copy Current State\" button",
    value: jsonInput,
    onChange: function onChange(e) {
      return setJsonInput(e.target.value);
    },
    rows: 4
  }))));
};
var _default = exports["default"] = Topbar; // Ensure this is exported