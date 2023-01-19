import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeTemple = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M13 36.048v6h2v-6h-2Zm6 6h-2v-6h14v6h-2v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2Zm14 0v-6h2v6h-2Zm-6-24h2v-4H19v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1Zm-10 7v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-4H17Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM17 14.048s-3 .286-3-3.286c4 4.286 10-6.714 10-6.714s6 11 10 6.714c0 3.572-3 3.286-3 3.286v4.632c.962 1.649 3.728 5.781 6 3.257 0 3.11-2.8 3.11-2.8 3.11H33v4.948c.94 1.797 3.251 5.317 6 2.942 0 1.67-1.038 2.444-2 2.802v8.309H11v-8.309c-.961-.358-2-1.131-2-2.802 3.6 3.11 6-3.89 6-3.89v-4h-1.2s-2.8 0-2.8-3.11c2.8 3.11 6-3.89 6-3.89v-4Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeTemple);
export default ForwardRef;
