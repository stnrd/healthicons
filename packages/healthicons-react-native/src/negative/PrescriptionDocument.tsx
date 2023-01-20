import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPrescriptionDocument = (
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
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM27 4v11a1 1 0 0 0 1 1h11v27a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h17Zm2 .586V14h9.414L29 4.586ZM18 18a1 1 0 0 0-1 1v14h2v-7h1.586l5 5-3.293 3.293 1.414 1.414L27 32.414l3.293 3.293 1.414-1.414L28.414 31l3.293-3.293-1.414-1.414L27 29.586l-3.605-3.605A4 4 0 0 0 23 18h-5Zm1 6h4a2 2 0 1 0 0-4h-4v4Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPrescriptionDocument);
export default ForwardRef;
