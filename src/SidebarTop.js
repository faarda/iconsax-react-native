import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22h19.95c-.08-1.23-.43-2.27-1.03-3.09ZM2 16.189c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.95.69 2.19 1.05 3.68 1.05h8.38c3.64 0 5.81-2.17 5.81-5.81v-7.47H2v7.47Zm6.91-1.75 2.56-2.56c.29-.29.77-.29 1.06 0l2.56 2.56c.15.15.22.34.22.53s-.07.38-.22.53c-.29.29-.77.29-1.06 0L12 13.479l-2.03 2.02c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M22 8.5H2M14.56 15.501 12 12.941l-2.56 2.56"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M1.97 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7"
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
      d="M7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-.2-.01-.4-.02-.59-.08-1.23-.43-2.27-1.03-3.09-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22c-.02.19-.03.39-.03.59v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.95.69 2.19 1.05 3.68 1.05Z"
      fill={color}
    ></Path>
    <Path
      d="M2 8.719h20v-.91c0-.2-.01-.4-.02-.59H2.03c-.02.19-.03.39-.03.59v.91ZM15.31 14.972c0-.19-.07-.38-.22-.53l-2.56-2.56a.754.754 0 0 0-1.06 0l-2.56 2.56c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l2.03-2.02 2.03 2.03c.29.29.77.29 1.06 0 .15-.15.22-.34.22-.54Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM22 8.5H2"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.56 15.5 12 12.94 9.44 15.5"
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
      d="M14.97 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.31 7.75-7.75 7.75Zm-6-20C4.36 2.75 2.72 4.39 2.72 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-6Z"
      fill={color}
    ></Path>
    <Path
      d="M22 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.56 16.249c-.19 0-.38-.07-.53-.22L12 13.999l-2.03 2.03c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.56-2.56c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M22 8.5H2M14.56 15.501 12 12.941l-2.56 2.56"
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

const SidebarTop = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
SidebarTop.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
SidebarTop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
SidebarTop.displayName = 'SidebarTop';

export default SidebarTop;