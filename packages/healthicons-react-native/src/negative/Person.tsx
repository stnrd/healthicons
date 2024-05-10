import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPerson = (passedProps: SvgProps) => {
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
      <G clipPath="url(#person_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10 4.477 10 10 10Zm0 2c-6.008 0-18 3.035-18 8v6h36v-6c0-4.965-11.992-8-18-8Z"
        />
      </G>
      <Defs>
        <ClipPath id="person_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPerson;
