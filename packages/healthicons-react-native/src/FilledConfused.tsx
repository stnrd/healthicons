import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledConfused = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm0 2c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M17.5 26c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4Zm13 0c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4Zm-9.18 8.514-.044.035a1 1 0 0 1-1.26-1.554l.134-.108c1.184-.96 2.411-1.955 4.274-2.459 1.922-.52 4.409-.494 8.144.323a1 1 0 1 1-.428 1.954c-3.592-.786-5.715-.746-7.193-.346-1.45.392-2.387 1.15-3.627 2.155Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledConfused);
export default ForwardRef;
