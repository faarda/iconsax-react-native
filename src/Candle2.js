import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M22.75 17.5c0 .41-.34.75-.75.75h-7v.25c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3v-.25c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h7c.41 0 .75.34.75.75ZM22.75 6.5c0 .41-.34.75-.75.75h-3v.25c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7V5.5c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h3c.41 0 .75.34.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M22 17.5h-7M5 17.5H2M22 6.5h-3M9 6.5H2M7 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2ZM17 3.5c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2h2.03"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      d="M22.75 17.5c0 .41-.34.75-.75.75h-7v.25c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3v-.25c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h7c.41 0 .75.34.75.75Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M22.75 6.5c0 .41-.34.75-.75.75h-3v.25c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7V5.5c0-1.5.9-2 2-2h6c1.1 0 2 .5 2 2v.25h3c.41 0 .75.34.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M22 17.5h-7M5 17.5H2M22 6.5h-3M9 6.5H2M7 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2ZM11 3.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2Z"
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
      d="M22 18.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 18.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM22 7.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM9 7.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M13 21.25H7c-1.72 0-2.75-1.03-2.75-2.75v-2c0-1.72 1.03-2.75 2.75-2.75h6c1.72 0 2.75 1.03 2.75 2.75v2c0 1.72-1.03 2.75-2.75 2.75Zm-6-6c-.89 0-1.25.36-1.25 1.25v2c0 .89.36 1.25 1.25 1.25h6c.89 0 1.25-.36 1.25-1.25v-2c0-.89-.36-1.25-1.25-1.25H7ZM17 10.25h-6c-1.72 0-2.75-1.03-2.75-2.75v-2c0-1.72 1.03-2.75 2.75-2.75h6c1.72 0 2.75 1.03 2.75 2.75v2c0 1.72-1.03 2.75-2.75 2.75Zm-6-6c-.89 0-1.25.36-1.25 1.25v2c0 .89.36 1.25 1.25 1.25h6c.89 0 1.25-.36 1.25-1.25v-2c0-.89-.36-1.25-1.25-1.25h-6Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M22 17.5h-7M5 17.5H2M22 6.5h-3M9 6.5H2"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2ZM11 3.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
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

const Candle2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Candle2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Candle2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Candle2.displayName = 'Candle2';

export default Candle2;
