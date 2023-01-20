import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlert = (
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
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h48v48H0V0Zm21 7a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0V7Zm3 31a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlert);
export default ForwardRef;
