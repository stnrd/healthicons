import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeEntry = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M0 0h48v48H0V0Zm21 10h-7v27h7V10Zm0-2h-9v31h9v3.613a1 1 0 0 0 1.316.948l13-4.333a1 1 0 0 0 .684-.949V9.721a1 1 0 0 0-.684-.949l-13-4.333A1 1 0 0 0 21 5.387V8Zm6 15c0 1.105-.448 2-1 2s-1-.895-1-2 .448-2 1-2 1 .895 1 2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeEntry);
export default ForwardRef;
