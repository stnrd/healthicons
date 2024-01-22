import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHearingAid = (passedProps: SvgProps) => {
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
      <G clipPath="url(#hearing_aid_svg__a)" fill="#000">
        <Path d="M22.567 24.13a7.034 7.034 0 0 1-2.56-2.43L16.83 25.78l1.58 1.58 4.155-3.231Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM26 7c-6.075 0-11 4.925-11 11h-2c0-7.18 5.82-13 13-13s13 5.82 13 13c0 4.501-2.288 8.467-5.76 10.8C30.87 30.39 29 32.506 29 34.91V35a8 8 0 1 1-16 0v-.858a11 11 0 0 1 2.447-6.917l-.654-.654a1 1 0 0 1-.082-1.32l4.416-5.679a7 7 0 1 1 5.694 5.337l-5.879 4.573a1 1 0 0 1-1.32-.082l-.751-.75A9 9 0 0 0 15 34.141V35a6 6 0 0 0 12 0v-.089c0-3.457 2.628-6.096 5.124-7.772A10.988 10.988 0 0 0 37 18c0-6.075-4.925-11-11-11Z"
        />
      </G>
      <Defs>
        <ClipPath id="hearing_aid_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgHearingAid;
