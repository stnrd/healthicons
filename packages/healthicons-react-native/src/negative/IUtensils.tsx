import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIUtensils = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM19 4h9v4h-4v2h4v3h-2v2h2v3h-2v2h2v3h-4v2h4v3h-2v2h2v3h-2v2h2v3h-4v2h4v4h-9V4Zm14 24a2 2 0 0 0-2 2v5h7v-5a2 2 0 0 0-2-2h-3Zm5 9h-7v5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-5ZM10 14a3 3 0 1 1 6 0v3h-6v-3Zm0 26V19h6v21l-3 4-3-4Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgIUtensils);
export default ForwardRef;
