import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.57.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96a2.78 2.78 0 0 1-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M17.97 22H22M2 2v17c0 1.66 1.34 3 3 3h8.98M19.99 8.18 21 7"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11l1.15-1.35"
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
      d="M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.57.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96a2.78 2.78 0 0 1-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M2 2v17c0 1.66 1.34 3 3 3h17"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7"
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
      d="M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.58.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96-.76.02-1.51-.26-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M2 2v17c0 1.66 1.34 3 3 3h17"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7"
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

const Diagram = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Diagram.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Diagram.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Diagram.displayName = 'Diagram';

export default Diagram;
