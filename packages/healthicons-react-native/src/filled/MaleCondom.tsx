import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMaleCondom = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m27.886 6 4.108 1.14-.732 2.85 2.733.764-.732 2.85 2.733.763-.732 2.85 2.734.764-.733 2.85 2.734.763-.733 2.85 2.734.764-1.107 4.28L20.105 42l-4.1-1.145.733-2.85-2.734-.764.732-2.85-2.733-.763.732-2.85-2.733-.764.732-2.85-2.733-.763.732-2.85L6 22.787l1.09-4.27L27.886 6ZM16.207 28.5a9 9 0 1 0 15.589-9 9 9 0 0 0-15.589 9Zm1.735-1.002A6.999 6.999 0 1 0 30.064 20.5a6.999 6.999 0 0 0-12.122 6.998Zm8.558.831a5 5 0 1 1-5-8.658 5 5 0 0 1 5 8.658Zm-.909-1.575a3.18 3.18 0 1 1-3.18-5.51 3.18 3.18 0 0 1 3.18 5.51Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgMaleCondom);
export default ForwardRef;
