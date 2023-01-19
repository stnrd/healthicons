import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledTraumatism = (
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
        d="M22 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm4.057 3.03c-.342-.02-.694-.03-1.057-.03h-8c-.878 0-1.7.076-2.413.286-.713.21-1.496.607-2.027 1.376-.552.8-.61 1.684-.49 2.405.113.686.4 1.335.709 1.897.617 1.123 1.598 2.378 2.647 3.642.157.188.317.38.48.573l2.84-2.839a88.578 88.578 0 0 1-.242-.29c-1.053-1.267-1.806-2.262-2.22-3.014l-.004-.007A7.93 7.93 0 0 1 17 19h.893l1.921 2.271 6.243-6.242Zm-6.013 8.84-2.837 2.837c.575.673 1.165 1.363 1.757 2.073a2 2 0 1 0 3.073-2.56 224.646 224.646 0 0 0-1.86-2.194l-.133-.156Z"
      />
      <Path
        fill="#333"
        d="M28.548 15.367c2.725.611 4.542 1.92 5.708 3.392a8.547 8.547 0 0 1 1.438 2.695 7.585 7.585 0 0 1 .282 1.22c.026.198.02.174.016.15a.324.324 0 0 0-.003-.017l.003.017.001.01a2 2 0 0 1-3.984.359v-.002a3.59 3.59 0 0 0-.125-.52 4.548 4.548 0 0 0-.765-1.43c-.515-.65-1.432-1.446-3.119-1.892V42a2 2 0 0 1-3.993.166l-1-12A2.01 2.01 0 0 1 23 30h-.05a3.5 3.5 0 0 0 .222-4.76l-2.061-2.437 7.437-7.436Zm-12.407 12.4a.988.988 0 0 1-.14.1V42a2 2 0 0 0 3.992.166l.933-11.192a3.497 3.497 0 0 1-3.098-1.213l-1.687-1.994Z"
      />
      <Path
        fill="#333"
        d="M33 25a3 3 0 0 0-3 3v.833a1 1 0 1 0 2 0V28a1 1 0 1 1 2 0v15a1 1 0 1 0 2 0V28a3 3 0 0 0-3-3Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledTraumatism);
export default ForwardRef;
