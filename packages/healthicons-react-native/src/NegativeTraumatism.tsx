import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeTraumatism = (
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
        d="M0 0h48v48H0V0Zm30 28a3 3 0 1 1 6 0v15a1 1 0 1 1-2 0V28a1 1 0 1 0-2 0v.833a1 1 0 1 1-2 0V28Zm-13-9h1.547l1.622 1.917L22.086 19l3-3 .97-.97c-.34-.02-.693-.03-1.056-.03h-8c-.878 0-1.7.076-2.413.286-.713.21-1.497.607-2.027 1.376-.552.8-.61 1.684-.49 2.405.113.686.4 1.335.709 1.897.617 1.123 1.598 2.378 2.647 3.642.157.188.317.38.48.573l2.84-2.839a77.38 77.38 0 0 1-.242-.29c-1.053-1.267-1.807-2.262-2.22-3.014l-.004-.007c.194-.018.431-.029.72-.029Zm6.553 5.916-2.087-2.467L24.914 19l3-3 .634-.633c2.725.611 4.542 1.92 5.708 3.392a8.547 8.547 0 0 1 1.438 2.695 7.548 7.548 0 0 1 .281 1.22c.005.038.01.07.012.098l.004.035.001.015v.008c.001.002.001.003-1.992.169l1.993-.166a2 2 0 0 1-3.984.359v-.002a3.572 3.572 0 0 0-.125-.52 4.546 4.546 0 0 0-.765-1.43c-.515-.65-1.432-1.446-3.119-1.892V42a2 2 0 0 1-3.993.166l-.965-11.578.042-.035a4 4 0 0 0 .47-5.637Zm-2.67 6.566a3.995 3.995 0 0 1-3.436-1.398L16 28.374V42a2 2 0 0 0 3.993.166l.89-10.684Zm-.839-7.612-2.837 2.837c.575.673 1.165 1.363 1.757 2.073a2 2 0 0 0 3.073-2.56 226.026 226.026 0 0 0-1.86-2.194l-.01-.012-.123-.144Zm-4.423-4.713ZM22 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeTraumatism);
export default ForwardRef;
