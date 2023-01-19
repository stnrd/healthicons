import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledExerciseRunning = (
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
        d="M30.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-9.04 4.282c-1.247.31-2.098.776-2.785 1.354-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162 1.704-1.436 3.79-2.248 6.603-2.561 1.176-.13 2.47-.104 3.683.437 1.273.569 2.203 1.588 2.837 2.95.854 1.833 1.489 2.924 1.997 3.556.245.304.416.445.513.508.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367.361-.16.755-.352 1.237-.587l.115-.056a53.715 53.715 0 0 1 1.784-.84 2 2 0 0 1 1.625 3.655 49.38 49.38 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644-.9.398-2.05.83-3.297.679-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273 3.78 4.918c.225.294.364.644.403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433-2.296-2.988-.02.037-.084-.172-4.242-5.52a2 2 0 0 1-.282-1.934l2.647-6.915Z"
      />
      <Path
        fill="#333"
        d="m18.432 29.007-1.472 3.96-5.8-.46a2 2 0 1 0-.318 3.987l7.308.58a2 2 0 0 0 2.033-1.296l1.125-3.028-2.876-3.743Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledExerciseRunning);
export default ForwardRef;
