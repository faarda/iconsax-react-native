import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-5.2 15c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41a.717.717 0 01-.58 0 .776.776 0 01-.24-.16l-2.95-2.95a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.67 1.67V7c0-.41.34-.75.75-.75s.76.34.76.75v10zm6.25-6.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.67-1.67V17c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.1.02-.19.06-.29.08-.18.22-.33.41-.41.18-.08.39-.08.57 0 .09.04.17.09.24.16l2.95 2.95c.29.3.29.78 0 1.07z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="{strokeWidth}"
      d="M14.99 3.5l5.02 5.01M14.99 13.01V3.5M14.99 20.5V17M9.01 20.5l-5.02-5.01M9.01 10.99v9.51M9.01 3.5V7"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z"
      opacity=".4"
    ></Path>
    <Path
      fill={color}
      d="M10.24 6.25c-.42 0-.75.34-.75.75v8.19l-1.67-1.67a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.95 2.95a.776.776 0 00.53.22c.1 0 .19-.02.29-.06.18-.08.33-.22.41-.41.04-.09.06-.19.06-.29V7a.77.77 0 00-.76-.75zM17.24 9.42l-2.95-2.95a.776.776 0 00-.24-.16.707.707 0 00-.57 0c-.18.08-.33.22-.41.41-.04.09-.06.18-.06.28v10c0 .41.34.75.75.75s.75-.34.75-.75V8.81l1.67 1.67c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      d="M9.01 20.5l-5.02-5.01M9.01 3.5v17M14.99 3.5l5.02 5.01M14.99 20.5v-17"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M9.01 21.25c-.19 0-.38-.07-.53-.22l-5.01-5.01a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l5.01 5.01c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
    ></Path>
    <Path
      fill={color}
      d="M9.01 21.25c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.34.75-.75.75zM20.01 9.26c-.19 0-.38-.07-.53-.22l-5.01-5.01a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l5.01 5.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
    ></Path>
    <Path
      fill={color}
      d="M14.99 21.25c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.33.75-.75.75z"
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="{strokeWidth}"
      d="M9.01 20.5l-5.02-5.01M9.01 3.5v17"
    ></Path>
    <G opacity=".4">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M14.99 3.5l5.02 5.01M14.99 20.5v-17"
      ></Path>
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

const ArrowSwapVertical = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
ArrowSwapVertical.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
ArrowSwapVertical.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
ArrowSwapVertical.displayName = 'ArrowSwapVertical';

export default ArrowSwapVertical;
