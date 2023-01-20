import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTriangleLarge = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      <Path d="M24 42H6l9-18 9-18 9 18 9 18H24Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 5a1 1 0 0 1 .894.553l18 36A1 1 0 0 1 42 43H6a1 1 0 0 1-.894-1.447l18-36A1 1 0 0 1 24 5Zm0 3.236L7.618 41h32.764L24 8.236Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTriangleLarge);
export default ForwardRef;
