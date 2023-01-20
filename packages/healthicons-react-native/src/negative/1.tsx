import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg1 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM29 12a2 2 0 0 0-3.414-1.414l-5 5a2 2 0 1 0 2.828 2.828L25 16.828V36a2 2 0 0 0 4 0V12Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(Svg1);
export default ForwardRef;
