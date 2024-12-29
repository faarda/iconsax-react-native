import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M21.81 3.938c-1.31 3.27-4.3 7.54-7.15 10.33a5.962 5.962 0 0 0-5.07-4.96c2.8-2.86 7.1-5.89 10.38-7.21.58-.22 1.16-.05 1.52.31.38.38.56.95.32 1.53Z"
      fill={color}
    ></Path>
    <Path
      d="M13.78 15.09c-.2.17-.4.34-.6.5l-1.79 1.43c0-.03-.01-.07-.01-.11-.14-1.07-.64-2.06-1.45-2.87a5.029 5.029 0 0 0-2.96-1.46c-.03 0-.07-.01-.1-.01l1.45-1.83c.14-.18.29-.35.45-.53l.68.09c2.15.3 3.88 1.99 4.22 4.13l.11.66Z"
      fill={color}
    ></Path>
    <Path
      d="M10.43 17.62c0 1.1-.42 2.15-1.22 2.94-.61.62-1.43 1.04-2.43 1.16l-2.45.27c-1.34.15-2.49-1-2.34-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.19-.01.4 0 .6.02.85.11 1.67.5 2.36 1.18.67.67 1.05 1.46 1.16 2.29.02.2.04.39.04.58Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M18.02 3.01c.67-.36 1.33-.67 1.94-.91.59-.22 1.16-.06 1.52.31.38.38.56.95.32 1.54-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c1.35-1.69 3.44-3.56 5.66-5.18"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.43 17.619c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16l-2.46.27c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57ZM14.24 14.468c0-2.61-2.12-4.73-4.73-4.73"
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
      d="M21.81 3.938c-1.31 3.27-4.3 7.54-7.15 10.33a5.962 5.962 0 0 0-5.07-4.96c2.8-2.86 7.1-5.89 10.38-7.21.58-.22 1.16-.05 1.52.31.38.38.56.95.32 1.53Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M14.66 14.269c-.5.49-1 .94-1.48 1.32l-1.97 1.58c-.25.18-.5.33-.78.45 0-.19-.02-.38-.04-.58-.11-.83-.49-1.62-1.16-2.29-.69-.68-1.51-1.07-2.36-1.18-.2-.02-.41-.03-.6-.02.11-.31.28-.6.49-.84l1.56-1.97c.37-.47.8-.95 1.27-1.43 2.6.36 4.66 2.38 5.07 4.96Z"
      fill={color}
    ></Path>
    <Path
      d="M10.43 17.62c0 1.1-.42 2.15-1.22 2.94-.61.62-1.43 1.04-2.43 1.16l-2.45.27c-1.34.15-2.49-1-2.34-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.19-.01.4 0 .6.02.85.11 1.67.5 2.36 1.18.67.67 1.05 1.46 1.16 2.29.02.2.04.39.04.58Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M21.81 3.94c-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c2.58-3.23 7.82-7.11 11.65-8.64.59-.22 1.16-.06 1.52.31.38.37.56.94.32 1.52z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M10.43 17.62c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16L4.33 22c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57zM14.24 14.47c0-2.61-2.12-4.73-4.73-4.73"
    ></Path>
  </>
);

const Outline = ({ color }) => (
  <>
    <Path
      d="M10.43 18.37c-.15 0-.29-.04-.42-.13a.738.738 0 0 1-.33-.62c0-.15-.01-.31-.03-.47-.09-.71-.41-1.33-.95-1.87s-1.21-.88-1.93-.97c-.12-.01-.29-.02-.45-.01-.26.02-.5-.09-.65-.3a.78.78 0 0 1-.11-.71c.15-.41.37-.78.63-1.08l1.54-1.94c2.65-3.31 8.02-7.29 11.95-8.87a2.17 2.17 0 0 1 2.33.47c.63.63.82 1.53.49 2.35-1.58 3.94-5.55 9.3-8.86 11.95l-1.97 1.58c-.37.27-.67.44-.97.56-.08.04-.18.06-.27.06Zm-2.89-5.43c.84.22 1.59.66 2.22 1.29a4.62 4.62 0 0 1 1.26 2.14l1.69-1.36c3.14-2.51 6.91-7.6 8.4-11.34a.628.628 0 0 0-.16-.72.669.669 0 0 0-.73-.14c-3.72 1.5-8.81 5.27-11.33 8.41l-1.35 1.72Z"
      fill={color}
    ></Path>
    <Path
      d="M4.08 22.75c-.75 0-1.47-.3-2.01-.84-.62-.62-.92-1.48-.82-2.36l.27-2.46c.26-2.44 2.26-4.25 4.74-4.3.19-.01.44 0 .67.02 1.09.14 2.06.63 2.84 1.41.77.77 1.23 1.69 1.37 2.72a4.91 4.91 0 0 1-1.38 4.15c-.77.76-1.76 1.23-2.88 1.37l-2.47.27c-.11.01-.22.02-.33.02Zm2.37-8.45h-.13c-1.51.03-3.11 1.06-3.31 2.96l-.27 2.46c-.05.42.1.83.39 1.13.29.29.7.44 1.11.39l2.46-.27c.77-.1 1.46-.42 1.98-.94.64-.64 1-1.5 1-2.42 0-.15-.01-.31-.03-.47-.09-.71-.41-1.33-.95-1.87s-1.21-.88-1.93-.97h-.32ZM14.24 15.218c-.41 0-.75-.34-.75-.75 0-2.2-1.79-3.98-3.98-3.98-.41 0-.75-.34-.75-.75s.33-.75.74-.75c3.02 0 5.48 2.46 5.48 5.48.01.42-.33.75-.74.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M21.81 3.942c-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c2.58-3.23 7.82-7.11 11.65-8.64.59-.22 1.16-.06 1.52.31.38.37.56.94.32 1.52Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.43 17.619c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16l-2.46.27c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M14.24 14.468c0-2.61-2.12-4.73-4.73-4.73"
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

const Brush2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Brush2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Brush2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Brush2.displayName = 'Brush2';

export default Brush2;