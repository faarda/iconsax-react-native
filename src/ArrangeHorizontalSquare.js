import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.66 12.1c-.04.09-.09.17-.16.24l-3.04 3.04c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.76-1.76h-8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.31c.1 0 .19.02.29.06.18.08.33.22.41.41.06.18.06.39-.01.57zm-.7-3.17H6.85c-.1 0-.19-.02-.29-.06a.782.782 0 01-.41-.41.707.707 0 010-.57c.04-.09.09-.17.16-.24l3.04-3.04c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.66 9.43h8.5c.41 0 .75.34.75.75s-.34.75-.76.75z"
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
      d="M17.15 13.82l-3.04 3.04M6.85 13.82h10.3M6.85 10.18l3.04-3.04M17.15 10.18H6.85"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{strokeWidth}"
      d="M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
      opacity=".4"
    ></Path>
    <Path
      fill={color}
      d="M17.85 13.53a.782.782 0 00-.41-.41.717.717 0 00-.29-.06H6.85c-.41 0-.75.34-.75.75s.34.75.75.75h8.5l-1.76 1.76c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.04-3.04c.07-.07.12-.15.16-.24a.8.8 0 000-.57zM6.15 10.47c.08.18.22.33.41.41.09.04.19.06.29.06h10.31c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5l1.76-1.76c.29-.29.29-.77 0-1.06a.755.755 0 00-1.06 0L6.32 9.65c-.07.07-.13.16-.17.25a.8.8 0 000 .57z"
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      d="M17.15 13.82l-3.04 3.04M6.85 13.82h10.3"
    ></Path>
    <G>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
        d="M6.85 10.18l3.04-3.04M17.15 10.18H6.85"
      ></Path>
    </G>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
    ></Path>
    <Path
      fill={color}
      d="M14.11 17.61c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.04-3.04c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04a.75.75 0 01-.53.22z"
    ></Path>
    <Path
      fill={color}
      d="M17.15 14.57H6.85c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.31c.41 0 .75.34.75.75s-.34.75-.76.75zM6.85 10.93c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06l3.04-3.04c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04c-.15.15-.34.22-.53.22z"
    ></Path>
    <Path
      fill={color}
      d="M17.15 10.93H6.85c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.31c.41 0 .75.34.75.75s-.34.75-.76.75z"
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{strokeWidth}"
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
    ></Path>
    <G opacity=".4">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M17.15 13.82l-3.04 3.04M6.85 13.82h10.3M6.85 10.18l3.04-3.04M17.15 10.18H6.85"
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

const ArrangeHorizontalSquare = forwardRef(
  ({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
  },
);
ArrangeHorizontalSquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
ArrangeHorizontalSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
ArrangeHorizontalSquare.displayName = 'ArrangeHorizontalSquare';

export default ArrangeHorizontalSquare;
