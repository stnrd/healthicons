import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSymptom = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M35.084 38.183C39.294 34.89 42 29.76 42 24c0-7.857-5.034-14.538-12.052-16.994l.66-1.888C38.408 7.847 44 15.27 44 24c0 6.413-3.018 12.121-7.712 15.781l-1.204-1.598ZM28.466 41.442A18.033 18.033 0 0 1 24 42a18.04 18.04 0 0 1-4.372-.535l-.475 1.943c1.552.387 3.175.592 4.847.592 1.706 0 3.361-.214 4.942-.615l-.476-1.943ZM6 24c0 5.789 2.733 10.94 6.979 14.232l-1.204 1.598C7.045 36.172 4 30.442 4 24 4 15.27 9.593 7.847 17.391 5.118l.661 1.888C11.034 9.462 6 16.143 6 24ZM28.5 8.5A4.5 4.5 0 1 1 23.99 4h.02a4.5 4.5 0 0 1 4.49 4.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 22c.729 0 1.412-.195 2-.535V29v-.003.001l-.002.011c-.007.046-.032.22-.125.569-.105.398-.264.901-.466 1.486a40.57 40.57 0 0 1-.11.316 4 4 0 0 0-2.015 5.098 192.266 192.266 0 0 1-1.557 3.593l-.049.108a2 2 0 0 0 3.456 1.977l2.248-3.174a4 4 0 0 0 3.503-4.945L24 32.46l6.868 9.696a2 2 0 0 0 3.456-1.977l-.049-.108a125.564 125.564 0 0 1-.645-1.463c-.418-.96-.974-2.258-1.529-3.615a80.525 80.525 0 0 1-1.508-3.929 21.784 21.784 0 0 1-.466-1.486c-.093-.35-.118-.523-.125-.569l-.001-.01c0-.003-.001-.003-.001.001v-2.535A3.999 3.999 0 0 0 30.646 20H36a2 2 0 1 0 0-4H19.465A3.998 3.998 0 0 0 16 14c-1.48 0-2.773.804-3.465 2H12a2 2 0 1 0 0 4h.535A3.998 3.998 0 0 0 16 22Zm2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-9 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSymptom);
export default ForwardRef;
