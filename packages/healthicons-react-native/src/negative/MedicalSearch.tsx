import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSearch = (passedProps: SvgProps) => {
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
      <G
        clipPath="url(#medical-search_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <Path d="M27 34c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13 5.82 13 13 13Zm-2-15v-4h4v4h4v4h-4v4h-4v-4h-4v-4h4Z" />
        <Path d="M0 0h48v48H0V0Zm14.632 32.126-1.705.119L6 39.172 8.828 42l6.884-6.884.158-1.4 1.346-1.346A14.942 14.942 0 0 0 27 36c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 3.826 1.432 7.317 3.79 9.967l-1.158 1.159Z" />
      </G>
      <Defs>
        <ClipPath id="medical-search_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMedicalSearch;
