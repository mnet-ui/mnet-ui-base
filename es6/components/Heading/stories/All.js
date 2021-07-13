import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Grid, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';

var H = function H(_ref) {
  var level = _ref.level,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(Heading, {
    level: level,
    size: size
  }, "Heading " + level + " " + size);
};

H.propTypes = {
  level: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired
};

var Set = function Set(_ref2) {
  var size = _ref2.size;
  return /*#__PURE__*/React.createElement("div", null, [1, 2, 3, 4, 5, 6].map(function (level) {
    return /*#__PURE__*/React.createElement(H, {
      key: level,
      level: level,
      size: size
    });
  }));
};

Set.propTypes = {
  size: PropTypes.string.isRequired
};

var All = function All() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    columns: "large",
    gap: "medium"
  }, /*#__PURE__*/React.createElement(Set, {
    size: "medium"
  }), /*#__PURE__*/React.createElement(Set, {
    size: "small"
  }), /*#__PURE__*/React.createElement(Set, {
    size: "large"
  }), /*#__PURE__*/React.createElement(Set, {
    size: "xlarge"
  })));
};

var Color = function Color() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Heading, {
    color: "accent-1"
  }, "Colored Heading"));
};

var customlevel = deepMerge(mnet, {
  heading: {
    level: {
      5: {
        small: {
          size: '12px',
          height: '16px'
        },
        medium: {
          size: '14px',
          height: '18px'
        },
        large: {
          size: '16px',
          height: '20px'
        }
      }
    },
    extend: function extend(props) {
      return "color: " + props.theme.global.colors.brand;
    }
  }
});

var CustomHeading = function CustomHeading() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customlevel
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 5
  }, "Heading level 5"));
};

storiesOf('Heading', module).add('All', function () {
  return /*#__PURE__*/React.createElement(All, null);
}).add('Color', function () {
  return /*#__PURE__*/React.createElement(Color, null);
}).add('Custom', function () {
  return /*#__PURE__*/React.createElement(CustomHeading, null);
});
storiesOf('Heading', module).add('All', function () {
  return /*#__PURE__*/React.createElement(All, null);
});