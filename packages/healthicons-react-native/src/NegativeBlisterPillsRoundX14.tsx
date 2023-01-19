import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBlisterPillsRoundX14 = (
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
        d="M23.6 39.8a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM16 4h7.153a.6.6 0 1 0 .894 0H32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-8.4a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2H16a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12-30a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBlisterPillsRoundX14);
export default ForwardRef;
