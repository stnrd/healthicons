import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBurnUnit = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.089 10c0 5.109-2.323 8.904-4.785 13.32-3.067 5.5-.214 10.263 3.289 14.68 0-5.07.806-7.931 4.6-11.741C25.525 30.435 25.737 33.5 25 38c9.663-4.666 9.146-12.317 6.33-21-.543 2-1.555 3.818-2.212 5.09-1.309-5.068-5.042-8.781-9.03-12.09Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgBurnUnit;
