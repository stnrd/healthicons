import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalAdvice = (
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
        d="M34 4c-5.523 0-10 4.477-10 10v9a1 1 0 0 0 1 1h9c5.523 0 10-4.477 10-10S39.523 4 34 4Zm-8 10a8 8 0 1 1 8 8h-8v-8ZM7 11.778c0-.426.352-.778.778-.778H14c.425 0 .778.352.778.778 0 2.326.372 4.562 1.06 6.652a.784.784 0 0 1-.198.8l-4.425 4.425.33.647c2.656 5.222 6.934 9.48 12.15 12.152l.648.332 4.426-4.426a.768.768 0 0 1 .782-.187l.01.003a21.28 21.28 0 0 0 6.661 1.064c.426 0 .778.352.778.778v6.204a.783.783 0 0 1-.778.778C20.082 41 7 27.919 7 11.778ZM7.778 9A2.783 2.783 0 0 0 5 11.778C5 29.023 18.977 43 36.222 43A2.783 2.783 0 0 0 39 40.222v-6.204a2.783 2.783 0 0 0-2.778-2.778 19.28 19.28 0 0 1-6.028-.961 2.768 2.768 0 0 0-2.839.667l-3.389 3.389a25.94 25.94 0 0 1-10.302-10.3l3.39-3.39a2.784 2.784 0 0 0 .691-2.82l-.002-.007-.002-.007a19.198 19.198 0 0 1-.963-6.033A2.783 2.783 0 0 0 14 9H7.778ZM29 13h4V9h2v4h4v2h-4v4h-2v-4h-4v-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicalAdvice);
export default ForwardRef;
