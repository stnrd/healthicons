import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBaby0203M = (
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
        d="M24 17a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM29 22.536c1.702-.247 3.495-.616 5.48-1.107a2 2 0 1 0-.96-3.883c-3.813.943-6.687 1.367-9.513 1.356-2.832-.01-5.713-.458-9.549-1.361a2 2 0 1 0-.917 3.893c1.975.465 3.761.827 5.459 1.075V25h10v-2.464Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.68 31.98c1.75-.78 2.32-2.406 2.32-3.04V27H19v1.94c0 .634.57 2.26 2.32 3.04.2.089.426.2.628.301l.12.06c.248.122.489.238.732.341.507.215.903.318 1.2.318.297 0 .692-.103 1.2-.318.243-.103.484-.219.733-.342l.119-.059m.627-.301c-.2.089-.425.2-.627.301l.627-.301Z"
        fill="#000"
      />
      <path
        d="M20.435 33.856c-1.182-.537-1.976-1.349-2.454-2.157-1.552 1.351-2.406 3.05-2.406 5.29 0 .894.191 2.236.688 3.323.509 1.113 1.192 1.688 2.056 1.688.926 0 1.71-.71 1.71-1.622 0-.406-.171-.79-.443-1.36l-.018-.038c-.246-.516-.572-1.198-.572-1.99 0-.867.43-1.787.93-2.532.161-.24.331-.434.509-.602ZM27.565 33.856c1.182-.537 1.976-1.35 2.454-2.157 1.552 1.35 2.406 3.05 2.406 5.29 0 .894-.191 2.236-.688 3.323C31.228 41.425 30.545 42 29.681 42c-.926 0-1.71-.71-1.71-1.622 0-.406.171-.79.443-1.36l.018-.038c.246-.516.572-1.198.572-1.99 0-.867-.43-1.787-.93-2.532-.161-.24-.331-.434-.509-.602Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBaby0203M);
export default ForwardRef;
