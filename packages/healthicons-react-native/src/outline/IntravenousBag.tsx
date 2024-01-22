import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntravenousBag = (passedProps: SvgProps) => {
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
      <Path d="M24 11.952a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.992 38H15v2h2a2 2 0 0 0 2 1.952h2A2 2 0 0 0 23 40h3.991v4h2v-4H33v-2h.992a4 4 0 0 0 4-4V10.114a4 4 0 0 0-4-4h-6L26.858 4.95a4 4 0 0 0-5.736 0l-1.132 1.164h-6a4 4 0 0 0-4 4V34a4 4 0 0 0 4 4Zm14-29.886a2 2 0 0 1-1.434-.606l-1.133-1.164a2 2 0 0 0-2.867 0l-1.133 1.164a2 2 0 0 1-1.434.606h-6a2 2 0 0 0-2 2v18.857a68.88 68.88 0 0 1 3.7.06l.531.02c.32.012.637.024.948.034.933.032 1.825.053 2.703.035 2.627-.056 5.042-.466 7.61-1.981 3.119-1.84 5.759-1.288 7.583-.226.339.197.648.41.925.626v-4.087H32v-2h3.992v-3H32v-2h3.992v-3H32v-2h3.992v-1.338a2 2 0 0 0-2-2h-6ZM13.991 36a2 2 0 0 1-2-2v-3.029a66.437 66.437 0 0 1 3.626.058l.526.02c1.277.049 2.537.096 3.772.07 2.841-.06 5.627-.513 8.584-2.258 2.406-1.42 4.266-.972 5.56-.22a7 7 0 0 1 1.931 1.689V34a2 2 0 0 1-2 2h-20Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgIntravenousBag;
