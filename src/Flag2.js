import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="m15.2 7.16-8-3.46v-.95c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-3.96l8.22-4.06h.01c1.66-.86 2.55-1.97 2.5-3.14-.05-1.17-1.02-2.21-2.73-2.93Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6.45 2v20M15.05 7.5c3.3 1.4 3.3 3.8.2 5.4L6.95 17M6.95 4l4.59 1.98"
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
      d="M6.45 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="m15.2 7.16-8.1-3.5a.358.358 0 0 0-.36.03.37.37 0 0 0-.16.31v13c0 .13.07.25.18.32.06.04.13.06.2.06.06 0 .11-.01.17-.04l8.3-4.1h.01c1.66-.86 2.55-1.97 2.5-3.14-.06-1.18-1.03-2.22-2.74-2.94Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M6.45 2v20M6.95 4l8.1 3.5c3.3 1.4 3.3 3.8.2 5.4L6.95 17"
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
      d="M6.45 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M6.95 17.75c-.28 0-.54-.15-.67-.42a.748.748 0 0 1 .34-1l8.3-4.1c1.22-.63 1.91-1.39 1.88-2.1-.03-.69-.77-1.4-2.04-1.94l-8.1-3.5a.756.756 0 0 1-.4-.99c.16-.38.61-.56.99-.39l8.1 3.5c2.5 1.06 2.92 2.5 2.95 3.26.05 1.33-.91 2.57-2.7 3.49l-8.31 4.11c-.11.06-.23.08-.34.08Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M6.45 2v20"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".34"
      d="m6.95 4 8.1 3.5c3.3 1.4 3.3 3.8.2 5.4L6.95 17"
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

const Flag2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Flag2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Flag2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Flag2.displayName = 'Flag2';

export default Flag2;
