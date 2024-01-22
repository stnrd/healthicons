import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGeneralSurgery = (passedProps: SvgProps) => {
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
      <G clipPath="url(#general_surgery_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM8 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.086l-9.221 9.128 2.619 1.746 4.481-4.481a1 1 0 0 1 1.415 1.414l-5.5 5.5-.008-.007-2.114 2.114A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30H12l15.704-15.704-.007-.007L36.071 6H8Zm2 28v2h10v-2H10Zm18 0h4v2h-4v-2Zm-6 0v2h4v-2h-4Zm12 0h4v2h-4v-2Zm-12.448-6h-4.724l11.427-11.426 2.606 1.737L29.17 20A4 4 0 0 0 28 22.828v.456l-3.65 3.574A4 4 0 0 1 21.552 28Zm5.155-6.707a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="general_surgery_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgGeneralSurgery;
