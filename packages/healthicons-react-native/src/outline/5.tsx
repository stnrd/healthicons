import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg5 = (passedProps: SvgProps) => {
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
        d="M35 12a3 3 0 0 0-3-3H18a3 3 0 0 0-2.942 2.412l-2 10a3 3 0 0 0 4.606 3.084C18.172 24.158 20.594 23 24 23a5 5 0 0 1 0 10h-2.218c-1.4 0-2.546-.871-2.96-2.019a3 3 0 1 0-5.644 2.038C14.448 36.532 17.842 39 21.782 39H24c6.075 0 11-4.925 11-11s-4.925-11-11-11c-1.456 0-2.807.151-4.018.389L20.459 15H32a3 3 0 0 0 3-3Zm-3-1a1 1 0 1 1 0 2H19.64a1 1 0 0 0-.981.804l-.944 4.72a1 1 0 0 0 1.25 1.159A18.834 18.834 0 0 1 24 19a9 9 0 1 1 0 18h-2.218c-3.093 0-5.738-1.936-6.723-4.66a1 1 0 1 1 1.882-.68c.699 1.937 2.595 3.34 4.84 3.34H24a7 7 0 1 0 0-14c-3.802 0-6.61 1.275-7.445 1.832a1 1 0 0 1-1.536-1.028l2-10A1 1 0 0 1 18 11h14Z"
      />
    </Svg>
  );
};
export default Svg5;
