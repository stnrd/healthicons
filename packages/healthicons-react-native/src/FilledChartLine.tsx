import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledChartLine = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M8 40V7H6v34a1 1 0 0 0 1 1h35v-2H8Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m15.285 26.12-7.5 9.5-1.57-1.24 7.5-9.5 1.57 1.24Zm12.399 2.829-12-4 .632-1.898 12 4-.632 1.898Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m38.768 16.64-10 12-1.536-1.28 10-12 1.536 1.28Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M19 24a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M16 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M31 28a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M28 29a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M41 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M38 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledChartLine);
export default ForwardRef;
