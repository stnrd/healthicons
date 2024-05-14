import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlert = (passedProps: SvgProps) => {
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
        d="M21 8a3 3 0 1 1 6 0v22a3 3 0 1 1-6 0V8Zm0 32a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        stroke="#000"
      />
    </Svg>
  );
};
export default SvgAlert;
