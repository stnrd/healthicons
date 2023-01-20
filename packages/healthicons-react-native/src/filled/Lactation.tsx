import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLactation = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.066 21.368a2.5 2.5 0 0 0-2.634-1.335L17.18 22.208a3.5 3.5 0 0 0-2.554 1.869L10.27 32.65a2.5 2.5 0 0 0 .205 2.6l5.73 7.898a2.5 2.5 0 0 0 4.048-2.937l-1.689-2.327c.122-.58.5-1.101 1.074-1.383l3.231-1.591-3.23-1.59a2 2 0 0 1-1.118-1.795v-3.949a2 2 0 0 1 4 0v2.704l5.76 2.835a2 2 0 0 1 .617 3.118l.021-.005-1.253 1.727a2.5 2.5 0 1 0 4.047 2.936l5.73-7.898a2.5 2.5 0 0 0 .206-2.6l-4.584-9.026ZM34 28.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        fill="#333"
      />
      <Path d="M31 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" fill="#333" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLactation);
export default ForwardRef;
