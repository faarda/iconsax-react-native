import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M21.75 6.73c0-.2-.08-.39-.22-.53l-3.72-3.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.45 2.45H3c-.41 0-.75.34-.75.75s.34.74.75.74h16.19l-2.44 2.44c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.71-3.71c.07-.07.13-.16.17-.26 0-.01 0-.02.01-.03.03-.08.05-.16.05-.25zM21 16.518H4.81l2.44-2.44c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-3.71 3.71c-.07.07-.13.16-.17.26 0 .01 0 .02-.01.03-.03.08-.05.17-.05.26 0 .2.08.39.22.53l3.72 3.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.45-2.45H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{strokeWidth}"
      d="M17.28 10.45L21 6.73l-3.72-3.72M10.01 6.73H21M3 6.73h2.99M6.72 13.55L3 17.27l3.72 3.72M3 17.27h11.09M21 17.27h-2.97"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M21.75 6.73c0-.2-.08-.39-.22-.53l-3.72-3.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.45 2.45H3c-.41 0-.75.34-.75.75s.34.75.75.75h16.19l-2.44 2.44c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.71-3.71c.07-.07.13-.16.17-.26 0-.01 0-.02.01-.03.03-.09.05-.17.05-.26z"
      opacity=".4"
    ></Path>
    <Path
      fill={color}
      d="M21 16.52H4.81l2.44-2.44c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-3.71 3.71c-.07.07-.13.16-.17.26 0 .01 0 .02-.01.03-.03.08-.05.17-.05.26 0 .2.08.39.22.53l3.72 3.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L4.8 18.02H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M17.28 10.45L21 6.73l-3.72-3.72M3 6.73h18M6.72 13.55L3 17.27l3.72 3.72M21 17.27H3"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M17.279 11.2c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.19-3.19-3.19-3.19a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.72 3.72a.75.75 0 010 1.06l-3.72 3.72c-.15.14-.34.22-.53.22z"
    ></Path>
    <Path
      fill={color}
      d="M21 7.48H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM6.72 21.75c-.19 0-.38-.07-.53-.22l-3.72-3.72a.75.75 0 010-1.06l3.72-3.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.19 3.19 3.19 3.19c.29.29.29.77 0 1.06a.71.71 0 01-.53.22z"
    ></Path>
    <Path
      fill={color}
      d="M21 18.02H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <G opacity=".4">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.281 10.45l3.72-3.72-3.72-3.72M3 6.73h18"
      ></Path>
    </G>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{strokeWidth}"
      d="M6.72 13.55L3 17.27l3.72 3.72M21 17.27H3"
    ></Path>
  </>
);

const chooseVariant = (variant, color, strokeWidth) => {
  switch (variant) {
    case 'Bold':
      return <Bold color={color} />;

    case 'Broken':
      return <Broken color={color} />;

    case 'Bulk':
      return <Bulk color={color} />;

    case 'Linear':
      return <Linear color={color} strokeWidth={strokeWidth} />;

    case 'Outline':
      return <Outline color={color} />;

    case 'TwoTone':
      return <TwoTone color={color} />;

    default:
      return <Linear color={color} strokeWidth={strokeWidth} />;
  }
};

const ArrangeHorizontal = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
  return (
    <Svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {chooseVariant(variant, color, strokeWidth)}
    </Svg>
  );
});
ArrangeHorizontal.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
ArrangeHorizontal.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
ArrangeHorizontal.displayName = 'ArrangeHorizontal';

export default ArrangeHorizontal;
