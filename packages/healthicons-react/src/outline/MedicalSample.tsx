import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSample = (
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
        d="M4.08 18.222 18.222 4.08 26 11.858 11.858 26 4.08 18.222Zm2.828 0 4.95 4.95 11.314-11.314-4.95-4.95L6.908 18.222Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m11.858 23.172 11.314-11.314 17.677 17.678a8 8 0 1 1-11.313 11.313L11.857 23.172Zm2.828 0L30.95 39.435a6 6 0 0 0 8.485-8.485L23.171 14.686l-8.485 8.486Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.636 23.879 7.778-7.779 12.021 12.021-7.778 7.779-12.021-12.021Zm2.828 0 9.193 9.192 4.95-4.95-9.193-9.192-4.95 4.95ZM8.322 13.98l7.425 7.424-1.414 1.414-7.425-7.425 1.414-1.414ZM11.858 10.444l7.424 7.424-1.414 1.415-7.424-7.425 1.414-1.414ZM15.393 6.908l7.425 7.425-1.414 1.414-7.425-7.425 1.414-1.414Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.602 32.231c-.639.64-1.028 1.21-1.128 1.51l-1.898-.633c.254-.76.925-1.604 1.612-2.29.712-.713 1.593-1.407 2.425-1.823l.895 1.788c-.582.291-1.292.835-1.906 1.448Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicalSample);
export default ForwardRef;
