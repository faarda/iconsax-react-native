import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M18 16.75a.75.75 0 0 1-.6-1.2 5.926 5.926 0 0 0 .72-5.84.75.75 0 0 1 .4-.98c.38-.16.82.02.98.4 1.02 2.42.67 5.23-.9 7.33-.15.19-.37.29-.6.29Z"
      fill={color}
    ></Path>
    <Path
      d="M19.828 19.25a.75.75 0 0 1-.6-1.2c2.14-2.85 2.61-6.67 1.23-9.96a.75.75 0 0 1 .4-.98c.38-.16.82.02.98.4 1.59 3.78 1.05 8.16-1.41 11.44-.14.2-.37.3-.6.3ZM14.04 12.958c.63-.63 1.71-.18 1.71.71v2.93c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37c-.8 0-1.66-.27-2.54-.82l-.64-.4c-.54-.34-.63-1.1-.18-1.55l4.85-4.87ZM21.77 2.229c-.3-.3-.79-.3-1.09 0l-4.95 4.95c-.06-1.6-.66-2.8-1.72-3.39-1.12-.62-2.55-.46-4.01.45l-2.91 1.82c-.2.12-.43.19-.66.19H5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75h.16l-2.94 2.94c-.3.3-.3.79 0 1.09.16.14.35.22.55.22.2 0 .39-.08.54-.23l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 14c0 2 1 3 3 3h2M15 8.372v-.96c0-2.98-2.07-4.12-4.59-2.54l-2.92 1.83c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3M10.41 19.13c2.52 1.58 4.59.43 4.59-2.54v-3.64M18.81 9.422c.9 2.15.63 4.66-.81 6.58M20.78 17c-.27.52-.58 1.02-.94 1.5M21.148 7.8c.83 1.97 1.05 4.13.66 6.2M22 2 2 22"
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
      d="M18 16.75a.75.75 0 0 1-.6-1.2 5.926 5.926 0 0 0 .72-5.84.75.75 0 0 1 .4-.98c.38-.16.82.02.98.4 1.02 2.42.67 5.23-.9 7.33-.15.19-.37.29-.6.29Z"
      fill={color}
    ></Path>
    <Path
      d="M19.828 19.25a.75.75 0 0 1-.6-1.2c2.14-2.85 2.61-6.67 1.23-9.96a.75.75 0 0 1 .4-.98c.38-.16.82.02.98.4 1.59 3.78 1.05 8.16-1.41 11.44-.14.2-.37.3-.6.3Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M14.04 12.958c.63-.63 1.71-.18 1.71.71v2.93c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37c-.8 0-1.66-.27-2.54-.82l-.64-.4c-.54-.34-.63-1.1-.18-1.55l4.85-4.87ZM14.02 3.782c-1.12-.62-2.55-.46-4.01.45l-2.92 1.83c-.2.12-.43.19-.66.19H5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75h1.25l9.5-9.5v-.84c0-1.72-.62-3.01-1.73-3.63Z"
      fill={color}
    ></Path>
    <Path
      d="M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M15 8.37v-.96c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3h2M10.41 19.13c2.52 1.58 4.59.43 4.59-2.54v-3.64M18.81 9.42c.9 2.15.63 4.66-.81 6.58M21.15 7.8a10.82 10.82 0 0 1-1.32 10.7M22 2 2 22"
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
      d="M7 17.75H5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h1.43c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.88-1.08 4-.46 1.12.62 1.73 1.91 1.73 3.64v.96c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.96c0-1.14-.35-1.99-.96-2.32-.61-.34-1.51-.19-2.48.42L7.88 7.33c-.43.28-.94.42-1.45.42H5c-1.58 0-2.25.67-2.25 2.25v4c0 1.58.67 2.25 2.25 2.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.552 20.59c-.79 0-1.66-.28-2.53-.83a.747.747 0 1 1 .79-1.27c.97.6 1.87.76 2.48.42.61-.34.96-1.19.96-2.32v-3.64c0-.41.34-.75.75-.75s.75.34.75.75v3.64c0 1.72-.62 3.02-1.73 3.64-.45.24-.95.36-1.47.36ZM18 16.75a.75.75 0 0 1-.6-1.2 5.926 5.926 0 0 0 .72-5.84.75.75 0 0 1 .4-.98c.38-.16.82.02.98.4 1.02 2.42.67 5.23-.9 7.33-.15.19-.37.29-.6.29Z"
      fill={color}
    ></Path>
    <Path
      d="M19.828 19.25a.75.75 0 0 1-.6-1.2c2.14-2.85 2.61-6.67 1.23-9.96a.75.75 0 0 1 .4-.98c.39-.16.82.02.98.4 1.59 3.78 1.05 8.16-1.41 11.44-.14.2-.37.3-.6.3ZM2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M14 7.372v-.96c0-2.98-2.07-4.12-4.59-2.54l-2.92 1.83c-.32.19-.69.3-1.06.3H4c-2 0-3 1-3 3v4c0 2 1 3 3 3h2"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M9.41 18.13c2.52 1.58 4.59.43 4.59-2.54v-3.64M17.81 8.422c.9 2.15.63 4.66-.81 6.58M20.148 6.8a10.82 10.82 0 0 1-1.32 10.7"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M21 1 1 21"
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

const VolumeSlash = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
VolumeSlash.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
VolumeSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
VolumeSlash.displayName = 'VolumeSlash';

export default VolumeSlash;