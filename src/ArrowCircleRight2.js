import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.03 10.53l-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.72-1.72H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.19l-1.72-1.72a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06z"
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
      d="M8.5 12h6M12.5 15l3-3-3-3"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{strokeWidth}"
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      opacity=".4"
    ></Path>
    <Path
      fill={color}
      d="M16.03 11.47l-3-3a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.72 1.72H8.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.19l-1.72 1.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3-3c.29-.29.29-.77 0-1.06z"
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8.5 12h6"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12.5 15l3-3-3-3"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
    ></Path>
    <Path
      fill={color}
      d="M14.5 12.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></Path>
    <Path
      fill={color}
      d="M12.5 15.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L14.44 12l-2.47-2.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22z"
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{strokeWidth}"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    ></Path>
    <G opacity=".54">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.5 12h6M12.5 15l3-3-3-3"
      ></Path>
    </G>
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

const ArrowCircleRight2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
ArrowCircleRight2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
ArrowCircleRight2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
ArrowCircleRight2.displayName = 'ArrowCircleRight2';

export default ArrowCircleRight2;
