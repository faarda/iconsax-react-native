import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M12.89 5.879H5.11A3.12 3.12 0 0 0 2 8.989v11.36c0 1.45 1.04 2.07 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.51 0l3.93 2.19c1.28.7 2.32.09 2.32-1.36V8.989c0-1.71-1.4-3.11-3.11-3.11Z"
      fill={color}
    ></Path>
    <Path
      d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36l-1.93-1.08a.509.509 0 0 1-.26-.44V8.99c0-2.54-2.07-4.61-4.61-4.61H8.82c-.37 0-.63-.39-.46-.71C8.88 2.68 9.92 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 20.349c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.989c0-1.71-1.4-3.11-3.11-3.11H5.11A3.12 3.12 0 0 0 2 8.989v6.52"
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
      opacity=".4"
      d="M12.89 5.879H5.11A3.12 3.12 0 0 0 2 8.989v11.36c0 1.45 1.04 2.07 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.51 0l3.93 2.19c1.27.71 2.31.09 2.31-1.36V8.989a3.105 3.105 0 0 0-3.1-3.11Z"
      fill={color}
    ></Path>
    <Path
      d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M12.89 5.88H5.11A3.12 3.12 0 0 0 2 8.99v11.36c0 1.45 1.04 2.07 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.51 0l3.93 2.19c1.27.71 2.31.09 2.31-1.36V8.99a3.105 3.105 0 0 0-3.1-3.11Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19c-.42-.23-1.1-.23-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11Z"
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
      d="M3.3 22.751c-.36 0-.71-.09-1.01-.27-.67-.39-1.05-1.17-1.05-2.14V8.981c0-2.13 1.73-3.86 3.86-3.86h7.78c2.13 0 3.86 1.73 3.86 3.86v11.36c0 .97-.38 1.74-1.05 2.14-.67.39-1.53.35-2.38-.12l-3.93-2.19c-.19-.11-.59-.11-.78 0l-3.93 2.19c-.46.26-.93.39-1.37.39Zm1.81-16.12c-1.3 0-2.36 1.06-2.36 2.36v11.36c0 .41.12.73.31.84.19.11.53.06.89-.14l3.93-2.19c.64-.35 1.6-.35 2.24 0l3.93 2.19c.36.2.69.25.89.14.19-.11.31-.43.31-.84V8.991c0-1.3-1.06-2.36-2.36-2.36H5.11Z"
      fill={color}
    ></Path>
    <Path
      d="M14.69 22.75c-.44 0-.9-.13-1.37-.38l-3.93-2.19c-.19-.1-.6-.1-.79 0l-3.92 2.19c-.85.47-1.72.51-2.38.12-.67-.39-1.05-1.17-1.05-2.13V9c0-2.13 1.73-3.86 3.86-3.86h7.78c2.13 0 3.86 1.73 3.86 3.86v11.36c0 .96-.38 1.74-1.05 2.13-.3.17-.64.26-1.01.26ZM9 18.6c.4 0 .79.09 1.12.27l3.93 2.19c.36.2.7.25.89.13.19-.11.31-.43.31-.84V8.99c0-1.3-1.06-2.36-2.36-2.36H5.11c-1.3 0-2.36 1.06-2.36 2.36v11.36c0 .41.12.73.31.84.19.11.53.06.89-.14l3.93-2.19c.32-.17.72-.26 1.12-.26Z"
      fill={color}
    ></Path>
    <Path
      d="M20.69 18.872c-.44 0-.9-.13-1.37-.38l-3.69-2.06a.732.732 0 0 1-.38-.65v-6.78c0-1.3-1.06-2.36-2.36-2.36H8c-.41 0-.75-.34-.75-.75v-.77c0-2.13 1.73-3.86 3.86-3.86h7.78c2.13 0 3.86 1.73 3.86 3.86v11.36c0 .96-.38 1.74-1.05 2.13-.3.17-.64.26-1.01.26Zm-3.94-3.54 3.3 1.85c.36.2.69.25.89.13.2-.12.31-.43.31-.84V5.112c0-1.3-1.06-2.36-2.36-2.36h-7.78c-1.3 0-2.36 1.06-2.36 2.36v.02h4.14c2.13 0 3.86 1.73 3.86 3.86v6.34Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M12.89 5.879H5.11A3.12 3.12 0 0 0 2 8.989v11.36c0 1.45 1.04 2.07 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.51 0l3.93 2.19c1.27.71 2.31.09 2.31-1.36V8.989a3.105 3.105 0 0 0-3.1-3.11Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M16 8.989v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19c-.42-.23-1.1-.23-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.989c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
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

const Save2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Save2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Save2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Save2.displayName = 'Save2';

export default Save2;
