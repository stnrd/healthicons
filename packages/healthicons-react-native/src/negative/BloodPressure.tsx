import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodPressure = (passedProps: SvgProps) => {
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
        d="M0 0h48v48H0V0Zm15.563 7C10.035 7 6 12.64 6 18.724 6 32.304 24 41 24 41s2.123-1.092 4.912-3.053A10.5 10.5 0 0 1 23 28.5C23 22.701 27.701 18 33.5 18a10.48 10.48 0 0 1 8.15 3.88c.227-1.025.35-2.077.35-3.156C42 12.642 37.965 7 32.437 7c-3.835 0-6.68 2.531-8.437 6.121C22.243 9.531 19.398 7 15.562 7ZM40 28.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm2 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-6 .5a2 2 0 1 1-3.97-.348l-2.42-2.42 1.415-1.414 2.299 2.3A2 2 0 0 1 36 29Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgBloodPressure;
