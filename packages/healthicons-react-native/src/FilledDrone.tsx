import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledDrone = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M13 40a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M14.75 35a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M35 40a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M36.75 35a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M35 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M36.75 13a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M13 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M14.75 13a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <Path
        fill="#333"
        d="m13 35 5.72-11.224L13.44 13 24 18.388 34.56 13l-5.28 10.776L35 35l-11-5.837L13 35Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledDrone);
export default ForwardRef;
