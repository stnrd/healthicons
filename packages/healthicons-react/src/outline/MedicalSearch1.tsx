import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSearch1 = (
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
        d="M21 20.132a8.5 8.5 0 0 1 8.176 13.63l1.306 1.306a1.999 1.999 0 0 1 1.932.518l5 5a2 2 0 1 1-2.828 2.828l-5-5a1.999 1.999 0 0 1-.518-1.932l-1.306-1.306A8.463 8.463 0 0 1 22.5 37a8.551 8.551 0 0 1-1.5-.132V39a5.002 5.002 0 0 1-10 0V12.687a1.504 1.504 0 0 1 1-1.415V10h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1.273a1.504 1.504 0 0 1 1 1.415v7.444ZM14 10h4v1.273a2 2 0 0 0 1 1.732V18h-6v-4.995a2 2 0 0 0 1-1.732V10Zm-1 10v19a3.002 3.002 0 0 0 6 0v-2.752a8.502 8.502 0 0 1-5-7.748 8.502 8.502 0 0 1 5-7.748V20h-6ZM12 8h8V6h-8v2Zm9 14.174a6.495 6.495 0 0 0-5 6.326 6.495 6.495 0 0 0 6.5 6.5 6.47 6.47 0 0 0 3.835-1.251 6.536 6.536 0 0 0 1.414-1.414A6.5 6.5 0 0 0 23 22.019V33.5h-2V22.174Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicalSearch1);
export default ForwardRef;
