import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.3 14.14H6.44a.25.25 0 01-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.1.17-.02.38-.22.38zm-.83-6a.25.25 0 01-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.1.17-.02.38-.21.38H9.87zm7.69 6H13.3a.25.25 0 01-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.09.17-.03.38-.22.38z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="m12 5.86-2.57 4.28h5.14L12 5.86ZM8.57 11.86 6 16.14h5.14l-2.57-4.28ZM15.43 11.86l-2.57 4.28H18l-2.57-4.28Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      fill={color}
    ></Path>
    <Path
      d="M11.79 6.21 9.66 9.76c-.1.17.02.38.21.38h4.26c.19 0 .31-.21.21-.38l-2.13-3.55a.244.244 0 0 0-.42 0ZM8.36 12.21l-2.13 3.55c-.1.17.02.38.21.38h4.26c.19 0 .31-.21.21-.38l-2.13-3.55a.244.244 0 0 0-.42 0ZM15.21 12.21l-2.13 3.55c-.1.17.019.38.209.38h4.26c.19 0 .31-.21.21-.38l-2.13-3.55c-.08-.16-.32-.16-.42 0Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="m12 5.9-2.6 4.2h5.2L12 5.9ZM8.6 11.9 6 16.1h5.1l-2.5-4.2ZM15.4 11.9l-2.5 4.2H18l-2.6-4.2Z"
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></Path>
    <Path
      d="M14.57 10.889H9.43a.752.752 0 0 1-.64-1.14l2.57-4.29c.27-.45 1.02-.45 1.29 0l2.57 4.29c.14.23.14.52.01.76a.76.76 0 0 1-.66.38Zm-3.82-1.5h2.49l-1.25-2.08-1.24 2.08ZM11.14 16.89H6a.745.745 0 0 1-.64-1.13l2.57-4.29c.27-.45 1.02-.45 1.29 0l2.57 4.29a.745.745 0 0 1-.65 1.13Zm-3.82-1.5h2.49l-1.25-2.08-1.24 2.08ZM18 16.89h-5.14a.745.745 0 0 1-.64-1.13l2.57-4.29c.27-.45 1.02-.45 1.29 0l2.57 4.29a.745.745 0 0 1-.65 1.13Zm-3.82-1.5h2.49l-1.25-2.08-1.24 2.08Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
    ></Path>
    <Path
      opacity=".4"
      d="m12 5.86-2.57 4.28h5.14L12 5.86ZM8.57 11.86 6 16.14h5.14l-2.57-4.28ZM15.43 11.86l-2.57 4.28H18l-2.57-4.28Z"
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

const Autonio = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Autonio.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Autonio.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Autonio.displayName = 'Autonio';

export default Autonio;
