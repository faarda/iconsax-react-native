import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M6 2h12c1.1 0 2 .9 2 2v3.32c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2ZM4 10.32v1.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61v-1.56c0-.55-.45-1-1-1H5c-.55 0-1 .44-1 1Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M12.98 8.32H4V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v4.32h-3.07M4 11.88c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <Path d="M6 2h12c1.1 0 2 .9 2 2v4.32H4V4c0-1.1.9-2 2-2Z" fill={color}></Path>
    <Path
      opacity=".4"
      d="M4 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32H4Z"
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
      d="M6 2h12c1.1 0 2 .9 2 2v4.32H4V4c0-1.1.9-2 2-2zM4 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32H4z"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M20 9.07H4c-.41 0-.75-.34-.75-.75V4c0-1.52 1.23-2.75 2.75-2.75h12c1.52 0 2.75 1.23 2.75 2.75v4.32c0 .41-.34.75-.75.75ZM4.75 7.57h14.5V4c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v3.57Z"
      fill={color}
    ></Path>
    <Path
      d="M12.5 22.749h-1c-1.52 0-2.75-1.23-2.75-2.75v-2.1c0-.45-.24-.87-.64-1.09l-2.96-1.67a3.742 3.742 0 0 1-1.91-3.27v-3.56c0-.41.34-.75.75-.75h16c.41 0 .75.34.75.75v3.56c0 1.35-.73 2.6-1.91 3.27l-2.96 1.67c-.39.22-.64.64-.64 1.09v2.1a2.719 2.719 0 0 1-2.73 2.75ZM4.75 9.069v2.81c0 .81.44 1.56 1.14 1.96l2.96 1.67c.86.49 1.4 1.4 1.4 2.39v2.1c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-2.1c0-.99.54-1.91 1.4-2.39l2.96-1.67c.71-.4 1.14-1.15 1.14-1.96v-2.81H4.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M6 2h12c1.1 0 2 .9 2 2v4.32H4V4c0-1.1.9-2 2-2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4 8.32v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32H4Z"
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

const Brush = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Brush.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Brush.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Brush.displayName = 'Brush';

export default Brush;
