import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M17.9 19.679a9.41 9.41 0 01-6.48 2.32c-5.17-.14-9.2-4.59-9.2-9.76v-7.03c0-.45.54-.67.85-.35l14.83 14.82zM6.22 4.3A9.332 9.332 0 0112.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96c0 .45-.54.67-.85.35L6.22 4.3z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2.22 6.98V5.2c0-.45.54-.67.85-.35L17.9 19.68A9.41 9.41 0 0 1 11.42 22c-5.17-.14-9.2-4.59-9.2-9.76v-1.16M6.22 4.3A9.332 9.332 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96c0 .45-.54.67-.85.35L6.22 4.3Z"
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
      d="M17.9 19.679a9.41 9.41 0 0 1-6.48 2.32c-5.17-.14-9.2-4.59-9.2-9.76v-7.03c0-.45.54-.67.85-.35l14.83 14.82Z"
      fill={color}
    ></Path>
    <Path
      d="M6.22 4.3A9.332 9.332 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96c0 .45-.54.67-.85.35L6.22 4.3Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M17.9 19.7c-1.7 1.5-4 2.4-6.5 2.3-5.2-.1-9.2-4.6-9.2-9.8v-7c0-.4.5-.7.9-.4l14.8 14.9ZM6.2 4.3c1.7-1.5 4-2.4 6.4-2.3 5.1.1 9.1 4.5 9.1 9.7v7c0 .4-.5.7-.9.4L6.2 4.3Z"
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
      d="M11.7 22.75h-.29c-5.48-.15-9.93-4.87-9.93-10.51V5.21c0-.51.3-.96.77-1.15.47-.19 1-.09 1.36.27l14.83 14.83a.754.754 0 0 1-.04 1.1 10.214 10.214 0 0 1-6.7 2.49ZM2.98 5.81v6.43c0 4.84 3.8 8.88 8.47 9.01 1.93.04 3.8-.52 5.33-1.63L2.98 5.81ZM21.27 19.901c-.32 0-.64-.13-.88-.37l-14.7-14.7a.754.754 0 0 1 .04-1.1c1.91-1.67 4.38-2.56 6.94-2.48 5.43.15 9.85 4.83 9.85 10.43v6.96c0 .51-.3.96-.77 1.15-.15.07-.31.11-.48.11ZM7.35 4.371l13.68 13.68v-6.36c0-4.79-3.77-8.8-8.4-8.93-1.91-.04-3.76.51-5.28 1.61Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M17.9 19.679a9.41 9.41 0 0 1-6.48 2.32c-5.17-.14-9.2-4.59-9.2-9.76v-7.03c0-.45.54-.67.85-.35l14.83 14.82Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M6.22 4.3A9.332 9.332 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96c0 .45-.54.67-.85.35L6.22 4.3Z"
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

const Ontology = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Ontology.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Ontology.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Ontology.displayName = 'Ontology';

export default Ontology;
