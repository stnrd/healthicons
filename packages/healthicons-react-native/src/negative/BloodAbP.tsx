import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodAbP = (passedProps: SvgProps) => {
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
      <G clipPath="url(#blood_ab_p_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm27.612 5.535a5.018 5.018 0 0 0-7.224 0l-.528.548H15c-2.755 0-5 2.22-5 4.974v21.97C10 35.778 12.245 38 15 38h3v2h5v4h2v-4h5v-2h3c2.755 0 5-2.22 5-4.974V23h-2v4.539a8.442 8.442 0 0 0-.925-.626c-1.825-1.062-4.465-1.614-7.583.226-2.568 1.515-4.983 1.925-7.61 1.98-1.17.025-2.368-.02-3.65-.069l-.531-.02A68.776 68.776 0 0 0 12 28.97V11.058c0-1.636 1.337-2.974 3-2.974h5.286a1 1 0 0 0 .72-.307l.823-.855a3.018 3.018 0 0 1 4.342 0l.823.855a1 1 0 0 0 .72.307h5.616c1.48 0 2.67 1.19 2.67 2.646V15h2v-4.271c0-2.572-2.097-4.646-4.67-4.646h-5.19l-.528-.548Zm-8.196 9.064a1 1 0 0 0-1.832 0l-2.616 5.98a.998.998 0 0 0-.018.041l-.866 1.98a1 1 0 0 0 1.832.8l.613-1.4h3.942l.613 1.4a1 1 0 0 0 1.832-.8l-.866-1.98a.998.998 0 0 0-.018-.04l-2.616-5.98Zm-.916 2.896L19.596 20h-2.192l1.096-2.505ZM24 15a1 1 0 0 1 1-1h3.125C29.773 14 31 15.405 31 17a3.09 3.09 0 0 1-.732 2c.46.54.732 1.249.732 2 0 1.595-1.227 3-2.875 3H25a1 1 0 0 1-1-1v-8Zm4.125 3c.423 0 .875-.386.875-1s-.452-1-.875-1H26v2h2.125ZM26 20h2.125c.423 0 .875.386.875 1s-.452 1-.875 1H26v-2Zm7-2a1 1 0 1 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1a1 1 0 1 0-2 0v1h-1Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="blood_ab_p_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBloodAbP;
