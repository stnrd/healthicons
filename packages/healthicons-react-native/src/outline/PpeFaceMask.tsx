import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeFaceMask = (passedProps: SvgProps) => {
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
        d="M23.706 11.044c.192-.059.396-.059.588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a8.99 8.99 0 0 1-4.897 3.693l-7.353 2.263a1.001 1.001 0 0 1-.588 0l-7.353-2.263A8.99 8.99 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956l13-4ZM10 19H9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1.482A8.985 8.985 0 0 1 10 26.091V19Zm28 7.091V19h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.482A8.985 8.985 0 0 0 38 26.091ZM12 16.74v9.352a7 7 0 0 0 4.941 6.69L24 34.955l7.059-2.172A7 7 0 0 0 36 26.092v-9.353l-12-3.693-12 3.693ZM18 21v-2h12v2H18Zm0 6h12v-2H18v2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPpeFaceMask;
