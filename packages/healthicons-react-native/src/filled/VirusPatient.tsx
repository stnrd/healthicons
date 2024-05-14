import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusPatient = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 11c0 3.867-3.133 7-7 7s-7-3.133-7-7 3.133-7 7-7 7 3.133 7 7ZM4 25.4c0-4.256 8.661-6.4 13-6.4 2.696 0 7.06.828 9.98 2.475A13.013 13.013 0 0 0 20.152 31H4v-5.6ZM30 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v2.07a6.965 6.965 0 0 1 3.192 1.324L38.586 26l-.293-.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-1.414 1.414L40 27.414l-1.394 1.394A6.965 6.965 0 0 1 39.93 32H42v-1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-1h-2.07a6.956 6.956 0 0 1-.922 2.594L41 38.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293-1.848-1.847A6.975 6.975 0 0 1 34 39.929V42h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-2.07a6.965 6.965 0 0 1-3.192-1.324L27.414 40l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 1.414-1.414l.293.293 1.394-1.394A6.965 6.965 0 0 1 26.07 34H24v1a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v1h2.07a6.965 6.965 0 0 1 1.324-3.192L26 27.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 1.414l-.293.293 1.394 1.394A6.965 6.965 0 0 1 32 26.07V24h-1a1 1 0 0 1-1-1Z"
      />
    </Svg>
  );
};
export default SvgVirusPatient;
