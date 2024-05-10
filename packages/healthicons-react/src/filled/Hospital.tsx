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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M16 20h4v3h-4v-3ZM20 25h-4v3h4v-3ZM16 30h4v3h-4v-3ZM26 20h-4v3h4v-3ZM22 25h4v3h-4v-3ZM26 30h-4v3h4v-3ZM28 20h4v3h-4v-3ZM32 25h-4v3h4v-3ZM28 30h4v3h-4v-3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 6a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2h-7v2h2v34H9a1 1 0 1 0 0 2h30a1 1 0 1 0 0-2h-3V8h2V6h-7Zm-2 12a2 2 0 0 0 2-2v-5h3v31h-3v-4h1v-2H16v2h1v4h-3V11h3v5a2 2 0 0 0 2 2h10Zm-6 24h2v-4h-2v4ZM34 8v1h-3V8h3ZM14 9h3V8h-3v1Zm6 1h3V7h2v3h3v2h-3v3h-2v-3h-3v-2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospital);
export default ForwardRef;
