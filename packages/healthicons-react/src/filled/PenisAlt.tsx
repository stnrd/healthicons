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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.999 6S5.901 22.06 6.002 25.07C6.147 29.338 10 42 10 42h13v-6.17A3.001 3.001 0 0 1 21 33v-4a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1v-4h2v10a1 1 0 1 0 2 0V23h2v4a1 1 0 0 0 1-1v-1h2v1a3 3 0 0 1-3 3v4a3.001 3.001 0 0 1-2 2.83V42h13s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6H8.999Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPenisAlt);
export default ForwardRef;
