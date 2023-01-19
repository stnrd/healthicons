import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledAwardRibbon = (
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
        d="M13 20c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M31 34.391c5.328-2.597 9-8.065 9-14.391 0-8.837-7.163-16-16-16-8.836 0-16 7.163-16 16 0 6.327 3.672 11.796 9.001 14.392V43a1 1 0 0 0 1.555.832L24 40.202l5.445 3.63A1 1 0 0 0 31 43v-8.609ZM24 34c7.732 0 14-6.268 14-14S31.732 6 24 6s-14 6.268-14 14 6.268 14 14 14Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledAwardRibbon);
export default ForwardRef;
