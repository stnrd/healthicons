import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilled2 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M26 14a4 4 0 0 1 2.61 7.034l-14 13.528A2 2 0 0 0 16 38h16a2 2 0 1 0 0-4H20.948l10.416-10.065A8 8 0 0 0 26 10h-4a8.003 8.003 0 0 0-7.544 5.334 2 2 0 0 0 3.771 1.332A4.002 4.002 0 0 1 22 14h4Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilled2);
export default ForwardRef;
