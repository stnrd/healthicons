import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePpeSanitizer = (
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
        d="M0 0h48v48H0V0Zm13.928 9.048a8.748 8.748 0 0 0-1.56 1.948l-1.736-.992a10.736 10.736 0 0 1 1.94-2.427C13.43 6.787 14.624 6 16 6h17v2h-8v6h4a2 2 0 0 1 2 2v3h1a5 5 0 0 1 5 5v16a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V24a5 5 0 0 1 5-5h1v-3a2 2 0 0 1 2-2h4V8h-7c-.624 0-1.346.38-2.072 1.048ZM18 29h5v-5h2v5h5v2h-5v5h-2v-5h-5v-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePpeSanitizer);
export default ForwardRef;
