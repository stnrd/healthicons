import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFinanceDept = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm8 4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H17Z"
        fill="#333"
      />
      <Path
        d="M17 12h14v9H17v-9ZM21.273 24.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM25.636 24.636a1.636 1.636 0 1 1-3.272 0 1.636 1.636 0 0 1 3.272 0ZM30 24.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM21.273 29A1.636 1.636 0 1 1 18 29a1.636 1.636 0 0 1 3.273 0ZM25.636 29a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM30 29a1.636 1.636 0 1 1-3.273 0A1.636 1.636 0 0 1 30 29ZM30 33.364a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM18 33.364c0-.904.733-1.637 1.636-1.637H24A1.636 1.636 0 1 1 24 35h-4.364A1.636 1.636 0 0 1 18 33.364Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFinanceDept);
export default ForwardRef;
