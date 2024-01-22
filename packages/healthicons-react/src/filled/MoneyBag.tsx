import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMoneyBag = (
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
        d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711-.22.11-.425.218-.616.322-.378.206-.7.398-.956.567l2.77 4.078 1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a15.515 15.515 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6Zm-6.442 4.616a24.574 24.574 0 0 1-2.901-.728c2.281-1.013 5.68-2.088 9.343-2.088 2.537 0 4.936.516 6.92 1.17-2.325.327-4.806.882-7.17 1.565-1.86.538-4.034.48-6.192.081Zm15.96 5.064-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997s17.874-17.389 9.518-26.317ZM23 24a2 2 0 1 0 0 4v-4Zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4.001 4.001 0 0 0 25 22Zm0 8v4a2 2 0 1 0 0-4Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMoneyBag);
export default ForwardRef;
