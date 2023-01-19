import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledChartLineStacked = (
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
        d="M8 40V7H6v34a1 1 0 0 0 1 1h34v-2H8Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m39.768 19.64-10 12a1 1 0 0 1-1.084.309L17.33 28.164 7.768 39.64l-1.536-1.28 10-12a1 1 0 0 1 1.084-.309l11.353 3.785 9.563-11.476 1.536 1.28Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m38.768 10.64-10 12a1 1 0 0 1-1.11.3l-10.37-3.771L7.74 29.673l-1.48-1.346 10-11a1 1 0 0 1 1.082-.267l10.34 3.76 9.55-11.46 1.536 1.28Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledChartLineStacked);
export default ForwardRef;
