import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDefibrilator = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M39.843 9.972c2.339 2.575 2.745 6.191 1.524 9.297-2.087 5.31-6.784 10.12-11.24 14.684-2.179 2.231-4.3 4.404-6.03 6.547-.4-.39-.813-.79-1.237-1.2-5.689-5.52-13.324-12.926-16.18-20.031a8.888 8.888 0 0 1 .192-7.073 8.96 8.96 0 0 1 2.164-2.905c3.633-3.244 9.32-2.739 12.777.69l2.283 2.264 2.645-2.622a9.036 9.036 0 0 1 3.041-1.987 9.096 9.096 0 0 1 7.132.19 9.023 9.023 0 0 1 2.93 2.146ZM18.97 24.802l7.94-10.266-1.527 7.75h4.526a.5.5 0 0 1 .396.806l-7.94 10.266 1.527-7.75h-4.527a.5.5 0 0 1-.395-.806Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDefibrilator);
export default ForwardRef;
