import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSquareMedium = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        d="M9 10a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V10Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSquareMedium);
export default ForwardRef;
