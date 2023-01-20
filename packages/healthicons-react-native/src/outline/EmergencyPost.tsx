import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEmergencyPost = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m10.916 20.76-4.88 13.99c-.16.587.28 1.25 1.018 1.25H29.26c.488 0 .886-.313 1.01-.722l.012-.038L35.611 20H11.938c-.488 0-.886.313-1.01.722l-.012.037Zm26.069 1.369L42.03 33.35c.197.517.783.78 1.31.585a.995.995 0 0 0 .595-1.287L37.583 18H11.938c-1.348 0-2.536.869-2.924 2.138l-4.883 14C3.543 36.063 5.01 38 7.054 38H29.26c1.348 0 2.536-.869 2.923-2.138l4.803-13.733Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m34.5 34.5 8.206-2.456.588 1.912L33.5 37l1-2.5ZM37 21a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 12h-5v2h5v-2Zm-7-2v6h9v-6h-9Z"
        fill="#333"
      />
      <Path
        d="M19.758 32.97a1 1 0 0 1-.728-1.212L19.72 29H17a1 1 0 1 1 0-2h3.22l.81-3.242a1 1 0 1 1 1.94.485L22.28 27H25a1 1 0 1 1 0 2h-3.22l-.81 3.243a1 1 0 0 1-1.212.727Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEmergencyPost);
export default ForwardRef;
