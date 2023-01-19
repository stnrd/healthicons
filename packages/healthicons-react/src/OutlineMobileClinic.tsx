import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineMobileClinic = (
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
        d="M4 13a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v6h3.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-4v-2h2v-6.124a1 1 0 0 0-.322-.735l-5.282-4.876a1 1 0 0 0-.678-.265H32v12h2v2H23v-2h7V13a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v20h3v2H4V13Zm10 20h3v2h-3v-2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M11 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm17-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-10H5v-2h38v2Zm-26-5v-8h2v8h-2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M22 20h-8v-2h8v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineMobileClinic);
export default ForwardRef;
