import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicineMortar = (passedProps: SvgProps) => {
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
      <G clipPath="url(#medicine_mortar_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM33.994 8.235a3 3 0 0 1 4.02-.97l.168.097a3 3 0 0 1 1.17 3.967L35.932 18h-8.247l6.309-9.765ZM41 22h2v-2H5v2h2v3c0 5.784 3.777 10.686 9 12.373V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.627c5.222-1.687 9-6.589 9-12.373v-3ZM20 38h10v2H18v-2h2Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="medicine_mortar_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMedicineMortar;
