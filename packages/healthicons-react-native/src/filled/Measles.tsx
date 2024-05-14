import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMeasles = (passedProps: SvgProps) => {
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
      <Path d="M14.221 16.372a1 1 0 0 1 1.309-.22l4 2.5a1 1 0 0 1 0 1.696l-4 2.5a1 1 0 0 1-1.219-1.573c.982-.934 1.174-1.422 1.171-1.729-.002-.33-.225-.85-1.198-1.848a1 1 0 0 1-.063-1.326ZM32.47 16.152a1 1 0 0 1 1.246 1.546c-.973.998-1.196 1.518-1.198 1.848-.003.307.189.795 1.171 1.73a1 1 0 0 1-1.219 1.572l-4-2.5a1 1 0 0 1 0-1.696l4-2.5ZM33.258 31c-1.72-3.562-5.22-6-9.258-6-4.038 0-7.538 2.438-9.258 6-.469.97.316 2 1.394 2h15.728c1.078 0 1.863-1.03 1.394-2ZM26 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM38 27.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0-2c8.837 0 16-7.163 16-16 0-4.664-1.996-8.862-5.18-11.787a1.5 1.5 0 1 1-2.359-1.795A15.925 15.925 0 0 0 24 8a15.93 15.93 0 0 0-7.394 1.807 2 2 0 1 1-3.285 2.278A15.96 15.96 0 0 0 8 24c0 1.02.095 2.017.278 2.983a2 2 0 1 1 .795 2.79 16.035 16.035 0 0 0 10.993 9.74A2.003 2.003 0 0 1 22 37a2 2 0 0 1 1.734 2.998L24 40Z"
      />
    </Svg>
  );
};
export default SvgMeasles;
