import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPoison = (passedProps: SvgProps) => {
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
        d="M18 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v4a7 7 0 0 0-7 7v20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V21a7 7 0 0 0-7-7v-4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H18Zm4 11v-5h4v5a1 1 0 0 0 1 1h1a5.002 5.002 0 0 1 4.9 4H15.1a5.002 5.002 0 0 1 4.9-4h1a1 1 0 0 0 1-1Zm6.243 15.536-.707-.707-2.122 2.122 2.122 2.121.707-.707 1.414 1.414-2.829 2.829-1.414-1.415.707-.707L24 33.365l-2.12 2.12.706.708-1.414 1.414-.707-.707-1.415-1.414-.707-.707 1.414-1.415.708.708 2.12-2.121-2.12-2.122-.708.707-1.414-1.414.707-.707 1.414-1.414.708-.707 1.414 1.414-.707.707L24 30.537l2.122-2.122-.708-.708 1.414-1.414 2.829 2.828-1.414 1.415Z"
      />
    </Svg>
  );
};
export default SvgPoison;
