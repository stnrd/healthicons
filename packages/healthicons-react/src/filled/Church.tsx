import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChurch = (
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
      <path d="M23 13.643V11h-3V9h3V6h2v3h3v2h-3v2.643L30.222 17s.778.5.778 1.5V42h-4v-9a3 3 0 1 0-6 0v9h-4V18.5c0-1 .778-1.5.778-1.5L23 13.643ZM7.5 26.5c-.961.278-1.5 1.08-1.5 2V42h9V24l-7.5 2.5ZM42 28.5c0-.92-.539-1.722-1.5-2L33 24v18h9V28.5Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChurch);
export default ForwardRef;
