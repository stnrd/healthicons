import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLetrinaAlt = (passedProps: SvgProps) => {
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
      <G clipPath="url(#letrina_alt_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM21 19a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H21Zm-9 6H6V12h12v11h24c0 8.43-5.703 13.35-13 13.94V37h-5.5v2H29v3H14.5V30c-.747 0-2.5-.5-2.5-2v-3ZM6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2H6V8Z"
        />
      </G>
      <Defs>
        <ClipPath id="letrina_alt_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgLetrinaAlt;
