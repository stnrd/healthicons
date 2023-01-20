import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodBN = (
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
        d="M16 11a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a4 4 0 0 0 2.646-7A4 4 0 0 0 21 11h-5Zm7 4a2 2 0 0 1-2 2h-4v-4h4a2 2 0 0 1 2 2Zm0 6a2 2 0 0 0-2-2h-4v4h4a2 2 0 0 0 2-2Z"
        fill="#333"
      />
      <path
        d="M26 18a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 34.03c0 2.193-1.79 3.97-4 3.97h-4v2h-5v4h-2v-4h-5v-2h-4c-2.21 0-4-1.777-4-3.97V10.328c0-2.192 1.79-3.97 4-3.97h6l1.132-1.155a4.022 4.022 0 0 1 5.736 0L28 6.358h6c2.21 0 4 1.777 4 3.97V34.03ZM26.571 7.759a2 2 0 0 0 1.429.6h6c1.12 0 2 .896 2 1.97v17.21a8.441 8.441 0 0 0-.925-.625c-1.825-1.062-4.465-1.614-7.583.226-2.568 1.515-4.983 1.925-7.61 1.98-1.171.025-2.368-.02-3.651-.069l-.53-.02A68.676 68.676 0 0 0 12 28.972V10.327c0-1.073.88-1.97 2-1.97h6a2 2 0 0 0 1.429-.6l1.132-1.155a2.021 2.021 0 0 1 2.878 0l1.132 1.156ZM15.627 31.029A66.538 66.538 0 0 0 12 30.971v3.06c0 1.073.88 1.969 2 1.969h20c1.12 0 2-.896 2-1.97v-3.7a6.998 6.998 0 0 0-1.931-1.688c-1.294-.753-3.155-1.2-5.56.22-2.958 1.744-5.743 2.197-8.585 2.257-1.234.026-2.494-.021-3.77-.07l-.527-.02Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodBN);
export default ForwardRef;
