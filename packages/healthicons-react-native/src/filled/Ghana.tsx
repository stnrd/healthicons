import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGhana = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M26 8a2 2 0 1 0-4 0v2.114a13.995 13.995 0 0 0-9.64 6.078A14 14 0 0 0 22 37.827V40a2 2 0 1 0 4 0v-2.173a14 14 0 0 0 7.9-3.957 2 2 0 0 0-2.829-2.829A9.999 9.999 0 0 1 26 33.768V14.172a10 10 0 0 1 5.071 2.727 2 2 0 1 0 2.829-2.828 14 14 0 0 0-7.9-3.957V8Zm-4 6.172a9.996 9.996 0 0 0-6.315 4.243A10 10 0 0 0 22 33.768V14.172Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgGhana);
export default ForwardRef;
