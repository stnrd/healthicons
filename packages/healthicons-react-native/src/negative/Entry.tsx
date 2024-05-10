import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEntry = (passedProps: SvgProps) => {
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
      <G clipPath="url(#entry_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm21 10h-7v27h7V10Zm0-2h-9v31h9v3.613a1 1 0 0 0 1.316.948l13-4.333a1 1 0 0 0 .684-.949V9.721a1 1 0 0 0-.684-.949l-13-4.333A1 1 0 0 0 21 5.387V8Zm6 15c0 1.105-.448 2-1 2s-1-.895-1-2 .448-2 1-2 1 .895 1 2Z"
        />
      </G>
      <Defs>
        <ClipPath id="entry_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgEntry;
