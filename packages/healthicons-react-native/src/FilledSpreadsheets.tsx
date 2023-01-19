import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSpreadsheets = (
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
        d="M16 20v3h16v-3H16Zm0 8v-3h4v3h-4Zm0 2v3h4v-3h-4Zm6 0v3h4v-3h-4Zm6 0v3h4v-3h-4Zm0-2v-3h4v3h-4Zm-2 0h-4v-3h4v3Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1V4ZM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V19Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M37.414 10H32V4.586L37.414 10Z" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSpreadsheets);
export default ForwardRef;
