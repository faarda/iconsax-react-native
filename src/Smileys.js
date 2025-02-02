import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M10 1H4C2.34 1 1 2.34 1 4v6c0 1.66 1.34 3 3 3h4.5c0-2.48 2.02-4.5 4.5-4.5V4c0-1.66-1.34-3-3-3ZM3.77 4.27c.77-.55 1.82-.56 2.61-.02.34.23.43.7.2 1.04-.23.34-.7.43-1.04.2a.781.781 0 0 0-.91.01c-.13.09-.28.13-.43.13-.23 0-.47-.11-.61-.31a.753.753 0 0 1 .18-1.05Zm5.5 3.97c-.26.33-.73.38-1.05.12-.35-.28-.77-.43-1.22-.43-1 0-1.83.76-1.94 1.74h2.1c.41 0 .75.34.75.75s-.34.75-.75.75H4.84c-.71 0-1.29-.58-1.29-1.29 0-1.9 1.55-3.45 3.45-3.45.78 0 1.55.27 2.16.76.32.26.37.73.11 1.05Zm1.31-2.95c-.23.34-.7.43-1.04.2a.781.781 0 0 0-.91.01c-.13.09-.28.13-.43.13-.23 0-.47-.11-.61-.31a.753.753 0 0 1 .18-1.05c.77-.55 1.82-.56 2.61-.02.34.23.43.7.2 1.04ZM18.22 16.679a.363.363 0 0 0-.28-.12h-3.88c-.11 0-.21.04-.28.12-.07.08-.11.19-.09.29a2.328 2.328 0 0 0 2.31 2.08c1.19 0 2.18-.89 2.31-2.08a.376.376 0 0 0-.09-.29Z"
      fill={color}
    ></Path>
    <Path
      d="M19 10h-6c-1.65 0-3 1.35-3 3v6c0 1.65 1.35 3 3 3h6c1.65 0 3-1.35 3-3v-6c0-1.65-1.35-3-3-3Zm-6.41 3.17c.24-.34.71-.42 1.05-.18a.8.8 0 0 0 .9.01c.34-.24.81-.15 1.04.2.23.34.15.81-.2 1.04-.39.26-.84.4-1.29.4-.47 0-.93-.14-1.32-.42a.756.756 0 0 1-.18-1.05Zm3.41 7c-1.9 0-3.45-1.55-3.45-3.45 0-.71.58-1.29 1.29-1.29h4.32c.71 0 1.29.58 1.29 1.29 0 1.9-1.55 3.45-3.45 3.45Zm3.38-5.94c-.39.26-.84.4-1.29.4-.47 0-.93-.14-1.32-.42a.753.753 0 1 1 .87-1.23.8.8 0 0 0 .9.01c.34-.24.81-.15 1.04.2.23.35.14.81-.2 1.04Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M2 6.2C2 3.2 3.2 2 6.2 2h3.6c3 0 4.2 1.2 4.2 4.2V10c-2.79.05-3.95 1.21-4 4H6.2C3.2 14 2 12.8 2 9.8"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M6.96 5.87c-.53-.36-1.23-.36-1.76.02M10.96 5.87c-.53-.36-1.23-.36-1.76.02M8.16 11.42H5.84c-.3 0-.54-.24-.54-.54 0-1.49 1.21-2.7 2.7-2.7.64 0 1.23.22 1.69.59"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 17.8c0 3-1.2 4.2-4.2 4.2h-3.6c-3 0-4.2-1.2-4.2-4.2V14c.05-2.79 1.21-3.95 4-4h3.8c3 0 4.2 1.2 4.2 4.2"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.96 13.622c-.53.36-1.23.36-1.76-.02M18.96 13.622c-.53.36-1.23.36-1.76-.02M13.84 16.18h4.32c.3 0 .54.24.54.54 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-.3.24-.54.54-.54Z"
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
      d="M14 5v5h-1c-1.65 0-3 1.35-3 3v1H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h6c1.66 0 3 1.34 3 3Z"
      fill={color}
    ></Path>
    <Path
      d="M5.2 6.629c-.23 0-.47-.11-.61-.32a.753.753 0 0 1 .18-1.05c.78-.55 1.83-.56 2.62-.02.34.23.43.7.2 1.04-.23.34-.7.43-1.04.2a.8.8 0 0 0-.9.01c-.15.1-.3.14-.45.14ZM9.2 6.629c-.23 0-.47-.11-.61-.32a.753.753 0 0 1 .18-1.05c.78-.55 1.83-.56 2.62-.02.34.23.43.7.2 1.04-.23.34-.7.43-1.04.2a.8.8 0 0 0-.9.01c-.15.1-.3.14-.45.14ZM8.16 12.17H5.84c-.71 0-1.29-.58-1.29-1.29 0-1.9 1.55-3.45 3.45-3.45.78 0 1.55.27 2.16.76a.748.748 0 0 1-.93 1.17c-.35-.28-.77-.43-1.22-.43-1 0-1.83.76-1.94 1.74h2.1c.41 0 .75.34.75.75s-.35.75-.76.75ZM18.22 16.679a.363.363 0 0 0-.28-.12h-3.88c-.11 0-.21.04-.28.12-.07.08-.11.19-.09.29a2.328 2.328 0 0 0 2.31 2.08c1.19 0 2.18-.89 2.31-2.08a.376.376 0 0 0-.09-.29Z"
      fill={color}
    ></Path>
    <Path
      d="M19 10h-6c-1.65 0-3 1.35-3 3v6c0 1.65 1.35 3 3 3h6c1.65 0 3-1.35 3-3v-6c0-1.65-1.35-3-3-3Zm-6.41 3.17c.24-.34.71-.42 1.05-.18a.8.8 0 0 0 .9.01c.34-.24.81-.15 1.04.2.23.34.15.81-.2 1.04-.39.26-.84.4-1.29.4-.47 0-.93-.14-1.32-.42a.756.756 0 0 1-.18-1.05Zm3.41 7c-1.9 0-3.45-1.55-3.45-3.45 0-.71.58-1.29 1.29-1.29h4.32c.71 0 1.29.58 1.29 1.29 0 1.9-1.55 3.45-3.45 3.45Zm3.38-5.94c-.39.26-.84.4-1.29.4-.47 0-.93-.14-1.32-.42a.753.753 0 1 1 .87-1.23.8.8 0 0 0 .9.01c.34-.24.81-.15 1.04.2.23.35.14.81-.2 1.04Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M14 6.2V10c-2.79.05-3.95 1.21-4 4H6.2C3.2 14 2 12.8 2 9.8V6.2C2 3.2 3.2 2 6.2 2h3.6c3 0 4.2 1.2 4.2 4.2Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M6.96 5.87c-.53-.36-1.23-.36-1.76.02M10.96 5.87c-.53-.36-1.23-.36-1.76.02M8.16 11.42H5.84c-.3 0-.54-.24-.54-.54 0-1.49 1.21-2.7 2.7-2.7.64 0 1.23.22 1.69.59"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 14.2v3.6c0 3-1.2 4.2-4.2 4.2h-3.6c-3 0-4.2-1.2-4.2-4.2V14c.05-2.79 1.21-3.95 4-4h3.8c3 0 4.2 1.2 4.2 4.2Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.96 13.62c-.53.36-1.23.36-1.76-.02M18.96 13.62c-.53.36-1.23.36-1.76-.02M13.84 16.18h4.32c.3 0 .54.24.54.54 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-.3.24-.54.54-.54Z"
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
      d="M10 14.75H6.2c-3.42 0-4.95-1.53-4.95-4.95V6.2c0-3.42 1.53-4.95 4.95-4.95h3.6c3.42 0 4.95 1.53 4.95 4.95V10c0 .41-.33.74-.74.75-2.4.04-3.22.87-3.26 3.26-.01.41-.34.74-.75.74Zm-3.8-12c-2.58 0-3.45.87-3.45 3.45v3.6c0 2.58.87 3.45 3.45 3.45h3.09c.24-2.44 1.52-3.71 3.96-3.96V6.2c0-2.58-.87-3.45-3.45-3.45H6.2Z"
      fill={color}
    ></Path>
    <Path
      d="M5.2 6.629c-.23 0-.47-.11-.61-.32a.753.753 0 0 1 .18-1.05c.78-.55 1.83-.56 2.62-.02.34.23.43.7.2 1.04-.23.34-.7.43-1.04.2a.8.8 0 0 0-.9.01c-.15.1-.3.14-.45.14ZM9.2 6.629c-.23 0-.47-.11-.61-.32a.753.753 0 0 1 .18-1.05c.78-.55 1.83-.56 2.62-.02.34.23.43.7.2 1.04-.23.34-.7.43-1.04.2a.8.8 0 0 0-.9.01c-.15.1-.3.14-.45.14ZM8.16 12.17H5.84c-.71 0-1.29-.58-1.29-1.29 0-1.9 1.55-3.45 3.45-3.45.78 0 1.55.27 2.16.76.32.26.38.73.12 1.05-.26.32-.73.37-1.05.12-.35-.28-.77-.43-1.22-.43-1 0-1.83.76-1.94 1.74h2.1c.41 0 .75.34.75.75s-.35.75-.76.75ZM17.8 22.75h-3.6c-3.42 0-4.95-1.53-4.95-4.95V14c.06-3.19 1.56-4.69 4.74-4.75h3.81c3.42 0 4.95 1.53 4.95 4.95v3.6c0 3.42-1.53 4.95-4.95 4.95Zm-3.8-12c-2.38.04-3.21.87-3.25 3.26v3.79c0 2.58.87 3.45 3.45 3.45h3.6c2.58 0 3.45-.87 3.45-3.45v-3.6c0-2.58-.87-3.45-3.45-3.45H14Z"
      fill={color}
    ></Path>
    <Path
      d="M14.09 14.628c-.47 0-.93-.14-1.32-.42a.753.753 0 1 1 .87-1.23.8.8 0 0 0 .9.01c.34-.23.81-.15 1.04.2.23.34.15.81-.2 1.04-.39.27-.84.4-1.29.4ZM18.09 14.628c-.47 0-.93-.14-1.32-.42a.753.753 0 1 1 .87-1.23.8.8 0 0 0 .9.01c.34-.23.81-.15 1.04.2.23.34.15.81-.2 1.04-.39.27-.84.4-1.29.4ZM16 20.17c-1.9 0-3.45-1.55-3.45-3.45 0-.71.58-1.29 1.29-1.29h4.32c.71 0 1.29.58 1.29 1.29 0 1.9-1.55 3.45-3.45 3.45Zm-1.94-3.24c.1.98.93 1.74 1.94 1.74 1.01 0 1.83-.76 1.94-1.74h-3.88Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      opacity=".4"
      d="M14 6.2V10c-2.79.05-3.95 1.21-4 4H6.2C3.2 14 2 12.8 2 9.8V6.2C2 3.2 3.2 2 6.2 2h3.6c3 0 4.2 1.2 4.2 4.2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M6.96 5.87c-.53-.36-1.23-.36-1.76.02M10.96 5.87c-.53-.36-1.23-.36-1.76.02M8.16 11.42H5.84c-.3 0-.54-.24-.54-.54 0-1.49 1.21-2.7 2.7-2.7.64 0 1.23.22 1.69.59"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 14.2v3.6c0 3-1.2 4.2-4.2 4.2h-3.6c-3 0-4.2-1.2-4.2-4.2V14c.05-2.79 1.21-3.95 4-4h3.8c3 0 4.2 1.2 4.2 4.2Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M14.96 13.622c-.53.36-1.23.36-1.76-.02M18.96 13.622c-.53.36-1.23.36-1.76-.02M13.84 16.18h4.32c.3 0 .54.24.54.54 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-.3.24-.54.54-.54Z"
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

const Smileys = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Smileys.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Smileys.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Smileys.displayName = 'Smileys';

export default Smileys;
