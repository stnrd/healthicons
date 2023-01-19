import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledIDocumentsDenied = (
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
        d="M16 5h13l9 9v23a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm19 9-6-6v5a1 1 0 0 0 1 1h5Zm-13.707 6.293a1 1 0 0 1 1.414 0L26 23.586l3.293-3.293a1 1 0 0 1 1.414 1.414L27.414 25l3.293 3.293a1 1 0 0 1-1.414 1.414L26 26.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L24.586 25l-3.293-3.293a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M12 11h-2v27a5 5 0 0 0 5 5h19v-2H15a3 3 0 0 1-3-3V11Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledIDocumentsDenied);
export default ForwardRef;
