import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeRuralPost = (
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
      <path fill="#333" d="M32 12h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm23 11H5v2h1v23H5a1 1 0 1 0 0 2h38a1 1 0 1 0 0-2h-1V13h1v-2h-4v6h1v19h-3V24h-8v12H8V17h15v-6Zm3 13H11v7h-1v2h17v-2h-1v-7Zm1-15h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeRuralPost);
export default ForwardRef;
