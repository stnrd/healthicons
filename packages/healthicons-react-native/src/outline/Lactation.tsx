import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLactation = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM26.742 34.33l-5.19-1.573v-3.258a1 1 0 1 0-2 0v4a1 1 0 0 0 .646.934l1.753.666-1.53 1.085c-.12.085-.218.196-.29.322l1.418 1.891a3.5 3.5 0 1 1-5.6 4.2L10.7 35.6a3.5 3.5 0 0 1-.299-3.727l3.967-7.555a4.5 4.5 0 0 1 3.278-2.353l12.104-1.92a3.5 3.5 0 0 1 3.648 1.83l4.2 7.998a3.5 3.5 0 0 1-.3 3.727l-5.25 6.999a3.5 3.5 0 1 1-5.6-4.2l1.227-1.636a1.01 1.01 0 0 0-.319-.196l-.614-.236Zm4.487-.645-1.225 1.304v.001l-1.955 2.608a1.5 1.5 0 0 0 2.4 1.8l5.25-7a1.5 1.5 0 0 0 .128-1.596l-4.2-8a1.5 1.5 0 0 0-1.563-.783l-12.104 1.92a2.5 2.5 0 0 0-1.822 1.308L12.172 32.8A1.5 1.5 0 0 0 12.3 34.4l5.25 6.998a1.5 1.5 0 1 0 2.4-1.8l-1.98-2.638.002-.009-1.77-2.348 1.352-1.02-.001-.083v-4a3 3 0 0 1 6 0v1.774l2.157.654a4.5 4.5 0 1 1 5.498 1.737l.021.02ZM27 29.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgLactation;
