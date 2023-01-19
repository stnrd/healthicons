import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBiochemistryLaboratory = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M15 18v2h5v-2h-5Zm-1-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m16 25.54-3.763 6.452C11.459 33.326 12.42 35 13.964 35h7.072c1.543 0 2.505-1.674 1.727-3.008L19 25.541V22h-3v3.54ZM21 20v5l3.491 5.985C26.047 33.65 24.123 37 21.036 37h-7.072c-3.087 0-5.01-3.349-3.455-6.015L14 25v-5h7Zm10.455-2.963C34.003 15.38 36 13.899 36 11h2c0 4.1-3.003 6.12-5.455 7.713l-.265.173c-1.18.765-2.22 1.44-3.005 2.237C28.472 21.94 28 22.826 28 24c0 1.174.472 2.06 1.275 2.877.785.797 1.825 1.472 3.005 2.237l.265.173C34.997 30.88 38 32.899 38 37h-2c0-2.9-1.997-4.38-4.545-6.037l-.304-.197c-1.13-.732-2.355-1.524-3.301-2.487C26.778 27.19 26 25.826 26 24s.778-3.19 1.85-4.28c.946-.962 2.17-1.754 3.301-2.486l.304-.197Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M32.545 17.037C29.997 15.38 28 13.899 28 11h-2c0 4.1 3.003 6.12 5.455 7.713l.265.173c1.18.765 2.22 1.44 3.005 2.237C35.528 21.94 36 22.826 36 24c0 1.174-.472 2.06-1.275 2.877-.785.797-1.825 1.472-3.005 2.237l-.265.173C29.003 30.88 26 32.899 26 37h2c0-2.9 1.997-4.38 4.545-6.037l.304-.197c1.13-.732 2.355-1.524 3.301-2.487C37.222 27.19 38 25.826 38 24s-.778-3.19-1.85-4.28c-.946-.962-2.17-1.754-3.301-2.486l-.304-.197Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M27 13a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm3 22a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm-3-13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBiochemistryLaboratory);
export default ForwardRef;
