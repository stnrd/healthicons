import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgG = (
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
        d="M18.26 10.142A15 15 0 0 1 34 12.82a3 3 0 1 1-4 4.472 9 9 0 1 0-1 14.191V27h-5a3 3 0 1 1 0-6h8a3 3 0 0 1 3 3v8.944a3 3 0 0 1-1 2.236 15 15 0 1 1-15.74-25.038Zm8.276 1.108a13 13 0 1 0 6.13 22.44 1 1 0 0 0 .334-.746V24a1 1 0 0 0-1-1h-8a1 1 0 1 0 0 2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-.4.8 11 11 0 1 1 .733-16.999 1 1 0 0 0 1.334-1.49 13 13 0 0 0-6.13-3.061Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgG);
export default ForwardRef;
