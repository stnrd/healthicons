import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledLetrinaAlt = (
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
        d="M20 20a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M42 23H12v5c0 1.5 1.753 2 2.5 2v12H29v-3h-5.5v-2H29v-.06c7.297-.59 13-5.51 13-13.94Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M8 6a2 2 0 0 0-2 2v2h12V8a2 2 0 0 0-2-2H8Zm10 6H6v13h12V12Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledLetrinaAlt);
export default ForwardRef;
