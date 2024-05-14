import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPenisAlt = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.999 6h2S7.881 21.506 8 25.004C8.148 29.402 12 42 12 42h-2S6.147 29.339 6.002 25.07C5.901 22.06 9 6 9 6ZM39.001 6h-2s3.118 15.506 3 19.004C39.852 29.402 36 42 36 42h2s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6ZM23 23v10a1 1 0 1 0 2 0V23h2v10a3 3 0 1 1-6 0V23h2ZM20 25v1a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3v-1h2ZM28 26v-1h2v1a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1Z"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 42v-7h2v7h-2Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPenisAlt);
export default ForwardRef;
