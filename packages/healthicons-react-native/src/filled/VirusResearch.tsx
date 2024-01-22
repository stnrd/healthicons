import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusResearch = (passedProps: SvgProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v3.041a11.948 11.948 0 0 1 6.75 2.796l.028-.03 2.122-2.12-.708-.708a1 1 0 0 1 1.415-1.414l2.828 2.828a1 1 0 1 1-1.414 1.415l-.707-.707-2.122 2.12-.03.03a11.948 11.948 0 0 1 2.826 7.203A9.996 9.996 0 0 0 32 22c-5.523 0-10 4.477-10 10 0 1.04.159 2.044.454 2.988a11.948 11.948 0 0 1-7.204-2.825l-.005.005a1.074 1.074 0 0 1-.023.025l-2.121 2.12.707.708a1 1 0 0 1-1.415 1.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707.707 2.122-2.122.03-.028A11.947 11.947 0 0 1 11.04 24H8v1a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v1h3.041a11.947 11.947 0 0 1 2.796-6.75l-.005-.005a1.058 1.058 0 0 1-.024-.023L11.686 13.1l-.707.707a1 1 0 0 1-1.414-1.415l2.828-2.828a1 1 0 1 1 1.415 1.414l-.707.707 2.12 2.122.03.03A11.948 11.948 0 0 1 22 11.04L22 11V8h-1a1 1 0 0 1-1-1Zm2 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 1 1 14.32 4.906l4.387 4.387a1 1 0 0 1-1.414 1.414l-4.387-4.387A8 8 0 0 1 24 32Zm8-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgVirusResearch;
