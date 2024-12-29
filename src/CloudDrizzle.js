import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M20.17 17.57c-.53.49-1.14.86-1.8 1.11-.66.25-1.37-.23-1.37-.94v-1.32a3.53 3.53 0 0 0-3.53-3.53h-2.94A3.53 3.53 0 0 0 7 16.42V18c0 .55-.45 1-1 1h-.45C3.1 18.63 2 16.64 2 14.86c0-1.68.98-3.54 3.11-4.06-.59-2.33-.09-4.52 1.43-6.11 1.73-1.81 4.49-2.53 6.87-1.79 2.19.67 3.73 2.47 4.28 4.97 1.91.43 3.44 1.87 4.05 3.87.66 2.17.06 4.4-1.57 5.83Z"
      fill={color}
    ></Path>
    <Path
      d="M13.47 14.39h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm-1.76 4.45-1.24 1.23c-.09.09-.21.14-.32.14-.13 0-.24-.05-.33-.14a.459.459 0 0 1 0-.65l1.23-1.24a.47.47 0 0 1 .66 0c.18.18.18.48 0 .66Zm0-2.48-1.24 1.24c-.09.09-.21.14-.32.14a.47.47 0 0 1-.33-.8l1.23-1.23a.47.47 0 0 1 .66 0c.18.18.18.47 0 .65Zm2.47 2.48-1.23 1.23c-.1.09-.21.14-.33.14a.47.47 0 0 1-.33-.14.459.459 0 0 1 0-.65l1.24-1.24c.18-.18.47-.18.65 0 .18.18.18.48 0 .66Zm0-2.48-1.23 1.24c-.1.09-.21.14-.33.14a.47.47 0 0 1-.33-.8l1.24-1.23a.459.459 0 1 1 .65.65Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="m9.969 20-2 2M13.969 20l-2 2M13.969 16l-2 2M9.969 16l-2 2M11.998 3.98c-3.99-.34-8.34 3.11-6.38 8.58M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-.24-1.45-.77-2.59-1.48-3.45M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15.82 9.89c.52-.26 1.08-.4 1.66-.41"
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
      d="M21.74 11.74c-.61-2-2.13-3.44-4.04-3.87-.56-2.5-2.1-4.29-4.28-4.97-2.38-.73-5.14-.02-6.87 1.79-1.53 1.59-2.03 3.78-1.44 6.11C2.98 11.32 2 13.18 2 14.86c0 1.88 1.23 3.99 3.97 4.18H8.5v-2.63c0-1.27.76-2.03 2.03-2.03h2.94c1.27 0 2.03.76 2.03 2.03v2.63H16.35c1.42 0 2.78-.53 3.82-1.48 1.63-1.42 2.23-3.65 1.57-5.82Z"
      fill={color}
    ></Path>
    <Path
      d="M13.47 14.39h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm-1.76 4.45-1.24 1.23c-.09.09-.21.14-.32.14-.13 0-.24-.05-.33-.14a.459.459 0 0 1 0-.65l1.23-1.24a.47.47 0 0 1 .66 0c.18.18.18.48 0 .66Zm0-2.48-1.24 1.24c-.09.09-.21.14-.32.14a.47.47 0 0 1-.33-.8l1.23-1.23a.47.47 0 0 1 .66 0c.18.18.18.47 0 .65Zm2.47 2.48-1.23 1.23c-.1.09-.21.14-.33.14a.47.47 0 0 1-.33-.14.459.459 0 0 1 0-.65l1.24-1.24c.18-.18.47-.18.65 0 .18.18.18.48 0 .66Zm0-2.48-1.23 1.24c-.1.09-.21.14-.33.14a.47.47 0 0 1-.33-.8l1.24-1.23a.459.459 0 1 1 .65.65Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14C15.9.13 2.43 3.67 5.62 12.56"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44M15.82 9.89c.52-.26 1.08-.4 1.66-.41M9.97 20l-2 2M13.97 20l-2 2M13.97 16l-2 2M9.97 16l-2 2"
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
      d="M16.652 20.752h-.04c-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.04c1.14 0 2.23-.42 3.07-1.2 1.55-1.36 1.66-3.3 1.24-4.67-.42-1.37-1.58-2.92-3.61-3.18a.753.753 0 0 1-.65-.62c-.4-2.39-1.69-4.04-3.63-4.64-2.02-.62-4.35-.01-5.81 1.52-1.42 1.49-1.75 3.56-.93 5.85a.75.75 0 1 1-1.41.51c-1.01-2.81-.55-5.5 1.26-7.39 1.85-1.93 4.79-2.7 7.34-1.91 2.33.72 3.98 2.64 4.57 5.3 2.04.46 3.67 2 4.32 4.13.71 2.32.06 4.7-1.67 6.22a6.136 6.136 0 0 1-4.1 1.58Z"
      fill={color}
    ></Path>
    <Path
      d="M5.568 20.749h-.05c-2.88-.2-4.19-2.46-4.19-4.47s1.31-4.26 4.19-4.47c.74-.01 1.47.16 2.11.48.37.19.51.64.33 1.01-.19.37-.64.51-1.01.33-.42-.22-.9-.31-1.36-.32-1.89.14-2.75 1.59-2.75 2.97 0 1.38.86 2.83 2.8 2.97.41.03.72.39.69.8-.04.4-.37.7-.76.7ZM15.819 10.639c-.27 0-.54-.15-.67-.42a.746.746 0 0 1 .34-1.01c.61-.31 1.3-.48 1.98-.49.38.02.76.32.76.74.01.41-.32.76-.74.76-.46.01-.92.12-1.34.33-.1.07-.22.09-.33.09ZM7.97 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2a.71.71 0 0 1-.53.22ZM11.97 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2a.71.71 0 0 1-.53.22ZM11.97 18.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2a.71.71 0 0 1-.53.22ZM7.97 18.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2a.71.71 0 0 1-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M16.61 19.999c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-1.54-9.34-15.01-5.8-11.82 3.09"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44M15.82 9.89c.52-.26 1.08-.4 1.66-.41"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m9.969 20-2 2M13.969 20l-2 2M13.969 16l-2 2M9.969 16l-2 2"
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

const CloudDrizzle = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
CloudDrizzle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
CloudDrizzle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
CloudDrizzle.displayName = 'CloudDrizzle';

export default CloudDrizzle;