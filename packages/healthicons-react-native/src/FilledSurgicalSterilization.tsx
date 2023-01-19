import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSurgicalSterilization = (
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
        d="M26.185 36.649A4 4 0 1 0 28 40.03l.223-4.018h1.553L30 40.03a4 4 0 1 0 1.815-3.381L29.998 4 29 4.056 28.002 4l-1.817 32.649Zm3.48-2.637L29 22.056l-.665 11.956h1.33ZM30 18.036a1 1 0 1 1-1.999-.001 1 1 0 0 1 1.999.001ZM22 40a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm12-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M15 15V4s-3.478 2.26-3.948 10.998C10.993 16.101 11.895 17 13 17a2 2 0 0 0 2-2Zm-3 5.5a1.5 1.5 0 0 1 3 0v.086l-3 3V20.5Zm0 5.914v1.672l3-3v-1.672l-3 3Zm0 6.172v-1.672l3-3v1.672l-3 3Zm0 2.828V42.5a1.5 1.5 0 0 0 3 0V32.414l-3 3Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSurgicalSterilization);
export default ForwardRef;
