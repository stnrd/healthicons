import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgV = (passedProps: SvgProps) => {
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
        d="M21.23 37.154a3 3 0 0 0 5.539 0l10-24a3 3 0 1 0-5.538-2.308L24 28.2l-7.231-17.354a3 3 0 1 0-5.538 2.308l10 24ZM24 37a1 1 0 0 1-.923-.615l-10-24a1 1 0 0 1 1.846-.77l8.154 19.57a1 1 0 0 0 1.846 0l8.154-19.57a1 1 0 0 1 1.846.77l-10 24A1 1 0 0 1 24 37Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgV;
