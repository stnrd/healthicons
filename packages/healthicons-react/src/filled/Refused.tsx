import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRefused = (
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
      <path d="M31 9v16.731c0 .987 1.277 1.377 1.829.56l2.724-4.036a2.552 2.552 0 0 1 4.36 2.642l-6.938 12.816A12 12 0 0 1 22.422 44H21c-6.627 0-12-5.373-12-12V15a2 2 0 1 1 4 0v10.111h2V9a2 2 0 1 1 4 0v14h2V6a2 2 0 1 1 4 0v17h2V9a2 2 0 1 1 4 0Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRefused);
export default ForwardRef;
