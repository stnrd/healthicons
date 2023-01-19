import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineVirus = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 11c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13ZM9 24c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M22 27a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm3-8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm6 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M21 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v6a1 1 0 1 1-2 0V6h-1a1 1 0 0 1-1-1Zm3 30a1 1 0 0 1 1 1v6h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-6a1 1 0 0 1 1-1Zm-11.314 4.556a1 1 0 0 1-1.414 0l-2.828-2.828a1 1 0 1 1 1.414-1.414l.707.707 4.243-4.243a1 1 0 1 1 1.414 1.414l-4.243 4.243.707.707a1 1 0 0 1 0 1.414Zm19.092-23.334a1 1 0 0 1 0-1.415l4.243-4.242-.707-.707a1 1 0 1 1 1.414-1.414l2.828 2.828a1 1 0 0 1-1.414 1.414l-.707-.707-4.243 4.243a1 1 0 0 1-1.414 0ZM8.444 12.686a1 1 0 0 1 0-1.414l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707 4.243 4.243a1 1 0 0 1-1.414 1.414l-4.243-4.243-.707.707a1 1 0 0 1-1.414 0Zm23.334 19.092a1 1 0 0 1 1.414 0l4.243 4.243.707-.707a1 1 0 1 1 1.414 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l.707-.707-4.243-4.242a1 1 0 0 1 0-1.415ZM5 27a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v1h6a1 1 0 0 1 0 2H6v1a1 1 0 0 1-1 1Zm30-3a1 1 0 0 1 1-1h6v-1a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-1h-6a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineVirus);
export default ForwardRef;
