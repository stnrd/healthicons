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
      <path
        d="M30.5 26c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4-2.5 1.79-2.5 4 1.12 4 2.5 4ZM14.743 22.35c-.12.738.381 1.445 1.064 1.883.714.457 1.732.707 2.93.53a3.794 3.794 0 0 0 2.654-1.666c.504-.763.712-1.692.48-2.381a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.643 1.448a.5.5 0 0 0-.667.39Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m16.592 31.381.002-.001.028-.017c.026-.015.067-.04.123-.07a6.998 6.998 0 0 1 2.209-.76c1.327-.21 2.92-.015 4.28 1.609 1.924 2.3 4.302 2.588 6.125 2.3a9.001 9.001 0 0 0 3.04-1.085l.026-.016.027-.016.016-.01.006-.004.002-.001.002-.001a1 1 0 0 0-.416-1.837l-7.564-.919c-1.874-2.02-4.118-2.27-5.857-1.995a9.001 9.001 0 0 0-3.04 1.085l-.008.005-.045.027-.016.01-.006.004-.002.001-.002.001a1 1 0 0 0 1.07 1.69Zm15.35 1.084.536.844-.536-.844Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWoozy);
export default ForwardRef;
