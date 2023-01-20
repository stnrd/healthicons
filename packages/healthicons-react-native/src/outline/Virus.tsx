import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirus = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 11c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13ZM9 24c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15Z"
        fill="#333"
      />
      <Path
        d="M22 27a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM25 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM31 26a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v6a1 1 0 1 1-2 0V6h-1a1 1 0 0 1-1-1ZM24 35a1 1 0 0 1 1 1v6h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-6a1 1 0 0 1 1-1ZM12.686 39.556a1 1 0 0 1-1.414 0l-2.828-2.828a1 1 0 1 1 1.414-1.414l.707.707 4.243-4.243a1 1 0 1 1 1.414 1.414l-4.243 4.243.707.707a1 1 0 0 1 0 1.414ZM31.778 16.222a1 1 0 0 1 0-1.415l4.243-4.242-.707-.707a1 1 0 1 1 1.414-1.414l2.828 2.828a1 1 0 0 1-1.414 1.414l-.707-.707-4.243 4.243a1 1 0 0 1-1.414 0ZM8.444 12.686a1 1 0 0 1 0-1.414l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707 4.243 4.243a1 1 0 0 1-1.414 1.414l-4.243-4.243-.707.707a1 1 0 0 1-1.414 0ZM31.778 31.778a1 1 0 0 1 1.414 0l4.243 4.243.707-.707a1 1 0 1 1 1.414 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l.707-.707-4.243-4.242a1 1 0 0 1 0-1.415ZM5 27a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v1h6a1 1 0 0 1 0 2H6v1a1 1 0 0 1-1 1ZM35 24a1 1 0 0 1 1-1h6v-1a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-1h-6a1 1 0 0 1-1-1Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgVirus);
export default ForwardRef;
