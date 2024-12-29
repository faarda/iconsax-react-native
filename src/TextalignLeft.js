import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.47 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.47 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M10.05 4.5H21M3 4.5h2.98M3 9.5h9.47M3 14.5h18M3 19.5h9.47"
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
      d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M12.47 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
    <Path
      d="M21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M12.47 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M3 4.5h18M3 9.5h9.47M3 14.5h18M3 19.5h9.47"
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
      d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.47 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.47 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M3 4.5h18"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M3 9.5h9.47"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M3 14.5h18"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M3 19.5h9.47"
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

const TextalignLeft = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
TextalignLeft.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
TextalignLeft.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
TextalignLeft.displayName = 'TextalignLeft';

export default TextalignLeft;