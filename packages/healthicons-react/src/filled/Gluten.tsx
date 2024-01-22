import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGluten = (
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
        d="M25 17v1.967a5.993 5.993 0 0 1 3.916-2.584l.084-.016V7h2v10h-.007a6 6 0 0 1-4.91 5.617l-1.083.2v3.645a5.993 5.993 0 0 1 3.4-2.465L32 23v1.22a6 6 0 0 1-4.4 5.783l-2.6.72v3.74a5.993 5.993 0 0 1 3.4-2.466L32 31v1.22a6 6 0 0 1-4.4 5.783l-2.6.72V44h-2v-5.277l-2.6-.72a6 6 0 0 1-4.4-5.782V31l3.6.997a5.993 5.993 0 0 1 3.4 2.465v-3.739l-2.6-.72a6 6 0 0 1-4.4-5.782V23l3.6.997a5.993 5.993 0 0 1 3.4 2.465v-3.646l-1.084-.199A6 6 0 0 1 17 16.716V7h2v9.367l.084.016A5.993 5.993 0 0 1 23 18.967V17l-.464-.465a5 5 0 0 1 0-7.07L23 9V4h2v5l.465.464a5 5 0 0 1 0 7.071L25 17Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGluten);
export default ForwardRef;
