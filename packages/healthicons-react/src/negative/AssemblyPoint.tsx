import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAssemblyPoint = (
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
        d="M0 0h48v48H0V0Zm6.293 6.293a1 1 0 0 1 1.414 0L12 10.586V8a1 1 0 1 1 2 0v6H8a1 1 0 1 1 0-2h2.586L6.293 7.707a1 1 0 0 1 0-1.414ZM36 37.414l4.293 4.293a1 1 0 0 0 1.414-1.414L37.414 36H40a1 1 0 1 0 0-2h-6v6a1 1 0 1 0 2 0v-2.586ZM6.293 41.707a1 1 0 0 1 0-1.414L10.586 36H8a1 1 0 1 1 0-2h6v6a1 1 0 1 1-2 0v-2.586l-4.293 4.293a1 1 0 0 1-1.414 0ZM37.414 12l4.293-4.293a1 1 0 0 0-1.414-1.414L36 10.586V8a1 1 0 1 0-2 0v6h6a1 1 0 1 0 0-2h-2.586ZM35.1 19.5c0 1.934-1.566 3.5-3.5 3.5a3.499 3.499 0 0 1-3.5-3.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5ZM16.6 23c1.934 0 3.5-1.566 3.5-3.5S18.534 16 16.6 16a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5Zm9.9-4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0ZM31 25c-2.003 0-6 1.293-6 3.858V31h12v-2.142C37 26.292 33.002 25 31 25Zm-20 3.858C11 26.292 14.998 25 17 25c2.003 0 6 1.293 6 3.858V31H11v-2.142Zm16.368-5.135c.22-.094.443-.182.67-.266-1.294-.67-2.958-1.007-4.038-1.007s-2.744.337-4.038 1.007c.227.084.45.172.67.266.995.425 2 1 2.781 1.769.21.206.408.431.587.677a5.51 5.51 0 0 1 .587-.677c.78-.769 1.786-1.344 2.781-1.77Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAssemblyPoint);
export default ForwardRef;
