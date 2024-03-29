import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDoctor = (passedProps: SvgProps) => {
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
      <G clipPath="url(#doctor_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm14.433 33.442a3 3 0 1 0 1.96-.416 8.972 8.972 0 0 1-.103-.405 19.627 19.627 0 0 1-.32-1.87 17.026 17.026 0 0 1-.14-1.914 6.55 6.55 0 0 1 .015-.527c.384-.11.77-.21 1.155-.297.441-.1.703.42.914.842l.086.169H29.749c.229-.434.748-1.126 1.251-1.011.536.122 1.075.267 1.609.433l-.003.001c-.002-.002-.002-.002 0 .002.004.014.026.08.048.22.025.162.042.372.05.625.014.504-.015 1.117-.074 1.735-.06.617-.149 1.214-.249 1.685-.022.105-.044.2-.066.286H31a1 1 0 0 0-.894.553l-1 2A.999.999 0 0 0 29 36v2a1 1 0 0 0 1 1h2v-2h-1v-.764L31.618 35h2.764L35 36.236V37h-1v2h2a1 1 0 0 0 1-1v-2a.999.999 0 0 0-.106-.447l-1-2A1 1 0 0 0 35 33h-.636c.107-.533.196-1.155.256-1.779.066-.674.1-1.373.083-1.983l-.001-.028C38.69 30.895 42 33.666 42 36.57V42H6v-5.43c0-3.032 3.61-5.92 7.831-7.577.011.622.07 1.325.155 2.006.092.735.217 1.466.355 2.068.03.129.06.254.092.375ZM16 37.015c.538 0 1-.44 1-1.015 0-.574-.462-1.015-1-1.015s-1 .44-1 1.015c0 .574.462 1.015 1 1.015ZM32 16a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="doctor_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgDoctor;
