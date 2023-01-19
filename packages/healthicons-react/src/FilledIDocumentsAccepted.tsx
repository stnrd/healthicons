import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledIDocumentsAccepted = (
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
        d="M16 5h13l9 9v23a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm19 9-6-6v5a1 1 0 0 0 1 1h5Zm-2.293 7.293a1 1 0 0 1 0 1.414L24 31.414l-4.707-4.707a1 1 0 0 1 1.414-1.414L24 28.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M12 11h-2v27a5 5 0 0 0 5 5h19v-2H15a3 3 0 0 1-3-3V11Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledIDocumentsAccepted);
export default ForwardRef;
