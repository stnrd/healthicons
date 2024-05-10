import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChemicalBurn = (passedProps: SvgProps) => {
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
      <G clipPath="url(#chemical_burn_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.557 22.456c.716-1.452 1.354-2.748 1.354-4.456 1.252 1.182 2.424 2.508 2.835 4.318l.072-.156c.202-.442.47-1.026.622-1.662.885 3.101 1.047 5.834-1.987 7.5.232-1.607.165-2.702-.567-4.193-1.191 1.36-1.444 2.383-1.444 4.193-1.1-1.578-1.995-3.278-1.033-5.243l.148-.3ZM7.83 25.611A9.612 9.612 0 0 0 6 31.252v1.139C6 37.698 10.298 42 15.6 42h13.6a1.6 1.6 0 0 0 0-3.203h-8.089v-1.601H34a1.6 1.6 0 0 0 0-3.203H22.8V32.39h13.6a1.6 1.6 0 0 0 0-3.203H22.8v-1.601H34a1.6 1.6 0 0 0 0-3.203H20.615c-.79 0-1.102-1.023-.447-1.465l3.228-2.181a2.045 2.045 0 0 0 .535-2.86 2.04 2.04 0 0 0-2.649-.631L18.8 18.592v8.23c0 2.958-2.456 5.357-5.486 5.357S7.83 29.78 7.83 26.82v-1.21ZM19 12.8 28.5 9H19v3.8Zm-2 .8V8h-1v6l1-.4ZM19 7a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1h19a4 4 0 0 0 0-8H19Z"
        />
      </G>
      <Defs>
        <ClipPath id="chemical_burn_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgChemicalBurn;
