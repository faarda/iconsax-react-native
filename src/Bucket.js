import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M17.04 10.64 9.69 3.29l-.87-.87a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.87.87L3 9.98c-.64.64-.98 1.29-1 1.94-.02.69.32 1.38 1 2.07L7.01 18c1.34 1.33 2.68 1.33 4.01 0l6.02-6.02c.2-.2.29-.47.27-.73a.949.949 0 0 0-.27-.61ZM16 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.35 14.78a.7.7 0 0 0-1 0c-.31.34-1.85 2.07-1.85 3.39 0 1.3 1.05 2.35 2.35 2.35s2.35-1.05 2.35-2.35c0-1.31-1.54-3.05-1.85-3.39Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="m9.69 3.29 7.35 7.35c.37.37.37.97 0 1.34L11.02 18c-1.34 1.34-2.67 1.34-4.01 0L3 13.99c-1.34-1.34-1.34-2.67 0-4.01l4.31-4.31M8.35 1.95l1.34 1.34M2.07 11.922l15.12-.66M3 22h7M13 22h3"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M18.85 15S17 17.01 17 18.24c0 1.02.83 1.85 1.85 1.85s1.85-.83 1.85-1.85c0-1.23-1.85-3.24-1.85-3.24Z"
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
      d="M17.31 11.25c.02.26-.07.53-.27.73L11.02 18c-1.33 1.33-2.67 1.33-4.01 0L3 13.99c-.68-.69-1.02-1.38-1-2.07h.07l15.12-.66.12-.01Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M17.04 10.64 9.69 3.29l-.87-.87a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.87.87L3 9.98c-.64.64-.98 1.29-1 1.94h.07l15.12-.66.12-.01a.949.949 0 0 0-.27-.61Z"
      fill={color}
    ></Path>
    <Path
      d="M16 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.35 14.78a.7.7 0 0 0-1 0c-.31.34-1.85 2.08-1.85 3.39 0 1.3 1.05 2.35 2.35 2.35s2.35-1.05 2.35-2.35c0-1.31-1.54-3.05-1.85-3.39Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      d="M7.01 18L3 13.99c-1.34-1.34-1.34-2.67 0-4.01L9.68 3.3l7.35 7.35c.37.37.37.97 0 1.34l-6.02 6.02c-1.32 1.32-2.66 1.32-4-.01zM8.35 1.95l1.34 1.34M2.07 11.92l15.12-.66M3 22h13"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M18.85 15S17 17.01 17 18.24c0 1.02.83 1.85 1.85 1.85s1.85-.83 1.85-1.85c0-1.23-1.85-3.24-1.85-3.24z"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M9.02 19.751c-.86 0-1.72-.41-2.54-1.23l-4.01-4.01c-.81-.81-1.22-1.66-1.22-2.54 0-.87.41-1.73 1.22-2.54l6.68-6.68a.75.75 0 0 1 1.06 0l7.35 7.35c.32.32.5.74.5 1.2 0 .45-.18.88-.5 1.2l-6.02 6.02c-.8.82-1.66 1.23-2.52 1.23Zm.67-15.4-6.15 6.15c-.52.52-.78 1.02-.78 1.48 0 .46.26.96.78 1.47l4.01 4.01c1.05 1.05 1.9 1.05 2.95 0l6.02-6.02c.06-.06.07-.21 0-.28l-6.83-6.81Z"
      fill={color}
    ></Path>
    <Path
      d="M9.69 4.04c-.19 0-.38-.07-.53-.22L7.82 2.48a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.34 1.34c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM2.071 12.669a.75.75 0 0 1-.03-1.5l15.13-.66c.41-.02.76.3.78.72.02.41-.3.76-.72.78l-15.13.66h-.03ZM16 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.85 20.829c-1.43 0-2.6-1.17-2.6-2.6 0-1.45 1.71-3.37 2.05-3.75.28-.31.82-.31 1.1 0 .34.37 2.05 2.29 2.05 3.74 0 1.45-1.17 2.61-2.6 2.61Zm0-4.66c-.55.72-1.1 1.6-1.1 2.07 0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1 0-.48-.55-1.36-1.1-2.07Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M7.01 18 3 13.99c-1.34-1.34-1.34-2.67 0-4.01L9.68 3.3l7.35 7.35c.37.37.37.97 0 1.34l-6.02 6.02c-1.32 1.32-2.66 1.32-4-.01ZM8.35 1.95l1.34 1.34"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m2.07 11.922 15.12-.66"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M3 22h13"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M18.85 15S17 17.01 17 18.24c0 1.02.83 1.85 1.85 1.85s1.85-.83 1.85-1.85c0-1.23-1.85-3.24-1.85-3.24Z"
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

const Bucket = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Bucket.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Bucket.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Bucket.displayName = 'Bucket';

export default Bucket;
