import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospitalSymbol = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM3.97 24.291c0-11.046 8.954-20 20-20 11.045 0 20 8.954 20 20s-8.955 20-20 20c-11.046 0-20-8.954-20-20Zm16.021 1.757v7h-4v-18h4v7h8v-7h4v18h-4v-7h-8Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHospitalSymbol;
