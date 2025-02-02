import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M12 7.75H8.75v1.5h6.46c-.78-.91-1.92-1.5-3.21-1.5zM16.25 12c0-.44-.09-.85-.21-1.25H8.75v2.5h7.29c.12-.4.21-.81.21-1.25z"
    ></Path>
    <Path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.52 12.75h-1.47c-.98 1.79-2.87 3-5.05 3H8c-.41 0-.75-.34-.75-.75v-2.25h-.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.77v-2.5h-.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.77V7c0-.41.34-.75.75-.75h4c2.18 0 4.07 1.21 5.05 3h1.47c.41 0 .75.34.75.75s-.34.75-.75.75h-.91a5.7 5.7 0 010 2.5h.91c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></Path>
    <Path fill={color} d="M8.75 16.25H12c1.29 0 2.43-.59 3.21-1.5H8.75v1.5z"></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M8 7v10h4c2.76 0 5-2.24 5-5s-2.24-5-5-5H8ZM6.48 10h12.04M6.48 14h12.04"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
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
      d="M12 17.75H8c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75h4c3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75Zm-3.25-1.5H12A4.26 4.26 0 0 0 16.25 12 4.26 4.26 0 0 0 12 7.75H8.75v8.5Z"
      fill={color}
    ></Path>
    <Path
      d="M18.52 10.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.52 14.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
      d="M8 7v10h4c2.8 0 5-2.2 5-5s-2.2-5-5-5H8ZM6.5 10h12M6.5 14h12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      d="M12 17.75H8c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75h4c3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75Zm-3.25-1.5H12A4.26 4.26 0 0 0 16.25 12 4.26 4.26 0 0 0 12 7.75H8.75v8.5Z"
      fill={color}
    ></Path>
    <Path
      d="M18.52 10.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.52 14.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
    <G
      opacity=".4"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M8 7v10h4c2.76 0 5-2.24 5-5s-2.24-5-5-5H8ZM6.48 10h12.04M6.48 14h12.04"></Path>
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

const Dai = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Dai.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Dai.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Dai.displayName = 'Dai';

export default Dai;
