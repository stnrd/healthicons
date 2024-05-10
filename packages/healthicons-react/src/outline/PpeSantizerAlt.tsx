import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeSantizerAlt = (
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
        d="M14 6a2 2 0 0 0-2 2v7.1A5.002 5.002 0 0 0 8 20v17a5 5 0 0 0 5 5h12a5.001 5.001 0 0 0 4.584-3h-2.348c-.55.614-1.348 1-2.236 1H13a3 3 0 0 1-3-3v-1h10a1 1 0 1 0 0-2H10v-9h8a1 1 0 1 0 0-2h-8v-3a3 3 0 0 1 3-3h12c.889 0 1.687.386 2.236 1h2.348A5.01 5.01 0 0 0 26 15.1V8a2 2 0 0 0-2-2H14Zm10 2H14v7h10V8Z"
      />
      <path d="M31 24a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.66 33.689A12.122 12.122 0 0 0 30.5 38a12.122 12.122 0 0 0 6.84-4.31A12.35 12.35 0 0 0 40 25.997V22.4c0-.637-.25-1.247-.696-1.697A2.362 2.362 0 0 0 37.627 20H23.374c-.63 0-1.233.253-1.678.703A2.413 2.413 0 0 0 21 22.4v3.598a12.35 12.35 0 0 0 2.66 7.69ZM38 25.999v.004a10.352 10.352 0 0 1-2.228 6.445 10.13 10.13 0 0 1-5.273 3.492 10.13 10.13 0 0 1-5.271-3.492A10.35 10.35 0 0 1 23 26.002V22.4c0-.113.045-.217.117-.29a.361.361 0 0 1 .257-.11h14.252c.092 0 .185.037.257.11a.413.413 0 0 1 .117.29v3.598Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeSantizerAlt);
export default ForwardRef;
