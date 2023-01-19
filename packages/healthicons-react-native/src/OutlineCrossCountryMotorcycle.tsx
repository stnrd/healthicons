import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineCrossCountryMotorcycle = (
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
        d="M37.5 36a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0 2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M28.907 10.58A1 1 0 0 0 28 10h-5v2h4.361l9.232 19.92a1 1 0 0 0 1.814-.84l-9.5-20.5ZM10.5 36a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0 2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M21.5 31.5a1 1 0 0 1-1 1h-10a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1ZM31 16h-8.017a9 9 0 0 0-2.884.474l-4.42 1.495a1 1 0 0 0-.494 1.527l4.334 6.084a1 1 0 0 0 .814.42H28.5a1 1 0 0 0 .664-.253l4.5-4-1.328-1.494L28.12 24h-7.271l-3.254-4.567 3.145-1.064A7 7 0 0 1 22.983 18H31v-2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M6 20h10.083v-2H5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 .897.995l14.5 1.5.206-1.99L6 21.598V20Zm23 4h-7a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6Zm-2 2v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h5Zm9.378-11.659a1 1 0 0 0-.753-.341H29v2h6.171l2.625 3H32v2h8a1 1 0 0 0 .753-1.659l-4.375-5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineCrossCountryMotorcycle);
export default ForwardRef;
