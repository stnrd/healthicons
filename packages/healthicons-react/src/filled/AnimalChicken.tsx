import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalChicken = (
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
        d="M18.5 7.414c0-1.782-2.154-2.674-3.414-1.414L6.5 14.586C5.24 15.846 6.132 18 7.914 18h3.469a8.257 8.257 0 0 1-.277 2.4l-.761 2.842c-.882 3.293-1.135 6.912.75 9.753A15.693 15.693 0 0 0 24 40V42h-5v2h9.5v-2H26v-2.101a15.683 15.683 0 0 0 8.733-3.924A13.865 13.865 0 0 1 29.478 37C22.071 37 16 31.216 16 24a1 1 0 0 1 2 0c0 6.039 5.102 11 11.478 11 3.525 0 6.67-1.521 8.772-3.905.065-.075.14-.137.22-.187.5-1.09.877-2.248 1.113-3.455.369-1.892.914-3.784 2.078-5.32.483-.637-.06-1.536-.848-1.406L27.698 22.89a5 5 0 0 1-5.2-2.533l-3.32-6.067 2.02-1.795C22.573 11.273 21.709 9 19.87 9H18.5V7.414Zm-.307 5.076L19.87 11H18.5a2 2 0 0 1-2-2V7.414l-2.644 2.644a3.88 3.88 0 0 1 4.078 1.96l.26.472Zm-7.485.716L7.914 16h3.159l-.298-1.148a3.864 3.864 0 0 1-.067-1.646ZM14 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalChicken);
export default ForwardRef;
