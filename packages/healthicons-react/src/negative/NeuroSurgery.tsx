import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNeuroSurgery = (
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
        d="M48 0H0v48h48V0ZM24.367 8.113A9.606 9.606 0 0 0 24 10.75C24 16.351 28.863 21 35 21c1.003 0 1.972-.125 2.893-.358-6.98-3.459-9.602-6.76-13.526-12.529Zm-1.754-1.09A11.6 11.6 0 0 0 22 10.75C22 17.575 27.882 23 35 23c.964 0 1.904-.099 2.81-.287-.654 3.406-2.925 6.122-5.738 8.225v5.911c-.95 1.933-4.534 3.303-6.628 3.138-2.779 0-4.128-.973-4.748-1.703a3.285 3.285 0 0 1-.202-.261c-.212-.308-.281-.527-.281-.527v-1.304s-.647.212-1.637.418l-.196.04c-3.309.653-9.938 1.094-9.938-5.847 0 0-3.1-.473-3.413-2.192-.314-1.718 2.066-3.859 2.066-3.859.805-1.669.784-3.08.76-4.681-.006-.454-.013-.923-.001-1.418a10.838 10.838 0 0 1 2.027-6.026 13.18 13.18 0 0 1 5.297-3.86 20.808 20.808 0 0 1 7.435-1.744ZM40.133 30v7s3.113-2.336 3.846-7.006c.172-1.092-.742-1.994-1.847-1.994a2 2 0 0 0-2 2Zm3-6.586-2.813 2.813a1.5 1.5 0 0 0 2.812-.727v-2.086Zm0-5v2.172l-3 3v-2.172l3-3Zm0-2.828-3 3V11.5a1.5 1.5 0 0 1 3 0v4.086Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNeuroSurgery);
export default ForwardRef;
