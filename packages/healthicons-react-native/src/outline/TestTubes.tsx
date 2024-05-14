import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTestTubes = (passedProps: SvgProps) => {
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
      <Path d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 11a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2v7h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h2v-3h2v3h1v2h-1v13h1v2h-1v2h-2v-2H7v2H5v-2H4v-2h1V21H4v-2h1v-3h2v3h2v-7a1 1 0 0 1-1-1ZM7 34h34V21h-2v8a4 4 0 0 1-8 0v-8h-3v8a4 4 0 0 1-8 0v-8h-3v8a4 4 0 0 1-8 0v-8H7v13Zm8-22v7h-4v-7h4Zm11 7h-4v-7h4v7Zm11 0h-4v-7h4v7ZM11 29v-8h4v8a2 2 0 1 1-4 0Zm11 0v-8h4v8a2 2 0 1 1-4 0Zm11 0v-8h4v8a2 2 0 1 1-4 0Z"
      />
    </Svg>
  );
};
export default SvgTestTubes;
