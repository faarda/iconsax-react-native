import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M18.7 14.459c-.35.35-.55 1.05-.44 1.53l.69 3.02c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31a.524.524 0 0 1-.11-.1l12.62-12.62c.46-.46 1.11-.67 1.75-.56l.15.03c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.43 2.43ZM5.74 16c.11-.48-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.07 18.93 5.74 16Z"
      fill={color}
    ></Path>
    <Path
      d="M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M16.05 7.67c-.24-.18-.44-.41-.55-.64l-1.76-3.52c-.95-1.91-2.51-1.91-3.47 0L8.5 7.03c-.12.25-.34.48-.59.67M5.28 18.65l.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77M22 2 2 22"
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
      d="M18.7 14.46c-.35.35-.55 1.06-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.45-.27-1.23-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.04-.03-.08-.06-.11-.1L18.8 8.2l1.17.2c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.43 2.43ZM5.74 16c.11-.48-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.07 18.93 5.74 16Z"
      fill={color}
    ></Path>
    <Path
      d="M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="m5.28 18.65.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52c.11.23.32.45.55.64M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77M22 2 2 22"
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
      d="M5.28 19.398c-.06 0-.11-.01-.17-.02-.4-.09-.66-.5-.56-.9l.57-2.46c.08-.32-.08-.87-.32-1.11l-2.48-2.48c-1.24-1.24-1.14-2.3-.97-2.82.17-.52.71-1.44 2.43-1.73l3.19-.53c.3-.06.73-.38.86-.65l1.77-3.53c.8-1.61 1.85-1.84 2.4-1.84.55 0 1.6.24 2.4 1.84l1.76 3.52c.06.12.19.26.34.38.33.25.39.73.13 1.05-.25.33-.72.39-1.05.13-.24-.18-.56-.49-.76-.89l-1.76-3.52c-.31-.63-.71-1.01-1.06-1.01-.35 0-.75.38-1.06 1.02l-1.77 3.52c-.35.7-1.19 1.32-1.96 1.45l-3.18.53c-.68.11-1.14.38-1.25.71-.11.33.12.82.61 1.3l2.48 2.48c.6.6.91 1.68.72 2.51l-.57 2.46c-.09.35-.39.59-.74.59ZM17.66 22.672c-.53 0-1.21-.17-2.06-.67l-2.99-1.77c-.31-.18-.91-.18-1.21 0l-3 1.77a.76.76 0 0 1-1.03-.26.758.758 0 0 1 .26-1.03l2.99-1.77c.78-.46 1.96-.46 2.74 0l2.99 1.77c.87.52 1.42.52 1.63.37.21-.15.36-.68.14-1.66l-.71-3.07c-.19-.83.12-1.9.72-2.51l2.48-2.48c.49-.49.71-.97.61-1.3-.11-.33-.57-.6-1.25-.71a.755.755 0 0 1-.62-.86c.07-.41.45-.68.86-.62 1.73.29 2.27 1.21 2.43 1.73.16.52.26 1.58-.97 2.82l-2.47 2.48c-.24.24-.39.78-.32 1.11l.71 3.07c.46 2-.25 2.87-.71 3.21-.25.18-.65.38-1.22.38Z"
      fill={color}
    ></Path>
    <Path
      d="M2 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="m5.28 18.65.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52c.11.23.32.45.55.64"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 2 2 22"
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

const StarSlash = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
StarSlash.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
StarSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
StarSlash.displayName = 'StarSlash';

export default StarSlash;
