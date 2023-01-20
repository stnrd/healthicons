import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCreditCard = (
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
        d="M48 0H0v48h48V0ZM4 13a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v4H4v-4Zm0 10h40v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V23Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCreditCard);
export default ForwardRef;
