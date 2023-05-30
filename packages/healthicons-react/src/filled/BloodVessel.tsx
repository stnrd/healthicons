import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodVessel = (
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
        d="M18 6v19.38l-2.926-2.02.092-.01-.966-8.757-1.987.22.784 7.112-6.617-4.568-1.507 6.027 4.42 3.49-4.055 1.021.489 1.94 5.546-1.398 6.35 5.012.005.005a.95.95 0 0 1 .372.755V42h10V27.113a.94.94 0 0 1 .519-.829l5.151-2.673 7.593 1.847.473-1.943-5.438-1.323 5.98-3.248-2.269-5.293-7.576 3.597 1.043-4.736-1.953-.43-1.38 6.266L28 19.43V6H18Zm5.227 2.85a1 1 0 1 1-1.7 1.055 1 1 0 0 1 1.7-1.055Zm1.678 5.377a1 1 0 1 0-1.055-1.7 1 1 0 0 0 1.055 1.7Zm-2 9a1 1 0 1 0-1.055-1.7 1 1 0 0 0 1.055 1.7Zm1.322 5.622a1 1 0 1 1-1.7 1.056 1 1 0 0 1 1.7-1.056Zm-1.322 10.378a1 1 0 1 0-1.055-1.7 1 1 0 0 0 1.055 1.7Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodVessel);
export default ForwardRef;
