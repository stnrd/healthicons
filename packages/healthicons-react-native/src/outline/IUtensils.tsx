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
        d="M13.5 11a3.5 3.5 0 0 1 3.5 3.5V40l-3.5 4-3.5-4V14.5a3.5 3.5 0 0 1 3.5-3.5Zm0 2a1.5 1.5 0 0 1 1.5 1.5V17h-3v-2.5a1.5 1.5 0 0 1 1.5-1.5Zm0 27.963L12 39.248V19h3v20.248l-1.5 1.715ZM33 28a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2h-3Zm3 2h-3v5h3v-5Zm0 7h-3v5h3v-5ZM29 4H19v40h10V4Zm-8 2h6v2h-4v2h4v3h-2v2h2v3h-2v2h2v3h-4v2h4v3h-2v2h2v3h-2v2h2v3h-4v2h4v2h-6V6Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgIUtensils);
export default ForwardRef;
