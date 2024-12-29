import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-5.42 14.49c0 .67-.55 1.22-1.22 1.22H7.1c-.67 0-1.22-.55-1.22-1.22V7.51c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98zm7.35-3.84c0 .54-.44.98-.98.98H14.2c-.54 0-.98-.44-.98-.98V7.26c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M9.55 17.72H7.1c-.67 0-1.22-.55-1.22-1.22V7.52c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98c0 .67-.55 1.22-1.22 1.22ZM17.14 13.631H14.2c-.54 0-.98-.44-.98-.98v-5.39c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39c0 .54-.44.98-.98.98Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></Path>
    <Path
      d="M9.55 17.72H7.1c-.67 0-1.22-.55-1.22-1.22V7.52c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98c0 .67-.55 1.22-1.22 1.22ZM17.14 13.631H14.2c-.54 0-.98-.44-.98-.98v-5.39c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39c0 .54-.44.98-.98.98Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9.55 17.72H7.1c-.67 0-1.22-.55-1.22-1.22V7.51c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98c0 .68-.55 1.23-1.22 1.23ZM17.14 13.63H14.2c-.54 0-.98-.44-.98-.98V7.27c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39c.01.53-.44.97-.98.97Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
    <Path
      d="M9.55 18.471H7.1c-1.09 0-1.97-.89-1.97-1.98v-8.98c0-1.09.89-1.98 1.97-1.98h2.45c1.09 0 1.98.89 1.98 1.98v8.98c0 1.09-.89 1.98-1.98 1.98ZM7.1 7.031c-.26 0-.47.22-.47.48v8.98c0 .26.22.48.47.48h2.45c.26 0 .48-.22.48-.48v-8.98c0-.26-.22-.48-.48-.48H7.1ZM17.14 14.381H14.2c-.96 0-1.73-.78-1.73-1.73v-5.39c0-.96.78-1.73 1.73-1.73h2.94c.96 0 1.73.78 1.73 1.73v5.39c.01.96-.77 1.73-1.73 1.73Zm-2.93-7.35c-.13 0-.23.11-.23.23v5.39c0 .13.11.23.23.23h2.94c.13 0 .23-.11.23-.23v-5.39c0-.13-.11-.23-.23-.23h-2.94Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M9.55 17.72H7.1c-.67 0-1.22-.55-1.22-1.22V7.52c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98c0 .67-.55 1.22-1.22 1.22ZM17.14 13.631H14.2c-.54 0-.98-.44-.98-.98v-5.39c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39c0 .54-.44.98-.98.98Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
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

const Trello = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Trello.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Trello.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Trello.displayName = 'Trello';

export default Trello;
