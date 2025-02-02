import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM6.75 14.14c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75v4.28Zm3 1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14Zm3 1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10Zm3-1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14Zm3-1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75v4.28Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6 9.86v4.29M9 8.43v7.14M12 14.988v2.01M12 7v4.95M15 8.43v7.14M18 9.86v4.29M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
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
      d="M6 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75ZM9 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75ZM15 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM18 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M6 9.86v4.29M9 8.43v7.14M12 7v10M15 8.43v7.14M18 9.86v4.29M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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
      d="M6 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75ZM9 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75ZM15 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM18 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75Z"
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
    <Path
      opacity=".4"
      d="M6 9.86v4.29M9 8.43v7.14M12 7v10M15 8.43v7.14M18 9.86v4.29"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
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

const VoiceCricle = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
VoiceCricle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
VoiceCricle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
VoiceCricle.displayName = 'VoiceCricle';

export default VoiceCricle;
