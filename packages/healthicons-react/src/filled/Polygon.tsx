import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPolygon = (
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
        d="M28 10c0 .507-.094.992-.266 1.438l7.696 5.497a4 4 0 1 1 2.706 7.063l-2.32 10.437A4 4 0 1 1 30.126 39H17.874A4.002 4.002 0 0 1 10 38a4 4 0 0 1 2.184-3.565l-2.32-10.437a4 4 0 1 1 2.706-7.063l7.696-5.497A4 4 0 1 1 28 10Zm-6.57 3.065-7.696 5.497a4 4 0 0 1-1.917 5.003l2.319 10.437A4.002 4.002 0 0 1 17.874 37h12.252a4.002 4.002 0 0 1 3.738-2.998l2.32-10.437a4 4 0 0 1-1.918-5.003l-7.695-5.497A3.984 3.984 0 0 1 24 14a3.984 3.984 0 0 1-2.57-.935Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPolygon);
export default ForwardRef;
