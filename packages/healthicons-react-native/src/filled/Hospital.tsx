import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospital = (passedProps: SvgProps) => {
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
        d="M8 43a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM19 8h-9V6h9v2ZM38 8h-9V6h9v2ZM19 11h-7V9h7v2ZM36 11h-7V9h7v2ZM32 38H16v-2h16v2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 4H19a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-4 3v3h3v2h-3v3h-2v-3h-3v-2h3V7h2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 6v3h3v4h-3v3h-4v-3h-3V9h3V6h4Zm-3 4h-3v2h3v3h2v-3h3v-2h-3V7h-2v3Zm6-5H19a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM19 4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        fill="#333"
      />
      <Path
        d="M16 20h4v3h-4v-3ZM16 25h4v3h-4v-3ZM16 30h4v3h-4v-3ZM22 20h4v3h-4v-3ZM22 25h4v3h-4v-3ZM22 30h4v3h-4v-3ZM28 20h4v3h-4v-3ZM28 25h4v3h-4v-3ZM28 30h4v3h-4v-3Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 42V7h2v35h-2ZM34 42V7h2v35h-2ZM23 36h-6v6h6v-6Zm2 0v6h6v-6h-6Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 42v-4h2v4h-2ZM17 42v-4h2v4h-2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHospital;
