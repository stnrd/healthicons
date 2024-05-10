import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPills3 = (
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
        d="m10.536 32.364.707-.707-.707.707 5.1 5.1a2 2 0 1 0 2.828-2.828l-5.1-5.1a2 2 0 0 0-2.828 0l.707.707-.707-.707a2 2 0 0 0 0 2.828Zm28.147-3-.924.381.924-.38a2 2 0 0 0-2.61-1.088l-6.67 2.748a2 2 0 1 0 1.525 3.698l6.668-2.748a2 2 0 0 0 1.087-2.61ZM31.5 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-5.206-3.427a2 2 0 0 0-3.986-.333l-.602 7.187a2 2 0 1 0 3.986.334l.602-7.188ZM22 33.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm19-2a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
        stroke="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPills3);
export default ForwardRef;
