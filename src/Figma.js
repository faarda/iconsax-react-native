import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12V2zM12 8.672H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33H12v-6.66z"
    ></Path>
    <Path
      fill={color}
      d="M12 15.328H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33 3.33-1.49 3.33-3.33v-3.33zM12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12V2zM15.33 8.672c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33-3.33-1.49-3.33-3.33 1.49-3.33 3.33-3.33z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12V2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M8.67 15.33H12V8.66H8.67c-1.84 0-3.33 1.49-3.33 3.33"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 15.328H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33 3.33-1.49 3.33-3.33v-3.33ZM12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12V2ZM15.33 8.672c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33-3.33-1.49-3.33-3.33 1.49-3.33 3.33-3.33Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
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
    <Path d="M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2V6Z" fill={color}></Path>
    <Path opacity=".4" d="M12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v-4Z" fill={color}></Path>
    <Path d="M12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-2Z" fill={color}></Path>
    <Path opacity=".4" d="M12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2V6Z" fill={color}></Path>
    <Path d="M14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z" fill={color}></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M12 2H8.7C6.8 2 5.3 3.5 5.3 5.3c0 1.8 1.5 3.3 3.3 3.3H12V2ZM12 8.7H8.7c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3H12V8.7ZM12 15.3H8.7c-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3v-3.3ZM12 2h3.3c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3H12V2ZM15.3 8.7c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M12.75 9.422H8.67c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08h4.08v8.16Zm-4.08-6.67c-1.42 0-2.58 1.16-2.58 2.58 0 1.42 1.16 2.58 2.58 2.58h2.58v-5.17H8.67v.01Z"
      fill={color}
    ></Path>
    <Path
      d="M12.75 16.082H8.67c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08h4.08v8.16Zm-4.08-6.66c-1.42 0-2.58 1.16-2.58 2.58 0 1.42 1.16 2.58 2.58 2.58h2.58v-5.17H8.67v.01Z"
      fill={color}
    ></Path>
    <Path
      d="M8.67 22.75c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08h4.08v4.08c0 2.25-1.83 4.08-4.08 4.08Zm0-6.67c-1.42 0-2.58 1.16-2.58 2.58 0 1.42 1.16 2.58 2.58 2.58 1.42 0 2.58-1.16 2.58-2.58v-2.58H8.67ZM15.33 9.42h-4.08V1.25h4.08c2.25 0 4.08 1.83 4.08 4.08.01 2.25-1.83 4.09-4.08 4.09Zm-2.58-1.5h2.58c1.42 0 2.58-1.16 2.58-2.58 0-1.42-1.16-2.58-2.58-2.58h-2.58v5.16Z"
      fill={color}
    ></Path>
    <Path
      d="M15.33 16.082c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08 4.08 1.83 4.08 4.08-1.83 4.08-4.08 4.08Zm0-6.66c-1.42 0-2.58 1.16-2.58 2.58 0 1.42 1.16 2.58 2.58 2.58a2.58 2.58 0 1 0 0-5.16Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <G opacity=".4" stroke={color} strokeWidth="{strokeWidth}" strokeMiterlimit="10">
      <Path d="M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2V6ZM12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v-4ZM12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-2ZM12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2V6ZM14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"></Path>
    </G>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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

const Figma = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Figma.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Figma.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Figma.displayName = 'Figma';

export default Figma;
