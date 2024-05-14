import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWheelchairAlt = (passedProps: SvgProps) => {
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
      <G clipPath="url(#wheelchair-alt_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm16 42c5.523 0 10-4.477 10-10a9.966 9.966 0 0 0-.832-4h5.59l.242.242v7.929a3.001 3.001 0 1 0 2 0v-5.929l5.364 5.365.707.707.707-.707 2.829-2.829-1.414-1.414-2.122 2.121L32 26.414V26a2 2 0 0 0-2-2h-1v-4a3 3 0 0 0-3-3H15.53L12.97 6.757 12.78 6H8v2h3.22l3.519 14.079C9.81 22.699 6 26.904 6 32c0 5.523 4.477 10 10 10Zm.03-23H26a1 1 0 0 1 1 1v4h-4.999a9.95 9.95 0 0 0-5.213-1.97L16.031 19ZM16 37.556a5.556 5.556 0 1 0 0-11.112 5.556 5.556 0 0 0 0 11.112ZM31 39a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-14-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        />
      </G>
      <Defs>
        <ClipPath id="wheelchair-alt_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgWheelchairAlt;
