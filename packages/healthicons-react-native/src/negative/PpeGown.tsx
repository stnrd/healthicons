import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeGown = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM35.34 8.526A5 5 0 0 0 30.363 4H27a3 3 0 1 1-6 0h-3.363a5 5 0 0 0-4.977 4.526l-1.447 15.19A2.988 2.988 0 0 0 12 26.04V30a1 1 0 0 0 1 1h3v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V31h3a1 1 0 0 0 1-1v-3.96c.56-.603.872-1.433.787-2.324L35.34 8.526ZM32 29h2v-2h-2v2Zm-16-2h-2v2h2v-2Zm15-2H17v-2h14v2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPpeGown;
