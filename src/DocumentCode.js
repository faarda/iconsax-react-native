import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M16 2H8C4.5 2 3 4 3 7v10c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5Zm-5.47 14.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 15l1.47 1.47Zm6-.94-2 2c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L14.94 15l-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06Zm1.97-6.28h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-5.98"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2"
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
      d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      fill={color}
    ></Path>
    <Path
      d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 17.751c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14 17.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2"
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
      d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75Zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8Z"
      fill={color}
    ></Path>
    <Path
      d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 17.751c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14 17.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2"
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

const DocumentCode = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
DocumentCode.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
DocumentCode.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
DocumentCode.displayName = 'DocumentCode';

export default DocumentCode;
