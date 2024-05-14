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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 11.078V23.26c0 5.956 2.673 14.08 14.233 18.42a5.04 5.04 0 0 0 3.534 0C37.322 37.347 40 29.165 40 23.26V11.078a2.334 2.334 0 0 0-.382-1.295 2.42 2.42 0 0 0-1.043-.884A36.398 36.398 0 0 0 24 6.001 36.398 36.398 0 0 0 9.424 8.9c-.427.19-.79.498-1.042.884A2.334 2.334 0 0 0 8 11.078Zm10.167 13.065H17.09a1.143 1.143 0 0 1-2.233-.343v-1.6a1.143 1.143 0 0 1 2.233-.343h1.077a5.911 5.911 0 0 1 .9-2.173l-.667-.668a1.143 1.143 0 0 1-1.608-1.624l1.6-1.6a1.143 1.143 0 0 1 1.624 1.608l.668.668a5.91 5.91 0 0 1 2.173-.901V16.09a1.143 1.143 0 0 1 .343-2.233h1.6a1.143 1.143 0 0 1 .343 2.233v1.077a5.912 5.912 0 0 1 2.173.9l.668-.667a1.143 1.143 0 0 1 1.624-1.608l1.6 1.6a1.143 1.143 0 0 1-1.608 1.624l-.668.668a5.91 5.91 0 0 1 .901 2.173h1.077a1.143 1.143 0 0 1 2.233.343v1.6a1.143 1.143 0 0 1-2.233.343h-1.077a5.902 5.902 0 0 1-.6 1.674l1.167 1.167a1.143 1.143 0 0 1 1.608 1.624l-1.6 1.6a1.143 1.143 0 0 1-1.624-1.608l-1.01-1.01a5.92 5.92 0 0 1-2.631 1.243v1.077a1.143 1.143 0 0 1-.343 2.233h-1.6a1.143 1.143 0 0 1-.343-2.233v-1.077a5.907 5.907 0 0 1-2.173-.9l-.668.667a1.143 1.143 0 0 1-1.624 1.608l-1.6-1.6a1.143 1.143 0 0 1 1.608-1.624l.668-.668a5.912 5.912 0 0 1-.901-2.173Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusShield);
export default ForwardRef;
