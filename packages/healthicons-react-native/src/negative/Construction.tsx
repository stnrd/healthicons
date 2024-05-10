import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgConstruction = (passedProps: SvgProps) => {
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
      <G clipPath="url(#construction_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17.952 4A7 7 0 0 0 11 11h2a5 5 0 0 1 4.952-5v3a2 2 0 0 0 2 2h1.762v9.253l-1.19 1.19v19.843a3 3 0 0 0 3 3h1.952a3 3 0 0 0 3-3V21.443l-1.19-1.19V11h2.666a1 1 0 0 0 1-1V9H32v2h4V4h-4v1h-1.048a1 1 0 0 0-1-1h-12Zm7.334 7h-1.572v10.08l-1.19 1.191v19.015a1 1 0 0 0 1 1h1.952a1 1 0 0 0 1-1V22.27l-1.19-1.19V11Z"
        />
      </G>
      <Defs>
        <ClipPath id="construction_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgConstruction;
