import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeAdmissions = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g
        fill="#333"
        fillRule="evenodd"
        clipPath="url(#negative_admissions_svg__a)"
        clipRule="evenodd"
      >
        <path d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z" />
        <path d="M26.038 14.582H17v18.817h9.038V14.582Zm-11.038-2v22.817h13.038V12.582H15Z" />
        <path d="M22.835 10.065a1 1 0 0 0-1.316.95v26.198a1 1 0 0 0 1.316.948l8.865-2.955a1 1 0 0 0 .684-.948V13.969a1 1 0 0 0-.684-.949l-8.865-2.955Zm2.306 14.773c.4 0 .724-.649.724-1.449s-.324-1.449-.724-1.449c-.4 0-.725.649-.725 1.45 0 .8.325 1.448.725 1.448Z" />
      </g>
      <defs>
        <clipPath id="negative_admissions_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeAdmissions);
export default ForwardRef;
