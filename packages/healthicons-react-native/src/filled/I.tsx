import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgI = (passedProps: SvgProps) => {
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
        d="M14 12a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4h-6v20h6a2 2 0 1 1 0 4H16a2 2 0 1 1 0-4h6V14h-6a2 2 0 0 1-2-2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgI;
