import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiSettings = (passedProps: SvgProps) => {
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
        d="M20 6h8v.734c.618 6.866 2.662 8.109 8.898 5.2l.69-.398 4 6.928-.39.225c-5.904 4.1-5.965 6.509-.066 10.583l.457.264-.02.034-3.98 6.894-.762-.44c-6.355-2.906-8.292-1.476-8.8 6L28 41.697V42h-8v-1.166c-.67-6.626-2.82-7.64-9.154-4.62l-.434.25-4-6.928 1.035-.598c5.239-3.782 5.237-6.145-.103-9.935l-.932-.539 4-6.928.223.129c6.47 3.097 8.7 2.166 9.365-4.463V6Zm9 18a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm3 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
      />
    </Svg>
  );
};
export default SvgUiSettings;
