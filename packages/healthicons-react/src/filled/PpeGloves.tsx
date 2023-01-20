import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeGloves = (
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
        d="M24 6.5a1.5 1.5 0 0 1 3 0V19h1V8.5a1.5 1.5 0 0 1 3 0V24l2.923-3.653a1.881 1.881 0 0 1 3.034 2.218l-4.25 6.374a9.116 9.116 0 0 1-3.616 3.15L30 43H18l.905-10.859A5.997 5.997 0 0 1 16 27V10.5a1.5 1.5 0 0 1 3 0V19h1V8.5a1.5 1.5 0 0 1 3 0V19h1V6.5ZM12 12h2v16c0 1.85 1.092 3.784 2.517 4.644l.544.328L16.216 41h-2.011l.738-7.011C13.181 32.647 12 30.286 12 28V12Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeGloves);
export default ForwardRef;
