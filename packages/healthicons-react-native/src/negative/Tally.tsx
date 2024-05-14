import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTally = (passedProps: SvgProps) => {
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
      <G clipPath="url(#tally_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 .048H0v48h48v-48ZM44.157 24c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20ZM16 15a1 1 0 1 1 2 0v2.43l3 2.56V15a1 1 0 1 1 2 0v6.698l3 2.56V15a1 1 0 1 1 2 0v10.965l3 2.56V15a1 1 0 1 1 2 0v15.233l3.12 2.662-1.3 1.521L33 32.862V33a1 1 0 1 1-2 0v-1.845l-3-2.56V33a1 1 0 1 1-2 0v-6.112l-3-2.56V33a1 1 0 1 1-2 0V22.62l-3-2.56V33a1 1 0 1 1-2 0V18.353l-3.767-3.215 1.299-1.521L16 15.723V15Z"
        />
      </G>
      <Defs>
        <ClipPath id="tally_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgTally;
