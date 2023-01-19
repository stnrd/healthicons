import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineAlert = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        stroke="#333"
        d="M21 8a3 3 0 1 1 6 0v22a3 3 0 1 1-6 0V8Zm0 32a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineAlert);
export default ForwardRef;
