import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusShield = (
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
      <g clipPath="url(#virus-shield_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM8 23.26V11.078c-.003-.458.13-.908.382-1.295A2.421 2.421 0 0 1 9.424 8.9 36.398 36.398 0 0 1 24 6.001c5.014-.045 9.98.943 14.575 2.898.428.19.79.498 1.043.884.253.387.385.837.382 1.295V23.26c0 5.905-2.678 14.087-14.233 18.42a5.04 5.04 0 0 1-3.534 0C10.673 37.34 8 29.217 8 23.26Zm9.09.883h1.077c.154.792.466 1.527.9 2.173l-.667.668a1.143 1.143 0 0 0-1.608 1.624l1.6 1.6a1.143 1.143 0 0 0 1.624-1.608l.668-.668a5.907 5.907 0 0 0 2.173.901v1.077a1.143 1.143 0 0 0 .343 2.233h1.6a1.143 1.143 0 0 0 .343-2.233v-1.077a5.92 5.92 0 0 0 2.631-1.242l1.01 1.01a1.143 1.143 0 0 0 1.624 1.607l1.6-1.6a1.143 1.143 0 0 0-1.608-1.624l-1.166-1.167c.279-.516.483-1.08.6-1.674h1.076a1.143 1.143 0 0 0 2.233-.343v-1.6a1.143 1.143 0 0 0-2.233-.343h-1.077a5.91 5.91 0 0 0-.9-2.173l.667-.668a1.143 1.143 0 0 0 1.608-1.624l-1.6-1.6a1.143 1.143 0 0 0-1.624 1.608l-.668.668a5.912 5.912 0 0 0-2.173-.901V16.09a1.143 1.143 0 0 0-.343-2.233h-1.6a1.143 1.143 0 0 0-.343 2.233v1.077a5.91 5.91 0 0 0-2.173.9l-.668-.667a1.143 1.143 0 0 0-1.624-1.608l-1.6 1.6a1.143 1.143 0 0 0 1.608 1.624l.668.668a5.911 5.911 0 0 0-.901 2.173H17.09a1.143 1.143 0 0 0-2.233.343v1.6a1.143 1.143 0 0 0 2.233.343Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="virus-shield_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusShield);
export default ForwardRef;
