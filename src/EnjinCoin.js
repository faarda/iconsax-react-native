import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.75 9.25c.41 0 .75.34.75.75s-.34.75-.75.75H8.5V13c0 1.24 1.01 2.25 2.25 2.25h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5C8.68 16.75 7 15.07 7 13v-2c0-2.07 1.68-3.75 3.75-3.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5C9.51 8.75 8.5 9.76 8.5 11v.25h7.25z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M15.75 8h-5c-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3h5M15.75 12h-8"
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
      d="M15.75 12.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8.5V11c0-1.24 1.01-2.25 2.25-2.25h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5C8.68 7.25 7 8.93 7 11v2c0 2.07 1.68 3.75 3.75 3.75h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5c-1.24 0-2.25-1.01-2.25-2.25v-.25h7.25Z"
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
      d="M15.8 8h-5c-1.6 0-3 1.4-3 3v2c0 1.6 1.4 3 3 3h5M15.8 12h-8"
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
      d="M15.75 16.75h-5C8.68 16.75 7 15.07 7 13v-2c0-2.07 1.68-3.75 3.75-3.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5C9.51 8.75 8.5 9.76 8.5 11v2c0 1.24 1.01 2.25 2.25 2.25h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M15.75 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
      <Path d="M15.75 8h-5c-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3h5M15.75 12h-8"></Path>
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

const EnjinCoin = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
EnjinCoin.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
EnjinCoin.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
EnjinCoin.displayName = 'EnjinCoin';

export default EnjinCoin;
