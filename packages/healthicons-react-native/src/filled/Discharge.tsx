import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDischarge = (passedProps: SvgProps) => {
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
        d="M23 13v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3ZM4.649 20.064a1 1 0 0 0-.585 1.287l2.89 7.709L5.22 36H5a1 1 0 1 0 0 2h38a1 1 0 1 0 0-2h-.22l-1.734-6.94 2.89-7.709a1 1 0 1 0-1.872-.702l-.276.735a1 1 0 0 0-1.737.3L39.28 24H30v2h2v2h-1a1 1 0 0 0-.04 2l-1.714 6H18.754l-1.714-6a1 1 0 0 0-.04-2h-1v-2h2v-2H8.72l-.771-2.316a1 1 0 0 0-1.737-.3l-.276-.735a1 1 0 0 0-1.287-.585ZM34 28h5.307l.75-2H34v2Zm-20-2v2H8.693l-.75-2H14Zm17.326 10h9.393l-1.25-5h-6.715l-1.428 5Zm-16.08-5 1.428 5H7.281l1.25-5h6.715Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDischarge;
