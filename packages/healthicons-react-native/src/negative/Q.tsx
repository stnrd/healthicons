import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgQ = (passedProps: SvgProps) => {
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
        d="m29.414 26.586 2.93 2.929A9.954 9.954 0 0 0 34 24c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10c2.038 0 3.934-.61 5.515-1.657l-2.93-2.929a2 2 0 1 1 2.83-2.828Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14c3.145 0 6.047-1.037 8.384-2.787l2.202 2.201a2 2 0 1 0 2.828-2.828l-2.201-2.202A13.938 13.938 0 0 0 38 24c0-7.732-6.268-14-14-14Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgQ;
