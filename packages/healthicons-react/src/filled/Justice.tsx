import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgJustice = (
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
        d="M25 6h-2v4.17a3.004 3.004 0 0 0-1.97 2.409l-7.29 1.955a1 1 0 0 0-.557.39l-5.855 8.294H6.12a8.52 8.52 0 0 0 .337 2.379c.95 3.256 3.797 5.62 7.163 5.62 3.495 0 6.431-2.55 7.264-6a8.525 8.525 0 0 0 .236-1.996v-.003h-.935l-4.6-7.108 5.842-1.567A3.01 3.01 0 0 0 23 15.829V38h-3v2h-6v2h20v-2h-6v-2h-3V15.83a3.002 3.002 0 0 0 2-2.783l5.14-1.378L28.473 17H27c0 .69.082 1.36.236 2 .833 3.45 3.77 6 7.264 6 3.365 0 6.213-2.364 7.163-5.621A8.499 8.499 0 0 0 42 17.003V17h-1.946L35.36 9.49a1 1 0 0 0-1.12-.456l-7.88 2.114a3.006 3.006 0 0 0-1.36-.977V6Zm5.901 11h6.795l-3.236-5.177L30.901 17Zm-13.098 6.218-3.839-5.933-4.188 5.933h8.027Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgJustice);
export default ForwardRef;
