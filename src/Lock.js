import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path d="M12.001 17.35a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26Z" fill={color}></Path>
    <Path
      d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2S5.72 5.58 5.72 8.28v1.25C2.92 9.88 2 11.3 2 14.79v1.86C2 20.75 3.25 22 7.35 22h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-3.49-.92-4.91-3.72-5.26ZM12 18.74c-1.67 0-3.02-1.36-3.02-3.02 0-1.67 1.36-3.02 3.02-3.02a3.03 3.03 0 0 1 3.02 3.02c0 1.67-1.35 3.02-3.02 3.02Zm-4.65-9.3h-.23V8.28c0-2.93.83-4.88 4.88-4.88s4.88 1.95 4.88 4.88v1.17H7.35v-.01Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2M22 17v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15.995 16h.008M11.995 16h.009M7.995 16h.008"
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
      d="M18.75 8v2.1c-.44-.06-.94-.09-1.5-.1V8c0-3.15-.89-5.25-5.25-5.25S6.75 4.85 6.75 8v2c-.56.01-1.06.04-1.5.1V8c0-2.9.7-6.75 6.75-6.75S18.75 5.1 18.75 8Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M22 15v2c0 4-1 5-5 5H7c-4 0-5-1-5-5v-2c0-3.34.7-4.59 3.25-4.9.44-.06.94-.09 1.5-.1h10.5c.56.01 1.06.04 1.5.1C21.3 10.41 22 11.66 22 15Z"
      fill={color}
    ></Path>
    <Path
      d="M8 16.999c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.09.1.16.21.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM12 17c-.27 0-.52-.11-.71-.29-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 11 16c0-.27.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.44.29.71 0 .13-.03.26-.08.38s-.12.23-.21.33c-.19.18-.45.29-.71.29ZM16 17c-.26 0-.52-.11-.71-.29-.18-.19-.29-.44-.29-.71 0-.27.11-.52.29-.71.38-.37 1.05-.37 1.42 0 .04.05.08.1.12.16.04.05.07.11.09.17.03.06.05.12.06.18.01.07.02.14.02.2 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15.996 16h.01M11.995 16h.01M7.995 16h.008"
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
      d="M18 10.75c-.41 0-.75-.34-.75-.75V8c0-3.15-.89-5.25-5.25-5.25S6.75 4.85 6.75 8v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-2.9.7-6.75 6.75-6.75S18.75 5.1 18.75 8v2c0 .41-.34.75-.75.75ZM12 19.25c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75Z"
      fill={color}
    ></Path>
    <Path
      d="M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75v-2c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v2c0 4.41-1.34 5.75-5.75 5.75Zm-10-12c-3.58 0-4.25.68-4.25 4.25v2c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25v-2c0-3.57-.67-4.25-4.25-4.25H7Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M15.995 16h.008M11.995 16h.009M7.995 16h.008"
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

const Lock = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Lock.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Lock.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Lock.displayName = 'Lock';

export default Lock;
