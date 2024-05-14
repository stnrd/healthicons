import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCallCentre = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.407 15.092a5.402 5.402 0 0 1 3.477 8.33L38.718 34.16a2.25 2.25 0 1 1-1.182 1.614l-14.07-10.922a5.4 5.4 0 1 1-4.058-9.76L19.406 6h2v9.092Zm.799 5.308a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z"
      />
      <path d="M27.63 20.384a7.201 7.201 0 0 0-4.223-6.558v-7.72c4.289.377 6.517 1.728 8.512 3.577.1.094.2.185.296.273v.001c.85.78 1.526 1.401 1.875 2.331l4.234 11.272a1.999 1.999 0 0 1-1.873 2.701H34.82V28.6l-7.575-5.883a7.19 7.19 0 0 0 .386-2.332ZM17.407 13.846V6.241c-8.99 1.353-11.403 8.06-11.403 11.734 0 5.767 3.683 10.24 5.41 12.033V42h17.112v-6.512h4.293c.302 0 .59-.068.846-.188L23.08 27.08a7.2 7.2 0 0 1-5.673-13.234Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCallCentre);
export default ForwardRef;
