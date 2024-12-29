import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="m21.77 9.798-.8-1.8-1.76-3.96c-.47-1.04-1.21-1.89-2.91-1.89H7.7c-1.7 0-2.44.85-2.91 1.89l-1.76 3.96-.8 1.8c-.46 1.05-.21 2.59.56 3.44l6.85 7.54c1.3 1.43 3.42 1.43 4.72 0l6.85-7.54c.77-.85 1.02-2.39.56-3.44Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M21.21 13.228c.77-.85 1.02-2.39.55-3.43l-2.56-5.76c-.46-1.04-1.21-1.89-2.91-1.89H7.7c-1.7 0-2.45.85-2.91 1.89l-2.56 5.76c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l4.03-4.44M3.5 8h17"
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
      d="m21.21 13.24-6.85 7.54c-1.3 1.43-3.42 1.43-4.72 0l-6.85-7.54c-.77-.85-1.02-2.39-.56-3.44l.8-1.8h17.94l.8 1.8c.46 1.05.21 2.59-.56 3.44Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M20.97 7.998H3.03l1.76-3.96c.47-1.04 1.21-1.89 2.91-1.89h8.6c1.7 0 2.44.85 2.91 1.89l1.76 3.96Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M16.29 2.15H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43L19.2 4.03c-.46-1.03-1.21-1.88-2.91-1.88ZM3.5 8h17"
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
      d="M12 22.6c-1.11 0-2.14-.47-2.91-1.31l-6.86-7.54c-.97-1.06-1.27-2.93-.69-4.24L4.1 3.75c.7-1.57 1.87-2.34 3.59-2.34h8.59v.75-.75c1.72 0 2.89.76 3.59 2.33l2.56 5.76c.58 1.31.29 3.18-.68 4.24l-6.85 7.55c-.75.84-1.79 1.31-2.9 1.31Zm4.29-19.7H7.7c-1.31 0-1.84.58-2.22 1.45l-2.56 5.76c-.34.77-.14 2 .42 2.62l6.86 7.54c.48.53 1.12.82 1.8.82.68 0 1.32-.29 1.8-.82l6.85-7.55c.57-.63.77-1.85.42-2.62l-2.56-5.76c-.38-.86-.91-1.44-2.22-1.44Z"
      fill={color}
    ></Path>
    <Path
      d="M3.5 8.748c-.41 0-.75-.34-.75-.75s.34-.75.75-.75l17-.01c.41 0 .75.34.75.75s-.34.75-.75.75l-17 .01Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M16.29 2.148H7.7c-1.7 0-2.45.85-2.91 1.89l-2.56 5.76c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43l-2.56-5.76c-.46-1.03-1.21-1.88-2.91-1.88Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M3.5 8h17"
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

const Diamonds = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Diamonds.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Diamonds.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Diamonds.displayName = 'Diamonds';

export default Diamonds;
