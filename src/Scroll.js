import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-6.06 12.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.49-2.49c-.59-.59-.59-1.54 0-2.13l2.49-2.49c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.64 12l2.49 2.5Zm7.29-1.44-2.49 2.49c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L16.36 12l-2.49-2.5a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.49 2.49c.59.59.59 1.55 0 2.13Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m9.6 8.969-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49M14.4 8.969l2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49"
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
      d="M9.6 15.782c-.19 0-.38-.07-.53-.22l-2.49-2.49c-.59-.59-.59-1.54 0-2.13l2.49-2.49c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.49 2.49 2.49 2.5c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22ZM14.4 15.78c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.49-2.5-2.49-2.5a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.49 2.49c.59.59.59 1.54 0 2.13l-2.49 2.49c-.14.15-.34.23-.53.23Z"
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
      d="m9.6 8.97-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49M14.4 8.97l2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49"
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
      d="M9.6 15.782c-.19 0-.38-.07-.53-.22l-2.49-2.49c-.59-.59-.59-1.54 0-2.13l2.49-2.49c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.49 2.49 2.49 2.5c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22ZM14.4 15.78c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.49-2.5-2.49-2.5a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.49 2.49c.59.59.59 1.54 0 2.13l-2.49 2.49c-.14.15-.34.23-.53.23Z"
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
      opacity=".4"
      d="m9.6 8.969-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49M14.4 8.969l2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49"
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

const Scroll = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Scroll.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Scroll.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Scroll.displayName = 'Scroll';

export default Scroll;
