import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResult = (passedProps: SvgProps) => {
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
      <G clipPath="url(#rdt_result_svg__a)" fill="#000">
        <Path d="M20 38a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM18 31a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 8a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4Zm2 6v-2a2 2 0 1 0-4 0v2h4Zm0 2h-4v9a2 2 0 1 0 4 0v-9Z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6Zm20.85 2.105c.238-.105.495-.131.743-.079.248.053.485.185.677.39a1 1 0 1 0 1.46-1.368 3.301 3.301 0 0 0-1.722-.978 3.207 3.207 0 0 0-1.966.206 3.383 3.383 0 0 0-1.495 1.304A3.62 3.62 0 0 0 28 9.5c0 .678.188 1.346.547 1.92.36.574.877 1.031 1.495 1.304a3.208 3.208 0 0 0 1.966.206 3.3 3.3 0 0 0 1.722-.978 1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.207 1.207 0 0 1-.742-.079 1.384 1.384 0 0 1-.609-.537A1.621 1.621 0 0 1 30 9.5c0-.31.087-.61.242-.858.156-.248.37-.432.609-.537ZM28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1ZM30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333 1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333 1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5Zm.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667 1 1 0 1 1 1.886-.666.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667 1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36h-1Zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0v-5Z"
        />
      </G>
      <Defs>
        <ClipPath id="rdt_result_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgRdtResult;
