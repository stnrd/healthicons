import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPills4 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        stroke="#333"
        d="M22 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-3.39-.325a2 2 0 1 0-2.209-3.334l-6.012 3.984a2 2 0 1 0 2.21 3.335l6.012-3.985ZM41 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-6.874-4.076a2 2 0 1 0-3.752 1.387l2.5 6.765a2 2 0 1 0 3.752-1.387l-2.5-6.765ZM22 33.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-7.956 4.099a2 2 0 0 0 3.691-1.541l-2.779-6.656a2 2 0 1 0-3.691 1.54l2.779 6.657ZM41 33.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-3.463-.84a2 2 0 0 0-2.612-3.03l-5.462 4.71a2 2 0 0 0 2.612 3.03l5.462-4.71Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPills4);
export default ForwardRef;
