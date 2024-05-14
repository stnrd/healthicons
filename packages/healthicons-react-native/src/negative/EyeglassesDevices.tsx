import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEyeglassesDevices = (passedProps: SvgProps) => {
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
      <G clipPath="url(#eyeglasses_devices_svg__a)">
        <Path d="M0 0h48v48H0V0Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20 30a6 6 0 1 1-11.989-.372l.06-.55A6.001 6.001 0 0 1 20 30ZM8.605 24.092a8.003 8.003 0 0 1 13.222 4.247c.733-.217 1.426-.338 2.143-.339.727-.001 1.439.12 2.201.345A8.003 8.003 0 0 1 39.4 24.097L38.102 12H35a1 1 0 1 1 0-2h4a1 1 0 0 1 .994.893l1.94 18.081c.015.108.026.216.036.325l.024.23c.008.068.008.136.002.202.002.09.004.179.004.269a8 8 0 0 1-15.99.392c-.816-.276-1.444-.393-2.037-.392-.59 0-1.2.118-1.982.387a8 8 0 0 1-15.985-.7 1.007 1.007 0 0 1 .005-.159l.007-.07c.014-.216.038-.43.069-.642l1.924-17.923A1 1 0 0 1 9.005 10h4a1 1 0 1 1 0 2H9.903L8.605 24.092ZM34 24a6.001 6.001 0 0 1 5.95 5.22l.028.266A6 6 0 1 1 34 24Z"
        />
      </G>
      <Defs>
        <ClipPath id="eyeglasses_devices_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgEyeglassesDevices;
