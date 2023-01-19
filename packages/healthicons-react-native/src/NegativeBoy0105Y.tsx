import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBoy0105Y = (
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
        d="M48 0H0v48h48V0ZM28 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm6.004 8.423a2 2 0 1 0-1.008-3.87c-3.613.94-6.326 1.36-8.988 1.349-2.668-.01-5.389-.454-9.027-1.356a2 2 0 1 0-.962 3.883c1.793.444 3.426.796 4.981 1.044v6.402l-.985 7.877a2 2 0 0 0 3.925.733l2-8A2 2 0 0 0 24 29a2 2 0 0 0 .06.485l2 8a2 2 0 0 0 3.925-.733L29 28.875v-6.376c1.56-.247 3.2-.606 5.004-1.076Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBoy0105Y);
export default ForwardRef;
