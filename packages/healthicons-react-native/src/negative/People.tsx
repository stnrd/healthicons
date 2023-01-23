import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPeople = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM24 17c0 3.867-3.133 7-7 7s-7-3.133-7-7 3.133-7 7-7 7 3.133 7 7Zm9.5 9c3.039 0 5.5-2.461 5.5-5.5S36.539 15 33.5 15a5.499 5.499 0 0 0-5.5 5.5c0 3.039 2.461 5.5 5.5 5.5ZM17 26c2.734 0 7.183.851 10.101 2.545C28.293 29.758 29 31.081 29 32.4V38H4v-5.6c0-4.256 8.661-6.4 13-6.4Zm27 12H31v-5.6c0-1.416-.511-2.72-1.324-3.883 1.541-.345 3.058-.517 4.217-.517C37.62 28 44 29.787 44 33.333V38Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPeople;
