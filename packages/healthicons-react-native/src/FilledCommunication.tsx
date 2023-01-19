import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledCommunication = (
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
        d="M18.5 6C10.492 6 4 12.492 4 20.5 4 38.5 28 42 28 42v-7h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6h-11ZM24 23.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM34.5 21a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM16 23.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledCommunication);
export default ForwardRef;
