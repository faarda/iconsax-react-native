import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="m13.3 8.11 1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46L17 16.26c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33c-.41-.24-1.07-.24-1.48 0L9.01 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36L5.14 14.4c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.44 1.89-1.44 2.6-.01ZM6 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM18 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M16.06 21.912c-.31-.04-.67-.17-1.07-.41l-2.24-1.33c-.41-.24-1.07-.24-1.48 0l-2.24 1.33c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.72-1.43 1.89-1.43 2.6 0l1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46l-1.86 1.86c-.31.31-.49.92-.39 1.36M6 9V2M18 9V2M12 4V2"
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
      d="m13.3 8.112 1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46L17 16.252c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33c-.41-.24-1.07-.24-1.48 0l-2.24 1.33c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.43 1.89-1.43 2.6 0Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M6 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM18 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="m13.3 8.11 1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46L17 16.25c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33c-.41-.24-1.07-.24-1.48 0L9.02 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.43 1.89-1.43 2.6 0ZM6 9V2M18 9V2M12 4V2"
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
      d="M16.24 22.67c-.43 0-.97-.13-1.64-.53l-2.24-1.33c-.17-.1-.55-.1-.72 0L9.4 22.14c-1.42.84-2.28.49-2.66.21-.38-.28-.98-1-.61-2.6l.53-2.31c.04-.18-.06-.52-.19-.66l-1.86-1.86c-1-1-.92-1.87-.78-2.31.14-.44.58-1.19 1.97-1.43l2.39-.4c.17-.03.44-.23.51-.38l1.32-2.64c.65-1.29 1.51-1.49 1.97-1.49.46 0 1.32.19 1.97 1.49l1.32 2.64c.08.15.35.35.51.38l2.39.4c1.39.23 1.83.99 1.97 1.43.14.44.22 1.31-.78 2.31l-1.86 1.86c-.13.13-.23.48-.19.66l.53 2.3c.37 1.61-.22 2.32-.61 2.6-.18.16-.52.33-1 .33ZM12 19.24c.4 0 .8.09 1.12.28l2.24 1.33c.59.35.94.35 1.01.29.08-.06.18-.39.03-1.05l-.53-2.3c-.16-.68.1-1.56.59-2.05l1.86-1.86c.37-.37.45-.66.41-.79-.04-.13-.27-.32-.79-.4l-2.39-.4c-.64-.11-1.32-.61-1.61-1.19l-1.32-2.64c-.23-.45-.48-.66-.63-.66-.15 0-.4.2-.63.66l-1.32 2.64c-.29.58-.97 1.08-1.61 1.19l-2.39.4c-.52.09-.75.27-.79.4-.04.13.04.42.41.79l1.86 1.86c.49.49.75 1.38.59 2.05l-.53 2.31c-.15.67-.05 1 .03 1.05.08.06.43.06 1.01-.29l2.24-1.33c.34-.19.74-.29 1.14-.29ZM6 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM18 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="m13.3 8.112 1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46L17 16.252c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33c-.41-.24-1.07-.24-1.48 0l-2.24 1.33c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.43 1.89-1.43 2.6 0Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M6 9V2M18 9V2M12 4V2"
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

const Ranking = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Ranking.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Ranking.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Ranking.displayName = 'Ranking';

export default Ranking;
