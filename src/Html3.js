import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M19.88 2H4.12c-.6 0-1.06.52-.99 1.11l1.8 16.22c.04.4.33.74.72.85l6.08 1.74c.18.05.37.05.55 0l6.08-1.74c.39-.11.67-.45.72-.85l1.8-16.22c.06-.59-.4-1.11-1-1.11zm-3.63 14.08c-.03.3-.25.55-.54.64l-3.5 1a.761.761 0 01-.42 0l-3.5-1a.73.73 0 01-.52-.54l-.5-2c-.1-.4.14-.81.55-.91.4-.1.81.14.91.55l.4 1.58 2.88.82 2.81-.8.41-3.67H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.38l.28-2.5-8.16-.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75l9 .02c.21 0 .42.09.56.25.14.16.21.37.19.58l-1 9z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="m7.5 6.98 9 .02-1 9-3.5 1-3.5-1-.5-2M8 11h8.06"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m3.32 4.91-.2-1.8c-.07-.59.4-1.11.99-1.11h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85l-1.1-9.92"
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
      d="M4.12 2h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85L3.13 3.11A.993.993 0 0 1 4.12 2Z"
      fill={color}
    ></Path>
    <Path
      d="M17.06 6.5a.735.735 0 0 0-.56-.25l-9-.02a.749.749 0 1 0 0 1.5l8.16.02-.28 2.5H8c-.41 0-.75.34-.75.75s.34.75.75.75h7.22l-.41 3.67-2.81.8-2.88-.82-.4-1.58c-.1-.4-.51-.65-.91-.55-.4.1-.65.51-.55.91l.5 2c.06.26.26.47.52.54l3.5 1a.761.761 0 0 0 .42 0l3.5-1c.29-.08.51-.33.54-.64l1-9a.727.727 0 0 0-.18-.58Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7.5 7h9l-1 9-3.5 1-3.5-1-.5-2M8 11h8.1"
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
      d="M12 22.71c-.16 0-.32-.02-.48-.07L5.44 20.9c-.69-.2-1.18-.78-1.26-1.49L2.38 3.19a1.751 1.751 0 0 1 1.74-1.94h15.77c.5 0 .97.21 1.3.58.33.37.49.87.44 1.36l-1.8 16.22c-.08.71-.57 1.29-1.26 1.49l-6.08 1.74c-.17.05-.33.07-.49.07ZM4.12 2.75c-.1 0-.16.05-.19.08a.24.24 0 0 0-.06.19l1.8 16.22c.01.1.08.19.18.21l6.08 1.74c.04.01.09.01.14 0l6.08-1.74c.1-.03.17-.11.18-.21l1.8-16.22c.01-.1-.03-.16-.06-.19a.26.26 0 0 0-.19-.08H4.12Z"
      fill={color}
    ></Path>
    <Path
      d="M12 17.75c-.07 0-.14-.01-.21-.03l-3.5-1a.73.73 0 0 1-.52-.54l-.5-2c-.1-.4.14-.81.55-.91.4-.1.81.14.91.55l.4 1.58 2.88.82 2.81-.8.85-7.67-8.16-.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75l9 .02c.21 0 .42.09.56.25.14.16.21.37.19.58l-1 9c-.03.3-.25.55-.54.64l-3.5 1c-.08.02-.15.03-.22.03Z"
      fill={color}
    ></Path>
    <Path
      d="M16.06 11.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.06c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M4.12 2h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85L3.13 3.11A.993.993 0 0 1 4.12 2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m7.5 6.98 9 .02-1 9-3.5 1-3.5-1-.5-2M8 11h8.06"></Path>
    </G>
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

const Html3 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Html3.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Html3.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Html3.displayName = 'Html3';

export default Html3;
