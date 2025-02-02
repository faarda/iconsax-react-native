import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M14 9.75h-1.25V8.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25H10c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM14 12.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75h1.25v1.25c0 .41.34.75.75.75s.75-.34.75-.75v-1.25H14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
    ></Path>
    <Path
      fill={color}
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM17 16.15c0 1.02-.83 1.85-1.85 1.85h-6.3C7.83 18 7 17.17 7 16.15v-8.3C7 6.83 7.83 6 8.85 6h6.3C16.17 6 17 6.83 17 7.85v8.3z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M15.15 18h-6.3C7.83 18 7 17.17 7 16.15v-8.3C7 6.83 7.83 6 8.85 6h6.3C16.17 6 17 6.83 17 7.85v8.3c0 1.02-.83 1.85-1.85 1.85ZM12 8.5v2M10 10.5h4M12 15.5v-2M10 13.5h4"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
      d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M15.15 6h-6.3C7.83 6 7 6.83 7 7.85v8.3C7 17.17 7.83 18 8.85 18h6.3c1.02 0 1.85-.83 1.85-1.85v-8.3C17 6.83 16.17 6 15.15 6ZM14 14.25h-1.25v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V8.5c0-.41.34-.75.75-.75s.75.34.75.75v1.25H14c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M15.1 18H8.9c-1 0-1.9-.8-1.9-1.9V7.9C7 6.8 7.8 6 8.9 6h6.3c1 0 1.9.8 1.9 1.9v8.3c-.1 1-.9 1.8-2 1.8ZM12 8.5v2M10 10.5h4M12 15.5v-2M10 13.5h4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
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
      d="M15.15 18.75h-6.3c-1.43 0-2.6-1.17-2.6-2.6v-8.3c0-1.43 1.17-2.6 2.6-2.6h6.3c1.43 0 2.6 1.17 2.6 2.6v8.3c0 1.43-1.17 2.6-2.6 2.6Zm-6.3-12c-.61 0-1.1.49-1.1 1.1v8.3c0 .61.49 1.1 1.1 1.1h6.3c.61 0 1.1-.49 1.1-1.1v-8.3c0-.61-.49-1.1-1.1-1.1h-6.3Z"
      fill={color}
    ></Path>
    <Path
      d="M12 11.25c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M14 11.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 16.25c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M14 14.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M15.15 18h-6.3C7.83 18 7 17.17 7 16.15v-8.3C7 6.83 7.83 6 8.85 6h6.3C16.17 6 17 6.83 17 7.85v8.3c0 1.02-.83 1.85-1.85 1.85ZM12 8.5v2M10 10.5h4M12 15.5v-2M10 13.5h4"></Path>
    </G>
    <Path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
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

const Theta = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Theta.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Theta.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Theta.displayName = 'Theta';

export default Theta;
