import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM7 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.75.75 0 0 1-.25-1.03c.21-.36.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.89.53-1.89.8-2.89.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M9.5 11.6c1.54.92 3.46.92 5 0s3.46-.92 5 0l2.5 1.5M2 13.1l2.5-1.5c.46-.28.96-.47 1.47-.58M2 3.898l2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0l2.5-1.5M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5"
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
      d="M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z"
      fill={color}
      opacity=".4"
    ></Path>
    <Path
      d="M6.998 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.749.749 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.88.53-1.88.8-2.88.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="m2 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5M2 3.9l2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0L22 3.9M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5"
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
      d="M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5c-.36.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM6.998 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.749.749 0 0 1-.26-1.03c.21-.35.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.88.53-1.88.8-2.88.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5c-.36.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="m2 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m2 3.898 2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0l2.5-1.5M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5"
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

const Wind2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Wind2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Wind2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Wind2.displayName = 'Wind2';

export default Wind2;
