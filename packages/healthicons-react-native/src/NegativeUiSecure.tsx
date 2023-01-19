import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeUiSecure = (
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
        d="M18 18h12v-2a6 6 0 0 0-12 0v2Zm-3 8h18v-2H15v2Zm18 5H15v-2h18v2Zm-18 5h18v-2H15v2Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm11 18a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2h-3v-2c0-5.523-4.477-10-10-10s-10 4.477-10 10v2h-3Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeUiSecure);
export default ForwardRef;
