import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBook = (
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
        d="M9 10a5 5 0 0 1 5-5h24a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H14a3 3 0 0 0-3 3v1h27v2H10a1 1 0 0 1-1-1V10Zm14 16v-5h-5v-2h5v-5h2v5h5v2h-5v5h-2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBook);
export default ForwardRef;
