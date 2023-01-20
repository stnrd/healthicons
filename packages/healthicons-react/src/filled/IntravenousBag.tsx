import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntravenousBag = (
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
      <path d="M24 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.982 38.048h-.99v2h-4.01v4h-2v-4h-3.991a2 2 0 0 1-2 1.952h-2a2 2 0 0 1-2-1.952h-2v-2h-1.009a4 4 0 0 1-4-4V10.162a4 4 0 0 1 4-4h6l1.132-1.164a4 4 0 0 1 5.736 0l1.132 1.164h6a4 4 0 0 1 4 4v23.886a4 4 0 0 1-4 4ZM26.548 7.556a2 2 0 0 0 1.434.606h6a2 2 0 0 1 2 2V11.5h-3.99v2h3.99v3h-3.99v2h3.99v3h-3.99v2h3.99v4.6c-1.409-1.461-4.223-3.37-7.99-.93-3.978 2.577-7.619 2.425-11.809 2.25-1.335-.055-2.726-.113-4.2-.085V10.162a2 2 0 0 1 2-2h6a2 2 0 0 0 1.433-.606l1.132-1.164a2 2 0 0 1 2.868 0l1.132 1.164Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIntravenousBag);
export default ForwardRef;
