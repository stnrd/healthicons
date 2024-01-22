import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBody = (passedProps: SvgProps) => {
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
      <G clipPath="url(#body_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm13.52 3.931a2 2 0 1 0-1.04-3.862c-4.978 1.339-8.751 1.946-12.472 1.93-3.727-.015-7.509-.655-12.512-1.937a2 2 0 0 0-.992 3.876c2.73.699 5.175 1.23 7.496 1.58V42a2 2 0 0 0 3.992.181l1-11A2 2 0 0 0 23 31h2a2 2 0 0 0 .008.181l1 11A2 2 0 0 0 30 42V19.554c2.325-.344 4.779-.885 7.52-1.623Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="body_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBody;
