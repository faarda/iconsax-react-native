import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="m19.481 2.819.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.36c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.08 1.42-1.08 1.96.01Z"
      fill={color}
    ></Path>
    <Path
      d="M21.57 10.09c-.36.26-1.37.74-2.81 0a.562.562 0 0 0-.52 0c-.57.29-1.09.41-1.5.41-.64 0-1.09-.25-1.31-.41-.37-.27-1.15-1.04-.88-2.67a.572.572 0 0 0-.13-.47c-.69-.79-1.07-1.85-.8-2.68.1-.33-.11-.77-.45-.77H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-5.23c0-.19-.27-.29-.43-.18Zm-7.23 2c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0 .32-.26.79-.21 1.05.12.27.32.22.8-.11 1.06Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 8.5c0-3.5 2-5 5-5h5M22 11.5v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.52"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m19.481 2.821.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0Z"
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
      d="m19.481 2.821.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M22 9.67v5.83c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7.05c-.2.22-.35.48-.44.77-.29.9 0 1.88.8 2.69l.19.19c-.41 1.81.44 2.66.83 2.94.22.16.67.41 1.31.41.47 0 1.05-.14 1.72-.54l.04-.02.04.02c1.58.95 2.65.41 3.03.13.12-.08.28-.22.43-.42Z"
      fill={color}
    ></Path>
    <Path
      d="M11.999 12.869c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0 .32-.26.79-.21 1.05.12.26.32.21.8-.12 1.05-.64.53-1.49.79-2.33.79Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M22 11.5v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m19.48 2.82.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0Z"
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
      d="M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 3.65-2.1 5.75-5.75 5.75Z"
      fill={color}
    ></Path>
    <Path
      d="M11.999 12.869c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0 .32-.26.79-.21 1.05.12.26.32.21.8-.12 1.05-.64.53-1.49.79-2.33.79ZM16.74 9.748c-.41 0-.69-.14-.87-.27-.33-.24-.84-.84-.54-2.16l.05-.21c.02-.08-.04-.27-.09-.33l-.35-.35c-.59-.6-.82-1.3-.62-1.93.2-.62.79-1.06 1.62-1.2l.38-.06c.07-.02.21-.12.25-.19l.28-.57c.39-.79.99-1.24 1.65-1.24.66 0 1.26.45 1.65 1.24l.28.57c.03.06.18.17.25.19l.38.06c.83.14 1.42.58 1.62 1.2.2.62-.02 1.32-.62 1.93l-.35.35c-.05.06-.11.25-.09.33l.05.21c.3 1.32-.21 1.92-.54 2.16-.33.24-1.05.53-2.2-.16l-.25-.15a.497.497 0 0 0-.34 0l-.26.15c-.54.32-.99.43-1.34.43Zm1.75-7c-.01.01-.15.11-.29.4l-.28.57c-.24.49-.81.91-1.34 1l-.38.06c-.32.05-.43.16-.44.18 0 .02.03.18.26.41l.35.35c.41.42.62 1.14.49 1.71l-.05.21c-.08.36-.05.55-.03.62.02-.02.2-.04.53-.24l.26-.15c.55-.33 1.34-.33 1.89 0l.25.15c.33.2.5.22.56.22-.01-.03.03-.21-.06-.6l-.05-.21c-.13-.58.08-1.29.49-1.71l.35-.35c.23-.23.26-.39.26-.42-.01-.02-.12-.12-.44-.18l-.38-.06c-.54-.09-1.1-.51-1.34-1l-.28-.56c-.16-.3-.29-.39-.33-.4Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M22 11.5v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h5"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m19.481 2.821.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0Z"
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

const SmsStar = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
SmsStar.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
SmsStar.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
SmsStar.displayName = 'SmsStar';

export default SmsStar;
