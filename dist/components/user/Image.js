"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;
var _react = require("react");
var _core = require("@craftjs/core");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Image = exports.Image = function Image(_ref) {
  var src = _ref.src;
  var _useState = (0, _react.useState)(src || ""),
    _useState2 = _slicedToArray(_useState, 2),
    imageSrc = _useState2[0],
    setImageSrc = _useState2[1]; // Default to empty or provided source
  var _useNode = (0, _core.useNode)(function (state) {
      return {
        hasSelectedNode: state.events.selected
      };
    }),
    _useNode$connectors = _useNode.connectors,
    connect = _useNode$connectors.connect,
    drag = _useNode$connectors.drag,
    setProp = _useNode.actions.setProp,
    hasSelectedNode = _useNode.hasSelectedNode;
  (0, _react.useEffect)(function () {
    // Effect to log the selected state, if needed for debugging
    console.log("Image selected state:", hasSelectedNode);
  }, [hasSelectedNode]);
  var handleImageChange = function handleImageChange(e) {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setImageSrc(reader.result);
        setProp(function (props) {
          return props.src = reader.result;
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: function ref(_ref2) {
      return connect(drag(_ref2));
    },
    className: hasSelectedNode ? "node-selected" : ""
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: handleImageChange,
    style: {
      marginBottom: "10px"
    }
  })), imageSrc && /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "Uploaded preview",
    style: {
      maxWidth: "100%"
    }
  }));
};
Image.craft = {
  rules: {
    canDrag: true
  }
};