import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBody = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM24 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm13.52 3.931a2 2 0 1 0-1.04-3.862c-4.978 1.339-8.751 1.946-12.472 1.93-3.727-.015-7.509-.655-12.512-1.937a2 2 0 0 0-.992 3.876c2.73.699 5.175 1.23 7.496 1.58V42a2 2 0 0 0 3.992.181l1-11A2 2 0 0 0 23 31h2a2 2 0 0 0 .008.181l1 11A2 2 0 0 0 30 42V19.554c2.325-.344 4.779-.885 7.52-1.623Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBody);
export default ForwardRef;
