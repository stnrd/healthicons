import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAmbulatoryClinic = (
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
        d="M14 24v8h8v-8h-8Zm6 6v-4h-4v4h4Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 6a6.002 6.002 0 0 0-5.653 3.985H6v2.481l4 3.03V40H7a1 1 0 1 0 0 2h3v.015h28V42h3a1 1 0 1 0 0-2h-3V15.532l4.5-3.03V9.984H24.653A6.002 6.002 0 0 0 19 6Zm5.659 8A5.99 5.99 0 0 0 25 12v-.015h14.687L36.695 14H24.659Zm-1.187 2A5.985 5.985 0 0 1 19 18a5.985 5.985 0 0 1-4.472-2H12v24h12V24h10v16h2V16H23.472ZM13 12c0 .701.12 1.374.341 2h-2.005l-2.66-2.015H13V12Zm7-1V9h-2v2h-2v2h2v2h2v-2h2v-2h-2Zm12 15v14h-6V26h6Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAmbulatoryClinic);
export default ForwardRef;
