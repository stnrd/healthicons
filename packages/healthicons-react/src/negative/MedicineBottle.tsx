import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicineBottle = (
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
      <g clipPath="url(#medicine_bottle_svg__a)" fill="#000">
        <path d="M16 16h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4v10ZM23 16h-5V6h5v10ZM30 16h-5V6h5v10ZM32 16V6h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4ZM23 35v-5h-5v-2h5v-5h2v5h5v2h-5v5h-2Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM12 4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v23a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H12Z"
        />
      </g>
      <defs>
        <clipPath id="medicine_bottle_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicineBottle);
export default ForwardRef;
