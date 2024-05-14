import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDomesticWorkerAlt = (passedProps: SvgProps) => {
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
      <Path d="M13 9.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.449 16.05A2.006 2.006 0 0 0 29 16h-9v12h-7V16h-1a6 6 0 0 0-1 11.917V40a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V20h7c.477 0 .914-.166 1.258-.445l1.998 8.655a4 4 0 0 0-2.998 4.797l1.05 8.994 2.824-.652-1.03-4.914 1.958-.41 1.021 4.874 6.92-1.597-2.999-8.544a4 4 0 0 0-4.797-2.998L30.38 11.196a1 1 0 0 0-1.95.45l1.018 4.405ZM9 22a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2Zm25.655 7.709-1.95.45a2 2 0 0 0-1.498 2.398l5.846-1.35a2 2 0 0 0-2.398-1.498Z"
      />
      <Path d="M18 16v3h-3v-3h3Z" />
    </Svg>
  );
};
export default SvgDomesticWorkerAlt;
