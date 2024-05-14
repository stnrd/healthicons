import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealthWorkerForm = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path d="M17 31v-2h2v2h-2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4a3 3 0 0 0-3 3h-4a3 3 0 0 0-3 3v31a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3-3h-8Zm-1 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V7Zm-3 13a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7Zm-1-4a1 1 0 0 1 1-1h15.5a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1Zm0 12a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Zm13 4a3 3 0 1 0 0-6 3 3 0 1 0 0 6Zm-6 4.5c0-2.116 3.997-3.182 6-3.182s6 1.066 6 3.182V39H22v-2.5Z"
      />
    </Svg>
  );
};
export default SvgHealthWorkerForm;
