import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgClinicalFe = (passedProps: SvgProps) => {
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
      <G clipPath="url(#clinical-fe_svg__a)" fill="#000">
        <Path d="M14 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9ZM14 18v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2ZM12 29a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H12ZM11 35a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM15 6a3 3 0 0 0-3 3H9a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3h-8Zm21 12a3 3 0 1 1 6 0v3h-6v-3Zm0 20V23h6v15l-3 4-3-4Z"
        />
      </G>
      <Defs>
        <ClipPath id="clinical-fe_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgClinicalFe;
