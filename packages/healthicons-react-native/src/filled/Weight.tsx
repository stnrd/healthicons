import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWeight = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.21 38.222A4 4 0 0 1 36.216 42H11.784a4 4 0 0 1-3.994-3.778l-1.555-28A4 4 0 0 1 10.228 6h27.544a4 4 0 0 1 3.994 4.222l-1.556 28Zm-5.966-20.443c.82-.54 1.026-1.611.353-2.308a14.425 14.425 0 0 0-3.945-2.882 15.254 15.254 0 0 0-6.558-1.587 15.293 15.293 0 0 0-6.611 1.382 14.508 14.508 0 0 0-4.045 2.756c-.697.676-.53 1.752.271 2.318l4.312 3.046c.8.566 1.928.383 2.757-.145a5.58 5.58 0 0 1 .667-.362 5.775 5.775 0 0 1 2.344-.523l3.393-3.901a1 1 0 0 1 1.51 1.312L26.06 19.91a5.652 5.652 0 0 1 1.016.548c.81.553 1.93.77 2.75.23l4.417-2.91Z"
      />
    </Svg>
  );
};
export default SvgWeight;
