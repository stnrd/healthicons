import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgConstruction = (passedProps: SvgProps) => {
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
        d="M17.952 4h12a1 1 0 0 1 1 1H32V4h4v7h-4V9h-1.048v1a1 1 0 0 1-1 1h-2.666v9.253l1.19 1.19v19.843a3 3 0 0 1-3 3h-1.952a3 3 0 0 1-3-3V21.443l1.19-1.19V11h-1.762a2 2 0 0 1-2-2V6A5 5 0 0 0 13 11h-2a7 7 0 0 1 6.952-7Zm5.762 7h1.572v10.08l1.19 1.191v19.015a1 1 0 0 1-1 1h-1.952a1 1 0 0 1-1-1V22.27l1.19-1.19V11Z"
      />
    </Svg>
  );
};
export default SvgConstruction;
