import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgS = (passedProps: SvgProps) => {
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
      <G clipPath="url(#S_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18 18a4 4 0 0 1 4-4h4a4.002 4.002 0 0 1 3.773 2.666 2 2 0 0 0 3.771-1.332A8.003 8.003 0 0 0 26 10h-4a8 8 0 1 0 0 16h4a4 4 0 0 1 0 8h-4a4.002 4.002 0 0 1-3.773-2.666 2 2 0 0 0-3.771 1.332A8.003 8.003 0 0 0 22 38h4a8 8 0 1 0 0-16h-4a4 4 0 0 1-4-4Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="S_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgS;
