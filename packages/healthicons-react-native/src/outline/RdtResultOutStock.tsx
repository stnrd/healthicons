import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultOutStock = (passedProps: SvgProps) => {
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
      <Path d="M27.707 7.707a1 1 0 0 0-1.414-1.414L24 8.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10l2.293-2.293ZM33.949 32.184a1 1 0 0 1-.633 1.265l-4.5 1.5a1 1 0 0 1-.632-1.898l4.5-1.5a1 1 0 0 1 1.265.633Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.684 26.449 10 27.554V36a1 1 0 0 0 .673.945l12.992 4.497c.199.071.421.08.637.011l.014-.004.015-.005 12.996-4.499A1 1 0 0 0 38 36v-8.446l3.316-1.105a1 1 0 0 0 .465-1.574l-4-5a1 1 0 0 0-.456-.32l-12.998-4.5a1 1 0 0 0-.654 0l-12.998 4.5a.999.999 0 0 0-.456.32l-4 5a1 1 0 0 0 .465 1.574Zm14.635 4.124 1.681-2.4v10.923l-11-3.808V28.22l8.184 2.728a1 1 0 0 0 1.135-.376ZM14.057 20.5 24 23.942l9.943-3.442L24 17.058 14.057 20.5Zm12.624 10.073L25 28.174v10.923l11-3.808V28.22l-8.184 2.728a1 1 0 0 1-1.135-.376ZM11.34 21.676l-2.663 3.329 5.511 1.837 5.92 1.973 2.313-3.303-.135-.047-10.946-3.79Zm27.983 3.329-2.663-3.33-11.081 3.837 2.313 3.303 11.431-3.81Z"
      />
    </Svg>
  );
};
export default SvgRdtResultOutStock;
