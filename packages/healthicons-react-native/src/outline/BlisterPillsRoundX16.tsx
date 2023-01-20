import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsRoundX16 = (
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
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        d="M12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V8Z"
        fill="#333"
      />
      <Path
        d="M15 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM19 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM23 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM27 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM31 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM35 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBlisterPillsRoundX16);
export default ForwardRef;
