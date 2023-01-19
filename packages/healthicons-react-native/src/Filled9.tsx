import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilled9 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M22.032 34a4.033 4.033 0 0 1-3.804-2.67 2 2 0 1 0-3.77 1.34A8.032 8.032 0 0 0 22.033 38h3.936C30.394 38 34 34.428 34 30V18c0-4.428-3.606-8-8.032-8h-3.936C17.606 10 14 13.572 14 18s3.606 8 8.032 8h3.936A8.022 8.022 0 0 0 30 24.92V30c0 2.2-1.795 4-4.032 4h-3.936ZM30 18c0 2.2-1.795 4-4.032 4h-3.936C19.795 22 18 20.2 18 18s1.795-4 4.032-4h3.936C28.205 14 30 15.8 30 18Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilled9);
export default ForwardRef;
