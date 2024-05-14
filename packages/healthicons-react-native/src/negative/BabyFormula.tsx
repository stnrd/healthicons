import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyFormula = (passedProps: SvgProps) => {
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
      <G clipPath="url(#baby-formula_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.803 4l7.5 5h20.266l-.046-.03-7.613-4.674A2 2 0 0 0 29.863 4h-19.06ZM9 5.202V9.14a2 2 0 0 0 .304 1.06l3.353 5.365a1 1 0 0 0 1.473.25l2.12-1.695a2 2 0 0 0 .75-1.562v-2.023L9 5.202Zm0 32.975v-24.69l1.961 3.138c.27.432.63.77 1.039 1.006v22.948l-2.523-1.55A1 1 0 0 1 9 38.178Zm5 3.63 3 1.842V16.081l-1.62 1.296a2.983 2.983 0 0 1-1.38.617v23.813ZM26 21a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm1 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm11 19H19V11h20v32a1 1 0 0 1-1 1Zm-2-21a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </G>
      <Defs>
        <ClipPath id="baby-formula_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBabyFormula;
