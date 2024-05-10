import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyFemale0306M = (passedProps: SvgProps) => {
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
      <G clipPath="url(#baby_female_0306m_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm17.8 32.6a3 3 0 0 1 .6 4.2l-3 4A3 3 0 0 1 13 42H9a3 3 0 1 1 0-6h2.5l2.1-2.8a3 3 0 0 1 4.2-.6Zm9.359-3.6h.076l.804 12.854c-.401.096-.811.145-1.223.146h-.827l-.812-13h1.982Zm3.84 11.024a6.01 6.01 0 0 1-1.013.928l-.72-11.51c.216.096.425.205.629.33 1.4.855 2.99 2.867 4.319 4.546.551.697 1.058 1.337 1.486 1.813l.57.262h3.204c.67 0 1.312.296 1.786.822.474.525.74 1.238.74 1.982 0 .743-.266 1.456-.74 1.982s-.982.821-1.652.821h-5.59c-.734 0-1.277-.868-1.78-1.67-.227-.363-.445-.712-.67-.961l-.569.655ZM23.173 29H21.5l.586 13h1.9l-.813-13ZM40 21.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-3 5.917A6.002 6.002 0 0 0 12 6a6 6 0 0 0-1 11.917V20H9a1 1 0 1 0 0 2h2v3a1 1 0 1 0 2 0v-3h2a1 1 0 1 0 0-2h-2v-2.083Z"
        />
      </G>
      <Defs>
        <ClipPath id="baby_female_0306m_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBabyFemale0306M;
