import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAmbulatoryClinic = (passedProps: SvgProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 6a6.002 6.002 0 0 1 5.653 3.985H42.5V12.5L38 15.532V40h3a1 1 0 1 1 0 2h-3v.015H10V42H7a1 1 0 1 1 0-2h3V15.497l-4-3.03V9.984h7.347A6.002 6.002 0 0 1 19 6Zm1 5V9h-2v2h-2v2h2v2h2v-2h2v-2h-2Zm14 13v16h-8V24h8Zm-13 0h-7v7h7v-7Z"
      />
    </Svg>
  );
};
export default SvgAmbulatoryClinic;
