import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineChartBar = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M8 40V7H6v34a1 1 0 0 0 1 1h34v-2H8Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M11 25a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V25Zm2 1v14h4V26h-4Zm8-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V21Zm2 1v18h4V22h-4Zm8-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V13Zm2 1v26h4V14h-4Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineChartBar);
export default ForwardRef;
