import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHome = (
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
      <path d="M24.507 10.138a1 1 0 0 0-1.014 0L5.631 20.645l1.014 1.724L24 12.16 41.355 22.37l1.014-1.724L36 16.9V12a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.957l-6.493-3.819ZM14 25h11v6H14v-6Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m24 14-14 8v14H5a1 1 0 1 0 0 2h36a1 1 0 1 0 0-2h-3V22l-14-8Zm0 2.303-12 6.858V36h16V25h6v11h2V23.16l-12-6.857Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;
