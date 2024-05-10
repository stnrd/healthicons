import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPeople = (
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
      <path d="M17 24c3.867 0 7-3.133 7-7s-3.133-7-7-7-7 3.133-7 7 3.133 7 7 7ZM39 20.5c0 3.039-2.461 5.5-5.5 5.5a5.499 5.499 0 0 1-5.5-5.5c0-3.039 2.461-5.5 5.5-5.5s5.5 2.461 5.5 5.5ZM17 26c2.734 0 7.183.851 10.101 2.545C28.293 29.758 29 31.081 29 32.4V38H4v-5.6c0-4.256 8.661-6.4 13-6.4ZM44 38H31v-5.6c0-1.416-.511-2.72-1.324-3.883 1.541-.345 3.058-.517 4.217-.517C37.62 28 44 29.787 44 33.333V38Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPeople);
export default ForwardRef;
