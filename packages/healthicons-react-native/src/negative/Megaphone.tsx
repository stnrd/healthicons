import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMegaphone = (passedProps: SvgProps) => {
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
      <G clipPath="url(#megaphone_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM12 38v-7h4v7a2 2 0 1 1-4 0ZM7 26v-6a3 3 0 0 1 3-3h6v12h-6a3 3 0 0 1-3-3Zm27-4v1a3 3 0 0 1-3 3v-7a3 3 0 0 1 3 3Zm-16 8V15l9.463-6.022A1 1 0 0 1 29 9.822v25.356a1 1 0 0 1-1.537.844L18 30Zm22.555-11.168a1 1 0 0 0-1.11-1.664l-3 2a1 1 0 0 0 1.11 1.664l3-2ZM37 23a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm.555 4.168a1 1 0 0 0-1.11 1.664l3 2a1 1 0 0 0 1.11-1.664l-3-2Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="megaphone_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMegaphone;
