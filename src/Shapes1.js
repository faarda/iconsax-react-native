import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M11.75 7H7c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-4.75C17 9.35 14.65 7 11.75 7Z"
      fill={color}
    ></Path>
    <Path
      d="M21.88 6.33c.525 2.56-.717 4.882-2.72 5.976-.308.168-.66-.072-.66-.422v-.134c0-3.44-2.81-6.25-6.25-6.25h-.133c-.35 0-.59-.351-.422-.659 1.094-2.003 3.416-3.245 5.976-2.72 2.09.43 3.78 2.12 4.21 4.21Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M1.97 12.25C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-.74"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M21.97 7.5c0 2.87-2.19 5.22-5 5.47v-.72c0-3.75-1.5-5.25-5.25-5.25H11c.25-2.81 2.6-5 5.47-5 2.79 0 5.09 2.07 5.44 4.77.04.23.06.48.06.73Z"
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
      d="M11.75 7H7c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-4.75C17 9.35 14.65 7 11.75 7Z"
      fill={color}
    ></Path>
    <Path
      d="M16.5 2c-2.87 0-5.22 2.2-5.47 5h.72C14.65 7 17 9.35 17 12.25v.72A5.497 5.497 0 0 0 16.5 2Z"
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
      strokeWidth={strokeWidth}
      d="M16.97 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M21.97 7.5c0 2.87-2.19 5.22-5 5.47v-.72c0-3.75-1.5-5.25-5.25-5.25H11c.25-2.81 2.6-5 5.47-5 2.79 0 5.09 2.07 5.44 4.77.04.23.06.48.06.73z"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M11.72 22.75h-4.5c-4.15 0-6-1.85-6-6v-4.5c0-4.15 1.85-6 6-6h4.5c4.15 0 6 1.85 6 6v4.5c0 4.15-1.85 6-6 6Zm-4.5-15c-3.32 0-4.5 1.18-4.5 4.5v4.5c0 3.32 1.18 4.5 4.5 4.5h4.5c3.32 0 4.5-1.18 4.5-4.5v-4.5c0-3.32-1.18-4.5-4.5-4.5h-4.5Z"
      fill={color}
    ></Path>
    <Path
      d="M16.97 13.722c-.19 0-.37-.07-.51-.2a.72.72 0 0 1-.24-.55v-.72c0-3.32-1.18-4.5-4.5-4.5H11c-.21 0-.41-.09-.55-.24a.75.75 0 0 1-.19-.57 6.205 6.205 0 0 1 6.22-5.68c3.12 0 5.78 2.33 6.18 5.42.04.24.07.53.07.83 0 3.26-2.44 5.93-5.68 6.22-.03-.01-.05-.01-.08-.01Zm-5.08-7.47c3.97.05 5.78 1.85 5.83 5.83 2.04-.54 3.5-2.39 3.5-4.58 0-.21-.02-.41-.05-.6-.31-2.38-2.33-4.15-4.7-4.15-2.19 0-4.03 1.46-4.58 3.5Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M16.97 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M21.97 7.5c0 2.87-2.19 5.22-5 5.47v-.72c0-3.75-1.5-5.25-5.25-5.25H11c.25-2.81 2.6-5 5.47-5 2.79 0 5.09 2.07 5.44 4.77.04.23.06.48.06.73Z"
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

const Shapes1 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Shapes1.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Shapes1.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Shapes1.displayName = 'Shapes1';

export default Shapes1;
