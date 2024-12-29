import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M22 6.28v11.43c0 .18-.09.34-.24.43l-2.89 1.73c-.16.09-.35.09-.51 0l-9.61-5.59a.504.504 0 01-.25-.43v-1.33a.5.5 0 01.76-.43l8.49 5.09c.33.2.76-.04.76-.43V8.42c0-.18-.09-.34-.24-.43l-4.08-2.45a.505.505 0 010-.86l2.57-1.55c.16-.1.36-.1.52 0l4.5 2.7c.13.11.22.28.22.45z"
    ></Path>
    <Path
      fill={color}
      d="M11.29 18.43l-4.03 2.42c-.16.1-.36.1-.51 0l-4.5-2.7a.495.495 0 01-.24-.43V6.29c0-.18.09-.34.24-.43l4.5-2.7c.16-.1.36-.1.51 0l9.5 5.7c.15.09.24.25.24.43v4.83a.5.5 0 01-.76.43L7.75 9.46c-.33-.2-.76.04-.76.43v4.83c0 .18.09.34.24.43l4.04 2.43c.34.19.34.65.02.85z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="m12 6 5-3 5 3v12l-5 3-10-6V9l10 6V9l-5-3ZM2 12v6l5 3 4.7-3.13"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 6 7 3 2 6v2.05"
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
    <Path d="m12 6 5-3 5 3v12l-5 3-10-6V9l10 6V9l-5-3Z" fill={color}></Path>
    <Path opacity=".4" d="m12 18-5 3-5-3V6l5-3 10 6v6L7 9v6l5 3Z" fill={color}></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="m12 6 5-3 5 3v12l-5 3-10-6V9l10 6V9l-5-3Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 6 7 3 2 6v12l5 3 4.7-3.13"
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
      d="M17 21.75c-.13 0-.27-.04-.39-.11l-10-6a.742.742 0 0 1-.36-.64V9a.752.752 0 0 1 1.14-.64l8.86 5.32V9.43l-4.64-2.78a.751.751 0 0 1 0-1.28l5-3c.24-.14.53-.14.77 0l5 3c.23.14.36.38.36.64v12c0 .26-.14.51-.36.64l-5 3c-.11.06-.25.1-.38.1Zm-9.25-7.17L17 20.13l4.25-2.55V6.43L17 3.88l-3.54 2.13 3.93 2.36c.23.14.36.38.36.64v6c0 .27-.15.52-.38.65s-.52.13-.76-.01l-8.86-5.32v4.25Z"
      fill={color}
    ></Path>
    <Path
      d="M7 21.749c-.13 0-.27-.04-.39-.11l-5-3a.742.742 0 0 1-.36-.64v-12c0-.26.14-.51.36-.64l5-3c.24-.14.53-.14.77 0l5 3c.36.21.47.67.26 1.03-.21.36-.67.47-1.03.26L7 3.879l-4.25 2.55v11.15l4.23 2.54 4.31-2.87c.34-.23.81-.14 1.04.21.23.35.14.81-.21 1.04l-4.7 3.13c-.13.08-.27.12-.42.12Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="m12 6 5-3 5 3v12l-5 3-10-6V9l10 6V9l-5-3Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M12 6 7 3 2 6v12l5 3 4.7-3.13"
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

const Nexo = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Nexo.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Nexo.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Nexo.displayName = 'Nexo';

export default Nexo;
