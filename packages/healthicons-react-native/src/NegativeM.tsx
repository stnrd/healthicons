import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeM = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM16 36V17.524l6.464 7.756a2 2 0 0 0 3.072 0L32 17.524V36a2 2 0 1 0 4 0V12a2 2 0 0 0-3.536-1.28L24 20.876 15.536 10.72A2 2 0 0 0 12 12v24a2 2 0 1 0 4 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeM);
export default ForwardRef;
