import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeHomeAlt = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M0 0h48v48H0V0Zm20 33v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V21.925l-3.294 3.283a1 1 0 0 1-1.412-1.416l17.056-17 .708-.706.706.708 16.944 17a1 1 0 0 1-1.416 1.412L37 21.903V41a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeHomeAlt);
export default ForwardRef;
