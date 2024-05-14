import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartCuredDecreasing = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path d="M15.828 18.14C13.684 16.74 11.303 16 8.871 16H8V6H6v35a1 1 0 0 0 1 1h35v-2H8V18h.871c2.016 0 4.021.612 5.864 1.815 1.846 1.204 3.482 2.971 4.765 5.186 1.419 2.45 3.262 4.462 5.402 5.86C27.047 32.258 29.428 33 31.86 33h6.506l-3.073 3.075a1 1 0 0 0 1.414 1.414l4.78-4.782a1 1 0 0 0 0-1.414l-4.78-4.782a1 1 0 0 0-1.414 1.414L38.367 31H31.86c-2.016 0-4.022-.612-5.865-1.815-1.845-1.204-3.482-2.971-4.764-5.186-1.419-2.45-3.262-4.462-5.403-5.86Z" />
      <Path d="M40.554 12.78c.285.285.446.673.446 1.077v2.286a1.524 1.524 0 0 1-1.524 1.524h-3.81v3.81A1.524 1.524 0 0 1 34.144 23h-2.286a1.524 1.524 0 0 1-1.524-1.524v-3.81h-3.81A1.524 1.524 0 0 1 25 16.144v-2.286a1.524 1.524 0 0 1 1.524-1.524h3.81v-3.81A1.524 1.524 0 0 1 31.856 7h2.286a1.524 1.524 0 0 1 1.524 1.524v3.81h3.81c.403 0 .79.16 1.077.446Z" />
    </Svg>
  );
};
export default SvgChartCuredDecreasing;
