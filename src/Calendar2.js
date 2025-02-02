import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color }) => (
  <>
    <Path
      d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25ZM20 9.84H4c-.55 0-1 .45-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16c0-.55-.45-1-1-1ZM9.21 18.21c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.21-.16.33-.21a1 1 0 0 1 .76 0c.12.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm.21-3.83c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 7.5 14c0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.21-.16.33-.21a1 1 0 0 1 .76 0c.12.05.23.12.33.21.09.1.16.21.21.33.05.12.08.25.08.38s-.03.26-.08.38Zm3.29.33c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.21-.16.33-.21.24-.11.52-.11.76 0 .12.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color }) => (
  <>
    <Path
      d="M8 2v3M16 2v3M3.5 9.09h17M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.995 13.7h.009M8.295 13.7h.01M8.295 16.7h.01"
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
      d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M20 9.84c.55 0 1 .45 1 1V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.16c0-.55.45-1 1-1h16Z"
      fill={color}
    ></Path>
    <Path
      d="M8.5 14.999c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.09-.1-.16-.21-.21-.33a.995.995 0 0 1-.08-.38c0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.21-.16.33-.21a1 1 0 0 1 .76 0c.12.05.23.12.33.21.09.1.16.21.21.33.05.12.08.25.08.38s-.03.26-.08.38-.12.23-.21.33c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08ZM12 14.999c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.21-.16.33-.21.24-.11.52-.11.76 0 .12.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08ZM8.5 18.499c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.21-.16.33-.21a1 1 0 0 1 .76 0c.12.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth }) => (
  <>
    <Path
      d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"
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
      d="M8 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM16 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM20.5 9.84h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V8.5c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75V17c0 3.65-2.1 5.75-5.75 5.75ZM8 4.25c-2.86 0-4.25 1.39-4.25 4.25V17c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V8.5c0-2.86-1.39-4.25-4.25-4.25H8Z"
      fill={color}
    ></Path>
    <Path
      d="M8.5 14.5c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.09-.1-.16-.21-.21-.33a.995.995 0 0 1-.08-.38c0-.26.11-.52.29-.71.1-.09.21-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.04.05.09.1.12.15.04.06.07.12.09.18.03.06.05.12.06.18.01.07.02.13.02.2 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM12 14.499c-.26 0-.52-.11-.71-.29l-.12-.15a.757.757 0 0 1-.09-.18.636.636 0 0 1-.06-.18c-.01-.07-.02-.13-.02-.2 0-.13.03-.26.08-.38s.12-.23.21-.33c.28-.28.73-.37 1.09-.21.13.05.23.12.33.21.18.19.29.45.29.71 0 .07-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15c-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08ZM8.5 17.999c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.09-.1-.16-.2-.21-.33a.995.995 0 0 1-.08-.38c0-.26.11-.52.29-.71.1-.09.21-.16.33-.21.37-.16.81-.07 1.09.21.04.05.09.1.12.15.04.06.07.12.09.18.03.06.05.12.06.19.01.06.02.13.02.19 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <Path
      d="M8 2v3M16 2v3"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M3.5 9.09h17"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      stroke={color}
      strokeWidth="{strokeWidth}"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M11.995 13.7h.009M8.295 13.7h.01M8.295 16.7h.009"
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

const Calendar2 = forwardRef(({ variant, color, size, strokeWidth, ...rest }, ref) => {
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
Calendar2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number, // Optional prop
};
Calendar2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
  strokeWidth: 1.5, // Default strokeWidth only affects Linear variant
};
Calendar2.displayName = 'Calendar2';

export default Calendar2;
