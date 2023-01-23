import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTriangleLarge = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM24.767 6.474a.857.857 0 0 0-1.534 0L6.09 40.759A.857.857 0 0 0 6.857 42h34.286a.857.857 0 0 0 .767-1.24L24.767 6.474Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgTriangleLarge;
