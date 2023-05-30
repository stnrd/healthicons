import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialDistancingAlt = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM19.033 18.156C20.342 16.782 22.127 16 24 16c1.873 0 3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144ZM24 18c-1.31 0-2.577.546-3.518 1.535A5.464 5.464 0 0 0 19 23.3V25h1.571a1 1 0 0 1 .996.905l.77 8.095h3.325l.771-8.095A1 1 0 0 1 27.43 25H29v-1.7a5.464 5.464 0 0 0-1.482-3.765C26.578 18.545 25.31 18 24 18Z"
        fill="#333"
      />
      <path
        d="M13.495 29.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42c4.789 0 9.17-.772 12.39-2.055 1.609-.64 2.977-1.428 3.96-2.354.984-.928 1.65-2.065 1.65-3.365 0-1.463-.84-2.715-2.038-3.706-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11.95.786 1.313 1.526 1.313 2.166 0 .57-.286 1.216-1.022 1.909-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40c-4.6 0-8.719-.745-11.65-1.913-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165.944-.781 2.363-1.512 4.181-2.111ZM8 22v-3h6v-2H8v-3H6v8h2ZM40 22h2v-8h-2v3h-6v2h6v3Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSocialDistancingAlt);
export default ForwardRef;
