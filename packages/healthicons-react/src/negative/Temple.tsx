import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTemple = (
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
      <g clipPath="url(#temple_svg__a)" fill="#000">
        <path d="M13 36.048v6h2v-6h-2ZM19 42.048h-2v-6h14v6h-2v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2ZM33 42.048v-6h2v6h-2ZM27 18.048h2v-4H19v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1ZM17 25.048v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-4H17Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17 14.048s-3 .286-3-3.286c4 4.286 10-6.714 10-6.714s6 11 10 6.714c0 3.572-3 3.286-3 3.286v4.632c.962 1.649 3.728 5.781 6 3.257 0 3.11-2.8 3.11-2.8 3.11H33v4.948c.94 1.797 3.251 5.317 6 2.942 0 1.67-1.038 2.444-2 2.802v8.309H11v-8.309c-.961-.358-2-1.131-2-2.802 3.6 3.11 6-3.89 6-3.89v-4h-1.2s-2.8 0-2.8-3.11c2.8 3.11 6-3.89 6-3.89v-4Z"
        />
      </g>
      <defs>
        <clipPath id="temple_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTemple);
export default ForwardRef;
