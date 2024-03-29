import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartLineStacked = (passedProps: SvgProps) => {
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
        d="M6 41a1 1 0 0 0 1 1h34v-2H8v-.638l9.331-11.198 11.353 3.785a1 1 0 0 0 1.084-.309l10-12-1.536-1.28-9.563 11.476-11.353-3.785a1 1 0 0 0-1.084.309L8 36.238v-6.851l9.289-10.218 10.37 3.77a1 1 0 0 0 1.11-.299l10-12-1.537-1.28-9.55 11.46-10.34-3.76a1 1 0 0 0-1.082.267L8 26.413V7H6v34Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgChartLineStacked;
