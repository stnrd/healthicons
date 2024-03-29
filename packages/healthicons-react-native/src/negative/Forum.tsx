import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgForum = (passedProps: SvgProps) => {
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
      <G clipPath="url(#forum_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm4 18.07C4 12.507 8.508 8 14.07 8h7.86C27.493 8 32 12.508 32 18.07c0 5.56-4.508 10.069-10.07 10.069H16V33S4 30.57 4 18.07ZM30.056 32.11a8.029 8.029 0 0 1-5.579-2.244C29.921 28.692 34 23.85 34 18.056c0-.71-.092-1.4-.265-2.056h2.21A8.056 8.056 0 0 1 44 24.056C44 34.056 33 36 33 36v-3.889h-2.944Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="forum_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgForum;
