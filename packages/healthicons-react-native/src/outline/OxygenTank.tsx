import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOxygenTank = (passedProps: SvgProps) => {
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
        d="M17 6h2V4h-6v2h2v2h-2.17a3.001 3.001 0 1 0 0 2H15v2.083A6.002 6.002 0 0 0 10 18v25a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V18a6.002 6.002 0 0 0-5-5.917V10h5V8h-5V6Zm-1 8a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4Zm-4 28V22h8v20h-8ZM9 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm17 12a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0v-6Zm4-2a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-6a2 2 0 0 0-2-2Zm8 7h-3v-2h3a3 3 0 1 1 0 6 1 1 0 0 0-1 1v1h4v2h-5a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3 1 1 0 1 0 0-2Z"
      />
    </Svg>
  );
};
export default SvgOxygenTank;
