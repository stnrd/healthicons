import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSugarAlt = (
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
      <g clipPath="url(#sugar_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632-1.4 1.75-2.465 3.033-3.346 3.958-.88.924-1.632 1.553-2.422 1.942-.814.4-1.587.506-2.423.523a27.36 27.36 0 0 1-1.313-.019H13.367c-.471-.014-.984-.029-1.572-.029-2.897 0-4.857-1.793-6.034-3.412a13.076 13.076 0 0 1-1.704-3.254l-.006-.019-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.627c5.826-7.017 12.915-8.012 21.256-8.993a1 1 0 0 1 1.11.876ZM5 22h2v2H5v-2Zm10 0h-2v2h2v-2Zm-5-.414L11.414 23 10 24.414 8.586 23 10 21.586ZM19.414 23 18 21.586 16.586 23 18 24.414 19.414 23ZM11 18h2v2h-2v-2Zm-1.586 1L8 17.586 6.586 19 8 20.414 9.414 19ZM12 13.586 13.414 15 12 16.414 10.586 15 12 13.586ZM17.414 19 16 17.586 14.586 19 16 20.414 17.414 19Z"
        />
      </g>
      <defs>
        <clipPath id="sugar_alt_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSugarAlt);
export default ForwardRef;
