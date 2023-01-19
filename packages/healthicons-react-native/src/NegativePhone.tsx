import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePhone = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM26.42 34.76c-5.66-2.9-10.3-7.52-13.18-13.18l4.4-4.4c.56-.56.72-1.34.5-2.04A22.72 22.72 0 0 1 17 8c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2 0 18.78 15.22 34 34 34 1.1 0 2-.9 2-2v-6.98c0-1.1-.9-2-2-2-2.48 0-4.9-.4-7.14-1.14-.7-.24-1.5-.06-2.04.48l-4.4 4.4Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePhone);
export default ForwardRef;
