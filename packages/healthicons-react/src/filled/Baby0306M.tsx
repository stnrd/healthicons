import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBaby0306M = (
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
        d="M17.8 26.6a3 3 0 0 1 .6 4.2l-3 4A3 3 0 0 1 13 36H9a3 3 0 1 1 0-6h2.5l2.1-2.8a3 3 0 0 1 4.2-.6Z"
      />
      <path d="M39.474 30.393H36.27l-.57-.262c-1.46-1.622-3.824-5.148-5.805-6.359A5.172 5.172 0 0 0 27.159 23H21.5l.586 13h4.729a5.332 5.332 0 0 0 2.273-.516 5.847 5.847 0 0 0 1.911-1.46l.57-.655c.719.799 1.383 2.631 2.45 2.631h5.589c.67 0 1.178-.295 1.652-.821s.74-1.239.74-1.982c0-.744-.266-1.457-.74-1.982-.474-.526-1.116-.822-1.786-.822ZM40 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5 20a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBaby0306M);
export default ForwardRef;
