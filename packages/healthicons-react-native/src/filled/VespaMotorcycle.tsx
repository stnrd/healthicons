import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVespaMotorcycle = (passedProps: SvgProps) => {
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
      <Path
        d="M29.004 13.674 25 12.97l.346-1.97 4.136.727A3.498 3.498 0 0 1 32.5 10h3.885c.34 0 .615.275.615.615v5.77c0 .34-.276.615-.615.615H32.5a3.5 3.5 0 0 1-3.496-3.326Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.805 18.563 29.875 26H23v-1.28c0-.398-.378-.72-.844-.72h-8.07C8.516 24 4 27.85 4 32.6c0 .22.21.4.47.4h4.552a5.5 5.5 0 0 0 10.956 0h.91c.038 0 .075 0 .112-.002V33h10.366c.202.68.783 1.115 1.418 1.25a5.5 5.5 0 0 0 10.703-2.137c.445-.464.669-1.145.395-1.882A6.501 6.501 0 0 0 35 26.628V19h-2.5a3.484 3.484 0 0 1-1.695-.437ZM16.95 33h-4.9a2.5 2.5 0 0 0 4.9 0Zm18.944.848a2.501 2.501 0 0 0 4.546-.801l-4.546.801Z"
        fill="#333"
      />
      <Path
        d="M9.17 20a3.003 3.003 0 0 1 .063-.162M9.17 20c-.11.313-.17.65-.17 1v1h15v-1c0-.337-.055-.66-.158-.962L23.83 20A3.001 3.001 0 0 0 21 18h-9a3 3 0 0 0-2.764 1.832"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgVespaMotorcycle;
