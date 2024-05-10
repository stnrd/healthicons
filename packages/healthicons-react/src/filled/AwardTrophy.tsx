import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAwardTrophy = (
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
        d="M12 7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v6a5 5 0 0 1-5 5h-1.683A12.017 12.017 0 0 1 26 27.834V34h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6v-6.166A12.017 12.017 0 0 1 12.683 20H11a5 5 0 0 1-5-5V9a1 1 0 0 1 1-1h5V7Zm24 9v-6h4v5a3 3 0 0 1-3 3h-1v-2Zm-24-6H8v5a3 3 0 0 0 3 3h1v-8Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAwardTrophy);
export default ForwardRef;
