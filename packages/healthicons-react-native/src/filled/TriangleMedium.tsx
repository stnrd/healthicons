import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTriangleMedium = (passedProps: SvgProps) => {
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
      <Path d="M24.894 8.553a1 1 0 0 0-1.788 0l-15 30A1 1 0 0 0 9 40h30a1 1 0 0 0 .894-1.447l-15-30Z" />
    </Svg>
  );
};
export default SvgTriangleMedium;
