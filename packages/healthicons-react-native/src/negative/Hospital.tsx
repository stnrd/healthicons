import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospital = (passedProps: SvgProps) => {
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
      <G clipPath="url(#hospital_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 42a1 1 0 1 0 0 2h30a1 1 0 1 0 0-2h-3V8h2V6h-7a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2h-7v2h2v34H9Zm25-31v31h-3v-4h1v-2H16v2h1v4h-3V11h3v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5h3ZM23 42h2v-4h-2v4ZM34 8v1h-3V8h3ZM14 9h3V8h-3v1Zm11-2h-2v3h-3v2h3v3h2v-3h3v-2h-3V7Zm-9 13h4v3h-4v-3Zm4 5h-4v3h4v-3Zm-4 5h4v3h-4v-3Zm10-10h-4v3h4v-3Zm-4 5h4v3h-4v-3Zm4 5h-4v3h4v-3Zm2-10h4v3h-4v-3Zm4 5h-4v3h4v-3Zm-4 5h4v3h-4v-3Z"
        />
      </G>
      <Defs>
        <ClipPath id="hospital_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgHospital;
