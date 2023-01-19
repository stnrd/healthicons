import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledCityWorker = (
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
        d="M34 16c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M30.5 28a.48.48 0 0 0-.54.262L26 39.572V36l-.575-4.021a1 1 0 0 0 .764-.736l.5-2A1 1 0 0 0 25.72 28h-3.438a1 1 0 0 0-.97 1.242l.5 2a1 1 0 0 0 .764.737L22 36v2.696l-3.96-10.434A.48.48 0 0 0 17.5 28a139.1 139.1 0 0 1-1.148.272c-2.262.53-5.058 1.184-6.544 2.16C8.045 31.589 7 32.953 7 34.5V41h34v-6.5c0-1.547-1.045-2.91-2.808-4.068-1.486-.976-4.282-1.63-6.544-2.16-.403-.094-.79-.184-1.148-.272Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledCityWorker);
export default ForwardRef;
