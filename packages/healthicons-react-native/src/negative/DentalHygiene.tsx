import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDentalHygiene = (passedProps: SvgProps) => {
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
        d="M0 0h48v48H0V0Zm41 6a1 1 0 0 1 1 1v12.364a1 1 0 0 1-.243.653L38 24.372V41a1 1 0 1 1-2 0V24a1 1 0 0 1 .243-.653L40 18.992V17h-6v-2h6v-2h-6v-2h6V9h-6V7h6a1 1 0 0 1 1-1ZM10 36 6.03 8.658a2.106 2.106 0 0 1 .068-.984c.1-.32.276-.617.514-.87.239-.252.534-.454.867-.593C7.81 6.07 8.173 6 8.539 6h16.923c.366 0 .728.072 1.06.211.333.14.628.342.866.594.239.253.414.55.514.869.1.32.124.656.069.984L24 36v2.5c0 .915-.349 1.801-.982 2.46A3.352 3.352 0 0 1 20.6 42h-7.2c-.915 0-1.784-.38-2.418-1.04A3.554 3.554 0 0 1 10 38.5V36Zm2 1v1.5c0 .41.157.797.424 1.075.266.277.618.425.976.425h7.2c.358 0 .71-.148.976-.425.267-.278.424-.664.424-1.075V37H12Zm6.092-21.688a1 1 0 1 0-2 0v3.533h-3.616a1 1 0 1 0 0 2h3.616v3.533a1 1 0 1 0 2 0v-3.533h3.615a1 1 0 1 0 0-2h-3.615v-3.533Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDentalHygiene;
