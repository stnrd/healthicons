import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGlobe = (passedProps: SvgProps) => {
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
      <G clipPath="url(#globe_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24 42c4.19 0 8.045-1.431 11.103-3.831l-1.048-5.95h-1.278a1.75 1.75 0 0 1-.779-.183 1.781 1.781 0 0 1-.62-.51 1.82 1.82 0 0 1-.326-1.55l.889-3.613c.097-.39.32-.737.632-.983.312-.247.697-.38 1.093-.38H41.5c.14.516.25 1.01.33 1.49.112-.814.17-1.645.17-2.49 0-2.483-.503-4.848-1.412-7h-10.65a1.292 1.292 0 0 1-1.254-.973l-2.646-5.58a1.29 1.29 0 0 1 1.255-1.603h.929l.664-2.173A18.014 18.014 0 0 0 24 6C15.794 6 8.87 11.491 6.704 19h8.446a2.554 2.554 0 0 1 1.578.542c.451.353.773.847.913 1.405l1.283 5.16a2.599 2.599 0 0 1-.469 2.215 2.57 2.57 0 0 1-2.022.991h-1.845l-1.592 8.933A17.922 17.922 0 0 0 24 42Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="globe_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgGlobe;
