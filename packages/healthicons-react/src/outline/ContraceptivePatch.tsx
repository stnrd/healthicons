import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContraceptivePatch = (
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
        d="M34 8H14a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V14a6 6 0 0 0-6-6ZM14 6a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8H14Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9 16.1H18.1a2 2 0 0 0-2 2v11.8a2 2 0 0 0 2 2h11.8a2 2 0 0 0 2-2V18.1a2 2 0 0 0-2-2Zm-11.8-2a4 4 0 0 0-4 4v11.8a4 4 0 0 0 4 4h11.8a4 4 0 0 0 4-4V18.1a4 4 0 0 0-4-4H18.1Z"
      />
      <path d="M21.3 18.6a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM23.1 21.3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM19.5 21.3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM21.3 24a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM23.1 26.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM19.5 26.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM21.3 29.4a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM24.9 18.6a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM26.7 21.3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM24.9 24a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM26.7 26.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM24.9 29.4a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM28.5 18.6a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM30.3 21.3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM28.5 24a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM30.3 26.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM28.5 29.4a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContraceptivePatch);
export default ForwardRef;
