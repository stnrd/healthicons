import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRuralPost = (passedProps: SvgProps) => {
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
      <G clipPath="url(#rural_post_svg__a)" fill="#000">
        <Path d="M32 12h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm23 11H5v2h1v23H5a1 1 0 1 0 0 2h38a1 1 0 1 0 0-2h-1V13h1v-2h-4v6h1v19h-3V24h-8v12H8V17h15v-6Zm3 13H11v7h-1v2h17v-2h-1v-7Zm1-15h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
        />
      </G>
      <Defs>
        <ClipPath id="rural_post_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgRuralPost;
