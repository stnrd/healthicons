import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledUiPreferences = (
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
      <Path fill="#333" d="M16 32a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 22c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0V22.922c0-.526-.474-.922-1-.922Zm-1-7c0 .552.474 1 1.026 1 .553 0 .974-.448.974-1V7a1 1 0 1 0-2 0v8Zm13 18c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-7.078c0-.526-.474-.922-1-.922Zm-1-7c0 .552.474 1 1.026 1 .553 0 .974-.448.974-1V7a1 1 0 1 0-2 0v19ZM12 38c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-2.078c0-.526-.474-.922-1-.922Zm-1-7c0 .552.474 1 1.026 1 .553 0 .974-.448.974-1V7a1 1 0 1 0-2 0v24Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M28 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm12 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledUiPreferences);
export default ForwardRef;
