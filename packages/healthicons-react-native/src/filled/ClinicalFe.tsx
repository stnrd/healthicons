import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgClinicalFe = (passedProps: SvgProps) => {
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
        d="M12 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h3a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm-1 10v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Zm-2 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H12Zm-1 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z"
      />
      <Path d="M36 18a3 3 0 1 1 6 0v3h-6v-3ZM36 38V23h6v15l-3 4-3-4Z" />
    </Svg>
  );
};
export default SvgClinicalFe;
