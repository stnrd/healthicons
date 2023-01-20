import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgJ = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM32 12a2 2 0 1 0-4 0v18a4 4 0 1 1-8 0 2 2 0 1 0-4 0 8 8 0 1 0 16 0V12Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgJ);
export default ForwardRef;
