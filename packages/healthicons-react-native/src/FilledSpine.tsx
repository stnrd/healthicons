import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSpine = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M16.206 6.242A1.011 1.011 0 0 0 15 7.229v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966 6.466 1.584 10.322 1.585 16.502.005a.992.992 0 0 0 .744-.962v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V9.887a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987-5.904 1.15-9.684 1.135-15.586-.003ZM19 10a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm-2.794 8.242a1.011 1.011 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966 6.466 1.584 10.322 1.585 16.502.006a.992.992 0 0 0 .744-.963v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987-5.904 1.15-9.684 1.135-15.586-.003ZM19 22a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm-2.794 8.242a1.011 1.011 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966 6.466 1.584 10.322 1.585 16.502.005a.992.992 0 0 0 .744-.962v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987-5.904 1.15-9.684 1.135-15.586-.003ZM19 34a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSpine);
export default ForwardRef;
