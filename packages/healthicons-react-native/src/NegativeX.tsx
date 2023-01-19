import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeX = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM35.536 13.28a2 2 0 1 0-3.072-2.56L24 20.876 15.537 10.72a2 2 0 1 0-3.073 2.56L21.397 24l-8.933 10.72a2 2 0 1 0 3.072 2.56L24 27.124l8.464 10.156a2 2 0 1 0 3.072-2.56L26.603 24l8.933-10.72Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeX);
export default ForwardRef;
