import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path fill={color} d="M9.5 8.75H8.25v2.5H9.5a1.25 1.25 0 000-2.5z"></Path>
    <Path
      fill={color}
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM9.5 12.75H8.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h2c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75zm5.75 0c1.1 0 2 .9 2 2s-.9 2-2 2H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5c-1.1 0-2-.9-2-2s.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-.28 0-.5.22-.5.5s.22.5.5.5z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M7.5 16V8h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2M16.5 11h-1.25a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 1 0 2.5H14"
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M7.5 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h2c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75H8.25V16c0 .41-.34.75-.75.75Zm.75-5.5H9.5a1.25 1.25 0 0 0 0-2.5H8.25v2.5ZM15.25 16.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5c-1.1 0-2-.9-2-2s.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-.28 0-.5.22-.5.5s.22.5.5.5c1.1 0 2 .9 2 2s-.9 2-2 2Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7.5 16V8h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2M16.5 11h-1.3c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2H14"
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
      d="M7.5 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h2c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75H8.25V16c0 .41-.34.75-.75.75Zm.75-5.5H9.5a1.25 1.25 0 0 0 0-2.5H8.25v2.5ZM15.25 16.75H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25c.28 0 .5-.22.5-.5s-.22-.5-.5-.5c-1.1 0-2-.9-2-2s.9-2 2-2h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-.28 0-.5.22-.5.5s.22.5.5.5c1.1 0 2 .9 2 2s-.9 2-2 2Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M7.5 16V8h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2M16.5 11h-1.25a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 1 0 2.5H14"
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

const Photoshop = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Photoshop.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Photoshop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Photoshop.displayName = 'Photoshop';

export default Photoshop;
