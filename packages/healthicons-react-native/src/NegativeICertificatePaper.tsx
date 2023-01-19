import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeICertificatePaper = (
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
        d="M30 40h-4v-3.535a4 4 0 1 1 4 0V40Zm-2-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M18 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1Zm-3 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15Zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm10 7v30a3 3 0 0 0 3 3h13v4l2-1.5 2 1.5v-4h5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeICertificatePaper);
export default ForwardRef;
