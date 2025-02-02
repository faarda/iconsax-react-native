import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-1.4 14.6c-.15.19-.37.29-.59.29-.16 0-.32-.05-.46-.16-1.06-.82-2.43-.82-3.49 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05a4.296 4.296 0 0 1 5.32 0c.34.25.4.72.14 1.05ZM17 13.51c-.15.19-.37.29-.59.29-.16 0-.32-.05-.46-.16-2.4-1.85-5.49-1.85-7.89 0a.751.751 0 1 1-.93-1.18c2.95-2.28 6.77-2.28 9.72 0 .34.25.4.72.15 1.05Zm1.59-3.09c-.15.19-.37.29-.59.29-.16 0-.32-.05-.46-.16-3.37-2.6-7.72-2.6-11.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.92-3.03 8.99-3.03 12.92 0 .33.25.39.72.13 1.05Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6 9.96c3.63-2.81 8.37-2.81 12 0M7.6 13.049c2.67-2.06 6.14-2.06 8.81 0M9.8 16.14c1.33-1.03 3.07-1.03 4.4 0"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
      opacity=".4"
      d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M18 10.71c-.16 0-.32-.05-.46-.16-3.37-2.6-7.72-2.6-11.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.92-3.03 8.99-3.03 12.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29Z"
      fill={color}
    ></Path>
    <Path
      d="M16.4 13.8c-.16 0-.32-.05-.46-.16-2.4-1.85-5.49-1.85-7.89 0-.33.25-.8.19-1.05-.13s-.19-.8.13-1.05c2.95-2.28 6.77-2.28 9.72 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29ZM14.2 16.891c-.16 0-.32-.05-.46-.16-1.06-.82-2.43-.82-3.49 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05a4.296 4.296 0 0 1 5.32 0c.33.25.39.72.13 1.05-.13.19-.35.29-.58.29Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M6 9.96c3.63-2.81 8.37-2.81 12 0M7.6 13.05c2.67-2.06 6.14-2.06 8.81 0M9.8 16.14c1.33-1.03 3.07-1.03 4.4 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
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
      d="M18 10.71c-.16 0-.32-.05-.46-.16-3.37-2.6-7.72-2.6-11.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.92-3.03 8.99-3.03 12.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29Z"
      fill={color}
    ></Path>
    <Path
      d="M16.4 13.8c-.16 0-.32-.05-.46-.16-2.4-1.85-5.49-1.85-7.89 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 2.95-2.28 6.77-2.28 9.72 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29ZM14.2 16.891c-.16 0-.32-.05-.46-.16-1.06-.82-2.43-.82-3.49 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05a4.296 4.296 0 0 1 5.32 0c.33.25.39.72.13 1.05-.13.19-.35.29-.58.29Z"
      fill={color}
    ></Path>
    <Path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M6 9.96c3.63-2.81 8.37-2.81 12 0M7.6 13.049c2.67-2.06 6.14-2.06 8.81 0M9.8 16.14c1.33-1.03 3.07-1.03 4.4 0"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
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

const WifiSquare = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
WifiSquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
WifiSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
WifiSquare.displayName = 'WifiSquare';

export default WifiSquare;
