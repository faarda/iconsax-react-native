import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.63 12.24l-4.29 4.29a.75.75 0 01-1.06 0l-4.29-4.29a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.01 3.01V6c0-.41.34-.75.75-.75s.75.34.75.75v10.19l3.01-3.01c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.08.39-.22.53z"
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
      d="M18.07 14.43L12 20.5l-6.07-6.07M12 12v8.33M12 3.5v4.53"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19z"
      opacity=".4"
    ></Path>
    <Path
      fill={color}
      d="M11.47 18.53l-4.29-4.29a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.01 3.01V6c0-.41.34-.75.75-.75s.75.34.75.75v10.19l3.01-3.01c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.07.38-.22.53l-4.29 4.29a.75.75 0 01-1.06 0z"
    ></Path>
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
      d="M18.07 14.43L12 20.5l-6.07-6.07M12 3.5v16.83"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M12 21.25c-.19 0-.38-.07-.53-.22L5.4 14.96a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0L12 19.44l5.54-5.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z"
    ></Path>
    <Path
      fill={color}
      d="M12 21.08c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75s.75.34.75.75v16.83c0 .41-.34.75-.75.75z"
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
      d="M18.07 14.43L12 20.5l-6.07-6.07"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="{strokeWidth}"
      d="M12 3.5v16.83"
      opacity=".4"
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

const ArrowDown = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
ArrowDown.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
ArrowDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;
