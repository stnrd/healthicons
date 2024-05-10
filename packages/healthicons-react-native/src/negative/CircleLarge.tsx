import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCircleLarge = (passedProps: SvgProps) => {
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
      <G clipPath="url(#circle_large_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v48h48V0H0Zm24 4a20 20 0 1 1 0 40 20 20 0 0 1 0-40Z"
        />
      </G>
      <Defs>
        <ClipPath id="circle_large_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgCircleLarge;
