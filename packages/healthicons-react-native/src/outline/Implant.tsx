import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgImplant = (passedProps: SvgProps) => {
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
        d="M20 10a4 4 0 0 1 8 0v28a4 4 0 0 1-8 0V10Zm4-2a2 2 0 0 0-2 2v28a2 2 0 1 0 4 0V10a2 2 0 0 0-2-2Z"
      />
    </Svg>
  );
};
export default SvgImplant;
