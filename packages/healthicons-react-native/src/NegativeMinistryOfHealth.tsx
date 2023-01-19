import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeMinistryOfHealth = (
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
        d="M25 12v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2Zm1 17a2 2 0 1 0-4 0v8h4v-8Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H6v6h36v-6h-2.65L24.626 5.22ZM20 29a4 4 0 0 1 8 0v8h6v-4h2v-8h4v8h2v4h2v6H4v-6h2v-4h2v-8h4v8h2v4h6v-8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeMinistryOfHealth);
export default ForwardRef;
