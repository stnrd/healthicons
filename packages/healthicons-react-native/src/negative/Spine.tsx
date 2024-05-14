import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpine = (passedProps: SvgProps) => {
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
      <G clipPath="url(#spine_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM15 7.229c0-.634.583-1.107 1.206-.987 5.902 1.138 9.682 1.152 15.586.003A1.012 1.012 0 0 1 33 7.232v.655a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.848a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.12c0 .452-.305.85-.744.961-6.18 1.58-10.036 1.58-16.502-.005a.993.993 0 0 1-.754-.966v-1.11a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V9.887a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-.658ZM18 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm-1.794 9.242a1.011 1.011 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966 6.466 1.584 10.322 1.585 16.502.006a.992.992 0 0 0 .744-.963v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987-5.904 1.15-9.684 1.135-15.586-.003ZM19 22a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm-4 9.229c0-.634.583-1.107 1.206-.987 5.902 1.138 9.682 1.152 15.586.003a1.012 1.012 0 0 1 1.208.987v.655a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.848a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.12c0 .452-.305.85-.744.962-6.18 1.579-10.036 1.578-16.502-.006a.993.993 0 0 1-.754-.966v-1.11a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1.848a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-.658ZM18 33a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
        />
      </G>
      <Defs>
        <ClipPath id="spine_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgSpine;
