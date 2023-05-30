import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgQuestion = (passedProps: SvgProps) => {
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
      <G clipPath="url(#question_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM33.495 7.645c2.473 2.11 4.005 5.226 4.005 9.2 0 4.662-2.522 7.765-5.438 9.626-1.96 1.25-4.151 1.99-6.062 2.378v2.15a2.5 2.5 0 1 1-5 0v-4.321a2.5 2.5 0 0 1 2.326-2.494c1.658-.116 4.1-.687 6.046-1.928 1.856-1.185 3.128-2.862 3.128-5.411 0-2.581-.943-4.28-2.25-5.397-1.372-1.17-3.337-1.853-5.523-1.939-4.628-.181-8.565 2.193-9.287 5.423a2.5 2.5 0 1 1-4.88-1.091c1.478-6.603 8.54-9.556 14.363-9.328 3.039.12 6.162 1.075 8.572 3.132ZM20 40a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="question_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgQuestion;
