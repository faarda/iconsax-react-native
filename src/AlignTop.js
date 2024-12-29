import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M15.98 19.379h1.04c1.59 0 2.23-.6 2.23-2.12V5.379h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12ZM7.48 14.379h1.04c1.59 0 2.23-.61 2.23-2.12v-6.88h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12Z"
      fill={color}
    ></Path>
    <Path
      d="M21.25 6.119H2.75c-.41 0-.75-.33-.75-.74s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M19.26 5.102v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1v-11.8M10.76 5.102v6.8c0 1.5-.64 2.1-2.23 2.1M5.26 5.102v6.8M2 5h20"
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
      d="M15.98 19.379h1.04c1.59 0 2.23-.6 2.23-2.12V5.379h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M7.48 14.379h1.04c1.59 0 2.23-.61 2.23-2.12v-6.88h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12Z"
      fill={color}
    ></Path>
    <Path
      d="M21.25 6.119H2.75c-.41 0-.75-.33-.75-.74s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M19.26 5.1v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1V5.1M5.26 5.1v6.8c0 1.5.64 2.1 2.23 2.1h1.04c1.59 0 2.23-.6 2.23-2.1V5.1M2 5h20"
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
      d="M17.03 19.752h-1.04c-2.01 0-2.98-.93-2.98-2.85v-11.8c0-.41.34-.75.75-.75s.75.34.75.75v11.8c0 1.01.21 1.35 1.48 1.35h1.04c1.27 0 1.48-.34 1.48-1.35v-11.8c0-.41.34-.75.75-.75s.75.34.75.75v11.8c0 1.92-.97 2.85-2.98 2.85ZM8.53 14.752H7.49c-2.01 0-2.98-.93-2.98-2.85v-6.8c0-.41.34-.75.75-.75s.75.34.75.75v6.8c0 1.01.21 1.35 1.48 1.35h1.04c1.27 0 1.48-.34 1.48-1.35v-6.8c0-.41.34-.75.75-.75s.75.34.75.75v6.8c0 1.92-.97 2.85-2.98 2.85Z"
      fill={color}
    ></Path>
    <Path d="M22 5.75H2a.749.749 0 1 1 0-1.5h20a.749.749 0 1 1 0 1.5Z" fill={color}></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M19.26 5.102v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1v-11.8M5.26 5.102v6.8c0 1.5.64 2.1 2.23 2.1h1.04c1.59 0 2.23-.6 2.23-2.1v-6.8"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 5h20"
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

const AlignTop = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
AlignTop.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
AlignTop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
AlignTop.displayName = 'AlignTop';

export default AlignTop;
