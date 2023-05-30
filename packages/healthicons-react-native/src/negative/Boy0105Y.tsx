import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBoy0105Y = (passedProps: SvgProps) => {
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
      <G clipPath="url(#boy_0105y_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM28 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm6.004 8.423a2 2 0 1 0-1.008-3.87c-3.613.94-6.326 1.36-8.988 1.349-2.668-.01-5.389-.454-9.027-1.356a2 2 0 1 0-.962 3.883c1.793.444 3.426.796 4.981 1.044v6.402l-.985 7.877a2 2 0 0 0 3.925.733l2-8c.04-.16.06-.323.06-.485 0 .162.02.325.06.485l2 8a2 2 0 0 0 3.925-.733L29 28.875v-6.376c1.56-.247 3.2-.606 5.004-1.076Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="boy_0105y_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBoy0105Y;
