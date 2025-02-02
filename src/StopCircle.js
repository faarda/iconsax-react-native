import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm4.26 11.23c0 1.66-1.34 3-3 3h-2.46c-1.66 0-3-1.34-3-3v-2.46c0-1.66 1.34-3 3-3h2.46c1.66 0 3 1.34 3 3v2.46Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M16.23 13.27v-2.54c0-2.12-.85-2.96-2.96-2.96h-2.54c-2.12 0-2.96.85-2.96 2.96v2.54c0 2.12.85 2.96 2.96 2.96h1.78"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M11.969 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      fill={color}
    ></Path>
    <Path
      d="M10.77 16.23h2.46c1.66 0 3-1.34 3-3v-2.46c0-1.66-1.34-3-3-3h-2.46c-1.66 0-3 1.34-3 3v2.46c0 1.66 1.34 3 3 3Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.73 16.23h2.54c2.12 0 2.96-.85 2.96-2.96v-2.54c0-2.12-.85-2.96-2.96-2.96h-2.54c-2.12 0-2.96.85-2.96 2.96v2.54c0 2.11.85 2.96 2.96 2.96Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M11.969 22.75c-5.92 0-10.75-4.82-10.75-10.75s4.83-10.75 10.75-10.75S22.719 6.07 22.719 12s-4.82 10.75-10.75 10.75Zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25Z"
      fill={color}
    ></Path>
    <Path
      d="M13.27 16.98h-2.54c-2.53 0-3.71-1.18-3.71-3.71v-2.54c0-2.53 1.18-3.71 3.71-3.71h2.54c2.53 0 3.71 1.18 3.71 3.71v2.54c0 2.53-1.18 3.71-3.71 3.71Zm-2.54-8.46c-1.69 0-2.21.52-2.21 2.21v2.54c0 1.69.52 2.21 2.21 2.21h2.54c1.69 0 2.21-.52 2.21-2.21v-2.54c0-1.69-.52-2.21-2.21-2.21h-2.54Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M11.969 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M10.73 16.23h2.54c2.12 0 2.96-.85 2.96-2.96v-2.54c0-2.12-.85-2.96-2.96-2.96h-2.54c-2.12 0-2.96.85-2.96 2.96v2.54c0 2.11.85 2.96 2.96 2.96Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
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

const StopCircle = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
StopCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
StopCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
StopCircle.displayName = 'StopCircle';

export default StopCircle;
