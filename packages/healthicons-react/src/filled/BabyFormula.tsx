import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyFormula = (
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
        d="m11.683 4 7 5h18.914a.878.878 0 0 0-.042-.03l-7.106-4.674A1.775 1.775 0 0 0 29.473 4h-17.79ZM10 5.202V9.14c0 .374.098.742.284 1.06l3.13 5.365c.295.507.938.624 1.374.25l1.978-1.695c.443-.38.7-.954.7-1.562v-2.023L10 5.202ZM10 13.487v24.69c0 .348.168.67.445.853l2.355 1.549V17.63a2.882 2.882 0 0 1-.97-1.006L10 13.487ZM14.667 41.807l2.8 1.842V16.081l-1.513 1.296a2.699 2.699 0 0 1-1.287.617v23.813ZM24.933 22c0-.552.418-1 .934-1h5.6c.515 0 .933.448.933 1s-.418 1-.933 1h-5.6c-.516 0-.934-.448-.934-1ZM26.8 25c0-.552.418-1 .933-1H29.6c.515 0 .933.448.933 1s-.418 1-.933 1h-1.867c-.515 0-.933-.448-.933-1Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.333 44h17.734c.515 0 .933-.448.933-1V11H19.333v33Zm9.334-14c3.608 0 6.533-3.134 6.533-7s-2.925-7-6.533-7c-3.609 0-6.534 3.134-6.534 7s2.925 7 6.534 7Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBabyFormula);
export default ForwardRef;
