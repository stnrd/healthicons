import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgA = (
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
        d="M24 10a2 2 0 0 1 1.846 1.23l7.483 17.96.035.084 2.482 5.957a2 2 0 0 1-3.692 1.538L30.167 32H17.833l-1.987 4.77a2 2 0 0 1-3.692-1.54l2.482-5.956a2.01 2.01 0 0 1 .035-.085l7.483-17.958A2 2 0 0 1 24 10Zm-4.5 18h9L24 17.2 19.5 28Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgA);
export default ForwardRef;
