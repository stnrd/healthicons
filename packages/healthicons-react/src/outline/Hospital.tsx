import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospital = (
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
      <path d="M20 20h-4v3h4v-3ZM16 25h4v3h-4v-3ZM20 30h-4v3h4v-3ZM22 20h4v3h-4v-3ZM26 25h-4v3h4v-3ZM22 30h4v3h-4v-3ZM32 20h-4v3h4v-3ZM28 25h4v3h-4v-3ZM32 30h-4v3h4v-3ZM25 15v-3h3v-2h-3V7h-2v3h-3v2h3v3h2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2h8v2h-2v34h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V8h-1V6h7Zm0 5h-4v31h4v-4h-1v-2h16v2h-1v4h4V11h-4v5a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2v-5Zm0-2h-4V8h4v1Zm2-3h10v10H19V6Zm4 36h-4v-4h4v4Zm6 0v-4h-4v4h4Zm6-33V8h-4v1h4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospital);
export default ForwardRef;
