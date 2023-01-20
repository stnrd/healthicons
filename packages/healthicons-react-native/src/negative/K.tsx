import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgK = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM18 12v11.172l12.586-12.586a2 2 0 1 1 2.828 2.828L22.828 24l10.586 10.586a2 2 0 1 1-2.828 2.828L20 26.828l-2 2V36a2 2 0 1 1-4 0V12a2 2 0 1 1 4 0Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgK);
export default ForwardRef;
