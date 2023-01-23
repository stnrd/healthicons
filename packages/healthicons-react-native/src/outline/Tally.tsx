import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTally = (passedProps: SvgProps) => {
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
        d="M42.157 24c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18 18 8.059 18 18Zm2 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20ZM17 14a1 1 0 0 0-1 1v.723l-2.468-2.107-1.299 1.522L16 18.353V33a1 1 0 1 0 2 0V20.06l3 2.56V33a1 1 0 1 0 2 0v-8.673l3 2.56V33a1 1 0 1 0 2 0v-4.405l3 2.56V33a1 1 0 1 0 2 0v-.138l1.82 1.554 1.3-1.52L33 30.232V15a1 1 0 1 0-2 0v13.526l-3-2.56V15a1 1 0 1 0-2 0v9.258l-3-2.56V15a1 1 0 1 0-2 0v4.99l-3-2.56V15a1 1 0 0 0-1-1Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgTally;
