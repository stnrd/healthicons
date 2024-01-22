import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgICertificatePaper = (passedProps: SvgProps) => {
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
      <G clipPath="url(#i_certificate_paper_svg__a)" fill="#000">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 40h-4v-3.535a4 4 0 1 1 4 0V40Zm-2-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
        <Path d="M18 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1ZM15 16a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15ZM14 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM15 24a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm10 7v30a3 3 0 0 0 3 3h13v4l2-1.5 2 1.5v-4h5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3Z"
        />
      </G>
      <Defs>
        <ClipPath id="i_certificate_paper_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgICertificatePaper;
