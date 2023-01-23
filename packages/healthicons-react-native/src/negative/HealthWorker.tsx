import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealthWorker = (passedProps: SvgProps) => {
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
        d="M0 0h48v48H0V0Zm17 28.013c.503-.115 2 1.987 2 1.987h10s1.497-2.102 2-1.987c5.404 1.23 11 4.782 11 8.557V42H6v-5.43c0-3.775 5.596-7.327 11-8.557ZM32 34v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2Zm0-18a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHealthWorker;
