import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM8.99 14.12c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06a3.621 3.621 0 1 1-2.39-6.34c.88 0 1.72.32 2.39.9.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.14 2.14 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24Zm7 0c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06a3.621 3.621 0 1 1-2.39-6.34c.88 0 1.72.32 2.39.9.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M10.88 14.149c-.51.44-1.17.72-1.89.72a2.87 2.87 0 0 1-2.87-2.87c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72M17.88 14.149c-.51.44-1.17.72-1.89.72a2.87 2.87 0 0 1-2.87-2.87c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72"
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
      d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z"
      fill={color}
    ></Path>
    <Path
      d="M8.99 15.619c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06c-.67.58-1.52.9-2.39.9ZM15.99 15.619c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06c-.67.58-1.52.9-2.39.9Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.88 14.15c-.51.44-1.17.72-1.89.72A2.87 2.87 0 0 1 6.12 12c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72M17.88 14.15c-.51.44-1.17.72-1.89.72A2.87 2.87 0 0 1 13.12 12c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72"
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
    <Path
      d="M8.991 15.619c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.78-.24 1.06.07.27.31.24.79-.07 1.06-.67.58-1.52.9-2.39.9ZM15.991 15.619c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.78-.24 1.06.07.27.31.24.79-.07 1.06-.67.58-1.52.9-2.39.9Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M10.88 14.149c-.51.44-1.17.72-1.89.72a2.87 2.87 0 0 1-2.87-2.87c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72M17.88 14.149c-.51.44-1.17.72-1.89.72a2.87 2.87 0 0 1-2.87-2.87c0-1.59 1.28-2.87 2.87-2.87.73 0 1.39.27 1.89.72"
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

const CreativeCommons = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
CreativeCommons.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
CreativeCommons.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
CreativeCommons.displayName = 'CreativeCommons';

export default CreativeCommons;
