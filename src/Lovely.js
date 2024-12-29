import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M18.8 9.91c-1.13 0-2.14.55-2.77 1.39a3.466 3.466 0 0 0-2.77-1.39c-1.91 0-3.46 1.56-3.46 3.48 0 .74.12 1.43.32 2.06.98 3.11 4.02 4.98 5.52 5.49.21.07.56.07.77 0 1.5-.51 4.54-2.37 5.52-5.49.21-.64.32-1.32.32-2.06a3.457 3.457 0 0 0-3.45-3.48Z"
      fill={color}
    ></Path>
    <Path
      d="M20.75 8.342c0 .23-.23.38-.45.32a4.81 4.81 0 0 0-3.95.74c-.22.16-.52.16-.73 0a4.65 4.65 0 0 0-2.76-.9c-2.58 0-4.68 2.11-4.68 4.71 0 2.82 1.35 4.93 2.71 6.34.07.07.01.19-.08.15C8.08 18.772 2 14.912 2 8.342c0-2.9 2.33-5.24 5.21-5.24 1.71 0 3.22.82 4.17 2.09a5.218 5.218 0 0 1 4.17-2.09c2.87 0 5.2 2.34 5.2 5.24Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M6.96 3.102c1.63 0 3.07.78 3.97 1.99a4.957 4.957 0 0 1 3.97-1.99c2.74 0 4.96 2.23 4.96 4.99 0 .42-.03.83-.08 1.22a3.714 3.714 0 0 0-4.46 1.18c-.68-.9-1.76-1.49-2.98-1.49-2.05 0-3.71 1.67-3.71 3.74 0 2.68 1.42 4.73 3 6.12-.05.03-.1.04-.15.06-.3.11-.8.11-1.1 0C7.79 18.032 2 14.352 2 8.092c0-1.17.4-2.25 1.07-3.1"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 12.74c0 4.68-4.33 7.44-6.27 8.1-.23.08-.6.08-.83 0-.83-.28-2.1-.95-3.27-1.98-1.58-1.39-3-3.44-3-6.12 0-2.07 1.66-3.74 3.71-3.74 1.22 0 2.3.59 2.98 1.49a3.714 3.714 0 0 1 4.46-1.18"
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
      d="M19.86 8.092c0 .15 0 .3-.01.44-1.53-.57-3.33-.22-4.53.86a4.43 4.43 0 0 0-2.98-1.14c-2.46 0-4.46 2.01-4.46 4.49 0 2.83 1.42 4.9 2.78 6.24-.11-.01-.2-.03-.28-.06C7.79 18.032 2 14.352 2 8.092c0-2.76 2.22-4.99 4.96-4.99 1.63 0 3.07.78 3.97 1.99a4.957 4.957 0 0 1 3.97-1.99c2.74 0 4.96 2.23 4.96 4.99Z"
      fill={color}
    ></Path>
    <Path
      d="M18 9.59c-1.07 0-2.04.52-2.64 1.32-.6-.8-1.56-1.32-2.64-1.32-1.82 0-3.3 1.48-3.3 3.32 0 .71.11 1.36.31 1.96.94 2.97 3.83 4.74 5.26 5.23.2.07.53.07.74 0 1.43-.49 4.32-2.26 5.26-5.23.2-.61.31-1.26.31-1.96 0-1.84-1.48-3.32-3.3-3.32Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M19.86 8.09c0 .42-.03.83-.08 1.22a3.714 3.714 0 0 0-4.46 1.18A3.73 3.73 0 0 0 12.34 9c-2.05 0-3.71 1.67-3.71 3.74 0 2.68 1.42 4.73 3 6.12-.05.03-.1.04-.15.06-.3.11-.8.11-1.1 0C7.79 18.03 2 14.35 2 8.09 2 5.33 4.22 3.1 6.96 3.1c1.63 0 3.07.78 3.97 1.99A4.957 4.957 0 0 1 14.9 3.1c2.74 0 4.96 2.23 4.96 4.99Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 12.74c0 4.68-4.33 7.44-6.27 8.1-.23.08-.6.08-.83 0-.83-.28-2.1-.95-3.27-1.98-1.58-1.39-3-3.44-3-6.12 0-2.07 1.66-3.74 3.71-3.74 1.22 0 2.3.59 2.98 1.49a3.714 3.714 0 0 1 4.46-1.18c1.31.58 2.22 1.89 2.22 3.43Z"
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
      d="M10.92 19.752c-.29 0-.57-.04-.8-.13-3.42-1.17-8.87-5.35-8.87-11.53 0-3.17 2.56-5.74 5.71-5.74 1.51 0 2.92.58 3.97 1.61a5.655 5.655 0 0 1 3.97-1.61c3.15 0 5.71 2.57 5.71 5.74 0 .43-.03.87-.09 1.32a.78.78 0 0 1-.37.56c-.2.12-.45.13-.67.04-1.23-.53-2.76-.13-3.56.94-.14.19-.41.29-.6.3-.24 0-.46-.11-.6-.3a2.95 2.95 0 0 0-2.38-1.19c-1.63 0-2.96 1.34-2.96 2.99 0 2.6 1.49 4.45 2.75 5.56.18.16.27.39.25.63-.02.24-.15.45-.36.58-.11.06-.2.1-.25.11-.26.08-.55.12-.85.12Zm-3.96-15.9c-2.32 0-4.21 1.9-4.21 4.24 0 5.23 4.35 8.45 6.85 9.69-.95-1.27-1.73-2.95-1.73-5.04 0-2.48 2-4.49 4.46-4.49 1.12 0 2.17.41 2.98 1.14a4.54 4.54 0 0 1 3.79-1.06v-.23c0-2.34-1.89-4.24-4.21-4.24-1.33 0-2.56.62-3.37 1.69-.14.19-.36.3-.6.3s-.46-.11-.6-.3a4.127 4.127 0 0 0-3.36-1.7Z"
      fill={color}
    ></Path>
    <Path
      d="M15.32 21.65c-.23 0-.47-.03-.66-.1-.86-.29-2.25-1-3.52-2.13-1.48-1.31-3.25-3.53-3.25-6.68 0-2.48 2-4.49 4.46-4.49 1.12 0 2.17.41 2.98 1.14 1.26-1.13 3.18-1.45 4.76-.76 1.62.72 2.67 2.34 2.67 4.12 0 4.74-4.16 7.92-6.78 8.81-.2.06-.43.09-.66.09Zm-2.98-11.9c-1.63 0-2.96 1.34-2.96 2.99 0 2.6 1.49 4.45 2.75 5.56 1.11.98 2.28 1.59 3.01 1.83.08.03.27.03.34 0 1.5-.51 5.77-2.96 5.77-7.39 0-1.19-.7-2.27-1.77-2.74-1.21-.53-2.76-.13-3.56.94-.14.19-.41.29-.6.3-.24 0-.46-.11-.6-.3a2.95 2.95 0 0 0-2.38-1.19Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M19.86 8.092c0 .42-.03.83-.08 1.22a3.714 3.714 0 0 0-4.46 1.18c-.68-.9-1.76-1.49-2.98-1.49-2.05 0-3.71 1.67-3.71 3.74 0 2.68 1.42 4.73 3 6.12-.05.03-.1.04-.15.06-.3.11-.8.11-1.1 0C7.79 18.032 2 14.352 2 8.092c0-2.76 2.22-4.99 4.96-4.99 1.63 0 3.07.78 3.97 1.99a4.957 4.957 0 0 1 3.97-1.99c2.74 0 4.96 2.23 4.96 4.99Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 12.74c0 4.68-4.33 7.44-6.27 8.1-.23.08-.6.08-.83 0-.83-.28-2.1-.95-3.27-1.98-1.58-1.39-3-3.44-3-6.12 0-2.07 1.66-3.74 3.71-3.74 1.22 0 2.3.59 2.98 1.49a3.714 3.714 0 0 1 4.46-1.18c1.31.58 2.22 1.89 2.22 3.43Z"
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

const Lovely = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Lovely.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Lovely.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Lovely.displayName = 'Lovely';

export default Lovely;
