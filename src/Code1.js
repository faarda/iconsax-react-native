import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.94 13.27a7.077 7.077 0 0 1-2.72 2.4.742.742 0 0 1-1-.33.745.745 0 0 1 .34-1.01c.87-.43 1.61-1.09 2.14-1.89.18-.27.18-.61 0-.88-.54-.8-1.28-1.46-2.14-1.89a.74.74 0 0 1-.34-1.01c.18-.37.63-.52 1-.33 1.1.55 2.04 1.38 2.72 2.4.52.77.52 1.77 0 2.54ZM17 15.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M13 15h4"
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
      d="M22 8v8.19c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V8.01L22 8Z"
      fill={color}
    ></Path>
    <Path
      d="M9 17.75c-.11 0-.23-.03-.33-.08-.77-.39-1.43-.97-1.91-1.69-.4-.6-.4-1.37 0-1.97a4.91 4.91 0 0 1 1.91-1.68c.37-.19.82-.03 1.01.34.19.37.04.82-.34 1.01-.54.27-1 .68-1.33 1.18a.29.29 0 0 0 0 .31c.33.5.79.91 1.33 1.18.37.19.52.64.34 1.01-.14.24-.41.39-.68.39ZM15.21 17.75c-.28 0-.54-.15-.67-.41a.745.745 0 0 1 .34-1.01c.54-.27 1-.68 1.33-1.18a.29.29 0 0 0 0-.31c-.33-.5-.79-.91-1.33-1.18a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34.77.39 1.43.97 1.91 1.69.4.6.4 1.37 0 1.97a4.91 4.91 0 0 1-1.91 1.68.66.66 0 0 1-.34.1ZM22 7.81V8L2 8.01v-.2C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14M13 15h4"
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
      d="M9 17.75c-.11 0-.23-.03-.33-.08-.77-.39-1.43-.97-1.91-1.69-.4-.6-.4-1.37 0-1.97a4.91 4.91 0 0 1 1.91-1.68c.37-.19.82-.03 1.01.34.19.37.04.82-.34 1.01-.54.27-1 .68-1.33 1.18a.29.29 0 0 0 0 .31c.33.5.79.91 1.33 1.18.37.19.52.64.34 1.01-.14.24-.41.39-.68.39ZM15.21 17.75c-.28 0-.54-.15-.67-.41a.745.745 0 0 1 .34-1.01c.54-.27 1-.68 1.33-1.18a.29.29 0 0 0 0-.31c-.33-.5-.79-.91-1.33-1.18a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34.77.39 1.43.97 1.91 1.69.4.6.4 1.37 0 1.97a4.91 4.91 0 0 1-1.91 1.68.66.66 0 0 1-.34.1Z"
      fill={color}
    ></Path>
    <Path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
    <Path
      d="M2.23 8.76a.749.749 0 1 1 0-1.5l19.22-.01a.749.749 0 1 1 0 1.5l-19.22.01Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14M13 15h4"
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

const Code1 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Code1.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Code1.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Code1.displayName = 'Code1';

export default Code1;
