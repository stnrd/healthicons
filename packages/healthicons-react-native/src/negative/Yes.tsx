import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgYes = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0Zm-4 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-9.33-7.741a1 1 0 0 1 .072 1.412l-12.667 14-.69.761-.742-.709-7.334-7a1 1 0 0 1 1.382-1.446l6.59 6.29L33.258 16.33a1 1 0 0 1 1.413-.07Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgYes;
