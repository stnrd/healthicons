import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineLowBars = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m7.293 37.293 6.364-6.364M9.086 40.5l5.889-5.89M35 41h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2Zm-13 0h4a2 2 0 0 0 2-2V21a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2ZM9 41h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineLowBars);
export default ForwardRef;
