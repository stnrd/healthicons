import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineSexualReproductiveHealth = (
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
        d="M17.546 15.48a7 7 0 1 0 4.372 5.454 1 1 0 0 1 1.977-.304 9 9 0 1 1-5.622-7.014 1 1 0 1 1-.727 1.863Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm17.902-18.737a7 7 0 0 0-8.853 7.562 1 1 0 1 1-1.986.236 9 9 0 1 1 5.375 7.204 1 1 0 1 1 .791-1.837 7.001 7.001 0 1 0 4.673-13.165Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974-3.974.05a1 1 0 0 1-.026-2l6.026-.076-.076 6.025a1 1 0 0 1-1.013.988Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineSexualReproductiveHealth);
export default ForwardRef;
