import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.912 18c0 1.825-.73 3.18-1.503 4.757-.962 1.965-.067 3.665 1.033 5.243 0-1.81.253-2.833 1.444-4.193.732 1.491.799 2.586.567 4.193 3.034-1.666 2.872-4.399 1.987-7.5-.17.714-.488 1.364-.694 1.818-.411-1.81-1.583-3.136-2.835-4.318Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.829 25.61A9.612 9.612 0 0 0 6 31.253v1.139C6 37.698 10.298 42 15.6 42h13.6a1.6 1.6 0 0 0 0-3.203h-8.089v-1.601H34a1.6 1.6 0 0 0 0-3.203H22.8V32.39h13.6a1.6 1.6 0 0 0 0-3.203H22.8v-1.601H34a1.6 1.6 0 0 0 0-3.203H20.615c-.79 0-1.102-1.023-.447-1.465l3.228-2.181a2.045 2.045 0 0 0 .535-2.86 2.04 2.04 0 0 0-2.649-.631L18.8 18.592v8.23c0 2.958-2.456 5.357-5.486 5.357S7.83 29.78 7.83 26.82v-1.21ZM19 13h19a2 2 0 1 0 0-4H19V7h19a4 4 0 0 1 0 8H19v-2ZM16 14h1V8h-1v6Zm-2 1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v8Z"
      />
      <Path d="m31 8-15 6h22.208a2.615 2.615 0 0 0 2.537-1.98l.059-.235a3.236 3.236 0 0 0 0-1.57l-.059-.234A2.615 2.615 0 0 0 38.208 8H31Z" />
    </Svg>
  );
};
export default SvgChemicalBurn;
