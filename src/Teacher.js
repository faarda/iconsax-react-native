import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M16.831 15.64a1 1 0 0 1 1.55.84v1.29c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0l-3.19-1.06c-1.2-.4-2.18-1.76-2.18-3.03v-1.3c0-.79.88-1.27 1.54-.84l2.06 1.34c.79.53 1.79.79 2.79.79s2-.26 2.79-.79l2.03-1.33Z"
      fill={color}
    ></Path>
    <Path
      d="m19.98 6.459-5.99-3.93c-1.08-.71-2.86-.71-3.94 0l-6.02 3.93c-1.93 1.25-1.93 4.08 0 5.34l1.6 1.04 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88 1.37-.9v3.06c0 .41.34.75.75.75s.75-.34.75-.75v-4.92c.4-1.29-.01-2.79-1.27-3.62Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6 5.17 4.03 6.46c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.71-2.86-.71-3.94 0"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m5.631 13.078-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64M21.398 15V9"
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
      d="M18.381 12.84v4.93c0 1.27-.99 2.63-2.18 3.03l-3.19 1.06c-.56.19-1.47.19-2.02 0l-3.19-1.06c-1.2-.4-2.18-1.76-2.18-3.03l.01-4.93 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88Z"
      fill={color}
    ></Path>
    <Path
      d="m19.98 6.459-5.99-3.93c-1.08-.71-2.86-.71-3.94 0l-6.02 3.93c-1.93 1.25-1.93 4.08 0 5.34l1.6 1.04 4.42 2.88c1.08.71 2.86.71 3.94 0l4.39-2.88 1.37-.9v3.06c0 .41.34.75.75.75s.75-.34.75-.75v-4.92c.4-1.29-.01-2.79-1.27-3.62Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M10.05 2.53 4.03 6.46c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.72-2.86-.72-3.94-.01Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m5.63 13.08-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64M21.4 15V9"
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
      d="M12.01 17.001c-.85 0-1.71-.22-2.38-.65l-6.02-3.93a3.923 3.923 0 0 1-1.79-3.3c0-1.34.67-2.57 1.79-3.3l6.03-3.92c1.34-.87 3.43-.87 4.76.01l5.99 3.93c1.11.73 1.78 1.96 1.78 3.29s-.67 2.56-1.78 3.29l-5.99 3.93c-.67.44-1.53.65-2.39.65Zm0-14.25c-.57 0-1.14.13-1.55.41l-6.02 3.92c-.7.46-1.11 1.2-1.11 2.04 0 .84.4 1.58 1.11 2.04l6.02 3.93c.83.54 2.29.54 3.12 0l5.99-3.93c.7-.46 1.1-1.2 1.1-2.04 0-.84-.4-1.58-1.1-2.04l-5.99-3.93c-.42-.26-.99-.4-1.57-.4Z"
      fill={color}
    ></Path>
    <Path
      d="M12.001 22.748c-.44 0-.89-.06-1.25-.18l-3.19-1.06c-1.51-.5-2.7-2.15-2.69-3.74l.01-4.69c0-.41.34-.75.75-.75s.75.34.75.75l-.01 4.69c0 .94.78 2.02 1.67 2.32l3.19 1.06c.4.13 1.14.13 1.54 0l3.19-1.06c.89-.3 1.67-1.38 1.67-2.31v-4.64c0-.41.34-.75.75-.75s.75.34.75.75v4.64c0 1.59-1.18 3.23-2.69 3.74l-3.19 1.06c-.36.11-.81.17-1.25.17ZM21.398 15.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="m10.05 2.531-6.02 3.93c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.72-2.86-.72-3.94-.01Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m5.631 13.078-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64M21.398 15V9"
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

const Teacher = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Teacher.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Teacher.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Teacher.displayName = 'Teacher';

export default Teacher;
