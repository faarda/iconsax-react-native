import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38 0 2.97 2.41 5.38 5.38 5.38 2.97 0 5.38-2.41 5.38-5.38 0-2.97-2.41-5.38-5.38-5.38ZM6.36 13.031a3.329 3.329 0 1 0-.002 6.662 3.329 3.329 0 0 0 .001-6.662ZM16.62 16.621c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M15.59 12.26c2.83 0 5.13-2.3 5.13-5.13S18.42 2 15.59 2s-5.13 2.3-5.13 5.13c0 1.3.48 2.48 1.28 3.38M3.28 16.361c0 1.7 1.38 3.08 3.08 3.08 1.7 0 3.08-1.38 3.08-3.08 0-1.7-1.38-3.08-3.08-3.08"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M16.62 21.999a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38 0 2.97 2.41 5.38 5.38 5.38 2.97 0 5.38-2.41 5.38-5.38 0-2.97-2.41-5.38-5.38-5.38Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M6.36 13.031a3.329 3.329 0 1 0 3.33 3.33c0-1.84-1.5-3.33-3.33-3.33ZM16.62 16.621c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M15.59 12.26a5.13 5.13 0 1 0 0-10.26 5.13 5.13 0 0 0 0 10.26ZM6.36 19.44a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16ZM16.62 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M15.59 13.01a5.89 5.89 0 0 1-5.88-5.88 5.89 5.89 0 0 1 5.88-5.88 5.89 5.89 0 0 1 5.88 5.88 5.89 5.89 0 0 1-5.88 5.88Zm0-10.26c-2.41 0-4.38 1.96-4.38 4.38s1.96 4.38 4.38 4.38 4.38-1.96 4.38-4.38S18 2.75 15.59 2.75ZM6.361 20.191c-2.11 0-3.83-1.72-3.83-3.83 0-2.11 1.72-3.83 3.83-3.83 2.11 0 3.83 1.72 3.83 3.83 0 2.11-1.72 3.83-3.83 3.83Zm0-6.16c-1.28 0-2.33 1.04-2.33 2.33 0 1.28 1.04 2.33 2.33 2.33 1.28 0 2.33-1.04 2.33-2.33 0-1.28-1.05-2.33-2.33-2.33ZM16.62 22.749c-1.83 0-3.31-1.49-3.31-3.31 0-1.83 1.49-3.31 3.31-3.31a3.32 3.32 0 0 1 3.31 3.31 3.32 3.32 0 0 1-3.31 3.31Zm0-5.13a1.81 1.81 0 1 0 0 3.619 1.81 1.81 0 0 0 0-3.62Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M15.59 12.26A5.13 5.13 0 1 0 15.592 2a5.13 5.13 0 0 0 0 10.26Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
    ></Path>
    <Path
      opacity=".4"
      d="M6.36 19.441a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16ZM16.62 21.999a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
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

const Bubble = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Bubble.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Bubble.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Bubble.displayName = 'Bubble';

export default Bubble;
