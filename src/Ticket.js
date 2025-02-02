import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M22 10.75c.41 0 .75-.34.75-.75V9c0-4.41-1.34-5.75-5.75-5.75h-6.25V5.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.25H7C2.59 3.25 1.25 4.59 1.25 9v.5c0 .41.34.75.75.75.96 0 1.75.79 1.75 1.75S2.96 13.75 2 13.75c-.41 0-.75.34-.75.75v.5c0 4.41 1.34 5.75 5.75 5.75h2.25V18.5c0-.41.34-.75.75-.75s.75.34.75.75v2.25H17c4.41 0 5.75-1.34 5.75-5.75 0-.41-.34-.75-.75-.75-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75Zm-11.25 3.42c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.83c0-.41.34-.75.75-.75s.75.34.75.75v4.34Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10 4v16"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="5 5"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path
      d="M10 9.08V6.25c-.41 0-.75-.34-.75-.75V3.25H7C2.59 3.25 1.25 4.59 1.25 9v.5c0 .41.34.75.75.75.96 0 1.75.79 1.75 1.75S2.96 13.75 2 13.75c-.41 0-.75.34-.75.75v.5c0 4.41 1.34 5.75 5.75 5.75h2.25V18.5c0-.41.34-.75.75-.75v-2.83c-.41 0-.75-.34-.75-.75V9.83c0-.41.34-.75.75-.75Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M20.25 12.5c0 .96.79 1.75 1.75 1.75.41 0 .75.34.75.75 0 4.41-1.34 5.75-5.75 5.75h-6.25V18.5c0-.41-.34-.75-.75-.75v-2.83c.41 0 .75-.34.75-.75V9.83c0-.41-.34-.75-.75-.75V6.25c.41 0 .75-.34.75-.75V3.25H17c4.41 0 5.75 1.34 5.75 5.75v1c0 .41-.34.75-.75.75-.96 0-1.75.79-1.75 1.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M19.5 12.5A2.5 2.5 0 0 1 22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10 4v16"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="5 5"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M17 20.75H7c-4.41 0-5.75-1.34-5.75-5.75v-.5c0-.41.34-.75.75-.75.96 0 1.75-.79 1.75-1.75S2.96 10.25 2 10.25c-.41 0-.75-.34-.75-.75V9c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v1c0 .41-.34.75-.75.75-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75c.41 0 .75.34.75.75 0 4.41-1.34 5.75-5.75 5.75ZM2.75 15.16c.02 3.44.73 4.09 4.25 4.09h10c3.34 0 4.15-.59 4.24-3.59a3.25 3.25 0 0 1-2.49-3.16c0-1.53 1.07-2.82 2.5-3.16V9c0-3.57-.67-4.25-4.25-4.25H7c-3.52 0-4.23.65-4.25 4.09 1.43.34 2.5 1.63 2.5 3.16 0 1.53-1.07 2.82-2.5 3.16Z"
      fill={color}
    ></Path>
    <Path
      d="M10 7.25c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .41-.34.75-.75.75ZM10 14.58c-.41 0-.75-.34-.75-.75v-3.67c0-.41.34-.75.75-.75s.75.34.75.75v3.67c0 .42-.34.75-.75.75ZM10 20.75c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75s.75.34.75.75V20c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M19.5 12.5A2.5 2.5 0 0 1 22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M10 4v16"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="5 5"
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

const Ticket = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Ticket.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Ticket.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Ticket.displayName = 'Ticket';

export default Ticket;
