import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpreadsheets = (passedProps: SvgProps) => {
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
        d="M14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V19Zm2 6v3h4v-3h-4Zm0 8v-3h4v3h-4Zm6 0v-3h4v3h-4Zm6 0v-3h4v3h-4Zm0-8v3h4v-3h-4Zm-6 3h4v-3h-4v3Zm-6-5h16v-3H16v3Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5a1 1 0 0 1 1-1h20a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 38 11v32a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V5Zm2 1v36h24V12h-5a1 1 0 0 1-1-1V6H12Zm20 1.414V10h2.586L32 7.414Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgSpreadsheets;
