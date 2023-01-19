import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledVih = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14.832 13.419A13.94 13.94 0 0 1 23 10.035V12a1 1 0 0 0 2 0v-1.965a13.94 13.94 0 0 1 8.167 3.383l-1.39 1.39a1 1 0 0 0 1.415 1.414l1.39-1.39A13.941 13.941 0 0 1 37.964 23H36a1 1 0 0 0 0 2h1.965a13.941 13.941 0 0 1-3.384 8.167l-1.389-1.389a1 1 0 0 0-1.414 1.414l1.389 1.39A13.94 13.94 0 0 1 25 37.964V36a1 1 0 1 0-2 0v1.965a13.94 13.94 0 0 1-8.167-3.383l1.389-1.39a1 1 0 0 0-1.415-1.413l-1.389 1.388A13.941 13.941 0 0 1 10.035 25H12a1 1 0 1 0 0-2h-1.965a13.94 13.94 0 0 1 3.383-8.167l1.39 1.39a1 1 0 0 0 1.414-1.415l-1.39-1.39ZM17.5 21.5a1 1 0 0 0-2 0v5a1 1 0 1 0 2 0V25h1v1.5a1 1 0 1 0 2 0v-5a1 1 0 0 0-2 0V23h-1v-1.5Zm4 0a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H25v3h.5a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2h.5v-3h-.5a1 1 0 0 1-1-1Zm9.928 5.371a1 1 0 0 1-1.857 0l-2-5a1 1 0 0 1 1.857-.742l1.072 2.678 1.071-2.678a1 1 0 1 1 1.857.742l-2 5ZM21 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-1v2a1 1 0 0 1-2 0V6h-1a1 1 0 0 1-1-1Zm3 34a1 1 0 0 1 1 1v2h1a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2h1v-2a1 1 0 0 1 1-1Zm-11.314.557a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414l.707.707 1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414.707.707a1 1 0 0 1 0 1.415Zm21.92-26.163a1 1 0 0 1 0-1.414l1.415-1.415-.708-.707a1 1 0 1 1 1.415-1.414l2.828 2.828a1 1 0 0 1-1.414 1.415l-.707-.707-1.414 1.414a1 1 0 0 1-1.415 0ZM5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1Zm34-3a1 1 0 0 1 1-1h2v-1a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0v-1h-2a1 1 0 0 1-1-1ZM8.443 12.687a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 1 1 1.414 1.414l-.707.707 1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415-.707.708a1 1 0 0 1-1.415 0Zm26.163 21.92a1 1 0 0 1 1.415 0l1.414 1.414.707-.707a1 1 0 0 1 1.414 1.414l-2.828 2.829a1 1 0 0 1-1.415-1.415l.708-.707-1.415-1.414a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledVih);
export default ForwardRef;
