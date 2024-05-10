import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCardiogramE = (passedProps: SvgProps) => {
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
        d="M12 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h3a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V23h8.171l1.47-2.466 1.815 6.661L21.49 22h4.278a1 1 0 1 0 0-2H20.51l-2.177 2.805-2-7.339L13.035 21H6v-9a3 3 0 0 1 3-3h3Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm-4 22a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H12Z"
      />
      <Path d="M36 18a3 3 0 1 1 6 0v3h-6v-3ZM39 42l-3-4V23h6v15l-3 4Z" />
    </Svg>
  );
};
export default SvgCardiogramE;
