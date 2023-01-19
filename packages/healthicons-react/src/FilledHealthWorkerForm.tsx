import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHealthWorkerForm = (
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
        fillRule="evenodd"
        d="M17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V7Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M18 7h-5a3 3 0 0 0-3 3v31a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3h-5v2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V7Zm-3 14a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm1-6a1 1 0 1 0 0 2h15.5a1 1 0 1 0 0-2H16Zm1 14v2h2v-2h-2Zm-1-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4Zm15 2a3 3 0 1 1-6 0 3 3 0 1 1 6 0Zm-3 4.318c-2.003 0-6 1.066-6 3.182V39h12v-2.5c0-2.116-3.997-3.182-6-3.182Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHealthWorkerForm);
export default ForwardRef;
