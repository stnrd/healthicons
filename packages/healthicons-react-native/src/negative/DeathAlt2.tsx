import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDeathAlt2 = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM16.01 4l16 .013 4.99 13L31.978 44l-16-.017L11 16.992 16.01 4ZM23 17.997V26h2v-8.003h3v-2h-3V13h-2v2.997h-3v2h3Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDeathAlt2;
