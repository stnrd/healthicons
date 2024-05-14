import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWashHands = (passedProps: SvgProps) => {
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
      <Path d="M6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V30.001ZM20.915 29.189s-2.278-.425-3.21 0c-.694.316-3.38 1.28-4.705 1.752v8.86c.767-.044 2.293-.125 2.945-.099 3.756.151 5.673 1.734 9.422 2.018 2.097.159 3.934.53 5.384 0 1.45-.531 9.732-4.566 10.767-5.628 1.036-1.062.518-3.93-2.692-3.399-3.21.531-7.454 3.08-9.214 2.974-1.76-.106-6.42-.956-6.42-.956l5.35.065s.756.04 1.794-.702c1.04-.742 1.968-2.867.415-2.867s-3.21-.532-3.21-.532l-6.626-1.486ZM26 20.429c0 2-1.54 3.571-3.5 3.571S19 22.429 19 20.429 22.5 14 22.5 14s3.5 4.571 3.5 6.429ZM41 16.132C41 18.836 38.778 21 36 21s-5-2.163-5-4.868C31 13.428 36 6 36 6s5 7.428 5 10.132Z" />
    </Svg>
  );
};
export default SvgWashHands;
