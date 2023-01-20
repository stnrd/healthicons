import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPoison = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M17 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v4a7 7 0 0 1 7 7v20a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3V21a7 7 0 0 1 7-7v-4h-2a1 1 0 0 1-1-1V5Zm5 5h4v5a1 1 0 0 0 1 1h1a5.002 5.002 0 0 1 4.9 4H15.1a5.002 5.002 0 0 1 4.9-4h1a1 1 0 0 0 1-1v-5Zm-7 12v19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V22H15Zm4-16v2h10V6H19Zm1.464 23.83 2.122 2.12-2.121 2.122-.708-.708-1.414 1.415.708.707 1.414 1.415.707.706 1.414-1.414-.707-.707L24 33.365l2.121 2.121-.707.707 1.414 1.415 2.829-2.829-1.414-1.414-.707.707-2.122-2.121 2.122-2.122.707.707 1.414-1.415-2.829-2.828-1.414 1.414.708.708L24 30.537l-2.121-2.122.707-.707-1.414-1.414-.708.707-1.414 1.414-.707.707 1.414 1.414.707-.707Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPoison);
export default ForwardRef;
