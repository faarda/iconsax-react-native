import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M21.97 12a6.005 6.005 0 0 1-8.118 5.614c-.319-.121-.378-.529-.157-.788A7.406 7.406 0 0 0 15.471 12a7.41 7.41 0 0 0-1.772-4.825c-.223-.26-.164-.669.155-.79A6.005 6.005 0 0 1 21.97 12Z"
      fill={color}
    ></Path>
    <Path
      d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 0 1-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 0 1 4-1.54c3.31 0 6 2.69 6 6Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M3.44 15.92A5.972 5.972 0 0 1 1.97 12c0-3.31 2.69-6 6-6 1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46s-.77 3.37-2 4.46a5.93 5.93 0 0 1-4 1.54"
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
      d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 0 1 4-1.54c3.31 0 6 2.69 6 6Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 0 1-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46Z"
      fill={color}
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
      d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 01-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 014-1.54c3.31 0 6 2.69 6 6z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 01-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46z"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M15.97 18.75c-1.67 0-3.27-.62-4.5-1.73a.75.75 0 0 1 0-1.12 5.2 5.2 0 0 0 1.75-3.9 5.2 5.2 0 0 0-1.75-3.9.75.75 0 0 1 0-1.12 6.683 6.683 0 0 1 4.5-1.73c3.72 0 6.75 3.03 6.75 6.75s-3.02 6.75-6.75 6.75Zm-2.87-2.36c.85.56 1.84.86 2.88.86 2.89 0 5.25-2.36 5.25-5.25s-2.36-5.25-5.25-5.25c-1.03 0-2.03.3-2.88.86a6.73 6.73 0 0 1 0 8.78Z"
      fill={color}
    ></Path>
    <Path
      d="M7.97 18.75c-3.72 0-6.75-3.03-6.75-6.75s3.03-6.75 6.75-6.75c1.67 0 3.27.62 4.5 1.73A6.72 6.72 0 0 1 14.72 12a6.7 6.7 0 0 1-2.25 5.02 6.713 6.713 0 0 1-4.5 1.73Zm0-12c-2.89 0-5.25 2.36-5.25 5.25s2.36 5.25 5.25 5.25c1.3 0 2.54-.48 3.5-1.35a5.196 5.196 0 0 0 1.75-3.9c0-1.49-.64-2.92-1.75-3.9-.96-.87-2.2-1.35-3.5-1.35Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 0 1 4-1.54c3.31 0 6 2.69 6 6Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 0 1-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46Z"
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

const Blend = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Blend.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Blend.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Blend.displayName = 'Blend';

export default Blend;
