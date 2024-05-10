import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLactose = (
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
        d="M28.393 19h-8.786a1 1 0 0 0-.998.933l-1.4 21A1 1 0 0 0 18.207 42h11.586a1 1 0 0 0 .998-1.066l-1.4-21a1 1 0 0 0-.998-.934Zm-8.786-2a3 3 0 0 0-2.994 2.8l-1.4 21a3 3 0 0 0 2.994 3.2h11.586a3 3 0 0 0 2.994-3.2l-1.4-21a3 3 0 0 0-2.994-2.8h-8.786Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17h10a5 5 0 0 0-10 0Zm5-7a7 7 0 0 0-7 7v.714c0 .71.576 1.286 1.286 1.286h11.428c.71 0 1.286-.576 1.286-1.286V17a7 7 0 0 0-7-7ZM21 22a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V23a1 1 0 0 1 1-1ZM27 22a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V23a1 1 0 0 1 1-1Z"
      />
      <path d="M22 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM25 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM31 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM30 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM27 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM28 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLactose);
export default ForwardRef;
