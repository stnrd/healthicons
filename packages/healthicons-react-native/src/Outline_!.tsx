import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutline = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M21 11.818C21 10.174 22.435 9 24 9s3 1.174 3 2.818v16.364C27 29.826 25.565 31 24 31s-3-1.174-3-2.818V11.818ZM24 11c-.644 0-1 .454-1 .818v16.364c0 .364.356.818 1 .818s1-.454 1-.818V11.818c0-.364-.356-.818-1-.818Zm0 24a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutline);
export default ForwardRef;
