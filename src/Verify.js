import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="m21.56 10.739-1.36-1.58c-.26-.3-.47-.86-.47-1.26v-1.7c0-1.06-.87-1.93-1.93-1.93h-1.7c-.39 0-.96-.21-1.26-.47l-1.58-1.36c-.69-.59-1.82-.59-2.52 0l-1.57 1.37c-.3.25-.87.46-1.26.46H6.18c-1.06 0-1.93.87-1.93 1.93v1.71c0 .39-.21.95-.46 1.25l-1.35 1.59c-.58.69-.58 1.81 0 2.5l1.35 1.59c.25.3.46.86.46 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.73c.39 0 .96.21 1.26.47l1.58 1.36c.69.59 1.82.59 2.52 0l1.58-1.36c.3-.26.86-.47 1.26-.47h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.39.21-.96.47-1.26l1.36-1.58c.58-.69.58-1.83-.01-2.52Zm-5.4-.63-4.83 4.83a.75.75 0 0 1-1.06 0l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="m8.38 11.998 2.41 2.42 4.83-4.84"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4.24 6.198c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l.56-.66"
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
      d="M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.35Z"
      fill={color}
    ></Path>
    <Path
      d="M10.79 15.171a.75.75 0 0 1-.53-.22l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4.83 4.83a.75.75 0 0 1-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="m8.38 12 2.41 2.42 4.83-4.84"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.35Z"
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
      d="M10.79 15.171a.75.75 0 0 1-.53-.22l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4.83 4.83a.75.75 0 0 1-.53.22Z"
      fill={color}
    ></Path>
    <Path
      d="M12 22.75c-.63 0-1.26-.21-1.75-.63l-1.58-1.36c-.16-.14-.56-.28-.77-.28H6.18A2.68 2.68 0 0 1 3.5 17.8v-1.71c0-.21-.14-.6-.28-.76l-1.35-1.59c-.82-.97-.82-2.5 0-3.47l1.35-1.59c.14-.16.28-.55.28-.76V6.2c0-1.48 1.2-2.68 2.68-2.68h1.73c.21 0 .61-.15.77-.28l1.58-1.36c.98-.84 2.51-.84 3.49 0l1.58 1.36c.16.14.56.28.77.28h1.7c1.48 0 2.68 1.2 2.68 2.68v1.7c0 .21.15.61.29.77l1.36 1.58c.84.98.84 2.51 0 3.49l-1.36 1.58c-.14.16-.29.56-.29.77v1.7c0 1.48-1.2 2.68-2.68 2.68h-1.7c-.21 0-.61.15-.77.28l-1.58 1.36c-.49.43-1.12.64-1.75.64ZM6.18 5.02C5.53 5.02 5 5.55 5 6.2v1.71c0 .57-.27 1.3-.64 1.73l-1.35 1.59c-.35.41-.35 1.12 0 1.53l1.35 1.59c.37.44.64 1.16.64 1.73v1.71c0 .65.53 1.18 1.18 1.18h1.73c.58 0 1.31.27 1.75.65l1.58 1.36c.41.35 1.13.35 1.54 0l1.58-1.36c.44-.37 1.17-.65 1.75-.65h1.7c.65 0 1.18-.53 1.18-1.18v-1.7c0-.58.27-1.31.65-1.75L21 12.76c.35-.41.35-1.13 0-1.54l-1.36-1.58c-.38-.44-.65-1.17-.65-1.75V6.2c0-.65-.53-1.18-1.18-1.18h-1.7c-.58 0-1.31-.27-1.75-.65l-1.58-1.36c-.41-.35-1.13-.35-1.54 0L9.66 4.38c-.44.37-1.18.64-1.75.64H6.18Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".34"
      d="m8.38 11.998 2.41 2.42 4.83-4.84"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.35Z"
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

const Verify = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Verify.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Verify.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Verify.displayName = 'Verify';

export default Verify;
