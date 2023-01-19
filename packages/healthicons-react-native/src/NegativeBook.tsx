import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBook = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM14 5a5 5 0 0 0-5 5v32a1 1 0 0 0 1 1h28v-2H11v-1a3 3 0 0 1 3-3h24a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H14Zm9 16v5h2v-5h5v-2h-5v-5h-2v5h-5v2h5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBook);
export default ForwardRef;
