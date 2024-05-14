import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeSuit = (passedProps: SvgProps) => {
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
      <G clipPath="url(#ppe-suit_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM22 4a4 4 0 0 0-4 4v6.417h-1a4 4 0 0 0-4 4V31a3 3 0 0 0 5 2.236V40.5a2.5 2.5 0 0 0 5 0V29h2v11.5a2.5 2.5 0 0 0 5 0v-7.264A3 3 0 0 0 35 31V18.417a4 4 0 0 0-4-4h-1V8a4 4 0 0 0-4-4h-4Zm.9 19.792h-5.5v2.083h13.2v-2.083h-5.5v-9.375h-2.2v9.375ZM20 7h8v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7Zm-5 23v1a1 1 0 1 0 2 0v-1h-2Zm16 1v-1h2v1a1 1 0 1 1-2 0Z"
        />
      </G>
      <Defs>
        <ClipPath id="ppe-suit_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPpeSuit;
