import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFeverDevices = (
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
        d="M30 44a7.963 7.963 0 0 0 3.965-1.05l.05.05.198-.198A7.995 7.995 0 0 0 38 36c0-2.55-1.193-4.82-3.05-6.286.033-.233.05-.471.05-.714V9a5 5 0 0 0-10 0v20c0 .242.017.481.05.714A8 8 0 0 0 30 44Zm-3.705-12.72-.006.005c-.216.17-.42.354-.61.552l8.484 8.484c.2-.192.385-.398.557-.616l-8.425-8.425ZM24.22 34.38c.083-.296.188-.583.313-.859l7.946 7.945c-.276.125-.563.23-.859.313l-7.4-7.4Zm-.123 2.704a6.006 6.006 0 0 0 4.819 4.82l-4.82-4.82Zm2.906-7.922 8.701 8.701c.1-.305.176-.621.226-.946L27 27.986V29c0 .054.001.108.004.161ZM27 25.157l8.544 8.545a6.018 6.018 0 0 0-1.833-2.417 2 2 0 0 1-.748-1.336L27 23.985v1.172Zm.697-4.042a7.2 7.2 0 0 0-.697-.097V9a3 3 0 1 1 6 0v1h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2.085c-1.143.022-2.257-.222-3.346-.499a89.867 89.867 0 0 1-.4-.104 23.257 23.257 0 0 0-1.557-.367Zm1.74 2.479L33 27.156v-1.172l-2.073-2.072a20.077 20.077 0 0 1-1.49-.32ZM14 29v-9h-3.06c-.723 0-1.174-.877-.813-1.579l4.06-7.895c.362-.701 1.264-.701 1.625 0l4.061 7.895c.36.702-.09 1.579-.812 1.579H16v9h-2Zm-1.407-11L15 13.32 17.407 18h-4.814Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFeverDevices);
export default ForwardRef;
