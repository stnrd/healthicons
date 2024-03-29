import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgM = (
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
        d="M11 36V12a3 3 0 0 1 5.305-1.92L24 19.313l7.695-9.235A3 3 0 0 1 37 12v24a3 3 0 1 1-6 0V20.286l-4.695 5.634a3 3 0 0 1-4.61 0L17 20.287V36a3 3 0 1 1-6 0Zm2-24v24a1 1 0 1 0 2 0V17.524a1 1 0 0 1 1.768-.64l6.464 7.756a1 1 0 0 0 1.536 0l6.464-7.756a1 1 0 0 1 1.768.64V36a1 1 0 1 0 2 0V12a1 1 0 0 0-1.768-.64l-8.464 10.156a1 1 0 0 1-1.536 0L14.768 11.36A1 1 0 0 0 13 12Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgM);
export default ForwardRef;
