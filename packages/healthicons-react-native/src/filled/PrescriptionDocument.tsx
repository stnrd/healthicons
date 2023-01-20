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
        d="M27 15V4H10a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V16H28a1 1 0 0 1-1-1Zm2-1V4.586L38.414 14H29Zm-12 5a1 1 0 0 1 1-1h5a4 4 0 0 1 .395 7.98L27 29.587l3.293-3.293 1.414 1.414L28.414 31l3.293 3.293-1.414 1.414L27 32.414l-3.293 3.293-1.414-1.414L25.586 31l-5-5H19v7h-2V19Zm6 5h-4v-4h4a2 2 0 1 1 0 4Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPrescriptionDocument);
export default ForwardRef;
