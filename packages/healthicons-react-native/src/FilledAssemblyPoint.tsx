import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledAssemblyPoint = (
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
        d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586V8a1 1 0 1 1 2 0v6H8a1 1 0 1 1 0-2h2.586L6.293 7.707a1 1 0 0 1 0-1.414Zm35.414 35.414a1 1 0 0 1-1.414 0L36 37.414V40a1 1 0 1 1-2 0v-6h6a1 1 0 1 1 0 2h-2.586l4.293 4.293a1 1 0 0 1 0 1.414Zm-35.414 0a1 1 0 0 1 0-1.414L10.586 36H8a1 1 0 1 1 0-2h6v6a1 1 0 1 1-2 0v-2.586l-4.293 4.293a1 1 0 0 1-1.414 0ZM41.707 6.293a1 1 0 0 1 0 1.414L37.414 12H40a1 1 0 1 1 0 2h-6V8a1 1 0 1 1 2 0v2.586l4.293-4.293a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M35.1 19.5c0 1.934-1.566 3.5-3.5 3.5a3.499 3.499 0 0 1-3.5-3.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5Zm-15 0c0 1.934-1.566 3.5-3.5 3.5a3.499 3.499 0 0 1-3.5-3.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5Zm6.4-1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0ZM25 28.858C25 26.292 28.997 25 31 25c2.002 0 6 1.293 6 3.858V31H25v-2.142Zm-14 0C11 26.292 14.998 25 17 25c2.003 0 6 1.293 6 3.858V31H11v-2.142Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M28.038 23.457c-.227.084-.45.172-.67.266-.995.425-2 1-2.781 1.769-.21.206-.408.431-.587.677a5.509 5.509 0 0 0-.587-.677c-.78-.769-1.786-1.344-2.781-1.77-.22-.093-.443-.181-.67-.265 1.294-.67 2.958-1.007 4.038-1.007s2.744.337 4.038 1.007Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledAssemblyPoint);
export default ForwardRef;
