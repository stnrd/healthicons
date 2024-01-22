import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgA = (passedProps: SvgProps) => {
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
        d="M24 10a2 2 0 0 1 1.846 1.23l7.483 17.96.035.084 2.482 5.957a2 2 0 0 1-3.692 1.538L30.167 32H17.833l-1.987 4.77a2 2 0 0 1-3.692-1.54l2.482-5.956a2.01 2.01 0 0 1 .035-.085l7.483-17.958A2 2 0 0 1 24 10Zm-4.5 18h9L24 17.2 19.5 28Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgA;
