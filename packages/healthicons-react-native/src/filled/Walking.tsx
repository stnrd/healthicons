import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWalking = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path
        d="M31.25 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM25.693 28.397l5.193 5.124a2 2 0 0 1 .457.693l2.769 7.055a2 2 0 0 1-3.724 1.462l-2.614-6.661-8.928-8.81a2 2 0 0 1-.583-1.649l.715-6.32c-1.724 1.714-3.054 4.123-4.073 7.316a2 2 0 1 1-3.81-1.216c1.87-5.86 4.975-10.246 10.185-12.257l.023-.009c1.327-.493 2.707-.453 3.937.182 1.181.611 2.022 1.666 2.573 2.848.232.498.446.963.648 1.4.488 1.058.898 1.95 1.293 2.732.553 1.1.998 1.83 1.438 2.341.408.475.813.767 1.33.969.556.217 1.335.367 2.538.403a2 2 0 1 1-.12 3.998c-1.445-.043-2.728-.228-3.873-.675-1.183-.462-2.116-1.165-2.91-2.09-.5-.582-.94-1.247-1.35-1.97l-1.114 5.134Z"
        fill="#000"
      />
      <Path
        d="m18.263 30.22 3.315 3.18-1.526 5.147a2 2 0 0 1-.684 1.006l-5.134 4.023a2 2 0 0 1-2.467-3.15l4.632-3.628 1.395-4.71.469-1.868Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgWalking;
