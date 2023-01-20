import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOxygenTank = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM17 6.048h2v-2h-6v2h2v2h-2.17a3.001 3.001 0 1 0 0 2H15v2.083a6.002 6.002 0 0 0-5 5.917v2h12v-2a6.002 6.002 0 0 0-5-5.917v-2.083h5v-2h-5v-2Zm-7 37v-21h12v21a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1Zm-1-34a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm21 8a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0v-6a4 4 0 0 0-4-4Zm-2 4a2 2 0 1 1 4 0v6a2 2 0 0 1-4 0v-6Zm10 5h-3v-2h3a3 3 0 1 1 0 6 1 1 0 0 0-1 1v1h4v2h-5a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3 1 1 0 0 0 0-2Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOxygenTank);
export default ForwardRef;
