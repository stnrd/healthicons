import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHeart = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M6 18.724C6 12.641 10.036 7 15.563 7c3.835 0 6.68 2.53 8.437 6.121C25.756 9.531 28.602 7 32.438 7 37.965 7 42 12.642 42 18.724 42 31.744 24 41 24 41S6 32.304 6 18.724Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHeart);
export default ForwardRef;
