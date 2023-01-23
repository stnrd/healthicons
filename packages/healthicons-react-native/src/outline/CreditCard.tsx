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
        d="M7 38a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H7ZM6 13a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v3H6v-3Zm1 23a1 1 0 0 1-1-1V24h36v11a1 1 0 0 1-1 1H7Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCreditCard;
