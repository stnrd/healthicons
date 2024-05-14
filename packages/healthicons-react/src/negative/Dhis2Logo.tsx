import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDhis2Logo = (
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
      <g
        clipPath="url(#dhis2-logo_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <path d="M24.925 9.014 9.018 19.177l-.005.004-.001.003a.12.12 0 0 0-.012.05c0 .027.005.046.01.055 0 .004.002.005.002.006h.001l.006.006 15.907 11.681 16.055-11.681.007-.006.001-.002.002-.003a.127.127 0 0 0 .009-.055.12.12 0 0 0-.012-.051l-.001-.003-.005-.003L24.926 9.014Zm1.034 6.287 9.329 5.905-1.74 1.266-8.623-5.458-8.539 5.456-1.728-1.27 9.227-5.894a1.924 1.924 0 0 1 2.074-.005Z" />
        <path d="M0 0h48v48H0V0Zm7.941 17.492c-1.208.772-1.264 2.57-.106 3.42l15.944 11.71c.685.502 1.6.504 2.286.005l16.092-11.709c1.168-.85 1.112-2.66-.105-3.43L25.959 7.301a1.924 1.924 0 0 0-2.074.005L7.94 17.492Zm1.296 7.172 1.728 1.27-1.947 1.243a.051.051 0 0 0-.005.004l-.001.003a.12.12 0 0 0-.012.05c0 .027.005.046.01.055 0 .004.002.006.002.006l.007.006 15.907 11.681 16-11.64c-.754 2.165-.181.531.006-.006l.049-.035.007-.006.001-.002.002-.003a.127.127 0 0 0 .009-.055.12.12 0 0 0-.012-.051l-.001-.003-.055.155-.007.005.057-.163-1.98-1.254 1.74-1.265 1.31.829c1.217.77 1.273 2.58.105 3.43L26.066 40.627c-.686.5-1.601.497-2.286-.005L7.835 28.912c-1.158-.85-1.102-2.648.106-3.42l1.296-.828Z" />
      </g>
      <defs>
        <clipPath id="dhis2-logo_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDhis2Logo);
export default ForwardRef;
