import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineHospital = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M8 43a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM19 8h-9V6h9v2Zm20 0h-9V6h9v2Zm-22 3h-6V9h6v2Zm20 0h-6V9h6v2Zm-5 27H16v-2h16v2ZM25 7v8h-2V7h2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M20 10h8v2h-8v-2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M29 6H19v10h10V6ZM19 4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm-8 38V7h2v35h-2Zm24 0V7h2v35h-2Zm-12 0v-4h2v4h-2Zm6 0v-4h2v4h-2Zm-12 0v-4h2v4h-2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M16 20h4v3h-4v-3Zm0 5h4v3h-4v-3Zm0 5h4v3h-4v-3Zm6-10h4v3h-4v-3Zm0 5h4v3h-4v-3Zm0 5h4v3h-4v-3Zm6-10h4v3h-4v-3Zm0 5h4v3h-4v-3Zm0 5h4v3h-4v-3Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineHospital);
export default ForwardRef;
