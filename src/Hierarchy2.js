import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M18.75 22a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={color}
    ></Path>
    <Path
      d="M4.83 8.02a6.929 6.929 0 0 0 6.54 4.65h.03l3.53-.01c1.52-.02 2.88 1.01 3.29 2.49V17c0 .42.34.76.77.76.42 0 .76-.34.76-.76V5.76a.76.76 0 0 0-.76-.76c-.42 0-.77.34-.77.76v6.62a4.941 4.941 0 0 0-3.28-1.26h-.02l-3.53.01h-.02c-2.29 0-4.34-1.45-5.09-3.62A.786.786 0 0 0 5.55 7c-.08 0-.17.02-.25.04a.77.77 0 0 0-.47.98Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M5 15V8M5.25 22a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.13 15a4.058 4.058 0 0 1 3.94-3.04l3.43.01c.85 0 1.67-.17 2.4-.49"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      d="M18.75 22a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M4.83 8.02a6.929 6.929 0 0 0 6.54 4.65h.03l3.53-.01c1.52-.02 2.88 1.01 3.29 2.49V17a.76.76 0 1 0 1.52 0V5.78a.76.76 0 1 0-1.52 0v6.62a4.941 4.941 0 0 0-3.28-1.26h-.02l-3.53.01h-.02c-2.29 0-4.34-1.45-5.09-3.62a.76.76 0 0 0-.72-.51c-.08 0-.17.01-.25.04-.41.12-.62.56-.48.96Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M5 15V8M5.25 22a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.13 15a4.058 4.058 0 0 1 3.94-3.04l3.43.01c2.62.01 4.85-1.67 5.67-4.01"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M5 15.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M5.25 22.75c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-6.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5ZM5 8.75C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25 7.25 6.24 7.25 5 6.24 2.75 5 2.75ZM19 8.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75Z"
      fill={color}
    ></Path>
    <Path
      d="M5.13 15.748c-.06 0-.12-.01-.19-.02a.75.75 0 0 1-.54-.91c.55-2.12 2.46-3.6 4.65-3.6h.02l3.43.01h.02c2.22 0 4.21-1.41 4.94-3.51.14-.39.56-.6.95-.46.39.14.6.56.46.95-.94 2.71-3.53 4.49-6.38 4.52l-3.43-.01h-.01c-1.51 0-2.82 1.02-3.2 2.48-.08.33-.39.55-.72.55Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M5.25 22a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M5 15V8M5.129 15a4.058 4.058 0 0 1 3.94-3.04l3.43.01c2.62.01 4.85-1.67 5.67-4.01"></Path>
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

const Hierarchy2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Hierarchy2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Hierarchy2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Hierarchy2.displayName = 'Hierarchy2';

export default Hierarchy2;
