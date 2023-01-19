import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSquareLarge = (
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
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        d="M6 7a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v34a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSquareLarge);
export default ForwardRef;
