import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgThermometer = (passedProps: SvgProps) => {
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
      <G clipPath="url(#thermometer_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18.982 28.204v1.78a8 8 0 1 0 10-.008v-1.78l-.006-6.211-.01-12.408c-.002-2.958-2.243-5.355-5.004-5.353-2.762.003-4.998 2.403-4.996 5.362l.01 12.407.006 6.212Zm7.995-5.921c-1.457.025-2.823-.328-4.018-.637-.73-.188-1.397-.36-1.983-.42l-.01-11.642c-.001-1.775 1.34-3.215 2.998-3.217 1.657-.001 3 1.437 3.002 3.212v.619l-2 .002a1 1 0 0 0 .002 2l2-.002.002 2-2 .002a1 1 0 0 0 .002 2l2-.002.001 2-2 .002a1 1 0 0 0 .002 2l2-.002.002 2.085Z"
        />
      </G>
      <Defs>
        <ClipPath id="thermometer_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgThermometer;
