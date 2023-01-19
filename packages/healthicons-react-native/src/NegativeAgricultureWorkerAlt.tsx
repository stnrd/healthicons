import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeAgricultureWorkerAlt = (
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
        d="M48 0H0v48h48V0ZM19.5 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM32 16c.364 0 .706.097 1 .268V15h-1a3 3 0 0 1-3-3V6h2v6a1 1 0 0 0 1 1h1V6h2v7h1a1 1 0 0 0 1-1V6h2v6a3 3 0 0 1-3 3h-1v26a1 1 0 1 1-2 0V19.732A1.99 1.99 0 0 1 32 20h-7v20a2 2 0 1 1-4 0v-9h-3v9a2 2 0 1 1-4 0V27.917A6.002 6.002 0 0 1 15 16h17Zm-20 6a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeAgricultureWorkerAlt);
export default ForwardRef;
