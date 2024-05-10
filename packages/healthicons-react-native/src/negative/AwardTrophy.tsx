import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAwardTrophy = (passedProps: SvgProps) => {
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
      <G clipPath="url(#award_trophy_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM13 6a1 1 0 0 0-1 1v1H7a1 1 0 0 0-1 1v6a5 5 0 0 0 5 5h1.683A12.017 12.017 0 0 0 22 27.834V34h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6v-6.166A12.017 12.017 0 0 0 35.317 20H37a5 5 0 0 0 5-5V9a1 1 0 0 0-1-1h-5V7a1 1 0 0 0-1-1H13Zm23 4v8h1a3 3 0 0 0 3-3v-5h-4ZM8 10h4v8h-1a3 3 0 0 1-3-3v-5Z"
        />
      </G>
      <Defs>
        <ClipPath id="award_trophy_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgAwardTrophy;
