import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusResearch = (
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
        d="M21 6a1 1 0 1 0 0 2h1v3.041a11.948 11.948 0 0 0-6.75 2.796l-.028-.03-2.121-2.12.707-.708a1 1 0 0 0-1.415-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.415l.707-.707 2.122 2.12.03.03A11.947 11.947 0 0 0 11.04 22L11 22H8v-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-1h3.041a11.946 11.946 0 0 0 2.796 6.75l-.03.028-2.12 2.122-.708-.707a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.415-1.414l-.707-.707 2.12-2.121.03-.03a11.959 11.959 0 0 0 5.568 2.64 1 1 0 0 0 .362-1.968C16.526 31.98 13 27.901 13 23c0-5.523 4.477-10 10-10 4.9 0 8.98 3.526 9.835 8.18a1 1 0 1 0 1.967-.36 11.959 11.959 0 0 0-2.64-5.57l.006-.005.024-.023 2.122-2.121.707.707a1 1 0 0 0 1.414-1.415l-2.828-2.828a1 1 0 1 0-1.415 1.414l.708.707-2.122 2.122-.028.03A11.946 11.946 0 0 0 24 11.04V8h1a1 1 0 1 0 0-2h-4Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 20.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM31.5 23a8.5 8.5 0 1 0 5.262 15.176l4.53 4.531a1 1 0 0 0 1.415-1.414l-4.531-4.531A8.5 8.5 0 0 0 31.5 23ZM25 31.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusResearch);
export default ForwardRef;
