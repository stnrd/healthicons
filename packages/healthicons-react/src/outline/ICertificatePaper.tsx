import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgICertificatePaper = (
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
      <path d="M18 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1ZM15 16a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15ZM14 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM15 24a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 36a4 4 0 0 1-4 4h-3v4l-3-1.5-3 1.5v-4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v28ZM14 6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h11v-2.354a4 4 0 1 1 6 0V38h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H14Zm15 30.874a4.01 4.01 0 0 1-2 0v3.89l1-.5 1 .5v-3.89ZM28 35a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgICertificatePaper);
export default ForwardRef;
