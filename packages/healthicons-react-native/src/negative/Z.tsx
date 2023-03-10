import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgZ = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM14 14h15.73L12.464 34.72A2 2 0 0 0 14 38h20a2 2 0 1 0 0-4H18.27l17.266-20.72A2 2 0 0 0 34 10H14a2 2 0 0 0 0 4Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgZ;
