import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDentalHygiene = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        d="M17.092 14.312a1 1 0 0 1 1 1v3.533h3.615a1 1 0 1 1 0 2h-3.615v3.533a1 1 0 1 1-2 0v-3.533h-3.616a1 1 0 1 1 0-2h3.616v-3.533a1 1 0 0 1 1-1Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 36.54 6.038 9.761a3.228 3.228 0 0 1 .765-2.628 3.304 3.304 0 0 1 1.13-.838A3.343 3.343 0 0 1 9.308 6h15.386a3.335 3.335 0 0 1 2.504 1.133 3.228 3.228 0 0 1 .765 2.628L24 36.541V38.5c0 .915-.349 1.801-.982 2.46A3.352 3.352 0 0 1 20.6 42h-7.2c-.915 0-1.784-.38-2.418-1.04A3.554 3.554 0 0 1 10 38.5v-1.96ZM8.756 8.118c.172-.077.36-.118.552-.118h15.385a1.324 1.324 0 0 1 .998.449 1.229 1.229 0 0 1 .294 1.008L22.206 35H11.794L8.016 9.465l-.001-.008a1.228 1.228 0 0 1 .295-1.009c.121-.139.273-.252.446-.33Zm12.82 31.457c.267-.278.424-.664.424-1.075v-1.033H12V38.5c0 .41.157.797.424 1.075.266.277.618.425.976.425h7.2c.358 0 .71-.148.976-.425Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M42 7a1 1 0 1 0-2 0h-6v2h6v2h-6v2h6v2h-6v2h6v1.992l-3.757 4.355A1 1 0 0 0 36 24v17a1 1 0 1 0 2 0V24.372l3.757-4.355a1 1 0 0 0 .243-.653V7Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDentalHygiene);
export default ForwardRef;
