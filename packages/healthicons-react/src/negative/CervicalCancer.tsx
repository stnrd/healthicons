import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCervicalCancer = (
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
      <g clipPath="url(#cervical_cancer_svg__a)" fill="#000">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.735 14.455 25.152 16.3l3.77 4.398-1.274 1.204L24 17.645l-3.649 4.257-1.274-1.204 3.77-4.398-1.581-1.845c-1.052-1.226-1.005-3.102.107-4.269A1.861 1.861 0 0 1 22.72 9.6h2.56c.505 0 .99.21 1.348.586 1.11 1.167 1.158 3.043.107 4.27Zm-4.15-2.996a.187.187 0 0 1 .135-.059h2.56c.05 0 .1.021.135.059a1.35 1.35 0 0 1 .045 1.792L24 14.955l-1.46-1.704a1.35 1.35 0 0 1 .045-1.792Z"
        />
        <path d="m31.88 24.173-7.023 7.373V42h-1.714V31.546l-7.022-7.373 1.212-1.273 6.667 7 6.667-7 1.212 1.273Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.705 6h26.59c3.126 7.848 4.713 14.106 4.705 19.852-.008 5.614-1.538 10.66-4.504 16.148H10.504C7.538 36.511 6.008 31.466 6 25.852 5.992 20.105 7.579 13.848 10.705 6Z"
        />
      </g>
      <defs>
        <clipPath id="cervical_cancer_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCervicalCancer);
export default ForwardRef;
