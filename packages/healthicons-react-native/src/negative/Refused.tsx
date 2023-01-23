import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRefused = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM31 25.731V9a2 2 0 1 0-4 0v14h-2V6a2 2 0 1 0-4 0v17h-2V9a2 2 0 1 0-4 0v16.111h-2V15a2 2 0 1 0-4 0v17c0 6.627 5.373 12 12 12h1.422a12 12 0 0 0 10.553-6.287l6.938-12.816a2.552 2.552 0 0 0-4.36-2.642L32.83 26.29c-.552.817-1.829.427-1.829-.56Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgRefused;
