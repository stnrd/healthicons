import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCreditCard = (passedProps: SvgProps) => {
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
        d="M7 10a3 3 0 0 0-3 3v4h40v-4a3 3 0 0 0-3-3H7Zm37 13H4v12a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V23Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgCreditCard;
