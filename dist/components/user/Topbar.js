"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Topbar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _core = require("@craftjs/core");
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
  var _useEditor = (0, _core.useEditor)(function (state) {
      return {
        enabled: state.options.enabled
      };
    }),
    actions = _useEditor.actions,
    query = _useEditor.query,
    enabled = _useEditor.enabled;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalOpen = _useState2[0],
    setModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    stateToLoad = _useState4[0],
    setStateToLoad = _useState4[1];
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
    checked: enabled,
    onChange: function onChange(value) {
      return actions.setOptions(function (options) {
        return options.enabled = value;
      });
    }
  })), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    size: "small",
    type: "default",
    onClick: function onClick() {
      try {
        var json = query.serialize(); // Fetch serialized state
        console.log("Serialized State:", json); // Debugging log
        if (!json || json === "{}") {
          throw new Error("Editor state is empty or not available");
        }
        var compressed = _lzutf["default"].encodeBase64(_lzutf["default"].compress(json)); // Compress and encode
        (0, _copyToClipboard["default"])(compressed); // Copy to clipboard
        _antd.notification.success({
          message: "State copied to clipboard"
        });
      } catch (err) {
        console.error("Error copying state:", err);
        _antd.notification.error({
          message: "Error copying state",
          description: err.message
        });
      }
    }
  }, "Save Output"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    size: "small",
    type: "default",
    onClick: function onClick() {
      return setModalOpen(true);
    }
  }, "Preview"), /*#__PURE__*/_react["default"].createElement(_antd.Modal, {
    title: "Load State",
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
      onClick: function onClick() {
        try {
          var decompressed = _lzutf["default"].decompress(_lzutf["default"].decodeBase64(stateToLoad));
          console.log("Decompressed State:", decompressed); // Debugging log
          actions.deserialize(decompressed); // Load state into editor
          _antd.notification.success({
            message: "State loaded successfully"
          });
          setModalOpen(false);
        } catch (err) {
          console.error("Error loading state:", err);
          _antd.notification.error({
            message: "Error loading state",
            description: "Please ensure the input is valid."
          });
        }
      }
    }, "Load")]
  }, /*#__PURE__*/_react["default"].createElement(_antd.Input.TextArea, {
    placeholder: "Paste the copied state here",
    value: stateToLoad,
    onChange: function onChange(e) {
      return setStateToLoad(e.target.value);
    },
    rows: 4
  }))));
};