import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCriticalCare = (passedProps: SvgProps) => {
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm4 7a1 1 0 0 0-1 1v15.96a1 1 0 0 0 1 1h10v2.142h-4.538v2h11.076v-2H25v-2.143h10a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1H13Z"
        fill="#333"
      />
      <Path
        d="M13.846 21.679h5.658l3.403-5.985 2.127 7.363 2.602-3.31h5.513a1 1 0 0 1 1.005.994 1 1 0 0 1-1.005.993h-4.53l-4.43 5.633-1.891-6.548-1.62 2.847h-6.832V21.68Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCriticalCare;
