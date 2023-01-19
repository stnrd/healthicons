import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeGhana = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20.173 14.732a9.996 9.996 0 0 1 1.827-.56v19.596a9.995 9.995 0 0 1-6.315-4.242 10 10 0 0 1 4.488-14.794Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM24 6a2 2 0 0 1 2 2v2.114a14 14 0 0 1 7.9 3.957 2 2 0 0 1-2.829 2.828A10 10 0 0 0 26 14.172v19.596a9.999 9.999 0 0 0 5.071-2.727A2 2 0 0 1 33.9 33.87a14 14 0 0 1-7.9 3.957V40a2 2 0 1 1-4 0v-2.173a14 14 0 0 1 0-27.713V8a2 2 0 0 1 2-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeGhana);
export default ForwardRef;
