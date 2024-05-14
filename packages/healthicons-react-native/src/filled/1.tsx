import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg1 = (passedProps: SvgProps) => {
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
        d="M27.765 10.152A2 2 0 0 1 29 12v24a2 2 0 0 1-4 0V16.828l-1.586 1.586a2 2 0 0 1-2.828-2.828l5-5a2 2 0 0 1 2.18-.434Z"
      />
    </Svg>
  );
};
export default Svg1;
