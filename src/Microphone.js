import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M12.002 21.93c-5.04 0-9.15-4.1-9.15-9.15V10.9c0-.39.32-.7.7-.7.38 0 .7.32.7.7v1.88c0 4.27 3.47 7.74 7.74 7.74s7.74-3.47 7.74-7.74V10.9c0-.39.32-.7.7-.7.38 0 .7.32.7.7v1.88c.02 5.05-4.09 9.15-9.13 9.15Z"
      fill={color}
    ></Path>
    <Path
      d="M11.998 2c-3.36 0-6.1 2.74-6.1 6.1v4.69c0 3.36 2.74 6.1 6.1 6.1 3.36 0 6.1-2.74 6.1-6.1V8.1c0-3.36-2.74-6.1-6.1-6.1Zm2.18 8.59a.61.61 0 0 1-.75.43 5.9 5.9 0 0 0-3.12 0c-.33.09-.66-.1-.75-.43a.61.61 0 0 1 .43-.75c1.23-.34 2.53-.34 3.76 0 .33.09.52.42.43.75Zm.85-2.77a.6.6 0 0 1-.78.36 6.897 6.897 0 0 0-4.74 0 .61.61 0 0 1-.79-.36c-.11-.31.05-.66.37-.78 1.8-.65 3.78-.65 5.57 0 .32.12.48.47.37.78Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6 12v1c0 3.31 2.69 6 6 6s6-2.69 6-6V8c0-3.31-2.69-6-6-6S6 4.69 6 8"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M3 11v2a9 9 0 0 0 18 0v-2M9.11 7.48a8 8 0 0 1 5.5 0M10.031 10.482c1.2-.33 2.47-.33 3.67 0"
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
      d="M12.002 21.93c-5.04 0-9.15-4.1-9.15-9.15V10.9c0-.39.32-.7.7-.7.38 0 .7.32.7.7v1.88c0 4.27 3.47 7.74 7.74 7.74s7.74-3.47 7.74-7.74V10.9c0-.39.32-.7.7-.7.38 0 .7.32.7.7v1.88c.02 5.05-4.09 9.15-9.13 9.15Z"
      fill={color}
    ></Path>
    <Path
      d="M11.998 2c-3.36 0-6.1 2.74-6.1 6.1v4.69c0 3.36 2.74 6.1 6.1 6.1 3.36 0 6.1-2.74 6.1-6.1V8.1c0-3.36-2.74-6.1-6.1-6.1Zm2.18 8.59a.61.61 0 0 1-.75.43 5.9 5.9 0 0 0-3.12 0c-.33.09-.66-.1-.75-.43a.61.61 0 0 1 .43-.75c1.23-.34 2.53-.34 3.76 0 .33.09.52.42.43.75Zm.85-2.77a.6.6 0 0 1-.78.36 6.897 6.897 0 0 0-4.74 0 .61.61 0 0 1-.79-.36c-.11-.31.05-.66.37-.78 1.8-.65 3.78-.65 5.57 0 .32.12.48.47.37.78Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M12 19c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6S6 4.69 6 8v5c0 3.31 2.69 6 6 6Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M3 11v2a9 9 0 0 0 18 0v-2M9.11 7.48a8 8 0 0 1 5.5 0M10.03 10.48c1.2-.33 2.47-.33 3.67 0"
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
      d="M12 19.75c-3.72 0-6.75-3.03-6.75-6.75V8c0-3.72 3.03-6.75 6.75-6.75S18.75 4.28 18.75 8v5c0 3.72-3.03 6.75-6.75 6.75Zm0-17C9.11 2.75 6.75 5.1 6.75 8v5c0 2.9 2.36 5.25 5.25 5.25s5.25-2.35 5.25-5.25V8c0-2.9-2.36-5.25-5.25-5.25Z"
      fill={color}
    ></Path>
    <Path
      d="M12 22.75c-5.38 0-9.75-4.37-9.75-9.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 4.55 3.7 8.25 8.25 8.25s8.25-3.7 8.25-8.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 5.38-4.37 9.75-9.75 9.75ZM14.612 8.229c-.08 0-.17-.01-.26-.04a7.373 7.373 0 0 0-4.99 0 .742.742 0 0 1-.95-.45.75.75 0 0 1 .45-.96c1.94-.7 4.07-.7 6.01 0 .39.14.59.57.45.96-.11.31-.4.49-.71.49Z"
      fill={color}
    ></Path>
    <Path
      d="M13.702 11.23c-.06 0-.13-.01-.2-.03-1.07-.29-2.2-.29-3.27 0a.75.75 0 1 1-.39-1.45c1.33-.36 2.73-.36 4.06 0a.754.754 0 0 1-.2 1.48Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M12 19c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6S6 4.69 6 8v5c0 3.31 2.69 6 6 6Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M3 11v2a9 9 0 0 0 18 0v-2M9.11 7.48a8 8 0 0 1 5.5 0M10.031 10.482c1.2-.33 2.47-.33 3.67 0"
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

const Microphone = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Microphone.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Microphone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Microphone.displayName = 'Microphone';

export default Microphone;
