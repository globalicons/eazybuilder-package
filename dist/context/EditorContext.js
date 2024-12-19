"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorProvider = EditorProvider;
exports.useEditor = void 0;
var _react = require("react");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Create the context
var EditorContext = /*#__PURE__*/(0, _react.createContext)();

// Define initial state
var initialState = {
  elements: [],
  selectedElement: null,
  isEditMode: true
};

// Define reducer
var editorReducer = function editorReducer(state, action) {
  switch (action.type) {
    case 'SET_SELECTED_ELEMENT':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedElement: action.payload
      });
    case 'ADD_ELEMENT':
      return _objectSpread(_objectSpread({}, state), {}, {
        elements: [].concat(_toConsumableArray(state.elements), [action.payload])
      });
    case 'REMOVE_ELEMENT':
      return _objectSpread(_objectSpread({}, state), {}, {
        elements: state.elements.filter(function (el) {
          return el.id !== action.payload;
        })
      });
    case 'TOGGLE_EDIT_MODE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isEditMode: !state.isEditMode
      });
    case 'LOAD_LAYOUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        elements: action.payload
      });
    case 'UPDATE_ELEMENT':
      return _objectSpread(_objectSpread({}, state), {}, {
        elements: state.elements.map(function (el) {
          return el.id === action.payload.id ? _objectSpread(_objectSpread({}, el), action.payload.updates) : el;
        })
      });
    default:
      return state;
  }
};

// Add the useEditor hook
var useEditor = exports.useEditor = function useEditor() {
  var context = (0, _react.useContext)(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
function EditorProvider(_ref) {
  var children = _ref.children;
  var _useReducer = (0, _react.useReducer)(editorReducer, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    layout = _useState2[0],
    setLayout = _useState2[1];
  var value = _objectSpread(_objectSpread({}, state), {}, {
    selectElement: function selectElement(elementId) {
      dispatch({
        type: 'SET_SELECTED_ELEMENT',
        payload: elementId
      });
    },
    addElement: function addElement(element) {
      dispatch({
        type: 'ADD_ELEMENT',
        payload: element
      });
    },
    removeElement: function removeElement(elementId) {
      dispatch({
        type: 'REMOVE_ELEMENT',
        payload: elementId
      });
    },
    toggleEditMode: function toggleEditMode() {
      dispatch({
        type: 'TOGGLE_EDIT_MODE'
      });
    },
    saveLayout: function saveLayout() {
      return layout;
    },
    loadLayout: function loadLayout(layoutData) {
      if (Array.isArray(layoutData)) {
        setLayout(layoutData);
        dispatch({
          type: 'LOAD_LAYOUT',
          payload: layoutData
        });
      } else {
        console.error('Invalid layout data:', layoutData);
      }
    },
    updateElement: function updateElement(elementId, updates) {
      dispatch({
        type: 'UPDATE_ELEMENT',
        payload: {
          id: elementId,
          updates: updates
        }
      });
    }
  });
  return /*#__PURE__*/React.createElement(EditorContext.Provider, {
    value: value
  }, children);
}