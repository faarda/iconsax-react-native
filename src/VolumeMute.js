import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M17.52 3.782c-1.12-.62-2.55-.46-4.01.45l-2.92 1.83c-.2.12-.43.19-.66.19H8.5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H9.93c.23 0 .46.07.66.19l2.92 1.83c.88.55 1.74.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63v-9.18c0-1.72-.62-3.01-1.73-3.63Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M18.5 7.412c0-2.98-2.07-4.12-4.59-2.54l-2.92 1.83c-.32.19-.69.3-1.06.3H8.5c-2 0-3 1-3 3v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-4.9"
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
      d="M19.25 7.412v9.18c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37c-.8 0-1.66-.27-2.54-.82l-2.92-1.83c-.2-.12-.43-.19-.66-.19H9v-11.5h.93c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.89-1.07 4.01-.45 1.11.62 1.73 1.91 1.73 3.63Z"
      fill={color}
    ></Path>
    <Path
      d="M9 6.25v11.5h-.5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75H9Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M5.5 10v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L10.99 6.7c-.32.19-.69.3-1.06.3H8.5c-2 0-3 1-3 3Z"
      stroke={color}
      strokeWidth={strokeWidth}
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M16.05 20.589c-.79 0-1.66-.28-2.53-.83l-2.92-1.83c-.2-.12-.43-.19-.66-.19H8.5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h1.43c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.88-1.08 4-.46 1.12.62 1.73 1.91 1.73 3.64v9.17c0 1.72-.62 3.02-1.73 3.64-.44.26-.94.38-1.46.38ZM8.5 7.749c-1.58 0-2.25.67-2.25 2.25v4c0 1.58.67 2.25 2.25 2.25h1.43c.52 0 1.02.14 1.46.42l2.92 1.83c.97.6 1.87.76 2.48.42.61-.34.96-1.19.96-2.32v-9.19c0-1.14-.35-1.99-.96-2.32-.61-.34-1.51-.19-2.48.42l-2.92 1.83c-.44.27-.94.42-1.46.42H8.5v-.01Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M5.5 10.002v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54v-9.18c0-2.98-2.07-4.12-4.59-2.54l-2.92 1.83c-.32.19-.69.3-1.06.3H8.5c-2 0-3 1-3 3Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
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

const VolumeMute = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
VolumeMute.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
VolumeMute.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
VolumeMute.displayName = 'VolumeMute';

export default VolumeMute;
