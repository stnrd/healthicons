import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaPfMicroscope = (passedProps: SvgProps) => {
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
      <G clipPath="url(#malaria_pf_microscope_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20ZM9.693 21.994c1.18 1.527 4.627.84 7.698-1.533 3.072-2.374 4.606-5.536 3.426-7.063-1.18-1.527-4.628-.84-7.7 1.533-3.07 2.374-4.604 5.536-3.424 7.063Zm21.694 5.541c3.287 1.985 5.151 4.918 4.165 6.552-.987 1.634-4.451 1.35-7.738-.635-3.286-1.984-5.15-4.917-4.164-6.551.986-1.634 4.45-1.35 7.737.634Zm.831-3.994c1.75-.819 1.833-4.334.188-7.852-1.646-3.519-4.398-5.707-6.148-4.89-1.749.819-1.832 4.334-.187 7.853 1.646 3.518 4.398 5.707 6.147 4.889Zm-11.65 7.077c1.784 3.55 1.8 7.146.035 8.033-1.764.887-4.64-1.272-6.425-4.82-1.784-3.55-1.8-7.146-.036-8.033 1.765-.887 4.642 1.271 6.426 4.82Zm-1.565-14.866a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1.98-1.114a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.068 3.02a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm8.467 10.54a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.866.36a.453.453 0 1 0 0-.907.453.453 0 0 0 0 .906Zm-.331-15.397a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.7 2.4a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM16.059 29.648a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.825-1.76a.453.453 0 1 0 0-.906.453.453 0 0 0 0 .906Zm3.198 1.574a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="malaria_pf_microscope_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMalariaPfMicroscope;
