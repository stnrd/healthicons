import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRunningWaterAlt = (passedProps: SvgProps) => {
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
      <G clipPath="url(#running_water_alt_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0 0-.04l-.04 48 48 .04L48 0ZM23.992 9.98a2 2 0 0 1 1.998 2.002l-.006 8-.004 4-4-.003.004-4 .006-8a2 2 0 0 1 2.002-1.999Zm3.998 2.004-.006 8 6 .004v-1l-2-.001-2-.002.002-2 .002-3a2 2 0 0 1 2.002-1.998l7 .006a2 2 0 0 1 1.998 2.001l-.002 3-.002 2-2-.001-2-.002v1l4 .003a2 2 0 0 1 1.998 2.002l-.002 3h1l-.002 2h-1l-14-.012v1l-.003 2-2-.001-6-.005-2-.002.002-2v-1l-14-.011-1-.001.003-2h1l.002-3a2 2 0 0 1 2.002-1.998l4 .004v-1l-2-.002-2-.002.002-2 .003-3a2 2 0 0 1 2.001-1.998l7 .006a2 2 0 0 1 1.998 2.001l-.002 3-.002 2-2-.001-2-.002v1l6 .005.006-8a4 4 0 1 1 8 .007ZM26.98 25.983l-.001 1v1l-6-.005v-2h1l4 .004h1ZM23.966 41.98a4 4 0 0 0 4.003-3.996c.003-3.5-3.994-7.004-3.994-7.004s-4.003 3.497-4.006 6.997a4 4 0 0 0 3.997 4.003Zm-11.98-25.01 1 .001.002-2 2 .002-.002 2h1l.002-3-7-.005-.002 3h1l.002-2 2 .002-.002 2Zm24 .02h-1l.002-2-2-.002-.002 2-1-.001.002-3 7 .006-.002 3-1-.001.002-2-2-.002-.002 2Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="running_water_alt_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgRunningWaterAlt;
