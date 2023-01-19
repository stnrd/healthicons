import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledBackPain = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M33 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.47 9.662a1 1 0 0 0-.94 1.766l3.715 1.974-1.671.7a1 1 0 0 0-.097 1.798l4.937 2.724a1 1 0 0 0 .966-1.75l-3.126-1.726 1.71-.716a1 1 0 0 0 .083-1.805l-5.578-2.965Zm9.709 8.024c1.568-2.567 4.147-4.593 7.821-4.593a2 2 0 0 1 1.939 1.51l1.75 6.918 4.054 1.622a2 2 0 0 1-1.486 3.714l-5-2a2 2 0 0 1-1.196-1.366l-.756-2.992a31.182 31.182 0 0 0-.667 1.77c-.894 2.606-1.564 5.647-1.639 8.668L26 31v11a2 2 0 1 1-4 0v-9.781l-.052-.067a25.525 25.525 0 0 1-1.117-1.545c-.406-.61-.84-1.33-1.18-2.068C19.33 27.843 19 26.934 19 26c0-2.7.65-5.81 2.179-8.314Z"
      />
      <Path
        fill="#333"
        d="M32 30.833a3 3 0 0 1 6 0V43a1 1 0 1 1-2 0V30.833a1 1 0 0 0-2 0v.223a1 1 0 0 1-2 0v-.223ZM9.832 19.978c.11-.56.623-.927 1.145-.819l3.666.76a.968.968 0 0 1 .73.717c.096.368-.007.767-.269 1.036l-.797.82 1.938.503c.515.135.824.693.689 1.248s-.663.896-1.179.762l-3.625-.944a.975.975 0 0 1-.69-.73c-.087-.363.018-.75.273-1.013l.724-.744-1.862-.385c-.521-.108-.854-.65-.743-1.21Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledBackPain);
export default ForwardRef;
