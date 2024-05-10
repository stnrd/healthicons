import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusLabResearchTestTube = (passedProps: SvgProps) => {
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
      <G clipPath="url(#virus_lab_research_test_tube_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM13 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v2.273a1.5 1.5 0 0 1 1 1.415v12.311A9.985 9.985 0 0 0 20 33a9.98 9.98 0 0 0 3.684 7.753A5.002 5.002 0 0 1 14 39V12.687a1.5 1.5 0 0 1 1-1.414V9h-1a1 1 0 0 1-1-1V5Zm4 4v2.688a1.5 1.5 0 0 1-1 1.414V18h6v-4.898a1.5 1.5 0 0 1-1-1.415V9h-4Zm14 28.9a4.972 4.972 0 0 0 1.757-.728l.829.828A1 1 0 0 0 35 39.414L36.414 38A1 1 0 0 0 35 36.586l-.828-.829A4.972 4.972 0 0 0 34.9 34H36a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a4.972 4.972 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 36.414 28L35 26.586A1 1 0 0 0 33.586 28l-.829.828A4.972 4.972 0 0 0 31 28.1V27a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L26.414 28A1 1 0 0 0 25 26.586l-.698.698-.01.009-.008.01-.698.697A1 1 0 0 0 25 29.414l.828.829A4.972 4.972 0 0 0 25.1 32H24a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 23.586 38L25 39.414A1 1 0 0 0 26.414 38l.829-.828A4.972 4.972 0 0 0 29 37.9V39a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1Z"
        />
      </G>
      <Defs>
        <ClipPath id="virus_lab_research_test_tube_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgVirusLabResearchTestTube;
