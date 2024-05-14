import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBandaged = (
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
      <g clipPath="url(#bandaged_svg__a)" fill="#000">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 24c0 8.837-7.163 16-16 16-7.03 0-13.002-4.535-15.15-10.838l6.91-4.29c.45.699 1.064 1.128 1.74 1.128 1.33 0 2.416-1.66 2.495-3.756l15.35-9.527A15.95 15.95 0 0 1 40 24Zm-9.5 2c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4Zm-6.608 3c2.38 0 4.453 1.026 5.541 2.544.025.035.05.07.077.103.058.078.116.155.164.238.396.69.643 2.587-.674 2.115-4.72-1.542-5.187-1.6-10 0-1.653.52-1.22-1.587-.766-2.283C19.285 30.104 21.424 29 23.892 29Z"
        />
        <path d="M9.975 16.293c2.652-4.816 7.713-8.12 13.56-8.286l-13.56 8.286ZM7.592 27.589l26.702-16.574c-.474-.407-1.145-.876-1.96-1.333-1.16-.65-2.434-1.177-3.526-1.429-.545-.125-.983-.168-1.305-.154-.275.012-.383.061-.397.067l-.001.001-.028.019L9.054 19.2c-.404.256-.89.899-1.258 2.103-.355 1.16-.512 2.566-.484 3.905.02.954.131 1.774.28 2.38Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6.784 18.73c-2.357 3.555-1.611 11.435.288 11.404C9.581 37.055 16.213 42 24 42c9.941 0 18-8.059 18-18a17.94 17.94 0 0 0-5.107-12.56c.194-1.889-6.98-6.055-10.196-5.24-.88-.131-1.78-.2-2.697-.2-8.107 0-14.963 5.36-17.216 12.73Z"
        />
      </g>
      <defs>
        <clipPath id="bandaged_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBandaged);
export default ForwardRef;
