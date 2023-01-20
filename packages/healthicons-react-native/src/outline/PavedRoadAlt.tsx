import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoadAlt = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 49 49"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        d="M33.02 7.98a1 1 0 1 1 2 0v34a1 1 0 1 1-2 0v-34ZM13.02 7.98a1 1 0 1 1 2 0v34a1 1 0 1 1-2 0v-34ZM23.02 11.98a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4ZM23.02 22.98a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4ZM23.02 33.98a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPavedRoadAlt);
export default ForwardRef;
