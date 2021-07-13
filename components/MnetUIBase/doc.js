"use strict";

exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

var doc = function doc(MnetUIBase) {
  var DocumentedMnetUIBase = (0, _reactDesc.describe)(MnetUIBase).availableAt((0, _utils.getAvailableAtBadge)('MnetUIBase')).description('The top level MnetUIBase container.').usage("import { MnetUIBase } from 'mnet-ui-base';\n<MnetUIBase>...</MnetUIBase>").intrinsicElement('div');
  DocumentedMnetUIBase.propTypes = {
    background: _utils.backgroundDoc,
    dir: _reactDesc.PropTypes.oneOf(['rtl']).description('Layout direction for right to left contexts'),
    full: _reactDesc.PropTypes.bool.description('Whether to take the whole viewport.').defaultValue(false),
    plain: _reactDesc.PropTypes.bool.description("Whether or not MnetUIBase should apply a global font-family, font-size,\n        and line-height.").defaultValue(false),
    cssVars: _reactDesc.PropTypes.bool.description('Whether to expose the css variables.').defaultValue(false),
    theme: _reactDesc.PropTypes.object.description('Custom styles for MnetUIBase app component.'),
    themeMode: _reactDesc.PropTypes.oneOf(['dark', 'light']).description("Dark vs. light theme variation. Default is unspecified and left to\n      theme."),
    userAgent: _reactDesc.PropTypes.string.description("User agent used to detect the device width for setting the initial\n      breakpoint.")
  };
  return DocumentedMnetUIBase;
};

exports.doc = doc;
var themeDoc = {
  'mnet.extend': {
    description: 'Any additional style for MnetUIBase.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'global.font.face': {
    description: 'Custom font face declaration',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;