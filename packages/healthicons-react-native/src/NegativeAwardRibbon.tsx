import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeAwardRibbon = (
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
        d="M48 0H0v48h48V0Zm-8.001 20c0 6.326-3.671 11.794-8.999 14.391v8.61a1 1 0 0 1-1.555.831L24 40.202l-5.445 3.63A1 1 0 0 1 17 43v-8.608C11.67 31.796 7.999 26.327 7.999 20c0-8.837 7.163-16 16-16s16 7.163 16 16Zm-2 0c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14ZM24 9c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11S30.075 9 24 9Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeAwardRibbon);
export default ForwardRef;
