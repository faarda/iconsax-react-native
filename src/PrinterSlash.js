import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M6 7c-2 0-3 1-3 3v5c0 2 1 3 3 3l2-2v-1h1l8-8H6Zm1 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H7Z"
      fill={color}
    ></Path>
    <Path d="m9 15-1 1v-1h1ZM17 5v2H7V5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3Z" fill={color}></Path>
    <Path
      d="M22.53 1.471a.754.754 0 0 0-1.06 0l-20 20c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l20-20c.29-.29.29-.77 0-1.06ZM17 14.25h-4.043a.5.5 0 0 0-.353.146L12 15l-.75.75L8.8 18.2c-.64.64-.77 1.8-.25 2.54C9.09 21.5 9.99 22 11 22h2c1.66 0 3-1.34 3-3v-3.25h1c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill={color}
    ></Path>
    <Path
      d="m19.02 7.98-3.56 3.56c-.63.63-.18 1.71.71 1.71h.74c.87 0 1.68.59 1.82 1.45a1.759 1.759 0 0 1-1.237 1.979c-.265.077-.493.294-.493.57v.25a.5.5 0 0 0 .5.5h.5c1.66 0 3-1.34 3-3v-5c0-.79-.16-1.43-.47-1.91-.34-.51-1.08-.54-1.51-.11Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2ZM12.97 15H16v4c0 2-1 3-3 3h-2c-1.69 0-2.67-.71-2.93-2.14"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M6 18c-2 0-3-1-3-3v-5c0-2 1-3 3-3h10.59M21 14v1c0 2-1 3-3 3h-2v-3h-3M19.97 7.52C20.66 8 21 8.83 21 10M17 15h-1.21M7 11h2"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 2 2 22"
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
      d="M6 7c-2 0-3 1-3 3v5c0 2 1 3 3 3l2-2v-1h1l8-8H6Zm1 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H7Z"
      fill={color}
    ></Path>
    <Path d="m9 15-1 1v-1h1ZM17 5v2H7V5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3Z" fill={color}></Path>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.53 1.47a.75.75 0 0 1 0 1.06l-20 20a.75.75 0 0 1-1.06-1.06l20-20a.75.75 0 0 1 1.06 0Z"
      fill={color}
    ></Path>
    <Path
      d="M9.75 11c0 .41-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75ZM17.75 15c0 .41-.34.75-.75.75h-5.75l1.5-1.5H17c.41 0 .75.34.75.75Z"
      fill={color}
    ></Path>
    <Path d="M16 15v4c0 1.66-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3l4-4h4Z" fill={color}></Path>
    <Path
      opacity=".4"
      d="M21 9.998v5c0 2-1 3-3 3h-2v-3h-4l7.67-7.67c.89.45 1.33 1.34 1.33 2.67Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2ZM12.97 15H16v4c0 2-1 3-3 3h-2c-1.69 0-2.67-.71-2.93-2.14"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M6 18c-2 0-3-1-3-3v-5c0-2 1-3 3-3h10.59M19.97 7.52C20.66 8 21 8.83 21 10v5c0 2-1 3-3 3h-2v-3h-3M17 15h-1.21M7 11h2"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 2 2 22"
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
      d="M16.75 7.75h-9.5c-.41 0-.75-.34-.75-.75V5c0-2.56 1.19-3.75 3.75-3.75h3.5c2.56 0 3.75 1.19 3.75 3.75v2c0 .41-.34.75-.75.75ZM8 6.25h8V5c0-1.7-.55-2.25-2.25-2.25h-3.5C8.55 2.75 8 3.3 8 5v1.25ZM13 22.75h-2c-2.04 0-3.34-.98-3.67-2.76-.07-.41.19-.8.6-.87.4-.08.8.19.87.6.13.71.5 1.53 2.19 1.53h2c1.58 0 2.25-.67 2.25-2.25v-3.25h-2.28c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H16c.41 0 .75.34.75.75v4c0 2.42-1.33 3.75-3.75 3.75Z"
      fill={color}
    ></Path>
    <Path
      d="M6 18.75c-2.42 0-3.75-1.33-3.75-3.75v-5c0-2.42 1.33-3.75 3.75-3.75h10.59c.41 0 .75.34.75.75s-.34.75-.75.75H6c-1.58 0-2.25.67-2.25 2.25v5c0 1.58.67 2.25 2.25 2.25.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.752h-2c-.41 0-.75-.34-.75-.75v-2.25H13c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75v2.25H18c1.58 0 2.25-.67 2.25-2.25v-5c0-.92-.23-1.53-.71-1.87a.743.743 0 0 1-.18-1.04c.24-.34.71-.42 1.05-.18.89.63 1.34 1.67 1.34 3.09v5c0 2.42-1.33 3.75-3.75 3.75Z"
      fill={color}
    ></Path>
    <Path
      d="M17 15.75h-1.21c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c.41 0 .75.34.75.75s-.34.75-.75.75ZM9 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM2 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12.97 15H16v4c0 2-1 3-3 3h-2c-1.69 0-2.67-.71-2.93-2.14M6 18c-2 0-3-1-3-3v-5c0-2 1-3 3-3h10.59"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M19.97 7.52C20.66 8 21 8.83 21 10v5c0 2-1 3-3 3h-2v-3h-3M17 15h-1.21"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M7 11h2"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 2 2 22"
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

const PrinterSlash = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
PrinterSlash.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
PrinterSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
PrinterSlash.displayName = 'PrinterSlash';

export default PrinterSlash;
