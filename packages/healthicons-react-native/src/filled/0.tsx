import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg0 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M22 14a4 4 0 0 0-4 4v11.38L27.25 14.2A4 4 0 0 0 26 14h-4Zm7.96 3.436-9.814 16.11A3.98 3.98 0 0 0 22 34h4a4 4 0 0 0 4-4V18c0-.191-.013-.38-.04-.564ZM14 18a8 8 0 0 1 8-8h4c2.048 0 3.92.772 5.334 2.037A7.985 7.985 0 0 1 34 18v12a8 8 0 0 1-8 8h-4c-2.37 0-4.5-1.033-5.962-2.666A7.977 7.977 0 0 1 14 30V18Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(Svg0);
export default ForwardRef;
