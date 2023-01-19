import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledSweating = (
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
        d="M24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7.5-3c.828 0 1.5-.769 1.5-1.717C33 5.78 31.5 4 31.5 4S30 5.78 30 7.283C30 8.23 30.672 9 31.5 9Zm6.5 5.94c0 1.137-.895 2.06-2 2.06s-2-.923-2-2.06c0-.768.362-1.596.779-2.294l.034-.058.105-.168C35.444 11.594 36 11 36 11a10.74 10.74 0 0 0 1.278 1.742c.392.677.722 1.465.722 2.197Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M33.227 16.343C32.576 15.228 31.405 14 29.556 14H18.444c-1.849 0-3.02 1.228-3.671 2.343-.649 1.11-1.027 2.48-1.265 3.717C13.026 22.569 13 25.227 13 26a2 2 0 1 0 4 0c0-.727.03-3.069.436-5.185.155-.805.347-1.482.564-1.994V42a2 2 0 0 0 3.994.153l1-13A2.02 2.02 0 0 0 23 29h2c0 .051.002.102.006.153l1 13A2 2 0 0 0 30 42V18.82c.217.513.41 1.19.564 1.995C30.97 22.931 31 25.273 31 26a2 2 0 1 0 4 0c0-.773-.026-3.431-.508-5.94-.238-1.236-.616-2.607-1.265-3.717ZM22 24c1.105 0 2-.923 2-2.06 0-1.804-2-3.94-2-3.94s-2 2.136-2 3.94c0 1.137.895 2.06 2 2.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledSweating);
export default ForwardRef;
