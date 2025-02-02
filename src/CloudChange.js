import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84 1.98-1.73.92-5.2-1.68-5.53-.93-5.64-9.08-3.5-7.15 1.87M9 22.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 2.96 2.06 5.44 4.83 6.09l-.27-.45a.751.751 0 1 1 1.29-.77l1.05 1.75c.14.23.14.52.01.75-.14.23-.39.38-.66.38ZM22 9.75c-.41 0-.75-.34-.75-.75 0-2.96-2.06-5.44-4.83-6.09l.27.45a.751.751 0 1 1-1.29.77l-1.05-1.75a.745.745 0 0 1-.01-.75c.14-.23.39-.38.66-.38 4.27 0 7.75 3.48 7.75 7.75 0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M15.288 9.98c-.93-5.64-9.08-3.5-7.15 1.87M8.11 11.852c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84.77-.67 1.08-1.6 1.02-2.5"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 15c0 3.87 3.13 7 7 7l-1.05-1.75M22 9c0-3.87-3.13-7-7-7l1.05 1.75"
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
      d="M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84 1.98-1.73.92-5.2-1.68-5.53-.93-5.64-9.08-3.5-7.15 1.87"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M9 22.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 2.96 2.06 5.44 4.83 6.09l-.27-.45a.751.751 0 1 1 1.29-.77l1.05 1.75c.14.23.14.52.01.75-.14.23-.39.38-.66.38ZM22 9.75c-.41 0-.75-.34-.75-.75 0-2.96-2.06-5.44-4.83-6.09l.27.45a.751.751 0 1 1-1.29.77l-1.05-1.75a.745.745 0 0 1-.01-.75c.13-.24.38-.38.65-.38 4.27 0 7.75 3.48 7.75 7.75a.74.74 0 0 1-.74.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84 1.98-1.73.92-5.2-1.68-5.53-.93-5.64-9.08-3.5-7.15 1.87"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 15c0 3.87 3.13 7 7 7l-1.05-1.75M22 9c0-3.87-3.13-7-7-7l1.05 1.75"
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
      d="M14.81 17.102h-6.7c-1.98-.14-2.86-1.65-2.86-3 0-1.13.62-2.37 1.95-2.83-.3-1.5.07-2.9 1.06-3.94 1.19-1.25 3.1-1.74 4.74-1.24 1.46.45 2.51 1.62 2.92 3.25 1.25.35 2.24 1.33 2.65 2.66.46 1.52.04 3.08-1.1 4.07-.72.66-1.67 1.03-2.66 1.03Zm-6.67-4.5c-1.02.09-1.39.86-1.39 1.5 0 .65.37 1.43 1.41 1.5h6.62c.65 0 1.22-.22 1.68-.65.84-.73.89-1.78.67-2.52-.22-.74-.85-1.58-1.94-1.71a.753.753 0 0 1-.65-.62c-.22-1.33-.93-2.24-1.99-2.57-1.09-.34-2.42.01-3.21.84-.78.81-.95 1.96-.5 3.23a.75.75 0 0 1-.45.96c-.08.03-.21.05-.25.04ZM9 22.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 2.96 2.06 5.44 4.83 6.09l-.27-.45a.751.751 0 1 1 1.29-.77l1.05 1.75c.14.23.14.52.01.75-.14.23-.39.38-.66.38ZM22 9.75c-.41 0-.75-.34-.75-.75 0-2.96-2.06-5.44-4.83-6.09l.27.45a.751.751 0 1 1-1.29.77l-1.05-1.75a.745.745 0 0 1-.01-.75c.13-.24.38-.38.65-.38 4.27 0 7.75 3.48 7.75 7.75a.74.74 0 0 1-.74.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84 1.98-1.73.92-5.2-1.68-5.53-.93-5.64-9.08-3.5-7.15 1.87"
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M2 15c0 3.87 3.13 7 7 7l-1.05-1.75M22 9c0-3.87-3.13-7-7-7l1.05 1.75"></Path>
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

const CloudChange = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
CloudChange.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
CloudChange.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
CloudChange.displayName = 'CloudChange';

export default CloudChange;
