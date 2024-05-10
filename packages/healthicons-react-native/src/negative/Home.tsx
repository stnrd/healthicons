import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHome = (passedProps: SvgProps) => {
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
      <G clipPath="url(#home_svg__a)" fill="#000">
        <Path d="M34 25v11h-6V25h6ZM25 25H14v6h11v-6Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM5 36a1 1 0 1 0 0 2h36a1 1 0 1 0 0-2h-3V22l-14-8-14 8v14H5Zm31-19.101V11h-5v2.957l-6.493-3.819a1 1 0 0 0-1.014 0L5.631 20.645l1.014 1.724L24 12.16 41.355 22.37l1.014-1.724L36 16.9Z"
        />
      </G>
      <Defs>
        <ClipPath id="home_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgHome;
