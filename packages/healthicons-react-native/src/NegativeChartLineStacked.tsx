import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeChartLineStacked = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM8 29.387v6.851l8.232-9.878a1 1 0 0 1 1.084-.309l11.353 3.785 9.563-11.476 1.536 1.28-10 12a1 1 0 0 1-1.084.309L17.33 28.164 8 39.362V40h33v2H7a1 1 0 0 1-1-1V7h2v19.413l8.26-9.086a1 1 0 0 1 1.082-.267l10.34 3.76 9.55-11.46 1.536 1.28-10 12a1 1 0 0 1-1.11.3l-10.37-3.771L8 29.387Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeChartLineStacked);
export default ForwardRef;
