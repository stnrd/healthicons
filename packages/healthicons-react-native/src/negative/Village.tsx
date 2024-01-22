import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVillage = (passedProps: SvgProps) => {
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
      <G clipPath="url(#village_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17.555 6.168a1 1 0 0 0-1.11 0l-6 4A1 1 0 0 0 10 11v8a1 1 0 0 0 1 1h4v-7h4v7h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-.445-.832l-6-4Zm16.941 5.964a1 1 0 0 0-.992 0l-7 4A1 1 0 0 0 26 17v10a1 1 0 0 0 1 1h5v-8h4v8h5a1 1 0 0 0 1-1V17a1 1 0 0 0-.504-.868l-7-4ZM14.553 24.106l-8 4A1 1 0 0 0 6 29v12a1 1 0 0 0 1 1h6v-9h4v9h6a1 1 0 0 0 1-1V29a1 1 0 0 0-.553-.894l-8-4a1 1 0 0 0-.894 0Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="village_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgVillage;
