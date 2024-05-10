import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeApron = (passedProps: SvgProps) => {
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
      <G clipPath="url(#ppe_apron_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM19.428 7.027A6 6 0 0 0 14 13v12a2 2 0 0 0 2 2h2v12l2.838.946a10 10 0 0 0 6.324 0L30 39V27h2a2 2 0 0 0 2-2V13a6 6 0 0 0-5.428-5.973 5.001 5.001 0 0 1-9.144 0ZM19 25v-2h10v2H19Z"
        />
      </G>
      <Defs>
        <ClipPath id="ppe_apron_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPpeApron;
