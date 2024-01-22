import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCleaning = (
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
        d="M22.062 25.602 11.33 5.416a1 1 0 1 1 1.766-.939l10.733 20.186 1.522-.81a4 4 0 0 1 5.41 1.655l.648 1.219 6.87 10.054-8.738 4.645-3.027-5.983-1.784.903 3.045 6.02-3.746 1.991-4.495-11.318-.647-1.218a4 4 0 0 1 1.654-5.41l1.522-.809Zm4.227.018-4.81 2.557a2 2 0 0 0-.827 2.705l.647 1.218 8.343-4.436-.648-1.217a2 2 0 0 0-2.705-.827Z"
        fill="#000"
      />
      <path
        d="M17.768 35.36a1 1 0 0 0-1.408-.129h.002l-.011.008-.063.048a5.93 5.93 0 0 1-.274.194c-.248.165-.618.39-1.094.616A9.15 9.15 0 0 1 11 37a1 1 0 1 0 0 2c1.986 0 3.633-.551 4.78-1.097a10.83 10.83 0 0 0 1.344-.758 7.915 7.915 0 0 0 .47-.34l.03-.023.01-.008.003-.004h.002l.001-.002a1 1 0 0 0 .128-1.408ZM19.832 40.445a1 1 0 0 1-.277 1.387l-.002.002-.004.002-.01.006-.031.02a13.039 13.039 0 0 1-.527.318c-.351.201-.85.468-1.45.734C16.351 43.439 14.701 44 13 44a1 1 0 1 1 0-2c1.298 0 2.65-.439 3.719-.914a14.28 14.28 0 0 0 1.618-.85c.039-.023.068-.042.086-.054l.02-.012.002-.002a1 1 0 0 1 1.387.277Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCleaning);
export default ForwardRef;
