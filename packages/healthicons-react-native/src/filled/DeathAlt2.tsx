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
        d="M32.01 4.013 16.01 4 11 16.992l4.978 26.99 16 .018L37 17.013l-4.99-13ZM23 26v-8.003L20 18l-.002-2L23 15.998V13h2v2.996l2.998-.003.002 2-3 .003V26h-2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgDeathAlt2;
