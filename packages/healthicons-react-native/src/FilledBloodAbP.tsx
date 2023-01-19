import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledBloodAbP = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M27.612 5.535a5.018 5.018 0 0 0-7.224 0l-.528.548H15c-2.755 0-5 2.22-5 4.974v21.97C10 35.778 12.245 38 15 38h3v2h5v4h2v-4h5v-2h3c2.755 0 5-2.22 5-4.974V23h-2v4.539a8.442 8.442 0 0 0-.925-.626c-1.825-1.062-4.465-1.614-7.583.226-2.568 1.515-4.983 1.925-7.61 1.98-1.17.025-2.368-.02-3.65-.069l-.531-.02A68.776 68.776 0 0 0 12 28.97V11.058c0-1.636 1.337-2.974 3-2.974h5.286a1 1 0 0 0 .72-.307l.823-.855a3.018 3.018 0 0 1 4.342 0l.823.855a1 1 0 0 0 .72.307h5.616c1.48 0 2.67 1.19 2.67 2.646V15h2v-4.271c0-2.572-2.097-4.646-4.67-4.646h-5.19l-.528-.548Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M18.5 14a1 1 0 0 1 .916.6l2.616 5.98a.998.998 0 0 1 .018.04l.866 1.98a1 1 0 0 1-1.832.8L20.47 22h-3.942l-.613 1.4a1 1 0 0 1-1.832-.8l.866-1.98.002-.005a.887.887 0 0 1 .016-.036l2.616-5.98A1 1 0 0 1 18.5 14Zm1.096 6L18.5 17.495 17.404 20h2.192ZM25 14a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.125C29.773 24 31 22.595 31 21a3.09 3.09 0 0 0-.732-2A3.09 3.09 0 0 0 31 17c0-1.595-1.227-3-2.875-3H25Zm4 3c0 .614-.452 1-.875 1H26v-2h2.125c.423 0 .875.386.875 1Zm0 4c0-.614-.452-1-.875-1H26v2h2.125c.423 0 .875-.386.875-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M32 19a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledBloodAbP);
export default ForwardRef;
