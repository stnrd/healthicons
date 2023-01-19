import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHospitalized = (
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
        fillRule="evenodd"
        d="M29 6v2c0 1.306.835 2.418 2 2.83V12h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1v-1h5v12.066H20.11a.307.307 0 0 1-.218-.09l-.366-.37.369-.367a3.77 3.77 0 0 0 .001-5.333l-1.8-1.8a3.771 3.771 0 0 0-5.333-.003l-.704.704a3.953 3.953 0 0 0-3.892 1.021 4.034 4.034 0 0 0 0 5.676l.833.839V34H6v2h3.05a3.5 3.5 0 1 0 4.899 0h20.102a3.5 3.5 0 1 0 4.899 0H42v-2h-4v-3h.066C40.24 31 42 29.224 42 27.033a3.971 3.971 0 0 0-2-3.455V11a2 2 0 0 0-2-2h-6a1 1 0 0 1-1-1V6h-2ZM13.826 16.868l4.29 4.32.365-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.771 1.771 0 0 0-2.504-.002l-.35.35ZM36 34H11v-8.644l5.275 5.311c.212.213.498.333.797.333H36v3Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHospitalized);
export default ForwardRef;
