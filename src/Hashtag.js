import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path d="M10.42 13.418h2.84l.32-2.84h-2.84l-.32 2.84Z" fill={color}></Path>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm2.63 8.58h-3.77l-.32 2.85h3.37c.4 0 .73.33.73.73 0 .4-.33.73-.73.73h-3.53l-.41 3.66c-.04.37-.36.65-.73.65h-.08a.739.739 0 0 1-.65-.81l.39-3.5h-2.84l-.41 3.66c-.04.37-.36.65-.73.65h-.08a.739.739 0 0 1-.65-.81l.39-3.5H5.18c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73h3.77l.32-2.85H5.9c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73h3.53l.41-3.66c.04-.4.41-.69.81-.65.4.04.69.41.65.81l-.39 3.5h2.84l.41-3.66c.05-.4.41-.69.81-.65.4.04.69.41.65.81l-.39 3.5h3.61c.4 0 .73.33.73.73 0 .4-.35.73-.75.73Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M10 3 8 21M16 3l-2 18M20.05 9h1.45M3.5 9h13.49M3.95 15H2.5M20.5 15H7.01"
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
      d="M18.82 10.579c.4 0 .73-.33.73-.73 0-.4-.33-.73-.73-.73h-3.61l.39-3.5c.04-.4-.24-.76-.65-.81-.4-.04-.76.24-.81.65l-.41 3.66H10.9l.39-3.5c.04-.4-.24-.76-.65-.81-.4-.04-.76.24-.81.65l-.4 3.66H5.9c-.4 0-.73.33-.73.73 0 .4.33.73.73.73h3.37l-.32 2.85H5.18c-.4 0-.73.33-.73.73 0 .4.33.73.73.73h3.61l-.39 3.5c-.04.4.24.76.65.81h.08c.37 0 .68-.28.73-.65l.41-3.66h2.84l-.39 3.5c-.04.4.24.76.65.81h.08c.37 0 .68-.28.73-.65l.41-3.66h3.53c.4 0 .73-.33.73-.73 0-.4-.33-.73-.73-.73h-3.37l.32-2.85h3.75Zm-5.56 2.84h-2.84l.32-2.85h2.84l-.32 2.85Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M10 3 8 21M16 3l-2 18M3.5 9h18M2.5 15h18"
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
      d="M8 21.752h-.08a.751.751 0 0 1-.66-.83l2-18c.05-.41.42-.7.83-.66.41.05.71.42.66.83l-2 18c-.05.38-.37.66-.75.66ZM14 21.752h-.08a.751.751 0 0 1-.66-.83l2-18c.05-.41.41-.7.83-.66.41.05.71.42.66.83l-2 18c-.05.38-.37.66-.75.66Z"
      fill={color}
    ></Path>
    <Path
      d="M21.5 9.75h-18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM20.5 15.75h-18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M10 3 8 21M16 3l-2 18"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M3.5 9h18M2.5 15h18"
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

const Hashtag = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Hashtag.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Hashtag.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Hashtag.displayName = 'Hashtag';

export default Hashtag;
