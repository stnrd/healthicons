import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIExamQualification = (passedProps: SvgProps) => {
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
      <G clipPath="url(#i_exam_qualification_svg__a)" fill="#000">
        <Path d="M15 32a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15ZM14 37a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.923 15.615a1 1 0 0 0-1.846 0l-3.742 8.98a1.036 1.036 0 0 0-.017.042l-1.241 2.978a1 1 0 0 0 1.846.77L16.917 26h6.166l.994 2.385a1 1 0 0 0 1.846-.77l-1.241-2.978a1.036 1.036 0 0 0-.017-.042l-3.742-8.98ZM20 18.6l2.25 5.4h-4.5L20 18.6Z"
        />
        <Path d="M30 21a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1ZM28 7l7 8h-6a1 1 0 0 1-1-1V7Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM28 4H14a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V15L28 4Z"
        />
      </G>
      <Defs>
        <ClipPath id="i_exam_qualification_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgIExamQualification;
