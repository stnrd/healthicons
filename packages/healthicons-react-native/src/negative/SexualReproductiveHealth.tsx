import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSexualReproductiveHealth = (passedProps: SvgProps) => {
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
        d="M0 0h48v48H0V0Zm17.546 15.48a7 7 0 1 0 4.372 5.454 1 1 0 0 1 1.977-.304A9 9 0 0 1 16 30.944L16 31v2h2a1 1 0 1 1 0 2h-2v4a1 1 0 1 1-2 0v-4h-2a1 1 0 1 1 0-2h2v-2c0-.019 0-.037.002-.055a9.004 9.004 0 0 1-6.024-3.316 9 9 0 0 1 10.295-14.013 1 1 0 1 1-.727 1.863Zm6.86.018a7 7 0 1 1-.177 12.93 1 1 0 1 0-.791 1.837 9 9 0 0 0 11.018-13.306l5.513-5.514-.032 2.542a1 1 0 1 0 2 .026l.076-6.026-6.026.076a1 1 0 1 0 .026 2l2.542-.032-5.401 5.401a8.999 8.999 0 0 0-13.89 1.967 9 9 0 0 0-1.201 5.662 1 1 0 0 0 1.986-.236 7 7 0 0 1 4.357-7.327Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgSexualReproductiveHealth;
