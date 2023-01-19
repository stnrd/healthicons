import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledR = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14 12a2 2 0 0 1 2-2h10a8 8 0 0 1 2.954 15.437l4.835 9.669a2 2 0 0 1-3.578 1.788L24.764 26H18v10a2 2 0 1 1-4 0V12Zm4 10h8a4 4 0 0 0 0-8h-8v8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledR);
export default ForwardRef;
