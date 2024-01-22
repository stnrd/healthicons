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
        d="M27.734 11.438a4 4 0 1 0-7.467 0l-7.697 5.497a4 4 0 1 0-2.706 7.063l2.32 10.437A4 4 0 1 0 17.873 39h12.252A4.002 4.002 0 0 0 38 38a4 4 0 0 0-2.184-3.565l2.32-10.437a4 4 0 1 0-2.706-7.063l-7.696-5.497ZM24 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2.57 1.065A3.984 3.984 0 0 1 24 14a3.984 3.984 0 0 1-2.57-.935l-7.696 5.497a4 4 0 0 1-1.917 5.003l2.319 10.437A4.002 4.002 0 0 1 17.874 37h12.252a4.002 4.002 0 0 1 3.738-2.998l2.32-10.437a4 4 0 0 1-1.918-5.003l-7.696-5.497ZM12 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm22-16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPolygon);
export default ForwardRef;
