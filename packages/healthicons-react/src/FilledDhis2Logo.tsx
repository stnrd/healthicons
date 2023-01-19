import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledDhis2Logo = (
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
      <path
        fill="#333"
        d="m24.959 15.301 9.329 5.905-1.74 1.266-8.623-5.458-8.539 5.456-1.728-1.27 9.227-5.894a1.924 1.924 0 0 1 2.074-.005Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6.835 20.913c-1.158-.85-1.102-2.649.106-3.42L22.885 7.305a1.924 1.924 0 0 1 2.074-.005l16.093 10.187c1.217.77 1.273 2.58.105 3.43l-16.091 11.71c-.686.5-1.601.497-2.286-.005L6.835 20.912Zm1.183-1.736L23.925 9.014l16.057 10.164.005.003.001.003a.12.12 0 0 1 .012.051.127.127 0 0 1-.01.055.008.008 0 0 1-.002.005l-.007.006-16.055 11.681L8.019 19.301a.037.037 0 0 1-.007-.006l-.003-.006A.126.126 0 0 1 8 19.235a.12.12 0 0 1 .012-.051l.001-.003.005-.004Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="m8.237 24.664 1.728 1.27-1.947 1.243a.036.036 0 0 0-.005.004l-.001.003a.12.12 0 0 0-.012.05.126.126 0 0 0 .011.059.02.02 0 0 0 .001.002l.007.006 15.907 11.681 16.055-11.681.007-.006.001-.002.002-.003a.127.127 0 0 0 .009-.055.12.12 0 0 0-.012-.051l-.001-.003-.005-.003-1.98-1.254 1.74-1.265 1.31.829c1.217.77 1.273 2.58.105 3.43L25.066 40.627c-.686.5-1.601.497-2.286-.005L6.835 28.912c-1.158-.85-1.102-2.648.106-3.42l1.296-.828Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledDhis2Logo);
export default ForwardRef;
