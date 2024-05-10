import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartCuredIncreasing = (passedProps: SvgProps) => {
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
      <Path d="M7 42a1 1 0 0 1-1-1V6h2v29h3.052c6.552 0 12.354-1.368 16.843-4.532 4.153-2.927 7.277-7.457 8.803-14.106l-2.133 1.463a1 1 0 1 1-1.13-1.65l4.374-3a1 1 0 0 1 1.451.36l2.625 5a1 1 0 1 1-1.77.93l-1.445-2.753c-1.613 7.111-4.99 12.125-9.622 15.39C24.112 35.582 17.858 37 11.052 37H8v3h34v2H7Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.857 6a2.524 2.524 0 0 0-2.524 2.524v2.81h-2.81A2.524 2.524 0 0 0 11 13.856v2.286a2.524 2.524 0 0 0 2.524 2.524h2.81v2.81A2.524 2.524 0 0 0 18.856 24h2.286a2.524 2.524 0 0 0 2.524-2.524v-2.81h2.81A2.524 2.524 0 0 0 29 16.144v-2.286a2.524 2.524 0 0 0-2.524-2.524h-2.81v-2.81A2.524 2.524 0 0 0 21.144 6h-2.286Zm-.37 2.153a.524.524 0 0 1 .37-.153h2.286a.524.524 0 0 1 .524.524v3.81a1 1 0 0 0 1 1h3.81a.524.524 0 0 1 .523.523v2.286a.524.524 0 0 1-.524.524h-3.81a1 1 0 0 0-1 1v3.81a.524.524 0 0 1-.523.523h-2.286a.524.524 0 0 1-.524-.524v-3.81a1 1 0 0 0-1-1h-3.81a.524.524 0 0 1-.523-.523v-2.286a.524.524 0 0 1 .524-.524h3.81a1 1 0 0 0 1-1v-3.81c0-.138.055-.271.153-.37Z"
      />
    </Svg>
  );
};
export default SvgChartCuredIncreasing;
