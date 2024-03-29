import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCardiogram = (passedProps: SvgProps) => {
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
      <G clipPath="url(#cardiogram_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h4a3 3 0 0 1 3 3v31a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V22.989h8.802l.287-.51 1.325-2.356 1.342 4.696.541 1.894 1.21-1.555 3.2-4.114h4.51a1 1 0 1 0 0-2h-5.489l-.3.386-2.29 2.945-1.459-5.105-.658-2.305-1.175 2.089-2.213 3.935H10V10a3 3 0 0 1 3-3h4Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8Zm-4 25a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="cardiogram_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgCardiogram;
