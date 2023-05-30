import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRx = (passedProps: SvgProps) => {
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
      <G clipPath="url(#rx_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4Zm-7 9a1 1 0 0 0-1 1v16h2v-7h2.586l6 6-4.293 4.293 1.414 1.414L28 30.414l4.293 4.293 1.414-1.414L29.414 29l4.293-4.293-1.414-1.414L28 27.586l-4.602-4.602A5 5 0 0 0 23 13h-6Zm1 8h5a3 3 0 1 0 0-6h-5v6Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="rx_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgRx;
