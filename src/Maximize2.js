import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-5.97 19H7.91C5.2 21 3 18.8 3 16.09v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31c0 1.88 1.53 3.41 3.41 3.41h2.31a.749.749 0 1 1 0 1.5Zm0-16.5H7.91C6.03 4.5 4.5 6.03 4.5 7.91v2.31a.749.749 0 1 1-1.5 0V7.91C3 5.2 5.2 3 7.91 3h2.31a.749.749 0 1 1 0 1.5ZM21 16.09C21 18.8 18.8 21 16.09 21H14.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.39c1.88 0 3.41-1.53 3.41-3.41V14.7c0-.41.34-.75.75-.75s.75.34.75.75v1.39Zm0-5.87c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.91c0-1.88-1.53-3.41-3.41-3.41h-2.31a.749.749 0 1 1 0-1.5h2.31C18.8 3 21 5.2 21 7.91v2.31Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M2.75 9.97c-.41 0-.75-.33-.75-.75V6.91C2 4.2 4.2 2 6.91 2h2.31a.749.749 0 1 1 0 1.5H6.91C5.03 3.5 3.5 5.03 3.5 6.91v2.31c0 .42-.34.75-.75.75ZM21.25 9.97c-.41 0-.75-.34-.75-.75V6.91c0-1.88-1.53-3.41-3.41-3.41h-2.31a.749.749 0 1 1 0-1.5h2.31C19.8 2 22 4.2 22 6.91v2.31c0 .42-.34.75-.75.75ZM17.09 22H15.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.39c1.88 0 3.41-1.53 3.41-3.41V15.7c0-.41.34-.75.75-.75s.75.34.75.75v1.39C22 19.8 19.8 22 17.09 22ZM9.22 22.001H6.91c-2.71 0-4.91-2.2-4.91-4.91v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31c0 1.88 1.53 3.41 3.41 3.41h2.31a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
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
      d="M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.89 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.36 5.25 5.25V9c0 .41-.34.75-.75.75ZM17.5 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c2.07 0 3.75-1.68 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.89-2.36 5.25-5.25 5.25ZM9 22.75H6.5c-2.89 0-5.25-2.36-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M15 2h2.5C19.99 2 22 4.01 22 6.5V9"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
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

const Maximize2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Maximize2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Maximize2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Maximize2.displayName = 'Maximize2';

export default Maximize2;
