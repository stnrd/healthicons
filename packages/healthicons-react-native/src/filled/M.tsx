import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgM = (passedProps: SvgProps) => {
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
        d="M16 17.524V36a2 2 0 1 1-4 0V12a2 2 0 0 1 3.536-1.28L24 20.876l8.464-10.156A2 2 0 0 1 36 12v24a2 2 0 1 1-4 0V17.524l-6.464 7.756a2 2 0 0 1-3.072 0L16 17.524Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgM;
