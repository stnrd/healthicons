import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContraceptiveDiaphragm = (
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
        d="M38 24.043c0 .38-.015.742-.045 1.087l.01.002c.023.358.035.72.035 1.084 0 1.409-.176 2.547-.483 3.468a1 1 0 0 0 1.898.632c.39-1.17.585-2.53.585-4.1 0-.161-.002-.323-.006-.483C44.406 28.11 47.176 37 24.27 37 1.429 37 3.199 27.669 8.007 25.711a18.76 18.76 0 0 0-.007.505c0 1.31.136 2.47.406 3.498a1 1 0 0 0 1.934-.509c-.218-.83-.34-1.815-.34-2.989 0-.342.01-.681.03-1.017l.02-.004c-.033-.364-.05-.748-.05-1.152C10 16.287 16.268 10 24 10s14 6.287 14 14.043Zm-17.374-6.767a1 1 0 1 0-.576-1.915A8.5 8.5 0 0 0 14 23.428a1 1 0 0 0 2 .017 6.5 6.5 0 0 1 4.626-6.17Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContraceptiveDiaphragm);
export default ForwardRef;
