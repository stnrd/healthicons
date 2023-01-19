import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledAlertTriangle = (
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
        d="M23.1 6.849a1 1 0 0 1 1.8 0l16.4 33.714A1 1 0 0 1 40.403 42H7.599a1 1 0 0 1-.9-1.437L23.101 6.849ZM22 20a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V20Zm1.966 14a1.966 1.966 0 0 0 0 3.933h.068a1.966 1.966 0 1 0 0-3.933h-.067Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledAlertTriangle);
export default ForwardRef;
