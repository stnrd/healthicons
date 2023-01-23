import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBaby0306M = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 49"
      fill="none"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#baby_0306m_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 .25H0v48h48v-48ZM18.848 31.284a3.5 3.5 0 1 0-5.696-4.068l-1.453 2.034H9.5a3.5 3.5 0 1 0 0 7h4a3.5 3.5 0 0 0 2.848-1.466l2.5-3.5Zm20.626-.64H36.27l-.57-.263c-.428-.476-.935-1.116-1.486-1.814-1.328-1.678-2.92-3.69-4.319-4.545a5.173 5.173 0 0 0-2.736-.772H21.5l.586 13h4.729a5.332 5.332 0 0 0 2.273-.516 5.847 5.847 0 0 0 1.911-1.46l.57-.655c.224.249.442.598.67.961.502.802 1.045 1.67 1.78 1.67h5.589c.67 0 1.178-.295 1.652-.821s.74-1.239.74-1.982c0-.744-.266-1.457-.74-1.982-.474-.526-1.116-.822-1.786-.822ZM33.5 22.25a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="baby_0306m_svg__a">
          <Path fill="#fff" transform="translate(0 .25)" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBaby0306M;
