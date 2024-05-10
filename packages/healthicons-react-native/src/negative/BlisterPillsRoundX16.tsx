import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsRoundX16 = (passedProps: SvgProps) => {
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
      <G clipPath="url(#blister_pills_round_x16_svg__a)" fill="#000">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v15a1 1 0 1 0 0 2v15a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V25a1 1 0 1 0 0-2V8Zm3 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
        <Path d="M18 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </G>
      <Defs>
        <ClipPath id="blister_pills_round_x16_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBlisterPillsRoundX16;
