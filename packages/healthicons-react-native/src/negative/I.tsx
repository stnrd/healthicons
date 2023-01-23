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
        d="M48 0H0v48h48V0ZM16 10a2 2 0 1 0 0 4h6v20h-6a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4h-6V14h6a2 2 0 1 0 0-4H16Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgI;
