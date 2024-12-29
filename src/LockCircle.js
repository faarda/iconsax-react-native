import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M12 7.75c-1.89 0-2.25.79-2.25 2.25v.62h4.5V10c0-1.46-.36-2.25-2.25-2.25ZM11.998 15.098a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"
      fill={color}
    ></Path>
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5.38 12.5c0 2.2-.68 2.88-2.88 2.88h-5c-2.2 0-2.88-.68-2.88-2.88v-1c0-1.71.41-2.5 1.63-2.77V10c0-.93 0-3.75 3.75-3.75s3.75 2.82 3.75 3.75v.73c1.22.27 1.63 1.06 1.63 2.77v1Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M9 11v-1c0-1.66.5-3 3-3s3 1.34 3 3v1M11.998 14.598a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.5 17h-5c-2 0-2.5-.5-2.5-2.5v-1c0-2 .5-2.5 2.5-2.5h5c2 0 2.5.5 2.5 2.5v1c0 2-.5 2.5-2.5 2.5Z"
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      fill={color}
    ></Path>
    <Path
      d="M15.751 10.73V10c0-.93 0-3.75-3.75-3.75S8.251 9.07 8.251 10v.73c-1.22.27-1.63 1.06-1.63 2.77v1c0 2.2.68 2.88 2.88 2.88h5c2.2 0 2.88-.68 2.88-2.88v-1c0-1.71-.41-2.5-1.63-2.77Zm-3.75 4.37c-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1.61 0 1.1.49 1.1 1.1 0 .61-.49 1.1-1.1 1.1Zm2.25-4.48h-4.5V10c0-1.46.36-2.25 2.25-2.25 1.89 0 2.25.79 2.25 2.25v.62Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M9 11v-1c0-1.66.5-3 3-3s3 1.34 3 3v1M12 14.6a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.5 17h-5c-2 0-2.5-.5-2.5-2.5v-1c0-2 .5-2.5 2.5-2.5h5c2 0 2.5.5 2.5 2.5v1c0 2-.5 2.5-2.5 2.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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
      d="M15 11.75c-.41 0-.75-.34-.75-.75v-1c0-1.46-.36-2.25-2.25-2.25-1.89 0-2.25.79-2.25 2.25v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1c0-.93 0-3.75 3.75-3.75s3.75 2.82 3.75 3.75v1c0 .41-.34.75-.75.75ZM11.998 15.348c-.74 0-1.35-.61-1.35-1.35 0-.74.61-1.35 1.35-1.35.74 0 1.35.61 1.35 1.35 0 .74-.61 1.35-1.35 1.35Zm0-1.5c-.08 0-.15.07-.15.15 0 .17.3.17.3 0 0-.08-.07-.15-.15-.15Z"
      fill={color}
    ></Path>
    <Path
      d="M14.5 17.75h-5c-2.4 0-3.25-.85-3.25-3.25v-1c0-2.4.85-3.25 3.25-3.25h5c2.4 0 3.25.85 3.25 3.25v1c0 2.4-.85 3.25-3.25 3.25Zm-5-6c-1.59 0-1.75.16-1.75 1.75v1c0 1.59.16 1.75 1.75 1.75h5c1.59 0 1.75-.16 1.75-1.75v-1c0-1.59-.16-1.75-1.75-1.75h-5Z"
      fill={color}
    ></Path>
    <Path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M9 11v-1c0-1.66.5-3 3-3s3 1.34 3 3v1M11.998 14.598a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Z"></Path>
      <Path d="M14.5 17h-5c-2 0-2.5-.5-2.5-2.5v-1c0-2 .5-2.5 2.5-2.5h5c2 0 2.5.5 2.5 2.5v1c0 2-.5 2.5-2.5 2.5Z"></Path>
    </G>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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

const LockCircle = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
LockCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
LockCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
LockCircle.displayName = 'LockCircle';

export default LockCircle;