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
        d="m34.5 34.5 8.206-2.456.588 1.912L33.5 37l1-2.5ZM37 21a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1Z"
        fill="#333"
      />
      <Path d="M29 10h9v6h-9v-6Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 12h-5v2h5v-2Zm-7-2v6h9v-6h-9ZM9.014 20.138C9.402 18.869 10.59 18 11.938 18h25.645l6.352 14.649a.995.995 0 0 1-.596 1.287 1.023 1.023 0 0 1-1.31-.585L36.986 22.13l-4.803 13.733C31.795 37.131 30.607 38 29.26 38H7.054c-2.044 0-3.51-1.937-2.923-3.862l4.883-14Zm10.016 11.62a1 1 0 1 0 1.94.485L21.78 29H25a1 1 0 1 0 0-2h-2.72l.69-2.757a1 1 0 1 0-1.94-.485L20.22 27H17a1 1 0 1 0 0 2h2.72l-.69 2.758Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m10.916 20.76-4.88 13.99c-.16.587.28 1.25 1.018 1.25H29.26c.488 0 .886-.313 1.01-.722l.012-.038L35.611 20H11.938c-.488 0-.886.313-1.01.722l-.012.037Zm26.069 1.369L42.03 33.35c.197.517.783.78 1.31.585a.995.995 0 0 0 .595-1.287L37.583 18H11.938c-1.348 0-2.536.869-2.924 2.138l-4.883 14C3.543 36.063 5.01 38 7.054 38H29.26c1.348 0 2.536-.869 2.923-2.138l4.803-13.733ZM17 29a1 1 0 1 1 0-2h3.22l.81-3.242a1 1 0 1 1 1.94.485L22.28 27H25a1 1 0 1 1 0 2h-3.22l-.81 3.243a1 1 0 1 1-1.94-.485L19.72 29H17Zm6.342 2-.432 1.728a3 3 0 1 1-5.82-1.455l.068-.273H17a3 3 0 0 1 0-6h1.658l.432-1.727a3 3 0 1 1 5.82 1.455l-.068.272H25a3 3 0 1 1 0 6h-1.658Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEmergencyPost);
export default ForwardRef;
