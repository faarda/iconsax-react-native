import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M15.908 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09ZM5.09 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.77 0-3.1 1.33-3.1 3.09v3c0 1.76 1.33 3.09 3.09 3.09Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M13.63 5.86c0-1.42 1.05-2.58 2.58-2.58h3.21c1.42 0 2.58 1.16 2.58 2.58v5.8"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 11.648h-5.8c-.96 0-1.72-.45-2.16-1.14M22 11.649c0 6.05-1.13 7.05-4.53 9.07M10.369 11.648h-5.8c-1.53 0-2.58-1.16-2.58-2.58v-3.22c0-1.42 1.05-2.58 2.58-2.58h3.23c1.42 0 2.58 1.16 2.58 2.58v5.8M10.367 11.649c0 6.05-1.13 7.05-4.53 9.07"
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
      d="M15.908 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M5.092 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8ZM22 11.65c0 6.05-1.13 7.05-4.53 9.07M10.37 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8M10.37 11.65c0 6.05-1.13 7.05-4.53 9.07"
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
      d="M22.001 12.4h-5.8c-1.9 0-3.33-1.43-3.33-3.33V5.85c0-1.9 1.43-3.33 3.33-3.33h3.22c1.83 0 3.33 1.49 3.33 3.33v5.8c0 .42-.34.75-.75.75Zm-5.8-8.37c-1.06 0-1.83.77-1.83 1.83v3.22c0 1.06.77 1.83 1.83 1.83h5.05V5.86c0-1.01-.82-1.83-1.83-1.83h-3.22Z"
      fill={color}
    ></Path>
    <Path
      d="M17.469 21.468c-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c3.23-1.92 4.17-2.72 4.17-8.42 0-.41.34-.75.75-.75s.75.34.75.75c0 6.25-1.27 7.56-4.9 9.71a.67.67 0 0 1-.38.11ZM10.372 12.4h-5.8c-1.9 0-3.33-1.43-3.33-3.33V5.85c0-1.9 1.43-3.33 3.33-3.33h3.23c1.83 0 3.33 1.49 3.33 3.33v5.8c-.01.42-.34.75-.76.75Zm-5.79-8.37c-1.06 0-1.83.77-1.83 1.83v3.22c0 1.06.77 1.83 1.83 1.83h5.05V5.86c0-1.01-.82-1.83-1.83-1.83h-3.22Z"
      fill={color}
    ></Path>
    <Path
      d="M5.84 21.468c-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c3.23-1.92 4.17-2.72 4.17-8.42 0-.41.34-.75.75-.75s.75.34.75.75c0 6.25-1.27 7.56-4.9 9.71a.67.67 0 0 1-.38.11Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M22.001 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8ZM22.003 11.648c0 6.05-1.13 7.05-4.53 9.07"
      stroke={color}
      strokeWidth="{strokeWidth}"
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
      <Path d="M10.372 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.23c1.42 0 2.58 1.16 2.58 2.58v5.8"></Path>
      <Path d="M10.374 11.648c0 6.05-1.13 7.05-4.53 9.07"></Path>
    </G>
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

const QuoteDown = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
QuoteDown.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
QuoteDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
QuoteDown.displayName = 'QuoteDown';

export default QuoteDown;
