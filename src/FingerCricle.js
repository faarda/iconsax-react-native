import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M12 7.95c-1.79 0-3.25 1.46-3.25 3.25v1.6c0 1.79 1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25v-1.6c0-1.79-1.46-3.25-3.25-3.25Zm.9 5.29c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-2.47c0-.49.4-.9.9-.9s.9.4.9.9v2.47Z"
      fill={color}
    ></Path>
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.75 10.8c0 2.62-2.13 4.75-4.75 4.75s-4.75-2.13-4.75-4.75v-1.6c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75v1.6Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12.002 9.121c.91 0 1.65.74 1.65 1.65v2.47c0 .91-.74 1.65-1.65 1.65-.91 0-1.65-.74-1.65-1.65"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
    ></Path>
    <Path
      d="M16.98 13.47c-.2 2.58-2.36 4.6-4.98 4.6-2.76 0-5-2.24-5-5v-2.14c0-2.76 2.24-5 5-5 2.59 0 4.72 1.97 4.97 4.49"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
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
      d="M12.002 9.871c-.49 0-.9.4-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47c0-.5-.41-.9-.9-.9Z"
      fill={color}
    ></Path>
    <Path
      d="M12 17.55c-2.62 0-4.75-2.13-4.75-4.75v-1.6c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75v1.6c0 2.62-2.13 4.75-4.75 4.75Zm0-9.6c-1.79 0-3.25 1.46-3.25 3.25v1.6c0 1.79 1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25v-1.6c0-1.79-1.46-3.25-3.25-3.25Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 14.88c-.91 0-1.65-.74-1.65-1.65v-2.47c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65v2.47c0 .91-.74 1.65-1.65 1.65Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    ></Path>
    <Path
      d="M16.98 13.47c-.2 2.58-2.36 4.6-4.98 4.6-2.76 0-5-2.24-5-5v-2.14c0-2.76 2.24-5 5-5 2.59 0 4.72 1.97 4.97 4.49"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
    <Path
      d="M12.002 15.63c-1.32 0-2.4-1.08-2.4-2.4v-2.47c0-1.32 1.08-2.4 2.4-2.4 1.32 0 2.4 1.08 2.4 2.4v2.47a2.4 2.4 0 0 1-2.4 2.4Zm0-5.76c-.49 0-.9.4-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47c0-.5-.41-.9-.9-.9Z"
      fill={color}
    ></Path>
    <Path
      d="M12 18.82c-3.17 0-5.75-2.58-5.75-5.75v-2.14c0-3.17 2.58-5.75 5.75-5.75 2.96 0 5.42 2.22 5.72 5.16a.75.75 0 0 1-.67.82.744.744 0 0 1-.82-.67A4.236 4.236 0 0 0 12 6.68a4.26 4.26 0 0 0-4.25 4.25v2.14A4.26 4.26 0 0 0 12 17.32c2.2 0 4.06-1.72 4.24-3.91a.752.752 0 1 1 1.5.12c-.24 2.97-2.76 5.29-5.74 5.29Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M12.002 14.88c-.91 0-1.65-.74-1.65-1.65v-2.47c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65v2.47c0 .91-.74 1.65-1.65 1.65Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
    ></Path>
    <Path
      opacity=".4"
      d="M16.98 13.47c-.2 2.58-2.36 4.6-4.98 4.6-2.76 0-5-2.24-5-5v-2.14c0-2.76 2.24-5 5-5 2.59 0 4.72 1.97 4.97 4.49"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
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

const FingerCricle = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
FingerCricle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
FingerCricle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
FingerCricle.displayName = 'FingerCricle';

export default FingerCricle;
