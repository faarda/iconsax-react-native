import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path d="M12.001 17.35a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26Z" fill={color}></Path>
    <Path
      d="M16.65 9.44H7.12V8.28c0-2.93.83-4.88 4.88-4.88 4.33 0 4.88 2.11 4.88 3.95 0 .39.31.7.7.7.39 0 .7-.31.7-.7C18.28 3.8 16.17 2 12 2 6.37 2 5.72 5.58 5.72 8.28v1.25C2.92 9.88 2 11.3 2 14.79v1.86C2 20.75 3.25 22 7.35 22h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-4.1-1.25-5.35-5.35-5.35ZM12 18.74c-1.67 0-3.02-1.36-3.02-3.02 0-1.67 1.36-3.02 3.02-3.02a3.03 3.03 0 0 1 3.02 3.02c0 1.67-1.35 3.02-3.02 3.02Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M9.5 16a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-2.5-2.5"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 17v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75M6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5"
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
      d="M12.001 17.35a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26Z"
      fill={color}
    ></Path>
    <Path
      d="M16.65 9.441h-9.3c-4.1 0-5.35 1.25-5.35 5.35v1.86c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-4.1-1.25-5.35-5.35-5.35Zm-4.65 9.3c-1.67 0-3.02-1.36-3.02-3.02s1.35-3.02 3.02-3.02 3.02 1.36 3.02 3.02-1.35 3.02-3.02 3.02Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M7.119 9.45V8.28c0-2.93.83-4.88 4.88-4.88 4.33 0 4.88 2.11 4.88 3.95 0 .39.31.7.7.7.39 0 .7-.31.7-.7 0-3.55-2.11-5.35-6.28-5.35-5.63 0-6.28 3.58-6.28 6.28v1.25c.42-.05.89-.08 1.4-.08Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5ZM6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
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
      d="M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75v-2c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v2c0 4.41-1.34 5.75-5.75 5.75Zm-10-12c-3.58 0-4.25.68-4.25 4.25v2c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25v-2c0-3.57-.67-4.25-4.25-4.25H7Z"
      fill={color}
    ></Path>
    <Path
      d="M6 10.75c-.41 0-.75-.34-.75-.75V8c0-2.9.7-6.75 6.75-6.75 4.48 0 6.75 1.93 6.75 5.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.98-.6-4.25-5.25-4.25-4.36 0-5.25 2.1-5.25 5.25v2c0 .41-.34.75-.75.75ZM12 19.25c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5M12 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
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

const Unlock = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Unlock.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Unlock.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Unlock.displayName = 'Unlock';

export default Unlock;
