import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledW = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M11.671 10.027a2 2 0 0 0-1.644 2.302l4 24a2 2 0 0 0 3.71.663L24 26.031l6.263 10.961a2 2 0 0 0 3.71-.663l4-24a2 2 0 1 0-3.946-.658l-3.077 18.46-5.214-9.123a2 2 0 0 0-3.473 0l-5.214 9.124-3.076-18.461a2 2 0 0 0-2.302-1.644Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledW);
export default ForwardRef;
