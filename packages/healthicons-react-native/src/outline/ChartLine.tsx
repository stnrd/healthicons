import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartLine = (passedProps: SvgProps) => {
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
        d="M6 41a1 1 0 0 0 1 1h34v-2H8v-4.641l6.352-7.713c.502.227 1.06.354 1.648.354 1.388 0 2.61-.707 3.328-1.78l4.675 1.948a4 4 0 1 0 7.383-2.3l4.975-6.218A4 4 0 1 0 34.8 18.4l-4.875 6.093a4 4 0 0 0-5.489 1.689l-4.45-1.854a4 4 0 1 0-7.193 2.064L8 32.212V7H6v34Zm12-17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgChartLine;
