import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeCholera = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M25.026 33.23a1 1 0 1 0 2-.024A1.192 1.192 0 0 1 28.204 32a1 1 0 1 0-.024-2 3.192 3.192 0 0 0-3.154 3.23ZM31 32a1 1 0 0 1 1-1 3 3 0 0 1 3 3 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1-1-1Zm-2.174 8.118a1 1 0 1 0-.43-1.953 1.192 1.192 0 0 1-1.42-.91 1 1 0 1 0-1.953.43 3.192 3.192 0 0 0 3.803 2.433ZM35 38a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm24 4H10v8h15a1 1 0 0 1 1 1v1h8c0-5.523-4.477-10-10-10Zm12 12H24v4h12v-4Zm-6 28a8 8 0 0 0 8-8c0-7-8-14-8-14s-8 7-8 14a8 8 0 0 0 8 8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeCholera);
export default ForwardRef;
