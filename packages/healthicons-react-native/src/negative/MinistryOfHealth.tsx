import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMinistryOfHealth = (passedProps: SvgProps) => {
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
      <G clipPath="url(#ministry_of_health_svg__a)" fill="#333">
        <Path d="M25 12v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2ZM26 29a2 2 0 1 0-4 0v8h4v-8Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H6v6h36v-6h-2.65L24.626 5.22ZM20 29a4 4 0 0 1 8 0v8h6v-4h2v-8h4v8h2v4h2v6H4v-6h2v-4h2v-8h4v8h2v4h6v-8Z"
        />
      </G>
      <Defs>
        <ClipPath id="ministry_of_health_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMinistryOfHealth;
