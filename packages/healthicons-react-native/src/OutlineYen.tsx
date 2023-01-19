import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineYen = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M31.695 10.08a3 3 0 0 1 4.61 3.84l-.769-.64.769.64-5.92 7.104A3 3 0 0 1 30.002 27 3 3 0 0 1 30 33h-3v3a3 3 0 0 1-6 0v-3h-3a3 3 0 0 1-.002-6 3 3 0 0 1-.383-5.976l-5.92-7.103a3 3 0 0 1 .384-4.226l.64.769-.64-.769a3 3 0 0 1 4.226.384L24 19.314l7.695-9.235Zm2.945 1.152a1 1 0 0 0-1.408.128l-8.464 10.156a1 1 0 0 1-1.536 0L14.768 11.36a1 1 0 1 0-1.536 1.28l7.266 8.72A1 1 0 0 1 19.73 23H18a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2h-1.73a1 1 0 0 1-.768-1.64l7.266-8.72a1 1 0 0 0-.128-1.408Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineYen);
export default ForwardRef;
