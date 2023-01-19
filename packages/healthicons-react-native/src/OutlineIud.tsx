import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineIud = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M11 6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1 1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H25v30.126A4.002 4.002 0 0 1 24 44a4 4 0 0 1-1-7.874V6H11Zm11 34a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineIud);
export default ForwardRef;
