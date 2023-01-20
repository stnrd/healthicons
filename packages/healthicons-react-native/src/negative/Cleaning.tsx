import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCleaning = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM21.479 28.177l4.81-2.557a2 2 0 0 1 2.705.827l.648 1.217-8.343 4.436-.647-1.218a2 2 0 0 1 .827-2.705Zm9.281-2.67.648 1.22 6.869 10.054-8.737 4.645-3.027-5.983-1.784.903 3.045 6.02-3.746 1.991-4.495-11.318-.647-1.218a4 4 0 0 1 1.654-5.41l1.522-.809L11.33 5.416a1 1 0 0 1 1.766-.939l10.733 20.186 1.522-.81a4 4 0 0 1 5.41 1.655Zm-14.4 9.724a1 1 0 0 1 1.28 1.537l-.016.013c-.56.45-1.197.813-1.844 1.122A11.15 11.15 0 0 1 11 39a1 1 0 1 1 0-2 9.148 9.148 0 0 0 3.92-.903 8.83 8.83 0 0 0 1.094-.617 6.033 6.033 0 0 0 .336-.24l.01-.009Zm3.408 5.129a1 1 0 0 0-1.408-.129l-.01.008-.062.048c-.058.044-.15.11-.274.193a8.83 8.83 0 0 1-1.094.617A9.148 9.148 0 0 1 13 42a1 1 0 1 0 0 2 11.15 11.15 0 0 0 4.78-1.097c.647-.309 1.283-.671 1.844-1.122l.016-.013a1 1 0 0 0 .128-1.408Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCleaning);
export default ForwardRef;
