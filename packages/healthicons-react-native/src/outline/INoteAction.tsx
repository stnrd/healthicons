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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path d="M26 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1h-6V8h6V7a1 1 0 0 1 1-1Z" />
      <Path d="M16 6a1 1 0 0 0-1 1v1h-2a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h17a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-1v2h1a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2v1a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Z" />
      <Path d="M14 19a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM15 23a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7ZM14 29a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z" />
      <Path d="M13 40a5 5 0 0 1-5-5V10H6v25a7 7 0 0 0 7 7h17v-2H13Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 13a3 3 0 1 1 6 0v20.303l-3 4.5-3-4.5V13Zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1Zm0 22.197 1-1.5V17h-2v15.697l1 1.5Z"
      />
    </Svg>
  );
};
export default SvgINoteAction;
