import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIDocumentsDenied = (passedProps: SvgProps) => {
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
      <G clipPath="url(#i-documents-denied_svg__a)" fill="#000">
        <Path d="m29 8 6 6h-5a1 1 0 0 1-1-1V8ZM22.707 20.293a1 1 0 0 0-1.414 1.414L24.586 25l-3.293 3.293a1 1 0 0 0 1.414 1.414L26 26.414l3.293 3.293a1 1 0 0 0 1.414-1.414L27.414 25l3.293-3.293a1 1 0 0 0-1.414-1.414L26 23.586l-3.293-3.293Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm29 5H16a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14l-9-9Zm-17 6h-2v27a5 5 0 0 0 5 5h19v-2H15a3 3 0 0 1-3-3V11Z"
        />
      </G>
      <Defs>
        <ClipPath id="i-documents-denied_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgIDocumentsDenied;
