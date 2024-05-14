import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyMale0306M = (
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
      <g clipPath="url(#baby-male-0306m_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm12 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 0 0 4.89-9.476L20 9.414V11a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-3.11 3.11A6 6 0 1 0 12 22Zm6.848 15.034a3.5 3.5 0 1 0-5.696-4.068L11.699 35H9.5a3.5 3.5 0 1 0 0 7h4a3.5 3.5 0 0 0 2.848-1.466l2.5-3.5Zm20.626-.64H36.27l-.57-.263c-.428-.476-.935-1.116-1.486-1.813-1.328-1.68-2.92-3.69-4.319-4.546A5.173 5.173 0 0 0 27.159 29H21.5l.586 13h4.729a5.332 5.332 0 0 0 2.273-.516 5.847 5.847 0 0 0 1.911-1.46l.57-.655c.224.249.442.598.67.961.502.802 1.045 1.67 1.78 1.67h5.589c.67 0 1.178-.295 1.652-.821s.74-1.239.74-1.982c0-.744-.266-1.457-.74-1.982-.474-.526-1.116-.822-1.786-.822ZM33.5 28a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
        />
      </g>
      <defs>
        <clipPath id="baby-male-0306m_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBabyMale0306M);
export default ForwardRef;
