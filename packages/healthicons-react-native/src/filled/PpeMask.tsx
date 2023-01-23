import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeMask = (passedProps: SvgProps) => {
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
        d="M9 16.868c0-4.226 11.16-4.226 11.16-4.226l.901-1.616A2 2 0 0 1 22.808 10h2.559a2 2 0 0 1 1.747 1.026l.9 1.616S39 12.642 39 16.867v.167l1.73.42a4 4 0 0 1 3.042 4.235l-.557 6.387a4 4 0 0 1-2.62 3.412L33.84 33.94a.995.995 0 0 1-.485.05C29.278 38 24.484 38 24.484 38h-.968s-4.865 0-8.963-4.1l-7.192-2.798a4 4 0 0 1-2.532-3.348l-.573-6.021a4 4 0 0 1 3.114-4.284L9 17.087v-.219Zm26.61 14.303c1.735-2.763 3.053-6.642 3.334-12.092l1.315.32a2 2 0 0 1 1.52 2.117l-.556 6.387a2 2 0 0 1-1.31 1.706l-4.303 1.562ZM9.058 19.123l-1.254.278a2 2 0 0 0-1.557 2.142l.573 6.021a2 2 0 0 0 1.266 1.674l4.097 1.593c-1.628-2.73-2.851-6.501-3.125-11.708ZM24 18.469l6.242 1.56a1 1 0 1 1-.485 1.941L24 20.53l-5.758 1.44a1 1 0 1 1-.485-1.94L24 18.47Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPpeMask;
