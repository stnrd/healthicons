import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineInfo = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M22 35a2 2 0 1 0 4 0V21a2 2 0 1 0-4 0v14Zm2-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineInfo);
export default ForwardRef;
