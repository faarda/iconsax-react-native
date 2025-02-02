import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M15.5 13.15h-2.17c-1.78 0-3.23-1.44-3.23-3.23V7.75c0-.41-.33-.75-.75-.75H6.18C3.87 7 2 8.5 2 11.18v6.64C2 20.5 3.87 22 6.18 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9c0-.42-.34-.75-.75-.75Z"
      fill={color}
    ></Path>
    <Path
      d="M17.82 2H11.93C9.67 2 7.84 3.44 7.76 6.01c.06 0 .11-.01.17-.01h5.89C16.13 6 18 7.5 18 10.18V16.83c0 .06-.01.11-.01.16 2.23-.07 4.01-1.55 4.01-4.16V6.18C22 3.5 20.13 2 17.82 2Z"
      fill={color}
    ></Path>
    <Path
      d="M11.98 7.152c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2 .71.01 1.7.01 2.55.01.43 0 .65-.5.35-.8-1.09-1.09-3.03-3.04-4.13-4.16Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 12.6C2 8.6 3.6 7 7.6 7h3M17 13.398v3c0 4-1.6 5.6-5.6 5.6H7.6c-4 0-5.6-1.6-5.6-5.6"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M13.8 13.4c-2.4 0-3.2-.8-3.2-3.2V7l6.4 6.4M11.6 2h4M7 5c0-1.66 1.34-3 3-3h2.62M22 8v6.19c0 1.55-1.26 2.81-2.81 2.81M22 8h-3c-2.25 0-3-.75-3-3V2l6 6Z"
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
      d="M15.5 13.15h-2.17c-1.78 0-3.23-1.44-3.23-3.23V7.75c0-.41-.33-.75-.75-.75H6.18C3.87 7 2 8.5 2 11.18v6.64C2 20.5 3.87 22 6.18 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9c0-.42-.34-.75-.75-.75Z"
      fill={color}
    ></Path>
    <Path
      d="M17.82 2H11.93C9.67 2 7.84 3.44 7.76 6.01c.06 0 .11-.01.17-.01h5.89C16.13 6 18 7.5 18 10.18V16.83c0 .06-.01.11-.01.16 2.23-.07 4.01-1.55 4.01-4.16V6.18C22 3.5 20.13 2 17.82 2Z"
      fill={color}
    ></Path>
    <Path
      d="M11.98 7.152c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2 .71.01 1.7.01 2.55.01.43 0 .65-.5.35-.8-1.09-1.09-3.03-3.04-4.13-4.16Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M17 13.4v3c0 4-1.6 5.6-5.6 5.6H7.6c-4 0-5.6-1.6-5.6-5.6v-3.8C2 8.6 3.6 7 7.6 7h3"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17 13.4h-3.2c-2.4 0-3.2-.8-3.2-3.2V7l6.4 6.4ZM11.6 2h4M7 5c0-1.66 1.34-3 3-3h2.62M22 8v6.19c0 1.55-1.26 2.81-2.81 2.81M22 8h-3c-2.25 0-3-.75-3-3V2l6 6Z"
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
      d="M11.4 22.75H7.6c-4.39 0-6.35-1.96-6.35-6.35v-3.8c0-4.39 1.96-6.35 6.35-6.35h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-3.58 0-4.85 1.27-4.85 4.85v3.8c0 3.58 1.27 4.85 4.85 4.85h3.8c3.58 0 4.85-1.27 4.85-4.85v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 4.39-1.96 6.35-6.35 6.35Z"
      fill={color}
    ></Path>
    <Path
      d="M17 14.149h-3.2c-2.81 0-3.95-1.14-3.95-3.95v-3.2c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l6.4 6.4c.21.21.28.54.16.82a.74.74 0 0 1-.69.46Zm-5.65-5.34v1.39c0 1.99.46 2.45 2.45 2.45h1.39l-3.84-3.84ZM15.6 2.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M7 5.75c-.41 0-.75-.34-.75-.75 0-2.07 1.68-3.75 3.75-3.75h2.62c.41 0 .75.34.75.75s-.34.75-.75.75H10C8.76 2.75 7.75 3.76 7.75 5c0 .41-.34.75-.75.75ZM19.19 17.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.14 0 2.06-.93 2.06-2.06V8c0-.41.34-.75.75-.75s.75.34.75.75v6.19c0 1.96-1.6 3.56-3.56 3.56Z"
      fill={color}
    ></Path>
    <Path
      d="M22 8.749h-3c-2.66 0-3.75-1.09-3.75-3.75v-3c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l6 6c.21.21.28.54.16.82a.74.74 0 0 1-.69.46Zm-5.25-4.94v1.19c0 1.83.42 2.25 2.25 2.25h1.19l-3.44-3.44Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M16 12.4v3c0 4-1.6 5.6-5.6 5.6H6.6c-4 0-5.6-1.6-5.6-5.6v-3.8C1 7.6 2.6 6 6.6 6h3"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M16 12.4h-3.2c-2.4 0-3.2-.8-3.2-3.2V6l6.4 6.4Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M6 4c0-1.66 1.34-3 3-3h6M21 7v6.19c0 1.55-1.26 2.81-2.81 2.81"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M21 7h-3c-2.25 0-3-.75-3-3V1l6 6Z"
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

const DocumentCopy = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
DocumentCopy.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
DocumentCopy.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
DocumentCopy.displayName = 'DocumentCopy';

export default DocumentCopy;
