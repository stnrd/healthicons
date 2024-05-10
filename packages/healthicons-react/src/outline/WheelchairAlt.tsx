import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWheelchairAlt = (
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
      <path d="M17 32a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 32a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6v2h3.22l3.519 14.079c-4.928.62-8.74 4.825-8.74 9.921 0 5.523 4.478 10 10 10 5.524 0 10-4.477 10-10 0-1.045-.16-2.053-.457-3H31v7.17A3.001 3.001 0 0 0 32 42a3 3 0 0 0 1-5.83v-5.928l6.071 6.072 3.536-3.536-1.414-1.414-2.122 2.121L33 27.414V26a3 3 0 0 0-3-3h-1v-3a3 3 0 0 0-3-3H15.53L12.78 6H8Zm8.03 13 .758 3.03a9.94 9.94 0 0 1 3.576.97H27v-3a1 1 0 0 0-1-1h-9.97ZM31 27h-6.338a10.04 10.04 0 0 0-1.52-2H30a1 1 0 0 1 1 1v1Zm-15-3a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm15 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWheelchairAlt);
export default ForwardRef;
