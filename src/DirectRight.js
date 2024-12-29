import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="m2.71 17.02 1.74-3.48c.48-.97.48-2.1 0-3.07L2.71 6.98C1.22 4 4.43.85 7.38 2.41l1.54.82c.22.11.39.29.48.51l5.69 12.65c.23.52.02 1.13-.48 1.39l-7.24 3.81C4.43 23.15 1.22 20 2.71 17.02ZM16.31 15.6l-3.73-8.28c-.42-.93.58-1.87 1.48-1.39l5.77 3.04c2.45 1.29 2.45 4.79 0 6.08l-2.04 1.07c-.55.28-1.22.05-1.48-.52Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M7.698 3.071c-2.75-1.45-5.74 1.48-4.35 4.26l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66l-6.97-3.67"
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
      d="m2.71 17.02 1.74-3.48c.48-.97.48-2.1 0-3.07L2.71 6.98C1.22 4 4.43.85 7.38 2.41l1.54.82c.22.11.39.29.48.51l5.69 12.65c.23.52.02 1.13-.48 1.39l-7.24 3.81C4.43 23.15 1.22 20 2.71 17.02Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="m16.31 15.6-3.73-8.28c-.42-.93.58-1.87 1.48-1.39l5.77 3.04c2.45 1.29 2.45 4.79 0 6.08l-2.04 1.07c-.55.28-1.22.05-1.48-.52Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M19.29 9.17 7.7 3.07C4.95 1.62 1.96 4.55 3.35 7.33l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66Z"
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
      d="M6.189 22.062c-1 0-1.97-.39-2.74-1.14-1.25-1.22-1.55-3.02-.77-4.58l1.62-3.24c.34-.68.34-1.5 0-2.19l-1.62-3.25c-.78-1.56-.48-3.36.77-4.58 1.25-1.22 3.05-1.49 4.6-.67l11.59 6.1a3.93 3.93 0 0 1 2.11 3.49c0 1.47-.81 2.81-2.11 3.49l-11.59 6.1c-.6.32-1.23.47-1.86.47Zm.01-18.62c-.69 0-1.29.32-1.7.72-.62.6-1.06 1.67-.48 2.84l1.62 3.24c.55 1.11.55 2.42 0 3.53l-1.62 3.24c-.59 1.17-.14 2.24.48 2.84.62.6 1.69 1.03 2.85.42l11.59-6.1c.82-.43 1.31-1.24 1.31-2.16 0-.92-.49-1.73-1.31-2.16l-11.59-6.12c-.4-.21-.79-.29-1.15-.29Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{strokeWidth}"
      d="M19.29 9.17L7.7 3.07C4.95 1.62 1.96 4.55 3.35 7.33l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66z"
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

const DirectRight = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
DirectRight.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
DirectRight.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
DirectRight.displayName = 'DirectRight';

export default DirectRight;
