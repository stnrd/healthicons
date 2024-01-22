import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPain = (passedProps: SvgProps) => {
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
        d="M18.714 43.199a1 1 0 0 1-.904-1.087l.803-8.717 4.044 2.14.931-5.594a1 1 0 0 1 1.973.329l-1.386 8.33-3.846-2.034-.527 5.729a1 1 0 0 1-1.088.904ZM4.706 29.753a1 1 0 0 1 .385-1.361l7.943-4.439.549 4.757 5.443-2.54a1 1 0 1 1 .845 1.813l-7.957 3.713-.523-4.533-5.324 2.975a1 1 0 0 1-1.36-.385ZM9.355 9.552a1 1 0 0 1 1.373-.336l7.967 4.835-3.977 2.903 5.068 3.607a1 1 0 1 1-1.16 1.63l-7.329-5.216 3.796-2.77-5.402-3.28a1 1 0 0 1-.336-1.373ZM31.257 5.338a1 1 0 0 1 .81 1.158l-1.502 8.522-3.803-2.433-1.366 5.403a1 1 0 0 1-1.939-.49l2.046-8.094 3.613 2.313.982-5.568a1 1 0 0 1 1.159-.811ZM43.854 19.363a1 1 0 0 1-.395 1.358l-7.616 4.177-.483-4.509-5.098 2.33a1 1 0 0 1-.83-1.82l7.62-3.482.46 4.284 4.985-2.734a1 1 0 0 1 1.357.396ZM38.664 37.489a1 1 0 0 1-1.373.336l-7.519-4.563 3.717-2.713-4.652-3.311a1 1 0 0 1 1.16-1.63l6.912 4.92-3.535 2.58 4.954 3.007a1 1 0 0 1 .336 1.374Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgPain;
