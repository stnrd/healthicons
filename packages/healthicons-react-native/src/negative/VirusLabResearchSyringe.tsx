import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusLabResearchSyringe = (passedProps: SvgProps) => {
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
      <G clipPath="url(#virus_lab_research_syringe_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6.818 12.864A1.157 1.157 0 1 0 8.455 14.5l.818-.819 4.09 4.09-3.272 3.274a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636 2.076 2.076a10.066 10.066 0 0 1 2.781-.047l-3.443-3.443 5.354-5.354L31.9 26.047l-5.076 5.076a10.051 10.051 0 0 1 .055 3.438l.394.394a5.787 5.787 0 0 0 6.205 1.296l1.158 1.159a2.313 2.313 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.637l-2.674-2.673a2.313 2.313 0 0 0-.6-2.235l-1.158-1.159a5.787 5.787 0 0 0-1.295-6.205l-13.91-13.91 1.637-1.637a1.157 1.157 0 0 0-1.637-1.636l-3.272 3.273-4.09-4.09.817-.818a1.157 1.157 0 1 0-1.636-1.637l-6.546 6.546ZM35.226 35.17a5.855 5.855 0 0 0 .445-.444l.824.824a.314.314 0 1 1-.445.444l-.824-.824Zm-.338-2.922a3.787 3.787 0 0 0-.848-4.062l-.504-.504-5.353 5.354.504.504a3.786 3.786 0 0 0 4.061.847l2.14-2.14Zm-20.11-15.891 2.08-2.081-4.09-4.09-2.08 2.08 4.09 4.09ZM18 37.9a4.972 4.972 0 0 0 1.757-.728l.829.828A1 1 0 0 0 22 39.414L23.414 38A1 1 0 0 0 22 36.586l-.828-.829A4.972 4.972 0 0 0 21.9 34H23a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a4.972 4.972 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 23.414 28L22 26.586A1 1 0 0 0 20.586 28l-.829.828A4.972 4.972 0 0 0 18 28.1V27a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L13.414 28A1 1 0 0 0 12 26.586l-.698.698-.01.009-.008.01-.698.697A1 1 0 0 0 12 29.414l.828.829A4.972 4.972 0 0 0 12.1 32H11a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 10.586 38L12 39.414A1 1 0 0 0 13.414 38l.829-.828A4.972 4.972 0 0 0 16 37.9V39a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="virus_lab_research_syringe_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgVirusLabResearchSyringe;
