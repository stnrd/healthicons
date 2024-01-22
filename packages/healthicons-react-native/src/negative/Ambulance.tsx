import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAmbulance = (passedProps: SvgProps) => {
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
      <G clipPath="url(#ambulance_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm29.732 15A2 2 0 0 0 28 14H6a2 2 0 0 0-2 2v19h4.126a4.002 4.002 0 0 0 7.748 0H31.126a4.002 4.002 0 0 0 7.748 0H44V26.876a3 3 0 0 0-.965-2.205l-5.282-4.875A3 3 0 0 0 35.718 19H35v-1h-1v-1a1 1 0 1 0-2 0v1h-1v1h-1v-4h-.268ZM30 21v5h11.526l-5.13-4.735a1 1 0 0 0-.678-.265H30Zm0 7v5h1.126a4.002 4.002 0 0 1 7.748 0H42v-5H30Zm-16 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm21 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 19v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Zm16-6.5a1 1 0 1 0 2 0V11a1 1 0 1 0-2 0v1.5Zm4.5 4.5a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1Zm-.672-4.241a1 1 0 1 0 1.343 1.482l.915-.828a1 1 0 0 0-1.343-1.482l-.915.828Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="ambulance_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgAmbulance;
