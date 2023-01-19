import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeSpreadsheets = (
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
        d="M48 0H0v48h48V0ZM30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1V4ZM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V19Zm2 1v3h16v-3H16Zm0 8v-3h4v3h-4Zm0 5v-3h4v3h-4Zm6-3v3h4v-3h-4Zm6 3v-3h4v3h-4Zm0-5v-3h4v3h-4Zm-6 0h4v-3h-4v3Zm10-18h5.414L32 4.586V10Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeSpreadsheets);
export default ForwardRef;
