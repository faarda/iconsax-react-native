import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M18 2H6C4.34 2 3 3.33 3 4.97v10.91c0 1.64 1.34 2.98 3 2.98h.76c.79 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.04.77 2.82 0l1.71-1.69c.56-.56 1.33-.87 2.12-.87H18c1.66 0 3-1.34 3-2.98V4.97C21 3.33 19.66 2 18 2Zm-6 3.55c1.08 0 1.95.88 1.95 1.95 0 1.06-.84 1.91-1.88 1.95h-.15a1.945 1.945 0 0 1-1.88-1.95c.01-1.07.88-1.95 1.96-1.95Zm2.75 9.14c-1.51 1.01-3.99 1.01-5.5 0-1.33-.88-1.33-2.34 0-3.23 1.52-1.01 4-1.01 5.5 0 1.33.89 1.33 2.34 0 3.23Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M21 8.95v6.93c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12.07 8.95h-.15A1.945 1.945 0 0 1 10.04 7c0-1.08.87-1.95 1.95-1.95s1.95.88 1.95 1.95c.01 1.06-.82 1.92-1.87 1.95ZM9.25 15.19c1.51 1.01 3.99 1.01 5.5 0 1.33-.89 1.33-2.34 0-3.23-1.51-1.01-3.99-1.01-5.5 0"
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
      d="M12.073 8.95h-.15A1.945 1.945 0 0 1 10.043 7c0-1.08.87-1.95 1.95-1.95s1.95.88 1.95 1.95c.01 1.06-.82 1.92-1.87 1.95ZM9.251 11.96c-1.33.89-1.33 2.34 0 3.23 1.51 1.01 3.99 1.01 5.5 0 1.33-.89 1.33-2.34 0-3.23-1.51-1-3.98-1-5.5 0Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M18 2H6C4.34 2 3 3.33 3 4.97v10.91c0 1.64 1.34 2.97 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69c.56-.56 1.33-.87 2.12-.87H18c1.66 0 3-1.33 3-2.97V4.97C21 3.33 19.66 2 18 2Zm-6 3.05c1.08 0 1.95.88 1.95 1.95 0 1.06-.84 1.91-1.88 1.95h-.15A1.945 1.945 0 0 1 10.04 7c.01-1.07.88-1.95 1.96-1.95Zm2.75 10.14c-1.51 1.01-3.99 1.01-5.5 0-1.33-.88-1.33-2.34 0-3.23 1.52-1.01 4-1.01 5.5 0 1.33.89 1.33 2.34 0 3.23Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.98-3 2.98Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12.07 8.95h-.15A1.945 1.945 0 0 1 10.04 7c0-1.08.87-1.95 1.95-1.95s1.95.88 1.95 1.95c.01 1.06-.82 1.92-1.87 1.95ZM9.25 11.96c-1.33.89-1.33 2.34 0 3.23 1.51 1.01 3.99 1.01 5.5 0 1.33-.89 1.33-2.34 0-3.23-1.51-1-3.98-1-5.5 0Z"
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
      d="M12 22.75c-.7 0-1.41-.27-1.94-.8l-1.71-1.69c-.42-.42-1-.65-1.59-.65H6c-2.07 0-3.75-1.67-3.75-3.72V4.97c0-2.05 1.68-3.72 3.75-3.72h12c2.07 0 3.75 1.67 3.75 3.72v10.91c0 2.05-1.68 3.72-3.75 3.72h-.76a2.3 2.3 0 0 0-1.59.65l-1.71 1.69c-.53.54-1.24.81-1.94.81Zm-6-20c-1.24 0-2.25 1-2.25 2.22v10.91c0 1.23 1.01 2.22 2.25 2.22h.76c.99 0 1.95.4 2.65 1.09l1.71 1.69c.49.48 1.28.48 1.77 0l1.71-1.69c.7-.69 1.66-1.09 2.65-1.09H18c1.24 0 2.25-1 2.25-2.22V4.97c0-1.23-1.01-2.22-2.25-2.22H6Z"
      fill={color}
    ></Path>
    <Path
      d="M12.07 9.7h-.17A2.681 2.681 0 0 1 9.3 7c0-1.49 1.21-2.7 2.7-2.7a2.701 2.701 0 0 1 .09 5.4h-.02ZM12 5.8c-.66 0-1.2.54-1.2 1.2 0 .65.51 1.18 1.15 1.2 0-.01.06-.01.13 0 .63-.04 1.12-.56 1.12-1.2 0-.66-.54-1.2-1.2-1.2ZM12 16.698c-1.14 0-2.28-.3-3.17-.89-.84-.56-1.33-1.37-1.33-2.23 0-.86.48-1.68 1.33-2.24 1.78-1.18 4.56-1.18 6.33 0 .84.56 1.33 1.38 1.33 2.23 0 .86-.48 1.67-1.33 2.24-.88.6-2.02.89-3.16.89Zm-2.34-4.11c-.43.29-.66.64-.66.99s.24.7.66.99c1.27.85 3.4.85 4.67 0 .43-.29.67-.64.66-.99 0-.35-.24-.7-.66-.99-1.26-.85-3.4-.85-4.67 0Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.98-3 2.98Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M12.07 8.95h-.15A1.945 1.945 0 0 1 10.04 7c0-1.08.87-1.95 1.95-1.95s1.95.88 1.95 1.95c.01 1.06-.82 1.92-1.87 1.95ZM9.251 11.96c-1.33.89-1.33 2.34 0 3.23 1.51 1.01 3.99 1.01 5.5 0 1.33-.89 1.33-2.34 0-3.23-1.51-1-3.98-1-5.5 0Z"
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

const TagUser = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
TagUser.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
TagUser.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
TagUser.displayName = 'TagUser';

export default TagUser;