import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCane = (passedProps: SvgProps) => {
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
      <G clipPath="url(#cane_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm25.86 38.836a1 1 0 0 1 .987-.836h.306a1 1 0 0 1 .986.836L28.667 42H29a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h.333l.528-3.164ZM27 15a1.5 1.5 0 0 1-1.5-1.5v-3c0-1.31-.397-2.146-.852-2.639A2.23 2.23 0 0 0 23 7.125a2.23 2.23 0 0 0-1.648.736c-.455.493-.852 1.329-.852 2.639a1.5 1.5 0 0 1-3 0c0-1.94.603-3.541 1.648-4.674A5.229 5.229 0 0 1 23 4.125c1.41 0 2.813.575 3.852 1.701C27.897 6.96 28.5 8.56 28.5 10.5v3A1.5 1.5 0 0 1 27 15Zm-1 1a1.53 1.53 0 0 0 1 .366A1.53 1.53 0 0 0 28 16v21a1.531 1.531 0 0 0-1-.367c-.384 0-.735.139-1 .367V16Z"
        />
      </G>
      <Defs>
        <ClipPath id="cane_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgCane;
