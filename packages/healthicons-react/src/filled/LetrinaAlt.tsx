import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLetrinaAlt = (
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
      <path d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2H6V8ZM12 28v-3H6V12h12v11h24c0 8.43-5.703 13.35-13 13.94V37h-5.5v2H29v3H14.5V30c-.747 0-2.5-.5-2.5-2Z" />
      <path d="M20 20a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H21a1 1 0 0 1-1-1Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLetrinaAlt);
export default ForwardRef;
