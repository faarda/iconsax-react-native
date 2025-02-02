import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M11.32 3H5.09C3.1 3 2.1 4.01 2.1 6.02V22h5.4v-3.75a.749.749 0 1 1 1.5 0V22h5.3V6.02c0-2.01-.99-3.02-2.98-3.02Zm-.57 9.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M23 21.251h-2.27v-3c.95-.31 1.64-1.2 1.64-2.25v-2c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v2c0 1.04.68 1.92 1.61 2.24v3.01H1c-.41 0-.75.34-.75.75s.34.75.75.75h18.93c.02 0 .03.01.05.01.02 0 .03-.01.05-.01H23c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M1 22h22M19.78 22.01v-4.46M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2ZM2.1 6.02C2.1 4.01 3.1 3 5.09 3h6.23c1.99 0 2.98 1.01 2.98 3.02V22M2.1 22.002v-11.99M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75"
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
      opacity=".4"
      d="M2.1 22.002V6.032c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02v15.97"
      fill={color}
    ></Path>
    <Path
      d="M10.75 9H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75ZM10.75 12.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.25 22.75c-.41 0-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M23 21.251h-2.27v-3c.95-.31 1.64-1.2 1.64-2.25v-2c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v2c0 1.04.68 1.92 1.61 2.24v3.01H1c-.41 0-.75.34-.75.75s.34.75.75.75h18.93c.02 0 .03.01.05.01.02 0 .03-.01.05-.01H23c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M1 22h22M19.78 22.01v-4.46M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2ZM2.1 22V6.03c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02V22M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75"
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
      d="M23 22.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M19.781 22.76c-.41 0-.75-.34-.75-.75v-4.46c0-.41.34-.75.75-.75s.75.34.75.75v4.46c0 .41-.33.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M19.8 18.299c-1.63 0-2.95-1.32-2.95-2.95v-2.27a2.949 2.949 0 1 1 5.9 0v2.27c0 1.63-1.32 2.95-2.95 2.95Zm0-6.66c-.8 0-1.45.65-1.45 1.45v2.27a1.451 1.451 0 0 0 2.9 0v-2.27c0-.8-.65-1.45-1.45-1.45ZM14.3 22.752c-.41 0-.75-.34-.75-.75V6.032c0-1.59-.67-2.27-2.23-2.27H5.09c-1.57 0-2.25.68-2.25 2.27v15.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.032c0-2.43 1.33-3.77 3.75-3.77h6.23c2.41 0 3.73 1.34 3.73 3.77v15.97c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M10.75 9H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75ZM10.75 12.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75ZM8.25 22.75c-.41 0-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M1 22h22"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M19.78 22.01v-4.46"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2ZM2.1 22.002V6.032c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02v15.97"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75"
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

const Building4 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Building4.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Building4.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Building4.displayName = 'Building4';

export default Building4;
