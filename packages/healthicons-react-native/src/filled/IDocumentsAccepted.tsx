import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIDocumentsAccepted = (passedProps: SvgProps) => {
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
        d="M16 5h13l9 9v23a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm19 9-6-6v5a1 1 0 0 0 1 1h5Zm-2.293 7.293a1 1 0 0 1 0 1.414L24 31.414l-4.707-4.707a1 1 0 0 1 1.414-1.414L24 28.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
      />
      <Path d="M12 11h-2v27a5 5 0 0 0 5 5h19v-2H15a3 3 0 0 1-3-3V11Z" />
    </Svg>
  );
};
export default SvgIDocumentsAccepted;
