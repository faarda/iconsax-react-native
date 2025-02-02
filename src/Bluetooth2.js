import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="m12.3 17.32 2.31-1.93-2.31-2.09v4.02ZM12.3 6.68v3.96l2.31-2.12-2.31-1.84Z"
      fill={color}
    ></Path>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM5.25 12A1.374 1.374 0 1 1 8 12a1.374 1.374 0 1 1-2.75 0Zm10.32 4.54-2.41 2.01c-.41.35-.79.45-1.08.45-.23 0-.41-.06-.51-.11-.23-.11-.77-.46-.77-1.44v-3.39l-2.9 2.65c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l3.91-3.58v-.08L6.89 8.4a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l2.9 2.65V6.56c0-.98.54-1.34.77-1.44.23-.11.85-.29 1.6.34l2.41 2.01c.33.27.52.66.53 1.07.01.41-.16.81-.47 1.1L13.04 12l2.59 2.37c.31.29.49.69.48 1.1-.02.41-.21.8-.54 1.07Zm1.81-3.16c-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76 0 1.38.62 1.38 1.38 0 .76-.63 1.38-1.38 1.38Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="m14.23 3.39-1.13-.95c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L4.64 5.36"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m4.64 18.639 12.35-11.32c.51-.47.5-1.22-.04-1.67M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M12.08 19c-.23 0-.41-.06-.51-.11-.23-.11-.77-.46-.77-1.44v-3.39l-2.9 2.65c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l3.91-3.58v-.08L6.89 8.4a.746.746 0 0 1-.05-1.06c.28-.31.75-.33 1.06-.05l2.9 2.65V6.55c0-.98.54-1.34.77-1.44.23-.11.85-.29 1.6.34l2.41 2.01c.33.27.52.66.53 1.07.01.41-.16.81-.47 1.1L13.05 12l2.59 2.37c.31.29.49.69.48 1.1-.01.41-.2.8-.53 1.07l-2.41 2.01c-.43.35-.81.45-1.1.45Zm.22-5.7v4.02l2.31-1.93-2.31-2.09Zm0-6.62v3.96l2.31-2.12-2.31-1.84Z"
      fill={color}
    ></Path>
    <Path
      d="M6.62 13.381c-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76 0 1.38.62 1.38 1.38 0 .76-.62 1.38-1.38 1.38Zm0-1.5c-.07 0-.12.06-.12.12 0 .14.25.14.25 0 0-.07-.06-.12-.13-.12ZM17.38 13.381c-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76 0 1.38.62 1.38 1.38 0 .76-.63 1.38-1.38 1.38Zm0-1.5c-.07 0-.12.06-.12.12 0 .14.25.14.25 0a.138.138 0 0 0-.13-.12Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M4.64 18.64 16.99 7.32c.51-.47.5-1.22-.04-1.67L13.1 2.44c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L4.64 5.36"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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
      d="M12.13 22.75c-.27 0-.48-.07-.63-.14-.36-.17-.97-.64-.97-1.9v-6.45L5.14 19.2c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l6.4-5.87v-.45L4.13 5.9a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l5.39 4.94V3.28c0-1.26.61-1.74.97-1.9.36-.17 1.11-.33 2.08.48l3.85 3.21c.42.35.67.85.68 1.38.01.53-.21 1.04-.62 1.41l-4.5 4.13 4.5 4.13c.4.37.63.89.62 1.41-.01.53-.26 1.03-.68 1.38l-3.85 3.21c-.57.49-1.07.63-1.45.63Zm-.1-9.6v7.56c0 .37.08.53.12.55.01-.01.19-.05.47-.28l3.85-3.21c.09-.08.14-.17.14-.27s-.04-.19-.13-.27l-4.45-4.08Zm.09-10.4c-.01.01-.09.18-.09.54v7.56l4.45-4.08a.35.35 0 0 0 .13-.27c0-.1-.05-.19-.14-.27l-3.86-3.21c-.26-.22-.43-.27-.49-.27Z"
      fill={color}
    ></Path>
    <Path
      d="M5 13.75c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75Zm0-2c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM19 13.75c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75Zm0-2c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M4.64 18.64 16.99 7.32c.51-.47.5-1.22-.04-1.67L13.1 2.44c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L4.64 5.36"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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

const Bluetooth2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Bluetooth2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Bluetooth2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Bluetooth2.displayName = 'Bluetooth2';

export default Bluetooth2;
