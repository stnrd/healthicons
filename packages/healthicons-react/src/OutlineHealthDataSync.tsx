import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineHealthDataSync = (
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
        d="M17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h3a3 3 0 0 1 3 3v16h-2V10a1 1 0 0 0-1-1h-3a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3h-3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h10v2H14a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h3Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8Zm3 10v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Zm1 13.665v4a1 1 0 0 0 1 1h4v-2h-1.475l1.253-1.178a5 5 0 0 1 8.273 1.845l1.885-.667a7.001 7.001 0 0 0-11.538-2.625L26 31.353v-1.688h-2Zm11.667 5.667h4a1 1 0 0 1 1 1v4h-2v-1.688l-1.398 1.313a7 7 0 0 1-11.538-2.625l1.885-.667a5 5 0 0 0 8.273 1.845l1.253-1.178h-1.475v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineHealthDataSync);
export default ForwardRef;
