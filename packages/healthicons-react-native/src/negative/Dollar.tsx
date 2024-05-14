import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDollar = (passedProps: SvgProps) => {
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
      <G clipPath="url(#dollar_svg__a)" fill="#000">
        <Path d="M18 18a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4ZM30 30a4 4 0 0 1-4 4v-8a4 4 0 0 1 4 4Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 6a2 2 0 0 1 2 2v2a8.003 8.003 0 0 1 7.544 5.334 2 2 0 0 1-3.771 1.332A4.002 4.002 0 0 0 26 14v8a8 8 0 1 1 0 16v2a2 2 0 1 1-4 0v-2a8.003 8.003 0 0 1-7.544-5.334 2 2 0 0 1 3.771-1.332A4.002 4.002 0 0 0 22 34v-8a8 8 0 1 1 0-16V8a2 2 0 0 1 2-2Z"
        />
      </G>
      <Defs>
        <ClipPath id="dollar_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgDollar;
