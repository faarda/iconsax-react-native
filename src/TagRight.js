import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M17.88 6.122 3.92 20.082c-.43.43-1.15.39-1.5-.1-.5-.69-.6-1.65-.08-2.48l2.76-4.43c.37-.59.37-1.55 0-2.14l-2.76-4.43c-.93-1.48.14-3.4 1.88-3.4h11.45c.68 0 1.52.47 1.88 1.04l.47.74c.24.4.19.91-.14 1.24ZM21.63 13.112l-5.18 6.9c-.36.49-1.16.89-1.78.89H7.51c-.89 0-1.34-1.08-.71-1.71l11.52-11.51c.45-.45 1.22-.37 1.56.18l1.85 2.97c.4.64.36 1.67-.1 2.28Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M4.22 3.102c-1.75 0-2.81 1.92-1.89 3.41l2.77 4.43c.37.59.37 1.55 0 2.14l-2.77 4.43c-.93 1.48.14 3.41 1.89 3.41h10.45c.61 0 1.41-.4 1.78-.89l5.18-6.9c.46-.61.5-1.64.1-2.28l-4.18-6.68c-.36-.58-1.21-1.05-1.89-1.05h-7"
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
      d="M17.88 6.12 3.93 20.07c-.43.43-1.15.39-1.5-.1-.5-.69-.6-1.65-.08-2.48l2.76-4.43c.37-.59.37-1.55 0-2.14L2.35 6.49c-.93-1.48.14-3.4 1.88-3.4h11.45c.68 0 1.52.47 1.88 1.04l.47.74c.23.41.18.92-.15 1.25Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="m21.63 13.112-5.18 6.9c-.36.49-1.16.89-1.78.89H7.51c-.89 0-1.34-1.08-.71-1.71l11.51-11.51c.45-.45 1.22-.37 1.56.18l1.85 2.97c.41.64.37 1.67-.09 2.28Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M4.22 3.1h11.44c.68 0 1.53.47 1.89 1.05l4.18 6.68c.4.65.36 1.67-.1 2.28l-5.18 6.9c-.37.49-1.17.89-1.78.89H4.22c-1.75 0-2.81-1.92-1.89-3.41l2.77-4.43c.37-.59.37-1.55 0-2.14L2.33 6.49c-.92-1.47.15-3.39 1.89-3.39Z"
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
      d="M14.67 21.652H4.22c-1.1 0-2.07-.57-2.6-1.53-.53-.96-.5-2.09.08-3.02l2.77-4.43c.22-.35.22-1 0-1.34L1.7 6.902c-.58-.93-.61-2.06-.08-3.02s1.51-1.53 2.6-1.53h11.44c.94 0 2.03.6 2.52 1.4l4.18 6.68c.56.9.51 2.28-.13 3.13l-5.18 6.9c-.51.68-1.53 1.19-2.38 1.19ZM4.22 3.852c-.54 0-1.03.28-1.29.76s-.25 1.04.04 1.5l2.77 4.43c.52.84.52 2.1 0 2.94l-2.77 4.43c-.29.46-.3 1.02-.04 1.5s.75.76 1.29.76h10.45c.38 0 .95-.29 1.18-.59l5.18-6.9c.27-.36.3-1.05.06-1.43l-4.18-6.68c-.22-.36-.83-.69-1.25-.69H4.22v-.03Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M4.22 3.102h11.44c.68 0 1.53.47 1.89 1.05l4.18 6.68c.4.65.36 1.67-.1 2.28l-5.18 6.9c-.37.49-1.17.89-1.78.89H4.22c-1.75 0-2.81-1.92-1.89-3.41l2.77-4.43c.37-.59.37-1.55 0-2.14l-2.77-4.43c-.92-1.47.15-3.39 1.89-3.39Z"
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

const TagRight = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
TagRight.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
TagRight.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
TagRight.displayName = 'TagRight';

export default TagRight;
