import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCpr = (passedProps: SvgProps) => {
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
      <G clipPath="url(#cpr_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5 18a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4c0-.901.199-1.756.555-2.523l-1.729.74A3.013 3.013 0 0 0 11.013 42h1.515A5.978 5.978 0 0 1 11 38Zm11.987 4h-1.515A5.978 5.978 0 0 0 23 38c0-.901-.199-1.756-.555-2.523l1.729.74A3.013 3.013 0 0 1 22.987 42ZM19 23v8a2 2 0 1 1-4 0V19.271c0-3.43 4.033-5.268 6.623-3.02l9.764 8.48a7.589 7.589 0 0 1 2.537 6.803L33 38h7a2 2 0 1 1 0 4H30a2 2 0 0 1-2-2v-7.204a4 4 0 0 0-1.343-2.99L19 23Z"
        />
      </G>
      <Defs>
        <ClipPath id="cpr_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgCpr;
