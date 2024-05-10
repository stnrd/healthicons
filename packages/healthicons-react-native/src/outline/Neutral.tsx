import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNeutral = (passedProps: SvgProps) => {
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
        d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm0 2c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5 20a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM17.5 20a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM16 31a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1Z"
      />
    </Svg>
  );
};
export default SvgNeutral;
