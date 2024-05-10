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
        d="M13 13a1 1 0 0 0-1 1v15.96a1 1 0 0 0 1 1h10v2.142h-4.538v2h11.076v-2H25v-2.143h10a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1H13Zm9.907 2.694-3.403 5.985h-5.658v1.987h6.833l1.619-2.847 1.891 6.548 4.43-5.633h4.53a1 1 0 0 0 1.005-.993 1 1 0 0 0-1.005-.994h-5.513l-2.602 3.31-2.127-7.363Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm31 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9Z"
      />
    </Svg>
  );
};
export default SvgCriticalCare;
