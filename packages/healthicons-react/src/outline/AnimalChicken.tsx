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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M14 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.086 6c1.26-1.26 3.414-.368 3.414 1.414V9h1.586c1.782 0 2.674 2.154 1.414 3.414l-1.793 1.793a1.138 1.138 0 0 1-.037.036l3.456 5.847a4 4 0 0 0 4.08 1.914l12.58-2.027c1.63-.263 2.74 1.609 1.728 2.914-.97 1.251-1.459 2.85-1.812 4.6C38.384 34.02 32.854 39.052 26 39.88V42h2.5v2H19v-2h5v-2c-5.414 0-10.21-2.607-13.107-6.608-2.324-3.21-1.946-7.335-1.006-10.767l.495-1.805a6.996 6.996 0 0 0 .181-2.822L10.5 18H7.914C6.132 18 5.24 15.846 6.5 14.586L15.086 6Zm5 5-1.466 1.466-.73-1.233a4.55 4.55 0 0 0-.307-.455c.275.142.586.222.917.222h1.586ZM16.5 9c0 .334.082.65.227.926a4.548 4.548 0 0 0-1.894-.845L16.5 7.414V9Zm-8.586 7 1.595-1.595c.04.209.096.417.168.625l.334.97H7.914Zm3.654-1.622a2.548 2.548 0 0 1 4.601-2.127l5.236 8.857a6 6 0 0 0 6.119 2.87l12.148-1.957c-1.082 1.557-1.589 3.383-1.93 5.075a13.09 13.09 0 0 1-1.419 3.815.999.999 0 0 0-.247.222C34.183 33.513 31.378 35 28.264 35 22.654 35 18 30.136 18 24a1 1 0 0 0-2 0c0 7.12 5.432 13 12.264 13 .4 0 .794-.02 1.184-.06A14.402 14.402 0 0 1 24 38c-4.763 0-8.96-2.291-11.487-5.78-1.766-2.439-1.6-5.773-.697-9.066l.495-1.806a8.998 8.998 0 0 0-.171-5.311l-.572-1.659Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalChicken);
export default ForwardRef;
