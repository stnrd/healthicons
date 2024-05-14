import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAllergies = (passedProps: SvgProps) => {
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
        clipPath="url(#allergies_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <Path d="M48 0H0v48h48V0ZM31 25.731V9a2 2 0 1 0-4 0v14h-2V6a2 2 0 1 0-4 0v17h-2V9a2 2 0 1 0-4 0v16.111h-2V15a2 2 0 1 0-4 0v17c0 6.627 5.373 12 12 12h1.422a12 12 0 0 0 10.553-6.287l6.938-12.816a2.552 2.552 0 0 0-4.36-2.642L32.83 26.29c-.552.817-1.829.427-1.829-.56Z" />
        <Path d="M19.022 28.983a1 1 0 1 1-2 .001 1 1 0 0 1 2-.001Zm5 .996a1 1 0 1 1-2 .001 1 1 0 0 1 2-.001Zm-3.995 5.003a1 1 0 1 0-.002-2 1 1 0 0 0 .002 2Zm5.998-2.005a1 1 0 1 1-2 .002 1 1 0 0 1 2-.002Zm1.004 5a1 1 0 1 0-.001-2 1 1 0 0 0 .001 2Zm2.995-6.003a1 1 0 1 1-2 .001 1 1 0 0 1 2-.001ZM22.03 38.98a1 1 0 1 0-.002-2 1 1 0 0 0 .002 2Zm-4.001-1.996a1 1 0 1 1-2 .001 1 1 0 0 1 2-.002Zm-3.003-2.998a1 1 0 1 0-.002-2 1 1 0 0 0 .002 2Z" />
      </G>
      <Defs>
        <ClipPath id="allergies_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgAllergies;
