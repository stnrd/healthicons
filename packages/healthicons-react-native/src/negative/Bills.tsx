import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBills = (passedProps: SvgProps) => {
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
      <G clipPath="url(#bills_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.49 36v-4h2v1.038A3 3 0 0 1 15.484 36h24.022a2.999 2.999 0 0 1 2.982-3V22.996A3 3 0 0 1 40 21.67V18h2.49a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-30a2 2 0 0 1-2-2ZM25 20a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 12a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12Zm29.001 0H8.998A3 3 0 0 1 6 15v10.038A2.999 2.999 0 0 1 8.996 28h24.021A3.001 3.001 0 0 1 36 25V14.996A3 3 0 0 1 33.001 12Z"
        />
      </G>
      <Defs>
        <ClipPath id="bills_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBills;
