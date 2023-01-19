import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledEntry = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M28 10H14v27h14V10ZM12 8v31h18V8H12Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M22.316 4.439A1 1 0 0 0 21 5.387v37.226a1 1 0 0 0 1.316.948l13-4.333a1 1 0 0 0 .684-.949V9.721a1 1 0 0 0-.684-.949l-13-4.333ZM26 25c.552 0 1-.895 1-2s-.448-2-1-2-1 .895-1 2 .448 2 1 2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledEntry);
export default ForwardRef;
