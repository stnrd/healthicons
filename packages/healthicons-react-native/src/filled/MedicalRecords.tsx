import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalRecords = (passedProps: SvgProps) => {
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm13 3h-3a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2h-3a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2Zm3.064 22.649L24.557 28H21a1 1 0 0 1 0-2h10.301a1 1 0 1 1 0 2h-2.858l2.493 6.649a1 1 0 1 1-1.872.702l-1.259-3.355h-2.61l-1.259 3.355a1 1 0 1 1-1.872-.702ZM17 19.24h14v-2H17v2Zm5 4.16h-5v-2h5v2Zm4.5 1.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 12h6v2h-6v-2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgMedicalRecords;
