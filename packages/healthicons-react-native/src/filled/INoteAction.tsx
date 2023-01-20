import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgINoteAction = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M13 8h4v2a1 1 0 1 0 2 0V8h8v2a1 1 0 1 0 2 0V8h1a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3Zm2 10a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H15Zm-1 6a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H15Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 10v25a5 5 0 0 0 5 5h17v2H13a7 7 0 0 1-7-7V10h2ZM39 10a3 3 0 0 0-3 3v3h6v-3a3 3 0 0 0-3-3Zm3 8h-6v15l3 4 3-4V18ZM26 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM16 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgINoteAction);
export default ForwardRef;
