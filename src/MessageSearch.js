import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M17 2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V6.98C22 4.23 19.76 2 17 2Zm-1.34 12.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.74-.74c-.58.38-1.28.61-2.03.61-2.04 0-3.7-1.66-3.7-3.7S9.78 7 11.83 7a3.698 3.698 0 0 1 3.09 5.73l.74.74c.29.29.29.77 0 1.06Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M13.2 21.369c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M21.4 18.2c0 1.77-1.43 3.2-3.2 3.2-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2M22 22l-1-1"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15.995 11h.008M11.995 11h.009M7.995 11h.008"
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
      d="m22.53 21.47-.74-.74c.38-.58.61-1.28.61-2.03 0-2.04-1.66-3.7-3.7-3.7S15 16.66 15 18.7s1.66 3.7 3.7 3.7c.75 0 1.45-.23 2.03-.61l.74.74c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M2 12.972v-5.98c0-2.75 2.24-4.98 5-4.98h10c2.76 0 5 2.23 5 4.99v6.98c0 2.75-2.24 4.98-5 4.98h-1.5c-.31 0-.61.15-.8.4l-1.5 1.99c-.66.88-1.74.88-2.4 0l-1.5-1.99c-.17-.22-.52-.4-.8-.4H7c-2.76 0-5-2.23-5-4.98v-1.01Z"
      fill={color}
    ></Path>
    <Path
      d="M11.998 12c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1ZM15.998 12c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1ZM7.998 12c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM22 22l-1-1"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
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
      d="M12 22.779c-.69 0-1.34-.35-1.8-.96l-1.5-2a.377.377 0 0 0-.21-.1H8c-4.17 0-6.75-1.13-6.75-6.75v-5c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-3.58-1.67-5.25-5.25-5.25H8c-3.58 0-5.25 1.67-5.25 5.25v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.1.29 1.4.7l1.5 2c.35.46.85.46 1.2 0a.75.75 0 0 1 1.2.9c-.46.61-1.11.96-1.8.96Z"
      fill={color}
    ></Path>
    <Path
      d="M12 11.969c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM16 11.969c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM8 11.969c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM18.2 22.15c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95Zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45Z"
      fill={color}
    ></Path>
    <Path
      d="M22.001 22.751c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M13.2 21.369c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5"
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM22 22l-1-1"></Path>
    </G>
    <Path
      d="M15.995 11h.008M11.995 11h.009M7.995 11h.008"
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

const MessageSearch = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
MessageSearch.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
MessageSearch.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
MessageSearch.displayName = 'MessageSearch';

export default MessageSearch;
