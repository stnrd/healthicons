import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExercise = (passedProps: SvgProps) => {
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
        d="M32 14h4v20h-4v-9H16v9h-4V14h4v9h16v-9ZM6 23v-6h4v14H6v-6H4v-2h2Zm38 2h-2v6h-4V17h4v6h2v2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgExercise;
