import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M21.71 9.9l-2.4-4.82c-.47-.95-1.72-1.72-2.78-1.72H7.47c-1.06 0-2.31.77-2.78 1.72L2.29 9.9c-.58 1.16-.26 2.81.69 3.68l6.93 6.29c1.15 1.04 3.02 1.04 4.17 0l6.93-6.29c.96-.87 1.28-2.53.7-3.68zM16 9.25h-3.25v5.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="m18.1 16.22-4.02 3.65c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.47-.95 1.72-1.72 2.78-1.72h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68M12 14.5v-6M8 8.5h8"
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
      opacity=".4"
      d="M7.47 3.352h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68l-6.93 6.29c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.46-.95 1.71-1.72 2.77-1.72Z"
      fill={color}
    ></Path>
    <Path
      d="M16 7.75H8c-.41 0-.75.34-.75.75s.34.75.75.75h3.25v5.25c0 .41.34.75.75.75s.75-.34.75-.75V9.25H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M7.47 3.35h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68l-6.93 6.29c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.46-.95 1.71-1.72 2.77-1.72ZM12 14.5v-6M8 8.5h8"
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
      d="M12 21.4c-.94 0-1.88-.32-2.59-.97l-6.93-6.29c-1.21-1.1-1.59-3.11-.86-4.57l2.4-4.82c.6-1.2 2.11-2.14 3.45-2.14h9.06c1.34 0 2.85.94 3.45 2.14l2.4 4.82c.73 1.46.35 3.47-.86 4.57l-6.93 6.29c-.71.64-1.65.97-2.59.97ZM7.47 4.1c-.78 0-1.76.61-2.11 1.31l-2.4 4.82c-.42.85-.18 2.15.53 2.79l6.93 6.29c.86.78 2.31.78 3.16 0l6.93-6.29c.7-.64.95-1.94.53-2.79l-2.4-4.82c-.35-.69-1.33-1.3-2.11-1.3H7.47V4.1Z"
      fill={color}
    ></Path>
    <Path
      d="M12 15.25c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M16 9.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M7.47 3.352h9.06c1.06 0 2.31.77 2.78 1.72l2.4 4.82c.58 1.16.26 2.81-.69 3.68l-6.93 6.29c-1.15 1.04-3.02 1.04-4.17 0l-6.93-6.29c-.96-.87-1.27-2.52-.69-3.68l2.4-4.82c.46-.95 1.71-1.72 2.77-1.72Z"
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
      <Path d="M12 14.5v-6M8 8.5h8"></Path>
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

const Tether = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Tether.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Tether.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Tether.displayName = 'Tether';

export default Tether;
