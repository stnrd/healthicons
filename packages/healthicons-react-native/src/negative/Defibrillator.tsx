import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDefibrillator = (passedProps: SvgProps) => {
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
      <G clipPath="url(#defibrillator_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-6.633 19.269c1.221-3.105.815-6.722-1.523-9.297a9.026 9.026 0 0 0-2.93-2.146A9.092 9.092 0 0 0 26.74 9.623l-2.645 2.622-2.283-2.264c-3.457-3.429-9.144-3.934-12.777-.69a8.959 8.959 0 0 0-2.164 2.905 8.893 8.893 0 0 0-.191 7.073c2.855 7.105 10.49 14.511 16.18 20.03l1.235 1.201c1.73-2.143 3.852-4.316 6.031-6.547 4.456-4.564 9.153-9.374 11.24-14.684ZM26.91 14.536l-7.94 10.266a.5.5 0 0 0 .395.806h4.527l-1.527 7.75 7.94-10.266a.5.5 0 0 0-.396-.806h-4.526l1.527-7.75Z"
        />
      </G>
      <Defs>
        <ClipPath id="defibrillator_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgDefibrillator;
