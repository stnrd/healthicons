import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledContactSupport = (
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
        d="M6 20.5C6 12.492 12.492 6 20.5 6h7C35.508 6 42 12.492 42 20.5S35.508 35 27.5 35h-.7v7S6 38.5 6 20.5Zm21.691-8.018c1.03.684 1.807 1.793 1.807 3.28 0 1.578-.637 2.738-1.668 3.448a4.524 4.524 0 0 1-1.33.614v1.532a1.5 1.5 0 1 1-3 0v-2.797a1.5 1.5 0 0 1 1.4-1.497c.554-.037.974-.147 1.228-.322a.699.699 0 0 0 .24-.272c.06-.12.13-.334.13-.707 0-.313-.123-.552-.468-.782-.392-.26-1.022-.452-1.779-.476-.748-.024-1.475.122-2.01.381-.536.26-.732.552-.788.767a1.5 1.5 0 1 1-2.905-.746c.344-1.341 1.348-2.217 2.385-2.72 1.04-.505 2.263-.718 3.414-.681 1.142.036 2.362.324 3.344.978ZM25 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledContactSupport);
export default ForwardRef;
