import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpraying = (passedProps: SvgProps) => {
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
        d="M32 10v2h-2v6h-3a2.985 2.985 0 0 1-1.635-.484A6 6 0 1 1 28.658 10H32Zm-12.465 0A3.998 3.998 0 0 1 23 8c1.48 0 2.773.804 3.465 2h-6.93ZM19 12a4 4 0 0 0 5.12 3.841A3.002 3.002 0 0 1 24 15v-3h-5Zm7 3a1 1 0 0 0 1 1h1v-4h-2v3ZM15 21.354A3.99 3.99 0 0 0 12 20h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.054c.257 2.35 1.42 4.28 3.156 5.65 1.957 1.543 4.602 2.35 7.45 2.35 4.188 0 8.086-1.552 9.782-5.052a3 3 0 0 0 3.066-4.594l2.933-1.494-.908-1.782-3.865 1.969L26 28.92V23a3 3 0 0 0-3-3h-5a3.99 3.99 0 0 0-3 1.354ZM8 24a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6Zm6.413 9.19a3.982 3.982 0 0 1-2.344.81c.242 1.698 1.102 3.071 2.38 4.079C15.987 39.293 18.171 40 20.659 40c3.675 0 6.562-1.287 7.875-3.72l-3.903-1.465a6.002 6.002 0 0 1-10.218-1.625Zm8.175.86-.641-.241A3 3 0 0 1 20 31v-5a3 3 0 0 1 4-2.83V23a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2v7a4 4 0 0 0 6.588 3.05ZM24 28.92a2 2 0 0 0 1.298 1.873l6.053 2.27a1 1 0 0 1-.702 1.872l-8-3A1 1 0 0 1 22 31v-5a1 1 0 1 1 2 0v2.921Z"
      />
      <Path d="m40.152 24.47 1.696 1.06L40.304 28H42v2h-5.304l3.456-5.53Z" />
    </Svg>
  );
};
export default SvgSpraying;
