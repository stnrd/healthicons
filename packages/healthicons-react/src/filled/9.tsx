import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg9 = (
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
        d="M22.032 34a4.033 4.033 0 0 1-3.804-2.67 2 2 0 1 0-3.77 1.34A8.032 8.032 0 0 0 22.033 38h3.936C30.394 38 34 34.428 34 30V18c0-4.428-3.606-8-8.032-8h-3.936C17.606 10 14 13.572 14 18s3.606 8 8.032 8h3.936A8.022 8.022 0 0 0 30 24.92V30c0 2.2-1.795 4-4.032 4h-3.936ZM30 18c0 2.2-1.795 4-4.032 4h-3.936C19.795 22 18 20.2 18 18s1.795-4 4.032-4h3.936C28.205 14 30 15.8 30 18Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg9);
export default ForwardRef;
