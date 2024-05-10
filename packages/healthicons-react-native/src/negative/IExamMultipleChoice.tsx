import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIExamMultipleChoice = (passedProps: SvgProps) => {
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
      <G clipPath="url(#i_exam_multiple_choice_svg__a)" fill="#000">
        <Path d="M21 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8ZM20 19a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1ZM21 27a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8ZM20 32a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 26h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Zm-4 5v-3h3v3h-3Z"
        />
        <Path d="M17.707 14.293a1 1 0 0 1 0 1.414L13 20.414l-2.707-2.707a1 1 0 1 1 1.414-1.414L13 17.586l3.293-3.293a1 1 0 0 1 1.414 0Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm39 13a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3Zm-3 7v16.5l3 4.5 3-4.5V20h-6ZM6 39V9a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z"
        />
      </G>
      <Defs>
        <ClipPath id="i_exam_multiple_choice_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgIExamMultipleChoice;
