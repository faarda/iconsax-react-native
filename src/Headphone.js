import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M2.75 18.65c-.41 0-.75-.34-.75-.75v-5.7c-.05-2.71.96-5.27 2.84-7.19 1.88-1.91 4.4-2.96 7.11-2.96C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.7c0-4.71-3.83-8.55-8.55-8.55-2.31 0-4.45.89-6.04 2.51-1.6 1.63-2.45 3.8-2.41 6.12v5.71c0 .42-.33.76-.75.76Z"
      fill={color}
    ></Path>
    <Path
      d="M5.94 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81ZM18.19 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 12.22C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57V16"
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
      d="M2.75 18.65c-.41 0-.75-.34-.75-.75v-5.7c-.05-2.71.96-5.27 2.84-7.19 1.88-1.91 4.4-2.96 7.11-2.96C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.7c0-4.71-3.83-8.55-8.55-8.55-2.31 0-4.45.89-6.04 2.51-1.6 1.63-2.45 3.8-2.41 6.12v5.71c0 .42-.33.76-.75.76Z"
      fill={color}
    ></Path>
    <Path
      d="M5.94 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81ZM18.19 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
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
      d="M5.57 22.7c-2.34 0-4.32-1.98-4.32-4.32v-6.16C1.2 9.3 2.28 6.55 4.3 4.49a10.65 10.65 0 0 1 7.65-3.19c5.96 0 10.8 4.85 10.8 10.8v6.16c0 2.38-1.94 4.32-4.32 4.32-2.34 0-4.32-1.98-4.32-4.32v-2.81c0-1.45 1.14-2.59 2.59-2.59s2.59 1.14 2.59 2.59v3.03c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.03c0-.68-.55-1.09-1.09-1.09-.68 0-1.09.55-1.09 1.09v2.81c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82V12.1c0-5.13-4.17-9.3-9.3-9.3-2.51 0-4.84.97-6.58 2.74C3.63 7.31 2.7 9.68 2.75 12.2v6.18c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-2.81c0-.68-.55-1.09-1.09-1.09-.68 0-1.09.55-1.09 1.09v2.92c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.92c0-1.45 1.14-2.59 2.59-2.59s2.59 1.14 2.59 2.59v2.81c0 2.34-1.98 4.32-4.32 4.32Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
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

const Headphone = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Headphone.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Headphone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Headphone.displayName = 'Headphone';

export default Headphone;
