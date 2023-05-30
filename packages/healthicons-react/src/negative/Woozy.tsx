import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWoozy = (
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
      <g
        clipPath="url(#woozy_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#333"
      >
        <path d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-7-2c0 2.21-1.12 4-2.5 4S28 24.21 28 22s1.12-4 2.5-4 2.5 1.79 2.5 4Zm-16.406 9.38-.002.001a1 1 0 0 1-1.07-1.69l.536.844-.536-.844.004-.002.006-.004.016-.01a4.053 4.053 0 0 1 .236-.136 9.001 9.001 0 0 1 2.857-.98c1.74-.276 3.983-.027 5.857 1.994l7.564.919a1 1 0 0 1 .416 1.837l-.536-.844.536.844h-.002l-.002.002-.006.004-.016.01a4.053 4.053 0 0 1-.236.136 9.001 9.001 0 0 1-2.857.98c-1.823.29-4.2.002-6.126-2.3-1.359-1.623-2.952-1.817-4.279-1.607a6.998 6.998 0 0 0-2.358.845h-.002Zm-1.851-9.03c-.12.738.381 1.445 1.064 1.883.714.457 1.732.707 2.93.53a3.794 3.794 0 0 0 2.654-1.666c.504-.763.712-1.693.48-2.381a.5.5 0 0 0-.818-.204c-1.796 1.705-3.824 2.124-5.643 1.449a.5.5 0 0 0-.667.389Z" />
        <path d="M0 0h48v48H0V0Zm42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" />
      </g>
      <defs>
        <clipPath id="woozy_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWoozy);
export default ForwardRef;
