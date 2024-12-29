import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M14.3 10.129c.28 1.1-.21 2.12-1.05 2.64v1.98a1.25 1.25 0 01-2.5 0v-1.98a2.373 2.373 0 01-1.13-2.02c0-1.52 1.44-2.7 3.02-2.28.8.21 1.45.86 1.66 1.66z"
    ></Path>
    <Path
      fill={color}
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25c4.74 0 8.86 3.04 10.27 7.55.12.4-.1.82-.49.94-.4.12-.82-.1-.94-.49a9.205 9.205 0 00-8.83-6.5c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25a9.2 9.2 0 008.82-6.47c.12-.4.54-.61.94-.49.4.12.61.55.49.94-1.42 4.5-5.54 7.52-10.26 7.52z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M12.64 8.469c.8.21 1.45.86 1.65 1.66.28 1.1-.21 2.12-1.05 2.64v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.373 2.373 0 0 1-1.13-2.02"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M21.55 9.03C20.28 4.96 16.49 2 12 2 7.89 2 4.36 4.48 2.82 8.02A9.94 9.94 0 0 0 2 12c0 5.52 4.48 10 10 10 4.47 0 8.26-2.94 9.54-6.99"
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
      d="M14.3 10.129c.28 1.1-.21 2.12-1.05 2.64v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.373 2.373 0 0 1-1.13-2.02c0-1.52 1.44-2.7 3.02-2.28.8.21 1.45.86 1.66 1.66Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25c4.74 0 8.86 3.04 10.27 7.55.12.4-.1.82-.49.94-.4.12-.82-.1-.94-.49a9.205 9.205 0 0 0-8.83-6.5c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25a9.2 9.2 0 0 0 8.82-6.47c.12-.4.54-.61.94-.49.4.12.61.55.49.94-1.42 4.5-5.54 7.52-10.26 7.52Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M14.3 10.1c.3 1.1-.2 2.1-1 2.6v2c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2v-2c-.7-.4-1.1-1.2-1.1-2 0-1.5 1.4-2.7 3-2.3.6.3 1.3.9 1.5 1.7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M21.6 9c-1.3-4-5.1-7-9.6-7C6.5 2 2 6.5 2 12s4.5 10 10 10c4.5 0 8.3-2.9 9.5-7"
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
      d="M12 16.75c-1.1 0-2-.9-2-2v-1.6a3.112 3.112 0 0 1 .09-4.87c.78-.6 1.78-.8 2.75-.54 1.06.28 1.92 1.14 2.19 2.2.31 1.21-.1 2.45-1.03 3.21v1.6c0 1.1-.9 2-2 2Zm0-7.62a1.626 1.626 0 0 0-1.62 1.62c0 .57.29 1.08.77 1.38l.36.22v2.4c0 .28.22.5.5.5s.5-.22.5-.5v-2.4l.36-.22c.62-.38.9-1.1.72-1.82a1.62 1.62 0 0 0-1.12-1.12c-.17-.04-.32-.06-.47-.06Z"
      fill={color}
    ></Path>
    <Path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25c4.74 0 8.86 3.04 10.27 7.55.12.4-.1.82-.49.94-.4.12-.82-.1-.94-.49a9.205 9.205 0 0 0-8.83-6.5c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25a9.2 9.2 0 0 0 8.82-6.47c.12-.4.54-.61.94-.49.4.12.61.55.49.94-1.42 4.5-5.54 7.52-10.26 7.52Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M14.3 10.129c.28 1.1-.21 2.12-1.05 2.64v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.373 2.373 0 0 1-1.13-2.02c0-1.52 1.44-2.7 3.02-2.28.8.21 1.45.86 1.66 1.66Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M21.55 9.03C20.28 4.96 16.49 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c4.47 0 8.26-2.94 9.54-6.99"
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

const Civic = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Civic.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Civic.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Civic.displayName = 'Civic';

export default Civic;
