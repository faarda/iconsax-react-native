import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M18.328 5.67 6.588 17.41c-.44.44-1.18.38-1.54-.14-1.24-1.81-1.97-3.95-1.97-6.15V6.73c0-.82.62-1.75 1.38-2.06l5.57-2.28a5.12 5.12 0 0 1 3.92 0l4.05 1.65c.66.27.83 1.13.33 1.63ZM19.27 7.042c.65-.55 1.64-.08 1.64.77v3.31c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.03 0a11.3 11.3 0 0 1-3.87-1.95c-.48-.37-.53-1.07-.11-1.5 2.18-2.23 8.56-8.73 11.77-11.44Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M3.09 6.61c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06V11c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0C6.65 20.47 3.1 15.89 3.1 11"
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
      d="M18.328 5.67 6.588 17.41c-.44.44-1.18.38-1.54-.14-1.24-1.81-1.97-3.95-1.97-6.15V6.73c0-.82.62-1.75 1.38-2.06l5.57-2.28a5.12 5.12 0 0 1 3.92 0l4.04 1.65c.67.27.84 1.13.34 1.63Z"
      fill={color}
    ></Path>
    <Path
      d="M19.27 7.042c.65-.55 1.64-.08 1.64.77v3.31c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.03 0a11.3 11.3 0 0 1-3.87-1.95c-.48-.37-.53-1.07-.11-1.5 2.18-2.23 8.56-8.73 11.77-11.44Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39Z"
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
      d="M12 22.75c-.24 0-.48-.03-.71-.1-5.19-1.43-8.95-6.28-8.95-11.54V6.72c0-1.12.81-2.33 1.85-2.76l5.57-2.28a5.89 5.89 0 0 1 4.48 0l5.57 2.28c1.04.43 1.85 1.64 1.85 2.76v4.39c0 5.25-3.77 10.1-8.95 11.54-.23.07-.47.1-.71.1Zm0-20a4.4 4.4 0 0 0-1.67.33L4.76 5.36c-.48.2-.92.85-.92 1.37v4.39c0 4.59 3.3 8.83 7.85 10.09.2.06.42.06.62 0 4.55-1.26 7.85-5.5 7.85-10.09V6.73c0-.52-.44-1.17-.92-1.37l-5.57-2.28A4.4 4.4 0 0 0 12 2.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.04 2.39c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06v4.39c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81"
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

const Security = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Security.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Security.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Security.displayName = 'Security';

export default Security;
