import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartCuredDecreasing = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 17a1 1 0 0 1 1-1h1.871c2.432 0 4.813.74 6.957 2.14 2.141 1.397 3.984 3.41 5.403 5.859 1.282 2.215 2.919 3.982 4.764 5.186C27.838 30.388 29.844 31 31.86 31h7.64a1 1 0 1 1 0 2h-7.64c-2.432 0-4.813-.74-6.957-2.14-2.141-1.397-3.984-3.41-5.403-5.859-1.283-2.215-2.919-3.982-4.765-5.186C12.892 18.612 10.887 18 8.871 18H7a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.293 26.51a1 1 0 0 1 1.414 0l4.78 4.783a1 1 0 0 1 0 1.414l-4.78 4.782a1 1 0 0 1-1.414-1.414L39.366 32l-4.073-4.075a1 1 0 0 1 0-1.415ZM30.073 6.74A2.524 2.524 0 0 1 31.857 6h2.286a2.524 2.524 0 0 1 2.524 2.524v2.81h2.81A2.524 2.524 0 0 1 42 13.856v2.286a2.524 2.524 0 0 1-2.524 2.524h-2.81v2.81A2.524 2.524 0 0 1 34.144 24h-2.286a2.524 2.524 0 0 1-2.524-2.524v-2.81h-2.81A2.524 2.524 0 0 1 24 16.144v-2.286a2.524 2.524 0 0 1 2.524-2.524h2.81v-2.81c0-.669.265-1.31.739-1.784ZM31.857 8a.524.524 0 0 0-.524.524v3.81a1 1 0 0 1-1 1h-3.81a.524.524 0 0 0-.523.523v2.286a.524.524 0 0 0 .524.524h3.81a1 1 0 0 1 1 1v3.81a.524.524 0 0 0 .523.523h2.286a.524.524 0 0 0 .524-.524v-3.81a1 1 0 0 1 1-1h3.81a.524.524 0 0 0 .523-.523v-2.286a.524.524 0 0 0-.524-.524h-3.81a1 1 0 0 1-1-1v-3.81A.524.524 0 0 0 34.144 8h-2.286Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartCuredDecreasing);
export default ForwardRef;
