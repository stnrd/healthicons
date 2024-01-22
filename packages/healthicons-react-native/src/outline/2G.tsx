import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg2G = (passedProps: SvgProps) => {
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
        d="M32.485 5.515a12 12 0 0 1 0 16.97L33.9 23.9a14 14 0 0 0 0-19.8l-1.415 1.415ZM18.75 31a1.25 1.25 0 0 1 .805 2.208l-5.25 5.073A1 1 0 0 0 15 40h6a1 1 0 1 0 0-2h-3.526l3.458-3.342A3.25 3.25 0 0 0 18.75 29h-1.5a3.25 3.25 0 0 0-3.065 2.167 1 1 0 1 0 1.886.666A1.25 1.25 0 0 1 17.25 31h1.5ZM32.753 31.774a1 1 0 0 0-.08-1.412 5.503 5.503 0 1 0 0 8.204 1 1 0 0 0 .334-.745v-3.357a1 1 0 0 0-1-1h-3.002a1 1 0 0 0 0 2h2.002v1.875a3.502 3.502 0 0 1-5.506-2.875 3.503 3.503 0 0 1 5.84-2.611 1 1 0 0 0 1.412-.079Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 28a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V28Zm2 0a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V28Z"
        fill="#000"
      />
      <Path
        d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.539ZM18.457 11.704a6 6 0 0 1 1.3-1.947l-1.414-1.414a8 8 0 0 0 0 11.314l1.414-1.414a6 6 0 0 1-1.3-6.539Z"
        fill="#000"
      />
      <Path
        d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8l1.415 1.415ZM24 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#000"
      />
    </Svg>
  );
};
export default Svg2G;
