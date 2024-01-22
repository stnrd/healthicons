import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodBag = (
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
        d="M0 0h48v48H0V0Zm38 10.376v23.886a4 4 0 0 1-4 4h-4v2h-5v4h-2v-4h-5v-2h-4a4 4 0 0 1-4-4V10.376a4 4 0 0 1 4-4h6l1.132-1.164a4 4 0 0 1 5.736 0L28 6.376h6a4 4 0 0 1 4 4ZM26.566 7.77A2 2 0 0 0 28 8.376h6a2 2 0 0 1 2 2v17.425a8.442 8.442 0 0 0-.925-.626l-7.583.226c-2.568 1.515-4.983 1.924-7.61 1.98-1.17.025-2.368-.02-3.651-.069l-.53-.02a68.776 68.776 0 0 0-3.701-.06V10.377a2 2 0 0 1 2-2h6a2 2 0 0 0 1.434-.606l1.132-1.164a2 2 0 0 1 2.868 0l1.132 1.164Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodBag);
export default ForwardRef;
