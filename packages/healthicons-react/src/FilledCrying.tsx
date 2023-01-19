import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledCrying = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        d="M31.424 38.177A15.93 15.93 0 0 1 24 40c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16c0 .167-.003.334-.008.5h2.001c.005-.166.007-.333.007-.5 0-9.941-8.059-18-18-18S6 14.059 6 24s8.059 18 18 18a17.92 17.92 0 0 0 8.379-2.065l-.954-1.758Z"
      />
      <path
        fill="#333"
        d="M13.743 23.35c-.12.738.381 1.445 1.064 1.883.714.457 1.732.707 2.93.53a3.794 3.794 0 0 0 2.654-1.665c.504-.764.711-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.643 1.448a.5.5 0 0 0-.667.39Zm20.076 0c.119.738-.382 1.445-1.065 1.883-.714.457-1.731.707-2.93.53a3.794 3.794 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39ZM40 32a4 4 0 0 1-8 0c0-3.5 4-7 4-7s4 3.5 4 7Zm-19.2 1.6c1.6-2.133 4.8-2.133 6.4 0a1 1 0 0 0 1.6-1.2c-2.4-3.2-7.2-3.2-9.6 0a1 1 0 0 0 1.6 1.2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledCrying);
export default ForwardRef;
