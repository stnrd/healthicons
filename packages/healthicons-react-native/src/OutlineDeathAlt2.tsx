import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDeathAlt2 = (
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
        d="M17.382 6.001 13.07 17.184l4.574 24.8 12.673.014 4.614-24.796-4.294-11.19-13.254-.01Zm14.629-1.988L16.01 4 11 16.992l4.978 26.99 16 .018L37 17.013l-4.99-13Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M23 17.997V26h2v-8.003h3v-2h-3V13h-2v2.997h-3v2h3Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDeathAlt2);
export default ForwardRef;
