import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgR = (passedProps: SvgProps) => {
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
      <Path d="M26 22h-8v-8h8a4 4 0 0 1 0 8Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM16 10a2 2 0 0 0-2 2v24a2 2 0 1 0 4 0V26h6.764l5.447 10.894a2 2 0 0 0 3.578-1.788l-4.835-9.67A8.003 8.003 0 0 0 26 10H16Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgR;
