import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5Zm-13.25 5c0-1.79 1.46-3.25 3.25-3.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.5ZM8.5 18.75H7c-1.79 0-3.25-1.46-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.79 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Zm8.25.5c0 1.79-1.46 3.25-3.25 3.25h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5Zm0-5.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.79 0 3.25 1.46 3.25 3.25V10Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.97"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3M8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14"
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
      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      fill={color}
    ></Path>
    <Path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 10.75c-.41 0-.75-.34-.75-.75V8.5c0-1.79 1.46-3.25 3.25-3.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75ZM19.5 10.75c-.41 0-.75-.34-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.79 0 3.25 1.46 3.25 3.25V10c0 .41-.34.75-.75.75ZM8.5 18.75H7c-1.79 0-3.25-1.46-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.79 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM17 18.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 1.79-1.46 3.25-3.25 3.25Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14"
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
      d="M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75Zm-10-17c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7Z"
      fill={color}
    ></Path>
    <Path
      d="M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75ZM4.5 10.75c-.41 0-.75-.34-.75-.75V8.5c0-1.79 1.46-3.25 3.25-3.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.96 0-1.75.79-1.75 1.75V10c0 .41-.34.75-.75.75ZM19.5 10.75c-.41 0-.75-.34-.75-.75V8.5c0-.96-.79-1.75-1.75-1.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.79 0 3.25 1.46 3.25 3.25V10c0 .41-.34.75-.75.75ZM8.5 18.75H7c-1.79 0-3.25-1.46-3.25-3.25V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .96.79 1.75 1.75 1.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM17 18.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c.96 0 1.75-.79 1.75-1.75V14c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 1.79-1.46 3.25-3.25 3.25Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10M15.5 6H17a2.5 2.5 0 0 1 2.5 2.5V10M8.5 18H7a2.5 2.5 0 0 1-2.5-2.5V14M15.5 18H17a2.5 2.5 0 0 0 2.5-2.5V14"
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

const Money4 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Money4.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Money4.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Money4.displayName = 'Money4';

export default Money4;
