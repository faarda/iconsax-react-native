import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M18.898 15.031c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm1.6 5.65c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.77 0 1.06ZM22 7.548v.45c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-.46c0-2.29 1.85-4.14 4.14-4.14h11.71c2.29 0 4.15 1.86 4.15 4.15Z"
      fill={color}
    ></Path>
    <Path
      d="M2 11.498v4.96c0 2.29 1.85 4.14 4.14 4.14h6.26c.58 0 1.08-.49 1.03-1.07-.14-1.53.35-3.19 1.71-4.51.56-.55 1.25-.97 2-1.21 1.25-.4 2.46-.35 3.53.01a1 1 0 0 0 1.33-.94v-1.39c0-.55-.45-1-1-1H3c-.55.01-1 .46-1 1.01Zm6 5.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6 10.031h15.9"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.458 20.53h-5.11c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17.898 22.031a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18.97 19.151l-2.11-2.12M18.948 17.063l-2.12 2.11M5.898 16.031h4"
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
      d="M18.898 15.031c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm1.6 5.65c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.77 0 1.06ZM22 7.538v1.46H2v-1.46c0-2.29 1.86-4.14 4.15-4.14h11.7c2.29 0 4.15 1.85 4.15 4.14Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M2 9v7.46c0 2.29 1.85 4.14 4.14 4.14h6.26c.58 0 1.08-.49 1.03-1.07-.14-1.53.35-3.19 1.71-4.51.56-.55 1.25-.97 2-1.21 1.25-.4 2.46-.35 3.53.01a1 1 0 0 0 1.33-.94V9H2Zm6 8.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M8.75 16.5c0 .41-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M1.898 10.03h20"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.458 20.53h-5.11c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17.898 22.03a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18.97 19.15l-2.11-2.12M18.948 17.06l-2.12 2.11M5.898 16.03h4"
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
      d="M21.898 10.781h-20c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
    <Path
      d="M11.458 21.28h-5.11c-3.98 0-5.2-1.2-5.2-5.14V7.92c0-3.15.67-4.9 4.24-5.11.31-.01.62-.02.96-.02h11.11c3.98 0 5.2 1.2 5.2 5.14v4.41c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.93c0-3.09-.55-3.64-3.7-3.64H6.348c-.32 0-.61.01-.89.02-2.17.13-2.81.62-2.81 3.62v8.22c0 3.09.55 3.64 3.7 3.64h5.11c.41 0 .75.34.75.75s-.34.74-.75.74Z"
      fill={color}
    ></Path>
    <Path
      d="M17.898 22.781c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25-1.46-3.25-3.25-3.25Z"
      fill={color}
    ></Path>
    <Path
      d="M18.97 19.9c-.19 0-.38-.07-.53-.22l-2.11-2.11a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.11 2.11c.29.29.29.77 0 1.06-.14.14-.34.22-.53.22Z"
      fill={color}
    ></Path>
    <Path
      d="M16.83 19.92c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.11-2.11c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.11 2.11a.71.71 0 0 1-.53.22ZM9.898 16.781h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M1.898 10.031h20"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.458 20.53h-5.11c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M17.898 22.031a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m18.97 19.151-2.11-2.12M18.948 17.063l-2.12 2.11"></Path>
    </G>
    <Path
      opacity=".4"
      d="M5.898 16.031h4"
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

const CardRemove = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
CardRemove.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
CardRemove.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
CardRemove.displayName = 'CardRemove';

export default CardRemove;
