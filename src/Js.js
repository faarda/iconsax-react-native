import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      fill={color}
      d="M15.25 16.75H13.5a2.5 2.5 0 01-2.5-2.5c0-.41.34-.75.75-.75s.75.34.75.75c0 .55.45 1 1 1h1.75c.55 0 1-.45 1-1s-.45-1-1-1H13.5a2.5 2.5 0 010-5h1.75a2.5 2.5 0 012.5 2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.55-.45-1-1-1H13.5c-.55 0-1 .45-1 1s.45 1 1 1h1.75a2.5 2.5 0 010 5z"
    ></Path>
    <Path
      fill={color}
      d="M12 22.61c-.29 0-.58-.07-.85-.22l-1.48-.71a.75.75 0 11.65-1.35l1.51.73c.11.06.21.06.28.02l8-4.44c.08-.04.13-.13.13-.22V7.6a.26.26 0 00-.13-.22l-8-4.44a.255.255 0 00-.24 0l-8 4.44c-.08.04-.13.13-.13.22v8.82c0 .09.05.17.13.22l2.51 1.39c.39.22.85.21 1.24-.02.39-.23.62-.63.62-1.08L8.25 9c0-.41.34-.75.75-.75s.75.34.75.75l-.01 7.93c0 .98-.51 1.87-1.36 2.37-.85.5-1.87.51-2.73.03l-2.51-1.39c-.56-.31-.9-.9-.9-1.53V7.59c0-.63.34-1.22.9-1.53l8-4.44c.53-.3 1.17-.3 1.7 0l8 4.44c.56.31.9.9.9 1.53v8.82c0 .63-.34 1.22-.9 1.53l-8 4.44c-.26.15-.55.23-.84.23z"
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M11.51 2.268c.3-.17.67-.17.97 0l8 4.44c.32.18.51.51.51.87v8.82a1 1 0 0 1-.51.87l-8 4.44c-.3.17-.67.17-.97 0l-1.51-.71M9 9.002l-.01 7.93c0 1.52-1.64 2.49-2.97 1.75l-2.51-1.39a.992.992 0 0 1-.51-.87v-8.82c0-.36.2-.7.51-.87l3.7-2.06"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17 10.75C17 9.78 16.22 9 15.25 9H13.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75h1.75c.97 0 1.75.78 1.75 1.75S16.22 16 15.25 16H13.5c-.97 0-1.75-.78-1.75-1.75"
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
      d="M12 22.61c-.29 0-.58-.07-.85-.22l-1.48-.71a.75.75 0 1 1 .65-1.35l1.51.73c.11.06.21.06.28.02l8-4.44c.08-.04.13-.13.13-.22V7.6a.26.26 0 0 0-.13-.22l-8-4.44a.255.255 0 0 0-.24 0l-8 4.44c-.08.04-.13.13-.13.22v8.82c0 .09.05.17.13.22l2.51 1.39c.39.22.85.21 1.24-.02.39-.23.62-.63.62-1.08L8.25 9c0-.41.34-.75.75-.75s.75.34.75.75l-.01 7.93c0 .98-.51 1.87-1.36 2.37-.85.5-1.87.51-2.73.03l-2.51-1.39c-.56-.31-.9-.9-.9-1.53V7.59c0-.63.34-1.22.9-1.53l8-4.44c.53-.3 1.17-.3 1.7 0l8 4.44c.56.31.9.9.9 1.53v8.82c0 .63-.34 1.22-.9 1.53l-8 4.44c-.26.15-.55.23-.84.23Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M15.25 16.75H13.5a2.5 2.5 0 0 1-2.5-2.5c0-.41.34-.75.75-.75s.75.34.75.75c0 .55.45 1 1 1h1.75c.55 0 1-.45 1-1s-.45-1-1-1H13.5a2.5 2.5 0 0 1 0-5h1.75a2.5 2.5 0 0 1 2.5 2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.55-.45-1-1-1H13.5c-.55 0-1 .45-1 1s.45 1 1 1h1.75a2.5 2.5 0 0 1 0 5Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M9 9v7.9c0 1.5-1.6 2.5-3 1.7l-2.5-1.4c-.3-.1-.5-.4-.5-.8V7.6c0-.4.2-.7.5-.9l8-4.4c.3-.2.7-.2 1 0l8 4.4c.3.2.5.5.5.9v8.8c0 .4-.2.7-.5.9l-8 4.4c-.3.2-.7.2-1 0L10 21"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17 10.8c0-1-.8-1.8-1.7-1.8h-1.8c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7h1.8c1 0 1.7.8 1.7 1.7 0 1-.8 1.7-1.7 1.7h-1.8c-1 0-1.7-.8-1.7-1.7"
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
      d="M12 22.61c-.29 0-.58-.07-.85-.22l-1.48-.71a.75.75 0 1 1 .65-1.35l1.51.73c.11.06.21.06.28.02l8-4.44c.08-.04.13-.13.13-.22V7.6a.26.26 0 0 0-.13-.22l-8-4.44a.255.255 0 0 0-.24 0l-8 4.44c-.08.04-.13.13-.13.22v8.82c0 .09.05.17.13.22l2.51 1.39c.39.22.85.21 1.24-.02.39-.23.62-.63.62-1.08L8.25 9c0-.41.34-.75.75-.75s.75.34.75.75l-.01 7.93c0 .98-.51 1.87-1.36 2.37-.85.5-1.87.51-2.73.03l-2.51-1.39c-.56-.31-.9-.9-.9-1.53V7.59c0-.63.34-1.22.9-1.53l8-4.44c.53-.3 1.17-.3 1.7 0l8 4.44c.56.31.9.9.9 1.53v8.82c0 .63-.34 1.22-.9 1.53l-8 4.44c-.26.15-.55.23-.84.23Z"
      fill={color}
    ></Path>
    <Path
      d="M15.25 16.75H13.5a2.5 2.5 0 0 1-2.5-2.5c0-.41.34-.75.75-.75s.75.34.75.75c0 .55.45 1 1 1h1.75c.55 0 1-.45 1-1s-.45-1-1-1H13.5a2.5 2.5 0 0 1 0-5h1.75a2.5 2.5 0 0 1 2.5 2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.55-.45-1-1-1H13.5c-.55 0-1 .45-1 1s.45 1 1 1h1.75a2.5 2.5 0 0 1 0 5Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="m9 9.002-.01 7.93c0 1.52-1.64 2.49-2.97 1.75l-2.51-1.39a.992.992 0 0 1-.51-.87v-8.82c0-.36.2-.7.51-.87l8-4.44c.3-.17.67-.17.97 0l8 4.44c.32.18.51.51.51.87v8.82a1 1 0 0 1-.51.87l-8 4.44c-.3.17-.67.17-.97 0l-1.51-.73"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M17 10.75C17 9.78 16.22 9 15.25 9H13.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75h1.75c.97 0 1.75.78 1.75 1.75S16.22 16 15.25 16H13.5c-.97 0-1.75-.78-1.75-1.75"
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

const Js = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Js.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Js.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Js.displayName = 'Js';

export default Js;
