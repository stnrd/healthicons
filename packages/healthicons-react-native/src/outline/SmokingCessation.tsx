import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSmokingCessation = (
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
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        d="M10 8.586 39.414 38 38 39.414 8.586 10 10 8.586ZM7 32a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h24a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h18.5a1 1 0 1 1 0 2H7ZM40 32a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2ZM34 17a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5 1 1 0 1 1 0 2Z"
        fill="#333"
      />
      <Path
        d="M38 19a1 1 0 1 0 0 2 4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a5.994 5.994 0 0 0-2.644-4.975A4.4 4.4 0 0 0 43 16.591V15a5 5 0 0 0-5-5 1 1 0 1 0 0 2 3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19H38ZM44 32a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSmokingCessation);
export default ForwardRef;
