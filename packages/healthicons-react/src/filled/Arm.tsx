import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgArm = (
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
        d="M4 37V27h12.523c.98 0 1.958.12 2.91.358L22 28l.156-.25a12 12 0 0 1 6.562-5.082L34 21v-2.097a4 4 0 0 1 .877-2.499L38 12.5l.367.303a2 2 0 0 1 .345 2.719L38 16.5l2-1.5.928-1.857a2 2 0 0 1 2.99-.705L44 12.5l-1 7-5 3-5.047 6.128a12 12 0 0 1-4.806 3.513L26 33l-.828.828A4 4 0 0 1 22.343 35H21l-4.153 1.384a11.999 11.999 0 0 1-3.794.616H4Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgArm);
export default ForwardRef;
