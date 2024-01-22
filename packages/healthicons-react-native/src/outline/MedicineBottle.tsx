import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicineBottle = (passedProps: SvgProps) => {
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
      <Path d="M23 23v5h-5v2h5v5h2v-5h5v-2h-5v-5h-2Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V18a3 3 0 0 1-3-3V7Zm5 11h20v23a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V18Zm22-2h-4V6h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1ZM30 6h-5v10h5V6ZM12 6h4v10h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm6 10V6h5v10h-5Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgMedicineBottle;
