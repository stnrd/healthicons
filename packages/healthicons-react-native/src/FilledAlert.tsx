import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledAlert = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M21 7a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0V7Zm0 34a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledAlert);
export default ForwardRef;
