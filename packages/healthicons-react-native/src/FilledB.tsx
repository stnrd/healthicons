import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledB = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14 12a2 2 0 0 1 2-2h10a8 8 0 0 1 5.292 14A8 8 0 0 1 26 38H16a2 2 0 0 1-2-2V12Zm12 10a4 4 0 0 0 0-8h-8v8h8Zm-8 4h8a4 4 0 0 1 0 8h-8v-8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledB);
export default ForwardRef;
