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
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 10a1 1 0 1 0 0 2v7h-3v-7a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2v7h-3v-7a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2v7H7v-3H5v3H4v2h1v13H4v2h1v2h2v-2h34v2h2v-2h1v-2h-1V21h1v-2h-1v-3h-2v3h-2v-7a1 1 0 1 0 0-2h-8Zm6 9v-7h-4v7h4Zm-4 2h4v5h-4v-5Zm-2 0v8a4 4 0 0 0 8 0v-8h2v13H7V21h2v8a4 4 0 0 0 8 0v-8h3v8a4 4 0 0 0 8 0v-8h3Zm-5-2v-7h-4v7h4Zm-11 0v-7h-4v7h4Zm-4 2h4v2h-4v-2Z"
      />
    </Svg>
  );
};
export default SvgTestTubes;
