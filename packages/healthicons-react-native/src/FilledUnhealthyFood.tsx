import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledUnhealthyFood = (
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
        d="m12.068 20.147-2.44-9.103 5.602-5.237L17 12.41V8.79l7-2.14v3.893l6.086-2.913-.069 1.01L31.227 4h7.117l-2.769 9.23 1.767-.452-2.147 8.014c.139-.135.28-.271.42-.41a1.293 1.293 0 0 1 2.203 1.071L35.22 42.248A2 2 0 0 1 33.235 44h-18.47a2 2 0 0 1-1.984-1.752l-2.599-20.79a1.297 1.297 0 0 1 1.886-1.31Zm19.523-3.38 2.84-.852-1.96 7.312c-1.114.907-2.177 1.65-3.207 2.227l2.327-8.687Zm-4.794 9.769 1.061-15.623-2.59 1.239-1.006 14.81a9.216 9.216 0 0 0 2.535-.426ZM19 25.544c1.027.554 2.021.947 3 1.177V9.35l-3 .918v15.275Zm-4.214-2.98A31.192 31.192 0 0 0 17 24.294v-4.162L14.161 9.544l-2.29 2.141 2.915 10.879Zm18.528-8.756-2.762.706L32.772 6h2.884l-2.342 7.808Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledUnhealthyFood);
export default ForwardRef;
