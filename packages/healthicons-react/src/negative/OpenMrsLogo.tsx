import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOpenMrsLogo = (
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
      <g clipPath="url(#openMRS_logo_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM15.768 15.768a11.622 11.622 0 0 1 8.244-3.414 11.62 11.62 0 0 1 8.226 3.398l.008-7.763A17.932 17.932 0 0 0 24.012 6c-2.968 0-5.784.808-8.253 2.08l.01 7.688Zm16.47 16.465a11.617 11.617 0 0 1-8.242 3.413c-3.212 0-6.12-1.298-8.228-3.398l-.009 7.763a17.937 17.937 0 0 0 8.236 1.99c2.968 0 5.769-.719 8.236-1.99l.006-7.778Zm-19.885-8.241c0 3.22 1.305 6.133 3.414 8.241l-7.778-.005A17.934 17.934 0 0 1 6 23.992c0-2.968.718-5.768 1.989-8.236l7.763.008a11.625 11.625 0 0 0-3.399 8.228Zm19.88-8.236a11.62 11.62 0 0 1 3.414 8.243c0 3.211-1.299 6.12-3.399 8.226l7.763.009a17.932 17.932 0 0 0 1.99-8.235c0-2.968-.718-5.769-1.99-8.237l-7.778-.006Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="openMRS_logo_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOpenMrsLogo);
export default ForwardRef;
