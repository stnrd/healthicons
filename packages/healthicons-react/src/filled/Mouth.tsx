import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMouth = (
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
        d="M4 24c3-5.455 11.2-13.745 20-9.818C33 9.818 41 18.545 44 24c-3 4.364-11.2 12-20 12S7 28.364 4 24Zm5.31-.477C12.414 22.473 18.183 21 24 21c5.747 0 11.45 1.439 14.58 2.486.457.152.431.798-.03.936l-.025.008C35.5 25.34 29.98 27 24 27c-6.08 0-11.683-1.625-14.672-2.573-.448-.142-.463-.754-.019-.904Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMouth);
export default ForwardRef;
