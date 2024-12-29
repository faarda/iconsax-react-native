import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM8.65 14.77c-.11.3-.4.49-.7.49-.09 0-.17-.01-.26-.05-.81-.3-1.49-.89-1.92-1.66-1-1.8-.38-4.15 1.37-5.24l2.34-1.45c.86-.53 1.87-.69 2.83-.44.96.25 1.77.88 2.26 1.76 1 1.8.38 4.15-1.37 5.24l-.26.19a.76.76 0 0 1-1.05-.17.76.76 0 0 1 .17-1.05l.31-.22c1.12-.7 1.5-2.15.89-3.26-.29-.52-.76-.89-1.32-1.04-.56-.15-1.15-.06-1.66.26L7.92 9.59c-1.08.67-1.46 2.12-.85 3.24.25.45.65.8 1.13.98.39.14.59.57.45.96Zm8.27.88-2.34 1.45a3.59 3.59 0 0 1-2.83.43c-.96-.25-1.77-.88-2.25-1.76-1-1.8-.38-4.15 1.37-5.24l.26-.19a.76.76 0 0 1 1.05.17c.24.34.16.81-.17 1.05l-.31.22c-1.12.7-1.5 2.15-.89 3.26.29.52.76.89 1.32 1.04.56.15 1.15.06 1.66-.26l2.34-1.45c1.08-.67 1.46-2.12.85-3.24-.25-.45-.65-.8-1.13-.98a.736.736 0 0 1-.44-.96.74.74 0 0 1 .96-.44c.81.3 1.49.89 1.92 1.66.99 1.8.38 4.15-1.37 5.24Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M7.939 14.51c-.62-.23-1.17-.68-1.52-1.32-.8-1.46-.31-3.36 1.11-4.24l2.34-1.45c1.41-.88 3.23-.4 4.03 1.05.8 1.46.31 3.36-1.11 4.24l-.31.22"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M16.11 9.45c.62.23 1.17.68 1.52 1.32.8 1.46.31 3.36-1.11 4.24l-2.34 1.45c-1.41.88-3.23.4-4.03-1.05-.8-1.46-.31-3.36 1.11-4.24l.31-.22"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      fill={color}
    ></Path>
    <Path
      d="M7.94 15.26c-.09 0-.17-.01-.26-.05-.81-.3-1.49-.89-1.92-1.66-1-1.8-.38-4.15 1.37-5.24l2.34-1.45c.86-.53 1.87-.69 2.83-.44.96.25 1.77.88 2.26 1.76 1 1.8.38 4.15-1.37 5.24l-.26.19a.76.76 0 0 1-1.05-.17.76.76 0 0 1 .17-1.05l.31-.22c1.12-.7 1.5-2.15.89-3.26-.29-.52-.76-.89-1.32-1.04-.56-.15-1.15-.06-1.66.26L7.93 9.58c-1.08.67-1.46 2.12-.85 3.24.25.45.65.8 1.13.98.39.14.59.57.44.96-.11.31-.4.5-.71.5Z"
      fill={color}
    ></Path>
    <Path
      d="M12.662 17.65c-.3 0-.61-.04-.91-.12-.96-.25-1.77-.88-2.25-1.76-1-1.8-.38-4.15 1.37-5.24l.26-.19a.76.76 0 0 1 1.05.17c.24.34.16.81-.17 1.05l-.31.22c-1.12.7-1.5 2.15-.89 3.26.29.52.76.89 1.32 1.04.56.15 1.15.06 1.66-.26l2.34-1.45c1.08-.67 1.46-2.12.85-3.24-.25-.45-.65-.8-1.13-.98a.736.736 0 0 1-.44-.96.74.74 0 0 1 .96-.44c.81.3 1.49.89 1.92 1.66 1 1.8.38 4.15-1.37 5.24l-2.34 1.45c-.59.36-1.25.55-1.92.55Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M7.94 14.51c-.62-.23-1.17-.68-1.52-1.32-.8-1.46-.31-3.36 1.11-4.24L9.87 7.5c1.41-.88 3.23-.4 4.03 1.05.8 1.46.31 3.36-1.11 4.24l-.31.22"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M16.11 9.45c.62.23 1.17.68 1.52 1.32.8 1.46.31 3.36-1.11 4.24l-2.34 1.45c-1.41.88-3.23.4-4.03-1.05-.8-1.46-.31-3.36 1.11-4.24l.31-.22"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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
      d="M7.94 15.26c-.09 0-.17-.01-.26-.05-.81-.3-1.49-.89-1.92-1.66-1-1.8-.38-4.15 1.37-5.24l2.34-1.45c.86-.53 1.87-.69 2.83-.44.96.25 1.77.88 2.26 1.76 1 1.8.38 4.15-1.37 5.24l-.26.19a.76.76 0 0 1-1.05-.17.76.76 0 0 1 .17-1.05l.31-.22c1.12-.7 1.5-2.15.89-3.26-.29-.52-.76-.89-1.32-1.04-.56-.15-1.15-.05-1.66.26L7.93 9.58c-1.08.67-1.46 2.12-.85 3.24.25.45.65.8 1.13.98.39.14.59.57.44.96-.11.31-.4.5-.71.5Z"
      fill={color}
    ></Path>
    <Path
      d="M12.662 17.65c-.3 0-.61-.04-.91-.12-.96-.25-1.77-.88-2.25-1.76-1-1.8-.38-4.15 1.37-5.24l.26-.19a.76.76 0 0 1 1.05.17c.24.34.16.81-.17 1.05l-.31.22c-1.12.7-1.5 2.15-.89 3.26.29.52.76.89 1.32 1.04.56.15 1.15.05 1.66-.26l2.34-1.45c1.08-.67 1.46-2.12.85-3.24-.25-.45-.65-.8-1.13-.98a.736.736 0 0 1-.44-.96c.14-.39.57-.59.96-.44.81.3 1.49.89 1.92 1.66 1 1.8.38 4.15-1.37 5.24l-2.34 1.45c-.59.36-1.25.55-1.92.55Z"
      fill={color}
    ></Path>
    <Path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M7.939 14.51c-.62-.23-1.17-.68-1.52-1.32-.8-1.46-.31-3.36 1.11-4.24l2.34-1.45c1.41-.88 3.23-.4 4.03 1.05.8 1.46.31 3.36-1.11 4.24l-.31.22"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M16.11 9.45c.62.23 1.17.68 1.52 1.32.8 1.46.31 3.36-1.11 4.24l-2.34 1.45c-1.41.88-3.23.4-4.03-1.05-.8-1.46-.31-3.36 1.11-4.24l.31-.22"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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

const LinkCircle = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
LinkCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
LinkCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
LinkCircle.displayName = 'LinkCircle';

export default LinkCircle;
