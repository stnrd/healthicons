import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeSanitizer = (passedProps: SvgProps) => {
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
      <G clipPath="url(#ppe_sanitizer_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm13.928 9.048a8.748 8.748 0 0 0-1.56 1.948l-1.736-.992a10.736 10.736 0 0 1 1.94-2.427C13.43 6.787 14.624 6 16 6H33v2H25v6h4a2 2 0 0 1 2 2v3h1a5 5 0 0 1 5 5v16a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V24a5 5 0 0 1 5-5h1v-3a2 2 0 0 1 2-2h4V8H16c-.624 0-1.346.38-2.072 1.048ZM18 29h5v-5h2v5h5v2h-5v5h-2v-5h-5v-2Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="ppe_sanitizer_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPpeSanitizer;
