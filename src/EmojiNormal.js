import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM6.47 7.72c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-.65.65-1.5.97-2.35.97-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06ZM12 18.78c-2.69 0-4.88-2.19-4.88-4.88 0-.7.57-1.28 1.27-1.28h7.2c.7 0 1.27.57 1.27 1.28.02 2.69-2.17 4.88-4.86 4.88Zm5.53-10c-.65.65-1.5.97-2.35.97-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7 8.25c1 1 2.63 1 3.64 0M13.36 8.25c1 1 2.63 1 3.64 0M8.4 13h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9Z"
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M8.82 9.751c-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-.65.64-1.5.97-2.35.97ZM15.18 9.751c-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-.65.64-1.5.97-2.35.97ZM15.6 12.621H8.4c-.7 0-1.27.57-1.27 1.28 0 2.69 2.19 4.88 4.88 4.88s4.88-2.19 4.88-4.88c-.01-.7-.59-1.28-1.29-1.28Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7 8.25c1 1 2.63 1 3.64 0M13.36 8.25c1 1 2.63 1 3.64 0M8.4 13h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9Z"
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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
    <Path
      d="M8.82 9.751c-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-.65.64-1.5.97-2.35.97ZM15.18 9.751c-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-.65.64-1.5.97-2.35.97ZM12 19.15c-2.9 0-5.25-2.36-5.25-5.25 0-.91.74-1.65 1.65-1.65h7.2c.91 0 1.65.74 1.65 1.65 0 2.89-2.35 5.25-5.25 5.25Zm-3.6-5.4c-.08 0-.15.07-.15.15 0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75 0-.08-.07-.15-.15-.15H8.4Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".34"
      d="M7 8.25c1 1 2.63 1 3.64 0M13.36 8.25c1 1 2.63 1 3.64 0M8.4 13h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9Z"
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

const EmojiNormal = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
EmojiNormal.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
EmojiNormal.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
EmojiNormal.displayName = 'EmojiNormal';

export default EmojiNormal;
