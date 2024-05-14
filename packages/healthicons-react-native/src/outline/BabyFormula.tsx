import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyFormula = (passedProps: SvgProps) => {
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
      <Path d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5a1 1 0 0 1 1-1h18.571a1 1 0 0 1 .559.17l7.428 5A1 1 0 0 1 38 10v33a1 1 0 0 1-1 1H18.429a1 1 0 0 1-.559-.17l-7.428-5A1 1 0 0 1 10 38V5Zm2 1.878v2.494a2 2 0 0 0 .168.802l1.985 4.539a1 1 0 0 0 1.67.258l.682-.781A2 2 0 0 0 17 12.873v-2.63l-5-3.365ZM19 11v31h17V11H19Zm14.723-2h-14.99l-4.456-3h14.99l4.456 3ZM36 23a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM17 40.833V16.61a2.964 2.964 0 0 1-2 .702v22.175l2 1.346Zm-4-2.692V16.5h.012a2.997 2.997 0 0 1-.691-.986L12 14.781v22.687l1 .673ZM28 17a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-4 5a1 1 0 0 1 1-1h6v2h-6a1 1 0 0 1-1-1Zm2 3a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1Z"
      />
    </Svg>
  );
};
export default SvgBabyFormula;
