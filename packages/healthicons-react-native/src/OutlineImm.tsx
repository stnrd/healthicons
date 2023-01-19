import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineImm = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M24 31a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M20.576 28.424a3.514 3.514 0 0 1-1.29-1.538l4.6-4.6c.63.271 1.164.723 1.538 1.29l-4.848 4.848Zm5.235-4.063a3.5 3.5 0 0 1-4.45 4.45l4.45-4.45Zm-2.842-2.33L19.03 25.97a3.5 3.5 0 0 1 3.938-3.938Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M20.433 28.325a3.517 3.517 0 0 1-1.148-1.439l4.601-4.6c.056.023.112.05.166.076a3.517 3.517 0 0 1 1.372 1.214l-4.848 4.848a3.615 3.615 0 0 1-.143-.1Zm5.378-3.964a3.504 3.504 0 0 1 .188 1.226 3.5 3.5 0 0 1-4.638 3.224l4.45-4.45Zm-4.397-2.19A3.509 3.509 0 0 0 19 25.5a3.527 3.527 0 0 0 .031.469l3.938-3.938a3.537 3.537 0 0 0-1.555.14Zm-3.604-6.532a3.5 3.5 0 0 0-4.45-4.45l4.45 4.45Zm-6.525-2.525a3.514 3.514 0 0 1 1.29-1.538l4.85 4.848a3.514 3.514 0 0 1-1.539 1.29l-4.6-4.6Zm3.684 4.855a3.5 3.5 0 0 1-3.938-3.938l3.938 3.938Zm18.607 16.455a3.513 3.513 0 0 1-1.29-1.538l4.6-4.6c.63.271 1.164.723 1.538 1.29l-4.848 4.848Zm5.234-4.063a3.5 3.5 0 0 1-4.45 4.45l4.45-4.45Zm-2.841-2.33L32.03 31.97a3.5 3.5 0 0 1 3.938-3.938Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M33.433 34.325a3.516 3.516 0 0 1-1.148-1.439l4.601-4.6a3.51 3.51 0 0 1 1.538 1.29l-4.848 4.848a3.473 3.473 0 0 1-.143-.1Zm5.377-3.964A3.505 3.505 0 0 1 35.5 35a3.505 3.505 0 0 1-1.139-.19l4.45-4.449Zm-4.396-2.19a3.5 3.5 0 0 0-2.383 3.797l3.938-3.937a3.552 3.552 0 0 0-1.555.14ZM31 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM13 33a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineImm);
export default ForwardRef;
