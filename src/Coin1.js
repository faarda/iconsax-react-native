import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M21.92 16.749c-.33 2.66-2.51 4.84-5.17 5.17-1.61.2-3.11-.24-4.28-1.1-.67-.49-.51-1.53.29-1.77a9.486 9.486 0 0 0 6.3-6.3c.24-.79 1.28-.95 1.77-.29a6.02 6.02 0 0 1 1.09 4.29Z"
      fill={color}
    ></Path>
    <Path
      d="M9.99 2C5.58 2 2 5.58 2 9.99s3.58 7.99 7.99 7.99 7.99-3.58 7.99-7.99C17.97 5.58 14.4 2 9.99 2Zm-.94 6.87 2.41.84c.87.31 1.29.92 1.29 1.86 0 1.08-.86 1.97-1.91 1.97h-.09v.05c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.06c-1.11-.05-2-.98-2-2.14 0-.41.34-.75.75-.75s.75.34.75.75c0 .36.26.65.58.65h1.5c.23 0 .41-.21.41-.47 0-.35-.06-.37-.29-.45l-2.41-.84c-.86-.3-1.29-.91-1.29-1.86 0-1.08.86-1.97 1.91-1.97h.09v-.04c0-.41.34-.75.75-.75s.75.34.75.75v.06c1.11.05 2 .98 2 2.14 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.36-.26-.65-.58-.65h-1.5c-.23 0-.41.21-.41.47-.01.34.05.36.29.44Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M8 11.4c0 .77.6 1.4 1.33 1.4h1.5c.64 0 1.16-.55 1.16-1.22 0-.73-.32-.99-.79-1.16l-2.4-.84c-.48-.17-.8-.43-.8-1.16 0-.67.52-1.22 1.16-1.22h1.5c.74.01 1.34.63 1.34 1.4M10 12.852v.74M10 6.41v.78"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M6.07 3.02A7.974 7.974 0 0 1 9.99 2c4.41 0 7.99 3.58 7.99 7.99s-3.58 7.99-7.99 7.99S2 14.4 2 9.99c0-1.23.28-2.4.78-3.44M12.98 19.88c.9 1.27 2.37 2.1 4.05 2.1 2.73 0 4.95-2.22 4.95-4.95 0-1.66-.82-3.13-2.07-4.03"
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
      d="M9.99 17.98A7.99 7.99 0 1 0 9.99 2a7.99 7.99 0 0 0 0 15.98Z"
      fill={color}
    ></Path>
    <Path
      d="M21.968 15.988c0 3.3-2.68 5.98-5.98 5.98a5.97 5.97 0 0 1-4.91-2.57 9.458 9.458 0 0 0 8.32-8.32 5.97 5.97 0 0 1 2.57 4.91ZM11.45 9.71l-2.4-.84c-.24-.08-.29-.1-.29-.45 0-.26.18-.47.41-.47h1.5c.32 0 .58.29.58.65 0 .41.34.75.75.75s.75-.34.75-.75c0-1.15-.89-2.09-2-2.14v-.05a.749.749 0 1 0-1.5 0v.05h-.09c-1.05 0-1.91.88-1.91 1.97 0 .95.42 1.56 1.29 1.86l2.41.84c.24.08.29.1.29.45 0 .26-.18.47-.41.47h-1.5c-.32 0-.58-.29-.58-.65 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.15.89 2.09 2 2.14v.06c0 .41.34.75.75.75s.75-.34.75-.75v-.05h.09c1.05 0 1.91-.88 1.91-1.97 0-.95-.43-1.56-1.3-1.87Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M8 11.4c0 .77.6 1.4 1.33 1.4h1.5c.64 0 1.16-.55 1.16-1.22 0-.73-.32-.99-.79-1.16l-2.4-.84c-.48-.17-.8-.43-.8-1.16 0-.67.52-1.22 1.16-1.22h1.5c.74.01 1.34.63 1.34 1.4M10 12.85v.74M10 6.41v.78"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9.99 17.98A7.99 7.99 0 1 0 9.99 2a7.99 7.99 0 0 0 0 15.98ZM12.98 19.88c.9 1.27 2.37 2.1 4.05 2.1 2.73 0 4.95-2.22 4.95-4.95 0-1.66-.82-3.13-2.07-4.03"
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
      d="M12 22.748c-4 0-7.25-2.87-7.25-6.4v-3.7c0-.41.34-.75.75-.75s.75.34.75.75c0 2.62 2.47 4.6 5.75 4.6s5.75-1.98 5.75-4.6c0-.41.34-.75.75-.75s.75.34.75.75v3.7c0 3.53-3.25 6.4-7.25 6.4Zm-5.75-6.29c.07 2.65 2.62 4.79 5.75 4.79s5.68-2.14 5.75-4.79c-1.3 1.41-3.36 2.29-5.75 2.29s-4.44-.88-5.75-2.29Z"
      fill={color}
    ></Path>
    <Path
      d="M12 13.75c-2.76 0-5.24-1.24-6.45-3.24-.52-.85-.8-1.84-.8-2.86 0-1.72.77-3.34 2.16-4.56C8.27 1.9 10.08 1.25 12 1.25s3.72.65 5.09 1.83c1.39 1.23 2.16 2.85 2.16 4.57 0 1.02-.28 2-.8 2.86-1.21 2-3.69 3.24-6.45 3.24Zm0-11c-1.56 0-3.02.52-4.11 1.48-1.06.92-1.64 2.14-1.64 3.42 0 .75.2 1.45.58 2.08.95 1.56 2.93 2.52 5.17 2.52 2.24 0 4.22-.97 5.17-2.52.39-.63.58-1.33.58-2.08 0-1.28-.58-2.5-1.65-3.44-1.09-.94-2.54-1.46-4.1-1.46Z"
      fill={color}
    ></Path>
    <Path
      d="M12 18.75c-4.13 0-7.25-2.62-7.25-6.1v-5c0-3.53 3.25-6.4 7.25-6.4 1.92 0 3.72.65 5.09 1.83 1.39 1.23 2.16 2.85 2.16 4.57v5c0 3.48-3.12 6.1-7.25 6.1Zm0-16c-3.17 0-5.75 2.2-5.75 4.9v5c0 2.62 2.47 4.6 5.75 4.6s5.75-1.98 5.75-4.6v-5c0-1.28-.58-2.5-1.65-3.44-1.09-.94-2.54-1.46-4.1-1.46Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M8 11.4c0 .77.6 1.4 1.33 1.4h1.5c.64 0 1.16-.55 1.16-1.22 0-.73-.32-.99-.79-1.16l-2.4-.84c-.48-.17-.8-.43-.8-1.16 0-.67.52-1.22 1.16-1.22h1.5c.74.01 1.34.63 1.34 1.4M10 12.852v.74M10 6.41v.78"></Path>
    </G>
    <Path
      d="M9.99 17.98A7.99 7.99 0 1 0 9.99 2a7.99 7.99 0 0 0 0 15.98Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M12.98 19.88c.9 1.27 2.37 2.1 4.05 2.1 2.73 0 4.95-2.22 4.95-4.95 0-1.66-.82-3.13-2.07-4.03"
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

const Coin1 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Coin1.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Coin1.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Coin1.displayName = 'Coin1';

export default Coin1;