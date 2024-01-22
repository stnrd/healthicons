import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodOP = (
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
        d="M14 18a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        fill="#000"
      />
      <path
        d="M28 17a1 1 0 1 0 0 2h1.5v1.5a1 1 0 1 0 2 0V19H33a1 1 0 1 0 0-2h-1.5v-1.5a1 1 0 1 0-2 0V17H28Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 34.03c0 2.193 1.79 3.97 4 3.97h4v2h5v4h2v-4h5v-2h4c2.21 0 4-1.777 4-3.97V10.328c0-2.192-1.79-3.97-4-3.97h-6l-1.132-1.155a4.022 4.022 0 0 0-5.736 0L20 6.358h-6c-2.21 0-4 1.777-4 3.97V34.03ZM28 8.359a2 2 0 0 1-1.429-.6L25.44 6.602a2.021 2.021 0 0 0-2.878 0l-1.132 1.156a2 2 0 0 1-1.429.6h-6c-1.12 0-2 .896-2 1.97V28.97a68.676 68.676 0 0 1 3.7.06l.53.02c1.284.048 2.481.093 3.652.069 2.627-.056 5.042-.466 7.61-1.981 3.118-1.84 5.758-1.288 7.583-.226.338.197.647.41.925.626V10.327c0-1.073-.88-1.97-2-1.97h-6Zm8 21.971a6.998 6.998 0 0 0-1.931-1.688c-1.294-.752-3.155-1.2-5.56.22-2.958 1.745-5.743 2.198-8.585 2.258-1.234.026-2.494-.021-3.77-.07l-.527-.02A66.538 66.538 0 0 0 12 30.971v3.06c0 1.073.88 1.969 2 1.969h20c1.12 0 2-.896 2-1.97v-3.7Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodOP);
export default ForwardRef;
