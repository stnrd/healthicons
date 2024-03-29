import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalAdvice = (passedProps: SvgProps) => {
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
      <G clipPath="url(#medical_advice_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM34 4c-5.523 0-10 4.477-10 10v9a1 1 0 0 0 1 1h9c5.523 0 10-4.477 10-10S39.523 4 34 4ZM5 11.778A2.783 2.783 0 0 1 7.778 9H14a2.783 2.783 0 0 1 2.778 2.778c0 2.115.338 4.142.963 6.033l.002.007.002.007a2.784 2.784 0 0 1-.691 2.82l-3.39 3.39a25.94 25.94 0 0 0 10.303 10.3l3.388-3.389a2.768 2.768 0 0 1 2.839-.667 19.28 19.28 0 0 0 6.028.961A2.783 2.783 0 0 1 39 34.018v6.204A2.783 2.783 0 0 1 36.222 43C18.977 43 5 29.023 5 11.778ZM33 15v4h2v-4h4v-2h-4V9h-2v4h-4v2h4Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="medical_advice_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMedicalAdvice;
