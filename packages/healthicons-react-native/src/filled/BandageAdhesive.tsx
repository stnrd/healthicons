import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBandageAdhesive = (passedProps: SvgProps) => {
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
        d="M38.85 9.15a8 8 0 0 0-11.315 0L9.151 27.537a8 8 0 1 0 11.314 11.313l18.384-18.384a8 8 0 0 0 0-11.314Zm-12.022 7.778a2 2 0 0 0-2.828 0L16.929 24a2 2 0 0 0 0 2.828l4.243 4.243a2 2 0 0 0 2.828 0l7.071-7.072a2 2 0 0 0 0-2.828l-4.243-4.242Zm-1.414 1.415 4.243 4.242-7.071 7.071-4.243-4.242 7.071-7.071Zm7.707-2.222a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm-.414-4a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414Zm-2.586 1a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm4.586 6a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414Zm2.414-4a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm-21 16.586a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414Zm-1 4a1 1 0 1 1-1.413 1.414 1 1 0 0 1 1.413-1.414Zm4-1a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414Zm-7.414-6a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414Zm.414 4a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414Z"
      />
    </Svg>
  );
};
export default SvgBandageAdhesive;
