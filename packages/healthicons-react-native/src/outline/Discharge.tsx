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
        d="M4 37a1 1 0 0 1 1-1h38a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.649 20.064a1 1 0 0 0-.585 1.287l2.89 7.709-1.924 7.698a1 1 0 1 0 1.94.484l2-8a1 1 0 0 0-.034-.593l-3-8a1 1 0 0 0-1.287-.585ZM43.351 20.064a1 1 0 0 1 .585 1.287l-2.89 7.709 1.924 7.698a1 1 0 1 1-1.94.484l-2-8a1 1 0 0 1 .034-.593l3-8a1 1 0 0 1 1.287-.585Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.962 29.725A1 1 0 0 0 16 29H8a1 1 0 1 0 0 2h7.246l1.792 6.275a1 1 0 1 0 1.924-.55l-2-7ZM31.038 29.725A1 1 0 0 1 32 29h8a1 1 0 1 1 0 2h-7.246l-1.792 6.275a1 1 0 0 1-1.924-.55l2-7ZM18 27H7v-2h11v2ZM30 27h11v-2H30v2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 30a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1ZM30 30a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-9a1 1 0 0 0-1 1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 25a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1ZM33 25a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM23 18v-8h2v8h-2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13h8v2h-8v-2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDischarge;
