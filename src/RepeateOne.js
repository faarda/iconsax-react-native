import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M3.91 17.181c-.19 0-.38-.07-.53-.22a7.244 7.244 0 0 1-2.13-5.13c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.94-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.15.14-.34.21-.53.21ZM10 21.75a.75.75 0 0 1-.52-.21L7.04 19.2a.76.76 0 0 1-.18-.82c.12-.28.4-.43.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z"
      fill={color}
    ></Path>
    <Path
      d="M12.248 15.42c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.755.755 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.12.48.39.48.71v5.35c0 .41-.34.74-.75.74Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M8.5 5.32C4.93 5.32 2 8.25 2 11.84c0 1.79.73 3.42 1.91 4.6M14 3l2.44 2.34-3.51-.01M9.999 20.999l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12.25 14.668v-5.34l-1.5 1.67"
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
      d="M3.91 17.181c-.19 0-.38-.07-.53-.22a7.244 7.244 0 0 1-2.13-5.13c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.95-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.14.14-.33.21-.52.21ZM10 21.75c-.19 0-.37-.07-.52-.21L7.04 19.2a.76.76 0 0 1-.18-.82c.12-.28.4-.43.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z"
      fill={color}
    ></Path>
    <Path
      d="M12.248 15.42c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.755.755 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .42-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="m14 3 2.44 2.34-7.95-.02c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6M10 21l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12.25 14.67V9.33L10.75 11"
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
      d="M3.91 17.181c-.19 0-.38-.07-.53-.22a7.244 7.244 0 0 1-2.13-5.13c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.95-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.14.14-.33.21-.52.21ZM10 21.75c-.19 0-.37-.07-.52-.21L7.04 19.2a.76.76 0 0 1-.18-.82c.11-.28.39-.47.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z"
      fill={color}
    ></Path>
    <Path
      d="M12.248 15.42c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.755.755 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .42-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="m13.998 3 2.44 2.34-7.95-.02c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6M9.999 20.999l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M12.25 14.668v-5.34l-1.5 1.67"
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

const RepeateOne = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
RepeateOne.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
RepeateOne.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
RepeateOne.displayName = 'RepeateOne';

export default RepeateOne;
