import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialDistancing = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
      <Path d="M8 14h32" stroke="#333" />
      <Path
        d="M10.83 11 8.71 13.121a1 1 0 0 0 0 1.415l2.121 2.12M37.17 16.657l2.121-2.122a1 1 0 0 0 0-1.414L37.17 11"
        stroke="#333"
        strokeLinecap="round"
      />
      <Path
        d="M14 25.5a2.499 2.499 0 1 1-5 0 2.499 2.499 0 1 1 5 0ZM5 34.267c0-.773.709-1.596 2.226-2.288C8.658 31.327 10.392 31 11.5 31s2.842.326 4.274.98C17.29 32.67 18 33.493 18 34.266V37H5v-2.733ZM39 25.5a2.499 2.499 0 1 1-5 0 2.499 2.499 0 1 1 5 0ZM30 34.267c0-.773.709-1.596 2.226-2.288C33.658 31.327 35.392 31 36.5 31s2.842.326 4.274.98C42.29 32.67 43 33.493 43 34.266V37H30v-2.733Z"
        fill="#333"
        stroke="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSocialDistancing);
export default ForwardRef;
