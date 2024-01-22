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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V18a3 3 0 0 1-3-3V7Zm7 9V6h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4Zm2 0h5V6h-5v10Zm7 0h5V6h-5v10Zm7 0h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4v10Zm-9 14v5h2v-5h5v-2h-5v-5h-2v5h-5v2h5Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgMedicineBottle;
