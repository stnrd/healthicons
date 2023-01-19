import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeAmbulatoryClinic = (
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
        d="M26 40h8V24h-8v16Zm-5-16h-7v7h7v-7ZM20 9h-2v2h-2v2h2v2h2v-2h2v-2h-2V9Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm24.653 9.985H42.5V12.5L38 15.532V40h3a1 1 0 1 1 0 2h-3v.015H10V42H7a1 1 0 1 1 0-2h3V15.497l-4-3.03V9.984h7.347a6.002 6.002 0 0 1 11.306 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeAmbulatoryClinic);
export default ForwardRef;
