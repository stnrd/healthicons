import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeGloves = (
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
        d="M28 8.17A3 3 0 0 1 32 11v10.15l1.056-1.32a3.304 3.304 0 0 1 5.328 3.896l-3.458 5.188a11.42 11.42 0 0 1-4.759 4.054l.83 9.949A1 1 0 0 1 30 44H18a1 1 0 0 1-.997-1.083l.808-9.684A6.999 6.999 0 0 1 14 27V13a3 3 0 0 1 4-2.83V9a3 3 0 0 1 4.105-2.79A3.001 3.001 0 0 1 28 7v1.17ZM25 6a1 1 0 0 0-1 1v13h-2V9a1 1 0 1 0-2 0v11h-2v-7a1 1 0 1 0-2 0v14a5.002 5.002 0 0 0 3.222 4.675 1 1 0 0 1 .64 1.017L19.087 42h9.826l-.8-9.591a1 1 0 0 1 .643-1.019 9.422 9.422 0 0 0 4.506-3.586l3.458-5.187a1.304 1.304 0 0 0-2.103-1.538l-2.836 3.546A1 1 0 0 1 30 24V11a1 1 0 1 0-2 0v9h-2V7a1 1 0 0 0-1-1Z"
        fill="#000"
      />
      <path
        d="M10 14h2v2h-2v-2ZM10 16v13a6.999 6.999 0 0 0 3.81 6.233L13.246 42h2.008l.608-7.307a1 1 0 0 0-.64-1.018A5.002 5.002 0 0 1 12 29V16h-2Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeGloves);
export default ForwardRef;
