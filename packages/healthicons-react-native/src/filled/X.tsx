import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgX = (passedProps: SvgProps) => {
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
        d="M35.28 10.464a2 2 0 0 1 .256 2.816L26.603 24l8.933 10.72a2 2 0 1 1-3.072 2.56L24 27.124 15.537 37.28a2 2 0 1 1-3.073-2.56L21.397 24l-8.933-10.72a2 2 0 1 1 3.072-2.56L24 20.876l8.464-10.156a2 2 0 0 1 2.816-.256Z"
      />
    </Svg>
  );
};
export default SvgX;
