import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnus = (
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
      <g clipPath="url(#anus_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.1 33.5c1.105 0 2-1.01 2-1.936 0-.926-.895-2.064-2-2.064s-2 1.138-2 2.064c0 .927.895 1.936 2 1.936Zm-3.807-10.293-14.5-14.5 1.414-1.414 13.964 13.964a8.59 8.59 0 0 1 .36-.17C22.15 20.81 23.05 20.5 24 20.5c.952 0 1.85.311 2.469.586.13.058.25.115.36.17L40.793 7.294l1.414 1.414-14.5 14.5-.58.58-.68-.454h-.001l-.005-.004a3.497 3.497 0 0 0-.195-.117 6.625 6.625 0 0 0-.59-.298C25.15 22.689 24.55 22.5 24 22.5c-.548 0-1.15.189-1.656.414a6.625 6.625 0 0 0-.785.415l-.006.004-.68.454-.58-.58Zm13.641 18.124c-3.677 1.132-7.376.09-9.891-3.12-2.719 3.205-6.535 4.254-10.245 3.12-4.068-1.242-7.819-5.04-9.892-11.003l1.889-.656c1.926 5.537 5.29 8.74 8.587 9.747 3.24.99 6.6-.074 8.866-3.474l.877-1.315.813 1.355c2.016 3.362 5.2 4.422 8.408 3.434 3.282-1.01 6.749-4.227 8.923-9.783l1.862.728c-2.325 5.944-6.169 9.727-10.197 10.967Z"
        />
      </g>
      <defs>
        <clipPath id="anus_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnus);
export default ForwardRef;
