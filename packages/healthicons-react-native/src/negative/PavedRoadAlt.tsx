import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoadAlt = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 49 49"
      fill="none"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#paved_road_alt_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.02 1.02.02.98l-.04 48 48 .04.04-48ZM13.013 8.95a2 2 0 0 1 2.002-1.998l18 .015a2 2 0 0 1 1.998 2.001l-.026 32a2 2 0 0 1-2.002 1.999l-18-.015a2 2 0 0 1-1.998-2.002l.026-32Zm11.018 2.03a1 1 0 0 0-1 .998l-.004 4a1 1 0 0 0 2 .002l.003-4a1 1 0 0 0-.999-1Zm-.009 11a1 1 0 0 0-1 .998l-.004 4a1 1 0 0 0 2 .002l.003-4a1 1 0 0 0-.999-1Zm-1.01 11.998a1 1 0 1 1 2 .002l-.003 4a1 1 0 0 1-2-.002l.003-4Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="paved_road_alt_svg__a">
          <Path fill="#fff" transform="translate(.02 .98)" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPavedRoadAlt;
