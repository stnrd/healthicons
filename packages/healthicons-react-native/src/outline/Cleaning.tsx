import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCleaning = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M22.062 25.602 11.33 5.416a1 1 0 1 1 1.766-.939l10.733 20.186 1.522-.81a4 4 0 0 1 5.41 1.655l.648 1.218 6.869 10.055-14.249 7.576-4.495-11.318-.647-1.218a4 4 0 0 1 1.654-5.41l1.522-.809Zm-.583 2.575 4.81-2.557a2 2 0 0 1 2.705.827l.648 1.217-8.343 4.436-.647-1.218a2 2 0 0 1 .827-2.705Zm.83 6.432 2.753 6.933 1.834-.975-2.165-4.215 1.78-.914 2.152 4.19 6.702-3.564-4.208-6.16-8.848 4.705Z"
        fill="#333"
      />
      <Path
        d="M16.36 35.231a1 1 0 0 1 1.28 1.537l-.001.001-.002.002-.003.002-.01.008-.03.025-.103.079c-.087.065-.21.154-.367.26-.315.21-.77.484-1.344.758A11.149 11.149 0 0 1 11 39a1 1 0 1 1 0-2 9.15 9.15 0 0 0 3.92-.903 8.836 8.836 0 0 0 1.094-.617 5.93 5.93 0 0 0 .337-.24l.01-.01v.001ZM19.555 41.832a1 1 0 0 0-1.11-1.664l-.002.002-.02.012-.086.055a14.28 14.28 0 0 1-1.618.85c-1.07.474-2.42.913-3.719.913a1 1 0 1 0 0 2c1.702 0 3.35-.561 4.531-1.086a16.244 16.244 0 0 0 1.863-.979 8.43 8.43 0 0 0 .114-.072l.032-.021.01-.006.005-.004Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCleaning);
export default ForwardRef;
