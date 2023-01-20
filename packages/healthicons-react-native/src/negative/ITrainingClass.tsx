import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgITrainingClass = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM7 6H6v27h23.387v-2H8V8h27v3h2V6H7Zm32 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.03 6.496c-.672-.902-1.7-1.485-2.999-1.485H32.031a1.72 1.72 0 0 0-.926.283c-.155.1-.284.212-.376.298a6.286 6.286 0 0 0-.543.602c-.343.423-.729.964-1.08 1.475-.336.49-.655.978-.898 1.354h-4.177a1.5 1.5 0 0 0 0 3h5c.518 0 1-.267 1.274-.707v-.002l.006-.007.02-.032.077-.123a61.361 61.361 0 0 1 .592-.92V40.5a1.5 1.5 0 0 0 2.974.276L35.432 33h.297l1.291 7.747A1.5 1.5 0 0 0 40 40.5v-9.842c.782-.617 1.288-1.517 1.59-2.388.316-.914.457-1.94.396-2.92-.06-.964-.326-2.01-.956-2.854Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgITrainingClass);
export default ForwardRef;
