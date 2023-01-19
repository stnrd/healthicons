import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilled7 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M14 12a2 2 0 0 1 2-2h16a2 2 0 0 1 1.515 3.305c-1.76 2.044-4.362 5.723-6.678 9.977-2.327 4.272-4.267 8.946-4.858 13.006a2 2 0 0 1-3.958-.576c.69-4.74 2.882-9.899 5.302-14.344a73.401 73.401 0 0 1 4.6-7.368H16a2 2 0 0 1-2-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilled7);
export default ForwardRef;
