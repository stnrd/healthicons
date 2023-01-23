import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCoins = (passedProps: SvgProps) => {
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
        d="M0 0h48v48H0V0Zm37.972 27.975A12.939 12.939 0 0 0 40 21c0-7.18-5.82-13-13-13-2.567 0-4.96.744-6.975 2.027a16.953 16.953 0 0 0-3.954.698A14.958 14.958 0 0 1 27 6c8.284 0 15 6.716 15 15 0 4.308-1.816 8.193-4.725 10.929.381-1.263.62-2.587.697-3.954ZM21 42c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Zm-3-18a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2Zm4-5v1a4.001 4.001 0 0 1 3.772 2.667 1 1 0 1 1-1.885.666A2.001 2.001 0 0 0 22 22v4a4 4 0 0 1 0 8v1h-2v-1a4.001 4.001 0 0 1-3.772-2.667 1 1 0 1 1 1.885-.666A2.001 2.001 0 0 0 20 32v-4a4 4 0 0 1 0-8v-1h2Zm2 11a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCoins;
