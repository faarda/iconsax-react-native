import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 4.2v.11c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5V4.2c0-1.76.44-2.2 2.22-2.2h5.56C21.56 2 22 2.44 22 4.2ZM12.5 5.809c-.28 0-.5.22-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99c0-.28-.22-.5-.5-.5h-9ZM12 15.7v.11c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-.11c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2ZM2.5 17.309c-.28 0-.5.22-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99c0-.28-.22-.5-.5-.5h-9Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M12 5.559h10"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15.65 10.5h-1.43c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2h5.56C21.56 2 22 2.44 22 4.2v4.11c0 1.76-.44 2.2-2.22 2.2"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 17.059h10"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M5.5 22H4.22C2.44 22 2 21.56 2 19.8v-4.1c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 14.25a.75.75 0 0 1 .75.75A7.745 7.745 0 0 1 15 22.75a.75.75 0 0 1-.643-1.136l1.05-1.75a.75.75 0 1 1 1.286.772l-.271.452A6.246 6.246 0 0 0 21.25 15a.75.75 0 0 1 .75-.75ZM7.578 2.912A6.246 6.246 0 0 0 2.75 9a.75.75 0 0 1-1.5 0A7.745 7.745 0 0 1 9 1.25a.75.75 0 0 1 .643 1.136l-1.05 1.75a.75.75 0 0 1-1.286-.772l.271-.452Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M12 15.7v.61H2v-.61c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2Z"
      fill={color}
    ></Path>
    <Path
      d="M2 16.309v3.49c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-3.49H2Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M22 4.2v.61H12V4.2c0-1.76.44-2.2 2.22-2.2h5.56C21.56 2 22 2.44 22 4.2Z"
      fill={color}
    ></Path>
    <Path
      d="M12 4.809v3.49c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-3.49H12Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M12 5.56h10"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.22 2h5.56C21.56 2 22 2.44 22 4.2v4.11c0 1.76-.44 2.2-2.22 2.2h-5.56c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 17.06h10"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4.22 13.5h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2H4.22c-1.78 0-2.22-.44-2.22-2.2V15.7c0-1.76.44-2.2 2.22-2.2ZM22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
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
      d="M22 6.309H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
    <Path
      d="M19.778 11.25h-5.55c-2.19 0-2.97-.77-2.97-2.95V4.2c0-2.18.78-2.95 2.97-2.95h5.55c2.19 0 2.97.77 2.97 2.95v4.11c0 2.17-.78 2.94-2.97 2.94Zm-5.56-8.5c-1.36 0-1.47.11-1.47 1.45v4.11c0 1.34.11 1.45 1.47 1.45h5.55c1.36 0 1.47-.11 1.47-1.45V4.2c0-1.34-.11-1.45-1.47-1.45h-5.55ZM12 17.809H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
    <Path
      d="M9.778 22.75h-5.55c-2.19 0-2.97-.77-2.97-2.95v-4.1c0-2.18.78-2.95 2.97-2.95h5.55c2.19 0 2.97.77 2.97 2.95v4.11c0 2.17-.78 2.94-2.97 2.94Zm-5.56-8.5c-1.36 0-1.47.11-1.47 1.45v4.11c0 1.34.11 1.45 1.47 1.45h5.55c1.36 0 1.47-.11 1.47-1.45V15.7c0-1.34-.11-1.45-1.47-1.45h-5.55ZM15 22.748a.752.752 0 0 1-.64-1.14l1.05-1.75c.21-.35.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.26a.749.749 0 0 1-.26-1.03l.27-.45c-2.76.65-4.83 3.13-4.83 6.09.01.4-.33.74-.74.74Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M12 5.559h10"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.22 2h5.56C21.56 2 22 2.44 22 4.2v4.11c0 1.76-.44 2.2-2.22 2.2h-5.56c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 17.059h10"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4.22 13.5h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2H4.22c-1.78 0-2.22-.44-2.22-2.2V15.7c0-1.76.44-2.2 2.22-2.2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
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

const ConvertCard = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
ConvertCard.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
ConvertCard.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
ConvertCard.displayName = 'ConvertCard';

export default ConvertCard;
