import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodON = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#blood-o-n_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm26.571 7.758a2 2 0 0 0 1.429.6h6c1.12 0 2 .896 2 1.97v17.21a8.441 8.441 0 0 0-.925-.625c-1.825-1.062-4.465-1.614-7.583.226-2.568 1.515-4.983 1.925-7.61 1.98-1.171.025-2.368-.02-3.651-.069l-.53-.02A68.676 68.676 0 0 0 12 28.972V10.327c0-1.073.88-1.97 2-1.97h6a2 2 0 0 0 1.429-.6l1.132-1.155a2.021 2.021 0 0 1 2.878 0l1.39-1.362-1.39 1.362 1.132 1.156ZM34 38h-4v2h-5v4h-2v-4h-5v-2h-4c-2.21 0-4-1.777-4-3.97V10.328c0-2.192 1.79-3.97 4-3.97h6l1.132-1.155a4.022 4.022 0 0 1 5.736 0L28 6.358h6c2.21 0 4 1.777 4 3.97V34.03C38 36.223 36.21 38 34 38ZM14 18a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
        />
      </g>
      <defs>
        <clipPath id="blood-o-n_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodON);
export default ForwardRef;
