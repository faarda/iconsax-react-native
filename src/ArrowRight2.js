import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M15.2 10.492l-1.97-1.97-3.21-3.21c-.68-.67-1.84-.19-1.84.77v11.84c0 .96 1.16 1.44 1.84.76l5.18-5.18c.83-.82.83-2.18 0-3.01z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="{strokeWidth}"
      d="M12.9 7.94l2.62 2.62c.77.77.77 2.03 0 2.8L9 19.87M9 4.04l1.04 1.04"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M13.23 8.52l-5.05 3.79v5.61c0 .96 1.16 1.44 1.84.76l5.18-5.18c.83-.83.83-2.18 0-3.01l-1.97-1.97z"
      opacity=".4"
    ></Path>
    <Path fill={color} d="M8.18 6.08v6.23l5.05-3.79-3.21-3.21c-.68-.67-1.84-.19-1.84.77z"></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M8.91 20.67c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74L8.38 4.61a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22z"
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="{strokeWidth}"
      d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
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

const ArrowRight2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
ArrowRight2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
ArrowRight2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
ArrowRight2.displayName = 'ArrowRight2';

export default ArrowRight2;
