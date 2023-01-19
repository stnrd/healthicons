import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledNausea = (
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
        d="M25.172 8.172a3.99 3.99 0 0 1 3.075-1.164A4.502 4.502 0 0 0 19.5 8.5a4.5 4.5 0 0 0 5.018 4.47 4.002 4.002 0 0 1 .654-4.798Z"
      />
      <path
        fill="#333"
        d="M13.85 17c1.244-1.26 3.015-2 5.138-2h10.184l-2.586-2.586a2 2 0 1 1 2.828-2.828l6 6A2 2 0 0 1 34 19h-4v23a2 2 0 0 1-3.993.166L25.16 32h-2.32l-.847 10.166A2 2 0 0 1 18 42V30h3a4 4 0 0 0 0-8h-3v-2.891c-.6.144-1.02.413-1.306.703A2.457 2.457 0 0 0 16 21.52a2.34 2.34 0 0 0 .65 1.673c.407.414 1.121.808 2.338.808h2.003a2 2 0 1 1 0 4H18.99c-2.152 0-3.942-.731-5.193-2.005-1.23-1.253-1.811-2.903-1.796-4.514A6.457 6.457 0 0 1 13.85 17Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledNausea);
export default ForwardRef;
