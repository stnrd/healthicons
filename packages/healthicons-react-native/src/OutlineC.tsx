import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineC = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M18.26 10.142a15 15 0 0 1 16.347 3.251 3 3 0 1 1-4.243 4.243 9.001 9.001 0 1 0 0 12.728 3 3 0 1 1 4.243 4.243A15 15 0 1 1 18.26 10.142Zm8.276 1.108a13 13 0 1 0 6.656 21.942 1 1 0 0 0-1.414-1.414 11 11 0 1 1 0-15.556 1 1 0 1 0 1.414-1.414 13 13 0 0 0-6.656-3.558Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineC);
export default ForwardRef;
