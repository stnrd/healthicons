import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgINoteAction = (passedProps: SvgProps) => {
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
        d="M14 19a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM15 23a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7ZM14 29a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM15 8h-2a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h17a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-1v2a1 1 0 1 1-2 0V7a1 1 0 1 0-2 0v1h-6v2a1 1 0 1 1-2 0V7a1 1 0 1 0-2 0v1Zm-7 2v25a5 5 0 0 0 5 5h17v2H13a7 7 0 0 1-7-7V10h2Zm28 3a3 3 0 1 1 6 0v3h-6v-3Zm0 20V18h6v15l-3 4-3-4Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgINoteAction;
