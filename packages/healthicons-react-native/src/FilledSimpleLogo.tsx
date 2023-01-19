import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSimpleLogo = (
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
        d="M10.089 29.344c0 8.033 6.472 14.546 14.455 14.546C32.528 43.89 39 37.377 39 29.344 39 18.435 24.544 3.89 24.544 3.89S10.09 18.435 10.09 29.344Zm20.286 4.114a1.755 1.755 0 0 1 2.471-.325 1.78 1.78 0 0 1 .323 2.486l-.242.318c-4.233 5.537-12.532 5.537-16.765 0l-.242-.318a1.78 1.78 0 0 1 .322-2.486 1.755 1.755 0 0 1 2.472.325l.242.318c2.822 3.691 8.355 3.691 11.177 0l.242-.318Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSimpleLogo);
export default ForwardRef;
