import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBacteria = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.953 10.462A7.41 7.41 0 0 0 16 8.022V5h-2v3.137a7.437 7.437 0 0 0-4.944 3.473L6.5 10.134l-1 1.732 2.763 1.596A7.436 7.436 0 0 0 8 15.429c0 2.015.243 3.973.7 5.847l-2.959.793.518 1.932 2.995-.803a24.509 24.509 0 0 0 3.801 7.161l-2.762 2.762 1.414 1.415 2.633-2.634a24.693 24.693 0 0 0 5.313 4.432l-1.52 2.63 1.733 1 1.528-2.647A24.411 24.411 0 0 0 30 39.867V43h2v-3.007c.19.005.38.007.571.007a7.413 7.413 0 0 0 5.714-2.68l2.68 1.546 1-1.732-2.619-1.511c.42-.931.654-1.964.654-3.052a7.425 7.425 0 0 0-3.67-6.409l1.536-2.662-1.732-1-1.667 2.887a7.439 7.439 0 0 0-1.896-.244 9.674 9.674 0 0 1-6.125-2.175l2.261-2.26-1.414-1.415-2.261 2.261a9.674 9.674 0 0 1-2.175-6.125 7.399 7.399 0 0 0-.762-3.281l2.44-2.44-1.414-1.415-2.168 2.169ZM15 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm12 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-4-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm17 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </Svg>
  );
};
export default SvgBacteria;
