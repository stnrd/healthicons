import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTriangleSmall = (passedProps: SvgProps) => {
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
        d="M24 11a1 1 0 0 1 .894.553l12 24A1 1 0 0 1 36 37H12a1 1 0 0 1-.894-1.447l12-24A1 1 0 0 1 24 11Zm0 3.236L13.618 35h20.764L24 14.236Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgTriangleSmall;
