import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledMoneyBag = (
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
        fillRule="evenodd"
        d="M24.04 6c-4.517 0-8.633 1.492-11.068 2.711-.22.11-.425.218-.616.322-.378.206-.7.398-.956.567l2.77 4.078 1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768 2.62-3.829a15.503 15.503 0 0 0-1.69-.957C32.489 7.437 28.472 6 24.04 6Zm-6.443 4.616a24.579 24.579 0 0 1-2.901-.728C16.977 8.875 20.377 7.8 24.039 7.8c2.537 0 4.936.516 6.92 1.17-2.325.327-4.806.882-7.17 1.565-1.86.538-4.034.48-6.192.081Zm15.96 5.064-.245.124c-5.607 2.828-13.043 2.828-18.65 0l-.232-.118C6.008 24.927-.422 41.997 24.04 41.997c24.46 0 17.873-17.389 9.517-26.317ZM23 24a2 2 0 0 0 0 4v-4Zm2-2v-1h-2v1a4 4 0 0 0 0 8v4a2 2 0 0 1-1.886-1.333 1 1 0 1 0-1.886.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 1 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4.001 4.001 0 0 0 25 22Zm0 8v4a2 2 0 1 0 0-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledMoneyBag);
export default ForwardRef;
