import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M10.05 2.848l-8.79 8.79c-.2.2-.2.51 0 .71l8.79 8.79c.32.31.85.09.85-.35v-2.59a.47.47 0 00-.15-.35l-5.5-5.5c-.2-.2-.2-.51 0-.71l5.5-5.5a.51.51 0 00.15-.35v-2.59a.5.5 0 00-.85-.35zM13.75 2.848l8.79 8.79c.2.2.2.51 0 .71l-8.79 8.79a.5.5 0 01-.85-.35v-2.59c0-.13.05-.26.15-.35l5.5-5.5c.2-.2.2-.51 0-.71l-5.5-5.5a.51.51 0 01-.15-.35v-2.59a.5.5 0 01.85-.35z"
    ></Path>
    <Path
      fill={color}
      d="M10.05 9.848l-1.79 1.79c-.2.2-.2.51 0 .71l1.79 1.79c.32.31.85.09.85-.35v-3.59a.5.5 0 00-.85-.35z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M10.9 2 .9 12l10 10v-4l-6-6 6-6V2ZM18.96 8.06 22.9 12l-10 10v-4l6-6-6-6V2l3.04 3.04"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m10.9 9-3 3 3 3V9Z"
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
      d="m10.05 2.848-8.79 8.79c-.2.2-.2.51 0 .71l8.79 8.79c.32.31.85.09.85-.35v-2.59a.47.47 0 0 0-.15-.35l-5.5-5.5c-.2-.2-.2-.51 0-.71l5.5-5.5a.51.51 0 0 0 .15-.35v-2.59a.5.5 0 0 0-.85-.35Z"
      fill={color}
    ></Path>
    <Path
      d="m13.75 2.848 8.79 8.79c.2.2.2.51 0 .71l-8.79 8.79a.5.5 0 0 1-.85-.35v-2.59c0-.13.05-.26.15-.35l5.5-5.5c.2-.2.2-.51 0-.71l-5.5-5.5a.51.51 0 0 1-.15-.35v-2.59a.5.5 0 0 1 .85-.35ZM10.05 9.848l-1.79 1.79c-.2.2-.2.51 0 .71l1.79 1.79c.32.31.85.09.85-.35v-3.59a.5.5 0 0 0-.85-.35Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M10.9 2 .9 12l10 10v-4l-6-6 6-6V2ZM12.9 2l10 10-10 10v-4l6-6-6-6V2Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m10.9 9-3 3 3 3V9Z"
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
      d="M10.9 22.748a.75.75 0 0 1-.53-.22l-10-10a.754.754 0 0 1 0-1.06l10-10a.751.751 0 0 1 1.28.53v4c0 .2-.08.39-.22.53l-5.47 5.47 5.47 5.47c.14.14.22.33.22.53v4c0 .3-.18.58-.46.69-.1.04-.19.06-.29.06Zm-8.94-10.75 8.19 8.19v-1.88l-5.78-5.78a.754.754 0 0 1 0-1.06l5.78-5.78v-1.88l-8.19 8.19ZM12.9 22.748a.753.753 0 0 1-.75-.75v-4c0-.2.08-.39.22-.53l5.47-5.47-5.47-5.47a.75.75 0 0 1-.22-.53v-4c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l10 10c.29.29.29.77 0 1.06l-10 10a.75.75 0 0 1-.53.22Zm.75-4.44v1.88l8.19-8.19-8.19-8.19v1.88l5.78 5.78c.29.29.29.77 0 1.06l-5.78 5.78Z"
      fill={color}
    ></Path>
    <Path
      d="M10.9 15.748a.75.75 0 0 1-.53-.22l-3-3a.754.754 0 0 1 0-1.06l3-3a.751.751 0 0 1 1.28.53v6c0 .3-.18.58-.46.69-.1.04-.19.06-.29.06Zm-1.94-3.75 1.19 1.19v-2.38l-1.19 1.19Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M10.9 2 .9 12l10 10v-4l-6-6 6-6V2ZM12.9 2l10 10-10 10v-4l6-6-6-6V2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m10.9 9-3 3 3 3V9Z"
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

const TriangleLogo = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
TriangleLogo.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
TriangleLogo.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
TriangleLogo.displayName = 'TriangleLogo';

export default TriangleLogo;
