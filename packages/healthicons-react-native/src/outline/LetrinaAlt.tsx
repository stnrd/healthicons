import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLetrinaAlt = (passedProps: SvgProps) => {
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
        d="M9 6a3 3 0 0 0-3 3v16h6v3c0 1.5 1.753 2 2.5 2v12H29v-5.06c6.7-.54 12.055-4.733 12.888-11.94.074-.643.112-1.31.112-2H18V9a3 3 0 0 0-3-3H9Zm7 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1h8V9Zm-2 18.848V25h25.873c-.365 2.76-1.486 4.918-3.057 6.502-1.95 1.967-4.727 3.182-7.977 3.445l-.66.053H23.5v2H27v3H16.5V28h-1.996a1.372 1.372 0 0 1-.504-.152ZM16 12H8v11h8V12Z"
        fill="#333"
      />
      <Path
        d="M20 20a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgLetrinaAlt;
