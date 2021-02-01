"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToggleDisplay;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

ToggleDisplay.propTypes = {
  tag: _propTypes["default"].string,
  hide: _propTypes["default"].bool,
  show: _propTypes["default"].bool,
  "if": _propTypes["default"].bool
};
ToggleDisplay.defaultProps = {
  tag: 'span'
};
var propsToRemove = Object.keys(ToggleDisplay.propTypes);

function isDefined(val) {
  return val != null;
}

function shouldHide(props) {
  if (isDefined(props.show)) {
    return !props.show;
  } else if (isDefined(props.hide)) {
    return props.hide;
  }

  return false;
}

function pickProps(props) {
  var newProps = Object.assign({}, props);
  propsToRemove.forEach(function (prop) {
    if (prop in newProps) {
      delete newProps[prop];
    }
  });
  return newProps;
}

function ToggleDisplay(props) {
  if (props["if"] === false) {
    return null;
  }

  var style = {};

  if (shouldHide(props)) {
    style.display = 'none';
  }

  var Tag = props.tag; // prevent our props from being leaked down onto the children

  var newProps = pickProps(props);
  return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
    style: style
  }, newProps));
}
