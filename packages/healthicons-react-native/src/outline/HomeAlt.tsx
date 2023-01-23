import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHomeAlt = (passedProps: SvgProps) => {
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
        d="M41.708 23.794 24.058 6.086 6.294 23.792a1 1 0 0 0 1.412 1.416L10 22.922V41a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8.741a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8.74a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V22.908l2.292 2.299a1 1 0 0 0 1.416-1.412ZM36 20.9 24.053 8.914 12 20.928V40h7v-7.741a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v7.74h7V20.9Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHomeAlt;
