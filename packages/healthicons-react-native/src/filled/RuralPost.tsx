import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRuralPost = (passedProps: SvgProps) => {
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
        d="M23 12H5v2h18v-2Zm0 4H6v21H5a1 1 0 1 0 0 2h38a1 1 0 1 0 0-2h-1V16h-3v2h1v19h-3V25h-8v12H8V18h15v-2Zm16-2v-2h4v2h-4ZM26 25H11v7h-1v2h17v-2h-1v-7Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 18v-5h2v5H6ZM40 18v-5h2v5h-2ZM35 10h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-3 3v2h2v2h-2v2h-2v-2h-2v-2h2v-2h2Z"
        fill="#333"
      />
      <Path d="M8 14h15v2H8v-2ZM40 14h-1v2h1v-2Z" fill="#333" />
    </Svg>
  );
};
export default SvgRuralPost;
