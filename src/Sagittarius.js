import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M21.69 2.71a.782.782 0 0 0-.41-.41.868.868 0 0 0-.28-.05h-9c-.41 0-.75.34-.75.75s.34.75.75.75h7.19L2.47 20.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L20.25 4.81V12c0 .41.34.75.75.75s.75-.34.75-.75V3c0-.1-.02-.19-.06-.29Z"
      fill={color}
    ></Path>
    <Path
      d="M17.4 18.15c-.19 0-.38-.07-.53-.22L6.07 7.13a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l10.8 10.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M12 3h9v9M8.03 15.969 3 20.999M21 3 10.91 13.09M6.6 6.602l10.8 10.8"
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
      d="M21.69 2.708a.783.783 0 0 0-.41-.41.717.717 0 0 0-.29-.06h-9c-.41 0-.75.34-.75.75s.34.75.75.75h7.19L2.46 20.458c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l16.72-16.72v7.2c0 .41.34.75.75.75s.75-.34.75-.75v-9c.01-.1-.01-.19-.05-.29Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M17.4 18.15c-.19 0-.38-.071-.53-.221l-10.8-10.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l10.799 10.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M12 3h9v9M21 3 3 21M6.6 6.6l10.8 10.8"
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
      d="M21 12.75c-.41 0-.75-.34-.75-.75V3.75H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75v9c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M3 21.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l18-18c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-18 18c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
    <Path
      d="M17.4 18.15c-.19 0-.38-.071-.53-.221l-10.8-10.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l10.799 10.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M12 3h9v9M21 3 3 21"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m6.6 6.602 10.8 10.8"
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

const Sagittarius = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Sagittarius.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Sagittarius.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Sagittarius.displayName = 'Sagittarius';

export default Sagittarius;
