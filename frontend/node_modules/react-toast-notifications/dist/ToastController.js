'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastController = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultAutoDismissTimeout = 5000;

var ToastController = exports.ToastController = function (_Component) {
  _inherits(ToastController, _Component);

  function ToastController() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToastController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastController.__proto__ || Object.getPrototypeOf(ToastController)).call.apply(_ref, [this].concat(args))), _this), _this.state = { autoDismissTimeout: _this.props.autoDismissTimeout }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToastController, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoDismiss = _props.autoDismiss,
          onDismiss = _props.onDismiss;
      var autoDismissTimeout = this.state.autoDismissTimeout;


      if (autoDismiss) {
        this.timeout = setTimeout(onDismiss, autoDismissTimeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          Toast = _props2.Toast,
          props = _objectWithoutProperties(_props2, ['Toast']);

      var autoDismissTimeout = this.state.autoDismissTimeout;

      var time = props.transitionDuration;

      return _react2.default.createElement(
        _reactTransitionGroup.Transition,
        _extends({ appear: true, mountOnEnter: true, unmountOnExit: true, timeout: time }, props),
        function (transitionState) {
          return _react2.default.createElement(Toast, _extends({
            autoDismissTimeout: autoDismissTimeout,
            transitionState: transitionState
          }, props));
        }
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(_ref2) {
      var autoDismiss = _ref2.autoDismiss,
          autoDismissTimeout = _ref2.autoDismissTimeout;

      if (!autoDismiss) return null;

      var timeout = typeof autoDismiss === 'number' ? autoDismiss : autoDismissTimeout;

      return { autoDismissTimeout: timeout };
    }
  }]);

  return ToastController;
}(_react.Component);

ToastController.defaultProps = {
  autoDismiss: false
};