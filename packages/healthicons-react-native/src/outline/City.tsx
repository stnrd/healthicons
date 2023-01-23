import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCity = (passedProps: SvgProps) => {
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
        d="M8 43a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22v20h5V22h-5Zm-1-2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-7Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m17 4 16 6v14h-2V11.386l-12-4.5V42h8a1 1 0 0 0 1 1h5v1H17V4Z"
        fill="#333"
      />
      <Path
        d="M20 13h2v2h-2v-2ZM24 13h2v2h-2v-2ZM28 13h2v2h-2v-2ZM20 17h2v2h-2v-2ZM24 17h2v2h-2v-2ZM28 17h2v2h-2v-2ZM20 21h2v2h-2v-2ZM24 21h2v2h-2v-2ZM28 21h2v2h-2v-2ZM20 25h2v2h-2v-2ZM24 25h2v2h-2v-2ZM20 29h2v2h-2v-2ZM24 29h2v2h-2v-2ZM20 33h2v2h-2v-2ZM24 33h2v2h-2v-2ZM20 37h2v2h-2v-2ZM24 37h2v2h-2v-2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 26v16h7V26h-7Zm-1-2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1h-9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 30h-3v-2h3v2ZM34 34h-3v-2h3v2ZM34 38h-3v-2h3v2ZM34 42h-3v-2h3v2ZM15 13v9h-2v-9h2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCity;
