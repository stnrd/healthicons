import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMouth = (passedProps: SvgProps) => {
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
      <G clipPath="url(#mouth_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 14.182C15.2 10.254 7 18.545 4 24c3 4.364 11.2 12 20 12s17-7.636 20-12c-3-5.455-11-14.182-20-9.818ZM24 21c-5.816 0-11.585 1.473-14.69 2.523-.445.15-.43.762.018.904C12.318 25.375 17.92 27 24 27c5.98 0 11.5-1.66 14.525-2.57l.025-.008c.461-.138.487-.784.03-.936C35.45 22.439 29.747 21 24 21Z"
        />
      </G>
      <Defs>
        <ClipPath id="mouth_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMouth;
