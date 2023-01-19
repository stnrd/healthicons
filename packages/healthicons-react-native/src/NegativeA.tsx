import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeA = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      <Path fill="#333" d="M24 17.2 28.5 28h-9L24 17.2Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM25.846 11.23a2 2 0 0 0-3.692 0L14.67 29.19a2.01 2.01 0 0 0-.035.084l-2.482 5.957a2 2 0 1 0 3.692 1.538L17.833 32h12.334l1.987 4.77a2 2 0 0 0 3.692-1.54l-2.482-5.956a1.937 1.937 0 0 0-.035-.085l-7.483-17.958Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeA);
export default ForwardRef;
