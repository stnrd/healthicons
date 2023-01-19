import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledBoy0105Y = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M24 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm11.435 1.984a2 2 0 0 1-1.431 2.439c-1.804.47-3.445.83-5.004 1.076v6.376l.985 7.877a2 2 0 0 1-3.925.733l-2-8A2 2 0 0 1 24 29a2 2 0 0 1-.06.485l-2 8a2 2 0 0 1-3.925-.733L19 28.875v-6.402c-1.555-.248-3.188-.6-4.981-1.044a2 2 0 0 1 .962-3.883c3.638.902 6.359 1.345 9.027 1.356 2.662.01 5.375-.409 8.988-1.35a2 2 0 0 1 2.44 1.432Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledBoy0105Y);
export default ForwardRef;
