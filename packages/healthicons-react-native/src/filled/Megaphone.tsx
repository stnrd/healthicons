import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMegaphone = (passedProps: SvgProps) => {
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
        d="M12 31v7a2 2 0 1 0 4 0v-7h-4ZM7 26v-6a3 3 0 0 1 3-3h6v12h-6a3 3 0 0 1-3-3ZM34 23v-1a3 3 0 0 0-3-3v7a3 3 0 0 0 3-3ZM18 30V15l9.463-6.022A1 1 0 0 1 29 9.822v25.356a1 1 0 0 1-1.537.844L18 30Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.832 17.445a1 1 0 0 1-.277 1.387l-3 2a1 1 0 1 1-1.11-1.664l3-2a1 1 0 0 1 1.387.277ZM36 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm.168 3.445a1 1 0 0 1 1.387-.277l3 2a1 1 0 0 1-1.11 1.664l-3-2a1 1 0 0 1-.277-1.387Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgMegaphone;
